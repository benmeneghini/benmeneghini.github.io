import {FC} from "react";

interface ProjectItemProps {
    index: number;
    project: {
        title: string;
        description: string;
        date: string;
        imageName: string;
        technologies: string[];
        link: string;
    };
}

const ProjectModal: FC<ProjectItemProps> = ({ project, index }) => {
    const modalId = `projectModal-${index}`;

    return (
        <dialog id={modalId} className="modal rounded p-3">
            <div className="modal-box">
                <h3 className="font-bold text-lg">{project.title}</h3>
                <p className="py-4 mb-2 overflow-scroll max-h-64">{project.description}</p>
                <div className="modal-action">
                <form method="dialog">
                    <button className="btn w-fit self-center text-black border-2 rounded shadow p-2
            hover:bg-neutral-950 hover:text-white border-neutral-950">Close</button>
                </form>
                </div>
            </div>
        </dialog>
    )
}


const ProjectItem: FC<ProjectItemProps> = (props) => {

    return (
        <div
         className={`w-full flex justify-center col-span-2 min-w-fit
         ${props.index === 3 ? "lg:col-start-3" : ""}`}>
            <div
                className="w-full flex flex-col max-w-sm bg-white border border-gray-200 rounded-lg shadow-2xl
                dark:border-gray-700 m-3">
                <div className="max-h-40">
                    <img className="max-h-40 w-full rounded-t-lg object-cover" src={`${process.env.PUBLIC_URL}/${props.project.imageName}`} alt=""/>
                </div>
                <div className="p-3 h-full">
                    <h5 className="text-2xl font-bold tracking-tight text-neutral-950">
                        {props.project.title}
                    </h5>
                    <p className="mb-3 font-normal text-gray-500">{props.project.date}</p>
                    <p className="mb-3 font-normal text-neutral-950">
                        Technologies: {props.project.technologies.join(', ')}
                    </p>
                </div>
                <button className="btn mb-2 w-fit self-center text-black border-2 rounded shadow p-2 mt-2
                hover:bg-neutral-950 hover:text-white border-neutral-950" onClick={() => (document.getElementById(`projectModal-${props.index}`) as HTMLDialogElement).showModal()}>Read more...</button>
                <ProjectModal key={props.index} index={props.index} project={props.project} />
            </div>
        </div>
    )
}

export default ProjectItem;