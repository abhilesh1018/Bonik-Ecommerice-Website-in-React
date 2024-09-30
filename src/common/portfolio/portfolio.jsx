import React from 'react';

function MyPortfolio() {
  return (
    <div>
      <header>
        <h1>My Portfolio</h1>
        <nav>
          <a href="#about">About</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        <section id="about">
          <h2>About Me</h2>
          <div className="about-content">
            <div className="about-image">
              <img src="c:\Users\NAGESWARARAO VAKA\Downloads\abhi\abhi.jpg" alt="Profile Picture" id="one" />
            </div>
            <div className="about-text">
              <p>I am <b>Vaka Abhilesh</b>, I am a web developer passionate about creating beautiful and functional websites. With a strong foundation in various programming languages, I strive to deliver high-quality, responsive, and user-friendly solutions.</p>
              <p>I have experience in working with a wide range of technologies and frameworks, and I'm always eager to learn and explore new tools and techniques.</p>
            </div>
          </div>
        </section>

        <section id="portfolio">
          <h2>Portfolio</h2>
          <div className="skill-item">
            <div className="skill-name">Python</div>
            <div className="skill-bar">
              <div className="skill-progress" style={{ width: '90%' }}></div>
            </div>
            <span>90%</span>
          </div>
          <div className="skill-item">
            <div className="skill-name">C</div>
            <div className="skill-bar">
              <div className="skill-progress" style={{ width: '80%' }}></div>
            </div>
            <span>80%</span>
          </div>
          <div className="skill-item">
            <div className="skill-name">C++</div>
            <div className="skill-bar">
              <div className="skill-progress" style={{ width: '75%' }}></div>
            </div>
            <span>75%</span>
          </div>
          <div className="skill-item">
            <div className="skill-name">HTML</div>
            <div className="skill-bar">
              <div className="skill-progress" style={{ width: '95%' }}></div>
            </div>
            <span>95%</span>
          </div>
          <div className="skill-item">
            <div className="skill-name">CSS</div>
            <div className="skill-bar">
              <div className="skill-progress" style={{ width: '75%' }}></div>
            </div>
            <span>75%</span>
          </div>
          <div className="skill-item">
            <div className="skill-name">JavaScript</div>
            <div className="skill-bar">
              <div className="skill-progress" style={{ width: '70%' }}></div>
            </div>
            <span>70%</span>
          </div>
        </section>

        <section id="projects">
          <h2>Projects</h2>
          <div className="project">
            <img src="python.jpeg" alt="Project 1" />
            <div>
              <h3>Python Project</h3>
              <p>A brief description of the Python project.</p>
            </div>
          </div>
          <div className="project">
            <img src="C.jpeg" alt="Project 2" />
            <div>
              <h3>C Project</h3>
              <p>A brief description of the C project.</p>
            </div>
          </div>
          <div className="project">
            <img src="java.jpeg" alt="Project 3" />
            <div>
              <h3>Java Project</h3>
              <p>A brief description of the Java project.</p>
            </div>
          </div>
        </section>

        <section id="contact">
          <h2>Contact Me</h2>
          <form>
            <input type="text" placeholder="Name" required />
            <input type="email" placeholder="Email" required />
            <textarea placeholder="Message" required></textarea>
            <button type="submit">Send Message</button>
          </form>
        </section>
      </main>

      <script>
        {`
          const form = document.querySelector('form');
          form.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Message sent successfully!');
            form.reset();
          });
        `}
      </script>
    </div>
  );
}

export default MyPortfolio;
