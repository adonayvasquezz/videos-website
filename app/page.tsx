import { Metadata } from "next";
import { HomeVideos } from "./components";

export const metadata: Metadata = {
  title: "Videos Web",
  description: "Home best videos",
};

export default function Home() {
  return (
    <>
      <HomeVideos />
    </>
  );
}
