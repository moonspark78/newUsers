import { useState, useEffect } from "react";

export const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const reponse = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await reponse.json();
      console.log(data);
      setUsers(data);
    };
    fetchData();
  }, []);

  return (
    <div className="text-center">
      <h2 className="text-3xl underline">Users</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mx-auto max-w-screen-lg">
        {users.map((user) => (
          <div key={user.id} className="rounded-md p-4 shadow-md w-full md:w-auto">
            <p className="text-black">{user.name}</p>
            <p className="text-black">{user.email}</p>
            <p className="text-black">{user.phone}</p>
            <p className="text-black">{user.website}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
