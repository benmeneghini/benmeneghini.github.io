const DangerAlert = () => {
    return (
        <div id="dan-alert"
            className="z-3000 fixed mb-3 inline-flex w-fit justify-end items-center
             rounded-lg bg-red-100 px-6 py-5 text-base text-red-700 shadow
             mt-3 mr-3"
            role="alert" style={{visibility: "hidden"}}>
            <span className="mr-2">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-5 w-5">
                        <path
                            fill-rule="evenodd"
                            d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z"
                            clip-rule="evenodd"/>
                </svg>
            </span>
            <span id="dan-alert-text"></span>
        </div>
    )
}

export default DangerAlert;