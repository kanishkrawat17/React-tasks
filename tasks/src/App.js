import React from "react";
import axios from "axios";
import {useState,useEffect} from "react";

const styles = {
 'border': '1px solid black',
 'margin' : '8px',
 'textAlign' : 'center'
}
export default function App() {

let [data, setData ] = useState([])
let [content, setContent ] = useState("")
const [filteredData, setFilteredData] = useState([])

  useEffect( ()=>{
    axios("https://jsonplaceholder.typicode.com/posts")
    .then((response=>{
      setData([...response.data])
    }))
  },[ ])

  const handleChange = (e)=>{
    setContent(e.target.value)
  }

  const handleClick = ()=>{
    if(content == ""){
      setFilteredData([]);
      return;
    }

    if(content != ""){
      let filteredArr = data.filter((item)=>{
        if(item.title.toLowerCase().includes(content.toLowerCase() )){
          return item;
        }
      })
      setFilteredData([...filteredArr])
    }
    setContent("")
    // console.log(filteredData, "filtereddArr")
    // console.log(filteredData.length, "43")
  }

  return (
    <div>
      <div><input value = {content}placeholder = "Search" type = "text" onChange ={handleChange}/></div>
      <button onClick = {handleClick}>Filter</button>
      
      {data.length == 0 && "..fetching"} 
      {data.length != 0 && filteredData == 0 && <div className= "card-container"> 
        {
           
           data.map((item)=>{
             return (
               <div className = "card" key = {item.id} style= {styles}>
                 <h2>Title</h2>
                 <p>{item.title}</p>
                 <h2>Normal</h2>
                 
               </div>
             )
           })
         }
        
        </div>}

        {filteredData.length != 0 && <div className= "card-container">{
           filteredData.map((item)=>{
             return (
               <div className = "card" key = {item.id} style= {styles}>
                 <h2>Title</h2>
                 <p>{item.title}</p>
                 <h2>filteredData</h2>
                 
               </div>
             )
           })
         }</div>}
      </div>
  );
}
