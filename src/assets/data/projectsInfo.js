import random from "../media/random.png";
import taskManager from "../media/TaskManager.png";
import shopify from "../media/shopify.png";

const projectData = [
  {
    name: "E-Commerce App",
    info: "This app is developed using ReactJS with firebase authentication.",
    TechStack: "ReactJS, JavaScript, SCSS, Firebase authentication.",
    url: "https://manju-shopify.netlify.app/",
    image: shopify,
  },
  // {
  //   name: "Messaging App",
  //   info: "This is a realtime chatting application with firebase authentication and fireStore database.",
  //   TechStack:
  //     "ReactJS, JavaScript, Material UI, SCSS, Firebase authentication, FireStore DB.",
  //   url: "https://manju-react-todolist.netlify.app",
  //   image: todo,
  // },
  {
    name: "Task Manager",
    info: "MERN Stack based Task MAnager application",
    TechStack: "ReactJS, NodeJS, ExpressJS, MongoDB, JavaScript, SCSS.",
    url: "https://taskmanager-gold.vercel.app",
    image: taskManager,
  },

  {
    name: "Random Quote Generator",
    info: "This is a ReactJS based random quote generator.",
    TechStack: "ReactJS, JavaScript, SCSS.",
    url: "https://manju-react-todolist.netlify.app",
    image: random,
  },
];

export default projectData;
