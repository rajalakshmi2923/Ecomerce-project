import { useEffect, useState } from "react";
import {Link} from 'react-router-dom';
import useFetch from "./customhook";
function Sectioncomp (){

    //const[datas,setDatas]=useState([]);
    const [images, setImages] = useState([]);
    const categoryImages = {
        "electronics": "https://c.pxhere.com/images/dd/fb/32f6e4c9eff8c290ca3466946ce7-1595236.jpg!d",
        "jewelery": "https://images.naptol.com/usr/local/csp/staticContent/product_images/horizontal/750x750/Sumangali-Jewellery-Collection-o1.jpg",
        "men's clothing": "https://tse3.mm.bing.net/th?id=OIP.Z_ZrTRNgURrOI3t2w2knaAHaHa&pid=Api&P=0&w=300&h=300",
        "women's clothing": "https://tse2.mm.bing.net/th?id=OIP.1Pa2UnflKO1hvkfk_MH39AHaHa&pid=Api&P=0&h=180",
      };



    // useEffect(()=>{
    //     fetch('https://fakestoreapi.com/products/categories')
    //     .then(response => response.json())
    //     .then(json => setDatas(json))
    // },[])

    const [datas] = useFetch("https://fakestoreapi.com/products/categories");

        return(
            <>

            <div class="maindiv">
             
             <div className='row'>
             {datas.map((value)=>
                <div className='col-md-4'>
                    <div className='card'>
                    <div className='card-body'>
                    <div><span className='card-title'><Link to={`/${value}`} className="custom-link"> <img src={categoryImages[value]}
                          alt={value} style={{ width: '200px', height: '200px' }}/><br/> {value}  </Link></span></div>
                    </div>
                    </div>
                </div>
            )}
            </div>
            </div>
            </>
        )
    }


export default Sectioncomp;