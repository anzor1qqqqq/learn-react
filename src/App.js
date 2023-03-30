import React, {useState, useMemo} from "react";
import CreatePostList from "./components/PostList";
//import NewPostCreate from "./components/NewPostCreate";
import SelectedOption from "./components/Selected";
import InputSearch from "./components/InputSearch";
import ModalNewPost from "./components/ModalNewPost";

import './style/styleApp.css'

function App() {
  const [defaultPost, modifiedPost] = useState([
        {
          id: 0,
          title: 'sunt aut facere',
          body: 'quia et suscipitsuscipit recusandae consequuntur',
        },
        {
          id: 1,
          title: 'qui est esse',
          body: 'est rerum tempore vitaesequi',
        },
        {
          id: 2,
          title: 'ea molestias',
          body: 'et iusto sed quo',
        },
  ]);
    
    const [defaultFilter, modifiedFilter] = useState({search: '', sort: ''})

    const [defaultModale, modifiedModale] = useState(false);

    const sortList = useMemo(() => {
      if (defaultFilter.sort) {
        return [...defaultPost].sort((a, b) => a[defaultFilter.sort].localeCompare(b[defaultFilter.sort]));
      };

      return defaultPost;
    }, [defaultPost, defaultFilter.sort]);

    const searchList = useMemo(() => {
      return sortList.filter(item => item.title.toLowerCase().includes(defaultFilter.search))
    }, [sortList, defaultFilter.search]);

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

          <CreatePostList lengthArr={searchList.length} callback2={mainRemove} obj={searchList} title={'Все посты'}/>
        </div>
    );
};

export default App;