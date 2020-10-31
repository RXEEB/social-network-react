
const FOLLOW= 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS =  'SET_USERS'


let initialState = {
    users: [
        // {id: 1, name: 'ruslan', avatarUrl: 'https://cdn.onlinewebfonts.com/svg/img_247335.png', followed: false, status: 'статус', location:{city: 'Kaliningrad', country:'Russia'} },
        // {id: 2, name: 'olga', avatarUrl: 'https://cdn.onlinewebfonts.com/svg/img_247335.png', followed: false, status: 'статус', location:{city: 'Moscow', country:'Russia'} },
        // {id: 3, name: 'pavel', avatarUrl: 'https://cdn.onlinewebfonts.com/svg/img_247335.png', followed: true,status: 'статус', location:{city: 'Kaliningrad', country:'Russia'} },

    ],

};

const usersReducer = (state = initialState, action) => {

    switch(action.type) {
        case FOLLOW:
           return  {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId){
                        return { ...u, followed: true}
                    }
                    return u
                })
            }

        case UNFOLLOW:
            return  {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId){
                        return { ...u, followed: false}
                    }
                    return u
                })
            }
        case SET_USERS:{
            return {...state, users: [...state.users, ...action.users]}
        }

        default:
            return state;
    }
}


export const followActionCreator = (userId) => ({type: FOLLOW, userId})
export const  unfollowActionCreator = (userId) => ({type: UNFOLLOW, userId})
export const  setUsersActionCreator = (users) => ({type: SET_USERS, users} )

export default usersReducer;