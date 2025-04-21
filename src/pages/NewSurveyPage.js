import { useState } from "react";
import { API } from "../dynamicPathSetup.js";
import { useNavigate } from "react-router-dom";
import { useDispatch} from "react-redux";
import { authAction } from "../reduxSetup/actions/authAction.js";

export const NewSurveyPage = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [subject, setSubject] = useState("");
  const [recipents, setRecipents] = useState("");
  const [next, setNext] = useState(false);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  let dispatch = useDispatch();

  const submit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { data } = await API.post(
        "/api/survey",
        {
          title,
          body,
          subject,
          recipents,
        },
        {
          withCredentials: true,
        }
      );
      dispatch(authAction());
      navigate("/surveys");
      setBody("");
      setRecipents("");
      setSubject("");
      setTitle("");
      console.log(data);
    } catch (error) {
      console.log("new Server as not created", error);
    } finally {
      setLoading(false);
    }
  };

  const onBack = () => {
    setNext(false);
  };

  const nextClick = (e) => {
    e.preventDefault();
    setNext(true);
  };
  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-lg font-medium">Sending survey...</p>
      </div>
    );
  }

  return (
    <>
      {!next ? (
        <>
          <form class="max-w-md mx-auto" onSubmit={nextClick}>
            <div class="relative z-0 w-full mb-5 group">
              <input
                type="text"
                name="title"
                id="title"
                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
                onChange={(e) => setTitle(e.target.value)}
                value={title}
              />
              <label
                for="title"
                class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Survey Title
              </label>
            </div>
            <div class="relative z-0 w-full mb-5 group">
              <input
                type="text"
                name="subject"
                id="subject"
                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
                onChange={(e) => setSubject(e.target.value)}
                value={subject}
              />
              <label
                for="subject"
                class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Survey Subject
              </label>
            </div>
            <div class="relative z-0 w-full mb-5 group">
              <input
                type="text"
                name="body"
                id="body"
                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
                onChange={(e) => setBody(e.target.value)}
                value={body}
              />
              <label
                for="body"
                class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Survey Body
              </label>
            </div>

            <div class="relative z-0 w-full mb-5 group">
              <input
                type="text"
                name="recipent"
                id="recipent"
                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
                onChange={(e) => setRecipents(e.target.value)}
                value={recipents}
              />
              <label
                for="recipent"
                class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Survey Recipent
              </label>
            </div>

            <button
              type="submit"
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Next
            </button>
          </form>
        </>
      ) : (
        <>
          <div className="max-w-xl mx-auto p-6 border rounded-lg shadow-md bg-white">
            <h2 className="text-2xl font-semibold mb-4">
              Please confirm your entries
            </h2>

            <div className="mb-4">
              <p className="font-medium">Survey Title</p>
              <p className="italic text-gray-700">{title}</p>
            </div>

            <div className="mb-4">
              <p className="font-medium">Subject Line</p>
              <p className="italic text-gray-700">{subject}</p>
            </div>

            <div className="mb-4">
              <p className="font-medium">Email Body</p>
              <p className="italic text-gray-700">{body}</p>
            </div>

            <div className="mb-4">
              <p className="font-medium">Recipient List</p>
              <p className="italic text-gray-700">{recipents}</p>
            </div>

            <div className="flex justify-between mt-6">
              <button
                onClick={onBack}
                className="px-4 py-2 bg-gray-300 text-black rounded hover:bg-gray-400"
              >
                Back
              </button>
              <button
                onClick={submit}
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                Send Survey
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
};
