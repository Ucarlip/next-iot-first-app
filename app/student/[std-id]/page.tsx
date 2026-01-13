import React from "react";

interface Pageparams {
    params: {
        "std-id": string;
    };
}

export default async function Student({ params }: Pageparams) {
    const { "std-id": stdId } = await params;
  return (
    <>
      <h1 className="text-center font-bold">Welcome to SAU</h1>
      <h3>ID: {stdId}</h3>
      <hr />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
        voluptatibus et fuga sit officia ducimus ipsa amet esse repellendus qui.
      </p>
    </>
  );
}
