import {logout} from '../services/api';
import {Link} from 'react-router-dom';

const Layout = ({children}) => {

  return(
    <>
    <h3>Logged</h3>
    <div>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/SeeMessages">See messages</Link></li>
      <li><Link to="/WriteMessages">Write messages</Link></li>
    </div>
    <br />
    <button onClick={() => logout()}>Logout</button>
    <div>{children}</div>
    </>
  );
};
export default Layout;