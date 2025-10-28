import React, { ReactNode } from "react";

function layout({ children }: { children: ReactNode }) {
  return (
    <article className="min-h-screen bg-background py-12 px-4 sm:px-6 lg:px-8 ">
      {children}
    </article>
  );
}

export default layout;
