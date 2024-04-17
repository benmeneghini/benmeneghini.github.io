import { Projects } from "../info/MyInfo"
import ProjectItem from "./ProjectItem";


export const ProjectSection = () => {
    return (
        <div className="grid grid-cols-1 gap-2 md:grid-cols-4 lg:grid-cols-6 justify-items-center">
            <h1 className="text-3xl md:col-span-4 lg:col-span-6 mb-6">Projects</h1>
            {Projects.map((project, index) =>
                <ProjectItem key={index} index={index} project={project} />
            )}
        </div>
    )
}