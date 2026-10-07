import "./App.css";

const avengers = [
  {
    name: "Iron Man",
    role: "Genius • Billionaire • Hero",
    color: "#b71c1c",
    emoji: "🤖",
  },
  {
    name: "Captain America",
    role: "Super Soldier",
    color: "#1565c0",
    emoji: "🛡️",
  },
  {
    name: "Thor",
    role: "God of Thunder",
    color: "#5e35b1",
    emoji: "⚡",
  },
  {
    name: "Hulk",
    role: "The Strongest Avenger",
    color: "#2e7d32",
    emoji: "💪",
  },
  {
    name: "Black Widow",
    role: "Master Spy",
    color: "#212121",
    emoji: "🕷️",
  },
  {
    name: "Hawkeye",
    role: "Master Archer",
    color: "#6a1b9a",
    emoji: "🏹",
  },
];

function App() {
  return (
    <div className="app">
      <nav className="navbar">
        <div className="logo">MARVEL</div>

        <div className="nav-links">
          <a href="#heroes">Heroes</a>
          <a href="#about">About</a>
          <button>Join Avengers</button>
        </div>
      </nav>

      <section className="hero">
        <div className="hero-content">
          <p className="subtitle">THE WORLD'S GREATEST HEROES</p>

          <h1>
            AVENGERS
            <span>ASSEMBLE</span>
          </h1>

          <p className="description">
            Earth's mightiest heroes have united to protect the world from
            threats no single hero could face alone.
          </p>

          <button className="hero-button">MEET THE TEAM</button>
        </div>

        <div className="hero-symbol">A</div>
      </section>

      <section className="heroes" id="heroes">
        <div className="section-heading">
          <p>EARTH'S MIGHTIEST</p>
          <h2>THE AVENGERS</h2>
        </div>

        <div className="hero-grid">
          {avengers.map((hero) => (
            <div
              className="hero-card"
              key={hero.name}
              style={{ "--hero-color": hero.color }}
            >
              <div className="hero-image">{hero.emoji}</div>

              <div className="card-content">
                <h3>{hero.name}</h3>
                <p>{hero.role}</p>

                <button className="details-button">
                  VIEW HERO →
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <footer>
        <p>© 2026 Avengers Initiative</p>
        <p>AVENGERS ASSEMBLE</p>
      </footer>
    </div>
  );
}

export default App;
