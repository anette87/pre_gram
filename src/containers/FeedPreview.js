import React, {useState} from 'react';
import UserInfo from "./UserInfo"
import Gallery from './Gallery'


function FeedPreview() {

    const [numGalleries, setnumGalleries] = useState(0)

    const galleries = [];

    for (var i = 0; i < numGalleries; i += 1) {
        galleries.push(<Gallery id={i} />);
    };

    const onAddGallery = () => {
        setnumGalleries(numGalleries + 1)    
    }

    return (
         <div>
            <UserInfo /> 
            {galleries}
            <button onClick={onAddGallery}> Add Row </button>
        </div>
    )
    

}

export default FeedPreview;
