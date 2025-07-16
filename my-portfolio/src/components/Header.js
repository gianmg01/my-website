import Link from 'next/link';

export default function Header() {
  return (
    <header>
      <h1>Giancarlo Giannetti</h1>
      <nav className="nav-bar">
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
        <a className="resume-button" href="/resume.pdf" download>Download Resume</a>
      </nav>
    </header>
  );
}
