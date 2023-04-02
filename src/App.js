import React, {useState, useEffect, useMemo} from "react";
import CreatePostList from "./components/PostList";
import SelectedOption from "./components/Selected";
import InputSearch from "./components/InputSearch";
import ModalNewPost from "./components/ModalNewPost";
import { usePost } from './hooks/usePost';
import { useFetching } from "./hooks/useFetching";
/* import { useLink } from './hooks/useLink'; */

import './style/styleApp.css'

function App() {
    const [defaultPost, modifiedPost] = useState([]);
    const [defaultFilter, modifiedFilter] = useState({search: '', sort: ''})
    const [defaultModale, modifiedModale] = useState(false);
    const postRender = usePost(defaultPost, defaultFilter.search, defaultFilter.sort);
    const [defaultListElem, modifiedListElem] = useState({xTotal: '', page: 1, limit: 10});

    console.log('defaultListElem: ', defaultListElem);

    const [startDate, defaultLoad, statusDefault] = useFetching(async date => {
      modifiedPost(date);
    }, defaultListElem);

    useEffect(() => {
      startDate(modifiedListElem, defaultListElem);
    }, []);

    const addPost = obj => {
      modifiedPost([...defaultPost, obj]);

      const inputCreatePost = document.querySelectorAll('.input_create_post');

      inputCreatePost.forEach(item => {
        item.value = '';
      });
    };

    const mainRemove = index => {
      modifiedPost(defaultPost.filter(item => index !== item.id));
    };


    return (
        <div className="App">
          <button style={{marginBottom: 20}} onClick={() => modifiedModale(true)}>Создание нового поста</button>
          <ModalNewPost length={defaultPost.length} callback={addPost} status={defaultModale} setStatus={modifiedModale}/>

          <hr style={{marginBottom: 15}}/>
          <InputSearch filter={defaultFilter} setFilter={modifiedFilter}/>

          <SelectedOption filter={defaultFilter} setFilter={modifiedFilter} value={defaultFilter.sort} defaultOption={'Сортировка по'} optionAnoth={[{id: 'title', name: 'Названию'}, {id: 'body', name: 'Описанию'}]}/>

          <CreatePostList listElem={defaultListElem} setListElem={modifiedListElem} lengthArr={postRender.length} callback2={mainRemove} obj={postRender} status={statusDefault} title={'Все посты'} load={defaultLoad}/> 
        </div>
    );
};

export default App;