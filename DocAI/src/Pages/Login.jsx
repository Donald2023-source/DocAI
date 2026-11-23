import { useState } from "react";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    setMessage("Sign-in is not connected to an account service yet.");
  }

  return (
    <main className="login-page">
      <section className="login-form-panel" aria-labelledby="login-title">
        <div className="login-form-content">
          <a className="login-brand" href="/" aria-label="DocuMind home">
            <span className="login-brand-mark" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none">
                <path d="M12 2.8 13.8 9l6.2 1.8-6.2 1.8-1.8 6.2-1.8-6.2L4 10.8 10.2 9 12 2.8Z" fill="currentColor" />
                <path d="m19 15 .9 2.1L22 18l-2.1.9L19 21l-.9-2.1L16 18l2.1-.9L19 15Z" fill="currentColor" />
              </svg>
            </span>
            <span>DocuMind</span>
          </a>

          <div className="login-heading">
            <h1 id="login-title">Welcome back</h1>
            <p>Enter your details to access your document workspace.</p>
          </div>

          <form className="login-form" onSubmit={handleSubmit}>
            <div className="login-field">
              <label htmlFor="email">Email address</label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                defaultValue="ada@documind.app"
                required
              />
            </div>

            <div className="login-field">
              <label htmlFor="password">Password</label>
              <div className="login-password-input">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="current-password"
                  placeholder="Enter your password"
                  required
                />
                <button
                  className="login-password-toggle"
                  type="button"
                  onClick={() => setShowPassword((visible) => !visible)}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                  title={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? (
                    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <path d="m3 3 18 18M10.6 10.7a2 2 0 0 0 2.7 2.7" />
                      <path d="M9.9 5.2A10.7 10.7 0 0 1 12 5c5.2 0 8.5 4.7 9.5 6.4a1.1 1.1 0 0 1 0 1.2 14.6 14.6 0 0 1-3.1 3.7M6.2 6.2a15.4 15.4 0 0 0-3.7 5.2 1.1 1.1 0 0 0 0 1.2C3.5 14.3 6.8 19 12 19c1 0 2-.2 2.8-.5" />
                    </svg>
                  ) : (
                    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <path d="M2.5 12s3.3-6 9.5-6 9.5 6 9.5 6-3.3 6-9.5 6-9.5-6-9.5-6Z" />
                      <circle cx="12" cy="12" r="2.5" />
                    </svg>
                  )}
                </button>
              </div>
            </div>

            <div className="login-options">
              <label className="login-remember">
                <input type="checkbox" name="remember" defaultChecked />
                <span>Remember me</span>
              </label>
              <button
                className="login-text-button"
                type="button"
                onClick={() => setMessage("Password recovery is not available yet.")}
              >
                Forgot password?
              </button>
            </div>

            <button className="login-submit" type="submit">
              Log in
            </button>
            <p className="login-status" role="status" aria-live="polite">
              {message}
            </p>
          </form>

          <p className="login-signup">
            New to DocuMind?{" "}
            <button
              className="login-text-button"
              type="button"
              onClick={() => setMessage("Account creation is not available yet.")}
            >
              Create an account
            </button>
          </p>
        </div>
      </section>

      <aside className="login-promo-panel" aria-label="DocuMind workspace benefits">
        <div className="login-promo-content">
          <div className="login-promo-mark" aria-hidden="true">
            <svg viewBox="0 0 32 32" fill="none">
              <path d="m19.5 3-13 15.2h9l-2 10.8L26 13.8h-9L19.5 3Z" />
              <path d="m25.5 3 .8 2.7L29 6.5l-2.7.8-.8 2.7-.8-2.7-2.7-.8 2.7-.8.8-2.7Z" />
            </svg>
          </div>
          <h2>Your documents, finally intelligent.</h2>
          <p className="login-promo-copy">
            Organize, understand and find every important detail in seconds with
            your AI-powered workspace.
          </p>
          <ul className="login-benefits">
            <li><BenefitIcon />Secure</li>
            <li><BenefitIcon />Fast search</li>
            <li><BenefitIcon />AI summaries</li>
          </ul>
        </div>
      </aside>
    </main>
  );
}

function BenefitIcon() {
  return (
    <svg className="login-benefit-icon" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <circle cx="8" cy="8" r="6" />
      <path d="m5.5 8 1.7 1.7 3.4-3.4" />
    </svg>
  );
}
