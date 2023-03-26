import React from "react";
import CreatePost from "./Post";

const CreatePostList = (props) => {
    return (
        <div>
            <h1 style={{textAlign: 'center', marginTop: 10}}>{props.title}</h1>
            {props.obj.map(item => {
                return <CreatePost post={item} key={item.id}/>
            })}

        </div>
    );
};

export default CreatePostList;