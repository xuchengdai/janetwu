import "./App.css";
import Project from "./components/Project";

function App() {
  const toPage2 = () => {
    console.log("yeah");
    document.getElementsByClassName("page2")[0].scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  };

  const projects = [
    {
      id: 1,
      name: "Stop food waste",
      class: "Food industry",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui cum veniam libero, facere ratione at quis animi perferendis tempore veritatis odit nobis natus eveniet nesciunt obcaecati iure sunt? Praesentium, esse.",
      img: "imgs/business.png",
    },
    {
      id: 2,
      name: "Stop food waste 2",
      class: "Research",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui cum veniam libero, facere ratione at quis animi perferendis tempore veritatis odit nobis natus eveniet nesciunt obcaecati iure sunt? Praesentium, esse.",
      img: "imgs/business.png",
    },
    {
      id: 3,
      name: "Stop food waste 2",
      class: "Research",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui cum veniam libero, facere ratione at quis animi perferendis tempore veritatis odit nobis natus eveniet nesciunt obcaecati iure sunt? Praesentium, esse.",
      img: "imgs/business.png",
    },
    {
      id: 4,
      name: "Stop food waste 2",
      class: "Research",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui cum veniam libero, facere ratione at quis animi perferendis tempore veritatis odit nobis natus eveniet nesciunt obcaecati iure sunt? Praesentium, esse.",
      img: "imgs/business.png",
    },
  ];
  return (
    <div className="container">
      <section className="page1">
        <div className="page1-door1">
          <div className="page1-door1-text1">
            <h2>
              <span className="pink-underline">Jan</span>et Wu
            </h2>
            <p>
              A problem-sovler who builds crystal <br />
              with rationality and creativity.
            </p>
          </div>
          <div className="page1-door1-text2">
            Experience Design
            <br /> User Research
            <br /> Design Strategy
          </div>
        </div>
        <div className="page1-door2">
          <div className="page1-door2-text1">
            Good design is not cheap.
            <br /> --Janet W<br />
          </div>
          <button className="topage2" onClick={toPage2}></button>
        </div>
        {/* <img id="backgroudImg" src={index} alt="" /> */}
      </section>
      <section className="page2">
        <header>
          <ul className="navbar">
            <li className="nav-item">Project</li>
            <li className="nav-item">Resume</li>
            <li className="nav-item">About me</li>
          </ul>
        </header>
        <div className="projects">
          {projects.map((project) => (
            <Project
              key={project.id}
              img={project.img}
              name={project.name}
              class={project.class}
              desc={project.desc}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

export default App;
