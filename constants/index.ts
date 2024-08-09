import { IcomapnyDetails, InavMenu } from "@/types"
import { Facebook, Instagram, Linkedin, Twitter, XIcon, Youtube } from "lucide-react";

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
        link: "#team"
    },
    {
        name: "Services",
        link: "#services"
    },
    {
        name: "Technology",
        link: "#team"
    },
    {
        name: "Careears",
        link: "#team"
    }
];



const footerMenu: InavMenu[] = [
    {
        name: ""
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
        icon: ""
    },
    {
        name: "Full Stack Development",
        description: "Our full stack developer excellent in MERN stack, seemlessly combining MongoDB, Express,React and Node to create high performence and user friendly web application.",
        tech_stack: ["Mongodb", "Express", "Node", "React"],
        icon: ""
    },
    {
        name: "Trending Technology",
        description: "We stay updated with latest industry trends and incorporets cutting edge technologies like AI,Web3.0, Blockchain,IOT and cloud computing into our solution, enabling bussinesses to stay compatative in todays digital trend.",
        tech_stack: ["Ai", "Blockchain", "IOT", "Machine Learning"],
        icon: ""
    },
    {
        name: "Software Testing",
        description: "Our dedicated Q/A team ensures the reliability and quality of your software through comprehensive software testing technologies including functional ,performence and security testing.",
        tech_stack: ["manual", "automation", "integration", "unit"],
        icon: ""
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
        name: "We go beyond development"
    }
]






export { NavMenu, services, companyContactDetails }