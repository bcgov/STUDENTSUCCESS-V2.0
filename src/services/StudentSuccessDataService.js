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
  }
}