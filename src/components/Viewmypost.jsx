import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const Viewmypost = () => {




    const [data, setData] = useState([
        
    ]
    )
    const [token, setToken] = useState(sessionStorage.getItem("token"))
    const [userId, setuserId] = useState( {"userId":sessionStorage.getItem("userId")}
       
    )

    const fetchData = () => {
        axios.post("http://localhost:3030/viewmypost",userId, {
            headers: { "token": token, "Content-Type": "application/json" }
        }).then(
            (response) => {
                console.log(response.data)
                setData(response.data)
            }
        )
            .catch(
                (error) => { console.log(error) }
            )
    }
    useEffect(()=>{fetchData()},[])
    return (
        <div>
            <Navbar/>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xxl-12">

                        <div className="row g-3">
                            {data.map((value,index) => {
                                return <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xxl-12">

                                    <div class="card text-bg-info mb-3" >
                                        
                                        <div class="card-body">
                                            <h5 class="card-title">{value.Message}</h5>
                                            <p class="card-text">Posted on {value.postedDate }</p>
                                        </div>
                                    </div>

                                </div>
                            })
                            }
                        </div>
                    </div>
                </div>
            </div>



        </div>
    )
}

export default Viewmypost