
import * as yup from "yup";

export const categoryFormSchema = yup.object({
  categoryName: yup.string().required("Category name is required"),
  categoryImageUrl: yup
    .string()
    .url("Must be a valid URL")
    .required("Category image URL is required"),
});




export const productFormSchema = yup.object().shape({
    productName: yup.string().required("Product name is required"),
    productPrice: yup
        .number()
        .typeError("Price must be a number")
        .positive("Price must be greater than zero")
        .required("Product price is required"),
    productImage: yup
        .string()
        .url("Invalid URL format")
        .required("Product image URL is required"),
});


export const registerSchema = yup.object().shape({
    name: yup.string()
        .required("Name is required.")
        .min(3, "Name must be at least 3 characters.")
        .max(50, "Name cannot exceed 50 characters."),

    email: yup.string()
        .required("Email is required.")
        .email("Please enter a valid email address."),

    password: yup.string()
        .required("Password is required.")
        .min(8, "Password must be at least 8 characters."),

    confirmPassword: yup.string()
        .required("Please confirm your password.")
        .oneOf([yup.ref("password"), null], "Passwords must match."),
}).required();
        
    

export const loginSchema = yup.object().shape({
    
    email: yup.string().required("Product name is required"),
    password: yup.string().required("Product name is required"),
    
        
    
});
