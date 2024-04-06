import { Metadata } from "next";
import { HomeVideos } from "./components";

export const metadata: Metadata = {
  title: "Videos Website",
  description: "Home best videos",
};

export default function Home() {
  return (
    <>
      <HomeVideos />
    </>
  );
}
