
import {connect} from 'react-redux'
import Users from "./Users";
import {
    followActionCreator,
    unfollowActionCreator,
    setUsersActionCreator,
    setCurrentPageActionCreator, setlUsersTotalCountActionCreator
} from "../../redux/users-reducer";


let mapStateToProps =(state) => {
    return{
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,

    }
}
let mapDispatchToProps =(dispatch) => {
    return{
        follow: (userId) => {
            dispatch(followActionCreator(userId))
        },
        unfollow: (userId) => {
            dispatch(unfollowActionCreator(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersActionCreator(users))
        },
        setCurrentPage:(pageNumber) => {
            dispatch(setCurrentPageActionCreator(pageNumber))
        },
        setTotalUsersCount:(totalCount) => {
            dispatch(setlUsersTotalCountActionCreator(totalCount))
        }

    }
}


export default connect(mapStateToProps,mapDispatchToProps, )(Users)