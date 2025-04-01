import { OauthbaseURL } from "../dynamicPathSetup.js";
import { useSelector } from "react-redux";
import { StripPageComponent } from "./StripePaymentComponent.js";
import { logOutAction } from "../reduxSetup/actions/authAction.js";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
export const HeaderComponent = () => {

  let dispatch=useDispatch();
  let navigate=useNavigate();
  const handleClick=()=>{
    window.location.href = `${OauthbaseURL}/api/auth/google`;
  }

  

  const handlelogout=()=>{
    console.log("user is looged out")
    dispatch(logOutAction());
    navigate("/");
  }

  const user=useSelector((state)=>state.auth.user);

  return (
    <header className="flex flex-wrap items-center justify-between p-2 sm:p-2 bg-slate-600 text-white shadow-md fixed top-0 left-0 w-full z-50">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">
        Feedback System
      </h2>
      {user ? (
        <>
        <StripPageComponent />
          <button
            onClick={handlelogout}
            className="bg-white text-slate-600 text-sm sm:text-base md:text-lg px-3 sm:px-4 py-1 sm:py-2 rounded-lg shadow-md hover:bg-gray-200 transition"
          >
            Logout
          </button>
        </>
      ) : (
        <>
          <button
            onClick={handleClick}
            className="bg-white text-slate-600 text-sm sm:text-base md:text-lg px-3 sm:px-4 py-1 sm:py-2 rounded-lg shadow-md hover:bg-gray-200 transition"
          >
            Sign in with Google
          </button>
        </>
      )}   
    </header>
  );
};
