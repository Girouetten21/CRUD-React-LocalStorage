const DeleteUser  = (id, updateUsers) => {
  const storedUsers = localStorage.getItem('users');
  if (storedUsers) {
    const updatedUsers = JSON.parse(storedUsers).filter((user) => user.id !== parseInt(id));
    localStorage.setItem('users', JSON.stringify(updatedUsers));
    updateUsers(updatedUsers);
  }
};

export default DeleteUser ;