// import React, {useEffect, useState} from 'react';
// import appwriteService from "../appwrite/config";
// import {Container, PostCard} from '../components';

// function Home() {
//     const [posts, setPosts] = useState([]);

//     useEffect(() => {
//         appwriteService.getPosts().then((posts) => {
//             if (posts) {
//                 setPosts(posts.documents)
//             }
//         })
//     }, [])
  
//     if (posts.length === 0) {
//         return (
//             <div className="w-full py-8 mt-4 text-center">
//                 <Container>
//                     <div className="flex flex-wrap">
//                         <div className="p-2 w-full">
//                             <h1 className="text-2xl font-bold hover:text-gray-500">
//                                 Login to read posts
//                             </h1>
//                         </div>
//                     </div>
//                 </Container>
//             </div>
//         )
//     }
//     return (
//         <div className='w-full py-8'>
//             <Container>
//                 <div className='flex flex-wrap'>
//                     {posts.map((post) => (
//                         <div key={post.$id} className='p-2 w-1/4'>
//                             <PostCard {...post} />
//                         </div>
//                     ))}
//                 </div>
//             </Container>
//         </div>
//     )
// }

// export default Home




import React, {useEffect, useState} from 'react';
import appwriteService from "../appwrite/config";
import {Container, PostCard, mobile, blank} from '../components';
import { Link } from "react-router-dom";
import { ImSpinner2 } from "react-icons/im";
import { useSelector } from "react-redux";

function Home() {
    const [posts, setPosts] = useState([]);
    const [loader, setLoader] = useState(true);
    const authStatus = useSelector((state) => state.auth.status);

    useEffect(() => {
        setLoader(true);
        appwriteService.getPosts().then((posts) => {
            if (posts) {
                setPosts(posts.documents)
            }
            setLoader(false);
        });
    }, []);
  
    return (
        <div className="w-full py-8">
          <Container>
            <div className="flex flex-wrap">
              {loader ? (
                <ImSpinner2 className="animate-spin mx-auto text-7xl" />
              ) : posts.length === 0 ? (
                <div className="w-full flex flex-col text-center">
                  {authStatus ? (
                    <div className="flex flex-col items-center justify-center">
                      <p className="text-2xl font-bold mb-8">
                        No posts available. Click{" "}
                        <Link to="/add-post" className="text-blue-500 ">
                          here
                        </Link>{" "}
                        to add a new post.
                      </p>
                      <img
                        src={blank}
                        className="w-3/4 cursor-pointer hover:scale-95 duration-300 ease-in-out"
                        alt=""
                      />
                    </div>
                  ) : (
                    <p className="text-2xl font-bold mb-8">
                      Please{" "}
                      <Link to="/login" className="text-blue-600">
                        login
                      </Link>{" "}
                      to your account to read posts
                    </p>
                  )}
                  <div className="flex items-center justify-center">
                    <img
                      src={mobile}
                      className="w-3/4 cursor-pointer hover:scale-95 duration-300 ease-in-out"
                      alt=""
                    />
                  </div>
                </div>
              ) : (
                posts.map((post) => (
                  <div
                    key={post.$id}
                    className="p-2 w-full sm:w-1/2 md:w-1/3 lg:w-1/4"
                  >
                    <PostCard {...post} />
                  </div>
                ))
              )}
            </div>
          </Container>
        </div>
    );
}

export default Home
