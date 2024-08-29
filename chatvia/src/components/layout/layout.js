
import Menu from "./menu/menu";
export const Layout=(props)=>{
    return(
    <div>
        <Menu></Menu>
        {
            props.children 
        }
       

   
    </div>
   
    
    )
}
export default Layout;