import React from 'react';
import EditPost from './EditPost';


class PostInfo extends React.Component {

    state = {
        editButtonClicked: false
    }

    handleEditClick = () => {
        this.setState({
            editButtonClicked: true
        })   
    }

    render(){
        {console.log(this.state.editButtonClicked)}
        return(
            <div>
                {(this.state.editButtonClicked === false)
                ?
                <div>
                    <p>Date: {this.props.date}</p>
                    <p>Caption: {this.props.caption}</p>
                    <p>Hashtags: {this.props.hashtags} </p>
                    <br></br><input onClick={this.handleEditClick}type="submit" value="Edit" />
                </div>
                :
                <EditPost date={this.props.date} caption={this.props.caption} hashtags={this.props.hashtags} />
                }
                
            </div>
            
        )
            
    }
}

export default PostInfo;