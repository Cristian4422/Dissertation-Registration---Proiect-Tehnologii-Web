import { useEffect, useState } from "react";
import { useAuth } from "../../hooks/useAuth.jsx";
import { useNavigate } from "react-router-dom";
import { getImageSrc } from "../../../lib/utils.jsx";
import Button from "../../components/ui/Button.jsx";
import Input from "../../components/ui/Input.jsx";

const RegisterProfessor = ({ userType }) => {
  const [lastName, setLastName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/logout");
    }
  }, [isLoggedIn, navigate]);

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:3000/auth/professor/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: lastName + " " + firstName,
        email,
        password,
      }),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        console.log(data);
        if (data.error) {
          alert(data.error);
        } else {
          alert("Registration successful");
          navigate("/professor/login");
        }
      })
      .catch((error) => {
        console.error("There was an error!", error);
      });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="grid grid-cols-1 gap-4 justify-items-center mt-12"
    >
      <p className="font-helvetica font-bold text-3xl text-dark rounded-full bg-ocher1"> &nbsp; PROFESSOR REGISTRATION &nbsp; </p>
      <br></br>
      <Input
        type="text"
        vlaue={lastName}
        onChange={handleLastNameChange}
        placeholder="Last Name"
      />
      <Input
        type="text"
        value={firstName}
        onChange={handleFirstNameChange}
        placeholder="First Name"
      />
      <Input
        type="email"
        value={email}
        onChange={handleEmailChange}
        placeholder="example@csie.ase.ro"
      />

      <Input
        type="password"
        value={password}
        onChange={handlePasswordChange}
        placeholder="password"
      />
      <br></br>
      <Button type="submit">REGISTER</Button>
    </form>
  );
};

export default RegisterProfessor;
