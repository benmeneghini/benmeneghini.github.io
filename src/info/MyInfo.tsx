
const Info = {
    "about_1": "I'm an aspiring software engineer with a passion for crafting innovative solutions and pushing\n" +
        "            the boundaries of my abilities. With a keen interest in problem-solving and a knack for logical thinking,\n" +
        "            I'm constantly seeking new challenges to enhance my skills and broaden my knowledge in the \n" +
        "            software industry. " ,
    "about_2": "I thrive on the creative process of turning ideas into functional and user-friendly\n" +
        "            software. With a strong foundation in several programming languages and a drive to stay up-to-date with the\n" +
        "            latest industry trends, I am committed to becoming a proficient and versatile software engineer,\n" +
        "            ready to make a meaningful impact in the world of technology.",
    "email": "bencmeneghini@gmail.com",
    "number": "0226556606"
}

const Projects = [
    {
        title: "Discord Boss Timer Bot",
        description: "I developed this project on my own which allowed me to gain an understanding of how to " +
            "efficiently problem solve, especially as I was working with different aspects of software that I previously " +
            "had no experience with. " +
            "During my years of playing the mobile game, Celtic Heroes, I noticed the lack of ease-of-use applications " +
            "used to time the bosses within the game. Due to the crucial aspect of needing to be up to date with the " +
            "spawn times of the bosses in the game, I developed this discord bot for the community discord server, which is still " +
            "currently in use by an estimated 900+ players.",
        date: "01-06-2021",
        imageName: "timerbot.png",
        technologies: ["Java", "JDA", "Gradle"],
        link: ""
    },
    {
        title: "In-Kind Product Donation Web Application (WIP)",
        description: "This project is a web application that I am working on myself for an external client as part of my " +
            "Software Engineering course at University. The application is designed to allow businesses to donate their " +
            "products to other businesses.",
        date: "Ongoing",
        imageName: "website.png",
        technologies: ["React", "Typescript", "Node", "ExpressJS", "PostgreSQL", "Tailwind"],
        link: ""
    },
    {
        title: "Hopper - Team Analytics Web Application",
        description: "This project is a multi-user web application that I am currently working on with a group of " +
            "seven other individuals. For the period of the time that I have been working on this project, it has " +
            "given me valuable experience working within an agile team, and has highlighted the importance of effective " +
            "communication in order to deliver a viable product. " +
            "The application is a one-stop-shop for coaches, players, and whanau involved in team sports, and utilises " +
            "exciting challenges and a cosmetic rewards-based system to encourage activity between users. Some features " +
            "include scheduling training sessions and matches, gathering stats from players' performance, and planning coaching " +
            "sessions.",
        date: "20-02-2023",
        imageName: "hopper.png",
        technologies: ["Java", "Javascript", "Bootstrap", "HTML / CSS / SCSS", "SQL", "SpringBoot", "Gradle"],
        link: ""
    },
    {
        title: "API Server Implementation",
        description: "This was an individual project that I completed as part of my Web Architecture course in University. " +
            "The objective of the assignment was to implement a RESTful API for a film festival website. I was provided with " +
            "an API specification, together with a database specification and implemented each of these.",
        date: "20-04-2023",
        imageName: "apiServer.png",
        technologies: ["ExpressJS", "Typescript", "SQL"],
        link: ""
    },
    {
        title: "Personal Developer Portfolio",
        description: "This project is a personal portfolio website that I developed to showcase my skills and projects. " +
            "The objective of this project was to gain experience in developing a website from scratch, using different technologies " +
            "and frameworks. I have utilised React, Node, and Tailwind to create this website.",
        date: "Ongoing",
        imageName: "portfolio.png",
        technologies: ["Node", "React", "Typescript", "Tailwind", "JSX / CSS"],
        link: "https://benmeneghini.me"
    },
    {
        title: "Remote Helicopter Controller",
        description: "This project was a pair project that I completed as part of my Software Engineering course at University ." +
            "It was part of my Embedded Systems course and helped me to utilisse different technologies and programming language such as C. " +
            "The objective of the project was to develop a program for a microcontroller that could be used to control a helicopter.",
        date: "20-05-2023",
        imageName: "helicopter.jpg",
        technologies: ["C"],
        link: ""

    },
    {
        title: "Face Mask Detection System",
        description: "This project was an individual project that I completed as part of my Software Engineering course at University. " +
            "It was part of my Computer Vision course and introduced me to the world of data augmentation, machine learning models, and their capabilities. " +
            "The system was a real-time face mask detection system. It was able to detect the prescence of a fask mask on an individual, which has many " +
            "uses within the health sector.",
        date: "22-04-2024",
        imageName: "facemask.jpeg",
        technologies: ["Python", "OpenCV", "YOLOv8"],
        link: ""
    }
]

export {Info, Projects};