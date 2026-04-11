import React, { useState } from 'react';
import './CICDGuide.css';

const CICDGuide = () => {
    const [isOpen, setIsOpen] = useState(true);

    return (
        <>
            <button
                className={`guide-toggle ${!isOpen ? 'closed' : ''}`}
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle CI/CD Guide"
            >
                {isOpen ? '→' : '←'} {!isOpen && 'CI/CD Guide'}
            </button>

            <div className={`cicd-guide ${!isOpen ? 'hidden' : ''}`}>
                <div className="guide-header">
                    <h2>🚀 CI/CD Testing Guide</h2>
                    <p className="guide-subtitle">How to verify the pipeline</p>
                </div>

                <div className="guide-content">
                    <div className="guide-section">
                        <h3>📋 Test the Full Pipeline</h3>
                        <ol className="guide-steps">
                            <li>
                                <strong>Add a Task</strong>
                                <p>Create any task above to test the backend API</p>
                            </li>
                            <li>
                                <strong>Push Code Change</strong>
                                <p>Edit any file and push to <code>main</code> branch</p>
                            </li>
                            <li>
                                <strong>Watch GitHub Actions</strong>
                                <p>Go to repo → Actions tab to see pipeline run</p>
                            </li>
                            <li>
                                <strong>Verify Docker Hub</strong>
                                <p>Check for new backend image timestamp</p>
                            </li>
                            <li>
                                <strong>Check Render Deploy</strong>
                                <p>Backend auto-redeploys within 3-5 minutes</p>
                            </li>
                            <li>
                                <strong>Check Netlify</strong>
                                <p>Frontend auto-deploys on push to main</p>
                            </li>
                        </ol>
                    </div>

                    <div className="guide-section">
                        <h3>🔗 Quick Links</h3>
                        <div className="quick-links">
                            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="guide-link">
                                GitHub Actions
                            </a>
                            <a href="https://hub.docker.com" target="_blank" rel="noopener noreferrer" className="guide-link">
                                Docker Hub
                            </a>
                            <a href="https://render.com" target="_blank" rel="noopener noreferrer" className="guide-link">
                                Render Dashboard
                            </a>
                            <a href="https://netlify.com" target="_blank" rel="noopener noreferrer" className="guide-link">
                                Netlify Dashboard
                            </a>
                        </div>
                    </div>

                    <div className="guide-section">
                        <h3>⚡ Tech Stack</h3>
                        <div className="tech-stack">
                            <span className="tech-badge">React 18</span>
                            <span className="tech-badge">Spring Boot 3</span>
                            <span className="tech-badge">Docker</span>
                            <span className="tech-badge">H2 Database</span>
                            <span className="tech-badge">GitHub Actions</span>
                            <span className="tech-badge">Netlify</span>
                            <span className="tech-badge">Render</span>
                        </div>
                    </div>

                    <div className="guide-section">
                        <h3>💡 Tips</h3>
                        <ul className="tips-list">
                            <li>Backend sleeps on free tier (first load takes 30-60s)</li>
                            <li>H2 database clears on backend restart</li>
                            <li>CI/CD triggers only on <code>main</code> branch pushes</li>
                            <li>Check logs if deployment fails</li>
                        </ul>
                    </div>
                </div>

                <div className="guide-footer">
                    <p>Built with ❤️ for DevOps learning</p>
                </div>
            </div>
        </>
    );
};

export default CICDGuide;
