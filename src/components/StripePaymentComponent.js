import { loadStripe } from "@stripe/stripe-js";
import { API } from "../dynamicPathSetup.js";
import { useSelector } from "react-redux";

export const StripPageComponent = () => {
  const user = useSelector((state) => state.auth.user);
  console.log(user);
  const handlePayment = async () => {
    try {
      const stripe = await loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);

      const body = {
        amount: 50,
        userId: user._id,
      };

      const { data } = await API.post(
        `${process.env.REACT_APP_SERVER_URL}/api/stripe/payments`,
        body,
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );

      console.log(data.sessionId);

      if (data.sessionId) {
        const { error } = await stripe.redirectToCheckout({
          sessionId: data.sessionId,
        });
        if (error) {
          console.log(error);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <header className="flex items-center justify-between px-6 py-4 shadow-md">
        <button
          className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition"
          onClick={handlePayment}
        >
          Add Credits
        </button>
        <h5 className="text-lg font-bold text-white-700 ml-6">
          Credits: {user.credits}
        </h5>
      </header>
    </>
  );
};
