import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Card, ListGroup, Spinner } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import './productStyle.css'


export default function ViewProduct(){

    let params=useParams();
    const[product,setProduct]=useState({});
    const[loading,setLoading]=useState(true)

    function Loader() {
        return <>
        <div className="about-us">
        <Spinner animation="border" />
        </div>      
        </>
      }
    
    useEffect(()=>{
        axios.get(`https://karthik-fake-repository.onrender.com/products/${params.productId}`).then(res=>{
            setProduct(res.data); 
            setLoading(false)
        })
        .catch(error=>console.log(error))
        
    },[params.productId])
    

    return(
        <>
        {loading ? <Loader /> : 
        <div>
            <div  className="row viewProduct">
            <Card  style={{ width: '22rem' }}>
                <Card.Header>
                    {<Card.Title className="cardJusitfy">{product.productName}</Card.Title> }
                </Card.Header>
                <img className="card-img-top rounded" src={product.productUrl} alt="Card cap"  style={{height:250}}/>

                <Card.Body>   
                    <Card.Text>
                   {product.productDescription}
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroup.Item>1/2 kg : {Math.floor(product.productPrice/2) +10} Rs </ListGroup.Item>
                    <ListGroup.Item>1 kg : {product.productPrice} Rs</ListGroup.Item>
                </ListGroup>
                <Card.Body>
                <Link to='https://wa.me/8296591085'> <Button className="w-100 btn btn-lg " value="Order" variant="primary">Order</Button>
                </Link>      
                </Card.Body>
            </Card>
           </div>
        </div> 
}
        </>
    )

}