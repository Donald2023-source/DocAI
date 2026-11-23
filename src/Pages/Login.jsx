import React, { useState } from "react";
export default function Login() {
  const [email, setEmail] = useState("ada@documind.app");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setMessage("Please enter your email and password.");
      return;
    }

    setMessage(
      "Login form submitted successfully! Connect your backend to authenticate users.",
    );
  };

  const handleForgotPassword = () => {
    setMessage("Password recovery will be available soon.");
  };

  const handleCreateAccount = () => {
    setMessage("Account registration will be available soon.");
  };

  return (
    <div>
      <div>
        <section className="login-container">
          {/* Logo */}
          <div className="brand">
            <div className="brand-icon">✣</div>
            <span>DocuMind</span>
          </div>

          {/* Welcome text */}
          <div className="welcome-section">
            <h1>Welcome back</h1>
            <p>Enter your details to access your document workspace.</p>
          </div>

          {/* Login form */}
          <form onSubmit={handleLogin}>
            {/* Email */}
            <div className="form-group">
              <label htmlFor="email">Email address</label>

              <input
                type="email"
                id="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            {/* Password */}
            <div className="form-group">
              <label htmlFor="password">Password</label>

              <div className="password-wrapper">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />

                <button
                  type="button"
                  className="eye-button"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? "🙈" : "👁"}
                </button>
              </div>
            </div>

            {/* Remember me and Forgot password */}
            <div className="form-options">
              <label className="remember-me">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                />
                <span>Remember me</span>
              </label>

              <button
                type="button"
                className="forgot-password"
                onClick={handleForgotPassword}
              >
                Forgot password?
              </button>
            </div>

            {/* Login button */}
            <button type="submit" className="login-button">
              Log in
            </button>

            {/* Feedback message */}
            {message && (
              <p className="message" role="status">
                {message}
              </p>
            )}

            {/* Create account */}
            <div className="signup-text">
              New to DocuMind?{" "}
              <button type="button" onClick={handleCreateAccount}>
                Create an account
              </button>
            </div>
          </form>
        </section>
      </div>
      <div>Left Hand</div>
    </div>
  );
}
