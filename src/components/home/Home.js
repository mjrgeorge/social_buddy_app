import React, { useState, useEffect } from 'react';
import Post from '../post/Post';

const Home = () => {
    const [users, setUsers] = useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data =>setUsers(data))
        .catch(error => console.log(error))
    }, [])
    return (
        <div>
            {
                users.map(user =><Post user={user} key={user.id}></Post>)
            }
        </div>
    );
};

export default Home;