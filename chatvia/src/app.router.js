import Layout from "./components/layout/layout";
import Login from "./components/registration/login/login";
import { Route,Routes } from "react-router-dom";
import { Reset } from "./components/reset/reset";
import Menu from "./components/layout/menu/menu";
import { Contacts } from "./components/contacts/contacts";
import View from "./components/view/view";
import MyProfile from "./components/myprofile/myprofile";
import Profile from "./components/profile/profile";
import Chats from "./components/chats/chats";
import Vishal from "./components/vishal/vishal";
import Chat1 from "./components/chats/chat1";
import Avinash from "./components/avinash/avinash";
import Register1 from "./components/registration/register/register1";
import Groups from "./components/groups/groups";
import Setting from "./components/setting/setting";
import Raghav from "./components/raghav/raghav";
import Room from "./components/room/room";
export function AppRouter(){
    return(
        <Routes>
            <Route path="" element={<Register1></Register1>}></Route>
            <Route path="/login" element={<Login></Login>}></Route>
            <Route path="/reset" element={<Reset></Reset>}></Route>
            <Route path="/menu" element={<Layout><Menu></Menu></Layout>}></Route>
            <Route path="/contacts" element={<Layout><Contacts></Contacts></Layout>}></Route>
            <Route path="/view" element={<Layout><View></View></Layout>}></Route>
            <Route path="/myprofile" element={<Layout><MyProfile></MyProfile></Layout>}></Route>
            <Route path="/profile" element={<Layout><Profile></Profile></Layout>}></Route>
            <Route path="/chats" element={<Layout><Chats></Chats></Layout>}></Route>
            <Route path="/chat1" element={<Layout><Chat1></Chat1></Layout>}></Route>
            <Route path="/vishal" element={<Layout><Vishal></Vishal></Layout>}></Route>
            <Route path="/avinash" element={<Layout><Avinash></Avinash></Layout>}></Route>
            <Route path="/register1" element={<Register1></Register1>}></Route>
            <Route path="/groups" element={<Layout><Groups></Groups></Layout>}></Route>
         <Route path="/setting" element={<Layout><Setting></Setting></Layout>}></Route>
          <Route path="/editprofile/:id" element={<Register1></Register1>}></Route>  
          <Route path="/raghav" element={<Layout><Raghav></Raghav></Layout>}></Route>
          <Route path="/room/:roomId" element={<Room></Room>}></Route>
        </Routes>
    )
}