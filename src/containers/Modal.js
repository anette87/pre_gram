import React from 'react';
import Post from '../containers/Post';
import PostForm from '../containers/PostForm';



class Modal extends React.Component {

    // constructor(props) {
    //     super(props)

    //     this.state = {
    //         showEdit: false
    //     }

    //     this.handleEditClick = this.handleEditClick.bind(this)
    // }

    state = {
            showEdit: false,
            submited: false
        }


    handleEditClick = () => {
        this.setState({
            showEdit: true
        })   
    }

    handleSumbitClick = () => {
        this.setState({
            submited: true
        })   
    }

    render(){
        if (this.state.showEdit === false)
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
                                            {this.state.submited === false && <PostForm />}
                                            {this.state.submited === true && <PostForm />}
                                            </div> 
                                            <div>
                                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                                <button type="button" class="btn btn-primary">Save changes</button>
                                                <button type="button" class="btn btn-primary" onClick={this.handleEditClick}>Edit</button>
                                            </div>  
                                        </div>            
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>        
            )
        else 
            return (
                <div>
                    <div class="modal fade" id={`${this.props.galleryId}-${this.props.imageId}`} tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                        <div class="modal-dialog modal-dialog-centered" role="document">
                            <div class="modal-content">
                                <div class="modal-body">
                                    <div class="row">
                                        <div class="col-lg-5">
                                            <h5 class="modal-title" id="exampleModalLongTitle"> <Post /> </h5>
                                        </div>
                                        <div class="col-lg-7">
                                            <div class="modal-body">
                                            ...
                                            </div> 
                                            <div>
                                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                                <button type="button" class="btn btn-primary">Save changes</button>
                                                <button type="button" class="btn btn-primary" onClick={this.handleEditClick}>Edit</button>
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