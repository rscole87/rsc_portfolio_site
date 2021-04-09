let contactForm = document.getElementById("contact-form");
let inquiries = [];
let submissionModal = document.getElementById("submission-modal");
let testBttn = document.getElementById("modal-test");
let projectsDiv = document.getElementById("projects-div");
let mobileMenuBttn = document.getElementById("menu-button");
let mobileMenu = document.getElementById("mobile-nav-menu");
let closeBttns = document.getElementsByClassName("close");
let projectThumbs = document.getElementsByClassName("project-thumb");

console.log(firebase);


contactForm.onsubmit = function(e){
    e.preventDefault();
    let fName = contactForm.f_name.value;
    let lName = contactForm.l_name.value;
    let email = contactForm.email.value;
    let message = contactForm.message.value;
    let userContact = new Contact(fName, lName, email, message);
    inquiries.push(userContact);
    inquiries.forEach(inquiry => inquiry.printContact());
    contactForm.reset();
    submissionModal.style.display = "block";
    return userContact;
}


const closeModal = (e) =>{
    if (e.target.parentElement.parentElement.classList.contains("modal")) {
        toggleVisability(e.target.parentElement.parentElement);
    }
}

const createCloseBttn = () =>{
    let closeBttn = document.createElement("span");
    closeBttn.innerHTML = "&times";
    closeBttn.className = "close";
    closeBttn.addEventListener("click", closeModal);
    return closeBttn;
}
 
 
Array.from(projectThumbs).forEach(ele => {
    ele.addEventListener("click", () =>{
        console.log(ele.id)
        displayProject(ele.id);
    ;})
}); 


const toggleVisability = (element) =>{
    if(element.style.display === ""){
        element.style.display = "block";
    } else {
        element.style.display = "";
    }
}

mobileMenuBttn.addEventListener("click", () => toggleVisability(mobileMenu));


const displayProject = (ele) =>{
    let selectedProject = projects[ele];

    console.log("trying to display project");
    let modalDiv = document.createElement("div");
    modalDiv.className = "modal";

    let modalContent = document.createElement("div");
    modalContent.className = "modal-content"

    let closeBttn = createCloseBttn();

    let projectName = document.createElement("h4");
    projectName.className = "project-name";
    projectName.innerText = selectedProject.name;

    let projectDescription = document.createElement("p");
    projectDescription.className = "project-description";
    projectDescription.innerText = selectedProject.description;

    let imgDiv = document.createElement("div");

    let projectImg = document.createElement("img");
    projectImg.className = "project-img";
    projectImg.src = selectedProject.image;

    modalDiv.appendChild(modalContent);
    modalContent.appendChild(closeBttn);
    modalContent.appendChild(projectName);
    modalContent.appendChild(projectDescription);
    modalContent.appendChild(imgDiv);

    imgDiv.appendChild(projectImg);

    projectsDiv.appendChild(modalDiv);
    modalDiv.style.display = "block";
}


let projects = {

    project1: {
        name: "Base Apparel",
        description: "Landing page for a new clothing retailer.",
        image: "./images/projects/base_apparel.png",
        // gitHub: ,
        // demo: ,
    },

    project2: {
        name: "Intro Component",
        description: "Registration form for online learning platform.",
        image: "./images/projects/intro_component.png",
        // gitHub: ,
        // demo: ,
    },

    project3: {
        name: "Bookmark Manager",
        description: "Website for a bookmark management platform.",
        image: "./images/projects/bookmark_manager.png",
        // gitHub: ,
        // demo: ,
    },

    project4: {
        name: "Smash Tourney Bracket",
        description: "Tournament registration form and bracket tracker.",
        image: "./images/projects/smash_bracket.png",
        // gitHub: ,
        // demo: ,
    },

    project5: {
        name: "To-Do List",
        description: "Task tracking application.",
        image: "./images/projects/to_do_list.png",
        // gitHub: ,
        // demo: ,
    },

    project6: {
        name: "Tip Calculator",
        description: "Tip calculator for individuals and groups.",
        image: "./images/projects/tip_calc.png",
        // gitHub: ,
        // demo: ,
    }
}


window.onclick = function (event) {
    if (event.target.classList.contains("modal")){
        toggleVisability(event.target);
    }
}
