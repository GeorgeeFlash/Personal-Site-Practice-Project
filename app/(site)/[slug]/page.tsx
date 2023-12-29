import { getPage } from "@/sanity/sanity-utils"
import { PortableText } from "@portabletext/react"

type Props = {
    params: {slug: string}
}

export default async function Page({ params }: Props) {
    const page = await getPage(params.slug)

    console.log("Slug: ", params.slug)
    // console.log("Data: ", page)

    return (
        <div>
            <h1 className="bg-gradient-to-r from-red-500 via-blue-500 to-yellow-500 bg-clip-text text-transparent text-5xl font-extrabold">{page.title}</h1>
            <div className="text-lg text-gray-700 mt-10">
                <PortableText value={page.content} />
            </div>
        </div>
    )
}