import React,{useState,useEffect} from "react";
import './Navbar.css'
var apikey = "3cc3e2220f4943819f3fd2c62a27e5d3"

function Navbar(props){
    var [newUrl,setUrl] = useState("");
    var [inputValue,setValue] = useState("")
    var [preInputValue,setpreValue] = useState("Search Using Keyword like tesla")
    var [element,setelement] = useState(null)
    useEffect(()=>{
        var node = document.getElementById("news")
        setelement(node)
    },[])
    useEffect(()=>{
        setUrl("data:image/png;base64,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")
},[]);

    async function changeDateBykeyword(){
        if(inputValue==="") return ;
        var apidata = await fetch(`https://newsapi.org/v2/everything?q=${inputValue}&apiKey=${apikey}`)
        apidata = await apidata.json();
        console.log(apidata)
        props.setdata(apidata.articles);
        element?.scrollTo({
            top: 0,
            behavior: "smooth"
          });
          setpreValue(inputValue)
          setValue("")
    }
    return (
        <div className="Navbar">
            <img src={newUrl} alt="" />
            <div className="inputfield">
                <input type="text" onChange={(event)=>setValue(event.target.value)} value={inputValue} placeholder={preInputValue} />
                <button onClick={changeDateBykeyword}>Search</button>
            </div>
        </div>
    )
}
export default Navbar;
