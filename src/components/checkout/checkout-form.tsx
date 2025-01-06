"use client";
import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import * as Yup from "yup";
import InputField from "../input/input-field";
import CheckboxField from "../input/checkbox-field";
import SelectField from "../input/select-field";
import { Button } from "../ui/button";
import Image from "next/image";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { checkout } from "@/api/products";
import Payment from "../payment/Payment";
import { stripePaymentIntent } from "@/api/stripe";
import { convertToSubcurrency } from "@/lib/utils";

const validationSchema = Yup.object().shape({
  email: Yup.string().email().required("Email Address is required"),
  newsletter: Yup.boolean(),
  firstName: Yup.string()
    .required("First Name is required.")
    .max(50, "Only 50 characters are allowed."),
  lastName: Yup.string()
    .required("Last Name is required.")
    .max(50, "Only 50 characters are allowed."),
  phone: Yup.string()
    .required("Phone number is required.")
    .matches(/^\d+$/, "Phone number must be numeric.")
    .min(10, "Phone number must be at least 10 digits.")
    .max(13, "Phone number cannot exceed 13 digits."),
    // You can optionally add custom error messages here
    // .transform((value, context) => {
    //   // Prevent field update if validation fails (optional)
    //   if (!Yup.reach(context, "phone.matches")) {
    //     return context.parent; // Return the previous value
    //   }
    //   return value;
    // }
  // ),
  address: Yup.string()
    .required("Address is required")
    .max(250, "Only 250 characters are allowed."),
  apartment: Yup.string().max(250, "Only 250 characters are allowed"),
  city: Yup.string().required("City is required"),
  country: Yup.string().required("Country is required"),
  state: Yup.string().required("State is required"),
  zip: Yup.string()
    .required("Zip code is required.")
    .matches(
      /^\d{5}(?:[-\s]\d{4})?$/,
      "Invalid zip code format. (e.g., 12345 or 12345-6789)"
    ),
  // You can optionally add custom error messages here
});

const CheckoutForm = () => {
  const [selectedOption, setSelectedOption] = useState(20);
  const user = useSelector((state: RootState) => state.centeralizedStateData.user);
  const cart = useSelector((state: RootState) => state.centeralizedStateData.cart);
  const [open, setOpen] = useState(false);
  const [checkoutId, setCheckoutId] = useState(null);
  const formik = useFormik({
    initialValues: {
      email: "",
      newsletter: false,
      firstName: "",
      lastName: "",
      phone: "",
      address: "",
      apartment: "",
      city: "",
      country: "",
      state: "",
      zip: "",
    },
    validationSchema,
    onSubmit: (values, _formikHelpers) => {
      // console.log(values,"values")
      const obj={
        customer_id: user.user?.id,
        shipping_country:values.country,
        shipping_firstname:values.firstName,
        shipping_lastname:values.lastName,
        shipping_address:values.address,
        shipping_contactnumber:values.phone,
        shipping_postalcode:values.zip,
        shipping_state:values.state,
        shipping_id:selectedOption === 20 ? 1 : 2,
        payment_type_id:2,
        discount_amount:0.00,
        sub_total:cart.total
      }
      checkout(obj,user.token).then(async(res)=>{
        console.log(res,"res checkout")
        setCheckoutId(res.data.id)
      //  const response = await stripePaymentIntent({ 
      //   amount: convertToSubcurrency(cart.total + selectedOption),
      //   currency: 'usd',
      //   payment_method_types: ['card'],
      //   })
      //   console.log(response,"response intent")

        
        setOpen(true)
      })
      .catch((err)=>{
        console.log(err)
      })
    },
  });

  const handleCheckBox = () => {
    formik.setFieldValue("newsletter", !formik.values.newsletter);
  };

  const handleSelectChange = (name: string, value: any) => {
    formik.setFieldValue(name, value);
  };

  const handleClick = (e:any) => {
    e.preventDefault()
    formik.handleSubmit(e)
  };

  const handleChange = (event:any) => {
    setSelectedOption(parseInt(event.target.value));
  };

  return (
    <div className="mx-auto max-w-screen-lg w-full flex flex-col md:flex-row gap-8">
      {/* form */}
    {
        open? (
          <Payment amount={cart.total} checkoutId={checkoutId} open={open} shippingAmount={selectedOption} />
        ):
        (
      <>
      <div className="flex flex-col md:basis-3/5 w-full order-2 md:order-none">
        <form onSubmit={(e)=>formik.handleSubmit(e)} className="flex flex-col gap-8">
          {/* contact information */}
          <div className="flex flex-col gap-6">
            <h3 className="text-2xl font-medium">Contact Information</h3>
            <div className="flex flex-col gap-3">
              <InputField
                name="email"
                placeholder="Email Address or Phone Number"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.submitCount > 0 && Boolean(formik.errors.email)}
                helperText={
                  typeof formik.errors.email === "string"
                    ? formik.errors.email
                    : ""
                }
              />
              <CheckboxField
                label="Email me with news and offer"
                checked={formik.values.newsletter}
                onClick={handleCheckBox}
              />
            </div>
          </div>
          {/* Shippin Address */}
          <div className="flex flex-col gap-6">
            <h3 className="text-2xl font-medium">Shipping Address</h3>
            <div className="flex flex-col gap-4">
              <div className="flex flex-col md:flex-row md:items-center gap-4">
                <InputField
                  name="firstName"
                  placeholder="First Name"
                  value={formik.values.firstName}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={
                    formik.submitCount > 0 && Boolean(formik.errors.firstName)
                  }
                  helperText={
                    typeof formik.errors.firstName === "string"
                      ? formik.errors.firstName
                      : ""
                  }
                />
                <InputField
                  name="lastName"
                  placeholder="Last Name"
                  value={formik.values.lastName}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={
                    formik.submitCount > 0 && Boolean(formik.errors.lastName)
                  }
                  helperText={
                    typeof formik.errors.lastName === "string"
                      ? formik.errors.lastName
                      : ""
                  }
                />
              </div>
              <InputField
                name="phone"
                placeholder="Phone Number"
                value={formik.values.phone}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.submitCount > 0 && Boolean(formik.errors.phone)}
                helperText={
                  typeof formik.errors.phone === "string"
                    ? formik.errors.phone
                    : ""
                }
              />
              <InputField
                name="address"
                placeholder="Full Address"
                value={formik.values.address}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.submitCount > 0 && Boolean(formik.errors.address)}
                helperText={
                  typeof formik.errors.address === "string"
                    ? formik.errors.address
                    : ""
                }
              />
              <InputField
                name="apartment"
                placeholder="Apartment, Suit, Etc (Optional)"
                value={formik.values.apartment}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.submitCount > 0 && Boolean(formik.errors.apartment)
                }
                helperText={
                  typeof formik.errors.apartment === "string"
                    ? formik.errors.apartment
                    : ""
                }
              />
              <InputField
                name="city"
                placeholder="City"
                value={formik.values.city}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.submitCount > 0 && Boolean(formik.errors.city)}
                helperText={
                  typeof formik.errors.city === "string"
                    ? formik.errors.city
                    : ""
                }
              />
              <div className="flex flex-col lg:flex-row lg:items-start gap-4">
                <SelectField
                  name="country"
                  placeholder="Country"
                  value={formik.values.country}
                  items={["America", "Saudia", "Bangaladesh"]}
                  handleValueChange={(value: string) =>
                    handleSelectChange("country", value)
                  }
                  error={
                    formik.submitCount > 0 && Boolean(formik.errors.country)
                  }
                  helperText={
                    typeof formik.errors.country === "string"
                      ? formik.errors.country
                      : ""
                  }
                />
                <SelectField
                  name="state"
                  placeholder="State"
                  value={formik.values.state}
                  items={["America", "Saudia", "Bangaladesh"]}
                  handleValueChange={(value: string) =>
                    handleSelectChange("state", value)
                  }
                  error={formik.submitCount > 0 && Boolean(formik.errors.state)}
                  helperText={
                    typeof formik.errors.state === "string"
                      ? formik.errors.state
                      : ""
                  }
                />
                <InputField
                  name="zip"
                  placeholder="Zip Code"
                  value={formik.values.zip}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.submitCount > 0 && Boolean(formik.errors.zip)}
                  helperText={
                    typeof formik.errors.zip === "string"
                      ? formik.errors.zip
                      : ""
                  }
                />
              </div>
            </div>
          </div>
          <div className="flex justify-end">
            <Button
              className="rounded-xl w-full sm:w-auto"
              variant={"primary"}
              size={"lg"}
              type="submit"
            >
              Continue to Shipping
            </Button>
          </div>
        </form>
      </div>
      {/* total */}
      <div className="md:basis-2/5 flex flex-col gap-6 w-full order-1 md:order-none">
        <div className="flex flex-col gap-4 p-4 border border-[#D9D9D9] rounded-xl">
          <div className="text-[#474747] flex justify-between gap-4 items-center">
            <div className="flex gap-4 items-center text-sm">
              {/* <Image
                src={"/images/checkout/apple.png"}
                width={72}
                height={64}
                alt="apple"
              />
              <div className="flex flex-col gap-1">
                <div className="line-clamp-2">Apple's Bundle's 6 Kg</div>
                <div className="text-xs text-[#474747]">12</div>
              </div> */}
              {/* // */}
              <div className="p-4">
                <h2 className="text-lg font-medium mb-4">Choose a shipping option:</h2>
                <div className="flex space-x-8">
                  <label className="flex items-center space-x-4">
                    <input
                      type="radio"
                      name="shipping"
                      value={20}
                      checked={selectedOption == 20}
                      onChange={handleChange}
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
                    />
                    <div>
                      <span className="font-medium">Normal Delivery
                      </span>
                      <p className="text-sm text-gray-500">3-7 days, $20</p>
                    </div>
                  </label>
                  <label className="flex items-center space-x-4">
                    <input
                      type="radio"
                      name="shipping"
                      value={50}
                      checked={selectedOption == 50}
                      onChange={handleChange}
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
                    />
                    <div>
                      <span className="font-medium">Urgent Delivery </span>
                      <p className="text-sm text-gray-500">1-2 days, $50</p>
                    </div>
                  </label>
                </div>
              </div>
              {/* // */}
            </div>
            <div className="text-base font-medium">
              Total: <span className="text-[#474747]">${cart.total + selectedOption}</span>
            </div>
          </div>
          <div className="flex items-center gap-4 justify-between text-sm text-[#474747]">
            <div>Subtotal</div>
            <div className="font-semibold">${cart.total}</div>
          </div>
          <div className="flex items-center gap-4 justify-between text-sm text-[#474747]">
            <div>Tax</div>
            <div className="font-semibold">$0.00</div>
          </div>
          <div className="flex items-center gap-4 justify-between text-sm text-[#474747]">
            <div>Shipping</div>
            <div className="font-semibold">${selectedOption}</div>
          </div>
          <hr className="bg-[#B0B0B0]" />
          <div className="flex items-center justify-between text-lg font-semibold text-black">
            <div>Total</div>
            <div>${cart.total + selectedOption}</div>
          </div>
        </div>
      </div>
      </>
        )
      }
     
    </div>
  );
};

export default CheckoutForm;
