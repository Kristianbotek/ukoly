function addItem(listId) {
    const textarea = document.getElementById(listId);
    const item = textarea.value.trim();
    if (item !== "") {
        const list = JSON.parse(localStorage.getItem(listId)) || [];
        list.push({ name: item, checked: false });
        localStorage.setItem(listId, JSON.stringify(list));
        textarea.value = "";
        displayItems(listId);
    }
}

function displayItems(listId) {
    const list = JSON.parse(localStorage.getItem(listId)) || [];
    const listContainer = document.getElementById(`shopping-list${listId.slice(-1)}`);
    listContainer.innerHTML = "";
    list.forEach((item, index) => {
        const li = document.createElement("li");
        li.innerHTML = `
            <input type="checkbox" id="${listId}-item-${index}" ${item.checked ? 'checked' : ''} onclick="toggleItem('${listId}', ${index})">
            <label for="${listId}-item-${index}">${item.name}</label>
            <button onclick="deleteItem('${listId}', ${index})">Smazat</button>
        `;
        listContainer.appendChild(li);
    });
}

function toggleItem(listId, index) {
    const list = JSON.parse(localStorage.getItem(listId)) || [];
    list[index].checked = !list[index].checked;
    localStorage.setItem(listId, JSON.stringify(list));
}

function deleteItem(listId, index) {
    const list = JSON.parse(localStorage.getItem(listId)) || [];
    list.splice(index, 1);
    localStorage.setItem(listId, JSON.stringify(list));
    displayItems(listId);
}

displayItems('list1');
displayItems('list2');