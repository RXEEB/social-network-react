import React from "react";
import *as axios from 'axios'

import Ava from './../../assets/Avatar/avatar_1.svg'

import Button from '@material-ui/core/Button';

import css from './Users.module.css'

// import Button from "@material-ui/core/Button";
// import PersonAddDisabledRoundedIcon from "@material-ui/icons/PersonAddDisabledRounded";
// import PersonAddRoundedIcon from "@material-ui/icons/PersonAddRounded";



class Users extends React.Component{
    // constructor(props) {
    //     super(props);
    //
    //
    // }
    componentDidMount() {


                axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {

                    this.props.setUsers(response.data.items)
                    this.props.setTotalUsersCount(response.data.totalCount)
                })

    }

    onPageChanged =(pageNumber) =>{
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {

            this.props.setUsers(response.data.items)

        })
    }

    render() {
        let pagesCount = this.props.totalUsersCount / this.props.pageSize




        let pages =[]
        for (let i=1; i <= pagesCount ; i++){
            pages.push(i)


        }



        return(
            <div className={css.container}>

                <div className={css.pagination} >
                    {pages.map(p => <span className={this.props.currentPage === p && css.selectedPage  }
                    onClick={(e) => {this.onPageChanged(p)}}
                    >{p}</span> )}


                </div>
            <div className={css.wrapper}>

                {
                    this.props.users.map(u =>
                        <div key = {u.id}>
                            <div className={css.card}>
                                <div className={css.cardImage}>
                                    <img className={css.bg_zig_zag} src={u.photos.small } alt=""/>
                                </div>
                                <div className={css.profileImage}>
                                    <img src={u.photos.small  != null ? u.photos.small : Ava } alt=""/>
                                </div>
                                <div className={css.cardContent}>
                                    <h3>{u.name}</h3>
                                    <p>{u.status}</p>
                                </div>
                                <div className={css.btn} >
                                    {u.followed ? <Button color="primary" disableElevation className={css.btn} variant="contained" onClick={() => {
                                            this.props.unfollow(u.id)
                                        }}>Unfollow</Button>
                                        : <Button color="primary" disableElevation className={css.btn} variant="contained" onClick={() => {
                                            this.props.follow(u.id)
                                        }}>follow</Button>}
                                </div>
                            </div>
                            {/*<div>*/}
                            {/*    <img src={u.photos.small } alt=""/>*/}
                            {/*</div>*/}



                        </div>
                    )
                }

            </div>
            </div>
        )
    }

}


export default Users;