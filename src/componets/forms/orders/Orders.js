import { useEffect, useState } from "react";
import { Button } from "react-bootstrap"
import AddOrder from "./AddOrder";
import axios from 'axios';


const Orders = () => {
    const[order,setOrder]=useState(false);
    const handleCloseOrder =()=>setOrder(false)
    
    const addOrder=()=>{
      setOrder(true)
      // return <AddOrder state={true} handleClose={handleCloseOrder}/>
        
    }


    const viewOrder=()=>{

    }

    

  return (
    <>
        <div>
            <Button onClick={addOrder}>Add Order</Button>
            <Button onClick={viewOrder}>View Order</Button>
        </div>
      <div>
        {order && <AddOrder state={true} handleClose={handleCloseOrder}/> }
      </div>
        
    </>
    
  )
}

export default Orders