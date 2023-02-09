import React from "react";
import externalLink from "./assets/images/external-link.png";

//Enter your project into array as "{ name: 'Project Name', link: 'https://www.google.com' },"
const projects = [];

const ProjectCard = ({ project }) => {
  return (
    <div className="w-full flex justify-center items-center space-x-2">
      <span className="text-[#FCFBF7] text-2xl">{project.name}</span>
      <a
        href={project.link}
        target="_blank"
        rel="noreferrer"
        className="no-underline transition hover:scale-105"
      >
        <img
          alt={`project-${project.name}-external-link`}
          src={externalLink}
          className="w-8 h-8"
        />
      </a>
    </div>
  );
};

function App() {
  return (
    <div className="w-screen h-screen flex flex-col justify-between items-center gap-16 bg-[#141414] py-10 px-6">
      <header className="flex w-full justify-center font-bold">
        <h1 className="text-[#FCFBF7] text-4xl">#Code4Them</h1>
      </header>
      <main className="flex-1 w-full flex flex-col items-center gap-20 overflow-auto scrollbar-hidden">
        <p className="text-[#FCFBF7] md:text-base sm:text-sm text-xs text-center">
          Thank you to everyone who has helped so far. Both moral and financial
          support are very important during these critical times. But the true
          face of this event has not yet been revealed. We will realize the real
          problems when we remember that the survivors must survive. This
          disaster destroyed thousands of dreams, but our support must be
          continuous, not instant, so that the dreams of millions who survived
          it do not disappear. As developers, we have to do what we can. We beg to
          all developers in the world. We are not asking you to donate
          money, we are not asking you to send items, we are just asking you to
          do what you do best. This time don't code for money, don't code for
          reputation. Code for the millions in the cold, code for the children
          in the dark, code for the survivors in despair, code with us, code
          for them. Just make a project, it doesn't have to be groundbreaking,
          it doesn't have to be a world-changing project because they don't have
          a world anymore, just help them survive.
        </p>
        <img alt="black-ribbon" src={"/image/black.png"} className="max-w-[220px] w-full" />
        <div className="w-full flex flex-col items-center gap-8">
          {projects.map((project, idx) => (
            <ProjectCard key={idx} project={project} />
          ))}
        </div>
      </main>
      <footer className="flex w-full justify-center">
        <span className="text-[#FCFBF7] text-lg text-center">
          To list your project, please open pull request from github.{" "}
          <a href="https://github.com/Nova-Ratio/Code4them" target="_blank" rel="noreferrer">
            Github Link Here
          </a>
        </span>
      </footer>
    </div>
  );
}

export default App;