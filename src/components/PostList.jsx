import React from "react";
import CreatePost from "./Post";

const CreatePostList = (props) => {
    const removeItemArr = index => {
        props.callback2(index);
    };

    if (props.lengthArr === 0) {
        return (
            <h1 style={{textAlign: 'center', marginTop: 10}}>Постов нет</h1>
        );
    };
      
    return (
        <div>
            <h1 style={{textAlign: 'center', marginTop: 10}}>{props.title}</h1>
            
            {props.obj.map((item, i) => {
                return <CreatePost callback={removeItemArr} arr={props.obj} index={i} post={item} key={item.id}/>
            })}
        </div>
    );
};

export default CreatePostList;