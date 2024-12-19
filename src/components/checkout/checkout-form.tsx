"use client";
import { useFormik } from "formik";
import React, { useEffect } from "react";
import * as Yup from "yup";
import InputField from "../input/input-field";
import CheckboxField from "../input/checkbox-field";
import SelectField from "../input/select-field";
import { Button } from "../ui/button";
import Image from "next/image";

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
    .max(13, "Phone number cannot exceed 13 digits.")
    // You can optionally add custom error messages here
    .transform((value, context) => {
      // Prevent field update if validation fails (optional)
      if (!Yup.reach(context, "phone.matches")) {
        return context.parent; // Return the previous value
      }
      return value;
    }),
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
      console.log("values: ", { values });
    },
  });

  const handleCheckBox = () => {
    formik.setFieldValue("newsletter", !formik.values.newsletter);
  };

  const handleSelectChange = (name: string, value: any) => {
    formik.setFieldValue(name, value);
  };

  return (
    <div className="mx-auto max-w-screen-lg w-full flex flex-col md:flex-row gap-8">
      {/* form */}
      <div className="flex flex-col md:basis-3/5 w-full order-2 md:order-none">
        <form onSubmit={formik.handleSubmit} className="flex flex-col gap-8">
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
              <Image
                src={"/images/checkout/apple.png"}
                width={72}
                height={64}
                alt="apple"
              />
              <div className="flex flex-col gap-1">
                <div className="line-clamp-2">Apple's Bundle's 6 Kg</div>
                <div className="text-xs text-[#474747]">12</div>
              </div>
            </div>
            <div className="text-base font-medium">
              Total: <span className="text-[#474747]">$160</span>
            </div>
          </div>
          <div className="flex items-center gap-4 justify-between text-sm text-[#474747]">
            <div>Subtotal</div>
            <div className="font-semibold">$120.00</div>
          </div>
          <div className="flex items-center gap-4 justify-between text-sm text-[#474747]">
            <div>Tax</div>
            <div className="font-semibold">$00</div>
          </div>
          <div className="flex items-center gap-4 justify-between text-sm text-[#474747]">
            <div>Shipping</div>
            <div className="font-semibold">$40.00</div>
          </div>
          <hr className="bg-[#B0B0B0]" />
          <div className="flex items-center justify-between text-lg font-semibold text-black">
            <div>Total</div>
            <div>$160.00</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutForm;
