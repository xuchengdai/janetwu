const Project = (props) => {
  return (
    <div className="project">
      <img src={props.img} alt="" />
      <div className="text">
        <h3>{props.name}</h3>
        <p className="class">{props.class}</p>
        <p className="desc">{props.desc}</p>
      </div>
    </div>
  );
};

export default Project;
