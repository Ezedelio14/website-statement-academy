import React from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

import { Container } from "./Container";

interface Props {
  children: React.ReactNode;
}
export function RootLayout({ children }: Props) {
  return (
    <div className="h-screen w-full flex items-center flex-col scroll-auto">
      <Header />
      <Container>
        {children}
        <Footer />
      </Container>
    </div>
  );
}
