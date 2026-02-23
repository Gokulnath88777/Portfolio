
document.addEventListener("DOMContentLoaded", function () {
  var typed = new Typed("#typed", {
    strings: ["Technology Specialist", "MERN Stack Learner", "Trainer"],
    typeSpeed: 60,
    backSpeed: 40,
    loop: true

  });
});
let navSkill = document.getElementById("navSkill")
let skill = document.getElementById("skills")
let navHome = document.getElementById("navHome")
let navAbout = document.getElementById("navAbout")
let navProject = document.getElementById("navProject")
let project = document.getElementById("projects")


let home = document.getElementById("home")
navHome.addEventListener("click", () => {
  home.style.display = "flex"
  skill.style.display = "none"
  about.style.display = "none"
  project.style.display = "none"
  home.classList.add("bounce-in-top")
  setTimeout(() => {
    home.classList.remove("bounce-in-top")
  }, 1000)
})


navSkill.addEventListener("click", () => {
  home.style.display = "none"
  about.style.display = "none"
  project.style.display = "none"
  skill.style.display = "grid"
  skill.classList.add("bounce-in-top")
  setTimeout(() => {
    skill.classList.remove("bounce-in-top")
  }, 1000)
})

let about = document.getElementById("about")
navAbout.addEventListener("click", () => {
  home.style.display = "none"
  skill.style.display = "none"
  project.style.display = "none"
  about.style.display = "grid"
  about.classList.add("bounce-in-top")
  setTimeout(() => {
    about.classList.remove("bounce-in-top")
  }, 1000)

})

navProject.addEventListener("click", () => {
  home.style.display = "none"
  skill.style.display = "none"
  about.style.display = "none"
  project.style.display = "grid"
  project.classList.add("bounce-in-top")
  setTimeout(() => {
    project.classList.remove("bounce-in-top")
  }, 1000)

})
document.addEventListener("DOMContentLoaded", () => {
  home.classList.add("bounce-in-top")
})