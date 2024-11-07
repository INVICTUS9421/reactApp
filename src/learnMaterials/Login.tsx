import React from "react";

const TryLogin: React.FC = () => {
  const handleLogin = () => {
    // Handle login logic here
  };

  return (
    <div className="container mt-5">
      <div
        className="p-5 shadow-lg rounded bg-light mx-auto"
        style={{ maxWidth: "400px" }}
      >
        <h2 className="text-center mb-4">Login</h2>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            Username:
          </label>
          <input type="text" id="username" className="form-control" />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password:
          </label>
          <input type="password" id="password" className="form-control" />
        </div>
        <div className="text-center">
          <button
            type="button"
            className="btn btn-success"
            onClick={handleLogin}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default TryLogin;
