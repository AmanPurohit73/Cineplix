import React from 'react'
import auth from '../utils/firebase';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
  const navigate = useNavigate()

  const user = useSelector(store => store.user)

  const handleSignOut= () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/")
      })
      .catch((error) => {
        // An error happened.
        navigate("/error")
      });
  }



  return (
    <div className=" flex justify-between absolute w-screen px-8 py-3 bg-gradient-to-b from-black z-10">
      <img
        className="w-50"
        src="https://imgs.search.brave.com/EUp1Kozt0BymeZJpxl6Tx6EITrXYcutA_d81IVDBIxY/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/YnJhbmRmZXRjaC5p/by9pZDZvRTB1WHl2/L3cvMjI3L2gvOTEv/dGhlbWUvZGFyay9s/b2dvLnBuZz9jPTFi/eDE3NDMwNzA5MjM2/NjJpZDY0TXVwN2Fj/QzF3b0RGN3YmdD0x/NzM3MTI2NjY4NjUy"
        alt="Logo"
      />
      {user && (
        <div className="flex p-2">
          <img
            className="w-15 h-15 "
            src="https://png.pngtree.com/recommend-works/png-clipart/20250109/ourmid/pngtree-3d-user-icon-with-transparent-background-png-image_15118120.png"
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
