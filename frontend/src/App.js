import React from 'react'
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
// import { AddPostForm } from './features/posts/AddPostForm';
import { SinglePostPage } from './features/posts/SinglePostPage';  
import { EditPostForm } from './features/posts/EditPostForm';
function App() {

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
