import React from 'react';

import MyPostsContainer from "./MyPosts/MyPostsContainer";
import Preloader from "../Preloader/Preloader";
import BasicPagination from "../Users/Pagination";



const Profile = () => {
    return (
        <div>

            <MyPostsContainer />
            <Preloader/>
<BasicPagination/>
        </div>
    )
}

export default Profile;