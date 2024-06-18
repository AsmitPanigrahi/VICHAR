import React from 'react'
import appwriteService from "../appwrite/config"
import {Link} from 'react-router-dom'

function PostCard({$id, title, featuredImage}) {
    
  return (
    <Link to={`/post/${$id}`}>
        <div className='w-full bg-blue-100 rounded-xl p-4 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105 hover:shadow-lg border border-gray-300 shadow-md bg-gradient-to-r from-white to-gray-200'>
            <div className='w-full justify-center mb-4'>
                <img src={appwriteService.getFilePreview(featuredImage)} alt={title}
                className='rounded-xl' />

            </div>
            <h2
            className='text-xl font-bold'
            >{title}</h2>
        </div>
    </Link>
  )
}


export default PostCard