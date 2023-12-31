import * as Yup from "yup";

export const ContactValidation = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string().required("Email is required"),
    message: Yup.string().required("Message is required"),
})