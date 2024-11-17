const todoList = document.getElementById('todo-list');
const chocolateItemInput = document.getElementById('chocolate-item');

// Load saved items from local storage
const loadItems = () => {
    const items = JSON.parse(localStorage.getItem('chocolateOrders')) || [];
    todoList.innerHTML = '';
    items.forEach((item, index) => {
        const li = document.createElement('li');
        li.textContent = item;
        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        removeBtn.onclick = () => removeItem(index);
        li.appendChild(removeBtn);
        todoList.appendChild(li);
    });
}

// Add new item
const addItem = () => {
    const itemText = chocolateItemInput.value.trim();
    if (itemText) {
        const items = JSON.parse(localStorage.getItem('chocolateOrders')) || [];
        items.push(itemText);
        localStorage.setItem('chocolateOrders', JSON.stringify(items));
        chocolateItemInput.value = '';
        loadItems();
    }
}

// Remove item
const removeItem = (index) => {
    const items = JSON.parse(localStorage.getItem('chocolateOrders')) || [];
    items.splice(index, 1);
    localStorage.setItem('chocolateOrders', JSON.stringify(items));
    loadItems();
}

// Initial load of items
loadItems();
