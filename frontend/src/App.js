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
import { AddPostForm } from './features/posts/AddPostForm';

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
    ]
  }
  ])
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  )

  //         <Route exact path='/posts/:postId' component={SinglePostPage} />
  //         <Route exact path='/editPost/:postId' component={EditPostForm} />
  //         <Route exact path='/users' component={UsersList} />
  //         <Route exact path='/users/:userId' component={UserPage} />
  //         <Route exact path='/Notifications' component={NotificationsList} />
  //         <Redirect to="/" />
  //       </Switch>

 
}

export default App
