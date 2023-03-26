import React, {useState} from "react";
//import Counter from "./components/Counter";
import CreatePostList from "./components/PostList";

function App() {
  let [defaultPost, modifiedPost] =  useState([
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

      let [defaultPost2, modifiedPost2] =  useState([
        {
          id: 0,
          title: '11sunt aut facere',
          body: 'quia et suscipitsuscipit recusandae consequuntur',
        },
        {
          id: 1,
          title: '11qui est esse',
          body: 'est rerum tempore vitaesequi',
        },
        {
          id: 2,
          title: '11ea molestias',
          body: 'et iusto sed quo',
        },
      ]);

    return (
        <div className="App">
            <CreatePostList obj={defaultPost} title={'Все посты за понедельник'}/>
            <CreatePostList obj={defaultPost2} title={'Все посты за вторник'}/>
        </div>
    );
};

export default App;