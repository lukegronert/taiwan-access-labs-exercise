import React, { useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {useParams} from 'react-router-dom';
import {setSelectedUser} from '../redux/actions/userActions';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Badge from '@mui/material/Badge';

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
    <Card sx={{ maxWidth: 300, margin: 'auto' }}>
      <img src={avatar_url} alt={name} height="300" width="300" />
      <CardContent sx={{ padding: '5px'}}>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        {site_admin === true ? (
            <Badge badgeContent={'admin'} color="primary" sx={{ marginBottom: '10px'}}>
            </Badge>) : (
                null
            )}
        <Typography variant="body2" color="text.secondary">
          {bio}
        </Typography>
        <Typography variant="subtitle2" color="text.secondary" mt={1}>
          {login}
        </Typography>
        <Typography variant="subtitle2" color="text.secondary" mt={1}>
          {location}
        </Typography>
      </CardContent>
      <a href={blog}><Button size="small" style={{ marginBottom: '10px'}}>Blog</Button></a>
    </Card>
  );
}

export default UserDetail;