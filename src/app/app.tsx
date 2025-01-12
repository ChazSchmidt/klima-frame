"use client";

import dynamic from "next/dynamic";

const Klima = dynamic(() => import("~/components/klima"), {
  ssr: false,
});

export default function App(
  { title }: { title?: string } = { title: "Klima Frame" }
) {
  return <Klima title={title} />;
}
