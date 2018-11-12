import React from 'react';
import PropTypes from 'prop-types';
import data from './Data';


var profilePicture = require('../images/comment_author.png');

class ReplyBox extends React.Component {
    
render() {
      
        return (
            <div className="post-outer-container">
                <div className="post-container">
                    <div className="post-details">
                        <img src={profilePicture} alt="" className="user-image"/>
                        <div className="user-container">
                            <h3 className="user-container__user"><a href="javascript:;">Ilian Stefanov</a></h3>
                            <div className="user-container__details">
                                <span className="timing"><a href="javascript:;">{this.props.date}</a></span>
                                <span className="location"><a href="javascript:;"></a></span>
                            </div>
                        </div>
                        <div className="clear"></div>
                    </div>

                    {/* Post */}
                    <p className="post-content">{this.props.text}</p>


                    <div className="post-actions">
                        <span className="post-actions__like"><a href="javascript:;">LIKE</a></span>
                        <span className="post-actions__share"><a href="javascript:;">SHARE</a></span>
                    </div>
                </div>
            </div>
        );
    }
}
ReplyBox.propTypes = {
    id: PropTypes.number,
    text: PropTypes.string
};

export default ReplyBox;