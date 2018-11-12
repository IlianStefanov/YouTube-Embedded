import React from 'react';
import PropTypes from 'prop-types';
import ReplyBox from './ReplyBox';
import data from './Data';

var profilePicture = require('../images/comment_author.png');



class CommentBox extends React.Component {
    
    constructor(props) {
        super(props);
        
        this.state = {
            comments: data,
            id: props.id,
            date: props.date
        }
    }
    
    
    handleReply(event) {
        event.preventDefault();
        
        const { comments } = this.state;
        
        var dayNames = ["Sunday" , "Monday" , "Tuesday" , "Wednesday" , "Thursday" , "Friday" , "Saturday"];
        var monthNames = ["January" , "February" , "March" , "April" , "May" , "June" , "July" , "August" , "September" , "October" , "November" , "December"];
        
        
        var today = new Date();
        
        var minutes = today.getMinutes();
        var hours = today.getHours();
        
        var formater = hours >= 12 ? 'pm' : 'am';
        minutes = minutes < 10 ? '0' + minutes : minutes; 
        today.setDate(today.getDate() + 1);
        
        hours = hours % 12;
        hours = hours ? hours : 12;  
        
        //Formats the date under each box using built in JavaScript class Date(); 
        var formatedDate =
            monthNames[today.getMonth()].toUpperCase() + " "
        + (today.getDate()) 
        + ", " 
        + today.getFullYear() 
        + " AT "
        + hours + ":" + minutes + " " + formater
        + " " ;
        
        var reply = event.target.elements[0].value;
        var replyid = this.state.id;
        
        this.setState({
            comments: [...comments, {
                id: replyid,
                text: reply,
                date: formatedDate
            }]
        });
        console.log(comments);
       
        //Clear the input after reply
        this.textInput.value = '';
        return reply;
    }
        
    
    
    render() {
        const { comments } = this.state;
        const commentID = comments.id;
 
        const listReplies = comments.map((comment, i) =>
             //list all comment boxes generated from the comment form and creates a unique id for each comment box 
             <ReplyBox key={i} text={comment.text} id={comment[i]} date={comment.date} />
        ); 

       
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
                        <span className="post-actions__comment"><a href="javascript:;">COMMENT</a></span>
                        <span className="post-actions__report"><a href="javascript:;">Report</a></span>
                    </div>


                    <div className="reply">
                        <div className="reply-actions__like"><a href="javascript:;">COMMENT</a></div>
                        <div className="reply-actions__comment"><a href="javascript:;" onClick={this.handleReply.bind(this)}>PHOTO</a></div>
                        <div className="reply-actions__share"><a href="javascript:;">FEEDBACK</a></div>


                        <div className="CommentInput">
                            <form action="submit" ref="commentForm" onSubmit={this.handleReply.bind(this)} className="comment-form" >
                                <input type="text" placeholder="Reply..." ref={(ref) => this.textInput = ref}/>
                            </form>
                        </div>
                        
                        {/*List all replies from reply input under the comment with the same id */}
                        <div className="list-replies">
                               {listReplies}
                        </div>
                    </div>
                </div> 
            </div>
        
        );
    }
    
}
CommentBox.propTypes = {
    id: PropTypes.number,
    text: PropTypes.string
};

export default CommentBox;