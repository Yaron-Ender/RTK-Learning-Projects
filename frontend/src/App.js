import React, { useEffect } from 'react'
import { createBrowserRouter, RouterProvider } from "react-router-dom";


// import {PostsList} from './features/posts/PostsLists'
// import {AddPostForm} from './features/posts/AddPostForm'
// import {SinglePostPage} from './features/posts/SinglePostPage'
// import {EditPostForm} from './features/posts/EditPostForm'
// import {UserPage} from './features/users/UserPage'
// import {UsersList} from './features/users/UsersList'
// import {NotificationsList} from './features/notifications/NotificationsList'
import Home from './layout/Home';
import PostsLists from './features/posts/PostsLists';
import { SinglePostPage } from './features/posts/SinglePostPage';  
import { EditPostForm } from './features/posts/EditPostForm';
import { UsersList } from './features/users/UsersList';
import { UserPage } from './features/users/UserPage';

import { fetchUsers } from './features/users/usersSlice';
import { useDispatch } from 'react-redux';


function App() {
const dispatch = useDispatch()
useEffect(()=>{
  dispatch(fetchUsers())
},[dispatch])


  const router = createBrowserRouter([
  {
    path:'/',
    element:<Home />,
    children:[
      {
        index:true,
        element:<PostsLists/>
      },
      {
        path:'/posts/:postId',
        element:<SinglePostPage />
      },
      {
        path:'/editPost/:postId',
        element:<EditPostForm />
      },{
        path:'/users',
        element:<UsersList />
        },{
        path:'/users/:userId',
        element:<UserPage />
      }
    ]
  }
  ])
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  )

  

 
}

export default App
