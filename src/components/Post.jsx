import React from "react";
import '../style/style.css'

const CreatePost = (props) => {
    return (
        <div className="main_contant">
              <div className="contant_text">
                <h1 style={{margin: 5}}>{props.post.title}</h1>
                <p style={{fontSize: 16}}>{props.post.body}</p>
              </div>

              <div>
                <button>Удалить</button>
              </div>

        </div>
    );
};

export default CreatePost;