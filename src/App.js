import React, { useState } from 'react';
import { AuthProvider } from './Context/AuthContext';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Login from './Login';
import ProtectedRoute from './PrivateRoute';
import Login from './JWT Authentication/Login';
import Home from './JWT Authentication/Home';
import Dashboard from './Components/Dashboard';

function App() { 
  const [auth, setAuth] = useState(false);

  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login setAuth={setAuth} />} />
          <Route path="/" element={<ProtectedRoute auth={auth} />}>
            <Route index element={<Dashboard />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>

    // <BrowserRouter>
    //         <Routes>
    //           <Route path="/" element={<Login />} />
    //           <Route path="/home" element={<Home/>} />
    //         </Routes>
    //       </BrowserRouter>
    // <Dashboard/>
  );
}

export default App;

