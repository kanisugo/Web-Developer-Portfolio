import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import ProjectCard from '../components/project-card';

const IndexPage = () => {
    return (
        <div>
            <Header />
            <main>
                <h1>Welcome to My Web Developer Portfolio</h1>
                <section className="projects">
                    <ProjectCard />
                    <ProjectCard />
                    <ProjectCard />
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default IndexPage;