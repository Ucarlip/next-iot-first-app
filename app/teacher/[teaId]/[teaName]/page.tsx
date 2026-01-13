import React from 'react'
interface Pageparams {
    params: {
        "teaId": string;
        "teaName": string;
    };
}


export default async function Teacher({ params }: Pageparams) {
      const { "teaId": teaId, "teaName": teaName } = await params;
  return (
    <>
      <h1 className="text-center font-bold">Welcome to SAU</h1>
      <h3>ID: {teaId}</h3>
      <h3>Name: {teaName}</h3>
      <hr />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
        voluptatibus et fuga sit officia ducimus ipsa amet esse repellendus qui.
      </p>
    </>
  );
}
