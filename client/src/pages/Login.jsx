import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        <div className="auth-logo" onClick={() => navigate("/")} style={{ cursor: "pointer" }}>
          MoviePuzzler
        </div>
        <h2>Welcome back</h2>
        <p className="sub">Log in to continue your streak.</p>

        {error && <div className="error-box">{error}</div>}

        <form onSubmit={handleSubmit}>
          <div className="field">
            <label>Email</label>
            <input type="email" name="email" value={form.email} onChange={handleChange} required placeholder="you@example.com" />
          </div>
          <div className="field">
            <label>Password</label>
            <input type="password" name="password" value={form.password} onChange={handleChange} required placeholder="••••••••" />
          </div>
          <button type="submit" className="auth-submit">
          </button>
        </form>

        <p className="auth-footer">
          No account?{" "}
          <button onClick={() => navigate("/signup")}>Sign up</button>
        </p>
      </div>
    </div>
  );
}