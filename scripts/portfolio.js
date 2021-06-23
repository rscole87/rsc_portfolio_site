import projectList from "./projectList.js"
let projectsGrid = document.getElementById("projects-grid")
let projectTemplate = document.getElementById("project-template")
let projectThumbTemplate = document.getElementById("project-thumb-template")
let activeProjectVideo = document.getElementById("active-project-video")
let activeProjectName = document.getElementById("active-project-name")
let activeProjectDescription = document.getElementById("active-project-description")
let activeProjectDemo = document.getElementById("active-project-demo")
let activeProjectGithub = document.getElementById("active-project-github")

const createProjectThumb = (project) => {
  let thumb = document.importNode(projectThumbTemplate.content, true)
  thumb.querySelector("[project-id]").id = project.id
  return thumb
}

const populateAllProjects = () => {
  projectList.forEach((project) => {
    projectsGrid.appendChild(createProjectThumb(project))
  })
}

populateAllProjects();

const projectThumbLinks = Array.from(document.getElementsByClassName("project-thumb"))
console.log(projectThumbLinks)

projectThumbLinks.forEach(function (project) {
  project.addEventListener("click", function () {
    let selectedProject = projectList.filter(ele => ele.id === project.id)[0]
    focusProject(selectedProject)
  })
})

const focusProject = function (selectedProject) {
  activeProjectName.innerText = selectedProject.name;
  activeProjectVideo.src = selectedProject.video;
  activeProjectDescription.innerText = selectedProject.description;
  activeProjectDemo.href = selectedProject.demo;
  activeProjectGithub.href = selectedProject.github;
}