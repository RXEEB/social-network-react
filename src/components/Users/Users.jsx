import React from "react";
import css from './Users.module.css'
import {NavLink} from "react-router-dom";


import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";

import useStyles from "./usersMUIstyle";
import IconButton from '@material-ui/core/IconButton';

import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import * as axios from "axios";
import {usersAPI} from "../../api/api";


let Users = (props) => {
    const classes = useStyles();
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize / 20)


    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)


    }


    return (
        <div className={css.container}>

            <div className={css.pagination}>
                {pages.map(p => <span key={p.id} className={props.currentPage === p && css.selectedPage}
                                      onClick={(e) => {
                                          props.onPageChanged(p)
                                      }}
                >{p}</span>)}
            </div>

            <div className={css.wrapper}>

                {
                    props.users.map(u => <Card key={u.id} className={classes.root}>

                            <CardContent>
                                <NavLink to={'/profile/' + u.id}>
                                    <Avatar alt="user avatar" src={u.photos.small}/>
                                </NavLink>
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
                                {/*<Typography variant="body2" component="p">*/}
                                {/*    well meaning and kindly.*/}
                                {/*    <br/>*/}
                                {/*    {'"a benevolent smile"'}*/}
                                {/*</Typography>*/}
                            </CardContent>

                            <CardActions>
                                {/*{u.followed ?*/}
                                {/*    <Button startIcon={<PersonAddDisabledRoundedIcon/>} variant="contained" onClick={() => {*/}
                                {/*        props.unfollow(u.id)*/}
                                {/*    }}>Unfollow</Button>*/}
                                {/*    : <Button startIcon={<PersonAddRoundedIcon/>} variant="contained" onClick={() => {*/}
                                {/*        props.follow(u.id)*/}
                                {/*    }}>follow</Button>}*/}
                                {/*<IconButton aria-label="add to favorites">*/}
                                {/*    <FavoriteIcon />*/}
                                {/*</IconButton>*/}

                                {u.followed ? <IconButton startIcon={<FavoriteIcon/>} variant="contained"
                                                          disabled={props.followingInProgress.some(id => id === u.id)}
                                                          onClick={() => {props.unfollow(u.id)
                                                          }}>
                                        <FavoriteIcon/></IconButton>
                                    : <IconButton  startIcon={<FavoriteBorderIcon/>} variant="contained"
                                        disabled={props.followingInProgress.some(id => id === u.id)}

                                                  onClick={() => {props.follow(u.id)}}>
                                        <FavoriteBorderIcon/> </IconButton>}


                            </CardActions>

                        </Card>
                    )
                }

            </div>
        </div>
    )

}

export default Users