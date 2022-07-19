import React, { useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {useParams} from 'react-router-dom';
import {setSelectedUser} from '../redux/actions/userActions';
import '../css/userDetail.css';

const UserDetail = () => {
    const user = useSelector((state) => state.user)
    const {userLogin} = useParams();
    const {avatar_url, name, bio, login, site_admin, location, blog} = user;
    const dispatch = useDispatch();

    // Fetches API data for selected user and sets it to user state in the store
    const fetchUser = async () => {
        const response = await fetch(`https://api.github.com/users/${userLogin}`)
            .then(res => res.json())
            .then(json => dispatch(setSelectedUser(json)))
            .catch(err => console.log('Err ', err));
    }

    // When userLogin is changed, calls fetchUser
    useEffect(() => {
        if(userLogin && userLogin !== "") {
            fetchUser();
        }
    }, [userLogin])
    return (
            <div key={login} className="user-detail-container">
                <img src={avatar_url} alt={login} className="user-detail-image" />
                <div className="user-detail-content">
                    <p className="user-detail-name">
                        Name: {name !== null ? name : 'Unspecified'}
                        {site_admin === true ? (
                        <span className="user-detail-admin-badge">admin</span>
                        ) : (
                            null
                        )}
                    </p>
                    <p className="user-detail-bio">Bio: {bio !== null ? bio : 'Unspecified'}</p>
                    <p className="user-detail-login">Username: {login !== null ? login : 'Unspecified'}</p>
                    <p className="user-detail-location">Location: {location !== null ? location : 'Unspecified'}</p>
                    <p>Blog Link: {blog !== null ? <a href={blog} className="user-detail-blog">{blog}</a> : 'Unspecified'}</p>
                </div>
            </div>
    )
}

export default UserDetail;