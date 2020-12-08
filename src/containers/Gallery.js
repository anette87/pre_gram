import React from 'react';
import Post from './Post'

class Gallery extends React.Component {
    render(){
        return(
            <div class="container">
                {console.log(this.props)}
                <div class="gallery" id={this.props.id}>
                <div class="row">
                    <div class="col-sm">
                        <Post id={this.props.id}/>
                    </div>
                <div class="col-sm">
                         <Post id={this.props.id}/>
                </div>
                <div class="col-sm">
                        <Post id={this.props.id}/>
                </div>
                </div>
            </div>
        </div>
        )
    }

}

export default Gallery;