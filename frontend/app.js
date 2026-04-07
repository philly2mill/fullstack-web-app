const baseURL = "http://localhost:5000/api/items";

const itemList = document.getElementById("item-list");
const addBtn = document.getElementById("add-btn");

let editMode = false;
let editId = null;

// 🔹 Fetch and display items
function fetchItems() {
  fetch(baseURL)
    .then(res => res.json())
    .then(items => {
      console.log("Items:", items); // Debug

      itemList.innerHTML = "";

      items.forEach(item => {
        const li = document.createElement("li");

        // Item text
        const text = document.createElement("span");
        text.textContent = `${item.name} - ${item.value}`;

        // Edit button
        const editBtn = document.createElement("button");
        editBtn.textContent = "Edit";
        editBtn.style.marginLeft = "10px";
        editBtn.onclick = () => startEdit(item);

        // Delete button
        const delBtn = document.createElement("button");
        delBtn.textContent = "Delete";
        delBtn.style.marginLeft = "5px";
        delBtn.onclick = () => deleteItem(item.id); // ✅ using id

        // Append elements
        li.appendChild(text);
        li.appendChild(editBtn);
        li.appendChild(delBtn);

        itemList.appendChild(li);
      });
    })
    .catch(err => console.error("Fetch error:", err));
}

// 🔹 Add or Update item
function addItem() {
  const name = document.getElementById("item-name").value;
  const value = document.getElementById("item-value").value;

  if (!name || !value) {
    alert("Please enter both name and value!");
    return;
  }

  const method = editMode ? "PUT" : "POST";
  const url = editMode ? `${baseURL}/${editId}` : baseURL;

  fetch(url, {
    method: method,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, value })
  })
    .then(() => {
      // Reset form
      document.getElementById("item-name").value = "";
      document.getElementById("item-value").value = "";

      editMode = false;
      editId = null;
      addBtn.textContent = "Add Item";

      fetchItems();
    })
    .catch(err => console.error("Add/Edit error:", err));
}

// 🔹 Start editing
function startEdit(item) {
  editMode = true;
  editId = item.id; // ✅ using id

  document.getElementById("item-name").value = item.name;
  document.getElementById("item-value").value = item.value;

  addBtn.textContent = "Update Item";
}

// 🔹 Delete item
function deleteItem(id) {
  fetch(`${baseURL}/${id}`, {
    method: "DELETE"
  })
    .then(() => fetchItems())
    .catch(err => console.error("Delete error:", err));
}

// 🔹 Event listener
addBtn.addEventListener("click", addItem);

// 🔹 Initial load
fetchItems();