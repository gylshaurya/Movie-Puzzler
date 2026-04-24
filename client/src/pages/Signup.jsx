import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        <div className="auth-logo" onClick={() => navigate("/")} style={{ cursor: "pointer" }}>MoviePuzzler</div>
        <h2>Create account</h2>
        <p className="sub">Join and start guessing movies.</p>

        {error && <div className="error-box">{error}</div>}

        <form onSubmit={handleSubmit}>
          <div className="field">
            <label>Name</label>
            <input type="text" name="name" value={form.name} onChange={handleChange} required placeholder="Shaurya" />
          </div>
          <div className="field">
            <label>Email</label>
            <input type="email" name="email" value={form.email} onChange={handleChange} required placeholder="shaurya@gmail.com" />
          </div>
          <div className="field">
            <label>Password</label>
            <input type="password" name="password" value={form.password} onChange={handleChange} required placeholder="••••••••" minLength={6} />
          </div>
          <button type="submit" className="auth-submit" >
          </button>
        </form>

        <p className="auth-footer">
          Already have an account?{" "}
          <button onClick={() => navigate("/login")}>Log in</button>
        </p>
      </div>
    </div>
  );
}