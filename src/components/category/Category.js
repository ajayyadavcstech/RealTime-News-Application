import React, { useEffect ,useState} from "react";
import CategoryItem from "./CategoryItem";
import './Category.css'


function Category(props){
    var [element,setelement] = useState(null)
    useEffect(()=>{
        var node = document.getElementById("news")
        setelement(node)
    },[])
    
    function changedata1(target){
        // target.target.style.color = "red"
        console.log(target.target)
        props.setdata(props.data1)
        element?.scrollTo({
            top: 0,
            behavior: "smooth"
          });
    }
    function changedata2(target){
        props.setdata(props.data2)
        element?.scrollTo({
            top: 0,
            behavior: "smooth"
          });
    }
    function changedata3(){
        props.setdata(props.data3)
        element?.scrollTo({
            top: 0,
            behavior: "smooth"
          });
    }
    function changedata4(){
        props.setdata(props.data4)
        element?.scrollTo({
            top: 0,
            behavior: "smooth"
          });
    }
    function changedata5(){
        props.setdata(props.data5)
        element?.scrollTo({
            top: 0,
            behavior: "smooth"
          });
    }
    function changedataAll(){
        props.setdata(props.alldata)
        element?.scrollTo({
            top: 0,
            behavior: "smooth"
          });
    }
    return (
        <div className="category">
            <CategoryItem callfun={changedataAll} Category={"All"}></CategoryItem>
            <CategoryItem callfun={changedata1} Category={"Technology"}></CategoryItem>
            <CategoryItem callfun={changedata2} Category={"Science"}></CategoryItem>
            <CategoryItem callfun={changedata3} Category={"Business"}></CategoryItem>
            <CategoryItem callfun={changedata4} Category={"Sport"}></CategoryItem>
            <CategoryItem callfun={changedata5} Category={"Health"}></CategoryItem>
        </div>
    )
}
export default Category;