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
        - Successfully managed and supported four distinct projects, ensuring timely delivery and high-quality outcomes.<br/>
        - Designed and implemented robust APIs using Django Rest Framework, Celery, and Redis to facilitate seamless data integration and communication<br/>
        - Created and maintained advanced Telegram Bots leveraging Python Telegram Bot, Django, PostgreSQL, and Celery for enhanced user interaction and automation.<br/>
        - Developed and optimized complex database queries to generate insightful analytical data, improving decision-making processes.<br/>
        - Identified, troubleshot, and resolved software bugs to enhance system reliability and performance.<br/>
        - Enhanced database performance by optimizing queries, reducing execution times, and improving efficiency.<br/>
        - Engineered effective database architectures to efficiently store and manage data collections, ensuring data integrity and accessibility.<br/>
        `,
        icon: React.createElement(CgWorkAlt),
        date: "2024",
    },
    // {
    //   title: "Graduated bootcamp",
    //   location: "Miami, FL",
    //   description:
    //     "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    //   icon: React.createElement(LuGraduationCap),
    //   date: "2019",
    // },
    // {
    //   title: "Front-End Developer",
    //   location: "Orlando, FL",
    //   description:
    //     "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    //   icon: React.createElement(CgWorkAlt),
    //   date: "2019 - 2021",
    // },
    // {
    //   title: "Full-Stack Developer",
    //   location: "Houston, TX",
    //   description:
    //     "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    //   icon: React.createElement(FaReact),
    //   date: "2021 - present",
    // },
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
    // {
    //     title: "CorpComment",
    //     description:
    //         "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    //     tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    //     imageUrl: corpcommentImg,
    // },
    // {
    //     title: "rmtDev",
    //     description:
    //         "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    //     tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    //     imageUrl: rmtdevImg,
    // },
    // {
    //     title: "Word Analytics",
    //     description:
    //         "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    //     tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    //     imageUrl: wordanalyticsImg,
    // },
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
