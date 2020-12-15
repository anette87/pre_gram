import React from 'react';


class PostForm extends React.Component {
    render(){
        {console.log(this.props)}
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
                <br></br><input onClick={this.props.submitClick}type="submit" value="Submit" />
            </form>
            
        )
            
    }

}

export default PostForm;