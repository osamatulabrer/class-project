import app from "./firebaseConfig";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";


const auth = getAuth(app)

// const registerUser = async (data) => {
//     const {name,email,password,role} = data;
//     try {
//         const res = await createUserWithEmailAndPassword(auth, email, password)
//         const user = res.user
//         return user
//     } catch(error) {
//         return {
//             error:true,
//             Code : error.code,
//             Message : error.message
//         }
        
//       };
   
 
  
// };
const registerUser = async (data) => {
    const { name, email, password, role } = data;

    try {
        const response = await createUserWithEmailAndPassword(
            auth,
            email,
            password
        );
        const user = response.user;

        return {
            id:user.uid,
            name,
            role,

        }
    } catch (error) {
        return {
            error: true,
            code: error.code,
            message: error.message,
        };
    }
};

const logInUser = async(email,password)=>{
try {
    const response =await  signInWithEmailAndPassword(auth, email, password)
    const data = response.user;
    return data
} catch (error) {
    return {
        error: true,
        code: error.code,
        message: error.message,
    };
}}
  


   
 

const logOutUser = async()=>{};

export { registerUser, logOutUser, logInUser, auth };