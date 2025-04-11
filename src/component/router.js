import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Layoutcomp from './layout';
import Sectioncomp from './section';
import Jewelerycomp from './jewelery';
import Electroniccomp from './electronics';
import Mencomp from './mensclothing';
import Womencomp from './womenclothing';
import ProductComp from './products'
import Signup from './signup';
import Signin from './signin';
class Routingcomp extends React.Component{
    constructor(){
        super();
    }

    render(){
        return(
            <> 
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layoutcomp />}>
          <Route index element={<Sectioncomp />} />
          <Route path="electronics" element={<Electroniccomp />} />
          <Route path="jewelery" element={<Jewelerycomp />} />
          <Route path="men's clothing" element={<Mencomp />} />
          <Route path="women's clothing" element={<Womencomp />} />  
          <Route path="/products/:id" element={<ProductComp />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
        </Route>
      </Routes>
    </BrowserRouter>
            </>
        )
    }
}

export default Routingcomp;