import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import d1 from "@/public/d1.png";
import desktop from "@/public/desktop.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Bachelor's in Computer Science",
    location: "GCU, Lahore",
    description:
      "I am graduated from Government College University Lahore in CS.",
    icon: React.createElement(LuGraduationCap),
    date: "2024",
  },
  {
    title: "Front-End Developer",
    location: "Algorhydhem Developers, SKP",
    description:
      "I worked as a Trainee front-end developer for 4 months . I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2022 - 2022",
  },
  {
    title: "ReactJs Developer",
    location: "WEBIQS, SKP",
    description:
      "I'm now a ReactJS developer, working as a freelancer also. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2023 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Dice Game",
    description:
      "I worked as a ReactJs developer on this project.This project showcases the practical applications of functional programming techniques and is a valuable resource for aspiring developers.",
    tags: ["React", "Node.js", "MongoDB", "Tailwind"],
    imageUrl: d1,
  },
  {
    title: "A Jewellery Store",
    description:
      "An e-commerce store for online jewellery shopping.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: desktop,
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React.js",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Boostrap",
  "Prisma",
  "MongoDB",
  "MySql",
  "Express",
  "Framer Motion",
  "C++",
  "Java",
] as const;
