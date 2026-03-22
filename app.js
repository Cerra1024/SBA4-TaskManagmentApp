let task = [];

const taskNameInput = document.getElementById("taskName");
const categoryInput = document.getElementById("category");
const deadlineInput = document.getElementById("deadline");
const statusInput = document.getElementById("status");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

addTaskBtn.addEventListener("click," addTask);

function addTask() {
    const name = taskNameInput.value;
    const category = categoryInput.value;
    const deadline = deadlineInput.value;
    const status = statusInput.value;

    if (name === "" || category === "" || deadline === "") {
        alert("Please fil in all fields");
        return;
    }

    const task == {
        name: name,
        catergory: category,
        deadline: deadline,
        status status
    };
}