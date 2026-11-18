import React from 'react';

// Compact card for earlier work.
function ProjectCard({ project }) {
    const { name, link, github, picture, alt, desc, tech, contain } = project;
    return (
        <article className="card">
            <img className={contain ? "contain" : undefined} src={picture} alt={alt} width="400" height="225" loading="lazy" />
            <div className="card-body">
                <h3>{name}</h3>
                <p>{desc}</p>
                <p className="mono card-tech">{tech.join(' · ')}</p>
                <p className="card-links">
                    {link && <a href={link}>Live site</a>}
                    {github && <a href={github}>Code</a>}
                </p>
            </div>
        </article>
    );
}

export default ProjectCard;
