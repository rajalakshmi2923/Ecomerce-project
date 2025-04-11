import React from 'react';
import { Link } from 'react-router-dom';

function Headercomp(){

        return(
            <>
            
<header >
<div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
    <span><img src="https://1.bp.blogspot.com/-xfZ-qzG3Y_U/VuDoUu4gl4I/AAAAAAAAAIw/JiX_55duj_M/s1600/00205-3D-art-logo-design-free-logos-online-011.png"  style={{ width: '100px', height: '100px', objectFit: 'contain' }} /></span>
 <span><h2>Quick Choice</h2></span><span style={{ fontSize: '16px' }}>    <Link to="/signup" className="sign-in-link">Sign Up </Link> / <Link to="/signin" className="sign-in-link">Sign In </Link></span></div>
</header>

            </>
        )
    }


export default Headercomp;