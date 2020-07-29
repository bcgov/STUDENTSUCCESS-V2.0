import axios from 'axios'

const apiClient = axios.create({
  baseURL: process.env.VUE_APP_API_HOST,
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
}
)

export default {
  getChart(school_district, report) {
    return apiClient.get('/school-district-api/' + school_district + "/" + report);
  },
  
  getSchoolDistrictInformation(school_district) {
    
    return apiClient.get('/school-district-api' + "/" + school_district);
  },
  getAllSchoolDistricts() {
    
    return apiClient.get('/all/school-districts-api');
  },
  getGlossary(){
    return apiClient.get('/glossary');
  },
  getAllCities(){
    return apiClient.get('/all/cities-api');
  },
  getSchoolsByCity(city_name){
    console.log("List of schools in City " + city_name);
    return apiClient.get('/all/cities-api');
    //return apiClient.get('/schools/city/' + city_name);
  },
  getSchoolInformation(school_id) {
    
    return apiClient.get('/school' + "/" + school_id);
  },
  getSchoolsByDistrict(did){
    console.log("List of schools in district " + did);
    return apiClient.get('/all/school-districts-api');
  
    //return apiClient.get('/schools/district/' + did);
  }
}