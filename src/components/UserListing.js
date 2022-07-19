import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setUsers } from '../redux/actions/userActions';
import UserComponent from './UserComponent';
import '../css/userListing.css';


const UserListing = () => {
    const users = useSelector((state) => state);
    const dispatch = useDispatch();

    // Fetches API data, sets the response as the users state
    const fetchUsers = async () => {
        const response = await fetch('https://api.github.com/users?since=0&per_page=100')
            .then(res => res.json())
            .then(json => dispatch(setUsers(json)))
            .catch(err => console.log('Err ', err))
    }

    // Calls fetchUsers when component loads
    useEffect(() => {
        fetchUsers();
    }, [])
    return (
        <div className="user-listing-container">
            <UserComponent />
        </div>
    )
}

export default UserListing;