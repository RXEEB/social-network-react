import React from "react";
import css from "./Users.module.css";
import Ava from "../../assets/Avatar/avatar_1.svg";
import Button from "@material-ui/core/Button";


let Users =  (props) => {

    let pagesCount = Math.ceil (props.totalUsersCount / props.pageSize )


    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)


    }


    return(
        <div className={css.container}>

            <div className={css.pagination}>
                {pages.map(p => <span className={props.currentPage === p && css.selectedPage}
                                      onClick={(e) => {
                                          props.onPageChanged(p)
                                      }}
                >{p}</span>)}


            </div>
            <div className={css.wrapper}>

                {
                    props.users.map(u =>
                        <div key={u.id}>
                            <div className={css.card}>
                                <div className={css.cardImage}>
                                    <img className={css.bg_zig_zag} src={u.photos.small} alt=""/>
                                </div>
                                <div className={css.profileImage}>
                                    <img src={u.photos.small != null ? u.photos.small : Ava} alt=""/>
                                </div>
                                <div className={css.cardContent}>
                                    <h3>{u.name}</h3>
                                    <p>{u.status}</p>
                                </div>
                                <div className={css.btn}>
                                    {u.followed ? <Button color="primary" disableElevation className={css.btn}
                                                          variant="contained" onClick={() => {
                                            props.unfollow(u.id)
                                        }}>Unfollow</Button>
                                        : <Button color="primary" disableElevation className={css.btn}
                                                  variant="contained" onClick={() => {
                                            props.follow(u.id)
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

export default Users