import React from "react";
import *as axios from 'axios'


import css from './Users.module.css'
import Button from "@material-ui/core/Button";
import PersonAddDisabledRoundedIcon from "@material-ui/icons/PersonAddDisabledRounded";
import PersonAddRoundedIcon from "@material-ui/icons/PersonAddRounded";



class Users extends React.Component{

    getUsers =()=> {


    if (this.props.users.length === 0) {

        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {

            this.props.setUsers(response.data.items)
        })
    }

}


    render() {
        return(
            <div className={css.wrapper}>
                <button onClick={this.getUsers}>get users</button>
                {
                    this.props.users.map(u => 
                        <div key = {u.id}>
                            <div>
                                <img src={u.photos.small } alt=""/>
                            </div>
                            <div>
                                {u.followed ? <button   variant="contained" onClick={() => {
                                        this.props.unfollow(u.id)
                                    }}>Unfollow</button>
                                    : <button  variant="contained" onClick={() => {
                                        this.props.follow(u.id)
                                    }}>follow</button>}
                            </div>
                        </div>
                    )
                }
                
            </div>

        )
    }

}


export default Users;