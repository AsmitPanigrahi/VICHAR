// import React, {useState, useEffect} from 'react'
// import { Container, PostCard, blank } from '../components'
// import appwriteService from "../appwrite/config";

// function AllPosts() {
//     const [posts, setPosts] = useState([]);

//     useEffect(() => {
//         appwriteService.getPosts([]).then((posts) => {
//             if (posts) {
//                 setPosts(posts.documents)
//             }
//         });
//     }, []); 

//   return (
//     <div className='w-full py-8'>
//         <Container>
//             <div className='flex flex-wrap'>
//                 {posts.map((post) => (
//                     <div key={post.$id} className='p-2 w-1/4'>
//                         <PostCard {...post} />
//                     </div>
//                 ))}
//             </div>
//             </Container>
//     </div>
//   )
// }

// export default AllPosts






import React, {useState, useEffect} from 'react'
import { Container, PostCard, blank } from '../components'
import appwriteService from "../appwrite/config";
import { ImSpinner2 } from "react-icons/im";
import { Link } from "react-router-dom";

function AllPosts() {
    const [posts, setPosts] = useState([]);
    const [loader, setLoader] = useState(false);

    useEffect(() => {
        setLoader(true);
        appwriteService.getPosts([]).then((posts) => {
            if (posts) {
                setPosts(posts.documents);
                setLoader(false);
            }
        });
    }, []); 

  return (
    <div className="w-full py-8 ">
    <Container>
      <div className="flex flex-wrap ">
        {loader ? (
          <ImSpinner2 className="animate-spin mx-auto text-7xl" />
        ) : posts.length === 0 ? (
          <div className="w-full flex flex-col items-center justify-center">
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
          posts.map((post) => (
            <div
              key={post.$id}
              className=" p-2 w-full sm:w-1/2 md:w-1/3  lg:w-1/4"
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

export default AllPosts








