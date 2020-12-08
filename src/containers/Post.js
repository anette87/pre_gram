import React, {useState} from 'react';
import {useDropzone} from 'react-dropzone';
import Modal from './Modal.js';

function Post(props) {
  const [files, setFiles] = useState([])
  
  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
    onDrop: (acceptedFiles) => {
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      )
    },
  })

  const images = files.map((file) => (
    <div key={file.name}>
      {console.log(file)}
      <div>
        <img src={file.preview} className="imageSize" alt="preview" id={file.lastModified} />
      </div>
    </div>
  ))

  if (images.length === 0){
    return (
    <div>
      <div className="addImageblock" {...getRootProps()}>
        <input {...getInputProps()} />
        <img src="draganddropicon.png"/>
        <p>Add Image</p>  
      </div>
    </div>
    )}
    else {
      return(
        <div>
          <div data-toggle="modal" data-target={`#${props.id}-${images[0].props.children[1].props.children.props.id}`}>{images}</div>
          
          
          <Modal galleryId={props.id} images={images} imageId={images[0].props.children[1].props.children.props.id }  />
          
          {console.log(props.id)}
        </div>
  )}
  
}

export default Post