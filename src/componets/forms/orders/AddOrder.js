import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { v4 as uuidv4} from "uuid";
import PreviousValue from "./usePrevious";
import ValidateOrders from "./Validate";

export default function AddOrder(props){

// useState Variables
    let dataObj={
        userName:'',
        orderId:uuidv4(),
        orderItem:'',
        orderQuantity:'',
        orderPrice:'',
        orderedOn:'',
        totalOrder:[],
        totalPrice:0,
        orderPayment:false,
        orderCompleted:false,
        orderDelivery:false
}
let errorObj={
    userName:'',
    orderItem:'',
    orderQuantity:'',
    orderPrice:'',
    orderedOn:'',
    totalOrder:[],
    totalPrice:0,
}
    const [data,setData]=useState(dataObj)
    const[product,setProduct]=useState([]);
    const[items,setItems]=useState({})
    const[buttonValid,setButtonValid]=useState(true)
    const[formError,setError]=useState(errorObj)
    const[formValid,setValid] =useState(errorObj)
  

// Variable declaration
var state= props.state;
const prevStateOrderQuantity= PreviousValue(data.orderQuantity);
const prevStateOrderItem= PreviousValue(data.orderItem);
const prevStateTotalOrder = PreviousValue(data.totalOrder);


//methods declaration
    const handleClose =() =>props.updateState()// close the modal

    function updateData(event){
        let formName=event.target.name;
        let formVal= event.target.value;
        setData({...data,[formName]:formVal})   

    }


     // to add items to a list
     const addToList=(event)=>{
        // ValidateOrders(data,setValid ,setError);
        
        if(formValid.userName===true && formValid.orderedOn===true && formValid.orderItem===true  ){
            let newObj={
                "item":data.orderItem,
                "quantity":data.orderQuantity,
                "price":data.orderPrice
            }
            setData({...data,totalOrder:[...data.totalOrder,newObj] })  
            }
        }

    const submitOrder =(event)=>{
        handleClose();
        event.preventDefault();
        // ValidateOrders(data,setValid ,setError);
        if(formValid.userName===true && formValid.orderedOn===true && formValid.orderItem===true  ){
            axios.post('https://karthik-fake-repository.onrender.com/orders',data).then((response) => { 
            let newResponse={
                "staus":true,
                "response":'success',
                "message":'Order has been created successfully !!'
            }
            props.success(newResponse)

          }).catch(error=>{
            let newResponse={
                "staus":true,
                "response":'error',
                "message":'Some issue occured, Please try again later!!'
            }
            props.success(newResponse);
        })

        }
    }


//useEffect menthods
    useEffect(()=>{  
        axios.get('https://karthik-fake-repository.onrender.com/products').then((res)=>{
            setProduct(res.data);            
        }).catch(error=>{
            console.log(error )
        })
    },[])

    useEffect(()=>{
        product && product.map((x)=>setItems(prevState=>{return {...prevState,[x.productName]:x.productPrice}})  )
    },[product])



    useEffect(()=>{
    ValidateOrders(data,setValid ,setError);
    if(prevStateTotalOrder!==data.totalOrder){
        console.log('updating the calculation')
        var totalPrice=0;
        let varName='totalPrice';
        data.totalOrder.forEach((val)=>{  
            totalPrice+=val.price; 
        })
        setData({...data,[varName]:totalPrice})
    }

    if((data.orderItem!=='' && data.orderQuantity!=='') && (prevStateOrderItem!==data.orderItem || prevStateOrderQuantity!==data.orderQuantity)){
        if(data.orderItem!=='' && data.orderQuantity!==''){
            let formname='orderPrice';
            if(data.orderQuantity==='1/2'){
                let priceInKg=items[data.orderItem];
                let price=Math.floor(priceInKg/2)+10;
                setData({...data,[formname]:price})
            }
            else if(data.orderQuantity==='1'){
                let priceInKg=items[data.orderItem];
                setData({...data,[formname]:priceInKg})
            }
            else if(data.orderQuantity==='2'){
                let priceInKg=items[data.orderItem];
                let price=Math.floor(priceInKg*2);
                setData({...data,[formname]:price})  
            }
        }  
    }
},[data,prevStateOrderItem,prevStateOrderQuantity,prevStateTotalOrder,items])


useEffect(()=>{ (formValid.userName===true && formValid.orderedOn===true && formValid.orderItem===true && formValid.totalOrder===true)
    ? setButtonValid(false): setButtonValid(true) },[formValid,formError])


    return (
        <>
        
        <Modal
          show={state}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Add New Order</Modal.Title>
          </Modal.Header>
          <Modal.Body>

            <form>
                <div className="mb-3">
                    {!formValid.userName && <p style={{color:'red',fontSize:'small'}}>{formError.userName}</p>}
                    <label id="userName" className="form-label">Enter Name <span>*</span></label>
                    <input type='text' className="form-control" id='userName' value={data.userName} name='userName' onChange={updateData} />
                </div>
                <div className="mb-3">
                {(formValid.userName && !formValid.orderItem) && <p style={{color:'red',fontSize:'small'}}>{formError.orderItem}</p>}
                    <label id="orderItem" className="form-label">Select Item <span>*</span></label>
                    <select className="form-select" aria-label="select product" id='orderItem' value={data.orderItem} name='orderItem' onChange={updateData} >
                    <option default value=''>Choose an Item</option>
                    {product && product.map(v=>{
                      return  <option key={v.productId} value={v.productName}>{v.productName}</option>
                    })}  
                    </select>
                </div>
                <div className="mb-3">
                    <label id="orderQuantity" className="form-label">Select Quantity <span>*</span></label>
                    <select className="form-select" aria-label="select quantity" id='orderQuantity' value={data.orderQuantity} name='orderQuantity' onChange={updateData} >
                        <option default value='default'>-</option>
                        <option  value='1/2'>1/2 kg</option>
                        <option value='1'>1 kg</option>
                        <option value='2'>2 kg</option>
                    </select>
                </div>
                <div className="mb-3">
                    <label id="orderPrice" className="form-label">Price <span>*</span></label>
                    <input type='number' readOnly={true} className="form-control" id='orderPrice' value={data.orderPrice} name='orderPrice' onChange={updateData} />
                </div>
                <div className="mb-3">
                    {(formValid.userName && formValid.orderItem && !formValid.orderedOn) && <p style={{color:'red',fontSize:'small'}} >{formError.orderedOn}</p>}
                    <label id="orderedOn" className="form-label">Ordered On <span>*</span></label>
                    <input type='date'  className="form-control" id='orderedOn' value={data.orderedOn} name='orderedOn' onChange={updateData} />
                </div>
                {(formValid.userName && formValid.orderItem && formValid.orderedOn && !formValid.totalOrder) && <p style={{color:'red',fontSize:'small'}}>{formError.totalOrder}</p>}
                <Button variant="secondary" type='button' onClick={addToList}>Add to List</Button>
                <div className="mb-3">

                    <label>Item List</label>
                     
                    {data.totalOrder.length>0 && data.totalOrder.map((val)=>{
                        return(
                            <tr>
                                <td>{val.item}</td>
                                <td> - {val.quantity} kg / Rs </td>
                                <td>{val.price}</td>
                            </tr>
                            
                        )
                    
                   })}           
                   
                </div>
                 <tr>
                    <td>
                        Total Price : Rs {data.totalPrice}
                    </td>
                   </tr>

            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button disabled={buttonValid} type='submit'  onClick={submitOrder} variant="primary">Order</Button>
              
         
          </Modal.Footer>
        </Modal>
        </>
    )
}