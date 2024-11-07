function TryLogin() {
  const handleLogin = () => {};
  return (
    <div style={styles.container}>
      <h2 className="text-center">Login</h2>
      <div >
        <label>Username:</label>
        <input type="text" style={styles.input} id="username" />
      </div>
      <div>
        <label>Password:</label>
        <input type="password" style={styles.input} id="password" />
      </div>
      <div>
        <button type="submit" className="btn btn-success" onClick={handleLogin}>
          Login
        </button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    width: "300px",
    margin: "auto",
    padding: "30px",
    border: "1px solid #ccc",
    borderRadius: "50px",
    textAlign: "center" as "center",
    marginTop: "150px",
  },
  input: {
    width: "100%",
    padding: "8px",
    borderRadius: "30px",
    marginTop: "10px",
    marginBottom: "20px",
  },
};

export default TryLogin;
