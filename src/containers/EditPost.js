import React from 'react'
import PostInfo from './PostInfo';

class EditPost extends React.Component {

    state = {
        submited: false,
        date: this.props.date,
        caption: this.props.caption,
        hastags: this.props.hashtags
    }

    handleSumbitClick = () => {
        this.setState({
            submited: true
        })   
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
            hashtags: event.target.value
        })
    }
    render(){
        return (
            <div>
                {(this.state.handleSumbitClick === false)
                ?
                <form>
                    <label>
                        Date:
                        <input type="date" value={this.state.date} name="date" onChange={this.handleDateChange} /><br></br>
                        Caption:
                        <input type="text"  value={this.state.caption} name="caption" onChange={this.handleCaptionChange} /><br></br>
                        Hashtags:
                        <input type="text" value={this.state.hashtags} name="hashtags" onChange={this.handleHashtagsChange} /><br></br>
                    </label>
                    <br></br><input onClick={this.handleSumbitClick}type="submit" value="Submit" />
                </form>  
                : 
                <PostInfo date={this.state.date} caption={this.state.caption} hashtags={this.state.hashtags} />   
            }        
            </div>
        )
        }
}

export default EditPost

