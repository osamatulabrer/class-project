import { useSelector } from "react-redux";

const Navbar = () => {

  const authStore = useSelector((store) => store.auth);
  console.log(authStore);
  

  const greeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "Good morning";
    if (hour < 17) return "Good afternoon";
    if (hour < 20) return "Good evening";
    return "Good night";
  };
 

  return (
    <div className="flex justify-between items-center p-4  shadow-md px-3">
      <p className="text-lg font-semibold capitalize">{greeting()}, anas!</p>
      <button className="text-white bg-red-500 py-2 px-4 font-semibold">
        logout
      </button>
    </div>
  );
};

export default Navbar;
