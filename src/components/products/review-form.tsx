"use client";
import React, { useState } from "react";
import { Rating, ThinStar } from "@smastrom/react-rating";
import * as Yup from "yup";

import "@smastrom/react-rating/style.css";
import { useFormik } from "formik";
import InputField from "../input/input-field";
import { Button } from "../ui/button";

const ReviewForm = () => {
  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .required("Name is required")
      .max(50, "50 characters are allowed"),
    email: Yup.string().email().required("Email is required"),
    comment: Yup.string().max(500, "500 characters are allowed"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      comment: "",
    },
    validationSchema,
    onSubmit(values, _formikHelpers) {
      alert(JSON.stringify({ ...values, rating }));
    },
  });
  const [rating, setRating] = useState(0); // Initial value

  return (
    <form className="w-full flex flex-col gap-6" onSubmit={formik.handleSubmit}>
      <div className="flex flex-col sm:flex-row gap-6">
        <InputField
          label="Name"
          name="name"
          type="text"
          placeholder="Enter Your Name"
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.name && Boolean(formik.errors.name)}
          helperText={
            typeof formik.errors.name === "string" ? formik.errors.name : ""
          }
        />
        <InputField
          label="Email Address"
          name="email"
          type="email"
          placeholder="Enter Your Email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={
            typeof formik.errors.email === "string" ? formik.errors.email : ""
          }
        />
      </div>
      <InputField
        label="Comment"
        name="comment"
        placeholder="Enter Your Comment Here"
        value={formik.values.comment}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.comment && Boolean(formik.errors.comment)}
        helperText={
          typeof formik.errors.comment === "string" ? formik.errors.comment : ""
        }
      />
      <Rating
        style={{ maxWidth: 120 }}
        value={rating}
        onChange={setRating}
        itemStyles={{
          itemShapes: ThinStar,
          activeFillColor: "#ED4226",
          inactiveFillColor: "#D9D9D9",
        }}
      />
      <div>
        <Button variant={'primary'} size={'lg'} type="submit" className="rounded-xl">Submit Your Review</Button>
      </div>
    </form>
  );
};

export default ReviewForm;
