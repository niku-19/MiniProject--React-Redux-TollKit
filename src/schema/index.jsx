import * as yup from "yup";

export const SignUpSchema = yup.object({
  name: yup
    .string()
    .min(3)
    .max(20)
    .required("Name is Required ! please Enter !"),
  email: yup
    .string()
    .email()
    .matches(/^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$/)
    .required("Email is Required ! please Enter !"),
  password: yup
    .string()
    .required()
    .min(6)
    .max(20)
    .required("Password is Required ! please Enter !"),
  confirm_Password: yup
    .string()
    .required()
    .oneOf([yup.ref("password"), null], "Passwords must match"),
});
