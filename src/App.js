import './App.css';
import News from './components/news/News';
import Category from './components/category/Category';
import Navbar from './components/header/Navbar';
import React,{useState,useEffect} from 'react';
var apikey = "174c8df1524440179cc5b9338805462f"

function App() {
  var [allnews,setallnews] = useState([]);
  var [data1,setdata1] = useState([])
  var [data2,setdata2] = useState([])
  var [data3,setdata3] = useState([])
  var [data4,setdata4] = useState([])
  var [data5,setdata5] = useState([])
  var [curdata,setcurdata] = useState([])
  async function allnewsrandom(){
    var array = [...data1,...data2,...data3,...data4,...data5];
    for (var i = array.length - 1; i > 0; i--) {
      
      var j = Math.floor(Math.random() * (i + 1));

      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
   }
   console.log(array.length,"array length")
   setallnews(array);
  }
  async function callapi(link,setdata){
    var data = await fetch(link);
    data = await data.json();
    setdata(data.articles);
    console.log(data,"main data")
  }
  useEffect(()=>{
    allnewsrandom()
  },[,data1,data2,data3,data4,data5])
  useEffect(()=>{
    console.log("inside useeffect")
    async function api(){
     await callapi(`https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=${apikey}`,setdata1)
     await callapi(`https://newsapi.org/v2/top-headlines?country=in&category=science&apiKey=${apikey}`,setdata2)
     await callapi(`https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=${apikey}`,setdata3)
     await callapi(`https://newsapi.org/v2/top-headlines?country=in&category=sport&apiKey=${apikey}`,setdata4)
     await callapi(`https://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=${apikey}`,setdata5)
    }
    api()
      console.log(data1)
  },[])

  useEffect(()=>{
    setcurdata(allnews)
    console.log(data1,"data 1")
  },[allnews])
  return (
    <div className="App">
      <Navbar data1={data1} data2={data2} data3={data3} data4={data4} data5={data5} alldata={allnews} setdata={setcurdata}></Navbar>
      <div className="main">
          <Category data1={data1} data2={data2} data3={data3} data4={data4} data5={data5} alldata={allnews} setdata={setcurdata} className="catapp"></Category>
          <News className="newsapp" data={curdata}></News>
      </div>
    </div>
  );
}

export default App;
