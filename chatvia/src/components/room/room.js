import React from "react";
import { useParams } from "react-router-dom";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
export function Room(){
    const {roomId}=useParams();
    const myMeeting=async(element)=>{
        const appID=1618801765 ;
        const serverSecret="6a4c8eadb1ad6a740d184f32c49dede7";
        const kitToken=ZegoUIKitPrebuilt.generateKitTokenForTest(appID,serverSecret,roomId, Date.now().toString(),"Pasuloti Vishal");

        const zc=ZegoUIKitPrebuilt.create(kitToken);
        zc.joinRoom({
            container:element,
            sharedLinks:[{
                name:'copy Link',
                url:`http://localhost:3000/room/${roomId}`,

            }],
            scenario:{
                mode:ZegoUIKitPrebuilt.OneONoneCall,
            },
            showScreenSharingButton:false,
        });

    };
        
    return(
        <div>
<div ref={myMeeting}/>
        </div>
    )
}
export default Room;