
import {useState,useEffect} from 'react';


import {Link} from 'react-router-dom';
function Allproducts(){

const[datas,setDatas]=useState([]);
useEffect(()=>{
    fetch('https://fakestoreapi.com/products')
    .then(response => response.json())
    .then(json => setDatas(json))
},[])

const DeleteProduct = (id) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      fetch(`https://fakestoreapi.com/products/${id}`, {
        method: 'DELETE'
      })
        .then(res => res.json())
        .then(data => {
          alert('Product deleted!');
          setDatas(prev => prev.filter(item => item.id !== id));
        })
    
    }
  };

    return(
        <>
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Title</th>
                        <th>Price</th>
                        <th>Description</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                {datas.map((value)=>
                    <tr>
                        <td>{value.id}</td>
                        <td>{value.title}</td>
                        <td>{value.price}</td>
                        <td>{value.description}</td>
                        <td><Link to={`/edit/${value.id}`}>
  <button >Edit</button>
</Link></td>
                        <td>   <button onClick={() => DeleteProduct(value.id)}>Delete</button></td>
                    </tr>
                )}
                </tbody>
            </table>
        </div>
        </>
    )

}

export default Allproducts;