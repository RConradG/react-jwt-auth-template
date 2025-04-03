import { Routes, Route } from 'react-router';
import './App.css'

import SignUpForm from './components/SignUpForm/SignUpForm';
import NavBar from './components/NavBar/NavBar';

const App = () => {
  
  return (
    <>
      <NavBar />
      <Routes>
        <Route 
          path="/sign-up"
          element={<SignUpForm/ >}
        />
      </Routes>
    </>
  );
};

export default App
