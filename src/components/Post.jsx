import React from "react";
import '../style/style.css'

const CreatePost = (props) => {
  const clkRemoveItem = event => {
    const target = event.target;
    const elemArr = target.closest('.main_contant');
    const elemP = elemArr.querySelector('p').textContent;

    let search;
    props.arr.find((elem, i) => {
      if (elem.body === elemP) {
        search = i;
      }; 
    });

    props.callback(search);
  };

    return (
        <div className="main_contant">

              <div className="contant_text">
                <h1 style={{margin: 5}}>{props.index+1}. {props.post.title}</h1>
                <p style={{fontSize: 16}}>{props.post.body}</p>
              </div>

              <div>
                <button style={{padding: 10}} onClick={clkRemoveItem}>Удалить</button>
              </div>

        </div>
    );
};

export default CreatePost;