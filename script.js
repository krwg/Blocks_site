//  вкладки  "Вход"  и  "Регистрация"
const authTabs = document.querySelectorAll('.auth-tab');
const authForms = document.querySelectorAll('.auth-form');

authTabs.forEach(tab => {
    tab.addEventListener('click', () => {
        authTabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        const tabId = tab.dataset.tab;
        authForms.forEach(form => form.classList.remove('active'));
        document.getElementById(tabId).classList.add('active');
    });
});

//   добавление и  удаления  поставщиков  на  странице  "Приемка  товаров"
const addSupplierButton = document.getElementById('add-supplier');
const supplierSelect = document.getElementById('supplier');

function addSupplier() {
    const newSupplierName = prompt('Введите имя нового поставщика:');

    if (newSupplierName) {
        const newOption = document.createElement('option');
        newOption.value = newSupplierName;
        newOption.text = newSupplierName;
        supplierSelect.add(newOption);
    }
}

function deleteSupplier() {
    const selectedIndex = supplierSelect.selectedIndex;

    if (selectedIndex > 0) { 
        supplierSelect.remove(selectedIndex);
    }
}

addSupplierButton.addEventListener('click', addSupplier);
supplierSelect.addEventListener('change', deleteSupplier); 

//  добавление товаров  на  странице  "Приемка  товаров"
const itemsSelect = document.getElementById('items');

function addItem() {
    const newItemName = prompt('Введите имя нового товара:');

    if (newItemName) {
        const newOption = document.createElement('option');
        newOption.value = newItemName;
        newOption.text = newItemName;
        itemsSelect.add(newOption);
    }
}

itemsSelect.addEventListener('change', addItem); 

//   принятие  и  удаления  заказов  на  странице  "Мои  заказы"
function acceptOrder(orderId) {
    const orderElement = document.getElementById(orderId);

    if (orderElement) {
        const acceptButton = orderElement.querySelector('.accept-button');
        acceptButton.disabled = true;
        acceptButton.textContent = 'Принято';
    }
}

function deleteOrder(orderId) {
    const orderElement = document.getElementById(orderId);

    if (orderElement) {
        orderElement.remove();
    }
}

const acceptButtons = document.querySelectorAll('.accept-button');
const deleteButtons = document.querySelectorAll('.delete-button');

acceptButtons.forEach(button => {
    button.addEventListener('click', () => {
        acceptOrder(button.dataset.orderId);
    });
});

deleteButtons.forEach(button => {
    button.addEventListener('click', () => {
        deleteOrder(button.dataset.orderId);
    });
});

const documentSelect = document.getElementById('document');
const printForm = document.getElementById('print-form');
const printPdfButton = document.getElementById('print-pdf');

function printDocument() {
    const selectedDocument = documentSelect.value;
    const copies = document.getElementById('copies').value;

    if (selectedDocument) {
        //  в реальном  приложении  здесь  должна  быть  логика  печати  документа 
        alert(`Печать документа ${selectedDocument} в количестве ${copies} копий`);
    }
}

function saveToPdf() {
    const selectedDocument = documentSelect.value;

    if (selectedDocument) {
        // в реальном  приложении  здесь  должна  быть  логика  сохранения  в  PDF  (например,  использование  библиотеки  jsPDF)
        alert(`Сохранение документа ${selectedDocument} в PDF`);
    }
}

printForm.addEventListener('submit', (event) => {
    event.preventDefault(); 
    printDocument();
});

printPdfButton.addEventListener('click', saveToPdf); 

//  код  для  динамического  добавления  документов  в  список
const documentsList = document.getElementById('documents-list');

function addDocument(documentName) {
    const newListItem = document.createElement('li');
    const newLink = document.createElement('a');
    newLink.href = '#';
    newLink.textContent = documentName;
    newListItem.appendChild(newLink);
    documentsList.appendChild(newListItem);

    //  добавляем  документ  в  `select`  для  печати документа
    const newOption = document.createElement('option');
    newOption.value = documentName;
    newOption.text = documentName;
    documentSelect.add(newOption);
}

//  пример  добавления  нового  документа 
addDocument('Новый документ');

//   смена пароля
const settingsForm = document.getElementById('settings-form');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirm-password');
const messageElement = document.getElementById('message');

settingsForm.addEventListener('submit', (event) => {
    event.preventDefault(); 
    const newPassword = passwordInput.value;
    const confirmPassword = confirmPasswordInput.value;

    if (newPassword === confirmPassword) {
        //  в реальном  приложении  здесь  должна  быть  логика  смены  пароля
        messageElement.textContent = 'Пароль успешно изменен!';
        passwordInput.value = '';
        confirmPasswordInput.value = '';
    } else {
        messageElement.textContent = 'Пароли не совпадают!';
    }
});