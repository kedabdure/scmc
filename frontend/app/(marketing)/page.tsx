import Hero from "@/components/landing/Hero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lateral - AI-powered code review and refactoring",
  description:
    "Lateral is an AI-powered code review and refactoring tool that helps developers write better code faster. It provides real-time feedback on code quality, security, and performance, and suggests improvements to make code more maintainable and efficient.",
};

export default function Home() {
  return (
    <>
      <Hero />
    </>
  );
}
