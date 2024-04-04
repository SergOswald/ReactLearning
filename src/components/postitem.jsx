import React from "react";
import MyButton from "./UI/button/MyButton";

const PostItem = (props) => {
    
    return (
        <div>
            <div className = "post">
                <div className = "post__content">
                    <strong>{props.post.id}. {props.post.title}</strong>
                    <div>
                        Javascript-язык програмирования
                    </div>
                </div>
                <div className = "post__btns">
                    <button>Удалить</button>
                </div>
            </div>
        </div>
    );

}

export default PostItem;