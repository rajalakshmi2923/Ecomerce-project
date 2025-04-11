import { useEffect, useState } from "react";
import {Link,useParams} from 'react-router-dom';
function ProductComp (){
    const { id } = useParams()
      console.log("id",id)
    //  const product= props.key;

    const[datas,setDatas]=useState({});

    useEffect(()=>{
        fetch(`https://fakestoreapi.com/products/${id}`)
        .then(response => response.json())
        .then(json => setDatas(json))
    },[])

        return(
            <>
            <div style={{paddingLeft:20}}>
         <h2>{datas.title}</h2>
         <img src={datas.image}  style={{ width: '200px', height: '200px'}} />
          <h4>Price:</h4>{datas.price}
          <h4>Description:</h4>{datas.description}
          </div>
            </>
        )
    }
export default ProductComp;

