import Image from "next/image";

import { CalendarDays } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";

import { JobImages } from "@/components/JobImages";

const jobs = [
  {
    role: "Full-Stack Developer", // TODO: Replace with actual role
    company: "Tefora Software Solutions", // TODO: Replace with actual company name
    logo: "/tefora.png", // TODO: Replace with actual logo
    duration: "2023 - Present",
    description:
      "Designed and developed an Indoor Navigation Progressive WebApp for a Hospital, which is a milestone project for the company. Delivered a static website for a Dubai-based pharmacy,finishing the project in 10 hours. Led a team of 2 in developing a full-stack content management system (CMS) for a school website using Node.js and Next.js.Managed frontend and backend development through efficient code management and team coordination",
    link: "https://tefora.in/",
    images: [
        '/paatha.png',
        '/nct.png',
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
