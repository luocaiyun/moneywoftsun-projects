import {BASEURL} from "../common/Config"
export default {
    async getInfoPage(){
        let res= await fetch(`${BASEURL}/info`);
        let data=await res.json();
        return data;
    }
}
