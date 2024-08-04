import React from "react";
import LayoutDefault from "../../layouts/default";
import Banner from "../../components/banner";
import Features from "../../components/feature"

export default function Home() {
  return <LayoutDefault>
          <Banner />
          <Features />
        </LayoutDefault>;
}
