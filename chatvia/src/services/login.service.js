import { postData } from "./context.service";

const url="http://localhost:4000/checkUser/";
 export function checkUser(data){
    return postData(url,data);
 }