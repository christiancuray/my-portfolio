document.addEventListener("DOMContentLoaded", () => {
  fetch("projectsData.json")
    .then((response) => response.json())
    .then((projectsData) => {
      const projectsContainer = document.querySelector(".container-cards");

      projectsData.forEach((project) => {
        const projectCard = document.createElement("div");
        projectCard.classList.add("card");

        projectCard.innerHTML = `
            <img src="${project.image}" alt="${project.title}" />
            <div class="card-content">
              <div class="card-title">${project.title}</div>
              <div class="card-description">${project.description}</div>
              <a href="${project.github}" class="card-link">
                View on Github
                <i class="fas fa-arrow-right" style="font-size: 20px; margin-left: 8px"></i>
              </a>
            </div>
          `;

        projectsContainer.appendChild(projectCard);
      });
    })
    .catch((error) => console.error("Error loading projects:", error));
});
