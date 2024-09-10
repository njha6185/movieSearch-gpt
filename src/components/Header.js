import React, { useEffect } from "react";
import { LOGO_URL, PROFILE_URL } from "../constants";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../store/userSlice";

function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        //user signed in
        const { uid: uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browse");
      } else {
        //user logged out
        dispatch(removeUser());
        navigate("/");
      }
    });
  }, []);

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((e) => {
        console.log(e);
      });
  };
  return (
    <div className="absolute flex px-8 py-2 bg-gradient-to-b from-black z-10 w-full justify-between">
      <img className="w-44" src={LOGO_URL} alt="Logo" />
      {user && (
        <div className="flex p-2 m-2">
          <img src={user?.photoURL || PROFILE_URL} />
          <button
            className="px-2 font-bold text-gray-100"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      )}{" "}
    </div>
  );
}

export default Header;
