
function TrySignup() {
    const handleSignup = () => {
    }
    return(
        <div style={styles.container}>
            <h2>SignUp</h2>
            <div >
                <label>Username:</label>
                <input id="username" style={styles.input} type="text"/>
            </div>
            <div>
                <label>Emailid:</label>
                <input type="email" style={styles.input} id="emailid"/>
            </div>
            <div>
                <label>Password:</label>
                <input type="password" style={styles.input} id="pass"/>
            </div>
            <div>
                <label>Confirm Password:</label>
                <input type="password" style={styles.input} id="conpass" />
            </div>
            <button style={styles.button} onClick={handleSignup}>Sign Up</button>
        </div>
    );
}

const styles = {
    container: {
        padding:"30px",
        border: "1px solid #ccc",
        width: "330px",
        borderRadius: "30px",
        textAlign: "center" as "center",
        margin:"auto",
        marginTop: "100px"
    },
    button :{
        marginTop: "15px",
        borderRadius: "15px",
        padding: "10px",
        width: "100px",
        backgroundColor: "#28a745",
        color: "white",
        cursor: "pointer"
    },
    input: {
        borderRadius: "12px",
        width:"100%",
        padding:"3px",
        marginTop: "5px",
        marginBottom: "8px",
        boxSizing: "border-box" as "border-box",
    }
}

export default TrySignup;