import 'bootstrap-icons/font/bootstrap-icons.css';

export default function Footer(){
    return(
        <>
        <div className="footer footer-align container-fluid">
            {/* <h4>Rayalaseema Dosa Corner</h4> */}
            <div className="row"> 
                <div className="col-8">
                <button type="button " title="facebook" aria-label="twitter" className="btn btn-dark btn-flat p-2 footerIcon">
                    <i class="bi bi-facebook" ></i>
                </button>
                <button type="button" title="twitter" className="btn btn-dark btn-flat p-2">
                    <i class="bi bi-twitter-x" ></i>
                </button>
                <button type="button" title="instagram" className="btn btn-dark btn-flat p-2">
                    <i className="bi bi-instagram"></i>
                </button>
                </div>
                <div className="col-4">
                    <small className="text-center" style={{"width":"50%"}}>
                        &copy; Sree Venkata Sai Durga, 2024<br /> All rights reserved.
                    </small>
                </div>
            </div>
        </div>
        </>
    )
}