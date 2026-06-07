fetch("http://localhost:5000/allProjects")
.then(response => response.json())
.then(data => {

    let container =
    document.getElementById("projectContainer");

    data.forEach(project => {

        container.innerHTML += `
            <div class="project-card">
                <h3>${project.project_name}</h3>
                <p>${project.description}</p>
                <small>${project.tech_stack}</small>
            </div>
        `;

    });

})
.catch(error => {
    console.log(error);
});
