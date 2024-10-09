import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import "../css/UpdateUser.css";

const UpdateUser  = ({ updateUsers, users }) => {
  const [name, setName] = useState('');
  const [username, setUserName] = useState('');
  const [country, setCountry] = useState('');
  const { id } = useParams();
  const navigate = useNavigate()

  useEffect(() => {
    const storedUsers = localStorage.getItem('users');
    if (storedUsers) {
      const users = JSON.parse(storedUsers);
      const user = users.find((user) => user.id === parseInt(id));
      if (user) {
        setName(user.name);
        setUserName(user.username);
        setCountry(user.country);
      }
    }
  }, [id])

  const handleSubmit = (e) => {
    e.preventDefault()
    const storedUsers = localStorage.getItem('users');
    if (storedUsers) {
      const users = JSON.parse(storedUsers);
      const updatedUsers = users.map((user) => {
        if (user.id === parseInt(id)) {
          return { id: parseInt(id), name, username, country };
        }
        return user;
      });
      localStorage.setItem('users', JSON.stringify(updatedUsers));
      updateUsers(updatedUsers);
      navigate('/')
    }
  }

  const goHome = () => {
    navigate('/')
  }

  return (
    <div className="container mx-auto p-4">
      <h2 className="title">Update User Data</h2>
      <form onSubmit={handleSubmit} className="form">
        <div className="input-group">
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="input"
          />
        </div>
        <div className="input-group">
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUserName(e.target.value)}
            className="input"
          />
        </div>
        <div className="input-group">
          <label>Country:</label>
          <input
            type="text"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            className="input"
          />
        </div>
        <div className="button-container">
          <button
            type="submit"
            className="edit-button">ACCEPT
          </button>
          <button
            onClick={goHome}
            className="cancel-button">CANCEL
          </button>
        </div>
      </form>
    </div>
  );
}

export default UpdateUser ;