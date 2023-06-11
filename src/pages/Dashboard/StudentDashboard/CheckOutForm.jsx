import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useContext, useEffect, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { AuthContext } from "../../../providers/AuthProvider";
import { Toaster, toast } from "react-hot-toast";

const CheckOutForm = ({ item }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [cardError, setCardError] = useState();
  const [axiosSecure] = useAxiosSecure();
  const { price, _id, classId, className } = item;
  const [clientSecret, setClientSecret] = useState("");
  const { user } = useContext(AuthContext);
  const [processing, setProcessing] = useState(false);
  const email = user?.email;

  useEffect(() => {
    axiosSecure.post("/create-payment-intent", { price }).then((res) => {
      console.log(res.data.clientSecret);
      setClientSecret(res.data.clientSecret);
    });
  }, [price]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      setCardError(error.message);
    } else {
      setCardError("");
      console.log("payment method", paymentMethod);
    }
    setProcessing(true);

    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: user?.displayName,
            email: user?.email,
          },
        },
      });
    if (confirmError) {
      console.log(confirmError);
    }
    console.log(paymentIntent);
    setProcessing(false);
    if (paymentIntent?.status === "succeeded") {
      const successPayment = {
        price,
        transitionId: paymentIntent.id,
        email,
        classId: classId,
        orderId: _id,
        className,
        date: new Date(),
      };

      // save payment in database
      axiosSecure.post("/payments", successPayment).then((res) => {
        console.log(res.data);
        if (res.data.insertedId) {
          toast.success(`your payment is successful. ID: ${paymentIntent.id}`);
          fetch(`http://localhost:5000/selectedClass/${_id}`, {
            method: "PUT",
          })
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
            });
            fetch(`http://localhost:5000/update/${classId}`, {
              method: 'PATCH'
            })
            .then(res => res.json())
            .then(data => {
              console.log(data);
            })
        }
      });
    }
  };

  return (
    <div className="md:w-1/4 py-10 mx-auto">
      <p className="text-center py-5 text-red-500">{cardError}</p>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          type="submit"
          className="bg-green-500 px-4 my-3 w-full py-1 rounded-lg text-white hover:bg-green-600 font-bold"
          disabled={!stripe || !clientSecret || processing}
        >
          Pay
        </button>
      </form>
      <Toaster />
    </div>
  );
};

export default CheckOutForm;
