import Link from "next/link";
import Image from "next/image";

// import { FaXTwitter } from "react-icons/fa6";
import { FaGithub, FaLinkedin } from "react-icons/fa";

import {
    Card,
    CardContent
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
const socials = [
    {
        name: "Github",
        link: "https://github.com/mhdnishadc",
        icon: <FaGithub className="size-4" />
    },
    {
        name: "LinkedIn",
        link: "https://www.linkedin.com/in/muhammed-nishadc",
        icon: <FaLinkedin className="size-4" />
    },
    // {
    //     name: "X (Twitter)",
    //     link: "",
    //     icon: <FaXTwitter className="size-4" />
    // }
    // TODO: Add more socials here
]

export const Profile = () => {
    return (
        <Card>
            <CardContent className="pt-6">
                <div className="flex flex-col items-start gap-2 ">
                    <div className="flex flex-row md:flex-col items-center md:items-start w-full gap-4">
                        <Image
                            width={150}
                            height={150}
                            quality={100}
                            unoptimized
                            src="/profile update.jpg"
                            alt="Profile Picture"
                            className="rounded-full size-12 md:w-full h-auto object-cover border-2"
                        />
                        <div className="flex flex-col items-start justify-center">
                            <h1 className="font-bold md:mt-4 text-xl md:text-2xl">Muhammed Nishad</h1>
                            <p className="text-sm md:text-base text-muted-foreground">
                                Fullstack Developer
                            </p>
                        </div>
                    </div>
                    <p className="mt-2 text-start text-sm text-muted-foreground">
                    I am a full-stack developer with a passion for building software products that solve real-world problems.
                    </p>
                    <Button className="mt-4 w-full" asChild>
                        {/* TODO: Add resume link */}
                        {/* or link to schedule a meeting using Calendly or Cal*/}
                        <Link
                            target="_blank"
                            href="https://drive.google.com/file/d/1PNma1R675ZW9Sl8rr5jru8GuDgbtYtxr/view?usp=sharing"
                            className="font-semibold"
                        >
                            CONTACT ME
                        </Link>
                    </Button>
                    <div className="mt-4 flex flex-col space-y-2 border-t border-border pt-4 w-full">
                        {socials.map((s, i) => {
                            const parts = s.link.split('/')
                            const username = parts[parts.length - 1]
                            console.log(username,'link');
                            
                            return (
                                <Link
                                    key={i}
                                    href={s.link}
                                    target="_blank"
                                    aria-label={`${s.name} Logo`}
                                    className="cursor-pointer flex items-center gap-2 group"
                                >
                                    {s.icon}
                                    <p className="text-sm text-muted-foreground group-hover:text-primary transition-color duration-200 ease-linear">
                                        /{username}
                                    </p>
                                </Link>
                            )
                        })}
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}