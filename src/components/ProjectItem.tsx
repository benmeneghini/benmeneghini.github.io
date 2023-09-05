import {FC} from "react";

interface ProjectItemProps {
    project: {
        title: string;
        description: string;
        date: string;
        imageName: string;
        technologies: string[];
        link: string;
    };
}

const ProjectItem: FC<ProjectItemProps> = ({ project }) => {
    return (
        <div className="w-full flex justify-center">
            <div
                className="w-full max-w-sm h-96 bg-white border border-gray-200 rounded-lg shadow dark:bg-red-50
                dark:border-gray-700 m-3">
                <div className="max-h-40">
                    <img className="max-h-40 w-full rounded-t-lg object-cover" src={`${process.env.PUBLIC_URL}/${project.imageName}`} alt=""/>
                </div>
                <div className="p-5">
                    <h5 className="text-2xl font-bold tracking-tight text-neutral-950">
                        {project.title}
                    </h5>
                    <p className="mb-3 font-normal text-gray-500">{project.date}</p>
                    <p className="mb-3 font-normal text-neutral-950">
                        {project.description}
                    </p>
                    <a href="#"
                       className="inline-flex items-center px-3 py-2 text-sm font-medium text-center
                        text-white bg-red-700 rounded-lg hover:bg-neutral-800 focus:ring-4 focus:outline-none
                         focus:ring-neutral-300 dark:bg-neutral-600 dark:hover:bg-neutral-700 dark:focus:ring-neutral-800">
                        Read more
                        <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                             fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                  d="M1 5h12m0 0L9 1m4 4L9 9"/>
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default ProjectItem;