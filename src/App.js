import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import CreateUser from './components/CreateUser';
import ReadUser from './components/ReadUser';
import UpdateUser from './components/UpdateUser';
import DeleteUser from './components/DeleteUser';

import logo from './image/logo.png';
import './css/menu.css';
import './css/style.css';

const App = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const storedUsers = localStorage.getItem('users');
    if (storedUsers) {
      setUsers(JSON.parse(storedUsers));
    }
    setLoading(false);
  }, []);

  const updateUsers = (newUsers) => {
    setUsers(newUsers);
    localStorage.setItem('users', JSON.stringify(newUsers));
  };

  return (
    <Router>
      <nav className="menu">
        <ul>
          <li>
            <img src={logo} alt="Logo" width="200" height="200" className="logo" />
          </li>
        </ul>
        <ul>
          <li><Link to="/">Users</Link></li>
          <li><Link to="/create">Create</Link></li>
          <li><a href="https://github.com/Girouetten21/CRUD-React-LocalStorage" target="_blank" rel="noopener noreferrer">Github</a></li>
        </ul>
      </nav>
      <Routes>
        <Route path='/' element={
          <div className="container mx-auto p-4">
            <h1 className="title">CRUD App with React and Local Storage</h1>
            <p className="text-center paragraph">
              This is a hands-on project that demonstrates a basic CRUD (Create, Read, Update and Delete) application for managing users. Users data is stored in the browser's localstorage. Developed in React with CSS and JavaScript. 
              <span className="text-center">
                <strong> Users created: {users.length}</strong>
              </span>
            </p>
            <ReadUser      
              users={users}
              loading={loading}
              onDeleteUser={(id) => DeleteUser (id, updateUsers, users)}
            />
          </div>
        } />
        <Route path='/create' element={<CreateUser users={users} setUsers={updateUsers} />} />
        <Route path='/edit/:id' element={<UpdateUser updateUsers={updateUsers} users={users} />} />
      </Routes>
    </Router>
  );
}

export default App;