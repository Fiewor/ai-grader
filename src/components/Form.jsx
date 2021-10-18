import React from 'react'

const Form = () => {
    return(
        <form action="/login" method="post">
            <div>
                <label htmlFor="username">Username</label>
                <input type="text" name="username" className="loginInput"/>
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input type="password" name="password" className="loginInput"/>
            </div>
            <div>
                <input type="submit" value="Log In" className="loginButton"/>
            </div>
        </form>
    )
}

export default Form