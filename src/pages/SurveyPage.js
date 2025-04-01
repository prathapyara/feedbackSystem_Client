import { useDispatch } from "react-redux";
import { authAction } from "../reduxSetup/actions/authAction.js";
import { useEffect } from "react";

export const SurveyPage = () => {
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(authAction());
  }, [dispatch]);
  return <>this is the SurveyPage</>;
};
