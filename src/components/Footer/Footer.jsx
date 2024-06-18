// import React from 'react'
// import { Link } from 'react-router-dom'
// import { logo } from "../index";

// function Footer() {
//   return (
//     <section className="relative overflow-hidden py-5 sm:py-10 text-white w-full bg-gradient-to-r from-indigo-200 to-indigo-500">
//       <div className="relative z-10 mx-auto max-w-7xl px-4">
//         <div className="flex flex-col sm:-m-6 sm:flex-row flex-wrap">
//           <div className="w-full p-4 sm:p-8 md:w-1/2 lg:w-5/12">
//             <div className="flex h-full flex-col justify-between">
//               <div className="flex justify-center sm:justify-start items-center mx-10">
//                 <img src={logo} className="w-20 sm:w-32" alt="" />
//               </div>
//               <div>
//                 <p className="text-center sm:text-left text-sm text-gray-800 font-semibold">
//                   &copy; Copyright 2024. All Rights Reserved by Asmit Panigrahi.
//                 </p>
//               </div>
//             </div>
//           </div>
//           <div className="w-full p-4 sm:p-6 md:w-1/2 lg:w-2/12">
//             <div className="h-full">
//               <h3 className="text-center sm:text-left tracking-px mb-9 text-s font-semibold uppercase text-gray-100">
//                 CONTACT
//               </h3>
//               <ul>
//                 <li className="mb-4">
//                   <Link className="text-base font-medium text-gray-900 hover:text-gray-700" to="/">
//                     Asmit Panigrahi
//                   </Link>
//                 </li>
//                 <li className="mb-4">
//                   <Link className="text-base font-medium text-gray-900 hover:text-gray-700" to="/">
//                     Bhadrak
//                   </Link>
//                 </li>
//                 <li className="mb-4">
//                   <Link className="text-base font-medium text-gray-900 hover:text-gray-700" to="/">
//                     Odisha
//                   </Link>
//                 </li>
//                 <li>
//                   <Link className="text-base font-medium text-gray-900 hover:text-gray-700" to="/">
//                     +91 8260535061
//                   </Link>
//                 </li>
//               </ul>
//             </div>
//           </div>
//           <div className="w-full p-4 sm:p-6 md:w-1/2 lg:w-2/12">
//             <div className="h-full">
//               <h3 className="text-center sm:text-left tracking-px mb-9 text-s font-semibold uppercase text-gray-100">
//                 Support
//               </h3>
//               <ul>
//                 <li className="mb-4">
//                   <Link className="text-base font-medium text-gray-900 hover:text-gray-700" to="/">
//                     Account
//                   </Link>
//                 </li>
//                 <li className="mb-4">
//                   <Link className="text-base font-medium text-gray-900 hover:text-gray-700" to="/">
//                     Help
//                   </Link>
//                 </li>
//                 <li className="mb-4">
//                   <Link className="text-base font-medium text-gray-900 hover:text-gray-700" to="/">
//                     Contact Us
//                   </Link>
//                 </li>
//                 <li>
//                   <Link className="text-base font-medium text-gray-900 hover:text-gray-700" to="/">
//                     Customer Support
//                   </Link>
//                 </li>
//               </ul>
//             </div>
//           </div>
//           <div className="w-full p-4 sm:p-6 md:w-1/2 lg:w-3/12">
//             <div className="h-full">
//               <h3 className="text-center sm:text-left tracking-px mb-9 text-s font-semibold uppercase text-gray-100">
//                 Legals
//               </h3>
//               <ul>
//                 <li className="mb-4">
//                   <Link className="text-base font-medium text-gray-900 hover:text-gray-700" to="/">
//                     Terms & Conditions
//                   </Link>
//                 </li>
//                 <li className="mb-4">
//                   <Link className="text-base font-medium text-gray-900 hover:text-gray-700" to="/">
//                     Privacy Policy
//                   </Link>
//                 </li>
//                 <li>
//                   <Link className="text-base font-medium text-gray-900 hover:text-gray-700" to="/">
//                     Licensing
//                   </Link>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

// export default Footer




import React from 'react';
import { Link } from 'react-router-dom';
import { logo } from "../index";

function Footer() {
  return (
    <section className="relative overflow-hidden py-8 sm:py-12 text-gray-800 w-full bg-gradient-to-r from-indigo-200 to-indigo-500">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full sm:w-1/2 lg:w-1/4 p-4">
            <div className="flex flex-col justify-between h-full">
              <div className="mx-auto sm:mx-0">
                <img src={logo} className="w-32 h-auto" alt="Logo" />
              </div>
              <p className="mt-4 text-center sm:text-left text-sm text-gray-800 font-semibold">
                &copy; 2024. All Rights Reserved by Asmit Panigrahi.
              </p>
            </div>
          </div>
  
          <div className="w-full sm:w-1/2 lg:w-1/4 p-4">
            <h3 className="text-lg font-semibold uppercase text-gray-100 mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link className="text-base text-gray-300 hover:text-gray-100 transition-colors duration-300" to="/">
                  Account
                </Link>
              </li>
              <li>
                <Link className="text-base text-gray-300 hover:text-gray-100 transition-colors duration-300" to="/">
                  Help
                </Link>
              </li>
              <li>
                <Link className="text-base text-gray-300 hover:text-gray-100 transition-colors duration-300" to="/">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link className="text-base text-gray-300 hover:text-gray-100 transition-colors duration-300" to="/">
                  Customer Support
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/4 p-4">
            <h3 className="text-lg font-semibold uppercase text-gray-100 mb-4">Legals</h3>
            <ul className="space-y-2">
              <li>
                <Link className="text-base text-gray-300 hover:text-gray-100 transition-colors duration-300" to="/">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link className="text-base text-gray-300 hover:text-gray-100 transition-colors duration-300" to="/">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link className="text-base text-gray-300 hover:text-gray-100 transition-colors duration-300" to="/">
                  Licensing
                </Link>
              </li>
            </ul>
          </div>

          <div className="w-full sm:w-1/2 lg:w-1/4 p-4">
            <h3 className="text-lg font-semibold uppercase text-gray-100 mb-4">Contact</h3>
            <ul className="space-y-2">
              <li>
                <Link className="text-base text-gray-300 hover:text-gray-100 transition-colors duration-300" to="/">
                  Asmit Panigrahi
                </Link>
              </li>
              <li>
                <a href="mailto:asmitpanigrahi1@gmail.com" className="text-base text-gray-300 hover:text-gray-100 transition-colors duration-300">
                asmitpanigrahi1@gmail.com
                </a>
              </li>
              <li>
                <Link className="text-base text-gray-300 hover:text-gray-100 transition-colors duration-300" to="/">
                  Bhadrak, Odisha
                </Link>
              </li>
              <li>
                <Link className="text-base text-gray-300 hover:text-gray-100 transition-colors duration-300" to="/">
                  +91 8260535061
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;