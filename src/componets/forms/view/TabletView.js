// import { useState } from "react"

import ItemCard from "../product/ItemCard"

const Carousel=(props)=>{
    
    let prodarr=props.val;
    return(
        <>
            <div className="carousel-item">
                <div className="card-wrapper container-sm d-flex   justify-content-around">
                {prodarr && prodarr.map((product)=>{
                        return <ItemCard key={product.id} val={product} /> 
                })
            }  
                </div>
            </div>      
        
        </>       
    )
}


export default function TabletView(props){

    var data=props.val;
    let size= data.length;
    const items=[]
    
    const childCarousel=()=>{
        data=data.slice(2,);
        size=data.length;
        var item;
        let i=0;
        
        while(size>0){
            let j=i+2;
             item = data.slice(i,j);
             size-=2;
             i+=2;
            items.push(item)
          
        }
        return(
                <> {(items && items.map(x=>{return <Carousel val={x} /> }) ) } </>
        )
       
    }
  
    return(
        <>
                <div className="carousel-item active">
                <div className="card-wrapper container-sm d-flex  justify-content-around">
                
                {data && data.slice(0,2).map((product)=>{
                                return <ItemCard key={product.id} val={product} />
                            })}


                </div>
                </div>
            
                {childCarousel()}
               {/* {data && <Carousel val={data.slice(2,4)} />}
               {data.slice(4).length>0 && <Carousel val={data.slice(4)} />} */}
    
        </>
    )
}