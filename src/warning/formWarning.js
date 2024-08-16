import * as Yup from "yup";

export const formWarning = Yup.object({
  fullName: Yup.string()
    .max(20, "Must be 20 characters or less")
    .required("Please enter a valide name"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Please enter a valide email"),
  password: Yup.string().min(6).required("Please enter a valide password"),
});
