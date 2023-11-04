import { useState } from "react"
import "../assets/css/login.css"
import { useNavigate } from "react-router-dom"

const Login = () => {
  const [isSignup, setIsSignup] = useState(false)

  const navigate = useNavigate()

  const toggleForm = () => {
    setIsSignup(!isSignup)
  }

  const btnSigninClickHandler = () => {
    // cek ke backend validasi login
    // mendapatkan token, simpan session / local storage browser
    // redirect ke home / user / dashboard
    navigate("/dashboard")
  }

  return (
    <div className="login-body">
      <div
        className={`login-container ${isSignup ? "right-panel-active" : ""}`}
      >
        <div className="form-container sign-up-container">
          <form
            className="login-form"
            action="#"
          >
            <h1>Create Account</h1>
            <div className="social-container">
              <a
                href="#"
                className="social"
              >
                <i class="bx bxl-facebook"></i>
              </a>
              <a
                href="#"
                className="social"
              >
                <i className="bx bxl-google"></i>
              </a>
              <a
                href="#"
                className="social"
              >
                <i className="bx bxl-twitter"></i>
              </a>
            </div>
            <span>or use your email for registration</span>
            <input
              type="text"
              name="name"
              placeholder="Name"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
            />
            <button type="button">SignUp</button>
          </form>
        </div>
        <div className="form-container sign-in-container">
          <form
            className="login-form"
            action="#"
          >
            <h1>Sign In</h1>
            <div className="social-container">
              <a
                href="#"
                className="social"
              >
                <i class="bx bxl-facebook"></i>
              </a>
              <a
                href="#"
                className="social"
              >
                <i className="bx bxl-google"></i>
              </a>
              <a
                href="#"
                className="social"
              >
                <i className="bx bxl-twitter"></i>
              </a>
            </div>
            <span>or use your account</span>
            <input
              type="email"
              name="email"
              placeholder="Email"
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
            />
            <a href="#">Forgot Your Password</a>
            <button
              type="button"
              onClick={btnSigninClickHandler}
            >
              Sign In
            </button>
          </form>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>Welcome Back!</h1>
              <p>
                To keep connected with us please login with your personal info
              </p>
              <button
                className="ghost"
                onClick={toggleForm}
              >
                Sign In
              </button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1>Hello, Friend!</h1>
              <p>Enter your details and start the journey with us</p>
              <button
                className="ghost"
                onClick={toggleForm}
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
