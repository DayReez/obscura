function LoginPage() {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="login-form-container p-4 border rounded shadow bg-white" style={{ width: "100%", maxWidth: "400px" }}>
        <h2 className="mb-4 text-center">Register</h2>
        <form>
            <div className="mb-3">
            <label htmlFor="nameInput" className="form-label">Name</label>
            <input type="text" className="form-control" id="nameInput" placeholder="Enter your name" />
            </div>

            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your email"/>
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>

            <div className="mb-3">
                <label htmlFor="phoneInput" className="form-label">Phone Number</label>
                <input type="tel" className="form-control" id="phoneInput" placeholder="Enter phone number" />
            </div>

            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1" />
            </div>

            <div className="mb-3 form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                <label className="form-check-label" htmlFor="exampleCheck1">I have read the Terms of Service</label>
            </div>

          <button type="submit" className="btn btn-primary w-100">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
