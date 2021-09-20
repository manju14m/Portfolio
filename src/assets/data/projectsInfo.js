import random from "../media/random.png";
import todo from "../media/todo.png";

const projectData = [
  {
    name: "E-Commerce App",
    info: "This app is developed using ReactJS with firebase authentication.",
    TechStack:
      "ReactJS, JavaScript, SCSS, Firebase authentication, Firestore DB.",
    url: "https://manju-react-todolist.netlify.app",
    image: random,
  },
  {
    name: "Messaging App",
    info: "This is a realtime chatting application with firebase authentication and firestore database.",
    TechStack:
      "ReactJS, JavaScript, Material UI, SCSS, Firebase authentication, Firestore DB.",
    url: "https://manju-react-todolist.netlify.app",
    image: todo,
  },
  {
    name: "Random Quote Generator",
    info: "This is a RaectJS based random quote generator.",
    TechStack: "ReactJS, JavaScript, SCSS.",
    url: "https://manju-react-todolist.netlify.app",
    image: random,
  },
  {
    name: "MERN STACK Task Manager",
    info: "MERN_STACK based Task Manager application",
    TechStack: "ReactJS, Redux, ExpressJS, MongoDB, JavaScript, SCSS.",
    url: "https://taskmanager-gold.vercel.app/",
    image: todo,
  },
];

export default projectData;
