import React, {useEffect, useState} from 'react';
import { axiosWithAuth } from '../axios/axiosWithAuth';

import Friend from "./Friend";

const axios = axiosWithAuth();

const BubblesPage = (props) => {
    const [formData, setFormData] = useState({
        name: "",
        age: "",
        email: ""
    })

    const onChange = e => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    }

    const onSubmit = e => {
        e.preventDefault();
        axios.post("http://localhost:5000/api/friends", formData)
        .then(({data})=> {
            props.setFriends(data);
            setFormData({
                name: "",
                age: "",
                email: ""
            });
        })
        .catch(err=>{
            console.log(err);
            console.log(props.setFriends);
        });
    }

    const deleteFriend = id => {
        axios.delete(`http://localhost:5000/api/friends/${id}`)
        .then(({data})=>{
            props.setFriends(data);
        })
        .catch(err=>{
            console.log(err);
        })
    }

    const updateFriend = (id, data) => {
        axios.put(`http://localhost:5000/api/friends/${id}`, data)
        .then(({data})=>{
            props.setFriends(data);
        })
        .catch(err=>{
            console.log(err);
        })
    }

    useEffect(() => {
        axios.get("http://localhost:5000/api/friends")
        .then(({data})=>{
            props.setFriends(data);
        })
        .catch(err=>{
            console.log(props.setFriends);
        
        });
    }, []);

    return (
        <main className="friends-list">
            <h1>Friends List</h1>
            <form onSubmit={onSubmit} className="friendForm">
                <label htmlFor="name">
                    <input
                    onChange={onChange}
                    type="text" name="name"
                    value={formData.name}
                    placeholder="Name"/>
                </label>
                <label htmlFor="age">   
                    <input
                    onChange={onChange}
                    type="number" name="age"
                    value={formData.age}
                    placeholder="Age"/>    
                </label>
                <label htmlFor="email">
                    <input
                    onChange={onChange}
                    type="email" name="email"
                    value={formData.email}
                    placeholder="Email"/>    
                </label>
                <button>Submit</button>
            </form>
        
        {props.friends && props.friends.map(friend=>{
            return (
                <Friend updateFriend={updateFriend} deleteFriend={deleteFriend} key={friend.id}/>
            )
        })}
        </main>
    )

}
export default BubblesPage