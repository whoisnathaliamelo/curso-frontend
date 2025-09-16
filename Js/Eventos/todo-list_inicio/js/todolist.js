(function () {
  "use strict";

  // =========================
  // CONSTRUTOR: Task
  // =========================
  function Task(name, completed, createdAt, updatedAt) {
    if (!name || typeof name !== "string") {
      throw new Error("Task precisa de um nome (string).");
    }

    // completed: default false se não for boolean
    this.completed = typeof completed === "boolean" ? completed : false;

    // createdAt: timestamp numérico; default = agora
    this.createdAt =
      typeof createdAt === "number" && !Number.isNaN(createdAt)
        ? createdAt
        : Date.now();

    // updatedAt: timestamp ou null; default = null
    this.updatedAt =
      typeof updatedAt === "number" && !Number.isNaN(updatedAt)
        ? updatedAt
        : null;

    this.name = name;

    // inverte o estado de concluída e atualiza updatedAt
    this.toggleDone = () => {
      this.completed = !this.completed;
      this.updatedAt = Date.now();
    };
  }

  // Dados iniciais (literais)
  let arrTasks = [
    {
      name: "task 1",
      completed: true,
      createdAt: 1592667375012,
      updatedAt: null,
    },
    {
      name: "task 2",
      createdAt: 1581667345723,
      updatedAt: 1592667325018,
    },
    {
      name: "task 3",
      completed: true,
      createdAt: 1592667355018,
      updatedAt: 1593677457010,
    },
  ];

  // Transforma literais em instâncias de Task
  const arrInstancesTasks = arrTasks.map(
    (t) => new Task(t.name, t.completed, t.createdAt, t.updatedAt)
  );

  // ====== DOM ======
  const itemInput = document.getElementById("item-input");
  const todoAddForm = document.getElementById("todo-add");
  const ul = document.getElementById("todo-list");
  const lis = ul.getElementsByTagName("li");

  function generateLiTask(obj) {
    const li = document.createElement("li");
    const p = document.createElement("p");
    const checkButton = document.createElement("button");
    const editButton = document.createElement("i");
    const deleteButton = document.createElement("i");

    li.className = "todo-item";

    checkButton.className = "button-check";
    checkButton.innerHTML = `
              <i class="fas fa-check ${
                obj.completed ? "" : "displayNone"
              }" data-action="checkButton"></i>`;
    checkButton.setAttribute("data-action", "checkButton");

    li.appendChild(checkButton);

    p.className = "task-name";
    p.textContent = obj.name;
    li.appendChild(p);

    editButton.className = "fas fa-edit";
    editButton.setAttribute("data-action", "editButton");
    li.appendChild(editButton);

    const containerEdit = document.createElement("div");
    containerEdit.className = "editContainer";
    const inputEdit = document.createElement("input");
    inputEdit.setAttribute("type", "text");
    inputEdit.className = "editInput";
    inputEdit.value = obj.name;

    containerEdit.appendChild(inputEdit);
    const containerEditButton = document.createElement("button");
    containerEditButton.className = "editButton";
    containerEditButton.textContent = "Edit";
    containerEditButton.setAttribute("data-action", "containerEditButton");
    containerEdit.appendChild(containerEditButton);
    const containerCancelButton = document.createElement("button");
    containerCancelButton.className = "cancelButton";
    containerCancelButton.textContent = "Cancel";
    containerCancelButton.setAttribute("data-action", "containerCancelButton");
    containerEdit.appendChild(containerCancelButton);

    li.appendChild(containerEdit);

    deleteButton.className = "fas fa-trash-alt";
    deleteButton.setAttribute("data-action", "deleteButton");
    li.appendChild(deleteButton);

    return li;
  }

  function renderTasks() {
    ul.innerHTML = "";
    arrInstancesTasks.forEach((taskObj) => {
      ul.appendChild(generateLiTask(taskObj));
    });
  }

  function addTask(taskName) {
    const name = String(taskName || "").trim();
    if (!name) return; // não adiciona vazio
    // adiciona nova instância de Task
    arrInstancesTasks.push(new Task(name));
    renderTasks();
  }

  function clickedUl(e) {
    const dataAction = e.target.getAttribute("data-action");
    if (!dataAction) return;

    let currentLi = e.target;
    while (currentLi && currentLi.nodeName !== "LI") {
      currentLi = currentLi.parentElement;
    }
    if (!currentLi) return;

    const currentLiIndex = [...lis].indexOf(currentLi);

    const actions = {
      editButton: function () {
        const editContainer = currentLi.querySelector(".editContainer");

        [...ul.querySelectorAll(".editContainer")].forEach((container) => {
          container.removeAttribute("style");
        });

        editContainer.style.display = "flex";
      },
      deleteButton: function () {
        arrInstancesTasks.splice(currentLiIndex, 1);
        renderTasks();
      },
      containerEditButton: function () {
        const val = currentLi.querySelector(".editInput").value.trim();
        if (val) {
          arrInstancesTasks[currentLiIndex].name = val;
          arrInstancesTasks[currentLiIndex].updatedAt = Date.now();
        }
        renderTasks();
      },
      containerCancelButton: function () {
        currentLi.querySelector(".editContainer").removeAttribute("style");
        currentLi.querySelector(".editInput").value =
          arrInstancesTasks[currentLiIndex].name;
      },
      checkButton: function () {
        // usa o método toggleDone da instância correta
        arrInstancesTasks[currentLiIndex].toggleDone();
        renderTasks();
      },
    };

    if (actions[dataAction]) {
      actions[dataAction]();
    }
  }

  todoAddForm.addEventListener("submit", function (e) {
    e.preventDefault();
    addTask(itemInput.value);
    itemInput.value = "";
    itemInput.focus();
  });

  ul.addEventListener("click", clickedUl);

  renderTasks();
})();
