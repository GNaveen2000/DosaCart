import 'bootstrap-icons/font/bootstrap-icons.css';
import './nav.css'
import { Row, Col } from 'react-bootstrap';

export default function Footer(){
    return(
       <>
       <footer className=" bg-body-primary text-center text-dark py-4">
       
            <div className="p-1 bg-success w-100"></div>
           
            <div className='row fontStyle' >
                <div className='col-sm-4' style={{margin:'15px',border:'2px'}}>
<Row id='fontHeader'><p>Follow us</p></Row>
                  <Row className='footer-justify'>
                        
                        <Col xs={2} sm={3}>
                        <a href="https://www.instagram.com/andhra_spicy_pickles/" target='_blank' rel='noreferrer' data-mdb-ripple-init className="btn text-white btn-floating m-1"
                        style={{backgroundColor: "#FF0000"}} role="button" btn-secondary='true'>
                            <i className="bi bi-instagram"></i>
                        </a> 
                        </Col>
                        <Col xs={2} sm={3}>
                        <a href="https://wa.me/8296591085"  data-mdb-ripple-init className="btn text-white btn-floating m-1"
                        style={{backgroundColor: "#00ff00"}} role="button" btn-secondary='true'>
                            <i className="bi bi-whatsapp"></i>
                        </a>
                        </Col>
                    </Row>
                </div>
              

                <div className='col-sm-7' style={{margin:'15px',border:'2px'}}>

                
                    <Row id='fontHeader'><p>Contact Us</p></Row>
                    <Row >
                    <Row  className='fontStyle'>
                        
                        <Col xs={2}>
                        <a href="mailto:andhraspicypickle@gmail.com"  data-mdb-ripple-init className="btn text-white btn-floating m-1"
                                style={{backgroundColor: "#ff0000"}} >
                                <i className="bi bi-google"></i>
                                </a>
                        </Col>
                        <Col xs={5}>
                        <h5 className='fontStyle'> andhraspicypickle@gmail.com</h5>
                        </Col>
                    
                    </Row>


                    <Row className='fontStyle'>

                        <Col xs={2}>
                        <a href="tel:966-358-3504" data-mdb-ripple-init className="btn text-white btn-floating m-1"
                                    style={{backgroundColor: "#000000"}} >
                                        <i className="bi bi-telephone"></i>
                                    </a>
                        </Col>
                        <Col xs={5}>
                        <h5 className='fontStyle' > +91 8185813609, 8296591085</h5>
                        </Col>
                        
                        
                    </Row>
                
                    
                </Row>                 

            </div>
                

            </div>
        
       </footer>
       
       </>
    )
}