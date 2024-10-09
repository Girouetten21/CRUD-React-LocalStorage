import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import "../css/CreateUser.css";

const CreateUser = ({ users, setUsers }) => {
  const [name, setName] = useState("");
  const [username, setUserName] = useState("");
  const [country, setCountry] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const storedUsers = localStorage.getItem('users');
    const storedCount = localStorage.getItem('userCount');

    let newId;
    if (storedCount) {
      newId = parseInt(storedCount) + 1;
    } else {
      newId = 1;
    }
    
    const newUsers = [...(storedUsers ? JSON.parse(storedUsers) : []), { id: newId, name, username, country }];
    localStorage.setItem('users', JSON.stringify(newUsers));
    localStorage.setItem('userCount', newId.toString());
    setUsers(newUsers);
    navigate('/');
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="title">Create new user</h2>
      <form onSubmit={handleSubmit} className="form">
        <div className="input-group">
          <label htmlFor="name">Name</label>
          <input
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="input"
          />
        </div>
        <div className="input-group">
          <label htmlFor="username">Username</label>
          <input
            id="username"
            name="username"
            value={username}
            onChange={(e) => setUserName(e.target.value)}
            required
            className="input"
          />
        </div>
        <div className="input-group">
          <label htmlFor="country">Country</label>
          <input
            id="country"
            name="country"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            required
            className="input"
          />
        </div>
        <button type="submit" className="create-button">
          CREATE
        </button>
      </form>
    </div>
  );
}

export default CreateUser;