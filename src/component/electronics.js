import { useEffect, useState } from "react";
import {Link,useNavigate } from 'react-router-dom';
import Sidenavcomp from './sidenav';

function Electroniccomp (){

    const[datas,setDatas]=useState([]);
    const navigation = useNavigate();
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products/category/electronics')
        .then(response => response.json())
        .then(json => setDatas(json))
    },[])

    const DisplayCard = (val)=>{
        navigation(`/products/${val}`)
    }

        return(
            <>
            <div> 
             <div className='card-container' >
             {datas.map((value,index)=>
                <div className='col-md-4'>
                    <div className='defaultcard'>
                    <div style={{padding:20}} onClick={() => DisplayCard(value.id)}><h3> {value.title}</h3>
                    <img src={value.image}  style={{ width: '100px', height: '100px'}} />
                    <h5> PRICE:</h5>{value.price}
                    <h5>Description:</h5>
                    {value.description}</div>
                    </div>
                </div>
            )}
            </div>
            </div>
            </>
        )
    } 
export default Electroniccomp;