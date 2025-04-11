import React from 'react';
import Headercomp from './header';
import Footercomp from './footer';
import {Outlet,useLocation} from 'react-router-dom';
import Sidenavcomp from './sidenav';


function Layoutcomp (){
  
    const location = useLocation();  
    const hidenav = ['/', '/signup', '/signin'];
    const shouldShowSidebar = !hidenav.includes(location.pathname);
  
    // const shouldShowSidebar = location.pathname !== '/';   
  
        return(
            <>
            <Headercomp/>
            {shouldShowSidebar && <Sidenavcomp />}
            <section>
                <article>
                 <Outlet/>
                </article>
            </section>
            <Footercomp/>
    
            </>
        )
    
}

export default Layoutcomp;