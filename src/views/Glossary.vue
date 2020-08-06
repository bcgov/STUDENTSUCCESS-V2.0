<template>
  <div class="glossary">
    <h1>Glossary</h1>
    <h1>#</h1>
    <b-list-group v-for="item in hash" :key="item.gid">
      <b-list-group-item>
        <h2>{{ item.title }} </h2><br> 
        <span v-html=" item.definition"></span>
      </b-list-group-item>
    </b-list-group>
    <h1>A</h1>
    <b-list-group v-for="item in A" :key="item.gid">
      <b-list-group-item>
        <h2>{{ item.title }} </h2><br> 
        <span v-html=" item.definition"></span>
      </b-list-group-item>
    </b-list-group>
    <h1>B</h1>
    <b-list-group v-for="item in B" :key="item.gid">
      <b-list-group-item>
        <h2>{{ item.title }} </h2><br> 
        <span v-html=" item.definition"></span>
      </b-list-group-item>
    </b-list-group>
     <h1>C</h1>
    <b-list-group v-for="item in C" :key="item.gid">
      <b-list-group-item>
        <h2>{{ item.title }} </h2><br> 
        <span v-html=" item.definition"></span>
      </b-list-group-item>
    </b-list-group>
     <h1>D</h1>
        <b-list-group v-for="item in D" :key="item.gid">
      <b-list-group-item>
        <h2>{{ item.title }} </h2><br> 
        <span v-html=" item.definition"></span>
      </b-list-group-item>
    </b-list-group>
    <h1>E</h1>
    <b-list-group v-for="item in E" :key="item.gid">
      <b-list-group-item>
        <h2>{{ item.title }} </h2><br> 
        <span v-html=" item.definition"></span>
      </b-list-group-item>
    </b-list-group>
    <h1>F</h1>
    <b-list-group v-for="item in F" :key="item.gid">
      <b-list-group-item>
        <h2>{{ item.title }} </h2><br> 
        <span v-html=" item.definition"></span>
      </b-list-group-item>
    </b-list-group>
    <h1>G</h1>
    <b-list-group v-for="item in G" :key="item.gid">
      <b-list-group-item>
        <h2>{{ item.title }} </h2><br> 
        <span v-html=" item.definition"></span>
      </b-list-group-item>
    </b-list-group>
    <h1>H</h1>
    <b-list-group v-for="item in H" :key="item.gid">
      <b-list-group-item>
        <h2>{{ item.title }} </h2><br> 
        <span v-html=" item.definition"></span>
      </b-list-group-item>
    </b-list-group>
    <h1>I</h1>
    <b-list-group v-for="item in I" :key="item.gid">
      <b-list-group-item>
        <h2>{{ item.title }} </h2><br> 
        <span v-html=" item.definition"></span>
      </b-list-group-item>
    </b-list-group>
    <h1>J</h1>
    <b-list-group v-for="item in J" :key="item.gid">
      <b-list-group-item>
        <h2>{{ item.title }} </h2><br> 
        <span v-html=" item.definition"></span>
      </b-list-group-item>
    </b-list-group>
    <h1>K</h1>
    <b-list-group v-for="item in K" :key="item.gid">
      <b-list-group-item>
        <h2>{{ item.title }} </h2><br> 
        <span v-html=" item.definition"></span>
      </b-list-group-item>
    </b-list-group>
    <h1>L</h1>
    <b-list-group v-for="item in L" :key="item.gid">
      <b-list-group-item>
        <h2>{{ item.title }} </h2><br> 
        <span v-html=" item.definition"></span>
      </b-list-group-item>
    </b-list-group>
    <h1>M</h1>
    <b-list-group v-for="item in M" :key="item.gid">
      <b-list-group-item>
        <h2>{{ item.title }} </h2><br> 
        <span v-html=" item.definition"></span>
      </b-list-group-item>
    </b-list-group>
    <h1>N</h1>
    <b-list-group v-for="item in N" :key="item.gid">
      <b-list-group-item>
        <h2>{{ item.title }} </h2><br> 
        <span v-html=" item.definition"></span>
      </b-list-group-item>
    </b-list-group>
    <h1>O</h1>
    <b-list-group v-for="item in O" :key="item.gid">
      <b-list-group-item>
        <h2>{{ item.title }} </h2><br> 
        <span v-html=" item.definition"></span>
      </b-list-group-item>
    </b-list-group>
    <h1>P</h1>
    <b-list-group v-for="item in P" :key="item.gid">
      <b-list-group-item>
        <h2>{{ item.title }} </h2><br> 
        <span v-html=" item.definition"></span>
      </b-list-group-item>
    </b-list-group>
    <h1>Q</h1>
    <b-list-group v-for="item in Q" :key="item.gid">
      <b-list-group-item>
        <h2>{{ item.title }} </h2><br> 
        <span v-html=" item.definition"></span>
      </b-list-group-item>
    </b-list-group>
    <h1>R</h1>
    <b-list-group v-for="item in R" :key="item.gid">
      <b-list-group-item>
        <h2>{{ item.title }} </h2><br> 
        <span v-html=" item.definition"></span>
      </b-list-group-item>
    </b-list-group>
    <h1>S</h1>
    <b-list-group v-for="item in S" :key="item.gid">
      <b-list-group-item>
        <h2>{{ item.title }} </h2><br> 
        <span v-html=" item.definition"></span>
      </b-list-group-item>
    </b-list-group>
    <h1>T</h1>
    <b-list-group v-for="item in T" :key="item.gid">
      <b-list-group-item>
        <h2>{{ item.title }} </h2><br> 
        <span v-html=" item.definition"></span>
      </b-list-group-item>
    </b-list-group>
    <h1>U</h1>
    <b-list-group v-for="item in U" :key="item.gid">
      <b-list-group-item>
        <h2>{{ item.title }} </h2><br> 
        <span v-html=" item.definition"></span>
      </b-list-group-item>
    </b-list-group>
    <h1>V</h1>
    <b-list-group v-for="item in V" :key="item.gid">
      <b-list-group-item>
        <h2>{{ item.title }} </h2><br> 
        <span v-html=" item.definition"></span>
      </b-list-group-item>
    </b-list-group>
    <h1>W</h1>
    <b-list-group v-for="item in W" :key="item.gid">
      <b-list-group-item>
        <h2>{{ item.title }} </h2><br> 
        <span v-html=" item.definition"></span>
      </b-list-group-item>
    </b-list-group>
    <h1>X</h1>
    <b-list-group v-for="item in X" :key="item.gid">
      <b-list-group-item>
        <h2>{{ item.title }} </h2><br> 
        <span v-html=" item.definition"></span>
      </b-list-group-item>
    </b-list-group>
    <h1>Y</h1>
    <b-list-group v-for="item in Y" :key="item.gid">
      <b-list-group-item>
        <h2>{{ item.title }} </h2><br> 
        <span v-html=" item.definition"></span>
      </b-list-group-item>
    </b-list-group>
    <h1>Z</h1>
    <b-list-group v-for="item in Z" :key="item.gid">
      <b-list-group-item>
        <h2>{{ item.title }} </h2><br> 
        <span v-html=" item.definition"></span>
      </b-list-group-item>
    </b-list-group>
  </div>
  
</template>
<script>
import axios from "axios";
export default {
  name: "Glossary",
  data() {
    return {
      glossaryData: [],
      hash: [], A: [], B: [], C: [], D: [], E: [], F: [], G: [], H: [], I: [], J: [], K: [], L: [], M: [], N: [], O: [], P: [], Q: [], R: [],
      S: [], T: [], U: [], V: [], W: [], X: [], Y: [], Z: [],
    };
  },
  created() {
    axios
      .get("https://test.studentsuccess.gov.bc.ca/glossary-api")
      .then((res) => {
        this.glossaryData = res.data.glossary_entries;
        this.A = res.data.glossary_entries.A;
        this.B = res.data.glossary_entries.B;
        this.C = res.data.glossary_entries.C;
        this.D = res.data.glossary_entries.D;
        this.E = res.data.glossary_entries.E;
        this.F = res.data.glossary_entries.F;
        this.G = res.data.glossary_entries.G;
        this.H = res.data.glossary_entries.H;
        this.I = res.data.glossary_entries.I;
        this.J = res.data.glossary_entries.J;
        this.K = res.data.glossary_entries.K;
        this.L = res.data.glossary_entries.L;
        this.M = res.data.glossary_entries.M;
        this.N = res.data.glossary_entries.N;
        this.O = res.data.glossary_entries.O;
        this.P = res.data.glossary_entries.P;
        this.Q = res.data.glossary_entries.Q;
        this.R = res.data.glossary_entries.R;
        this.S = res.data.glossary_entries.S;
        this.T = res.data.glossary_entries.T;
        this.U = res.data.glossary_entries.U;
        this.V = res.data.glossary_entries.V;
        this.W = res.data.glossary_entries.W;
        this.X = res.data.glossary_entries.X;
        this.Y = res.data.glossary_entries.Y;
        this.Z = res.data.glossary_entries.Z;
        this.hash = res.data.glossary_entries.hash;

        console.log(this.hash);
        //const titles = []
        //for (let key in data){
        //  const title = data[key]
        //  title.en_title = key
        //  titles.push(title)
        // }
        // console.log(users)
        // this.email = users[0].email
        //console.log(this.glossaryData);
      })
      .catch((error) => console.log(error));
  },
};
</script>