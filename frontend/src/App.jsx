import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const API_URL = "http://localhost:5000/api/users";

  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [editId, setEditId] = useState(null);

  // Fetch all users
  const fetchUsers = async () => {
    try {
      const res = await axios.get(API_URL);
      setUsers(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  // Add or Update User
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email) {
      alert("Please fill all fields");
      return;
    }

    try {
      if (editId) {
        await axios.put(`${API_URL}/${editId}`, {
          name,
          email,
        });

        setEditId(null);
      } else {
        await axios.post(API_URL, {
          name,
          email,
        });
      }

      setName("");
      setEmail("");

      fetchUsers();
    } catch (error) {
      console.error(error);
    }
  };

  // Delete User
  const deleteUser = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      fetchUsers();
    } catch (error) {
      console.error(error);
    }
  };

  // Edit User
  const editUser = (user) => {
    setName(user.name);
    setEmail(user.email);
    setEditId(user._id);
  };

  return (
  <div className="container">
    <h1>User Management System</h1>

    <form className="form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="email"
        placeholder="Enter Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <button className="submit-btn" type="submit">
        {editId ? "Update User" : "Add User"}
      </button>
    </form>

    <h2 className="users-title">All Users</h2>

    {users.length === 0 ? (
      <p className="empty">No users found</p>
    ) : (
      users.map((user) => (
        <div className="user-card" key={user._id}>
          <h3>{user.name}</h3>
          <p>{user.email}</p>

          <div className="actions">
            <button
              className="edit-btn"
              onClick={() => editUser(user)}
            >
              Edit
            </button>

            <button
              className="delete-btn"
              onClick={() => deleteUser(user._id)}
            >
              Delete
            </button>
          </div>
        </div>
      ))
    )}
  </div>
);
}

export default App;