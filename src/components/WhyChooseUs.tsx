"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";

const musicSchoolContent = [
  {
    title: "Comprehensive Music Courses",
    description:
      "Immerse yourself in our diverse range of music courses. From beginner to advanced levels, our curriculum is designed to enhance your musical skills and knowledge. Discover new genres, techniques, and instruments with our expert instructors.",
  },
  {
    title: "Live Music Collaborations",
    description:
      "Join a vibrant community of musicians and engage in real-time collaborations. Experience the thrill of creating music together with fellow students, share ideas, and witness your compositions come to life. Our platform fosters a collaborative environment for aspiring artists.",
  },
  {
    title: "Real-time Performance Feedback",
    description:
      "Receive immediate feedback on your musical performances. Our innovative platform allows instructors to provide real-time guidance, helping you refine your techniques and elevate your musical expression. Enhance your skills with personalized feedback from experienced musicians.",
  },
  {
    title: "Stay Tuned with the Latest in Music Education",
    description:
      "Keep pace with the evolving world of music education. Our platform ensures you're always updated with the latest content and techniques. Say goodbye to outdated materials and embrace a dynamic learning experience tailored to the contemporary music landscape.",
  },
];

export default function WhyChooseUs() {
  return (
    <div>
      <StickyScroll content={musicSchoolContent} />
    </div>
  );
}
