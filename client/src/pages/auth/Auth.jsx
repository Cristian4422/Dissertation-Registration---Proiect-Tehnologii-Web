import { useNavigate } from "react-router-dom";

const Auth = () => {
  const navigate = useNavigate();
  return (
    <div className="grid grid-cols-1 gap-y-4 justify-items-center mt-12">
      <p className="font-helvetica font-bold text-xl text-dark rounded-full bg-ocher1"> &nbsp; LOG IN  &nbsp; </p>
      <button
        className="bg-green2 hover:bg-green1hover px-6 py-4 rounded-full text-white font-bold font-helvetica flex items-center justify-center w-80"
        onClick={() => navigate("/student/login")}
      >
        <span className="ml-2">LOG IN AS STUDENT</span>
      </button>
      <button
        className="bg-green2 hover:bg-green1hover px-6 py-4 rounded-full text-white font-bold font-helvetica flex items-center justify-center w-80"
        onClick={() => navigate("/professor/login")}
      >
        <span className="ml-2">LOG IN AS PROFESSOR</span>
      </button>
      <br></br>
      <br></br>
      <p className="font-helvetica font-bold text-xl text-dark rounded-full bg-ocher1"> &nbsp; SIGN UP &nbsp; </p>
      <button
        className="bg-green1hover hover:bg-green2 px-6 py-4 rounded-full text-white font-bold font-helvetica flex items-center justify-center w-80"
        onClick={() => navigate("/student/register")}
      >
        <span className="ml-2">REGISTER AS STUDENT</span>
      </button>
      <button
        className="bg-green1hover hover:bg-green2 px-6 py-4 rounded-full text-white font-bold font-helvetica flex items-center justify-center w-80"
        onClick={() => navigate("/professor/register")}
      >
        <span className="ml-2">REGISTER AS PROFESSOR</span>
      </button>
    </div>
  );
};

export default Auth;
