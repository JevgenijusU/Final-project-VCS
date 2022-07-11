import 'bootstrap/dist/css/bootstrap.min.css';
import { Layout } from './components/Layout/Layout';
import { Home } from './pages/Home/Home';
import { Projects } from './pages/Projects/Projects';
import { Technologies } from './pages/Technologies/Technologies';
import { Hobbies } from './pages/Hobbies/Hobbies';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/projects' element={<Projects />}></Route>
          <Route path='/technologies' element={<Technologies />}></Route>
          <Route path='/hobbies' element={<Hobbies />}></Route>
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
