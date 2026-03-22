let tasks = [];

const taskNameInput = document.getElementById("taskName");
const categoryInput = document.getElementById("category");
const deadlineInput = document.getElementById("deadline");
const statusInput = document.getElementById("status");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

addTaskBtn.addEventListener("click", addTask);

function addTask() {
    const name = taskNameInput.value;
    const category = categoryInput.value;
    const deadline = deadlineInput.value;
    const status = statusInput.value;

    if (name === "" || category === "" || deadline === "") {
        alert("Please fil in all fields");
        return;
    }

    const task = {
        name: name,
        category: category,
        deadline: deadline,
        status: status
    };

    tasks.push(task);

    renderTasks();
    clearInputs();

}

    function clearInputs() {
        taskNameInput.value = "";
        categoryInput.value = "";
        deadlineInput.value = "";
        statusInput.value = "In Progress";
    }

    function renderTasks() {
        taskList.innerHTML = "";

        tasks.forEach((task,index) => {
            const row = document.createElement("tr");

            row.innerHTML = `
            <td>${task.name}</td>
            <td>${task.category}</td>
            <td>${task.deadline}</td>
            <td>${task.status}</td>
            <td>
                <button onclick="deleteTask(${index})">Delete</button>
                </td> `;

            taskList.appendChild(row);

        });

    }

function deleteTask(index) {
    tasks.splice(index, 1);
    renderTasks();
}