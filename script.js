import projectsData from "./projectsData.js";

// DOM manipulation for the project cards
document.addEventListener("DOMContentLoaded", function () {
  const prjContainer = document.querySelector(".container-cards");

  projectsData.forEach((project) => {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
        <img src="${project.image}" alt="${project.alt}" />
        <div class="card-content">
        <div class="card-title">${project.title}</div>
        <div class="card-description">${project.description}</div>
        <a href="${project.githubLink}" class="card-link">View on Github</a>
        </div>
        `;
    prjContainer.appendChild(card);
  });
});
