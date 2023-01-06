import Image from 'next/image'
import { Project } from "./types";
import Link from "next/link";
import { readdirSync } from 'fs'
import path from "path";


export default function Home() {
	let projects: Project[] = readdirSync(path.resolve(".", "content", "projects"), {withFileTypes: true})
			.filter(dirent => dirent.isDirectory())
			.map(dirent => require(`/content/projects/${dirent.name}/content.yaml`) as Project)
			.sort((a, b) => new Date(a.projectDate) < new Date(b.projectDate) ? 1 : -1)

	let createUrlPath = (val: string) => val.replaceAll(" ", "-")

	return (
			<div className="w-[80%] my-0 mx-auto">
				{projects.map((proj, i) =>
						<Link key={i} href={`projects/${createUrlPath(proj.title)}`}>
							<div className="relative w-full h-tile my-[0.8rem] bg-white text-white overflow-hidden group" style={{backgroundColor: proj.backgroundColor}}>
								<Image
										className={`object-${proj.image.fitting} z-0 w-full overflow-visible`}
										src={`/content/projects/${createUrlPath(proj.title)}/${proj.image.name}`}
										alt={proj.description}
										fill
										priority={i==0}
										quality={90}
										sizes="80vw"
										style={{
											objectPosition: proj.image.fitting === "cover" ? `${proj.image.positionHorizontal}% ${proj.image.positionVertical}%` : "50% 50%"
										}}/>
								{/*<img className={`object-${proj.image.fitting} z-0 absolute h-full w-full overflow-visible`}*/}
								{/*		 src={`/content/projects/${createUrlPath(proj.title)}/${proj.image.name}`}*/}
								{/*		 style={{*/}
								{/*			 objectPosition: proj.image.fitting === "cover" ? `${proj.image.positionHorizontal}% ${proj.image.positionVertical}%` : "50% 50%"*/}
								{/*		 }}/>*/}
								<div className={`w-full h-full z-10 relative hidden bg-${proj.type}/[0.6] backdrop-blur-lg md:backdrop-blur-sm md:flex group-hover:flex`}>
									<div className="absolute p-[2%] font-bold">
										{proj.type.toUpperCase()}
									</div>
									<div className="w-full flex flex-col justify-center overflow-hidden p-[5%] [&>*]:m-[1.5%]">
										<div className="text-2xl font-semibold sm:text-xl sm:font-medium">
											{proj.title.toUpperCase()}
										</div>
										<div className="text-lg font-medium sm:text-base sm:font-normal">
											{proj.description}
										</div>
										{proj.subtext &&
												<div className="text-base font-light sm:text-sm sm:font-extralight">
													{proj.subtext}
												</div>
										}
									</div>
									<div className="absolute right-0 bottom-0 p-[2%] text-white/[0.6]">
										{proj.projectDate.getFullYear()}
									</div>
								</div>
							</div>
						</Link>
				)}
			</div>
	)
}
