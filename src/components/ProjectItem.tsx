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

const ProjectItem: FC<ProjectItemProps> = (props) => {
    return (
        <div
         className={`w-full flex justify-center col-span-2 min-w-fit
         ${props.index === 3 ? "lg:col-start-3" : ""}`}>
            <div
                className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-2xl dark:bg-red-50
                dark:border-gray-700 m-3">
                <div className="max-h-40">
                    <img className="max-h-40 w-full rounded-t-lg object-cover" src={`${process.env.PUBLIC_URL}/${props.project.imageName}`} alt=""/>
                </div>
                <div className="p-3">
                    <h5 className="text-2xl font-bold tracking-tight text-neutral-950">
                        {props.project.title}
                    </h5>
                    <p className="mb-3 font-normal text-gray-500">{props.project.date}</p>
                    <p className="mb-3 font-normal text-neutral-950">
                        Technologies: {props.project.technologies.join(', ')}
                    </p>
                    {/*<button type="button" data-modal-target="projectModal" data-modal-show="projectModal">Test</button>*/}
                </div>
                {/*<div className="align-bottom">*/}
                {/*    <a href="#"*/}
                {/*       className="inline-flex items-center px-3 py-2 text-sm font-medium text-center*/}
                {/*        text-white bg-red-700 rounded-lg hover:bg-neutral-800 focus:ring-4 focus:outline-none*/}
                {/*         focus:ring-neutral-300 dark:bg-neutral-600 dark:hover:bg-neutral-700 dark:focus:ring-neutral-800">*/}
                {/*        Read more*/}
                {/*        <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"*/}
                {/*             fill="none" viewBox="0 0 14 10">*/}
                {/*            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"*/}
                {/*                  d="M1 5h12m0 0L9 1m4 4L9 9"/>*/}
                {/*        </svg>*/}
                {/*    </a>*/}
                {/*</div>*/}
            </div>
        </div>
    )
}

export default ProjectItem;