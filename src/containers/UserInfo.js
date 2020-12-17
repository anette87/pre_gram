import React from 'react';
import Avatar from "@material-ui/core/Avatar";


function UserInfo() {
    return (
        <div className= "avatar">
            <Avatar className="post_avatar" alt='username'src="/static/images/avatar/1.jpg" />
            <h3>Username</h3>
            
        </div>
    )
}

export default UserInfo

