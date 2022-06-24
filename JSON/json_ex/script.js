var a = "hello world";

var student = {
    "name": "umair",
    "degree": "BE",
    "rollno": "12345",
    "subjects": [
        "Computer Vision",
        "Microcontrollers",
        "Image Processing"
    ],
    "projects": [
        {AI: "robotic car"},
        {image_processing: "face detector"},
    ]
};

// Adding a property
student.phone = "23423";

console.log("Adding a property");
console.log(student);

// Deleting a property
delete(student.degree);

console.log("Deleting a property");
console.log(student);

// For deleting an array element it's preferrable to use slice instead of delete
student.subjects.splice(1, 1);

console.log("Deleting an array element");
console.log(student);

console.log("Accessing objects");
console.log(student.projects);

console.log("Printing the key value pairs");
for(var i = 0; i <= student.projects.length; i++) {
    // Iterating through the key-value pairs
    for(key in student.projects[i]) {
        console.log(key);
    }
}

// Fetching data with AJAX

var xhr = new XMLHttpRequest();
xhr.open('GET', 'employees.json');

xhr.onreadystatechange = function() {
    if(xhr.readyState === 4) {
        if(xhr.status === 200) {
            var employees1 = JSON.parse(xhr.responseText);
            var html1 = "<ul>";
            for(var i = 0; i < employees1.length; i++) {
                html1 += "<li>" + employees1[i].name + "</li>";
            }
            html1 += "</ul>";

            document.getElementById("employees1").innerHTML = html1;
        }
    }
};

xhr.send();

$(document).ready(function() {
    $.getJSON("employees.json", function(data) {
        var html2 = "<ul>";
        $.each(data, function(index, employee) {
            html2 += "<li>" + employee.name + "</li>";
        });
        html2 += "</ul>";
    
        document.getElementById("employees2").innerHTML = html2;
    });
});
