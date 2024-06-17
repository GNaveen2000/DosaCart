import { useEffect, useState } from "react";
import { Alert, Button } from "react-bootstrap";
import AddOrder from "./AddOrder";
import { ViewOrder } from "./ViewOrder";
import './orderStyle.css'


export default function Order(){

    let responseData={
        "status":'false',
        "response":'',
        "message":'',
    }
    const[order,setOrder]=useState(false);
    const[view,setView]=useState(false)
    const[success,setSuccess]=useState(responseData)
    function addModal(){
        setOrder(!order)
        setView(false)
        
    }

    useEffect(()=>{
        if(success.message!==''){
            window.scrollTo(0, 0)
            setTimeout(()=>(
            setSuccess({
                "status":'false',
                "response":'',
                "message":'',
                })
            ),5000);
        }
    },[success.message])
  

    const viewOrder=()=>{ setView(true) }

    return(
        <>
            {
                success.response==='success'? 
                <Alert key='success' variant='success'>{success.message} </Alert> : success.response==='error' ?
                <Alert key='danger' variant='success'>{success.message} </Alert> : <></>
            }
        <div>   
        <Button className='card-button' onClick={addModal}>Add Order </Button>
        <Button className='card-button' onClick={viewOrder}>View Order </Button>
        </div>
        <div>
            {order && <AddOrder state={order} updateState={addModal} success={setSuccess}/>}
            {view && <ViewOrder state={order} success={setSuccess}/>}
        </div>
        

        </>
    )

}