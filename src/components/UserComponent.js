import React from 'react';
import {useSelector} from 'react-redux';
import {Link} from 'react-router-dom';
import '../css/userComponent.css';

const UserComponent = () => {
    // Sets users as the users state from the store
    const users = useSelector(state => state.allUsers.users)
    // Maps through users array and puts user information into jsx
    const renderList = users.map((user) => {
        const {login, avatar_url, site_admin} = user;
        return (
            <div key={login} className="user-component-container">
                <Link to={`/users/${login}`}>
                    <p className="user-component-login">{login}</p>
                    <img className="user-component-image" src={avatar_url} alt={login} />
                        {site_admin === true ? (
                            <p className="user-component-admin-badge">admin</p>
                            ) : (
                                <p className="user-component-admin-badge badge-invisible">admin</p>
                            )}
                </Link>
            </div>
        )
    })
    return (
        <>{renderList}</>
    )
}

export default UserComponent;