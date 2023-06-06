import React from "react";

export default function RegisterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
      <div className="flex text-gris">
        <div className="h-screen w-1/6 flex flex-col justify-center items-center bg-blancucho">
          {children}
        </div>
      </div>
      <div className="w-5/6">a</div>
    </main>
  );
}
