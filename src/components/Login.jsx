import {signUp, loginWithGoogle, signIn} from '../services/api';
import { useState } from 'react';

const Login = () => {

  const [mail, setMail] = useState('');
  const [password, setPassword] = useState('');

  return(
    <>
    <h3>Home</h3>
      <input type='text' placeholder='user' onChange={(e) => setMail(e.target.value)}/>
      <input type='password' placeholder='password' onChange={(e) => setPassword(e.target.value)}/>
      <br />
      <button onClick={() => signUp(mail, password)}>SignUp</button>
      <br />
      <button onClick={() => signIn(mail, password)}>SignIn</button>
      <button onClick={() => loginWithGoogle()}>SignUp with Google</button>
    </>
  );
};
export default Login;