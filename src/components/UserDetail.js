import React, { useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {useParams} from 'react-router-dom';
import {setSelectedUser} from '../redux/actions/userActions';

const UserDetail = () => {
    const user = useSelector((state) => state.user)
    const {userLogin} = useParams();
    const {login, avatar_url, site_admin} = user;
    const dispatch = useDispatch();

    const fetchUser = async () => {
        const response = await fetch(`https://api.github.com/users/${userLogin}`)
            .then(res => res.json())
            .then(json => dispatch(setSelectedUser(json)))
            .catch(err => console.log('Err ', err));
    }

    useEffect(() => {
        if(userLogin && userLogin !== "") {
            fetchUser();
        }
    }, [userLogin])
    return (
        <div>
                <div key={login}>
                    <p>{login}</p>
                    <img src={avatar_url} alt={login} />
                    <p>{site_admin}</p>
                </div>
        </div>
    )
}

export default UserDetail;