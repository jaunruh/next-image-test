import { Project } from "../../types";

export default function Head({
	params: {project},
}: {
	params: { project: string };
}) {
	let projectData: Project = require(`/content/projects/${project}/content.yaml`)

	return (
			<>
				<title>{projectData.title}</title>
				<meta content="width=device-width, initial-scale=1" name="viewport"/>
				<meta name="description" content={projectData.description}/>
			</>
	)
}