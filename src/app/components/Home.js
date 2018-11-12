import React from "react";
import { Link } from 'react-router-dom';
var Home = (props) => {
    
    const handleSubmit = (event) => {
      // gets the url on submit and apply it to a regular expression to catch only the id of the video 
      event.preventDefault();
      const regexLinkParse =  /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
      
      const embedYouTubeDomain = "https://www.youtube.com/embed/";
      
      const youtubeLink = event.target.elements[0].value;
     
      // match the id from the URL
      const videoID = youtubeLink.match(regexLinkParse)[7];
        
      // create the embed link which is placed in the iframe 
      const embedYouTubeVideo = embedYouTubeDomain + videoID;
      
      const currentState = props.location;
      
      
      props.history.replace(videoID);
      
    }
    
    return (
      <div className="modal-input-wrapper">
           <div className="modal-aligner">
         
                <h1 className="intro">Paste YouTube Link</h1>


                <form onSubmit={handleSubmit} className="modal-form">
                  <input type="text" placeholder="Enter link here" className="input_link"/> 
                  <button type="submit" className="submit_link_btn">Submit</button>
                </form>

            </div>
         </div>
      );
}

   
export default Home;  
       
   
