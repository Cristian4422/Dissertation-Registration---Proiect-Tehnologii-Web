import { useAuth } from "../hooks/useAuth.jsx";
import { useNavigate } from "react-router-dom";
import Button from "./ui/Button.jsx";

const NavBar = () => {
  const { logout, isLoggedIn } = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/auth");
  };

  const handleLogout = () => {
    logout();
    navigate("/auth");
  };

  return (
    <div
      className="flex flex-col sm:flex-row justify-between items-center py-2 px-4 sm:py-5 sm:px-10
    bg-gradient-to-r from-green1 via-green2 to-green1 text-white font-helvetica font-bold"
    >
      <div className="flex-1 text-center"></div>
      <div className="flex-1 text-center text-4xl">DISSERATION</div>
      {isLoggedIn ? (
        <div className="flex-1 text-center">
          <Button
            className="bg-green2hover hover:bg-green2"
            onClick={handleLogout}
          >
            LOG OUT
          </Button>
        </div>
      ) : (
        <div className="flex-1 text-center">
          <Button
            className="bg-green2hover hover:bg-green2"
            onClick={handleLogin}
          >
            SIGN IN
          </Button>
        </div>
      )}
    </div>
  );
};

export default NavBar;
