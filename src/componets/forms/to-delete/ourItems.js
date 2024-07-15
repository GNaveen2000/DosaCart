import './Str.css'
import { Link } from "react-router-dom";

export default function Ouritems()
{

    return(
<>
<div style={{display:'flex',marginLeft:30,alignItems:'center',gap:65,marginRight:30}}>
  <h1 style={{fontSize:30,width:80}}>Veg Pickles</h1>
<div className="card" style={{width: 200}}>
  <img src="https://www.sharmispassions.com/wp-content/uploads/2021/11/instant-mango-pickle1.jpg" style={{height:200}} class="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">MangoPickle</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <Link to="/Ouritems/mango" class="btn btn-primary">View Product</Link>
  </div>
</div>
<div className="card" style={{width: 200}}>
  <img src="https://i.ytimg.com/vi/S5fYbjBb0zs/maxresdefault.jpg" style={{height:200}} class="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">LemonPickle</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <Link to="/Ouritems/mango" class="btn btn-primary">View Product</Link>
  </div>
</div>
<div className="card" style={{width: 200}}>
<img src="https://i.ytimg.com/vi/S5fYbjBb0zs/maxresdefault.jpg" style={{height:200}} class="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <Link to="/Ouritems/mango" class="btn btn-primary">View Product</Link>
  </div>
</div>
</div>
<br></br><br></br><br></br>
<div style={{display:'flex',marginLeft:30,alignItems:'center',gap:65,marginRight:30}}>
  <h1 style={{fontSize:30, width:80}}>Non-Veg Pickles</h1><div className="card" style={{width: 200}}>
  <img src="https://bing.com/th?id=OSK.21649cb04dd76aede8f8807355171b50" style={{height:200}} class="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <Link to="/Ouritems/mango" class="btn btn-primary">View Product</Link>
  </div>
</div>
<div className="card" style={{width: 200}}>
<img src="https://bing.com/th?id=OSK.21649cb04dd76aede8f8807355171b50" style={{height:200}} class="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <Link to="/Ouritems/mango" class="btn btn-primary">View Product</Link>
  </div>
</div>
<div className="card" style={{width: 200}}>
<img src="https://bing.com/th?id=OSK.21649cb04dd76aede8f8807355171b50" style={{height:200}} class="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <Link to="/Ouritems/mango" class="btn btn-primary">View Product</Link>
  </div>
</div>
</div>
</>

    )
}