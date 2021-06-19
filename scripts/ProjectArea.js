import React from "react";
import projectList from "./projectList";
import Project from "./Project";

class ProjectArea extends React.Component {
  constructor(props) {
    super(props);
    this.state = { projectList: projectList };
  }

  render() {
    const displayedProjects = this.state.projectList.map(project => {
        <Project
            id={project.id}
            name={project.name}
            description={project.description}
            image={project.image}
            video={project.video}
            github={project.github}
            demo={project.demo}
        />
    })

    return (
      <div>
        <h1>Rendered</h1>
      </div>
    );
  }
}

export default ProjectArea;

const domContainer = document.querySelector("#projects-grid");
// ReactDOM.render(<ProjectArea />, domContainer);
