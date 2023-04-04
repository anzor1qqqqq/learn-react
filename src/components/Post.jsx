import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import '../style/style.css';

const CreatePost = (props) => {
  const navigation = useNavigate();
  const location = useLocation();

  const PushLink = id => {
    navigation(`${location.pathname}/${id}`);
  };

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
                <h1 style={{margin: 5}}>{props.index}. {props.post.title}</h1>
                <p style={{fontSize: 16}}>{props.post.body}</p>
              </div>

              <div style={{display: 'flex'}}>
                <button style={{padding: 10, marginRight: 10}} onClick={() => PushLink(props.index)}>Открыть</button>
                <button style={{padding: 10}} onClick={clkRemoveItem}>Удалить</button>
              </div>

        </div>
    );
};

export default CreatePost;