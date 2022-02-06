import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css"

import { useNavigate } from 'react-router-dom';
export default function Navbar() {

    return (
        <div>
            <nav class="navbar navbar-light"
                 style="background-color: #e3f2fd;">
             <a class="navbar-brand">React Movie App</a>
                <form class="form-inline">
                 <button class="btn btn-outline-light my-3 my-sm-0 mx-2" type="submit">Login</button>
                 <button class="btn btn-outline-light mx-2 my-3 my-sm-0" type="submit">Register</button>
               </form>
            </nav>
        </div>
    );
}