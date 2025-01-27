// import React from "react";
// import avatar from "../assets/avater.webp";
// import QuizeNavbar from "../participate-in-quize/QuizeNavbar";
// const Leaderboard = () => {
//   return (
//     <div className="bg-[#F5F3FF]  p-4 ">
//       <div className=" ml-4 ">
//         <QuizeNavbar />
//       </div>
//       <main className="min-h-[calc(100vh-50px)] flex items-center justify-center">
//         <div className="bg-white rounded-lg shadow-lg  max-w-4xl overflow-hidden">
//           <div className="p-6 md:p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
//             {/* Left Column  */}
//             <div className="bg-primary rounded-lg p-6 text-white ">
//               <div className="flex flex-col items-center mb-6 ">
//                 <img
//                   src={avatar}
//                   alt="Profile Pic"
//                   style={{ width: "5rem", height: "5rem" }}
//                   className=" rounded-full  border-4 border-white mb-4 object-cover"
//                 />
//                 <h2 className="text-2xl font-bold">Saad Hasan</h2>
//                 <p className="text-xl">20 Position</p>
//               </div>
//               <div className="grid grid-cols-3 gap-4 mb-6">
//                 <div className="text-center">
//                   <p className="text-sm opacity-75">Mark</p>
//                   <p className="text-2xl font-bold">1200</p>
//                 </div>
//                 <div className="text-center">
//                   <p className="text-sm opacity-75">Correct</p>
//                   <p className="text-2xl font-bold">08</p>
//                 </div>
//                 <div className="text-center">
//                   <p className="text-sm opacity-75">Wrong</p>
//                   <p className="text-2xl font-bold">16</p>
//                 </div>
//               </div>
//             </div>

//             {/* Right Column */}
//             <div>
//               <h1 className="text-2xl font-bold">Leaderboard</h1>
//               <p className="mb-6">React Hooks Quiz</p>
//               <ul className="space-y-4">
//                 <li className="flex items-center justify-between">
//                   <div className="flex items-center">
//                     <img
//                       src={avatar}
//                       alt="SPD Smith"
//                       className="object-cover w-10 h-10 rounded-full mr-4"
//                     />
//                     <div>
//                       <h3 className="font-semibold">SPD Smith</h3>
//                       <p className="text-sm text-gray-500">1st</p>
//                     </div>
//                   </div>
//                   <div className="flex items-center">
//                     <span className="mr-2">2,340</span>
//                   </div>
//                 </li>
//                 <li className="flex items-center justify-between">
//                   <div className="flex items-center">
//                     <img
//                       src={avatar}
//                       alt="JE Root"
//                       className="object-cover w-10 h-10 rounded-full mr-4"
//                     />
//                     <div>
//                       <h3 className="font-semibold">JE Root</h3>
//                       <p className="text-sm text-gray-500">2nd</p>
//                     </div>
//                   </div>
//                   <div className="flex items-center">
//                     <span className="mr-2">2,540</span>
//                   </div>
//                 </li>
//                 <li className="flex items-center justify-between">
//                   <div className="flex items-center">
//                     <img
//                       src={avatar}
//                       alt="AN Cook"
//                       className="object-cover w-10 h-10 rounded-full mr-4"
//                     />
//                     <div>
//                       <h3 className="font-semibold">AN Cook</h3>
//                       <p className="text-sm text-gray-500">3rd</p>
//                     </div>
//                   </div>
//                   <div className="flex items-center">
//                     <span className="mr-2">1,911</span>
//                   </div>
//                 </li>
//                 <li className="flex items-center justify-between">
//                   <div className="flex items-center">
//                     <img
//                       src={avatar}
//                       alt="KS Williamson"
//                       className="object-cover w-10 h-10 rounded-full mr-4"
//                     />
//                     <div>
//                       <h3 className="font-semibold">KS Williamson</h3>
//                       <p className="text-sm text-gray-500">4th</p>
//                     </div>
//                   </div>
//                   <div className="flex items-center">
//                     <span className="mr-2">1,851</span>
//                   </div>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// };

// export default Leaderboard;
import React from "react";
import logo from "../assets/logo.svg";
import avatar from "../assets/avater.webp";
import QuizeNavbar from "../components/Navbar";

const LeaderboardPage = () => {
  return (
    <div className="bg-[#F5F3FF] p-4 min-h-screen">
      <QuizeNavbar />
      <main className="h-full flex items-center justify-center">
        <div className="bg-white rounded-lg shadow-lg w-full max-w-4xl overflow-hidden">
          <div className="p-6 md:p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left Column */}
            <div className="bg-primary rounded-lg p-6 text-white">
              <div className="flex flex-col items-center mb-6">
                <img
                  src={avatar}
                  alt="Profile Pic"
                  className="w-20 h-20 rounded-full border-4 border-white mb-4 object-cover"
                />
                <h2 className="text-2xl font-bold">Saad Hasan</h2>
                <p className="text-xl">20 Position</p>
              </div>
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="text-center">
                  <p className="text-sm opacity-75">Mark</p>
                  <p className="text-2xl font-bold">1200</p>
                </div>
                <div className="text-center">
                  <p className="text-sm opacity-75">Correct</p>
                  <p className="text-2xl font-bold">08</p>
                </div>
                <div className="text-center">
                  <p className="text-sm opacity-75">Wrong</p>
                  <p className="text-2xl font-bold">16</p>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div>
              <h1 className="text-2xl font-bold">Leaderboard</h1>
              <p className="mb-6">React Hooks Quiz</p>
              <ul className="space-y-4">
                <li className="flex items-center justify-between">
                  <div className="flex items-center">
                    <img
                      src={avatar}
                      alt="SPD Smith"
                      className="object-cover w-10 h-10 rounded-full mr-4"
                    />
                    <div>
                      <h3 className="font-semibold">SPD Smith</h3>
                      <p className="text-sm text-gray-500">1st</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <span className="mr-2">2,340</span>
                  </div>
                </li>
                <li className="flex items-center justify-between">
                  <div className="flex items-center">
                    <img
                      src={avatar}
                      alt="JE Root"
                      className="object-cover w-10 h-10 rounded-full mr-4"
                    />
                    <div>
                      <h3 className="font-semibold">JE Root</h3>
                      <p className="text-sm text-gray-500">2nd</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <span className="mr-2">2,540</span>
                  </div>
                </li>
                <li className="flex items-center justify-between">
                  <div className="flex items-center">
                    <img
                      src={avatar}
                      alt="AN Cook"
                      className="object-cover w-10 h-10 rounded-full mr-4"
                    />
                    <div>
                      <h3 className="font-semibold">AN Cook</h3>
                      <p className="text-sm text-gray-500">3rd</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <span className="mr-2">1,911</span>
                  </div>
                </li>
                <li className="flex items-center justify-between">
                  <div className="flex items-center">
                    <img
                      src={avatar}
                      alt="KS Williamson"
                      className="object-cover w-10 h-10 rounded-full mr-4"
                    />
                    <div>
                      <h3 className="font-semibold">KS Williamson</h3>
                      <p className="text-sm text-gray-500">4th</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <span className="mr-2">1,851</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default LeaderboardPage;
