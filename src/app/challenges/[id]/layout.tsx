import React from "react";

export default function Layout({
  children,
  test,
  params: { id },
}: {
  children: React.ReactNode;
  test: React.ReactNode;
  params: { id: string };
}) {
  return (
    <div>
      <p>Id: {id}</p>
      <div>
        <p>Children:</p>
        {children}
      </div>
      <div>
        <p>Test:</p>
        {test}
      </div>
    </div>
  );
}
