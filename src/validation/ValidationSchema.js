
import * as yup from "yup";

export const categoryFormSchema = yup.object().shape({
  categoryName: yup.string().required("Category name is required"),
  categoryImageUrl: yup
    .string()
    .url("Must be a valid URL")
    .required("Category image URL is required"),
});
