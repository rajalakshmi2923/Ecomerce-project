import React from "react";


function Signin() {

    return (
        <>
        <div  className="maindiv"></div>
            <div className="formcontainer">
                <div className="divcard">
                    <form>
                        <label for="username">Username:</label>
                        <input type="text" id="username" name="username" required /><br />

                        <label for="password">Password:</label>
                        <input type="password" id="password" name="password" required /><br />

                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </>
    )

}
export default Signin;