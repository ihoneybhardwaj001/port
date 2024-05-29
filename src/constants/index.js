import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  MySQL,
  git,
  systaldyn,
  codealpha,
  Sanskar,
  solidity,
  blockchain,
  polygon,
  Rozarpay,
  randamgif,
  farehub,
  x,
  gmail,
  githublogo,
  linkedin,
  aws,
  network,
  itadmin,
  linux,
  azure,
  drs,
  jj,
  pvr
} from "../assets";


export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Linux Engineer",
    icon: web,
  },
  {
    title: "Windows server",
    icon: mobile,
  },
  {
    title: "Netwroking Engineer",
    icon: backend,
  },
  {
    title: "Web3.0 Tester",
    icon: creator,
  },
];

const technologies = [
  {
    name: "Linux",
    icon: linux,
  },
  {
    name: "Azure",
    icon: azure,
  },
  {
    name: "It Admin",
    icon: itadmin,
  },
  {
    name: "Networking Enginner",
    icon: network,
  },
  {
    name: "AWS",
    icon: aws,
  },
  {
    name: "blockchain",
    icon: blockchain,
  },
  {
    name: "polygon",
    icon: polygon,
  },
];

const experiences = [
  {
    title: "IT Admin And TMS Management",
    company_name: "PVR Cinemas",
    icon: pvr,
    iconBg: "#383E56",
    date: "May 2019 - June 2020",
    points: [
      "Managed and maintained IT infrastructure, including servers, workstations, and network equipment, ensuring optimal performance and uptime.",
      "Provided technical support to end-users, resolving hardware, software, and network issues efficiently.",
      "Administered Theatre Management System (TMS), ensuring accurate data entry, system updates, and integration with other IT systems.",
      "Monitored system performance and performed routine maintenance, ensuring optimal functionality and minimal downtime.",
    ],
  },
  {
    title: "IT Admin Support",
    company_name: "JJ Imprints Pvt Ltd.",
    icon: jj,
    iconBg: "#383E56",
    date: "July 2020 - Dec 2022",
    points: [
      " Provided technical support for end-users, resolving hardware, software, and network issues efficiently.",
      "Assisted in the setup and configuration of IT equipment, ensuring smooth operation and user satisfaction.",
      "Managed user accounts and permissions, maintaining security and accessibility across systems.",
      "Monitored system performance and performed routine maintenance, ensuring optimal functionality and minimal downtime.",
    ],
  },
  {
    title: "IT Networking Engineer",
    company_name: "DRS IT Cosultancy Pvt Ltd.",
    icon: drs,
    iconBg: "#383E56",
    date: "Dec 2020 - Feb 2024",
    points: [
      "Configured and maintained network hardware and software, including routers, switches, and firewalls.",
      "Monitored network performance and security, implementing measures to optimize efficiency and protect against threats.",
      "Collaborated with cross-functional teams, including system administrators and IT support staff, to ensure seamless network operations.",
      "Diagnosed and resolved network issues, minimizing downtime and improving user connectivity.",
      "Documented network configurations and procedures, creating comprehensive guides for future reference and training"
    ],
  },
  {
    title: "IT Administration",
    company_name: "Systaldyn Pvt. Ltd.",
    icon: systaldyn,
    iconBg: "#383E56",
    date: "Feb 2024 - Current",
    points: [
      "Managed and maintained Linux servers to ensure optimal performance and uptime.",
      "Collaborated with cross-functional teams, including network engineers, system administrators, and support staff, to deliver robust IT solutions.",
      "Implemented security best practices, such as regular updates, patch management, and vulnerability assessments, to safeguard systems and data.",
      "Troubleshot and resolved technical issues, providing support to enhance system reliability and user satisfaction.",
      "Monitored and optimized network performance, ensuring seamless connectivity and minimal downtime."
    ],
  },

];


const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Randam GIF Generator App",
    description:
      "The Random GIF Generator is an interactive web application built using React for the frontend, Node.js for the backend, and MongoDB for database storage. This application allows users to generate random GIFs based on different categories or search terms.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "node",
        color: "red-text-gradient",
      },
    ],
    image: randamgif,
    live_link: "http://randamgifsgenerator.netlify.app",
    source_code_link:
      "https://github.com/abhishekmahaja/Random-GIF-Generator-Project",
  },
  {
    name: "My FaresHub Application",
    description:
      "'FaresHub' is an innovative web application designed to streamline the process of managing fares and pricing information. Developed using HTML, CSS, and JavaScript, FaresHub offers a user-friendly interface combined with powerful functionality for efficient fare management. FaresHub is built with a responsive design, ensuring seamless functionality across devices and screen sizes.",
    tags: [
      {
        name: "HTML5",
        color: "blue-text-gradient",
      },
      {
        name: "CSS3",
        color: "green-text-gradient",
      },
      {
        name: "JAVA",
        color: "pink-text-gradient",
      },
    ],
    image: farehub,
    live_link: "http://myfareshub.netlify.app",
    source_code_link: "https://github.com/abhishekmahaja/My-Fares-Hub",
  },
  {
    name: "RazorPay Clone",
    description:
      "The RazorPay Clone is a robust web application that replicates the functionality of the popular payment gateway service, RazorPay. Developed using modern web technologies such as HTML, CSS, JavaScript, and integrating with backend technologies like Node.js and MongoDB, this clone offers a seamless and secure platform for online payments.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "node",
        color: "pink-text-gradient",
      },
      {
        name: "Mongo DB",
        color: "red-text-gradient",
      },
    ],
    image: Rozarpay,
    live_link: "http://rozarpayclone.netlify.app",
    source_code_link:
      "https://github.com/abhishekmahaja/RazorPay-Clone-Using-Tailwind",
  },
];

export { services, technologies, experiences, testimonials, projects };
