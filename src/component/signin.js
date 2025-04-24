import React,{useState} from "react";

function Signin() {

    const [formData, setFormData] = useState({
      username: '',
      password: ''
    });
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      fetch('https://fakestoreapi.com/auth/login', {
        method: 'POST',
        body: JSON.stringify({
          username: formData.username,
          password: formData.password
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      
      .then(response => {
        if (!response.ok) {
         return response.json().then(err => {
            throw new Error(err.message || 'Login failed');
          });
        }
        return response.json();
      })
    
      
        .catch(error => {
          console.error(error);
          alert('Login failed. Please check credentials.');
        });
    };
  

    return (
        <>
        <div  className="maindiv"></div>
        <div className="formcontainer">
        <div className="divcard">
          <form onSubmit={handleSubmit}>
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
            /><br />

            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            /><br />

            <button type="submit">Sign In</button>
          </form>
        </div>
      </div>
        </>
    )

}
export default Signin;