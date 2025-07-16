import Header from '../components/Header';
import Footer from '../components/Footer';
import ProjectCard from '../components/ProjectCard';

export default function Home() {
  return (
    <>
      <Header />

      <section id="about">
        <h2>About Me</h2>
        <p>
          Hi, I'm Giancarlo. I graduated from Ontario Tech University in 2024 with a major in Computer Science and a minor in Mathematics. I'm currently pursuing a Master's degree specializing in hyperspectral image unmixing, with plans to graduate in Summer 2026.
        </p>
      </section>

      <section id="skills">
        <h2>Technical Skills</h2>
        <div className="skills-grid">
          {[
            ["python.svg", "Python", "https://docs.python.org/3/"],
            ["c.svg", "C", "https://en.cppreference.com/w/c"],
            ["csharp.svg", "C#", "https://learn.microsoft.com/en-us/dotnet/csharp/"],
            ["java.svg", "Java", "https://docs.oracle.com/javase/8/docs/"],
            ["flutter.svg", "Flutter", "https://docs.flutter.dev/"],
            ["kotlin.svg", "Kotlin", "https://kotlinlang.org/docs/home.html"],
            ["Erpnext_logo.svg", "ERPNext", "https://docs.frappe.io/erpnext/user/manual/en/introduction"],
            ["latex.svg", "LaTeX", "https://www.latex-project.org/help/documentation/"],
            ["pytorch.svg", "PyTorch", "https://pytorch.org/docs/"],
            ["unity.svg", "Unity", "https://docs.unity3d.com/Manual/index.html"]
          ].map(([img, label, link]) => (
            <a className="skill-card" key={label} href={link} target="_blank" rel="noopener noreferrer">
              <img src={`/images/${img}`} alt={label} />
              <span>{label}</span>
            </a>
          ))}
        </div>
      </section>

      <section id="projects">
        <h2>Research Projects</h2>
        <div className="projects">
          <ProjectCard
            title="LDVAE-T"
            description="A deep learning model combining Vision Transformers and a Latent Dirichlet VAE for hyperspectral unmixing."
            link="https://github.com/gianmg01/LD-Transformer"
            external
          />
        </div>

        <h2 className="section-spacing">Personal Projects</h2>
        <div className="projects">
          <ProjectCard
            title="Minecraft 'Tower Game'"
            description="An assetpack for a custom Minecraft minigame."
            link="https://github.com/gianmg01/tower-game"
            external
          />

          <ProjectCard
            title="Warhammer Campaign Tracker"
            description="A Unity project for tracking a Warhammer 40k campaign. (Work in progress)"
            link="#"
            external
          />
        </div>

        <h2 className="section-spacing">School Projects</h2>
        <div className="projects">
          <ProjectCard
            title="L-System Generation"
            description="An OpenGL/C++ program generating trees using L-system grammar rules."
            link="/l-systems"
          />
          <ProjectCard
            title="Geolocation App"
            description="A Flutter mobile game where users guess campus locations from photos."
            link="/geo-app"
          />
        </div>
      </section>

      <section id="contact">
        <h2>Contact</h2>
        <p>
          Email me at: <a href="mailto:gianmgiannetti@gmail.com">gianmgiannetti@gmail.com</a><br />
          Or connect with me on:
        </p>
        <div className="social-links">
          <a className="social-link" href="https://www.linkedin.com/in/giancarlo-giannetti-681a38233" target="_blank">LinkedIn</a>
          <a className="social-link" href="https://github.com/gianmg01" target="_blank">GitHub</a>
        </div>
      </section>

      <Footer />
    </>
  );
}
