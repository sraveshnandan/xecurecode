import { IcomapnyDetails, InavMenu } from "@/types";
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";

const NavMenu: InavMenu[] = [
    {
        name: "Home",
        link: "#home",

    },
    {
        name: "About us",
        link: "#about-us"
    },
    {
        name: "Team",
        link: "#teams"
    },
    {
        name: "Services",
        link: "#services"
    },
    {
        name: "Technology",
        link: "#technology"
    },
    {
        name: "Careears",
        link: "#team"
    }
];



const footerMenu: InavMenu[] = [
    {
        name: "Privacy Policy",
        link: "/"
    },
    {
        name: "Terms & Conditions",
        link: "/"
    },
    {
        name: "Help Center",
        link: "/"
    },
    {
        name: "Contact Us",
        link: "/"
    }
]



const services: { name: string, description: string, tech_stack: string[], icon: string }[] = [
    {
        name: "Mobile App Development",
        description: "Our team of skilled mobile app developers creates highly custamized mobile application for android  as well as for ios platform, ensuring seemless user expirience and feature ric functionality.",
        tech_stack: ["ios", "android", "kotlin", "swift"],
        icon: "https://img.freepik.com/free-vector/app-development-banner_33099-1720.jpg"
    },
    {
        name: "Cross platform App Development",
        description: "We are  specialized in building cross platform app development by using frameworks like React Native, Flutter or ionic, enabling you to reach wider audience with single codebase",
        tech_stack: ["React Native", "Flutter", "ionic", "Xamarin"],
        icon: "https://img.freepik.com/free-vector/user-interface-development-isometric-concept-with-young-woman-creating-custom-design-mobile-application-vector-illustration_1284-72341.jpg"
    },
    {
        name: "Full Stack Development",
        description: "Our full stack developer excellent in MERN stack, seemlessly combining MongoDB, Express,React and Node to create high performence and user friendly web application.",
        tech_stack: ["Mongodb", "Express", "Node", "React"],
        icon: "https://img.freepik.com/free-photo/html-css-collage-concept-with-person_23-2150062008.jpg"
    },
    {
        name: "Trending Technology",
        description: "We stay updated with latest industry trends and incorporets cutting edge technologies like AI,Web3.0, Blockchain,IOT and cloud computing into our solution, enabling bussinesses to stay compatative in todays digital trend.",
        tech_stack: ["Ai", "Blockchain", "IOT", "Machine Learning"],
        icon: "https://img.freepik.com/free-vector/artificial-intelligence-landing-page-template_52683-29518.jpg"
    },
    {
        name: "Software Testing",
        description: "Our dedicated Q/A team ensures the reliability and quality of your software through comprehensive software testing technologies including functional ,performence and security testing.",
        tech_stack: ["manual", "automation", "integration", "unit"],
        icon: "https://img.freepik.com/free-vector/software-code-testing-concept-illustration_114360-8114.jpg"
    }

]



const companyContactDetails: IcomapnyDetails = {
    email: "contact@xecurecode.com",
    call: "+91 94708 30399",
    address: "Bihar Sharif, Nalanda, Bihar",
    socialLinks: [
        {
            icon: Linkedin,
            link: "/"
        },
        {
            icon: Facebook,
            link: "/"
        },
        {
            icon: Instagram,
            link: "/"
        },
        {
            icon: Twitter,
            link: "/"
        },
        {
            icon: Youtube,
            link: "/"
        }

    ]
}

const whyCards = [
    {
        name: "We go beyond development",
        lists: ["Technology consultancy", "Continuous development capabilities", "Managed IT service"]
    },
    {
        name: "Dedicated  development resources",
        lists: ["Analyst & Consultants", "Years of domain experties", "Enterprenural mindset"]
    },
    {
        name: "Hire technology experties along with",
        lists: ["Value driven offerings", "Cutting edge IT infrastructure", "Inovation driven best practices"]
    },
    {
        name: "Create an extented IT team",
        lists: ["flexible hiring contracts", "ODC facilities", "Defined processess and hierarchies"]
    }
]

const technologies = [
    {
        name: "Amazon Web Services",
        image: "/images/amazon.svg",
        description: "Amazon web services is a subsidery of amazon providing on demand cloud computing service and APIs to indeviduals, companies on metered pay as you go model."
    },
    {
        name: "React",
        image: "/images/react.svg",
        description: "React is a free and open-source front-end JavaScript library for building user interfaces based on components by Facebook Inc. It is maintained by Meta and a community of individual developers and companies. React can be used to develop single-page, mobile, or server-rendered applications with frameworks like Next.js."
    },
    {
        name: "Node",
        image: "/images/node.svg",
        description: "Explore the power of Node.js, a versatile JavaScript runtime that empowers developers to build efficient and scalable web applications. Dive into Node.js tutorials, best practices, and updates to stay ahead in the world of server-side development. Discover how Node.js can streamline your web projects and enhance your web application performance."
    },
    {
        name: "Figma",
        image: "/images/figma.png",
        description: "Discover Figma, the collaborative interface design tool that allows teams to create, test, and ship better designs from start to finish. Dive into Figma tutorials and best practices to improve your design workflow and create stunning user interfaces."
    },
    {
        name: "Microoft Azure",
        image: "/images/azure.svg",
        description: "Microsoft Azure, or just Azure, is the cloud computing platform developed by Microsoft. It offers management, access and development of applications and services to individuals, companies, and governments through its global infrastructure."
    },
    {
        name: "WordPress",
        image: "/images/wordpress.svg",
        description: "WordPress is a free and open-source content management system (CMS) written in PHP and paired with a MySQL or MariaDB database. Features include a plugin architecture and a template system."
    },
    {
        name: "Mongodb",
        image: "/images/mongo.png",
        description: "MongoDB is a source-available, cross-platform, document-oriented database program. Classified as a NoSQL database product, MongoDB utilizes JSON-like documents with optional schemas. MongoDB is developed by MongoDB Inc. and current versions are licensed under the Server Side Public License"
    },
    {
        name: "Firebase",
        image: "/images/firebase.png",
        description: "Firebase was a company that developed backend software. It was founded in San Francisco in 2011 and was incorporated in Delaware. In 2014 Firebase was bought by Google. Its name continues as a set of backend cloud computing services and application development platforms provided by Google."
    }
]

const teams = [
    {
        name: "Sravesh Nandan",
        avatar: "https://res.cloudinary.com/dirdehr7r/image/upload/v1724399190/my_photo_komcxc.png",
        role: "Full Stack Developer",
        twitter: "https://x.com/sravesh__nandan",
        mail: "sraveshnandan@gmail.com",
        linkdin: "https://www.linkedin.com/in/sravesh-nandan/"
    },
    {
        name: "Sravesh Nandan",
        avatar: "https://res.cloudinary.com/dirdehr7r/image/upload/v1724399190/my_photo_komcxc.png",
        role: "Full Stack Developer",
        twitter: "https://x.com/sravesh__nandan",
        mail: "sraveshnandan@gmail.com",
        linkdin: "https://www.linkedin.com/in/sravesh-nandan/"
    },
    
]






export { NavMenu, services, companyContactDetails, whyCards, technologies, footerMenu, teams }