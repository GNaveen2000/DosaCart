import axios from "axios";
import { useEffect, useState } from "react"
import { Button, Card, Row, Spinner } from "react-bootstrap";
import './orderStyle.css'

function Loader() {
    return <>
    <div className="about-us">
    <Spinner animation="border" />
    </div>      
    </>
  }
const OrderCard=(props)=>{
    const[item,setItem]=useState(props.value)
    const[load,setload]=useState(false)
    const setDelivery =()=>{
        if(item.orderDelivery===false){
            setload(true)
            let varName='orderDelivery'
            let newObj={...item,[varName]:true}
            axios.put('https://karthik-fake-repository.onrender.com/orders/'+item.id,newObj).then(response=>{
                setItem(response.data)
                setload(false)
                let newResponse={
                    "staus":true,
                    "response":'success',
                    "message":'Order has been updated successfully !!'
                }
                props.success(newResponse)
            })
            .catch(error=>{
                setload(false)
                let newResponse={
                    "staus":true,
                    "response":'error',
                    "message":'Some issue occured, Please try again later!!'
                }
                props.success(newResponse)
            })
        }  
    }
    const setPayment =()=>{
        if(item.orderPayment===false){
            setload(true)
            let varName='orderPayment'
            let newObj={...item,[varName]:true}
            axios.put('https://karthik-fake-repository.onrender.com/orders/'+item.id,newObj).then(response=>{
                setItem(response.data)
                setload(false)
                let newResponse={
                    "staus":true,
                    "response":'success',
                    "message":'Payment has been updated successfully !!'
                }
                props.success(newResponse)
                })
                .catch(error=>{
                    setload(false)
                    let newResponse={
                        "staus":true,
                        "response":'error',
                        "message":error.message
                    }
                    props.success(newResponse)
                })
        }  
    }
    const setConfirmation =()=>{
        if(item.orderCompleted===false){
            setload(true)
            let varName='orderCompleted'
            let newObj={...item,[varName]:true}
            axios.put('https://karthik-fake-repository.onrender.com/orders/'+item.id,newObj).then(response=>{
                setItem(response.data)
                setload(false)
                let newResponse={
                    "staus":true,
                    "response":'success',
                    "message":'Order has been confirmed and closed successfully !!'
                }
                props.success(newResponse)
                })
                .catch(error=>{
                    setload(false)
                    let newResponse={
                        "staus":true,
                        "response":'error',
                        "message":error.message
                    }
                    props.success(newResponse)
                })
        }  
    }
    const deleteItem=()=>{
        setload(true)
        axios.delete('https://karthik-fake-repository.onrender.com/orders/'+item.id).then(response=>{ 
                setItem('')
                setload(false)
                let newResponse={
                    "staus":true,
                    "response":'success',
                    "message":'Order has been deleted successfully !!'
                }
                props.success(newResponse)
            })
            .catch(error=>{
                let newResponse={
                    "staus":true,
                    "response":'error',
                    "message":'Some issue occured, Please try again later!!'
                }
                props.success(newResponse)
                setload(false)
            })
    }
    return(
        <>
            {load ?<Loader /> :
            <>
             {(item.id) && 
             <Card className='card_basic' key={item.id} style={{ width: '22rem' }}>
                <Card.Body>
                    <div>
                    <Card.Title className="">
                        <span className="card_body">Ordered for :</span> {item.userName}
                        <span className=" float-end">
                            <button type="button" className="btn btn-primary " onClick={deleteItem}><i className="bi bi-trash"></i></button>
                        </span>
                    </Card.Title><br />
                    {/* <Card.Subtitle className="mb-2 text-muted "><span className="card_body">Ordered for :</span> {item.userName}</Card.Subtitle> */}
                    </div>
                    <table className="table table-striped">
                    <thead>
                       <tr>
                       <td>Item </td>
                       <td>Price</td>
                       </tr>
                    </thead>
                    <tbody>
                        {item.totalOrder && item.totalOrder.map((val)=>{
                          return(<tr>
                          <td>{val.item}</td>
                          <td className="float-end">Rs {val.price}</td>
                          </tr> )
                        })}
                        
                    </tbody>
                    </table>
                    {/* <Card.Text ><span className="card_body">Item ordered :</span>{item.orderItem}</Card.Text>
                    <Card.Text><span className="card_body">Item quantity :</span>{item.orderQuantity} kg</Card.Text> */}
                    <Card.Text><span className="card_body">Total price :</span>Rs {item.totalPrice}</Card.Text>
                    <Card.Text><span className="card_body">Ordered on :</span> {item.orderedOn}</Card.Text>
                    
                </Card.Body>
                    {!item.orderDelivery ?<Button size="lg" className="btn btn-block btn-primary btn-outline-light card-button" onClick={setDelivery}>Mark for Delivery</Button> :<Button className="btn btn-block btn btn-success card-button">Sent for Delivery</Button> }
                    {!item.orderPayment ?<Button size="lg" className="btn btn-block btn-primary btn-outline-light card-button"onClick={setPayment}>Pending Payment</Button> :<Button className="btn btn-block btn btn-success card-button">Payment recieved</Button> }
                    {!item.orderCompleted ?<Button size="lg" className="btn btn-block btn-primary btn-outline-light card-button" onClick={setConfirmation}> Pending Confirmation</Button> :<Button className="btn btn-block btn btn-success card-button">Order Completed</Button> }
            </Card>  
            } 
            </>   
        }
        </>
    )
}

export function ViewOrder(props){

    const[order,setOrder]=useState([]);
    const[state,setState]=useState([]);
    var success=props.success;
    
    useEffect(()=>{
        axios.get('https://karthik-fake-repository.onrender.com/orders').then((response) => {
            setState(response.data)
          }).catch(error=>{
            let newResponse={
                "staus":true,
                "response":'error',
                "message":error.message
            }
            success(newResponse)
          })
    },[success])

    useEffect(()=>{
        setOrder(state)
    },[state])  

    return(
        <>
        <div className=" pull-right">
            {/* <Button className="card-button pull-right" onClick={refesh}> Refresh <i class="bi bi-arrow-clockwise"></i></Button> */}
            <Button> Active 
            <input type="range" className="form-range" min="0" max="1" step='1' id="customRange2"></input>
            </Button>
                
        </div>
        
        <Row className='card_body'>
        {(order.length>0) && order.map((item)=><OrderCard key={item.id} value={item} success={props.success}/>) }
        </Row>

         </>
    )
}