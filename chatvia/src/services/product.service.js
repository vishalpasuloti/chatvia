import { getData,postData } from "./context.service";
const getRegisterurl="http://localhost:4000/getreg/"

export function getRegister(){
    return getData(getRegisterurl);
}