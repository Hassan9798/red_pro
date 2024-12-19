"use client";
import { useFormik } from "formik";
import React from "react";
import * as Yup from "yup";
import InputField from "../input/input-field";
import TextAreaField from "../input/textarea-field";
import { Button } from "../ui/button";

const ContactForm = () => {
  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .required("Name is required")
      .max(50, "50 characters is enough"),
    email: Yup.string().email().required("Email is required"),
    subject: Yup.string()
      .required("Subject is required")
      .max(100, "100 characters is enough"),
    phone: Yup.string().matches(
      /^[+\-0-9]+$/,
      "Phone number must contain only plus, minus, and numbers"
    ),
    message: Yup.string().required("Message is required").max(500, "500 characters is enough"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      subject: "",
      phone: "",
      message: "",
    },
    validationSchema,
    onSubmit(values, formikHelpers) {
      alert(JSON.stringify(values));
    },
  });
  return (
    <form className="w-full flex flex-col gap-6" onSubmit={formik.handleSubmit}>
      <div className="flex flex-col sm:flex-row gap-6 sm:gap-3">
        <InputField
          name="name"
          placeholder="Name*"
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.name && Boolean(formik.errors.name)}
          helperText={
            typeof formik.errors.name === "string" ? formik.errors.name : ""
          }
        />
        <InputField
          name="email"
          placeholder="Email*"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={
            typeof formik.errors.email === "string" ? formik.errors.email : ""
          }
        />
      </div>
      <div className="flex flex-col sm:flex-row gap-6 sm:gap-3">
        <InputField
          name="subject"
          placeholder="Subject*"
          value={formik.values.subject}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.subject && Boolean(formik.errors.subject)}
          helperText={
            typeof formik.errors.subject === "string"
              ? formik.errors.subject
              : ""
          }
        />
        <InputField
          name="phone"
          placeholder="Phone"
          value={formik.values.phone}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.phone && Boolean(formik.errors.phone)}
          helperText={
            typeof formik.errors.phone === "string" ? formik.errors.phone : ""
          }
        />
      </div>
      <div className="flex flex-col">
        <TextAreaField
          name="message"
          placeholder="Message*"
          value={formik.values.message}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.message && Boolean(formik.errors.message)}
          helperText={
            typeof formik.errors.message === "string" ? formik.errors.message : ""
          }
        />
      </div>
      <Button variant={'primary'} className="w-full rounded-2xl text-white p-6" type="submit">
        Send Message
      </Button>
    </form>
  );
};

export default ContactForm;
