import "./Home.css";

function Home() {
  return (
    <div className="home-container">
      <div className="home-content">
        <div className="home-header">
          <div className="home-icon">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
          </div>
          <h1 className="home-title">Group 8</h1>
          <p className="home-subtitle">Code Marathon 1</p>
        </div>

        <div className="team-section">
          <h2 className="team-title">Our Team</h2>
          <div className="members-grid">
            <div className="member-card">
              <div className="member-avatar">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                </svg>
              </div>
              <h3 className="member-name">Minh Hoang</h3>
              <p className="member-role">Team Lead</p>
            </div>

            <div className="member-card">
              <div className="member-avatar">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                </svg>
              </div>
              <h3 className="member-name">Soreen</h3>
              <p className="member-role">Developer</p>
            </div>

            <div className="member-card">
              <div className="member-avatar">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                </svg>
              </div>
              <h3 className="member-name">Aashish</h3>
              <p className="member-role">Developer</p>
            </div>

            <div className="member-card">
              <div className="member-avatar">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                </svg>
              </div>
              <h3 className="member-name">May</h3>
              <p className="member-role">Developer</p>
            </div>
          </div>
        </div>

        <div className="project-info">
          <div className="info-card">
            <div className="info-icon">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0L19.2 12l-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" />
              </svg>
            </div>
            <h3>Full-Stack Development</h3>
            <p>Building modern web applications with React and modern CSS</p>
          </div>

          <div className="info-card">
            <div className="info-icon">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
              </svg>
            </div>
            <h3>Modern UI/UX</h3>
            <p>
              Creating beautiful, responsive interfaces with glassmorphism
              design
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
