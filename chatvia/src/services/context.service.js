import axios from "axios";

//get
export function getData(url){
    return axios.get(url);
}

//post
export function postData(url,data){
    let options={
        headers:{
            "content-type":"multipart/form-data"
        }
    }
    return axios.post(url,data,options);
}

//update=put

export function updateData(url,id,data){
    return axios.put(url+id,data);
}

//delete
export function deleteData(url,id){
    return axios.delete(url+id);
}
