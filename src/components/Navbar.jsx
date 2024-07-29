import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {


    
        const navigate = useNavigate()

        const LogOut = () => {
            sessionStorage.clear()
            navigate("/")
        }
    
    return (
        <div>

            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">Blog App</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="/create">Create a post</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/viewall">View all</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/viewmypost">View my post</a>
                            </li>


                            <li class="nav-item">
                                <button onClick={LogOut} className="btn btn-success">LogOut</button>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>

        </div>
    )
}

export default Navbar