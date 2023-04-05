import React from "react";  
import CreatePost from "./Post";
import ButtonSwitchList from "../components/ButtonSwitchList";
import { LoadingAnimate } from "./loadingAnimate";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import '../style/style.css';

const CreatePostList = ({callback2, lengthArr, obj, title, load, status, listElem, setListElem}) => {
    const removeItemArr = index => {
        callback2(index);
    };

    if (lengthArr === 0 && !load && status !== undefined) {
        return (
            <h1 style={{textAlign: 'center', marginTop: 10}}>Постов нет</h1>
        );
    } else if (status === undefined) {
        return (
            <h1 style={{textAlign: 'center', marginTop: 10}}>Ошибка</h1>
        );
    } else if (load) {
        return (
            <LoadingAnimate/>
        );
    };
      
    return (
        <div>
            <h1 style={{textAlign: 'center', marginTop: 10}}>{title}</h1>
            
            <TransitionGroup>
            {obj.map((item, i) => 
                    <CSSTransition
                        key={item.id}
                        timeout={500}
                        classNames="post">
                        <CreatePost callback={removeItemArr} arr={obj} index={item.id} post={item}/>
                    </CSSTransition>
            )}
            </TransitionGroup>

            <ButtonSwitchList dlist={listElem} mList={setListElem}/>
        </div>
    );
};

export default CreatePostList;