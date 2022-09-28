import {Link} from "react-router-dom";

const SelectUser =() =>{


    return (

        <div id="layoutAuthentication">
            <div id="layoutAuthentication_content">
                <main>
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-5">
                                <div className="card shadow-lg border-0 rounded-lg mt-5">


                                    <div className="card-header"><h3 className="text-center font-weight-light my-4">Select User</h3></div>
                                    <div className="card-body">
                                            <div className="row">
                                                <div className="col text-center">
                                                    <Link to ='learner' className="btn btn-primary col-md-3 mb-4 " type="button" >Learner</Link>
                                                    &nbsp;

                                                    <Link to ='teacher' className="btn btn-primary col-md-3 mb-4 " type="button" >Teacher</Link>


                                                </div>

                                            </div>

                                    </div>





                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>


    )

}
export default SelectUser