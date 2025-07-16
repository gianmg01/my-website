import Link from 'next/link';

export default function ProjectHeader({ title, subtitle }) {
  return (
    <header>
    <div class="project-header-bar">
        <Link className="back-link" href="/">
          &#8592; Back
        </Link>
      <div class="project-header-center">
        <h1 class="project-header-title">Geolocation App</h1>
        <p class="project-header-subtitle">Project Overview</p>
      </div>
      <div class="header-spacer"></div>
    </div>
  </header>
  );
}
