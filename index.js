const jobsSkillsContainer = document.getElementById("jobSkills");
const filteredSkillsContainer = document.getElementById("filtredSkills");

const skillsData = [
  "JavaScript",
  "HTML",
  "CSS",
  "Python",
  "Java",
  "React",
  "Node.js",
];

let filteredSkills = [];

jobsSkills();

function jobsSkills() {
  let jobsSkillsHTML = "";

  skillsData.forEach((skills) => {
    jobsSkillsHTML += `<span class='skill' data-skill="${skills}">${skills}</span>`;
  });

  jobsSkillsContainer.innerHTML = jobsSkillsHTML;

  const skilsElements = jobsSkillsContainer.getElementsByClassName("skill");

  Array.from(skilsElements).forEach((skillsElement) => {
    skillsElement.addEventListener("click", () =>
      filterSkills(skillsElement.getAttribute("data-skill"))
    );
  });
}

function filterSkills(selectedSkill) {
  const skillsElements = jobsSkillsContainer.getElementsByClassName("skill");

  for (let i = 0; i < skillsElements.length; i++) {
    const skillsElement = skillsElements[i];
    const skill = skillsElement.getAttribute("data-skill");

    if (skill === selectedSkill) {
      skillsElement.classList.add("active");
    } else {
      skillsElement.classList.remove("active");
    }
  }

  if (!filteredSkills.includes(selectedSkill)) {
    filteredSkills.push(selectedSkill);
  }

  filteredSkillsContainer.innerHTML = filteredSkills.join(", ");
}
