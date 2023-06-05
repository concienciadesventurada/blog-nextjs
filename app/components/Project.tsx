import React from "react";
import TechCard from "./TechCard";

// TODO: Do properly and make it reusable
// FIX: TechStack possibly undefined

type Params = {
  params: {
    project: Project;
  };
};

export default function Project({ params }: Params) {
  const { project } = params;
  const { name } = project;

  return (
    <article>
      <header
        className="sm:flex
        md:flex-row
        justify-between font-bold"
      >
        <div
          className="font-bold
          text-xl
          md:text-3xl"
        >
          <div className="flex items-center">
            <h4 className="rounded-md drop-shadow-sm">{name}</h4>
            <div className="rounded-md text-xs ml-4 px-2 py-1 text-gray-500">
              <p>{project.status}</p>
            </div>
          </div>
          <hr className="my-1 border-4 border-celestucho"></hr>
          <div className="flex items-end justify-end">
            <h4 className="text-right text-xs italic font-normal my-2 text-gris">
              {project.date}
            </h4>
            <h4 className="text-right text-xs italic font-normal my-2 text-gris">
              {project.description}
            </h4>
          </div>
        </div>
      </header>
      <section>
        {project.bullets.map((bullet, i) => {
          return <p key={i}>{bullet}</p>;
        })}
      </section>
      <footer>
        {project.techStack.map((tech, i) => {
          return <TechCard key={i} params={{ techStack: tech }} />;
        })}
      </footer>
    </article>
  );
}
