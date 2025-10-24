import React, { ReactNode } from "react";

function CustomersLayout({ children }: { children: ReactNode }) {
  return (
    <section className="grid  grid-cols-1 md:grid-cols-[minmax(0,8rem)_minmax(250px,1fr)_minmax(0,8rem)]">
      <div className="md:col-[2] col-[1/-1]">{children}</div>
    </section>
  );
}

export default CustomersLayout;
