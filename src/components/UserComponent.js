import React from 'react';
import {useSelector} from 'react-redux';

const UserComponent = () => {
    const users = useSelector(state => state.allUsers.users)
    const renderList = users.map((user) => {
        const {login, avatar_url, site_admin} = user;
        return (
            <div key={login}>
                <p>{login}</p>
                <img src={avatar_url} alt={login} />
                <p>{site_admin}</p>
            </div>
        )
    })
    return (
        <>{renderList}</>
    )
}

export default UserComponent;