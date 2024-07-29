import quizziorImg from "@/public/quizzior.jpg";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";
import React from "react";
import { BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";
import { CgWorkAlt } from "react-icons/cg";
import { FaInstagram } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

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
        title: "United IT Company",
        location: "Tashkent, Uzbekistan",
        description: `
        <ul class="max-w-md space-y-1 list-disc">
            <li>Successfully managed and supported four distinct projects, ensuring timely delivery and high-quality outcomes.</li>
            <li>Designed and implemented robust APIs using Django Rest Framework, Celery, and Redis to facilitate seamless data integration and communication</li>
            <li>Created and maintained advanced Telegram Bots leveraging Python Telegram Bot, Django, PostgreSQL, and Celery for enhanced user interaction and automation.</li>
            <li>Developed and optimized complex database queries to generate insightful analytical data, improving decision-making processes.</li>
            <li>Identified, troubleshot, and resolved software bugs to enhance system reliability and performance.</li>
            <li>Enhanced database performance by optimizing queries, reducing execution times, and improving efficiency.</li>
            <li>Engineered effective database architectures to efficiently store and manage data collections, ensuring data integrity and accessibility.</li>
        </ul>
        `,
        icon: React.createElement(CgWorkAlt),
        date: "Feb 2024 - present",
    },
] as const;

export const projectsData = [
    {
        title: "Quizzior",
        description:
            "I worked as a Backend developer on this project for a week. Users can play a quiz, learn, strengthen their memory and even create their own quizzes.",
        tags: ["Python", "Django", "PostgreSQL", "Python-Telegram-Bot"],
        imageUrl: quizziorImg,
        github: "https://github.com/AbdurahmonAbdulxakimov/quizzior",
    },
] as const;

export const skillsData = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    // "Node.js",
    "Git",
    "Tailwind",
    // "Prisma",
    // "MongoDB",
    // "Redux",
    // "GraphQL",
    // "Apollo",
    // "Express",
    "PostgreSQL",
    "Python",
    "Django",
    "Django Rest Framework",
    "Celery",
    "Redis",
    "SQL Alchemy",
    // "Framer Motion",
] as const;

export const socialMediaLinks = [
    {
        title: "LinkedIn",
        href: "https://www.linkedin.com/in/abdurahmon-abdulxakimov/",
        icon: React.createElement(BsLinkedin),
    },
    {
        title: "GitHub",
        href: "https://www.github.com/in/AbdurahmonAbdulxakimov/",
        icon: React.createElement(BsGithub),
    },
    {
        title: "LeetCode",
        href: "https://www.leetcode.com/AbdurahmonAbdulxakimov/",
        icon: React.createElement(SiLeetcode),
    },
    {
        title: "Instagram",
        href: "https://www.instagram.com/avabdurahmon/",
        icon: React.createElement(FaInstagram),
    },
] as const;

export const aboutMe = `
<span class="italic">My favorite part of programming</span>
is the problem-solving aspect. I
<span class="underline">love</span> the feeling of finally
figuring out a solution to a problem. My core stack is
<span class="font-medium">
    React, Next.js, Django Restframework, and PostgreSQL
</span>
. I am also familiar with TypeScript and Docker. I am always
looking to learn new technologies.
<p class='mt-2'>
    <span class="italic">When I'm not coding</span>, I enjoy
    fitness training, watching movies, and chill with my friends.
    I also enjoy <span class="font-medium">learning new things</span> 
    & <span class="font-medium">exploring new skills</span>. I
    am currently practicing 
    <span class="font-medium">web development</span> &
    <span class="font-medium">problem solving</span>.
    I'm also a Information Systems student in <span class="font-medium">Westminster International University in Tashkent (WIUT)</span>.
</p>
` as const;
