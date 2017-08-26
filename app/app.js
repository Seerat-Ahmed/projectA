var body = document.getElementById('container');
var loader = document.getElementById('loader');
setTimeout(function () {
    body.style.display = 'block';
    loader.style.display = 'none';
}, 200);

var home = {
    name: undefined,
    email: undefined,
    briefBio: undefined
}

var about = {
    paraOne: undefined,
    paraTwo: undefined
}

var contact = {
    name: undefined,
    email: undefined,
    phoneOne: undefined,
    phoneTwo: undefined,
    address: undefined
}


function Education(universityName, degree, year, about) {
    this.name = universityName;
    this.degree = degree;
    this.year = year;
    this.about = about;
    education.innerHTML += `<h3 class="" id="first-institute">${universityName}</h3>
                    <h4 class=""><span id="degree" class="degree">${degree}</span> • <span id="year" class="year">${year}</span></h4>
                    <p id="about-first-ins">
                        ${about}
                    </p>`;
}

function Work(workPlaceName, post, year, about) {
    this.name = workPlaceName;
    this.post = post;
    this.year = year;
    this.about = about;
    work.innerHTML += `<h3 class="" id="first-institute">${workPlaceName}</h3>
                    <h4 class="degree"><span>${post}</span> • <span class="year">${year}</span></h4>
                    <p id="about-first-ins">
                        ${about}
                    </p>`;
}

function ProgressSkills(name, progress) {
    this.name = name;
    this.progress = progress;
    skillSet.innerHTML += `<span class="skill-label">${name}</span>
                    <div class="progress">

                        <div class="progress-bar" role="progressbar" style="width: ${progress}%; height: 35px;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>`
}


function AddProject(nameId, webName, webType, webDescription, imagePath, link) {
    this.nameId = nameId;
    this.webName = webName;
    this.webDescription = webDescription;
    this.webType = webType;
    this.imagePath = imagePath;

    projects.innerHTML += `<figure class="effect-dexter" data-toggle="modal" data-target="#${nameId}">
                                <img src="${imagePath}" alt="img19" />
                                    <figcaption>
                                        <h2>${webName} <span>${webType}</span></h2>
                                        <p>${webDescription}</p>
                                    </figcaption>
                            </figure>

                            <div class="modal fade" id="${nameId}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div class="modal-dialog" role="document">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h5 class="modal-title" id="exampleModalLabel">Zipper</h5>
                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
                                        </div>
                                        <div class="modal-body">

                                            <figure style="width:100%;height: auto;" class="effect-dexter" data-toggle="modal" data-target="#exampleModal">
                                                <img src="${imagePath}" alt="img19" />
                                                <figcaption>
                                                    <h2>${webName} <span>${webType}</span></h2>
                                                    <p>${webDescription}</p>
                                                    <a href="${link}">View more</a>
                                                </figcaption>
                                            </figure>
                                        </div>
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                            <button type="button" class="btn btn-primary"><a href="${link}" target="_blank">View Project</a></button>
                                        </div>
                                    </div>
                                </div>
                            </div>`
}
/* ********************************************** Functions for home ********************************************** */

var highlight = function (word, sentence) {
    var newWord = `<span class="highlight">${word}</span>`;
    home.briefBio = sentence.replace(word, newWord);
    console.log(sentence);
}

/* ********************************************** Getting Element Of Home Page ********************************************** */

var username = document.getElementById('name-h1');
var email = document.getElementById('email-a');
var briefBio = document.getElementById('brief-bio');

var firstPara = document.getElementById('para-one');
var secondPara = document.getElementById('para-two');

var contactName = document.getElementById('name-contact');
var contactAddress = document.getElementById('address-contact');
var contactPhoneOne = document.getElementById('phoneone-contact');
var cotactPhoneTwo = document.getElementById('phonetwo-contact');
var contactEmail = document.getElementById('email-contact');

var education = document.getElementById('education');

var work = document.getElementById('work');

var skillSet = document.getElementById('skill');

var projects = document.getElementById('project');
/* ********************************************** Setting Data ********************************************** */

home.name = 'Seerat Ahmed Khan';
home.email = 'seeratahmed12@gmail.com';
home.briefBio = "I'm a Front-end Developer, Computer Science Student and Mathematics & Computer Science Teacher, Quick Learner, Tech Savy, Optimist wants to get and polish new skills to become the best in the world. Let's <a href='about'>start scrolling</a> and learn more <a href='about'>about me</a>."
highlight('Front-end Developer', home.briefBio);
highlight('Computer Science Student', home.briefBio);
highlight('Mathematics & Computer Science Teacher', home.briefBio);


about.paraOne = `Hi! My name is ${home.name}. I am a hard working, honest individual. I am a good timekeeper, always willing to learn new skills. I am friendly, helpful and polite, have a good sense of humour (May be). I am able to work independently in busy environments and also within a team setting. I am outgoing and tactful, and able to listen effectively when solving problems. An adaptable and responsible under-graduate seeking an entry-level position in web development and computer programming.`;
about.paraTwo = " During my degree I successfully combined my studies with work and other commitments showing myself to be self-motivated, organised and capable of working under pressure. I have a clear, logical mind with a practical approach to problem solving and a drive to see things through to completion. I enjoy working on my own initiative or in a team. In short, I am reliable, trustworthy, hardworking and eager to learn. So, if you hire me I'll have a opportunity to learn more and you'll never be disappointed."

contact.name = home.name;
contact.email = home.email;
contact.address = 'S-1/166, Saudabad, Malir, Karachi.';
contact.phoneOne = '+923462468856';
contact.phoneTwo = '+93410225964';

/* ********************************************** Rendering Data ********************************************** */

username.innerHTML = home.name;
email.innerHTML = home.email;
briefBio.innerHTML = home.briefBio;

firstPara.innerHTML = about.paraOne;
secondPara.innerHTML = about.paraTwo;

contactName.innerHTML = contact.name;
contactEmail.innerHTML = contact.email;
contactAddress.innerHTML = contact.address;
contactPhoneOne.innerHTML = contact.phoneOne;
cotactPhoneTwo.innerHTML = contact.phoneTwo;

var educationOne = new Education('University of Karachi - UBIT', 'Bachelors in Computer Science (BSCS)', 'Continued - 4th Semester', "I'm doing my Bachelors from University of Karachi, Department of Computer Science, UBIT. During my past four semesters, I've learn alot and gain alot of knowledge, making many projects, gave presentations, this is the best institute. I've learn under many genius, polite teachers. So I want to be enterpreneur and a professor after completing my bachelors.")
var educationTwo = new Education('S.M. Govt. Science College', 'Intermediate, Pre-engineering', 'April 2015', "I've completed my Intermediate in Pre-engineering from the Sindh Muslim Govt. Science College with A grade.")
var educationTwo = new Education('Comprehensive Model School', 'Matriculation, Computer Science', 'April 2013', "I've completed my Matriculation in Computer Science from the Comprehensive Model School.")

var workOne = new Work('University of Karachi - UBIT', 'Bachelors in Computer Science (BSCS)', 'Continued - 4th Semester', "I'm doing my Bachelors from University of Karachi, Department of Computer Science, UBIT. During my past four semesters, I've learn alot and gain alot of knowledge, making many projects, gave presentations, this is the best institute. I've learn under many genius, polite teachers. So I want to be enterpreneur and a professor after completing my bachelors.")

var progressOne = new ProgressSkills('HTML5', 80);
var progressTwo = new ProgressSkills('CSS3', 65);
var progressThree = new ProgressSkills('JavaScript', 70);
var progressFour = new ProgressSkills('Angular 2', 20);
var progressFive = new ProgressSkills('Github', 50);
var progressSix = new ProgressSkills('Firebase', 60);
var progressSeven = new ProgressSkills('C', 70);
var progressEight = new ProgressSkills('C#', 70);
var progressNine = new ProgressSkills('SQLite', 70);

var projectOne = new AddProject('todo', 'Todo', 'Application', 'Just write, manage and remember', 'images/21.jpg', 'https://todoapplication-490b4.firebaseapp.com/');
var projectTwo = new AddProject('zipper', 'Zipper', 'Website', 'Zipper is a non-responsive website. Working on making it responsive', 'images/18.jpg','https://zipper-a457d.firebaseapp.com/');
var projectTwo = new AddProject('steakhouse', 'Steak House', 'Website', 'Steak house is a website of a hotel. Working on making it responsive', 'images/22.jpg', 'https://project-01-d52f1.firebaseapp.com/');




































