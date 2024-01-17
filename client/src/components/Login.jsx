import { useState } from "react";
import { getImageSrc } from "../../lib/utils.jsx";
import Button from "./ui/Button.jsx";
import Input from "./ui/Input.jsx";

const Login = ({ onLogin, userType }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if either email or password is empty
    if (!email || !password) {
      alert("Please fill in all fields");
      return;
    }

    // Proceed with login
    onLogin({ email, password });
  };

  return (
    <div>
      <form
        className="grid grid-cols-1 gap-4 justify-items-center mt-12"
        onSubmit={handleSubmit}
      >
        <p className="font-helvetica font-bold text-3xl text-dark rounded-full bg-ocher1"> &nbsp; LOG IN &nbsp; </p>
        <br></br>
        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={handleEmailChange}
        />
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={handlePasswordChange}
        />
        <Button type="submit">LOGIN</Button>
      </form>
    </div>
  );
};

export default Login;
