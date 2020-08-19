<template>
 <div class='dashboard'>
  <div id="example-1">
      <button v-on:click="load()" class="btn btn-primary">Completion Rate</button>
    </div>
    <div class="hor">
      <div id="viz"></div>      
    </div>
 </div>
</template>

<script>
import embed from 'vega-embed'
import StudentSuccessDataService from "@/services/StudentSuccessDataService.js";
export default {
  data(){
    return{
      def: null,
      info:null,
      realinfo:null,
      index:0,
      did: this.$route.params.did,
    }
  },
  //props: ['did'],
  watch:{
    def(v){
      if(v) this.draw()
    }
  },
  //Grabs the data when the component is mounted
  mounted () {
    StudentSuccessDataService.getCompletionRates(this.did)
      .then((response) => {
        this.info = response.data.data.completion_rate;
        console.log('Completion Rate: ' + this.info);
        //this.info = this.info.data.completion_rate
      })
      // eslint-disable-next-line no-unused-vars
      .catch((error) => {
        //console.log('There was an error:', error.response)
      })
  },
  methods:{
    async load(){
     //console.log('did from completion rate component ' + this.did);   
     //Cleans up the data from the api call    
     //this.info = this.info.data[0].data;  
     //this.info = this.info.data[0];   
     //console.log('Completion Rate - this.info: ' + this.info.data[0]);
     this.def = {
    "$schema": "https://vega.github.io/schema/vega/v5.json",
    "width": 756,
    "padding": 5,
    "config": {
        "axisBand": {
            "bandPosition": 1,
            "tickExtra": true,
            "tickOffset": 0,
            "labelFontSize": 11,
            "labelPadding": 13,
            "tickSize": 120
        }
    },
    "signals": [
        {
            "name": "fields",
            "value": [
                "All Students",
                "Indigenous",
                "Special Needs",
                "BC Residents"
            ]
        },
        {
            "name": "plotWidth",
            "value": 30
        },
        {
            "name": "height",
            "update": "(plotWidth + 10) * length(fields)"
        },
        {
            "name": "selected",
            "value": "",
            "on": [
                {
                    "events": "arc:click!",
                    "update": "datum"
                },
                {
                    "events": "dblclick!",
                    "update": "''"
                }
            ]
        }
    ],
    "title": {
        "text": {
            "signal": "'Student Group               Records'"
        },
        "anchor": "start",
        "frame": "bounds",
        "fontSize": 14,
        "fontWeight": "100",
        "dy": 18,
        "color": "#666666"
    },
    "data": [
        {
            "name": "provlvl",
            "values":this.info
        }
        ,
        {
            "name": "distminmax",
            "source": "provlvl"
        },
        {
            "name": "distcurrent",
            "source": "provlvl"
        },
        {
            "name": "quartiles",
            "source": "provlvl"
        }
    ],
    "scales": [
        {
            "name": "layout",
            "type": "band",
            "range": "height",
            "domain": {
                "data": "provlvl",
                "field": "subpop"
            }
        },
        {
            "name": "xscale",
            "type": "linear",
            "range": "width",
            "round": false,
            "domain": {
                "data": "provlvl",
                "field": "value"
            },
            "zero": true,
            "nice": true,
            "domainMax": 1
        }
    ],
    "axes": [
        {
            "orient": "bottom",
            "scale": "xscale",
            "zindex": 1,
            "format": "%",
            "labelFontSize": 15,
            "labelAlign": "",
            "labelColor": "#898989",
            "labelFlush": true
        },
        {
            "orient": "left",
            "scale": "layout",
            "tickCount": 5,
            "zindex": 1,
            "labelFontSize": 15,
            "grid": false,
            "labelAlign": "left",
            "labelColor": "#666666",
            "tickSize": 230,
            "labelPadding": 0
        },
        {
            "orient": "top",
            "scale": "xscale",
            "zindex": 1,
            "format": "%",
            "labelFontSize": 15,
            "labelAlign": "",
            "labelColor": "#666666",
            "labelFlush": true,
            "offset": 0
        }
    ],
    "marks": [
        {
            "type": "group",
            "from": {
                "facet": {
                    "data": "quartiles",
                    "name": "province",
                    "groupby": "subpop"
                }
            },
            "encode": {
                "enter": {
                    "yc": {
                        "scale": "layout",
                        "field": "subpop",
                        "band": 0.5
                    },
                    "height": {
                        "signal": "plotWidth"
                    },
                    "width": {
                        "signal": "width"
                    }
                }
            },
            "data": [
                {
                    "name": "provsummary",
                    "source": "province",
                    "transform": [
                        {
                            "type": "aggregate",
                            "fields": [
                                "value",
                                "value"
                            ],
                            "ops": [
                                "q1",
                                "q3"
                            ],
                            "as": [
                                "q1",
                                "q3"
                            ]
                        }
                    ]
                }
            ],
            "marks": [
                {
                    "type": "rect",
                    "from": {
                        "data": "province"
                    },
                    "encode": {
                        "enter": {
                            "fill": {
                                "value": "#d9d9d9"
                            },
                            "cornerRadius": {
                                "value": 1
                            },
                            "tooltip": {
                                "signal": "{'Average 25th Percentile':format(datum.percentile_25, '0.0%'),'Average 75th Percentile':format(datum.percentile_75, '0.0%')}"
                            }
                        },
                        "update": {
                            "yc": {
                                "signal": "plotWidth / 2"
                            },
                            "height": {
                                "signal": "plotWidth / .775"
                            },
                            "x": {
                                "scale": "xscale",
                                "field": "percentile_25"
                            },
                            "x2": {
                                "scale": "xscale",
                                "field": "percentile_75"
                            },
                            "stroke": {
                                "value": null
                            },
                            "zindex": {
                                "value": 0
                            }
                        },
                        "hover": {
                            "stroke": {
                                "value": "grey"
                            },
                            "zindex": {
                                "value": 1
                            }
                        }
                    }
                }
            ]
        },
        {
            "type": "group",
            "from": {
                "facet": {
                    "data": "distcurrent",
                    "name": "current",
                    "groupby": "subpop"
                }
            },
            "encode": {
                "enter": {
                    "yc": {
                        "scale": "layout",
                        "field": "subpop",
                        "band": 0.5
                    },
                    "height": {
                        "signal": "plotWidth"
                    },
                    "width": {
                        "signal": "width"
                    }
                }
            },
            "data": [
                {
                    "name": "summarycurrent",
                    "source": "current"
                }
            ],
            "marks": [
                {
                    "type": "symbol",
                    "from": {
                        "data": "summarycurrent"
                    },
                    "encode": {
                        "enter": {
                            "description": "below command turns off symbol if value is set to 'MSK'",
                            "fill": [
                                {
                                    "test": "datum['value'] =='MSK'",
                                    "value": ""
                                },
                                {
                                    "value": "#f28e2b"
                                }
                            ],
                            "width": {
                                "value": 2
                            },
                            "size": {
                                "value": 460
                            },
                            "tooltip": {
                                "signal": "{'Student Group':datum.subpop,'Completion Rate':datum.tooltip,'School Year':datum.year,'Records':datum.tooltipR,'5-year range for this district':datum.min_max_tooltip,'Typical range across B.C. (middle 50% of districts)':datum.province_percentile_tooltip}"
                            }
                        },
                        "update": {
                            "yc": {
                                "signal": "plotWidth / 2"
                            },
                            "height": {
                                "signal": "plotWidth / 50"
                            },
                            "x": {
                                "aggregate": "value",
                                "scale": "xscale",
                                "field": "value"
                            },
                            "stroke": {
                                "value": null
                            },
                            "zindex": {
                                "value": 0
                            }
                        },
                        "hover": {
                            "stroke": {
                                "value": "black"
                            },
                            "zindex": {
                                "value": 0
                            }
                        }
                    }
                }
            ]
        },
        {
            "type": "group",
            "from": {
                "facet": {
                    "data": "distminmax",
                    "name": "district",
                    "groupby": "subpop"
                }
            },
            "encode": {
                "enter": {
                    "yc": {
                        "scale": "layout",
                        "field": "subpop",
                        "band": 0.5
                    },
                    "height": {
                        "signal": "plotWidth"
                    },
                    "width": {
                        "signal": "width"
                    }
                }
            },
            "data": [
                {
                    "name": "distsummary",
                    "source": "district",
                    "transform": [
                        {
                            "type": "aggregate",
                            "fields": [
                                "value",
                                "value"
                            ],
                            "ops": [
                                "min",
                                "max"
                            ],
                            "as": [
                                "min",
                                "max"
                            ]
                        }
                    ]
                }
            ],
            "marks": [
                {
                    "type": "rect",
                    "from": {
                        "data": "district"
                    },
                    "encode": {
                        "enter": {
                            "fill": {
                                "value": "#f28e2b"
                            },
                            "tooltip": {
                                "signal": "{'Student Group':datum.subpop,'Completion Rate':datum.tooltip,'School Year':datum.year,'Records':datum.tooltipR,'5-year range for this district':datum.min_max_tooltip,'Typical range across B.C. (middle 50% of districts)':datum.province_percentile_tooltip}"
                            }
                        },
                        "update": {
                            "yc": {
                                "signal": "plotWidth / 2",
                                "offset": -0.5
                            },
                            "x": {
                                "scale": "xscale",
                                "field": "min"
                            },
                            "x2": {
                                "scale": "xscale",
                                "field": "max"
                            },
                            "stroke": {
                                "value": null
                            },
                            "zindex": {
                                "value": 10
                            },
                            "height": {
                                "value": 4.5
                            }
                        },
                        "hover": {
                            "stroke": {
                                "value": "black"
                            },
                            "strokeWidth": {
                                "value": 1
                            },
                            "zindex": {
                                "value": 10
                            },
                            "height": {
                                "value": 4
                            }
                        }
                    }
                }
            ]
        },
        {
            "type": "group",
            "from": {
                "facet": {
                    "data": "distcurrent",
                    "name": "rec",
                    "groupby": "subpop"
                }
            },
            "encode": {
                "enter": {
                    "yc": {
                        "scale": "layout",
                        "field": "subpop",
                        "band": 0.5
                    },
                    "height": {
                        "signal": "plotWidth"
                    },
                    "width": {
                        "signal": "width"
                    }
                }
            },
            "data": [
                {
                    "name": "reccurrent",
                    "source": "rec"
                }
            ],
            "marks": [
                {
                    "type": "text",
                    "from": {
                        "data": "reccurrent"
                    },
                    "encode": {
                        "enter": {
                            "text": {
                                "field": "records"
                            },
                            "fontSize": {
                                "value": 15
                            },
                            "fill": [
                                {
                                    "test": "datum['records'] =='NaN'",
                                    "value": ""
                                },
                                {
                                    "value": "#898989"
                                }
                            ]
                        },
                        "update": {
                            "yc": {
                                "signal": "plotWidth / 1.5"
                            },
                            "height": {
                                "signal": "plotWidth / 50"
                            },
                            "x": {
                                "offset": -80
                            },
                            "stroke": {
                                "value": null
                            },
                            "zindex": {
                                "value": 0
                            }
                        }
                    }
                }
            ]
        },
        {
            "type": "group",
            "from": {
                "facet": {
                    "data": "distcurrent",
                    "name": "rec",
                    "groupby": "subpop"
                }
            },
            "encode": {
                "enter": {
                    "yc": {
                        "scale": "layout",
                        "field": "subpop",
                        "band": 0.5
                    },
                    "height": {
                        "signal": "plotWidth"
                    },
                    "width": {
                        "signal": "width"
                    }
                }
            },
            "data": [
                {
                    "name": "reccurrent",
                    "source": "rec"
                }
            ],
            "marks": [
                {
                    "type": "text",
                    "from": {
                        "data": "reccurrent"
                    },
                    "encode": {
                        "enter": {
                            "text": {
                                "field": "records2"
                            },
                            "fontSize": {
                                "value": 15
                            },
                            "fill": [
                                {
                                    "test": "datum['records2'] !=='MSK'",
                                    "value": ""
                                },
                                {
                                    "value": "#898989"
                                }
                            ]
                        },
                        "update": {
                            "yc": {
                                "signal": "plotWidth / 1.5"
                            },
                            "height": {
                                "signal": "plotWidth / 50"
                            },
                            "x": {
                                "offset": -80
                            },
                            "stroke": {
                                "value": null
                            },
                            "zindex": {
                                "value": 0
                            }
                        }
                    }
                }
            ]
        }
    ]
}
    },
    async draw(){
      let struct = this.def
      //struct.width = 'container'
      //struct.height = 'container'
      await embed('#viz', struct, {actions:false})
    }
  }
}
</script>