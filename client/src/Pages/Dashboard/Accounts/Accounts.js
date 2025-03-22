import axios from "axios";
import { useEffect, useState } from "react";
import Cookie from "cookie-universal";
import { Link } from "react-router-dom";

export default function Accounts() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const cookie = Cookie();
  const accessToken = cookie.get("access");

  async function getUsers() {
    setLoading(true);
    try {
      let res = await axios.get("http://localhost:5000/users", {
        headers: {
          Authorization: accessToken,
        },
      });
      setUsers(res.data);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getUsers();
  }, []);
  return loading ? (
    <p>loading...</p>
  ) : (
    <div className="p-6 bg-white shadow-md rounded-lg w-full">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Accounts</h2>

      <div className="overflow-x-auto md:flex-row flex-col flex ">
        <table className="w-full border-collapse">
          <thead className="bg-gray-100 text-gray-700 uppercase text-sm">
            <tr>
              <th className="p-3 text-left border-b">Name</th>
              <th className="p-3 text-left border-b">Email</th>
              <th className="p-3 text-left border-b">Role</th>
              <th className="p-3 text-left border-b">Phone</th>
              <th className="p-3 text-left border-b">Location</th>
              <th className="p-3 text-left border-b text-center">Actions</th>
            </tr>
          </thead>

          <tbody>
            {users.map((user,i)=><tr className="border-b hover:bg-gray-50 ">
              <td className="p-3">
                {user.name}
              </td>
              <td className="p-3">{user.email}</td>
              <td className="p-3">{user.role}</td>
              <td className="p-3">{user.phone}</td>
              <td className="p-3">{user.location}</td>
              <td className="p-3 text-center">
                <Link to={`/dashboard/accounts/${user._id}`} className="px-3 py-1 text-sm text-white bg-blue-500 rounded hover:bg-blue-600">
                  Edit
                </Link>
                <button className="px-3 py-1 text-sm text-white bg-red-500 rounded hover:bg-red-600 ml-2">
                  Delete
                </button>
              </td>
            </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
