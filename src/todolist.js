document.addEventListener("DOMContentLoaded", function () {
  const taskTitleInput = document.getElementById("task-title");
  const taskDetailsInput = document.getElementById("task-details");
  const addTaskBtn = document.getElementById("btn-store");
  const taskList = document.getElementById("taks-list");

  addTaskBtn.addEventListener("click", function (event) {
    event.preventDefault();

    const taskTitle = taskTitleInput.value.trim();
    const taskDetails = taskDetailsInput.value.trim();

    if (taskTitle !== "" && taskDetails !== "") {
      const listItem = document.createElement("div");
      listItem.className =
        "list-group-item mb-2 flex-column align-items-start bg-dark text-white border-info-subtle form-check";

      const titleElement = document.createElement("h5");
      titleElement.className = "mb-1";
      titleElement.textContent = taskTitle;

      const detailsElement = document.createElement("p");
      detailsElement.className = "mb-1 py-4";
      detailsElement.textContent = taskDetails;

      const editBtn = document.createElement("button");
      editBtn.className = "btn btn-secondary";
      editBtn.textContent = "Editar";
      editBtn.addEventListener("click", function () {
        const newTaskTitle = prompt("Editar título:", taskTitle);
        const newTaskDetails = prompt("Editar detalhes:", taskDetails);
        if (newTaskTitle !== null && newTaskDetails !== null) {
          titleElement.textContent = newTaskTitle;
          detailsElement.textContent = newTaskDetails;
        }
      });

      const removeBtn = document.createElement("button");
      removeBtn.className = "btn btn-secondary m-2";
      removeBtn.textContent = "Remover";
      removeBtn.addEventListener("click", function () {
        listItem.classList.add("animate__animated", "animate__backOutDown");
        setTimeout(function () {
          listItem.remove();
        }, 1000);
      });

      const switchContainer = document.createElement("div");
      switchContainer.className = "mt-3 float-end";
      const switchLabel = document.createElement("label");
      switchLabel.className = "form-check-label";
      switchLabel.textContent = "Feito";
      const switchBtn = document.createElement("input");
      switchBtn.className = "p-2 form-check-input form-switch";
      switchBtn.setAttribute("type", "checkbox");
      switchBtn.setAttribute("role", "switch");
      switchBtn.setAttribute("id", "flexSwitchCheckDefault");

      switchContainer.appendChild(switchLabel);
      switchContainer.appendChild(switchBtn);

      listItem.appendChild(titleElement);
      listItem.appendChild(detailsElement);
      listItem.appendChild(editBtn);
      listItem.appendChild(removeBtn);
      listItem.appendChild(switchContainer);

      taskList.appendChild(listItem);

      taskTitleInput.value = "";
      taskDetailsInput.value = "";
    } else {
      alert("Por favor, preencha todos os campos.");
    }
  });
});
