var students = [];

function addStudent(event) {
    event.preventDefault();

    var nameInput = document.getElementById("name");
    var ageInput = document.getElementById("age");
    var name = nameInput.value;
    var age = parseInt(ageInput.value);

    var existingStudent = students.find(function (student) {
        return student.name === name;
    });

    if (existingStudent) {
        alert("Žák již existuje!");
        return;
    }

    var student = {
        name: name,
        age: age
    };

    students.push(student);

    var studentItem = document.createElement("li");
    studentItem.textContent = name + " (" + age + " let)";

    var studentList = document.getElementById("studentList");
    studentList.appendChild(studentItem);

    nameInput.value = "";
    ageInput.value = "";
}

function deleteStudent(event) {
    var studentName = event.target.getAttribute("data-name");

    var studentIndex = students.findIndex(function (student) {
        return student.name === studentName;
    });

    if (studentIndex === -1) {
        alert("Žák nebyl nalezen!");
        return;
    }

    students.splice(studentIndex, 1);

    var studentList = document.getElementById("studentList");
    studentList.removeChild(event.target.parentNode);
}

function createDeleteButton(studentName) {
    var deleteButton = document.createElement("button");
    deleteButton.textContent = "Smazat";
    deleteButton.setAttribute("data-name", studentName);
    deleteButton.addEventListener("click", deleteStudent);
    return deleteButton;
}

var studentForm = document.getElementById("studentForm");
studentForm.addEventListener("submit", addStudent);

var deleteButton = document.getElementById("deleteButton");
deleteButton.addEventListener("click", function () {
    students = [];
    var studentList = document.getElementById("studentList");
    studentList.innerHTML = "";
});

var studentList = document.getElementById("studentList");
studentList.addEventListener("click", function (event) {
    if (event.target.tagName === "BUTTON") {
        deleteStudent(event);
    }
});

function updateStudentList() {
    var studentList = document.getElementById("studentList");
    studentList.innerHTML = "";

    students.forEach(function (student) {
        var studentItem = document.createElement("li");
        studentItem.textContent = student.name + " (" + student.age + " let)";
        studentItem.appendChild(createDeleteButton(student.name));
        studentList.appendChild(studentItem);
    });
}

updateStudentList();