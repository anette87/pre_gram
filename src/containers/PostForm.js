import React from 'react';


class PostForm extends React.Component {

    state = {
        date: "",
        caption: "",
        hastags: ""
    }
    
    handleDateChange = (event) => { 
        this.setState({
            date: event.target.value
        })
    }
    
    handleCaptionChange = (event) => { 
        this.setState({
            caption: event.target.value
        })
    }
    
    handleHashtagsChange = (event) => { 
        this.setState({
            hastags: event.target.value
        })
    }

    render(){
        {console.log(this.props.submitClick)}
        return(
            <form>
                <label>
                    Date:
                    <input type="date" value={this.state.date} name="date" onChange={this.handleDateChange} /><br></br>
                    Caption:
                    <input type="text"  value={this.state.caption} name="caption" onChange={this.handleCaptionChange} /><br></br>
                    Hashtags:
                    <input type="text" value={this.state.hashtags} name="hashtags" onChange={this.handleHashtagsChange} /><br></br>
                </label>
                <br></br><input onClick={this.props.submitClick}type="submit" value="Submit" />
            </form>
            
        )
            
    }

}

export default PostForm;