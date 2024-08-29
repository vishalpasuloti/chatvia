export function setUserDataInCookie(data){
    let date=new Date();
    date.setFullYear(date.getFullYear()+1);
    document.cookie=`user=${JSON.stringify(data)}; expires=${date};path='/'`;
    }
    export function getUserdataFromCookies(){
        if(document.cookie && document.cookie.split("=").length >0 && document.cookie.split("=")[1] !=='null'){
            return JSON.parse (document.cookie.split("=")[1]);
    
        }
        else{
            return null;
        }
    }