import React from 'react';


class PostInfo extends React.Component {
    render(){
        {console.log(this.props)}
        return(
            <div>
                <p>Date: {this.props.date}</p>
                <p>Caption: {this.props.caption}</p>
                <p>Hashtags: {this.props.hashtags} </p>
            </div>
            
        )
            
    }
}

export default PostInfo;