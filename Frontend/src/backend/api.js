import { LogOut } from "lucide-react"

const server = "http://localhost:8000/api/v1"


export default {
    registerUser : `${server}/users/register`,
    loginUser: `${server}/users/login`,
    LogoutUser:`${server}/users/logout`,
    refreshToken: `${server}/users/refresh-token`,
    changeCurrentPassword: `${server}/users/changeCurrentPassword`,
    getCurrentUser:`${server}/users/getCurrentUser`,
    updateAccountDetails: `${server}/users/updateAccountDetails`,
    updateUserAvatar: `${server}/users/updateUserAvatar`,
    updateUserCoverImage: `${server}/users/updateUserCoverImage`,
    getUserProfile:`${server}/users/getUserChannelProfile`,

    // Comment Api

    getComments : `${server}/comments/getComments`,  // send data in params and query
    addComments : `${server}/comments/addComment`,
    updateComment : `${server}/comments/updateComment`,
    deleteComment: `${server}/comments/deleteComment`,

    // video apis

    publishVideo : `${server}/videos/` // POST for public and GET for getAllVideos

}