// "use client";

// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import { useState } from "react";
// import Link from "next/link";

// export function Animation() {
//   // const [email, setEmail] = useState("");
//   // const [message, setMessage] = useState("");

//   // const handleSubmit = (e: React.FormEvent) => {
//   //   e.preventDefault();
//   //   // Handle form submission
//   //   console.log({ email, message });
//   // };

//   return (
//     <div>
//       <body className="m-12">
//         <div className="water mx-auto relative w-[200px] h-[200px] bg-[#80c5de] shadow-inner rounded-[40%] clip-path-polygon">
//           <div className="absolute top-[-150%] left-[-50%] w-[200%] h-[200%] bg-[#ececec] rounded-full animate-rotate"></div>
//           <div className="absolute top-[-150%] left-[-52%] w-[204%] h-[204%] bg-[#ececec80] rounded-full animate-rotate delay-500"></div>
//         </div>
//       </body>

//       <style>
//       @keyframes rotate {
//         0% { transform: rotate(0deg); }
//         100% { transform: rotate(360deg); }
//       }
//       .animate-rotate {
//         animation: rotate 12s linear infinite;
//       }
//       .delay-500 {
//         animation-delay: 0.5s;
//       }
//       .clip-path-polygon {
//         clip-path: polygon(0 0, 100% 0, 85% 100%, 15% 100%);
//       }
//       </style>
//     </div>
    
//   );
// }