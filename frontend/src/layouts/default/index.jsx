import React from "react";
import Navigation from "../../components/navigation";
import Footer from "../../components/footer";

export default function LayoutDefault({ children }) {
  return (
    <div className="page">
      <Navigation />
      <div className="page__content">{children}</div>
      <Footer />
    </div>
  );
}
