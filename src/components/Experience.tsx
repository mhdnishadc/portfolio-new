import Image from "next/image";

import { CalendarDays } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";

import { JobImages } from "@/components/JobImages";

const jobs = [
  {
    role: "MERN-Stack Developer Intern", // TODO: Replace with actual role
    company: "Luminar Technohub", // TODO: Replace with actual company name
    logo: "/hub.png", // TODO: Replace with actual logo
    duration: " Jan 2025 - present",
    description:
      " Building adaptive and high-performance user interfaces using React, Tailwind CSS, and Bootstrap by implementing customized system designs to optimize responsiveness and efficiency,  Developing,implementing, and maintaining RESTful APIs using Node.js to facilitate seamless communication between the client and server.",
    link: "https://www.luminartechnohub.com/",
    images: [
        '/aimock1.png',
        '/aimock2.png',
    ],
  },
  {
    role: "Full-Stack Developer Trainee", // TODO: Replace with actual role
    company: "Luminar Technolab", // TODO: Replace with actual company name
    logo: "/luminar.jpg", // TODO: Replace with actual logo
    duration: " Nov 2023 - July 2024",
    description:
      "Developed MERN stack applications featuring real-time updates and secure authentication using JSON Web Tokens. Utilized MongoDB for scalable and efficient data storage. Enhanced development with Visual Studio Code and streamlined collaboration and deployment through Git version control.",
    link: "https://www.luminartechnolab.com/",
    images: [
        '/login.png',
        '/home.png',
    ],
  },

];

export const Experience = () => {
  return (
    <>
      <h2 className="text-xl font-bold mb-4">Work Experience</h2>
      <Card>
        <CardContent className="pt-6">
          <ul className="space-y-8">
            {jobs.map((j, i) => (
              <li key={i} className="border-b last:border-b-0 pb-8 last:pb-0">
                {/* Job Details */}
                <div className="flex items-center space-x-4">
                  <Image
                    src={j.logo}
                    alt={j.company}
                    width={40}
                    height={40}
                    className="rounded-md border shadow-md object-cover"
                  />
                  <div>
                    <h3 className="font-semibold">{j.role}</h3>
                    <p className="text-sm text-muted-foreground">{j.company}</p>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground mt-2 flex items-center">
                  <CalendarDays className="size-3 mr-2" />
                  {j.duration}
                </p>
                <p className="text-sm mt-2">{j.description}</p>
                {/* Job Images */}
                <JobImages
                  role={j.role}
                  link={j.link}
                  images={j.images}
                  duration={j.duration}
                />
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </>
  );
};
