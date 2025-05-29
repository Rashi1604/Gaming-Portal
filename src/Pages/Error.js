import React from "react";
import img from "../Media/505.jpg";

const ErrorPage=()=>{

    //To Navigate on any other page
    // const navigate=useNavigate();

    return(
        <>
            <div className="d-flex align-items-center justify-content-center vh-100">
            <div className="text-center row">
                <div className=" col-md-6">
                    <img src={img} alt=""
                        className="img-fluid"/>
                </div>
                <div className=" col-md-6 mt-5">
                    <p className="fs-3"> <span className="text-danger">Opps!</span> Something Went Wrong.</p>
                    <p className="lead">
                        The page you’re looking for doesn’t exist.
                    </p>
                    {/* <button onClick={()=>{navigate("/")}} className="btn btn-primary">Go Home</button> */}
                </div>

            </div>
        </div>
        </>
    );
}
export default ErrorPage;