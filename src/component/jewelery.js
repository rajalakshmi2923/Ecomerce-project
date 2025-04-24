import { useEffect, useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import useFetch from "./customhook";
function Jewelerycomp() {

    //const[datas,setDatas]=useState([]);
    const navigation = useNavigate();
    // useEffect(()=>{
    //     fetch('https://fakestoreapi.com/products/category/jewelery')
    //     .then(response => response.json())
    //     .then(json => setDatas(json))
    // },[])
    const [datas] = useFetch("https://fakestoreapi.com/products/category/jewelery");

    const DisplayCard = (val) => {
        navigation(`/products/${val}`)
    }

    return (
        <>
            <div>
                <div className='card-container'>
                    {datas.map((value, index) =>
                        <div className='col-md-4'>
                            <div className='defaultcard'>
                                <div style={{ padding: 20 }} onClick={() => DisplayCard(value.id)}>
                                    <h3 style={{ marginRight: '10px' }}>{value.title}</h3>
                                    <img src={value.image} style={{ width: '100px', height: '100px' }} />
                                    <br />
                                    <h5>Rs.{value.price}</h5>
                                    <button>Buy Now</button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    )

}
export default Jewelerycomp;