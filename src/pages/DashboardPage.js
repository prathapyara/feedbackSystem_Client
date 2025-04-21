import { useDispatch } from "react-redux";
import { authAction } from "../reduxSetup/actions/authAction.js";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { API } from "../dynamicPathSetup.js";

export const DashboardPage = () => {
  let dispatch = useDispatch()
  const [surveys, setSurvey] = useState([]);
  useEffect(() => {
    const fetchSurvey = async () => {
      try {
        const { data } = await API.get("/api/survey", {
          withCredentials: true,
        });
        setSurvey(data.surveys);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchSurvey();
    dispatch(authAction());
  }, [dispatch]);

  return (
    <>
      {!surveys ? (
        <>create Your first Survey</>
      ) : (
        <>
          {surveys.map((survey) => {
            return (
              <div className="max-w-sm mx-auto bg-white border border-gray-200 rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold mb-4">{survey.title}</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>
                    <span className="font-medium">
                      Number of “Yes” responses:
                    </span>{" "}
                    {survey.yes}
                  </li>
                  <li>
                    <span className="font-medium">
                      Number of “No” responses:
                    </span>{" "}
                    {survey.no}
                  </li>
                  <li>
                    <span className="font-medium">Number of surveys sent:</span>{" "}
                    {survey.SurveyCount}
                  </li>
                </ul>
              </div>
            );
          })}

        </>
      )}
      
      <Link
        to="/surveys/new"
        className="
          fixed bottom-10 right-5 
          bg-blue-600 hover:bg-blue-700 
          text-white 
          rounded-full 
          p-4 
          shadow-lg 
          focus:outline-none 
          focus:ring-2 focus:ring-blue-300
        "
      >
       +
      </Link>
    </>
  );
};
