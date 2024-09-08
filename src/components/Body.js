import React, { useEffect } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './Login'
import Browse from './Browse'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../utils/firebase'
import { useDispatch } from 'react-redux'
import { addUser, removeUser } from '../store/userSlice'

function Body() {
    const dispatch = useDispatch()
    const appRouter = createBrowserRouter([
        {
            path:'/',
            element:<Login/>
        },
        {
            path:'/browse',
            element:<Browse/>
        }
    ])

    useEffect(()=>{
        onAuthStateChanged(auth,(user)=>{
            if(user){
                //user signed in
                const {uid:uid, email, displayName}=user
                dispatch(addUser({uid:uid, email:email,displayName:displayName}))
            }else{
                //user logged out
                dispatch(removeUser())
            }
        })
    },[])

  return (
    <div>
        <RouterProvider router={appRouter}/>
    </div>
  )
}

export default Body