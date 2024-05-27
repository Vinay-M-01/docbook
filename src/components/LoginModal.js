import React, { useState, useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../FirebaseConfig';
import { isSignInWithEmailLink, sendSignInLinkToEmail, signInWithEmailLink } from 'firebase/auth';
import './LoginModal.css'

const LoginModal = ({ showLoginModal, closeLoginModal }) => {
  const [user] = useAuthState(auth);
  const [email, setEmail] = useState('');
  const [loginLoading, setLoginLoading] = useState(false);
  const [loginError, setLoginError] = useState('');

  const [infoMsg, setInfoMsg] = useState('');

  const [initialLoading, setInitialLoading] = useState(false);
  const [initialError, setInitialError] = useState('');

  useEffect(() => {
    if (user) {
      // user is signed in
      console.log("User is present")
    }
    else {
      // user is not signed in but the link is valid
      if (isSignInWithEmailLink(auth, window.location.href)) {
        // now in case user clicks the email link on a different device, we will ask for email confirmation
        let email = localStorage.getItem('email');
        if (!email) {
          email = window.prompt('Please provide your email');
        }
        setInitialLoading(true);
        signInWithEmailLink(auth, localStorage.getItem('email'), window.location.href)
          .then((result) => {
            localStorage.removeItem('email');
            setInitialLoading(false);
            setInitialError('');
          }).catch((err) => {
            setInitialLoading(false);
            setInitialError(err.message);
          })
      }
      else {
        console.log('enter email and sign in');
      }
    }
  }, [user]);

  const handleLogin = (e) => {
    e.preventDefault();
    setLoginLoading(true);
    sendSignInLinkToEmail(auth, email, {
      url: 'https://docbookpro.netlify.app/',
      handleCodeInApp: true,
    }).then(() => {
      localStorage.setItem('email', email);
      setLoginLoading(false);
      setLoginError('');
      setInfoMsg('We have sent you an email with a link to sign in');
    }).catch(err => {
      setLoginLoading(false);
      setLoginError(err.message);
    })
  }

  return (
    <div className={`modal ${showLoginModal ? 'show' : ''}`}>
      <div className="login-modal-content">
        {
          initialLoading ? (
            <>
              <button type="">Loading</button>
            </>
          ) : (
            <>
              {user ? (
                <div>Please wait...</div>
              ) : (
                <>
                  <span className="close-button" onClick={closeLoginModal}>&times;</span>
                  <h2>Login</h2>

                  <form onSubmit={handleLogin}>
                    <label>Email: </label>
                    <input type={'email'} required placeholder='Enter Email'
                      className='form-control'
                      value={email || ''} onChange={(e) => setEmail(e.target.value)} />
                    <button type='submit'>
                      {loginLoading ? (
                        <span>Logging you in</span>
                      ) : (
                        <span>Login</span>
                      )}
                    </button>
                    {/* show login error msg */}
                    {loginError !== '' && (
                      <div>{loginError}</div>
                    )}

                    {/* show info msg */}
                    {infoMsg !== '' && (
                      <div>{infoMsg}</div>
                    )}
                  </form>
                </>
              )}
            </>
          )
        }
      </div>
    </div>
  )
}

export default LoginModal