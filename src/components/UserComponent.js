import React from 'react';
import {useSelector} from 'react-redux';
import {Link} from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import Badge from '@mui/material/Badge';
import '../css/userComponent.css';

const UserComponent = () => {
    // Sets users as the users state from the store
    const users = useSelector(state => state.allUsers.users)
    // Maps through users array and puts user information into jsx
    const renderList = users.map((user) => {
        const {login, avatar_url, site_admin} = user;
        return (
            <div className="user-component-container" key={login}>
                <Link to={`/users/${login}`}>
                    {site_admin === true ? (
                        <Badge badgeContent={'admin'} color="primary">
                            <Avatar sx={{ width: 100, height: 100 }}>
                                <img src={avatar_url} alt={login} className="user-component-image" />
                            </Avatar>
                        </Badge>) : (
                        <Avatar sx={{ width: 100, height: 100 }}>
                            <img src={avatar_url} alt={login} className="user-component-image" />
                        </Avatar>
                        )}
                    <p>{login}</p>
                </Link>
            </div>
        )
    })

    return (
        <>
            {renderList}
            <p className="user-component-item-count">This page contains {users.length} items.</p>
        </>
    );
  }

export default UserComponent;