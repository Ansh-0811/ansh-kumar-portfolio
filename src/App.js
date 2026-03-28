import React, { useState } from 'react';
import './App.css';

// Hero Section Component
function HeroSection() {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-badge">🌱 Bloom With You</div>
        <h1>Grow Together</h1>
        <p className="tagline">Personal Growth • Real Connections • Your Journey</p>
        <p className="hero-description">
          Bloom With You is a platform dedicated to personal development and meaningful connections. 
          We believe real growth happens when you have the right support, tools, and community behind you.
        </p>
        <div className="cta-buttons">
          <a href="#about" className="btn btn-primary">Learn More</a>
          <a href="#contact" className="btn btn-secondary">Get Started</a>
        </div>
      </div>
    </section>
  );
}

// Stat Card Component
function StatCard({ number, label, icon }) {
  return (
    <div className="stat-card">
      <div className="stat-icon">{icon}</div>
      <div className="stat-number">{number}</div>
      <div className="stat-label">{label}</div>
    </div>
  );
}

// Skill Category Component
function SkillCategory({ title, skills }) {
  return (
    <div className="skill-category">
      <h3>{title}</h3>
      <ul className="skill-list">
        {skills.map((skill, idx) => (
          <li key={idx}>{skill}</li>
        ))}
      </ul>
    </div>
  );
}

// Experience Item Component
function ExperienceItem({ title, company, date, description }) {
  return (
    <div className="experience-item">
      <div className="experience-header">
        <div>
          <div className="experience-title">{title}</div>
          <div className="experience-company">{company}</div>
        </div>
        <div className="experience-date">{date}</div>
      </div>
      <div className="experience-description">{description}</div>
    </div>
  );
}

// Project Card Component
function ProjectCard({ title, description, tech }) {
  return (
    <div className="project-card">
      <div className="project-header">
        <div className="project-title">{title}</div>
      </div>
      <div className="project-description">{description}</div>
      <div className="project-tech">
        {tech.map((t, idx) => (
          <span key={idx} className="tech-tag">{t}</span>
        ))}
      </div>
    </div>
  );
}

// Main App
function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState('');

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Backend integration ready - replace with your API endpoint
    setFormStatus('sending');
    setTimeout(() => {
      setFormStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setFormStatus(''), 3000);
    }, 500);
  };

  return (
    <div className="App">
      {/* Navigation */}
      <nav>
        <div className="container">
          <div className="logo">Ansh Kumar</div>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#stats">Impact</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <HeroSection />

      {/* Stats Section */}
      <section id="stats" className="stats-section">
        <div className="stats-grid">
          <StatCard number="1000+" label="Growing Community" icon="🌱" />
          <StatCard number="24/7" label="Support Available" icon="💬" />
          <StatCard number="∞" label="Potential" icon="⭐" />
          <StatCard number="100%" label="Dedicated to You" icon="❤️" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section about-section">
        <h2>What is Bloom With You?</h2>
        <div className="about-content">
          <div className="about-text">
            <p className="lead-text">
              Bloom With You is a community and platform built for people who want to grow—whether that's 
              personal development, career advancement, or building meaningful connections with others on the same journey.
            </p>
            <div className="highlights">
              <div className="highlight">
                <span className="highlight-icon">🎯</span>
                <div>
                  <strong>Our Mission</strong><br/>
                  <small>Help you become the best version of yourself</small>
                </div>
              </div>
              <div className="highlight">
                <span className="highlight-icon">🤝</span>
                <div>
                  <strong>Our Community</strong><br/>
                  <small>Connect with others pursuing real growth</small>
                </div>
              </div>
            </div>
          </div>
          <div className="about-text">
            <div className="highlights">
              <div className="highlight">
                <span className="highlight-icon">🛠️</span>
                <div>
                  <strong>What We Offer</strong><br/>
                  <small>Resources, guidance, and accountability</small>
                </div>
              </div>
              <div className="highlight">
                <span className="highlight-icon">📈</span>
                <div>
                  <strong>Real Results</strong><br/>
                  <small>Track progress. Celebrate wins. Keep growing.</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="skills" className="section skills-section">
        <h2>How Bloom With You Works</h2>
        <div className="skills-grid">
          <SkillCategory 
            title="🎓 Learn"
            skills={['Structured guidance', 'Expert resources', 'Real-world strategies', 'Step-by-step plans']}
          />
          <SkillCategory 
            title="🤝 Connect"
            skills={['Community support', 'Find your tribe', 'Share experiences', 'Grow together']}
          />
          <SkillCategory 
            title="📊 Track"
            skills={['Progress monitoring', 'Goal setting', 'Win celebrations', 'Data insights']}
          />
          <SkillCategory 
            title="🚀 Achieve"
            skills={['Accountability', 'Breakthrough moments', 'Real results', 'Next-level growth']}
          />
        </div>
      </section>

      {/* Why Us Section */}
      <section id="experience" className="section experience-section">
        <h2>Why Choose Bloom With You?</h2>
        <div className="experience-list">
          <ExperienceItem 
            title="Built by Real People"
            company="For real growth"
            date="Founded 2023"
            description="Founded by someone who built their own path from zero. We understand the struggle. We live it. That's why we built this for you."
          />
          <ExperienceItem 
            title="Proven Methodology"
            company="That actually works"
            date="2023 - Present"
            description="Our approach is based on real execution, accountability, and community support. We don't sell dreams—we help you build reality."
          />
          <ExperienceItem 
            title="24/7 Support"
            company="Always here for you"
            date="Always available"
            description="Whether you're at 3 AM doubting yourself or 3 PM celebrating a win, our community is here. Real support from real people."
          />
          <ExperienceItem 
            title="Scaling Impact"
            company="Growing community"
            date="Every day"
            description="What started as one person's journey is now a movement. Hundreds growing. Thousands inspired. You're next."
          />
        </div>
      </section>

      {/* Success Stories Section */}
      <section id="projects" className="section projects-section">
        <h2>Stories from Our Community</h2>
        <div className="projects-grid">
          <ProjectCard 
            title="Career Breakthrough"
            description="From uncertain to confident. Sarah went from 'what's next?' to landing her dream role in 90 days. The support system made the difference."
            tech={['Career', 'Confidence', 'Action']}
          />
          <ProjectCard 
            title="Personal Transformation"
            description="Mike rebuilt his fitness, finances, and mindset. Real accountability + real community = real results. Now he's helping others do the same."
            tech={['Discipline', 'Growth', 'Leadership']}
          />
          <ProjectCard 
            title="Business Launch"
            description="Amanda took her idea and built a business. From concept to customers in months. Bloom With You was there every step of the way."
            tech={['Entrepreneurship', 'Execution', 'Success']}
          />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section contact-section">
        <h2>Ready to Bloom?</h2>
        <div className="contact-container">
          <p className="contact-intro">
            Start your growth journey today. Join hundreds already blooming.
          </p>

          <div className="contact-grid">
            <div className="contact-info">
              <div className="contact-item">
                <span className="contact-icon">✉️</span>
                <div>
                  <strong>Email</strong>
                  <a href="mailto:ansh2004anshkumar@gmail.com">hello@bloomwithyou.com</a>
                </div>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📱</span>
                <div>
                  <strong>Phone</strong>
                  <a href="tel:+18322157726">(832) 215-7726</a>
                </div>
              </div>
              <div className="contact-item">
                <span className="contact-icon">💬</span>
                <div>
                  <strong>Discord Community</strong>
                  <button 
                    className="contact-link-btn"
                    onClick={() => alert('Discord link coming soon!')}
                  >
                    Join Our Server
                  </button>
                </div>
              </div>
            </div>

            <form onSubmit={handleFormSubmit} className="contact-form">
              <h3>Get Started</h3>
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleFormChange}
                  required
                  className="form-input"
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleFormChange}
                  required
                  className="form-input"
                />
              </div>
              <div className="form-group">
                <textarea
                  name="message"
                  placeholder="What brought you here? What do you want to achieve?"
                  value={formData.message}
                  onChange={handleFormChange}
                  required
                  rows="4"
                  className="form-input form-textarea"
                />
              </div>
              <button type="submit" className="btn btn-primary form-submit" disabled={formStatus === 'sending'}>
                {formStatus === 'sending' ? 'Sending...' : formStatus === 'success' ? '✓ Welcome!' : 'Start Growing'}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="footer-content">
          <p>&copy; 2026 Bloom With You. Grow Together.</p>
          <p className="footer-subtext">Houston, TX • Building community, one bloom at a time</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
