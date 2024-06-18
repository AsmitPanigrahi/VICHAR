import React from 'react';
import {Container, logoblack, LogoutBtn} from '../index';
import { Link } from 'react-router-dom';
import {useSelector} from 'react-redux';
import { useNavigate } from 'react-router-dom';
import authService from "../../appwrite/auth";
import { useEffect, useState } from "react";

function Header() {
  const authStatus = useSelector((state) => state.auth.status);
  const [username, SetUsername] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUsername = async () => {
      const data = await authService.getCurrentUser();
      if (data) {
        SetUsername(data.name);
      }
    };
    fetchUsername();
  }, [authStatus]);

  const navItems = [
    {
      name: 'Home',
      slug: "/",
      active: true
    }, 
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
  },
  {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
  },
  {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
  },
  {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
  },
  ]


  return (
    <header className='py-3 shadow bg-indigo-900  text-zinc-50 sticky top-0 h-15 w-full z-40'>
      <Container>
        <nav className='flex'>
        <div className="flex justify-between mx-2 items-center"> 
          <div className='mr-4 ml-4 my-1'>
            <Link to='/'>
              <img src={logoblack} className="w-24 transition duration-300 transform hover:scale-105" alt="Asmit" />
              </Link>
          </div>
          {authStatus && username && (
              <div className=" flex items-start justify-start font-semibold">
                <Link to="/" className="transition duration-300 ease-in-out transform hover:scale-110"> 
                  Welcome, {username.toUpperCase()}
                </Link>
              </div>
            )}
        </div>
            
          <ul className='flex ml-auto'>
            {navItems.map((item) => 
            item.active ? (
              <li key={item.name}>
                <button
                onClick={() => navigate(item.slug)}
                className='inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
                >{item.name}</button>
              </li>
            ) : null
            )}
            {authStatus && (
              <li>
                <LogoutBtn />
              </li>
            )}
          </ul>
        </nav>
        </Container>
    </header>
  )
}

export default Header




// import React, { useEffect, useState } from 'react';
// import { Container, logoblack, LogoutBtn } from '../index';
// import { Link, useNavigate } from 'react-router-dom';
// import { useSelector } from 'react-redux';
// import authService from "../../appwrite/auth";

// function Header() {
//   const authStatus = useSelector((state) => state.auth.status);
//   const [username, setUsername] = useState("");
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchUsername = async () => {
//       const data = await authService.getCurrentUser();
//       if (data) {
//         setUsername(data.name);
//       }
//     };
//     fetchUsername();
//   }, [authStatus]);

//   const navItems = [
//     { name: 'Home', slug: "/", active: true },
//     { name: "Login", slug: "/login", active: !authStatus },
//     { name: "Signup", slug: "/signup", active: !authStatus },
//     { name: "All Posts", slug: "/all-posts", active: authStatus },
//     { name: "Add Post", slug: "/add-post", active: authStatus },
//   ];

//   return (
//     <header className="py-3 shadow bg-indigo-900 text-zinc-50 sticky top-0 w-full z-40">
//       <Container>
//         <nav className="flex flex-wrap items-center justify-between">
//           <div className="flex items-center space-x-4">
//             <Link to="/">
//               <img
//                 src={logoblack}
//                 className="w-24 transition duration-300 transform hover:scale-105"
//                 alt="Asmit"
//               />
//             </Link>
//             {authStatus && username && (
//               <div className="font-semibold text-sm sm:text-base">
//                 <Link
//                   to="/"
//                   className="transition duration-300 ease-in-out transform hover:scale-110"
//                 >
//                   Welcome, {username.toUpperCase()}
//                 </Link>
//               </div>
//             )}
//           </div>

//           <ul className="flex items-center space-x-4">
//             {navItems.map((item) =>
//               item.active ? (
//                 <li key={item.name}>
//                   <button
//                     onClick={() => navigate(item.slug)}
//                     className="px-4 py-2 rounded-full transition duration-300 ease-in-out hover:bg-blue-100 transform hover:scale-105"
//                   >
//                     {item.name}
//                   </button>
//                 </li>
//               ) : null
//             )}
//             {authStatus && (
//               <li>
//                 <LogoutBtn />
//               </li>
//             )}
//           </ul>
//         </nav>
//       </Container>
//     </header>
//   );
// }

// export default Header;
