import React from 'react';


class PostForm extends React.Component {
    render(){
        return(
            <form>
                <label>
                    Date:
                    <input type="date" name="date" /><br></br>
                    Caption:
                    <input type="text" name="caption" /><br></br>
                    Hashtags:
                    <input type="text" name="hashtags" /><br></br>
                </label>
                <br></br><input type="submit" value="Submit" />
            </form>
            
        )
            
    }

}

export default PostForm;