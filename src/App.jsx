import './App.css';
import { onAuthStateChanged } from 'firebase/auth';
import { useEffect } from 'react';
import { auth } from './services/firebase';
import { useUserContext } from './providers/UserProvider';
import Login from './components/Login';
import Router from './app/Router';

const App = () => {

  const {user, setUser} = useUserContext();

  useEffect(() => {
    onAuthStateChanged(auth, user => {
        if (user) {
            console.log('user', user, ' userId:', user.uid);
            setUser(user);
        } else {
            console.log("No user logged");
            setUser(null);
        }
    });
  }, []);

  return (
  <>
    { user ? <Router /> : <Login /> }
  </>
  );
};

export default App;