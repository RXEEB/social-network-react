import React from "react";
import css from './Users.module.css'

import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import PersonAddDisabledRoundedIcon from "@material-ui/icons/PersonAddDisabledRounded";
import PersonAddRoundedIcon from "@material-ui/icons/PersonAddRounded";
import useStyles from "./usersMUIstyle";







let Users =  (props) => {
    const classes = useStyles();
    let pagesCount = Math.ceil (props.totalUsersCount / props.pageSize/20 )


    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)


    }





    return(
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
                                <Avatar alt="user avatar" src={u.photos.small}/>
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
                                {u.followed ?
                                    <Button startIcon={<PersonAddDisabledRoundedIcon/>} variant="contained" onClick={() => {
                                        props.unfollow(u.id)
                                    }}>Unfollow</Button>
                                    : <Button startIcon={<PersonAddRoundedIcon/>} variant="contained" onClick={() => {
                                        props.follow(u.id)
                                    }}>follow</Button>}

                            </CardActions>

                        </Card>
                    )
                }

            </div>
        </div>
    )

}

export default Users