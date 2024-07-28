import axios from 'axios'
import React, { useState } from 'react'

const SignUp = () => {
    const [input,setInput]=new useState(
        {
            "name": "",
            "phone":"",
            "email":"",
            "password":"",
            "cnfPass":""
        }
    )
    const inputHandler=(event)=>{
        setInput({...input,[event.target.name]:event.target.value})
    }
    const readvalue=()=>{
        if (input.password==input.cnfPass) {

            let newInput= {
                "name": input.name,
                "phone":input.phone,
                "email":input.email,
                "password":input.password   
            }
            console.log(newInput)
           
            axios.post("http://localhost:3030/signup",newInput).then(
                (response)=>{
                    console.log(response.data)

                    if (response.data.Status=="success") {
                        alert("Registered succesfully")
                        setInput({
                            "name": "",
                            "phone":"",
                            "email":"",
                            "password":"",
                            "cnfPass":""
                        })
                        
                    } else {
                        alert("Email Id already Exist")
                        setInput({
                            "name": "",
                            "phone":"",
                            "email":"",
                            "password":"",
                            "cnfPass":""
                        })
                        
                    }
                }
            ).catch(
                (error)=>{
                    console.log(error)
                }
            )
        }else{
            alert("Password doedn't match")
        }
    }
    

  return (
    <div>

<div className="container">
    <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xxl-12">


        <div className="row g-3">
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xxl-12">
                <label htmlFor="" className="form-label">Name</label>
                <input type="text" className="form-control" name='name' value={input.name
                } onChange={inputHandler}/>
            </div>
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xxl-12">
            <label htmlFor="" className="form-label">Phone no.</label>
            <input type="text" className="form-control" name='phone' value={input.phone} onChange={inputHandler}/>
            </div>
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xxl-12">
            <label htmlFor="" className="form-label">EmailID</label>
            <input type="text" className="form-control" name='email' value={input.email} onChange={inputHandler}/>
            </div>
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xxl-12">
            <label htmlFor="" className="form-label">Password</label>
            <input type="password" className="form-control" name='password' value={input.password} onChange={inputHandler}/>
            </div>
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xxl-12">
            <label htmlFor="" className="form-label">Confirm Password</label>
            <input type="password" className="form-control" name='cnfPass' value={input.cnfPass} onChange={inputHandler} />
            </div>
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xxl-12">
               <button onClick={readvalue} className="btn btn-success">Register</button>      
           
            </div>
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xxl-12">
              <a href="" className="btn btn-primary">Back To Log</a>
           
            </div>
        </div>
        </div>
    </div>
</div>

    </div>
  )
}

export default SignUp