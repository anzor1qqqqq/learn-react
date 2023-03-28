import React, {useState, useMemo} from "react";
import CreatePostList from "./components/PostList";
import NewPostCreate from "./components/NewPostCreate";
import SelectedOption from "./components/Selected";
import InputSearch from "./components/InputSearch";

import './style/styleApp.css'

function App() {
  let [defaultPost, modifiedPost] = useState([
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

    let [defaultSort, modifiedSort] = useState('');
    let [defaultSearch, modifiedSearch] = useState('');

    const sortList = useMemo(() => {
      if (defaultSort) {
        return [...defaultPost].sort((a, b) => a[defaultSort].localeCompare(b[defaultSort]));
      };

      return defaultPost;
    }, [defaultPost, defaultSort]);

    const searchList = useMemo(() => {
      console.log(1);
      return sortList.filter(item => item.title.includes(defaultSearch));
    }, [sortList, defaultSearch]);

    const addPost = obj => {
      modifiedPost([...defaultPost, obj]);

      const inputForm = document.querySelectorAll('[type="text"]');
      
      inputForm.forEach(item => {
        item.value = '';
      }); 
    };

    const mainRemove = index => {
      modifiedPost(defaultPost.filter(item => index !== item.id));
    };

    const sortPost = option => {
      modifiedSort(option);
    };

    const searchPost = post => {
      modifiedSearch(post);
    };

    return (
        <div className="App">
          <NewPostCreate callback={addPost} />

          <hr style={{marginBottom: 15}}/>
          <InputSearch callback={searchPost}/>

          <SelectedOption callback={sortPost} value={defaultSort} defaultOption={'Сортировка по'} optionAnoth={[
          {
            id: 'title',
            name: 'Названию',
          },
          {
            id: 'body',
            name: 'Описанию',
          }
          ]}/>

          {defaultPost.length === 0 
          ? <h1 style={{textAlign: 'center'}}>Постов нет</h1>
          : <CreatePostList callback2={mainRemove} obj={searchList} title={'Все посты'}/>
          }
        </div>
    );
};

export default App;