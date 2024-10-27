import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const CheckOut = () => {
  const navigate = useNavigate();
  const cartItem = useSelector((state) => state.cart.cartItems);
  const totalPrice = cartItem
    .reduce((acc, item) => acc + item.newPrice, 0)
    .toFixed(2);
  const currentUser = {"email":"only@gmail.com"};
  const [isChecked , setIsChecked] = useState(true)
  console.log(isChecked)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data)
    const newOrder = {
      name : data.name,
      email : currentUser?.email,
      address : {
        city : data.city,
        country : data.country,
        state : data.state,
        zipcode : data.zipcode,
      },
      phone : data.phone,
      productsId : cartItem.map((item) => item._id),
      totalPrice : totalPrice
    }
    console.log(newOrder)
  }


  useEffect(() => {
    if (cartItem.length === 0) {
      Swal.fire({
        position: "top-end",
        icon: "warning",
        title: "Your Cart Is Empty",
        showConfirmButton: false,
        timer: 1500,
      }).then(() => {
        navigate("/cart");
      });
    }
  }, [cartItem, navigate]);

  return (
    <>
      {cartItem.length > 0 ? (
        <div className="min-h-screen p-6 bg-gray-100 flex items-center justify-center">
          <div className="container max-w-screen-lg mx-auto">
            <div>
              <div>
                <h2 className="font-semibold text-xl text-gray-600 mb-2">
                  Cash On Delivery
                </h2>
                <p className="text-gray-500 mb-2">Total Price: {totalPrice}</p>
                <p className="text-gray-500 mb-6">Items: {cartItem.length}</p>
              </div>
              <div className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3 my-8"
                >
                  <div className="text-gray-600">
                    <p className="font-medium text-lg">Personal Details</p>
                    <p>Please fill out all the fields.</p>
                  </div>
                  <div className="lg:col-span-2">
                    <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                      <div className="md:col-span-5">
                        <label htmlFor="name">Full Name</label>
                        <input
                          {...register("name", {
                            required: "Name is required",
                            minLength: {
                              value: 3,
                              message: "Name must be at least 3 characters",
                            },
                          })}
                          type="text"
                          id="name"
                          className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        />
                        {errors.name && (
                          <p className="text-red-500 text-xs italic">
                            {errors.name.message}
                          </p>
                        )}
                      </div>
                      <div className="md:col-span-5">
                        <label htmlFor="email">Email Address</label>
                        <input
                          {...register("email", {
                            required: "Email is required",
                            pattern: {
                              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                              message: "Enter a valid email address",
                            },
                          })}
                          type="text"
                          id="email"
                          className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                          readOnly
                          defaultValue={currentUser?.email || ""}
                          placeholder="email@domain.com"
                        />
                        {errors.email && (
                          <p className="text-red-500 text-xs italic">
                            {errors.email.message}
                          </p>
                        )}
                      </div>
                      <div className="md:col-span-5">
                        <label htmlFor="phone">Phone Number</label>
                        <input
                          {...register("phone", {
                            required: "Phone number is required",
                            pattern: {
                              value: /^[0-9]{10}$/,
                              message: "Phone number must be 10 digits",
                            },
                          })}
                          type="number"
                          id="phone"
                          className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                          placeholder="+123 456 7890"
                        />
                        {errors.phone && (
                          <p className="text-red-500 text-xs italic">
                            {errors.phone.message}
                          </p>
                        )}
                      </div>
                      <div className="md:col-span-3">
                        <label htmlFor="address">Address / Street</label>
                        <input
                          {...register("address", { required: "Address is required" })}
                          type="text"
                          id="address"
                          className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        />
                        {errors.address && (
                          <p className="text-red-500 text-xs italic">
                            {errors.address.message}
                          </p>
                        )}
                      </div>
                      <div className="md:col-span-2">
                        <label htmlFor="city">City</label>
                        <input
                          {...register("city", { required: "City is required" })}
                          type="text"
                          id="city"
                          className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        />
                        {errors.city && (
                          <p className="text-red-500 text-xs italic">
                            {errors.city.message}
                          </p>
                        )}
                      </div>
                      <div className="md:col-span-2">
                        <label htmlFor="country">Country / Region</label>
                        <input
                          {...register("country", { required: "Country is required" })}
                          type="text"
                          id="country"
                          className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        />
                        {errors.country && (
                          <p className="text-red-500 text-xs italic">
                            {errors.country.message}
                          </p>
                        )}
                      </div>
                      <div className="md:col-span-2">
                        <label htmlFor="state">State / Province</label>
                        <input
                          {...register("state", { required: "State is required" })}
                          type="text"
                          id="state"
                          className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        />
                        {errors.state && (
                          <p className="text-red-500 text-xs italic">
                            {errors.state.message}
                          </p>
                        )}
                      </div>
                      <div className="md:col-span-1">
                        <label htmlFor="zipcode">Zipcode</label>
                        <input
                          {...register("zipcode", {
                            required: "Zipcode is required",
                            minLength: {
                              value: 5,
                              message: "Zipcode must be at least 5 digits",
                            },
                            maxLength: {
                              value: 10,
                              message: "Zipcode cannot exceed 10 digits",
                            },
                          })}
                          type="text"
                          id="zipcode"
                          className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        />
                        {errors.zipcode && (
                          <p className="text-red-500 text-xs italic">
                            {errors.zipcode.message}
                          </p>
                        )}
                      </div>
                      <div className="md:col-span-5 mt-3">
                        <div className="inline-flex items-center">
                          <input
                            {...register("billing_same", { required: "Please agree to terms" })}
                            type="checkbox"
                            id="billing_same"
                            className="form-checkbox"
                          />
                          <label htmlFor="billing_same" className="ml-2">
                            I agree to the{" "}
                            <Link className="underline underline-offset-2 text-blue-600">
                              Terms & Conditions
                            </Link>{" "}
                            and{" "}
                            <Link className="underline underline-offset-2 text-blue-600">
                              Shopping Policy.
                            </Link>
                          </label>
                        </div>
                        {errors.billing_same && (
                          <p className="text-red-500 text-xs italic">
                            {errors.billing_same.message}
                          </p>
                        )}
                      </div>
                      <div className="md:col-span-5 text-right">
                        <button
                          disabled={!isChecked}
                          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        >
                          Place an Order
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default CheckOut;
