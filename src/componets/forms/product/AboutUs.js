import { Col, Row } from 'react-bootstrap'
import './productStyle.css'



export default function AboutUs(){

    return(
        <>
        <div className='about-us'>
            <Row>
                <Col className="cardJusitfy" sm={12}>
                    <img src='/about.jpg' alt='About our pickle store' style={{width:"300px", height:"400px"}} />   
                </Col>
                <Col sm={12}>
                    <h5 className="cardJusitfy">
                        Taste the delicious Andhra style pickle that is prepared the way it is prepared at home. 
                    </h5>
                </Col>
                <div className="p-1 bg-success w-100"></div>
            
            <Col  sm={6}>
                    <h5>Ingredients used in Veg preparation :</h5> 
                    <ul >
                        <li>Home made turmeric powder</li>
                        <li>Home made chilli powder</li>
                        <li>Garlic</li>
                        <li>Salt</li>
                        <li>Mustard seeds (Aavu powder)</li>
                        <li>Fenugreek (Menthu powder)</li>
                        <li>Red Chilly flakes</li>
                        <li>Groundnut Oil </li>
                        <li>Ginger</li>
                        <li>Freshly procured Vegetable / Mangoes</li>

                    </ul>
                        
                
                </Col>
                <Col  sm={6}>
                    <h5>Ingredients and Spices used in Non-Veg preparation :</h5> 
                    <ul >
                        <li>Home made turmeric powder</li>
                        <li>Home made chilli powder</li>
                        <li>Garlic</li>
                        <li>Salt</li>
                        <li>Mustard seeds (Aavu powder)</li>
                        <li>Coriander powder</li>
                        <li>Red Chilly flakes</li>
                        <li>Sunflower Oil</li>
                        <li>Ginger</li>
                        <li>Organic cloved</li>
                        <li>Cinnamon Bark (Dalchini)</li>
                        <li>Black pepper powder</li>
                        <li>Elaichi powder</li>
                        <li>Curry leaves</li>

                    </ul>
                        
                
                </Col>
                
            </Row>
            

        </div>
        </>
    )
}