import * as axios from "axios";



const  instance = axios.create({
    withCredentials: true,
    baseURL:'1https://social-network.samuraijs.com/api/1.0',
    headers: {
        "API-KEY": "8dd45d12-2137-4ff0-93b2-7557795beab9"
    },
})
export const  usersAPI = {
    getUsers (currentPage = 1,pageSize = 10 ) {


        return     instance.get(`/users?page=${currentPage}&count=${pageSize}`,)
            .then(response => {
                return response.data} )

    },
    follow(userId) {
        return instance.post(`follow/${userId}`)

    },
    unfollow(userId){

     return    instance.delete(`follow/${userId} `)



    },
    getProfile (userId) {
        return instance.get(`profile/` + userId)

    }


}

export const  authAPI ={
    me() {
     return    instance.get(`auth/me`)
    }
}



// export const getUsers2 = (currentPage = 1,pageSize = 10 ) =>{
//
//
//     return     instance.get( `/follow?page=${currentPage}&count=${pageSize}`,)
//         .then(response => {
//         return response.data} )
//
// }




