import React from 'react';
import PostInfo from '../containers/PostInfo';



class Modal extends React.Component {

    state = {
            submited: false,
            date: "",
            caption: "",
            hastags: ""
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
            hastags: event.target.value
        })
    }

    render(){
        return(
            <div>
                <div class="modal fade" id={`${this.props.galleryId}-${this.props.imageId}`} tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                    <div class="modal-dialog modal-lg modal-dialog-centered" role="document">
                        <div class="modal-content">
                            <div class="modal-body">
                                <div class="row">
                                    <div class="col-lg-5">
                                        <h5 class="modal-title" id="exampleModalLongTitle"> {this.props.images} </h5>
                                    </div>
                                    <div class="col-lg-7">
                                        <div class="modal-body">
                                            {(this.state.submited === false)  /*if submited is false show the form (?) else (:) show the PostInfo component*/
                                                ? <form>
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
                                                : <PostInfo />
                                            }    
                                        </div> 
                                    </div>            
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>        
        )        
    }
}

export default Modal;

