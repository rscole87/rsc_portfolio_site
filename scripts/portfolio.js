import projectList from "./projectList.js"
let projectsDiv = document.getElementById("projects-div")
let projectsGrid = document.getElementById("projects-grid")
let mobileMenuBttn = document.getElementById("menu-button")
let mobileMenu = document.getElementById("mobile-nav-menu")
let closeBttns = document.getElementsByClassName("close")
let projectThumbs = document.getElementsByClassName("project-thumb")
let projectTemplate = document.getElementById("project-template")
let projectThumbTemplate = document.getElementById("project-thumb-template")

const closeModal = (e) => {
  if (e.target.parentElement.parentElement.classList.contains("modal")) {
    toggleVisability(e.target.parentElement.parentElement)
  }
}

const toggleVisability = (element) => {
  if (element.style.display === "") {
    element.style.display = "block"
  } else {
    element.style.display = ""
  }
}

mobileMenuBttn.addEventListener("click", () => toggleVisability(mobileMenu))

const displayProject = (projectId) => {
  let selectedProject

  projectList.forEach((project) => {
    if (project.id == projectId) {
      selectedProject = project
    }
  })

  let modalDiv = document.createElement("div")
  modalDiv.className = "modal"

  modalDiv.appendChild(printProject(selectedProject))
  projectsDiv.appendChild(modalDiv)

  modalDiv.style.display = "block"
}

const printProject = (project) => {
  let projectClone = document.importNode(projectTemplate.content, true)
  projectClone.querySelector("[project-name]").innerText = project.name
  projectClone.querySelector("[project-description]").innerText = project.description
  projectClone.querySelector("[project-img]").src = project.image
  projectClone.querySelector("[demo]").href = project.demo
  projectClone.querySelector("[github]").href = project.github
  return projectClone
}

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

populateAllProjects()

Array.from(projectThumbs).forEach((ele) => {
  ele.addEventListener("click", () => {
    displayProject(ele.id)

    Array.from(closeBttns).forEach((bttn) => {
      bttn.addEventListener("click", closeModal)
    })
  })
})

window.onclick = function (event) {
  if (event.target.classList.contains("modal")) {
    toggleVisability(event.target)
  }
}
