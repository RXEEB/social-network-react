import React from "react";
import css from './Users.module.css'
import {NavLink} from "react-router-dom";

import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import PersonAddDisabledRoundedIcon from "@material-ui/icons/PersonAddDisabledRounded";
import PersonAddRoundedIcon from "@material-ui/icons/PersonAddRounded";
import useStyles from "./usersMUIstyle";
import IconButton from '@material-ui/core/IconButton';

import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import * as axios from "axios";
import {unfollow} from "../../redux/users-reducer";


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

                                {u.followed ? <IconButton startIcon={<FavoriteIcon/>} variant="contained" onClick={() => {

                                        axios.delete(`https://social-network.samuraijs.com/api/1.0/follow${u.id} `,
                                            {
                                                withCredentials: true,
                                                headers: {
                                                    "API-KEY": "8dd45d12-2137-4ff0-93b2-7557795beab9"
                                                }
                                            })
                                            .then(response => {
                                                if (response.data.resultCode === 0) {
                                                    props.unfollow(u.id)
                                                }
                                            })
                                    }}><FavoriteIcon/></IconButton>
                                    : <IconButton startIcon={<FavoriteBorderIcon/>} variant="contained" onClick={() => {
                                        axios.post(`https://social-network.samuraijs.com/api/1.0/follow${u.id} `, {},
                                            {withCredentials: true,
                                                headers: {
                                                    "API-KEY": "8dd45d12-2137-4ff0-93b2-7557795beab9"
                                                }
                                            })
                                            .then(response => {
                                                if (response.data.resultCode === 0) {
                                                    props.follow(u.id)
                                                }
                                            })


                                    }}><FavoriteBorderIcon/> </IconButton>}


                            </CardActions>

                        </Card>
                    )
                }

            </div>
        </div>
    )

}

export default Users