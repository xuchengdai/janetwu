import "./App.css";
import Project from "./components/Project";
import About from "./components/About";
function App() {
  // const toPage2 = () => {
  //   console.log("yeah");
  //   document.getElementsByClassName("page2")[0].scrollIntoView({
  //     behavior: "smooth",
  //     block: "start",
  //     inline: "nearest",
  //   });
  // };
  const nav1 = document.getElementById("nav-1");
  const nav2 = document.getElementById("nav-2");
  const nav3 = document.getElementById("nav-3");

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
        <div className="page1-backgroud">
          <div className="page1-backgroud-text1">
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
          {/* <button className="topage2" onClick={toPage2}></button> */}
        </div>
        {/* <img id="backgroudImg" src={index} alt="" /> */}
      </section>
      <section className="page2">
        <header>
          <ul className="navbar">
            <li className="nav-item" id="nav-1">
              Project
            </li>
            <li className="nav-item" id="nav-2">
              Resume
            </li>
            <li className="nav-item" id="nav-3">
              About me
            </li>
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
        <About />
      </section>
    </div>
  );
}

export default App;
