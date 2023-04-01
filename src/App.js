import React, {useState, useEffect} from "react";
import CreatePostList from "./components/PostList";
import SelectedOption from "./components/Selected";
import InputSearch from "./components/InputSearch";
import ModalNewPost from "./components/ModalNewPost";
import { usePost } from './hooks/usePost';
import { request } from "./get_server/getServer";

import './style/styleApp.css'

function App() {
    const [defaultPost, modifiedPost] = useState([]);
    const [defaultFilter, modifiedFilter] = useState({search: '', sort: ''})
    const [defaultModale, modifiedModale] = useState(false);
    const postRender = usePost(defaultPost, defaultFilter.search, defaultFilter.sort);
    const [defaultLoad, modifiedLoad] = useState(false);
    const [statusDefault, modifiedStatus] = useState('');

    useEffect(() => {
      b();
    }, []);

    async function b() {
      modifiedLoad(true);

      const a = await request().catch(error => {
        console.log(error);
      });

      try {
        if (!a) {
          throw new Error('Ошибка');
        };

        modifiedPost(a);
      } catch(error) {
        modifiedStatus(a);
        console.log(error.message);
      };

      modifiedLoad(false);
    };

    const addPost = obj => {
      modifiedPost([...defaultPost, obj]);

      const inputCreatePost = document.querySelectorAll('.input_create_post');

      inputCreatePost.forEach(item => {
        item.value = '';
      })
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

          <CreatePostList lengthArr={postRender.length} callback2={mainRemove} obj={postRender} status={statusDefault} title={'Все посты'} load={defaultLoad}/>
        </div>
    );
};

export default App;