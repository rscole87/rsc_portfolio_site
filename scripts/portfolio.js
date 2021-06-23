import projectList from "./projectList.js"
let projectsGrid = document.getElementById("projects-grid")
let projectTemplate = document.getElementById("project-template")
let projectThumbTemplate = document.getElementById("project-thumb-template")


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

projectThumbLinks.forEach(function (img) {
  img.addEventListener("click", function () {
    focusProject(img)
  })
})

const focusProject = function (img) {
  activeImage.src = img.src
}