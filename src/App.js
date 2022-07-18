import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from './components/Header';
import UserListing from './components/UserListing';
import UserDetail from './components/UserDetail';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" exact element={<UserListing />} />
          <Route path="users/:userLogin" exact element={<UserDetail />} />
          <Route path="*" element={<h1>404 Page Not Found</h1>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
