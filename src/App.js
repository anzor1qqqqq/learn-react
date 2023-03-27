import React, {useState} from "react";
import CreatePostList from "./components/PostList";
import NewPostCreate from "./components/NewPostCreate";

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

    const addPost = (obj) => {
      modifiedPost([...defaultPost, obj])

      const inputForm = document.querySelectorAll('[type="text"]')
      
      inputForm.forEach(item => {
        item.value = '';
      }); 
    };

    const mainRemove = index => {
      console.log(index);
      modifiedPost(defaultPost.filter(item => index !== item.id));
    };

    return (
        <div className="App">
          <NewPostCreate callback={addPost} />
          <CreatePostList callback2={mainRemove} arr={defaultPost} obj={defaultPost} title={'Все посты'}/>
        </div>
    );
};

export default App;