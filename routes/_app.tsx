import React from "react";

import '../style/main.css'

export default function App({ children }: { children: React.ReactNode }) {
  return (
    <main>
      {children}
    </main>
  );
}
