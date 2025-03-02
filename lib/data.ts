import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import Zer02LLMImg from '../public/Zer02LLM.png'
import YOLOv8sImg from '../public/YOLOv8s.png'
import MyBlogImg from '../public/MyBlog.png'

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
    title: "Graduated from Guangzhou University",
    location: "Guangzhou, Guangdong",
    description:
      "I graduated after 4 years of studying. I have learned a lot of knowledge about computer science and engineering.",
    icon: React.createElement(LuGraduationCap),
    date: "2022 - now",
  },
  {
    title: "International Consortium of Chinese Mathematicians",
    location: "Guangzhou, Guangdong",
    description:
      "Participating in the training and results of the YOLO series of models won national awards in participating in the Innovation Competition for Construction Engineering and Management (ICCEM) held by Tsinghua University",
    icon: React.createElement(CgWorkAlt),
    date: "2024 - 2025",
  },
  {
    title: "Guangzhou University's 19th 'Challenge Cup' National College Students' Extracurricular Academic and Technological Works Competition",
    location: "Guangzhou, Guangdong",
    description:
      "UAVs are used to collect more than 3,000 image data sets on-site, and label them with labellimg, and create high-quality construction waste image data sets imitating Microsoft Coco data sets.\n",
    icon: React.createElement(FaReact),
    date: "2024 - 2025",
  },
] as const;

export const projectsData = [
  {
    title: "Ze02LLM",
    description:
      "Zero2LLM is a large language model (LLM) learning project specifically for beginners. This project adopts a step-by-step approach to help you master the core concepts and implementation of modern large language models step by step from the most basic Attention mechanism.",
    tags: ["Python", "PyTorch", "Hugging Face", "Transformers", "Attention Mechanism"],
    imageUrl: Zer02LLMImg,
  },
  {
    title: "YOLOv8s using in earth-stricken area detection",
    description:
      "YOLOv8s is a small, fast, and accurate object detection model. It is a single-stage detector that uses a single neural network to predict bounding boxes and class probabilities for objects in an image.",
    tags: ["Python", "PyTorch", "YOLO", "Object Detection", "Computer Vision"],
    imageUrl: YOLOv8sImg,
  },
  {
    title: "MyBlog",
    description:
      "As a record of technology and daily life",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Framer"],
    imageUrl: MyBlogImg,
  },
] as const;

export const skillsData = [
  "Python",
  "PyTorch",
  "YOLO",
  "Object Detection",
  "Computer Vision",
  "React",
  "Next.js",
  "MongoDB",
  "Tailwind",
  "Framer Motion",
  "Docker",
  "AWS",
  "Git",
  "GitHub",
  "Linux",
  "SQL",
  "NoSQL",
  "RESTful APIs",
  "GraphQL",
  
] as const;
