function addItem() {
    const newItemText = document.getElementById('new-item').value;
    if (newItemText === '') return;

    const listItem = document.createElement('li');
    const textNode = document.createTextNode(newItemText);

    const buttonsDiv = document.createElement('div');
    buttonsDiv.className = 'buttons';

    const editButton = document.createElement('button');
    editButton.innerText = 'Edit';
    editButton.onclick = () => editItem(listItem);

    const deleteButton = document.createElement('button');
    deleteButton.innerText = 'Delete';
    deleteButton.className = 'delete';
    deleteButton.onclick = () => deleteItem(listItem);

    buttonsDiv.appendChild(editButton);
    buttonsDiv.appendChild(deleteButton);

    listItem.appendChild(textNode);
    listItem.appendChild(buttonsDiv);

    document.getElementById('checklist').appendChild(listItem);
    document.getElementById('new-item').value = '';
}

function deleteItem(item) {
    item.remove();
}

function editItem(item) {
    const newText = prompt('Update the item:', item.firstChild.textContent);
    if (newText !== null && newText !== '') {
        item.firstChild.textContent = newText;
    }
}
