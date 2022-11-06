import React, { useRef } from 'react';
import {auth} from '../../firebase';



import './SignUpScreen.css'


function SignInScreen(props) {
    const emailRef=useRef();
    const passWordRef=useRef();
    const register=(e)=>{
     e.preventDefault()
   auth.createUserWithEmailAndPassword(emailRef.current.value,passWordRef.current.value).then(
    (authUser)=>{
        console.log(authUser)
    }
   ).catch((err)=>{
    alert(err.message)
   })

    }

    const signIn=(e)=>{
        e.preventDefault()
        auth.signInWithEmailAndPassword(emailRef.current.value,passWordRef.current.value).then(
            (authUser)=>{
                console.log(authUser)
            }
           ).catch((err)=>{
            alert(err.message)
           })

    }
    return (
      
        <div className='SignUpScreen'>
          <form >
          <h1>Sign In</h1>
           <input ref={emailRef} type="email" placeholder='Email'/> 
           <input ref={passWordRef} type="password" placeholder='Password'/> 
           <button type='submit' onClick={signIn}>Sign In</button>
           <h4><span className='signUpScrren_gray'>New to Netflix?</span> 
           <span className='signUp_ScreenLink' onClick={register}>Sign Up now.</span>
           </h4>

          </form>
        </div>
    );
}

export default SignInScreen;