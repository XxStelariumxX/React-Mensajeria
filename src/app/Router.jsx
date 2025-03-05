import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from '../components/Home';
import SeeMessages from '../pages/SeeMessages';
import WriteMessages from '../pages/WriteMessages';
import Layout from '../components/Layout';

const Router = () => {
  
  return(
  <BrowserRouter>
  <Layout>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/SeeMessages" element={<SeeMessages />} />
        <Route path="/WriteMessages" element={<WriteMessages />} />
      </Routes>
  </Layout>
  </BrowserRouter>
  );
};

export default Router;