import * as Yup from "yup";
/*==== registerSchema =====*/
export const registerSchema = Yup.object().shape({
  email: Yup.string().trim().min(4).max(100).email().required(),
  username: Yup.string().trim().min(4).max(100).required(),
  firstname: Yup.string().trim().min(4).max(100).required(),
  lastname: Yup.string().trim().min(4).max(100).required(),
  password: Yup.string().min(6).required(),
  confirm_password: Yup.string().oneOf(
    [Yup.ref("password"), null],
    "Passwords must match"
  ),
});
/*=======// registerSchema //========*/
/*==== LoginSchema =====*/
export const loginSchema = Yup.object().shape({
  email: Yup.string().trim().min(2).max(100).email().required(),
  password: Yup.string().min(6).required(),
});
/*=======// LoginSchema //========*/
/*==== UpdatedUserSchema =====*/
export const updateUserSchema = Yup.object().shape({
  email: Yup.string().trim().min(6).max(100).email().required(),
  username: Yup.string().trim().min(4).max(100).required(),
  password: Yup.string().min(6).required(),
  confirm_password: Yup.string().oneOf(
    [Yup.ref("password"), null],
    "Passwords must match"
  ),
});
/*=======// UpdatedUserSchema //========*/
/*==== UpdatedUserSchema =====*/
export const EmailSchema = Yup.object().shape({
  email: Yup.string().trim().min(4).max(100).email().required(),
});
/*=======// UpdatedUserSchema //========*/
/*==== UpdatedUserSchema =====*/
export const restePasswordSchema = Yup.object().shape({
  password: Yup.string().trim().min(6).max(100).required(),
  confirm_password: Yup.string().oneOf(
    [Yup.ref("password"), null],
    "Passwords must match"
  ),
});
/*=======// UpdatedUserSchema //========*/
