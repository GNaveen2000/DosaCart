
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Button, Modal } from "react-bootstrap"


const AddOrder = (props) => {
    console.log(props)
    const[product,setProduct]=useState();
    const[data, setData]=useState({
        orderId:'',
        orderType:'',
        orderQuantity:'',
        orderUserName:'',
        orderDelivered:false,
        orderPaymentDone:false,
        orderPrice:''
    })
    let order=props.state;
    let handleCloseOrder=props.handleClose;

    const updateData=(event)=>{
        setData({...data,[event.target.name]:event.target.value})
        console.log(data)
    }

    useEffect(()=>{
        axios.get('https://karthik-fake-repository.onrender.com/products').then((res)=>{
            setProduct=(res.data);            
        }).catch(error=>console.log(error)) 
        console.log(product)       
        },[props])
    
    console.log(product)
    // var vals=[];
    //     for(var item of product){
    //        vals.push(item.val); 
    //     }
    // console.log(vals)

  return (
    <>
    <Modal  show={order}
        onHide={handleCloseOrder}
        backdrop="static"
        keyboard={false} >
        <Modal.Header closeButton>
          <Modal.Title>Add New Order</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <label>Enter User Name 
                <input type="text" value={data.orderUserName} name="orderUserName" onChange={updateData} />
            </label>
            <label>Select Item
                <select value={data.orderType} name="orderType" onChange={updateData}>
                    <option value="Ford">Ford</option>
                    <option value="Volvo">Volvo</option>
                    <option value="Fiat">Fiat</option>
                </select>
            </label>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseOrder}>
            Close
          </Button>
          <Button variant="primary" onClick={handleCloseOrder}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default AddOrder