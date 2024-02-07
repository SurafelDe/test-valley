import Layout from './components/layouts/Layout';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';

function App() {
  return (
    <Router>
        <Layout>
            <Routes>
              <Route path='/' element={<MainPage/>} />
            </Routes>
          
        </Layout>
      </Router>
  );
}

export default App;
