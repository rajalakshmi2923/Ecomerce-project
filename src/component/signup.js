import React, { useState,useEffect } from "react";


function Signup() {


    const [username,setUsername]=useState('');
    const [email,setEmail]=useState({});
    const [password,setPassword]=useState({});

   const  handleSubmit=(event)=>{
        event.preventDefault();
        console.log(username);

    }

     useEffect(()=>{
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ Username: {username},Email:{email},Password:{password} })
        };
        fetch('https://reqres.in/api/users', requestOptions)
            .then(response => response.json())
            .then(data => this.setUsername({ username: data.username }));

        },[])


    const changeUser=(event)=>{
        const name=event.target.name;
        const value=event.target.value;
        setUsername(values =>({...values, [name]: value}))
    }

    const changeemail=(event)=>{
        const name=event.target.name;
        const value=event.target.value;
        setEmail(values =>({...values, [name]: value}))
    }
    const changepassword=(event)=>{
        const name=event.target.name;
        const value=event.target.value;
        setPassword(values =>({...values, [name]: value}))
    }


    return (
        <>
         <div  className="maindiv"></div>
            <div className="formcontainer">
                <div className="divcard">
                    <form onSubmit={handleSubmit}>
                        <label>Username:</label>
                        <input type="text" id="username" name="username"  onChange={changeUser} required /><br />

                        <label>Email:</label>
                        <input type="email" id="email" name="email"   onChange={changeemail}/><br />

                        <label>Password:</label>
                        <input type="password" id="password" name="password"  onChange={changepassword}/><br />

                        <button type="submit" >Submit</button>
                    </form>
                </div>
            </div>
        </>
    )

}
export default Signup;