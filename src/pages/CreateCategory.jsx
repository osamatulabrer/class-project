import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { categoryFormSchema } from "../validation/ValidationSchema";
import {
  getFirebaseDataForEdit,
  setDataToFirebase,
  updateDataToFirebase,
} from "../database/firebaseUtils";
import { useNavigate, useParams } from "react-router";
import { useEffect } from "react";
import { toast } from "react-toastify";

const CreateCategory = () => {
  const navigate = useNavigate();
  const params = useParams();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(categoryFormSchema),
    defaultValues: {
      categoryName: "",
      categoryImageUrl: "",
  }});
  useEffect(() => {
    async function getData() {
      let res = await getFirebaseDataForEdit("categories/" + params.id);
      reset(res);
    }
    if (params.id) {
      getData();
    }else{
      reset( {
        categoryName: "", 
        categoryImageUrl: "",
      },)
    }
  }, [params, reset]);
  const onSubmit = (data) => {
    if (params.id) {
      updateDataToFirebase(`categories/${params.id}`,data)
      toast.success('update is successful')
      
    }else{

      setDataToFirebase("categories", data); 
      toast.success('creation is successful')
    }
    navigate('/');
  };

  return (
    <div className="bg-[#d9d9d9] bg-opacity-20 rounded shadow-sm max-w-lg mx-auto p-5 my-12">
      <div>
        <h2 className="py-4 capitalize text-2xl font-bold text-center">
          {params.id ? "Edit category" : "Add category"}
        </h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Category Name Field */}
          <div className="flex flex-col mb-5 space-y-3">
            <label
              className="text-lg font-semibold capitalize"
              htmlFor="categoryName" // Added `htmlFor` to link the label to the input for accessibility.
            >
              Category Name
            </label>
            <input
              id="categoryName" // Added `id` for accessibility and better semantics.
              {...register("categoryName")} // Correctly registers the field for form handling.
              className="p-3 focus:outline-gray-400 border-gray-300 border rounded"
              type="text"
            />
            {errors.categoryName && (
              <span className="text-red-600 text-md">
                {errors.categoryName.message}{" "}
                {/* Displays error messages from validation schema. */}
              </span>
            )}
          </div>

          {/* Category Image URL Field */}
          <div className="flex flex-col mb-5 space-y-3">
            <label
              className="text-lg font-semibold capitalize"
              htmlFor="categoryImageUrl" // Added `htmlFor` for better accessibility.
            >
              Category Image URL
            </label>
            <input
              id="categoryImageUrl" // Added `id` to link with the label and improve semantics.
              {...register("categoryImageUrl")} // Correctly registers the field for form handling.
              className="p-3 focus:outline-gray-400 border-gray-300 border rounded"
              type="url"
            />
            {errors.categoryImageUrl && (
              <span className="text-red-600 text-md">
                {errors.categoryImageUrl.message}{" "}
                {/* Displays validation error for URL input. */}
              </span>
            )}
          </div>

          {/* Submit Button */}
          <div className="bg-[#12B862] rounded-sm py-3 my-10 text-center">
            <input
              type="submit"
              placeholder="submit"
              className="text-white font-semibold capitalize cursor-pointer"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateCategory;
