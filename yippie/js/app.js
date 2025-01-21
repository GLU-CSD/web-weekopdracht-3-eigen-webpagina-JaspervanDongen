document.addEventListener('DOMContentLoaded', function() {
    // Select elements
    const createProjectForm = document.getElementById('createProjectForm');
    const projectNameInput = document.getElementById('projectName');
    const projectDescriptionInput = document.getElementById('projectDescription');
    const projectsList = document.getElementById('projectsList');

    // Load existing projects from localStorage
    function loadProjects() {
        const projects = JSON.parse(localStorage.getItem('projects')) || [];
        projectsList.innerHTML = '';  // Clear existing list
        projects.forEach(project => {
            const projectItem = document.createElement('li');
            projectItem.textContent = `${project.name}: ${project.description}`;
            projectItem.addEventListener('click', () => openProject(project));
            projectsList.appendChild(projectItem);
        });
    }

    // Open project - Navigate to project-specific page (you can change this behavior)
    function openProject(project) {
        alert(`Opening project: ${project.name}`);
        // You can set up routing to specific project pages here
        // For now, just log to console
        console.log('Opening project:', project);
        // Optionally, store the project in localStorage or sessionStorage to load later
        localStorage.setItem('currentProject', JSON.stringify(project));
        // Navigate to project management page (implement this as needed)
        window.location.href = `project.html?project=${project.name}`;
    }

    // Add new project
    createProjectForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const projectName = projectNameInput.value;
        const projectDescription = projectDescriptionInput.value;

        if (projectName && projectDescription) {
            const newProject = { name: projectName, description: projectDescription };
            let projects = JSON.parse(localStorage.getItem('projects')) || [];
            projects.push(newProject);
            localStorage.setItem('projects', JSON.stringify(projects));

            // Clear form inputs
            projectNameInput.value = '';
            projectDescriptionInput.value = '';

            // Reload projects list
            loadProjects();
        }
    });

    // Initial load of projects
    loadProjects();
});



document.addEventListener('DOMContentLoaded', function() {
    const chapterForm = document.getElementById('chapterForm');
    const chapterTitleInput = document.getElementById('chapterTitle');
    const chapterList = document.getElementById('chapterList');
    const goalForm = document.getElementById('goalForm');
    const goalDescriptionInput = document.getElementById('goalDescription');
    const goalList = document.getElementById('goalList');

    // Add chapter
    chapterForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const chapterTitle = chapterTitleInput.value;

        if (chapterTitle) {
            const chapterItem = document.createElement('li');
            chapterItem.textContent = chapterTitle;
            chapterList.appendChild(chapterItem);
            chapterTitleInput.value = '';
        }
    });

    // Add goal
    goalForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const goalDescription = goalDescriptionInput.value;

        if (goalDescription) {
            const goalItem = document.createElement('li');
            goalItem.textContent = goalDescription;
            goalList.appendChild(goalItem);
            goalDescriptionInput.value = '';
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const eventForm = document.getElementById('eventForm');
    const eventTitleInput = document.getElementById('eventTitle');
    const eventDateInput = document.getElementById('eventDate');
    const eventList = document.getElementById('eventList');

    // Add event
    eventForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const eventTitle = eventTitleInput.value;
        const eventDate = eventDateInput.value;

        if (eventTitle && eventDate) {
            const eventItem = document.createElement('li');
            eventItem.textContent = `${eventTitle} - ${eventDate}`;
            eventList.appendChild(eventItem);

            eventTitleInput.value = '';
            eventDateInput.value = '';
        }
    });
});

