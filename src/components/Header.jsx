import React, { useEffect } from 'react'
import auth from '../utils/firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO, USER } from '../utils/constants';

const Header = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const user = useSelector(store => store.user)

  const handleSignOut= () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        // An error happened.
        navigate("/error")
      });
  }


  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { email, displayName, photoURL, uid } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse")
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/")
      }
    });

    return () => unsubscribe()  // when component unmounts
  }, []);


  return (
    <div className=" flex justify-between absolute w-screen px-8 py-3 bg-gradient-to-b from-black z-10">
      <img
        className="w-50"
        src= {LOGO}
        alt="Logo"
      />
      {user && (


        <div className="flex p-2">
          <img
            className="w-15 h-15 "
            src={USER}
            alt=""
          />
          <button
            className="font-bold text-white cursor-pointer w-20"
            onClick={handleSignOut}
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
}

export default Header
