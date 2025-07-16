import Link from 'next/link';

export default function ProjectCard({ title, description, link, external }) {
  if (external) {
    return (
      <a className="project-card" href={link} target="_blank" rel="noopener noreferrer">
        <h3>{title}</h3>
        <p>{description}</p>
        <span>View Project</span>
      </a>
    );
  }

  return (
    <Link className="project-card" href={link}>
      <h3>{title}</h3>
      <p>{description}</p>
      <span>View Details</span>
    </Link>
  );
}
