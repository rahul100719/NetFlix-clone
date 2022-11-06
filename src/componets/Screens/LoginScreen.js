import React, { useState } from 'react';
import './LoginScreenCss.css'
import SignUpScreen from './SignUpScreen';
function LoginScreen(props) {
    const [signIn,setSignIn] =useState(false)
    return (
        <div className='LoginScreen'>
         <div className="lognScreen_backGround">
            <img className='LoginScreen_Logo' src="https://images.ctfassets.net/4cd45et68cgf/7LrExJ6PAj6MSIPkDyCO86/542b1dfabbf3959908f69be546879952/Netflix-Brand-Logo.png?w=684&h=456" alt="" />
            <button onClick={()=>setSignIn(true)} className='loginScreenSignIn_btn'>Sign In</button>
            <div className="loginScren_gradient"></div>
         </div>
         <div className="loginScreen_body">
            {signIn?<SignUpScreen/>:(  <>
            <h1>Unlimited films, TV programmes and more.</h1>
            <h2>Watch anywhere. Cancel at anytime</h2>
            <h3>Ready to watch? enter your email to create and restart your membership</h3>
            <div className="loginScreen_input">
                <form >
                    <input type="email"  placeholder='Email Address'/>
                    <button onClick={()=>setSignIn(true)} className='loginScreen_getStartedBtn'>GET STARTED</button>
                </form>
            </div>
            </>)}
         
         </div>
        </div>
    );
}

export default LoginScreen;