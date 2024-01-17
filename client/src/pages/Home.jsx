import React from "react";

const Home = () => {
  return (
    <div className="flex flex-col items-center text-white font-helvetica mt-8">
      <h1 className="text-4xl">WELCOME</h1>
      <br></br>
      <br></br>
      <div className="mt-4">
        <h2 className="text-xl font-bold mt-4">As a Student:</h2>
        <ul className="list-disc pl-6 mt-2">
          <li>Register and Log In using the @stud.ase.ro as your email prefix.</li>
          <li>
            After gaining access to your dashboard, you can select the professor that you want to request for your dissertation.
          </li>
          <li>
            After beeing selected by the coordinating professor, you will be able to upload your signed request.
          </li>
        </ul>
        <br></br>
        <br></br>
        <h2 className="text-xl font-bold">As a Professor:</h2>
        <ul className="list-disc pl-6 mt-2">
          <li>Register and Log In using the @csie.ase.ro as your email prefix.</li>
          <li>
            After gaining access to your dashboard, you can start your own session.
          </li>
          <li>
            After receiving requests from your students, you will be able to accept or reject the collaboration with them.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
