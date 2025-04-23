
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
function ProductEdit(){

  const { id } = useParams();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    title: '',
    price: '',
    description: ''
  });

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(res => res.json())
      .then(data => {
        setForm({
          title: data.title,
          price: data.price,
          description: data.description
        });
      });
  }, [id]);

  const handleChange = e => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    fetch(`https://fakestoreapi.com/products/${id}`, {
      method: 'PUT',
      body: JSON.stringify(form),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(data => {
        alert('Product updated!');
        navigate('/products'); 
      })
      .catch(error => {
        console.error('Error ', error);
        alert('Not Updated');
      });
  };
  return (
    <div style={{padding:20}}>
      <h2>Edit Product Id: {id}</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>&nbsp;&nbsp;
          <input name="title" value={form.title} onChange={handleChange} />
        </div>
        <div>
          <label>Price:</label>&nbsp;&nbsp;
          <input name="price" value={form.price} onChange={handleChange} />
        </div>
        <div>
          <label>Description:</label>&nbsp;&nbsp;
          <textarea name="description" value={form.description} onChange={handleChange} />
        </div>
        <div className='row'>
       <div className='col-md-4 '><button type="submit">Save</button></div><div className='col-md-4'>&nbsp;</div>
       <div className='col-md-4'><button type="button" onClick={() => navigate('/products')}>Cancel</button></div></div>
      </form>
    </div>
  );
};


export default ProductEdit;


