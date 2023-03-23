import React from "react";
import './CategoryItem.css'

function CategoryItem(props){
    return (
        <div onClick={(e)=>props.callfun(e)} className="categoryitem">
            {props.Category}
        </div>
    )
}
export default CategoryItem;