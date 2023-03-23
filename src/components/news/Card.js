import React ,{useState,useEffect} from "react"
import  "./Card.css"

function Card(props){
   var [newUrl,setUrl] = useState("");
    useEffect(()=>{
        setUrl("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPlpPuTr1hFhxk1EayO8GB8nHwwAYG-sT365PuORawAPX0wZ203KxdAy-CnUBWriJvOhc&usqp=CAU")
},[]);
    return (<>
        <div className="news_card" >
            
            <div className="news_item">
                <a href={props.targetLink} target="_blank"><h2 className="new_heading">{props.heading}</h2></a>
                
                <div className="content">{props.desc} </div>
            </div>
            <div className="image">
                <img src={props.img_url==null ? newUrl : props.img_url} alt="News" />
            </div>
        </div>
    </>)
}

export default Card;
