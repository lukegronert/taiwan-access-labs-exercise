import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setUsers } from '../redux/actions/userActions';
import UserComponent from './UserComponent';


const UserListing = () => {
    const users = useSelector((state) => state);
    const dispatch = useDispatch();

    const fetchUsers = async () => {
        const response = await fetch('https://api.github.com/users')
            .then(res => res.json())
            .then(json => dispatch(setUsers(json)))
            .catch(err => console.log('Err ', err))
    }
    useEffect(() => {
        fetchUsers();
    }, [])
    return (
        <div>
            <UserComponent />
        </div>
    )
}

export default UserListing;