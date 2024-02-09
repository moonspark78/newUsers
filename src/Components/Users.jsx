import { useState,useEffect } from 'react'

export const Users = () => {
    const [users, setUsers] = useState([])

    useEffect(() =>{
        const fetchData = async () => {
            const reponse = await fetch("https://jsonplaceholder.typicode.com/users");
            const data = await reponse.json();
            console.log(data);
            setUsers(data);
        };
        fetchData();
    },[]);

  return (
    <div>
        <h2 className='text-3xl underline'>Users</h2>
        <div>
            {
                users.map(user =>(
                    <p>{user.name}</p>
                ))
            }
        </div>
    </div>
  )
}
