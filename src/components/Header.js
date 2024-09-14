import React, { useEffect } from "react";
import { LOGO_URL, PROFILE_URL, SUPPORTED_LANGUAGES } from "../constants";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../store/userSlice";
import { toggleGptSearchView } from "../store/GPTSlice";
import { saveLanguage } from "../store/appConfigSlice";

function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch)
  useEffect(() => {
    const unsubsCribe = onAuthStateChanged(auth, (user) => {
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
      //unsubsCribe when component unmounts, so that performance can be improved by memory cleaning
      return () => unsubsCribe();
    });
  }, []);

  const handleLogout = () => {
    signOut(auth)
      .then(() => {})
      .catch((e) => {
        console.log(e);
      });
  };

  const handleGPTSearchClick=()=>{
    dispatch(toggleGptSearchView())
  }

  const handleLangChange=(e)=>{
    dispatch(saveLanguage(e.target.value))
  }

  return (
    <div className="absolute flex px-8 py-2 bg-gradient-to-b from-black z-10 w-full justify-between">
      <img className="w-44" src={LOGO_URL} alt="Logo" />
      {user && (
        <div className="flex p-2">
          {showGptSearch && (<select className="py-2 px-4 m-2 bg-gray-300 bg-opacity-40 text-white rounded-lg"
          onChange={handleLangChange}
          >
            {
              SUPPORTED_LANGUAGES.map((lang)=>(
                <option className="bg-gray-600" key={lang.identifier} value={lang.identifier}>{lang.name}</option>
              ))
            }
          </select>)}
          <button 
          className="py-2 px-4 m-2 bg-emerald-300 bg-opacity-40 text-white rounded-lg whitespace-nowrap"
          onClick={handleGPTSearchClick}
          >{showGptSearch?'Home':'GPT Search'}</button>
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
