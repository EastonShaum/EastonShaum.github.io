import React from 'react';

// Large alternating row for recent work.
function ProjectFeature({ project, flip, headingLevel = 3 }) {
    const { name, link, github, tag, picture, alt, desc, tech } = project;
    const H = `h${headingLevel}`;
    const imgHref = link || github;
    const img = <img className="proj-img" src={picture} alt={alt} width="1200" height="630" loading="lazy" />;
    return (
        <article className={`proj${flip ? ' flip' : ''}`}>
            <div className="proj-media">
                {imgHref ? <a href={imgHref} tabIndex={-1} aria-hidden="true">{img}</a> : img}
            </div>
            <div className="proj-body">
                {tag && (
                    <div className="mono proj-tag">
                        &lt;{tag[0]} <span className="c-attr">{tag[1]}</span>=<span className="c-str">"{tag[2]}"</span>&gt;
                    </div>
                )}
                <H className="proj-title">{name}</H>
                <p className="proj-desc">{desc}</p>
                <p className="mono proj-tech">{tech.join(' · ')}</p>
                <p className="proj-links">
                    {link && <a href={link}>Visit {link.replace(/^https?:\/\/|\/$/g, '')}</a>}
                    {github && <a href={github}>Read the code</a>}
                </p>
            </div>
        </article>
    );
}

export default ProjectFeature;
