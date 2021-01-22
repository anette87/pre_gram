import React from 'react';

export default function Calendar() {

    return (
        <div>
            <form id="login-form" class="login-form">
                <label for="user-id" >Email:</label>
                <input type="email" name="user-id" id="partner-user-ID"></input>
                <label for="user-password" >Password:</label>
                <input type="password" name="user-password" id="partner-user-secret"></input>
                <input type="submit" id="submit-button" value="Submit"></input>   
            </form>   
        </div> 
        )
}


