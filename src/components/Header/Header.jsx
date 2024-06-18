import React, { useEffect, useState } from 'react';
import { Container, logoblack, LogoutBtn } from '../index';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import authService from "../../appwrite/auth";

function Header() {
  const authStatus = useSelector((state) => state.auth.status);
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUsername = async () => {
      const data = await authService.getCurrentUser();
      if (data) {
        setUsername(data.name);
      }
    };
    fetchUsername();
  }, [authStatus]);

  const navItems = [
    { name: 'Home', slug: "/", active: true },
    { name: "Login", slug: "/login", active: !authStatus },
    { name: "Signup", slug: "/signup", active: !authStatus },
    { name: "All Posts", slug: "/all-posts", active: authStatus },
    { name: "Add Post", slug: "/add-post", active: authStatus },
  ];

  return (
    <header className="py-3 shadow-lg bg-indigo-900 text-zinc-50 sticky top-0 w-full z-50 transition-all duration-500">
      <Container>
        <nav className="flex flex-wrap items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link to="/">
              <img
                src={logoblack}
                className="w-24 transition-transform duration-500 ease-in-out transform hover:scale-110"
                alt="Logo"
              />
            </Link>
            {authStatus && username && (
              <div className="font-semibold text-sm sm:text-base transition duration-500 ease-in-out transform hover:scale-105">
                <Link
                  to="/"
                  // className="transition duration-500 ease-in-out transform hover:scale-110"
                >
                  Welcome, {username.toUpperCase()}
                </Link>
              </div>
            )}
          </div>

          <ul className="flex items-center space-x-4">
            {navItems.map((item) =>
              item.active ? (
                <li key={item.name}>
                  <button
                    onClick={() => navigate(item.slug)}
                    className="px-4 py-2 rounded-full transition duration-500 ease-in-out hover:bg-indigo-400 hover:text-white transform hover:scale-105"
                  >
                    {item.name}
                  </button>
                </li>
              ) : null
            )}
            {authStatus && (
              <li>
                <LogoutBtn className="transition-colors duration-500 ease-in-out hover:bg-red-500 hover:text-white" />
              </li>
            )}
          </ul>
        </nav>
      </Container>
    </header>
  );
}

export default Header;