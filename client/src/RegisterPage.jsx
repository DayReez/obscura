import backgroundImage from './assets/arcane wallpaper 1.png'; // Adjust path if needed

function RegisterPage() {
  return (
    <div
      className="d-flex justify-content-center align-items-center vh-100"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div
        className="p-4 rounded"
        style={{
          width: '100%',
          maxWidth: '450px',
          background: 'rgba(255, 255, 255, 0.15)', // semi-transparent white
          border: '1px solid rgba(255, 255, 255, 0.2)',
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.25)',
        }}
      >
        <h2 className="mb-4 text-center text-white">Register</h2>
        <form>
          <div className="mb-3">
            <label htmlFor="nameInput" className="form-label text-white">Name</label>
            <input type="text" className="form-control" id="nameInput" placeholder="Enter your name" />
          </div>

          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label text-white">Email address</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your email" />
            <div id="emailHelp" className="form-text text-light">We'll never share your email with anyone else.</div>
          </div>

          <div className="mb-3">
            <label htmlFor="phoneInput" className="form-label text-white">Phone Number</label>
            <input type="tel" className="form-control" id="phoneInput" placeholder="Enter phone number" />
          </div>

          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label text-white">Password</label>
            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Enter password" />
          </div>

          <div className="mb-3 form-check">
            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
            <label className="form-check-label text-white" htmlFor="exampleCheck1">
              I have read the Terms of Service
            </label>
          </div>

          <button type="submit" className="btn btn-primary w-100">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default RegisterPage;
