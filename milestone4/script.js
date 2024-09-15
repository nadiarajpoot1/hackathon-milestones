// Get references to the form and display area...
var form = document.getElementById('resume-form');
var resumeDisplayElement = document.getElementById('resume-display');
// Handle form submission
form.addEventListener('submit', function (event) {
    event.preventDefault(); //prevent page reload
    //Collect input values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    // Generate the resume content dynamically
    var resumeHTML = "\n       <h2><b><i> Editable Resume</i></b></h2>\n       <h3>Personal Information</h3>\n       <p><b><i>Name:</i></b><span contenteditable=\"true\">".concat(name, "</span></p>\n       <p><b><i>email:</i></b><span contenteditable=\"true\">").concat(email, "</span></p>\n       <p><b><i>phone:</i></b><span contenteditable=\"true\">").concat(phone, "</span></p>\n     \n       <h3>Education</h3>\n       <p contenteditable=\"true\">").concat(education, "</p>\n\n       <h3>Experience</h3>\n       <p contenteditable=\"true\">").concat(experience, "</p>\n\n       <h3>Skills</h3>\n       <p contenteditable=\"true\">").concat(skills, "</p>\n       ");
    //Display the generated resume
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHTML;
    }
    else {
        console.error('The resume Display element is missing...');
    }
});
