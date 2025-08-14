// import React, { useState, useEffect } from "react";
// import "./PopupModal.css"; // CSS import

// const PopupModal = () => {
//   const [show, setShow] = useState(false);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setShow(true);
//     }, 3000); // Show after 3 seconds

//     return () => clearTimeout(timer);
//   }, []);

//   if (!show) return null;

//   return (
//     <div className="popup-overlay">
//       <div className="popup-content">
//         <button className="close-btn" onClick={() => setShow(false)}>
//           &times;
//         </button>
//         <h2>Join Our Fashion Club!</h2>
//         <p>Sign up to get exclusive offers & updates.</p>

//         <div className="form-group">
//           <input type="email" placeholder="Enter your email" />
//           <button
//             className="subscribe-btn"
//             onMouseEnter={(e) => (e.target.style.backgroundColor = "#0000CD")}
//             onMouseLeave={(e) => (e.target.style.backgroundColor = "#191970")}
//           >
//             Subscribe
//           </button>
//           <button className="signin-link">
//             Already have an account? Sign in
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PopupModal;
