import React from "react";

type Params = {
  text: string;
};

export default function FormButton({ text }: Params) {
  return (
    <button className="bg-dorado hover:bg-azulito text-negrito font-bold py-2 px-4 rounded w-full">
      {text}
    </button>
  );
}
