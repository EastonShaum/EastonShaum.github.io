import React, { useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';


export const LINKEDIN = 'https://www.linkedin.com/in/easton-shaum-122b0520b/';
export const GITHUB = 'https://github.com/EastonShaum';
export const EMAIL = 'EastonShaum@gmail.com';

// Scroll to #section after navigating (react-router v5 doesn't), or to the top on a new page.
function useScrollToHash() {
    const { pathname, hash } = useLocation();
    useEffect(() => {
        if (hash) {
            const el = document.getElementById(hash.slice(1));
            if (el) { el.scrollIntoView(); return; }
        }
        window.scrollTo(0, 0);
    }, [pathname, hash]);
}

function Layout({ children }) {
    useScrollToHash();
    return (
        <div className="editor">
            <a className="skip-link" href="#main">Skip to content</a>
            {/* Line numbers come from CSS (.gutter::before), so they stay out of the page text */}
            <div className="gutter" aria-hidden="true" />
            <div className="page">
                <nav className="nav mono" aria-label="Main">
                    <Link to="/" className="logo">
                        <span className="c-tag">&lt;</span>easton<span className="c-attr"> /</span><span className="c-tag">&gt;</span>
                    </Link>
                    <div className="nav-links">
                        <NavLink to="/projects"><span className="c-kw">#</span>work</NavLink>
                        <Link to="/#experience"><span className="c-kw">#</span>experience</Link>
                        <Link to="/#contact"><span className="c-kw">#</span>contact</Link>
                        <a href={GITHUB}>github<span className="c-dim">.com</span></a>
                    </div>
                </nav>
                <main id="main">{children}</main>
                <footer className="site-footer mono">
                    <span>&lt;!-- Smithfield, Utah · open to remote --&gt;</span>
                    <span className="footer-links">
                        <a href={GITHUB}>GitHub</a>
                        <a href={LINKEDIN}>LinkedIn</a>
                        <a href={`mailto:${EMAIL}`}>Email</a>
                    </span>
                </footer>
            </div>
        </div>
    );
}

export default Layout;
