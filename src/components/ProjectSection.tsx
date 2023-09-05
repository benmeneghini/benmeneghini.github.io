import { Projects } from "../info/MyInfo"
import ProjectItem from "./ProjectItem";

export const ProjectSection = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center">
            <h1 className="text-3xl md:col-span-2 lg:col-span-3 mb-6">Projects</h1>
            {Projects.map((project, index) =>
                <ProjectItem key={index} project={project} />
            )}
        </div>
    )
}