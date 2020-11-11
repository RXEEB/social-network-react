import React from "react";
import *as axios from 'axios'

import useStyles from './usersMUIstyle'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';



import PersonAddRoundedIcon from '@material-ui/icons/PersonAddRounded';
import PersonAddDisabledRoundedIcon from '@material-ui/icons/PersonAddDisabledRounded';
import css from './Users.module.css'



let UsersFunc = (props) => {
    const classes = useStyles();



    let getUsers =()=> {

    }
        if (props.users.length === 0) {

            axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {

                props.setUsers(response.data.items)
            })


        }


    return <div className={css.wrapper}>


        {
            props.users.map(u =>  <Card key={u.id} className={classes.root}>

                    <CardContent>
                        <Avatar alt="user avatar" src={u.photos.small }/>
                        <Typography className={classes.title} color="textSecondary" gutterBottom>
                            {u.status}
                        </Typography>
                        <Typography variant="h5" component="h2">
                            {u.name}
                        </Typography>
                        <Typography className={classes.pos} color="textSecondary">
                            {'u.location.country'}
                            {'u.location.city'}
                        </Typography>
                        <Typography variant="body2" component="p">
                            well meaning and kindly.
                            <br/>
                            {'"a benevolent smile"'}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        {u.followed ? <Button startIcon={<PersonAddDisabledRoundedIcon />}  variant="contained" onClick={() => {
                                props.unfollow(u.id)
                            }}>Unfollow</Button>
                            : <Button startIcon={<PersonAddRoundedIcon />} variant="contained" onClick={() => {
                                props.follow(u.id)
                            }}>follow</Button>}

                    </CardActions>

                </Card>

            )

        }
            </div>




}

export default UsersFunc;