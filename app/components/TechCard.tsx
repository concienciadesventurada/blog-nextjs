import React from 'react';

// TODO: Reusable, responsive, iterable

type Params = {
    params: {
        techStack: TechStack
      }
  }

export default function TechCard({ params }: Params) {
  const { techStack } = params;

  const { icon, title } = techStack;

  return (
    <article className="flex-col justify-items-center border text-center rounded-md">
    <div>
      {icon}
    </div>
    <div>
      <h1>{title}</h1>
    </div>
  </article>
  )
}
