import './styles/App.css';
import React, { useRef } from 'react';
import {useState} from 'react';
import {useEffect} from 'react';
import ClassCounter from './components/classcounter.jsx';
import Counter from './components/component';
import PostItem from './components/postitem';
import PostList from './components/postlist';
import MyButton from './components/UI/button/MyButton';
import MyInput from './components/UI/input/MyInput';

function App() {

  const  [posts, setPosts] = useState( [
    {id: 1, title: "Javascript", body: "Description"},
    {id: 2, title: "Javascript 2", body: "Description"},
    {id: 3, title: "Javascript 3", body: "Description"},
  ])

  const [title, setTitle] = useState();

  const bodyInputRef = useRef();

  const addNewPost = (e) => {
    e.preventDefault()
    console.log(title);
    console.log(bodyInputRef.current.value);
  }


  return (

    /*
    <div className="App">
     <ClassCounter />
    </div>
    */

  <div className="App">
    <form>
      <MyInput 
        value={title}
        onChange = {e => setTitle(e.target.value)} 
        type="text" 
        placeholder="Название поста"
      />

      <MyInput 
        ref={bodyInputRef}
        type="text" 
        placeholder="Описание поста"
      />
      
      <MyButton onClick={addNewPost}>Создать пост</MyButton>
    </form>
    <PostList posts={posts} title="Посты про JS"/>
  </div>
  );
}

export default App;