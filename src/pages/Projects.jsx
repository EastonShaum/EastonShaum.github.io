import React from 'react';
import projects from '../assets/projects';
import ProjectFeature from '../components/ProjectFeature';
import ProjectCard from '../components/ProjectCard';

function Projects() {
    const featured = projects.filter((p) => p.featured);
    const earlier = projects.filter((p) => !p.featured);
    return (
        <>
            <header className="page-head">
                <div className="mono c-tag">&lt;h1&gt;</div>
                <h1 className="page-title">Projects</h1>
                <div className="mono c-tag">&lt;/h1&gt;</div>
            </header>

            <section aria-labelledby="recent-h" className="section">
                <h2 id="recent-h" className="mono comment">{'// recent work'}</h2>
                {featured.map((p, i) => <ProjectFeature key={p.name} project={p} flip={i % 2 === 1} />)}
            </section>

            <section aria-labelledby="earlier-h" className="section">
                <h2 id="earlier-h" className="mono comment">{'// earlier work, from bootcamp (2021)'}</h2>
                <div className="card-grid">
                    {earlier.map((p) => <ProjectCard key={p.name} project={p} />)}
                </div>
            </section>
        </>
    );
}

export default Projects;
