import React,{useState,useEffect} from "react"
import Card from "./Card";
import './New.css'

function News(props){
    return (<>
        <div className="news" id="news">
            {
                console.log(props.data,"ok done")
            }
        {
            props.data?.map((value,i)=>(
                <Card targetLink={value.url} heading={value.title} desc = {value.description} key={i} img_url={value.urlToImage}></Card>
            ))
        }
    </div>
    </>)
}

export default News;
