import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-page">
      <nav className="nav">
        <span className="nav-logo">MoviePuzzler</span>
        <div className="nav-buttons">
          <button className="btn-secondary" onClick={() => navigate("/login")}>Log in</button>
          <button className="btn-primary" onClick={() => navigate("/signup")}>Sign up</button>
        </div>
      </nav>

      <div className="hero">
        <h1>Guess the movie from a <span>literally honest</span> description</h1>
        <p>A billionaire beats up the mentally ill while wearing a rubber suit → The Dark Knight</p>
        <button className="btn-primary" onClick={() => navigate("/signup")}>Start Playing</button>

      </div>
    </div>
  );
}