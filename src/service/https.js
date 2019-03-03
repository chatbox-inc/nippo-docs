import axios from "axios"
import yaml from 'js-yaml';

export default {
    async loadDoc(){
        const {data} = await axios.get("/specs.yml")
        const doc = yaml.safeLoad(data)
        return doc
    },
    async loadPage(path){
        const {data} = await axios.get(`/pages/${path}/index.yml`)
        const {page} = yaml.safeLoad(data)
        return page
    }
}