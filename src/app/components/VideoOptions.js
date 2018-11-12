import React from 'react';


class VideoOptions extends React.Component {
    
    render() {

    return (
        <div>
        <ul className="buttons-left">
            <li className="like"><a>LIKE</a></li>
            <li className="share"><a>SHARE</a></li>
        </ul>
        <ul className="buttons-right">
           <li className="delete"><a>DELETE</a></li>
            <li className="edit"><a>EDIT</a></li>
            
        </ul>
    
    </div>
    );
    }
}


export default VideoOptions;