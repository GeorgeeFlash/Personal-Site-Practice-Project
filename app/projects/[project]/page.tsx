import { getProject } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react"
import Image from "next/image";

type Props = {
    params: { project: string }
}

export default async function Project ({ params }: Props) {

    const slug = params.project;
    const project = await getProject(slug);

    return (
        <div className="max-w-3xl mx-auto py-20">
            <header className="flex items-center justify-between">
                <h1 className="text-5xl drop-shadow font-extrabold bg-gradient-to-r from-red-500 via-blue-500 to-yellow-500 bg-clip-text text-transparent">
                    {project.name}
                </h1>
                <a 
                    href={project.url} 
                    title="View Project" 
                    target="_black" 
                    rel="noopener noreferrer"
                    className="bg-gray-100 rounded-lg text-gray-500 font-bold py-3 px-4 whitespace-nowrap hover:text-red-300 transition"
                >
                    View Project
                </a>
            </header>

            {/* Image goes here */}
            <Image 
                src={project.image}
                alt={project.name}
                width={1920}
                height={1080}
                className="mt-10 border-2 border-gray-700 object-cover rounded-lg"
            />

            {/* Content goes here */}
            <div className="text-lg text-gray-700 mt-5">
                <PortableText value={project.content} />
            </div>

        </div>
    )
}