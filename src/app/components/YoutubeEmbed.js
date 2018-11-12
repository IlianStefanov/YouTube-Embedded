import React from 'react';
import VideoOptions from './VideoOptions';

import CommentInput from './CommentInput';
import CommentBox from './CommentBox';

import {Link} from 'react-router-dom';

var YoutubeEmbed = (match) => {
   
    
    
    
    return (
        <div className="video-pop">
            <Link to="/" className="close-thin"></Link>
            <div className="VidWrapper">
              
               <iframe className="player" type="text/html" width="100%" height="420" frameBorder="0" allowFullScreen 
              src={`https://www.youtube.com/embed/${match.location.pathname}`}
              />

             </div>
             
             {/*COMMENTS OPTIONS LIKE SHARE DELETE AND EDIT*/}
             
             <VideoOptions />
             <CommentInput />
             
             
          
             
             
             
        </div>
    );
};

export default YoutubeEmbed;