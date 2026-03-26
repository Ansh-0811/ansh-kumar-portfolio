import React, { useState } from 'react';
import './App.css';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // You can integrate with a backend or email service here
    alert(`Thank you ${formData.name}! I'll get back to you soon.`);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="App">
      {/* Navigation */}
      <nav>
        <div className="container">
          <div className="logo">Ansh Kumar</div>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Ansh Kumar</h1>
          <p className="tagline">CS Student • Problem Solver • Built From Scratch</p>
          <p>
            I came to the US with nothing in August 2023. Since then, I've earned my GED, 
            landed a job, and I'm now pursuing a degree in Computer Science while building 
            my skills in tech and administration. My goal is to become a police officer in 
            the United States.
          </p>
          <div className="cta-buttons">
            <a href="#contact" className="btn btn-primary">Get In Touch</a>
            <a href="#projects" className="btn btn-secondary">View My Work</a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section">
        <h2>About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              I'm a 21-year-old Indian immigrant who arrived in the US with determination 
              and nothing else. In less than 3 years, I've transformed my life completely:
            </p>
            <div className="highlights">
              <div className="highlight">
                <strong>📍 Location:</strong> Bellaire, Houston, TX
              </div>
              <div className="highlight">
                <strong>🎓 Education:</strong> BS in Computer Science at HCC (in progress), GED (Jan 2026)
              </div>
              <div className="highlight">
                <strong>💼 Work:</strong> 2+ years of US work experience across tech, admin, sales, and ops
              </div>
              <div className="highlight">
                <strong>🎯 Goal:</strong> Become a police officer in the USA (SFPD & Alameda applications in progress)
              </div>
            </div>
          </div>
          <div className="about-text">
            <p>
              What drives me:
            </p>
            <div className="highlights">
              <div className="highlight">
                <strong>Resilience:</strong> Started with nothing, built everything myself
              </div>
              <div className="highlight">
                <strong>Continuous Learning:</strong> Self-taught in many areas, always improving
              </div>
              <div className="highlight">
                <strong>Diverse Skills:</strong> Tech, administration, sales, and operations
              </div>
              <div className="highlight">
                <strong>Service:</strong> Want to serve and protect my community as a police officer
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section">
        <h2>Skills</h2>
        <div className="skills-grid">
          <div className="skill-category">
            <h3>Administration & Office</h3>
            <ul className="skill-list">
              <li>Office Management</li>
              <li>Inventory Tracking</li>
              <li>Data Entry</li>
              <li>Documentation</li>
              <li>Scheduling</li>
              <li>Microsoft Office</li>
              <li>Customer Service</li>
            </ul>
          </div>

          <div className="skill-category">
            <h3>Technology</h3>
            <ul className="skill-list">
              <li>HTML, CSS, JavaScript</li>
              <li>React</li>
              <li>Python (Basics)</li>
              <li>Web Development</li>
              <li>Website Deployment</li>
              <li>AI Tools & Automation</li>
              <li>Fast Learner</li>
            </ul>
          </div>

          <div className="skill-category">
            <h3>Sales & Customer Service</h3>
            <ul className="skill-list">
              <li>Direct Sales</li>
              <li>Target Achievement</li>
              <li>Customer Retention</li>
              <li>Phone Support</li>
              <li>Face-to-Face Sales</li>
              <li>Problem Solving</li>
              <li>Communication</li>
            </ul>
          </div>

          <div className="skill-category">
            <h3>Operations & Field</h3>
            <ul className="skill-list">
              <li>Delivery & Logistics</li>
              <li>Time Management</li>
              <li>Navigation</li>
              <li>Independent Work</li>
              <li>Warehouse Ops</li>
              <li>Physical Capability</li>
              <li>Reliability</li>
            </ul>
          </div>

          <div className="skill-category">
            <h3>Leadership & Business</h3>
            <ul className="skill-list">
              <li>Business Ownership</li>
              <li>Website Building</li>
              <li>Operations Management</li>
              <li>Entrepreneurship</li>
              <li>Self-Motivation</li>
              <li>End-to-End Execution</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="section">
        <h2>Experience</h2>
        <div className="experience-list">
          <div className="experience-item">
            <div className="experience-header">
              <div>
                <div className="experience-title">Sales Associate</div>
                <div className="experience-company">Metro by T-Mobile</div>
              </div>
              <div className="experience-date">2023 - 2024</div>
            </div>
            <div className="experience-description">
              Direct sales experience with consistent target achievement. Built strong customer relationships, 
              developed sales techniques, and learned how to thrive in a fast-paced retail environment.
            </div>
          </div>

          <div className="experience-item">
            <div className="experience-header">
              <div>
                <div className="experience-title">Delivery Driver & Operations</div>
                <div className="experience-company">Uber Eats & DoorDash</div>
              </div>
              <div className="experience-date">2023 - Present</div>
            </div>
            <div className="experience-description">
              Reliable gig work with strong ratings. Demonstrated punctuality, excellent navigation, 
              consistent attendance, and ability to manage time effectively across multiple deliveries.
            </div>
          </div>

          <div className="experience-item">
            <div className="experience-header">
              <div>
                <div className="experience-title">Administrative & Inventory</div>
                <div className="experience-company">High Altitude Wholesale</div>
              </div>
              <div className="experience-date">2024 - 2025</div>
            </div>
            <div className="experience-description">
              Hands-on experience in office management, inventory tracking, data entry, and 
              documentation systems. Learned professional administrative coordination and organization.
            </div>
          </div>

          <div className="experience-item">
            <div className="experience-header">
              <div>
                <div className="experience-title">Founder & Owner</div>
                <div className="experience-company">Bloom With You</div>
              </div>
              <div className="experience-date">2023 - 2024</div>
            </div>
            <div className="experience-description">
              Built and operated a small business from the ground up. Designed and deployed website, 
              managed all operations end-to-end, handled digital presence and content management.
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="experience" className="section">
        <h2>Education</h2>
        <div className="education-list">
          <div className="education-item">
            <h3>Bachelor of Science in Computer Science</h3>
            <div className="school">Houston Community College (In Progress)</div>
            <div className="date">Expected Graduation: 2026</div>
          </div>

          <div className="education-item">
            <h3>GED - General Educational Development</h3>
            <div className="school">State of Texas</div>
            <div className="date">Completed January 2026</div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section">
        <h2>Projects</h2>
        <div className="projects-grid">
          <div className="project-card">
            <div className="project-header">
              <div className="project-title">Bloom With You Website</div>
            </div>
            <div className="project-description">
              Built a complete business website from scratch, including design, deployment, and 
              content management. Learned full-stack web development through hands-on execution.
            </div>
            <div className="project-tech">
              <span className="tech-tag">HTML</span>
              <span className="tech-tag">CSS</span>
              <span className="tech-tag">JavaScript</span>
            </div>
          </div>

          <div className="project-card">
            <div className="project-header">
              <div className="project-title">Personal Portfolio</div>
            </div>
            <div className="project-description">
              Modern, responsive portfolio website showcasing my skills and experience. 
              Designed with dark navy and white aesthetic for professional presentation.
            </div>
            <div className="project-tech">
              <span className="tech-tag">React</span>
              <span className="tech-tag">CSS3</span>
              <span className="tech-tag">Responsive</span>
            </div>
          </div>

          <div className="project-card">
            <div className="project-header">
              <div className="project-title">OpenClaw Setup</div>
            </div>
            <div className="project-description">
              Built and configured autonomous AI assistant infrastructure for 24/7 task automation. 
              Integrated multiple tools and workflows for personal productivity.
            </div>
            <div className="project-tech">
              <span className="tech-tag">Automation</span>
              <span className="tech-tag">AI Tools</span>
              <span className="tech-tag">Systems</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section">
        <h2>Contact</h2>
        <div className="contact-container">
          <div className="contact-info">
            <div className="contact-item">
              <span>📧</span>
              <a href="mailto:ansh2004anshkumar@gmail.com">ansh2004anshkumar@gmail.com</a>
            </div>
            <div className="contact-item">
              <span>📱</span>
              <a href="tel:+18322157726">(832) 215-7726</a>
            </div>
            <div className="contact-item">
              <span>💼</span>
              <a href="https://github.com/Ansh-0811" target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>
            <div className="contact-item">
              <span>📍</span>
              Bellaire, Houston, TX
            </div>
          </div>

          <h3 style={{ marginBottom: '1.5rem', color: '#4a9eff' }}>Send Me a Message</h3>
          <form onSubmit={handleFormSubmit} style={{ maxWidth: '500px', margin: '0 auto' }}>
            <div style={{ marginBottom: '1rem' }}>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleFormChange}
                required
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  borderRadius: '4px',
                  border: '1px solid rgba(255,255,255,0.2)',
                  background: 'rgba(255,255,255,0.05)',
                  color: '#fff',
                  fontSize: '1rem'
                }}
              />
            </div>
            <div style={{ marginBottom: '1rem' }}>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleFormChange}
                required
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  borderRadius: '4px',
                  border: '1px solid rgba(255,255,255,0.2)',
                  background: 'rgba(255,255,255,0.05)',
                  color: '#fff',
                  fontSize: '1rem'
                }}
              />
            </div>
            <div style={{ marginBottom: '1.5rem' }}>
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleFormChange}
                required
                rows="5"
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  borderRadius: '4px',
                  border: '1px solid rgba(255,255,255,0.2)',
                  background: 'rgba(255,255,255,0.05)',
                  color: '#fff',
                  fontSize: '1rem',
                  fontFamily: 'inherit',
                  resize: 'vertical'
                }}
              />
            </div>
            <button
              type="submit"
              className="btn btn-primary"
              style={{ width: '100%' }}
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <p>&copy; 2026 Ansh Kumar. All rights reserved. | Built with React</p>
      </footer>
    </div>
  );
}

export default App;
