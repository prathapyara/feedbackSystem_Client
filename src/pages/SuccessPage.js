import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { authAction } from "../reduxSetup/actions/authAction.js";

export const Success = () => {

  let dispatch = useDispatch();
  useEffect(() => {
    console.log("here iam inside the success page");
    dispatch(authAction());
  }, [dispatch]);

  const user=useSelector((state)=>state.auth.user);
  console.log(user);

  return <>success</>;
};
