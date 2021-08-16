import { Link } from "react-router-dom";
import "../custom.css";
export default function HomePage() {
  return (
    <div class="container container-center">
      <section className="section section-off-white">
        <h3>
          Welcome to the Fun with Triangles App!{" "}
          <span role="img" aria-label="welcome">
            😃
          </span>{" "}
        </h3>
        <Link to="/quiz" className="link">
          <button className="link link-primary">Explore</button>
        </Link>
      </section>
    </div>
  );
}
