import React from 'react';
import PropTypes from 'prop-types';
import CommentBox from './CommentBox';
import ReplyBox from './ReplyBox';
import data from './Data';




class CommentInput extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            comments: data,
            date: props.date
        }
    }
    
    
        
    handleSubmit(event) {
        event.preventDefault();
        
        const { comments } = this.state;
        
        var commentText = event.target.elements[0].value;
        
        var parentID = this.state.id;
        
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
        
        var formatedDate =
            monthNames[today.getMonth()].toUpperCase() + " "
        + (today.getDate()) 
        + ", " 
        + today.getFullYear() 
        + " AT "
        + hours + ":" + minutes + " " + formater
        + " " ;
        
        
        this.setState({
            comments: [...comments, {
                text: commentText,
                date: formatedDate
            }]
        });
        
        this.textInput.value = '';
    }
    
    render() {
        
        const { comments } = this.state;
         {console.log(comments)}
        
        
        //list all comment boxes generated from the comment form and creates a unique id for each comment box 
        const listComments = comments.map((comment, i) =>
                 
                 <CommentBox key={i} text={comment.text} id={i} parent={null} date={comment.date}>
                     {this.props.children}
                 </CommentBox>
           
        );
        return (
            <div className="CommentInput">
                
                 <form action="submit" ref="commentForm" className="comment-form" onSubmit={this.handleSubmit.bind(this)}>
                 <input type="text" placeholder="comment..." ref={(ref) => this.textInput = ref}/>
            
                </form>
                
                <hr/>
               
                {/* List all comments from the Data component*/}
                <div>
                    {listComments}
                </div>
            </div>
            
        );
    }
}

export default CommentInput;