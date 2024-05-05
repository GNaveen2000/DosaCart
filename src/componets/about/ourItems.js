import './Str.css'
import {increment,decrement} from '../reduc-component/counterSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import React from 'react'
import axios from 'axios';



const Table=(props)=>{
 
  return(
    <tr>
      <td>{props.item.itemId}</td>
      <td>{props.item.itemName}</td>
      <td>{props.item.itemPrice}</td>
    </tr>

  )

}

 function Ouritems()

{
  var [items,setItem]= useState();
  const counter = useSelector((counter) => counter.counter)
  // console.log(counter.count);
  const dispatch = useDispatch()
  const itemData=useEffect(()=>{

      axios.get("http://localhost:4000/items").then((result)=>{
        // console.log(result.data);
        setItem(result.data);
      }).catch((e)=>console.log(e));
  },[])
  // console.log('THe Data is : ',items)
    return(
        <>
        <button onClick={()=>dispatch(increment())}>+</button>{counter.count}
        <button onClick={()=>dispatch(decrement())}>-</button>


<div className="global-container">
<table>
  <tr>
    <th>Item id</th>
    <th>Item Name</th>
    <th>Item Price</th>
  </tr>
  {
    items &&  items.map(item=>(
            <Table item={item} />
    ))
  }
 {/* {items.map((item)=>(
    console.log(item)
  // return <Table value={item} />
    //   <tr>
    //   <td>{item.itemId}</td>
    //   <td>{item.itemName}</td>
    //   <td>{item.itemPrice}</td>
    // </tr>
 ) 
 )} */}

  {/* <tr>
    <td>1</td>
    <td>Set dosa</td>
    <td>40</td>
  </tr>
  <tr>
    <td>2</td>
    <td>Rava Dosa</td>
    <td>10</td>
  </tr>
  <tr>
    <td>Ernst Handel</td>
    <td>Roland Mendel</td>
    <td>Austria</td>
  </tr>
  <tr>
    <td>Island Trading</td>
    <td>Helen Bennett</td>
    <td>UK</td>
  </tr>
  <tr>
    <td>Laughing Bacchus Winecellars</td>
    <td>Yoshi Tannamuri</td>
    <td>Canada</td>
  </tr>
  <tr>
    <td>Magazzini Alimentari Riuniti</td>
    <td>Giovanni Rovelli</td>
    <td>Italy</td>
  </tr> */}
</table>
</div>
        </>
    )
}

export default React.memo(Ouritems);
