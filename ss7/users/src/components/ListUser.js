import { getUsers, deleteUser } from "../services/userService";
import { useState, useEffect } from "react";

function ListUser() {
  const [users, setUsers] = useState([]);
  const [flag, setFlag] = useState(false);
  const getListUser = async () => {
    const data = await getUsers();
    setUsers(data);
  };

  useEffect(() => {
    getListUser();
  }, [flag]);

  const handleDelete = async (id) => {
    const confirm = window.confirm("Do you wanna delete this");
        if (confirm) {
            setFlag(!flag);
            await deleteUser(id).then(() => {
                alert("Delete Success");
            })
        }
}

  return (
    <>
      <table border={1} cellSpacing={1}>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>UserName</th>
            <th>Email</th>
            <th>Adress</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => {
            return (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.address}</td>
                <td>
                  <button onClick={() => handleDelete(user.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default ListUser;