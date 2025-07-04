// // import React, { use, useState } from 'react';
// // import { AuthContext } from '../../Contexts/AuthContext/authContext';
// // import { Link, useNavigate } from 'react-router';
// // import Swal from 'sweetalert2';
// // import { FaEye, FaEyeSlash, FaGoogle } from 'react-icons/fa';
// // import successLotie from '../../assets/register.json'
// // import Lottie from 'lottie-react';
// // import { motion } from "framer-motion";

// // const Register = () => {

// //     const backgroundStyle = {
// //         background: 'linear-gradient(to bottom right, #ffffff, #ffe4e6)',
// //         minHeight: '100vh',
// //         display: 'flex',
// //         justifyContent: 'center',
// //         alignItems: 'center',
// //         overflow: 'hidden',
// //     };
// //     const buttonStyle = {
// //         background: 'linear-gradient(to bottom right, #ffffff, #ffe4e6)'
// //     };

// //     const { createUser, updateUserProfile, signInWithGoogle } = use(AuthContext);
// //     const [name, setName] = useState("");
// //     const [photo, setPhoto] = useState("");
// //     const [email, setEmail] = useState("");
// //     const [password, setPassword] = useState("");

// //     const [nameError, setNameError] = useState("");
// //     const [passwordError, setPasswordError] = useState("");
// //     const [error, setError] = useState("");

// //     const [showPassword, setShowPassword] = useState(false);
// //     const navigate = useNavigate();

// //     const validateName = (value) => {
// //         setName(value);
// //         if (value.length < 6) {
// //             setNameError("Name must be 6 characters or more");
// //         } else {
// //             setNameError("");
// //         }
// //     };

// //     const validatePassword = (value) => {
// //         setPassword(value);
// //         const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&+=!]).{8,}$/;
// //         if (!regex.test(value)) {
// //             setPasswordError(
// //                 "Password must be 8+ characters, 1 uppercase, 1 lowercase, 1 special character (@#$)"
// //             );
// //         } else {
// //             setPasswordError("");
// //         }
// //     };

// //     const handleRegister = async (e) => {
// //         e.preventDefault();
// //         setError("");

// //         const form = e.target;
// //         const name = form.name.value;
// //         const email = form.email.value;
// //         const photo = form.photo.value;
// //         const password = form.password.value;

// //         if (nameError || passwordError) {
// //             Swal.fire("Validation Error", "Please fix the form errors.", "error");
// //             return;
// //         }

// //         try {
// //             const res = await createUser(email, password);
// //             await updateUserProfile(name, photo);
// //             Swal.fire("Success", "Account created!", "success");
// //             navigate("/");
// //         } catch (err) {
// //             setError(err.message);
// //         }
// //     };

// //     const handleGoogle = async () => {
// //         try {
// //             await signInWithGoogle();
// //             Swal.fire("Welcome!", "Logged in with Google", "success");
// //             navigate("/");
// //         } catch (err) {
// //             setError("Google login failed.");
// //             console.log(err);
// //         }
// //     };




// //     return (
// //         <div style={backgroundStyle} className='py-6'>

            // <motion.div 
            //  initial={{ opacity: 0, y: 50 }}
            //     whileInView={{ opacity: 1, y: 0 }}
            //     transition={{ duration: 0.6, ease: "easeOut" }}
            //     viewport={{ once: true }}
            // className='hero-content flex-col lg:flex-row-reverse'>
            //     <div className="text-center lg:text-left">
            //         <Lottie style={{ width: '200px' }} animationData={successLotie} loop={true} ></Lottie>
            //     </div>
            //     <div className="card w-full max-w-md bg-white shadow-md p-6 space-y-4 hero-content lg:ml-10">
                    
            //         <h2 className="text-3xl font-bold text-center text-primary">Create Athletic Club Register</h2>

            //         <form onSubmit={handleRegister} className="">

            //             <label className="label text-gray-700">Name</label>
            //             <input
            //                 type="text"
            //                 name="name"
            //                 value={name}
            //                 onChange={(e) => validateName(e.target.value)}
            //                 className="w-full px-4 py-3 mb-1 text-gray-600 bg-pink-50 border border-neutral rounded focus:outline-none focus:ring-2 focus:ring-pink-300"
            //                 placeholder="Full Name"
            //                 required
            //             />
            //             {nameError && <p className="text-red-500 text-sm">{nameError}</p>}


            //             <label className="label text-gray-700">Photo Url</label>
            //             <input
            //                 type="photo"
            //                 name='photo'
            //                 value={photo}
            //                 onChange={(e) => setPhoto(e.target.value)}
            //                 className="w-full px-4 py-3 mb-2 text-gray-600 bg-pink-50 border border-neutral rounded focus:outline-none focus:ring-2 focus:ring-pink-300"
            //                 placeholder="Profile Picture URL"
            //                 required
            //             />


            //             <label className="label text-gray-700">Email</label>
            //             <input
            //                 type="email"
            //                 name='email'
            //                 value={email}
            //                 onChange={(e) => setEmail(e.target.value)}
            //                 className="w-full px-4 py-3 mb-2 text-gray-600 bg-pink-50 border border-neutral rounded focus:outline-none focus:ring-2 focus:ring-pink-300"
            //                 placeholder="Enter your email"
            //             />


            //             <label className="label text-gray-700">Password</label>
            //             <div className='relative'>
            //                 <input
            //                     type={showPassword ? 'text' : 'password'}
            //                     name='password'
            //                     value={password}
            //                     onChange={(e) => validatePassword(e.target.value)}
            //                     className="input w-full px-4 py-3 mb-2 text-gray-600 bg-pink-50 border border-neutral rounded focus:outline-none focus:ring-2 focus:ring-pink-300"
            //                     required
            //                     placeholder="Password"
            //                 />
            //                 {passwordError && <p className="text-red-500 text-sm">{passwordError}</p>}

            //                 <button
            //                     type="button"
            //                     onClick={() => { setShowPassword(!showPassword) }}
            //                     className='btn btn-xs absolute top-3 right-4 text-pink-600'>
            //                     {showPassword ? <FaEyeSlash /> : <FaEye />}
            //                 </button>
            //             </div>

            //             {error && <p className="text-red-500">{error}</p>}

            //             <button type="submit" className="btn btn-primary w-full ">Register</button>
            //         </form>

            //         <p className="text-center text-sm -mt-5">
            //             Already have an account?{" "}
            //             <Link to="/login" className="text-primary underline">Login</Link>
            //         </p>

            //         <div className="flex w-full flex-col -mt-10">
            //             <div className="divider">OR</div>
            //         </div>

            //         <button style={buttonStyle} onClick={handleGoogle} className="btn btn-outline w-full -mt-10">
            //             <span><FaGoogle /></span> Continue with Google
            //         </button>
            //     </div>
            // </motion.div>
// //         </div>

// //     );
// // };

// // export default Register;


// import React, { useState, useContext } from 'react';
// import { AuthContext } from '../../Contexts/AuthContext/authContext';
// import { Link, useNavigate } from 'react-router';
// import Swal from 'sweetalert2';
// import { FaEye, FaEyeSlash, FaGoogle } from 'react-icons/fa';
// import Lottie from 'lottie-react';
// import successLottie from '../../assets/register.json';
// import { motion } from 'framer-motion';

// const Register = () => {
//   const { createUser, updateUserProfile, signInWithGoogle } = useContext(AuthContext);
//   const navigate = useNavigate();

//   const [name, setName] = useState("");
//   const [photo, setPhoto] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const [nameError, setNameError] = useState("");
//   const [passwordError, setPasswordError] = useState("");
//   const [error, setError] = useState("");

//   const [showPassword, setShowPassword] = useState(false);

//   const validateName = (value) => {
//     setName(value);
//     if (value.length < 6) {
//       setNameError("Name must be 6 characters or more");
//     } else {
//       setNameError("");
//     }
//   };

//   const validatePassword = (value) => {
//     setPassword(value);
//     const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&+=!]).{8,}$/;
//     if (!regex.test(value)) {
//       setPasswordError("Password must be 8+ characters, 1 uppercase, 1 lowercase, 1 special character (@#$)");
//     } else {
//       setPasswordError("");
//     }
//   };

//   const handleRegister = async (e) => {
//     e.preventDefault();
//     setError("");

//     if (nameError || passwordError) {
//       Swal.fire("Validation Error", "Please fix the form errors.", "error");
//       return;
//     }

//     try {
//       await createUser(email, password);
//       await updateUserProfile(name, photo);
//       Swal.fire("Success", "Account created!", "success");
//       navigate("/");
//     } catch (err) {
//       setError(err.message || "Registration failed. Try again.");
//     }
//   };

//   const handleGoogle = async () => {
//     try {
//       await signInWithGoogle();
//       Swal.fire("Welcome!", "Logged in with Google", "success");
//       navigate("/");
//     } catch (err) {
//       setError("Google login failed.");
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-pink-100 p-4">
//       <motion.div
//         initial={{ opacity: 0, y: 50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//         className="hero-content flex-col lg:flex-row-reverse bg-white shadow-md rounded-xl p-6 max-w-3xl w-full"
//       >
//         <div className="w-40 mx-auto mb-4 lg:mb-0">
//           <Lottie animationData={successLottie} loop={true} />
//         </div>

//         <div className="w-full max-w-sm space-y-3">
//           <h2 className="text-2xl font-bold text-center text-primary">Create Athletic Club Account</h2>

//           <form onSubmit={handleRegister}>
//             <label className="text-sm text-gray-600">Name</label>
//             <input
//               type="text"
//               name="name"
//               value={name}
//               onChange={(e) => validateName(e.target.value)}
//               className="input input-bordered w-full mb-1"
//               placeholder="Full Name"
//               required
//             />
//             {nameError && <p className="text-red-500 text-xs">{nameError}</p>}

//             <label className="text-sm text-gray-600">Photo URL</label>
//             <input
//               type="url"
//               name="photo"
//               value={photo}
//               onChange={(e) => setPhoto(e.target.value)}
//               className="input input-bordered w-full mb-2"
//               placeholder="Profile Picture URL"
//               required
//             />

//             <label className="text-sm text-gray-600">Email</label>
//             <input
//               type="email"
//               name="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="input input-bordered w-full mb-2"
//               placeholder="Email"
//               required
//             />

//             <label className="text-sm text-gray-600">Password</label>
//             <div className="relative">
//               <input
//                 type={showPassword ? "text" : "password"}
//                 name="password"
//                 value={password}
//                 onChange={(e) => validatePassword(e.target.value)}
//                 className="input input-bordered w-full mb-1"
//                 placeholder="Password"
//                 required
//               />
//               <button
//                 type="button"
//                 onClick={() => setShowPassword(!showPassword)}
//                 className="absolute right-3 top-3 text-pink-600"
//               >
//                 {showPassword ? <FaEyeSlash /> : <FaEye />}
//               </button>
//             </div>
//             {passwordError && <p className="text-red-500 text-xs">{passwordError}</p>}

//             {error && <p className="text-red-500 text-xs mt-1">{error}</p>}

//             <button type="submit" className="btn btn-primary w-full mt-3">Register</button>
//           </form>

//           <div className="divider">OR</div>
//           <button onClick={handleGoogle} className="btn btn-outline w-full"><FaGoogle className="mr-2" /> Continue with Google</button>

//           <p className="text-center text-sm">
//             Already have an account? <Link to="/login" className="text-primary underline">Login</Link>
//           </p>
//         </div>
//       </motion.div>
//     </div>
//   );
// };

// export default Register;
import React, { useState, useContext } from 'react';
import { AuthContext } from '../../Contexts/AuthContext/authContext';
import { Link, useNavigate } from 'react-router';
import Swal from 'sweetalert2';
import { FaEye, FaEyeSlash, FaGoogle } from 'react-icons/fa';
import Lottie from 'lottie-react';
import successLottie from '../../assets/sign.json'; // ✅ success Lottie import
import { motion } from 'framer-motion';

const Register = () => {

  
    const backgroundStyle = {
        background: 'linear-gradient(to bottom right, #ffffff, #ffe4e6)',
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
    };
    const buttonStyle = {
        background: 'linear-gradient(to bottom right, #ffffff, #ffe4e6)'
    };


  const { createUser, updateUserProfile, signInWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [photo, setPhoto] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [nameError, setNameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showSuccessLottie, setShowSuccessLottie] = useState(false);

  const validateName = (value) => {
    setName(value);
    if (value.length < 6) {
      setNameError("Name must be 6 characters or more");
    } else {
      setNameError("");
    }
  };

  const validatePassword = (value) => {
    setPassword(value);
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&+=!]).{8,}$/;
    if (!regex.test(value)) {
      setPasswordError("Password must be 8+ chars, 1 uppercase, 1 lowercase, 1 special (@#$)");
    } else {
      setPasswordError("");
    }
  };

  const triggerSuccessLottie = () => {
    setShowSuccessLottie(true);
    setTimeout(() => {
      navigate("/");
    }, 2000);
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setError("");

    if (nameError || passwordError) {
      Swal.fire("Validation Error", "Please fix form errors.", "error");
      return;
    }

    try {
      await createUser(email, password);
      await updateUserProfile(name, photo);
      triggerSuccessLottie();
    } catch (err) {
      setError(err.message || "Registration failed. Try again.");
    }
  };

  const handleGoogle = async () => {
    try {
      await signInWithGoogle();
      triggerSuccessLottie();
    } catch {
      setError("Google login failed.");
    }
  };

  return (
    <div style={backgroundStyle}>
      {showSuccessLottie && (
        <div className="fixed inset-0 bg-white flex justify-center items-center z-50">
          <Lottie animationData={successLottie} loop={false} />
        </div>
      )}

      <motion.div 
             initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true }}
            className='hero-content flex-col lg:flex-row-reverse'>
                {/* <div className="text-center lg:text-left">
                    <Lottie style={{ width: '200px' }} animationData={successLotie} loop={true} ></Lottie>
                </div> */}
                <div className="card w-full max-w-md bg-white shadow-md p-6 space-y-4 hero-content lg:ml-10">
                    
                    <h2 className="text-3xl font-bold text-center text-primary">Create Athletic Club Register</h2>

                    <form onSubmit={handleRegister} className="">

                        <label className="label text-gray-700">Name</label>
                        <input
                            type="text"
                            name="name"
                            value={name}
                            onChange={(e) => validateName(e.target.value)}
                            className="w-full px-4 py-3 mb-1 text-gray-600 bg-pink-50 border border-neutral rounded focus:outline-none focus:ring-2 focus:ring-pink-300"
                            placeholder="Full Name"
                            required
                        />
                        {nameError && <p className="text-red-500 text-sm">{nameError}</p>}


                        <label className="label text-gray-700">Photo Url</label>
                        <input
                            type="photo"
                            name='photo'
                            value={photo}
                            onChange={(e) => setPhoto(e.target.value)}
                            className="w-full px-4 py-3 mb-2 text-gray-600 bg-pink-50 border border-neutral rounded focus:outline-none focus:ring-2 focus:ring-pink-300"
                            placeholder="Profile Picture URL"
                            required
                        />


                        <label className="label text-gray-700">Email</label>
                        <input
                            type="email"
                            name='email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-4 py-3 mb-2 text-gray-600 bg-pink-50 border border-neutral rounded focus:outline-none focus:ring-2 focus:ring-pink-300"
                            placeholder="Enter your email"
                        />


                        <label className="label text-gray-700">Password</label>
                        <div className='relative'>
                            <input
                                type={showPassword ? 'text' : 'password'}
                                name='password'
                                value={password}
                                onChange={(e) => validatePassword(e.target.value)}
                                className="input w-full px-4 py-3 mb-2 text-gray-600 bg-pink-50 border border-neutral rounded focus:outline-none focus:ring-2 focus:ring-pink-300"
                                required
                                placeholder="Password"
                            />
                            {passwordError && <p className="text-red-500 text-sm">{passwordError}</p>}

                            <button
                                type="button"
                                onClick={() => { setShowPassword(!showPassword) }}
                                className='btn btn-xs absolute top-3 right-4 text-pink-600'>
                                {showPassword ? <FaEyeSlash /> : <FaEye />}
                            </button>
                        </div>

                        {error && <p className="text-red-500">{error}</p>}

                        <button type="submit" className="btn btn-primary w-full ">Register</button>
                    </form>

                    <p className="text-center text-sm -mt-5">
                        Already have an account?{" "}
                        <Link to="/login" className="text-primary underline">Login</Link>
                    </p>

                    <div className="flex w-full flex-col -mt-10">
                        <div className="divider">OR</div>
                    </div>

                    <button style={buttonStyle} onClick={handleGoogle} className="btn btn-outline w-full -mt-10">
                        <span><FaGoogle /></span> Continue with Google
                    </button>
                </div>
            </motion.div>
    </div>
  );
};

export default Register;
