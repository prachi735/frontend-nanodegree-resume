var bio;
bio = {
    "name": "Prachi Singh",
    "role": "Web Developer",
    "contacts": {
        "mobile": "+91 8105 355261",
        "email": "prachi735@gmail.com",
        "github": "Prachi735",
        "twitter": "@prachi735",
        "location": "Bangalore"
    },
    "welcomeMessage": "",//TODO: add message
    "skills": ["html", "css", "javascript", "jquery", "bootstrap", "angular.js", "node.js", "SharePoint", "SQL Server"],
    "bioPic": "images/img.jpg",
    "display": function () {
        var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);

        var formattedName = HTMLheaderName.replace('%data%', bio.name);
        var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
        $("#header").prepend(formattedRole).prepend(formattedName);
        $("#header").prepend(formattedBioPic);
        var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
        var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
        var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
        var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
        var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
        var formattedWelcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);


        $("#topContacts").append(formattedMobile)
            .append(formattedEmail)
            .append(formattedGithub)
            .append(formattedTwitter)
            .append(location);


        $("#header").append(HTMLskillsStart);
        for (skill in bio.skills) {
            var formattedSkills = HTMLskills.replace("%data%", bio.skills[skill]);
            $("#skills").append(formattedSkills);
        }

        $("#footerContacts").append(formattedMobile)
            .append(formattedEmail)
            .append(formattedGithub)
            .append(formattedTwitter)
            .append(location);

    }
};

var education = {
    "schools": [
        {
            "name": "Pranveer Singh Institute of Technology",
            "location": "Kanpur",
            "degree": "B.Tech",
            "majors": "Computer Science & Engineering",
            "dates": "2007-2011",
            "url": "http://www.psitcoe.ac.in/"
        }
    ],
    "onlineCourses": [{
        "title": "Front-End Web Developer Nanodegree",
        "school": "Udacity.com",
        "dates": "2015",
        "url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
    },
        {
            "title": "An Introduction to Interactive Programming in Python",
            "school": "Coursera.org",
            "dates": "2013",
            "url": "https://www.coursera.org/account/accomplishments/verify/DF7FRD29JB"
        }
    ],
    "display": function () {
        for (item in education.schools) {
            $("#education").append(HTMLschoolStart);
            var formattedName = HTMLschoolName.replace("%data%", education.schools[item].name).replace("#", education.schools[item].url);
            var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[item].location);
            var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[item].degree);
            var formattedMajors = HTMLschoolMajor.replace("%data%", education.schools[item].majors);
            var formattedDates = HTMLschoolDates.replace("%data%", education.schools[item].dates);

            $(".education-entry:last").append(formattedName)
                .append(formattedLocation)
                .append(formattedDegree)
                .append(formattedMajors)
                .append(formattedDates);
        }
        $(".education-entry:last").append(HTMLonlineClasses);
        for (item in education.onlineCourses) {
            var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[item].title).replace("#", education.onlineCourses[item].url);
            var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[item].school);
            var formattedDates = HTMLonlineDates.replace("%data%", education.onlineCourses[item].dates);
            $(".education-entry:last").append(formattedTitle)
                .append(formattedDates)
                .append(formattedSchool);
        }
    },
    "addToNav": function () {
        if (education.schools.length > 0 || education.onlineCourses.length > 0) {
            var formattedNav = HTMLnavListLi.replace("%dataTitle%", "Education").replace("%dataLoc%", "#education");
            $("#navList").append(formattedNav);
        }
    }
};

var work = {
    "jobs": [
        {
            "employer": "Edge Verve Systems",
            "title": "Technology Analyst",
            "location": "Bangalore, IN",
            "dates": "Aug 2015 - Current",
            "description": "My work is to provide technical support to the Unit Planning and Assurance Management team. It involves the following task:\
                * Designing and developing dashboard SharePoint 2013 & SQL Server Technologies.\
                * Database development and maintenance on SQL Server 2012.\
                * SharePoint 2013 Administration.\
                * Development and maintenance of custom solutions for SharePoint 2013 sites using Visual Studio and \
                * Automation of reports and dashboards.\
                * Create visualizations and building dashboards using Tableau.\
                "
        },
        {
            "employer": "Infosys Limited",
            "title": "Technology Analyst",
            "location": "Bangalore, IN",
            "dates": "Jan 2015 - Jul 2015",
            "description": "My work is to provide technical support to the Unit Planning and Assurance Management team. It involves the following task:\
                * Designing and developing dashboard SharePoint 2013 & SQL Server Technologies.\
                * Database development and maintenance on SQL Server 2012.\
                * SharePoint 2013 Administration.\
                * Development and maintenance of custom solutions for SharePoint 2013 sites using Visual Studio and \
                * Automation of reports and dashboards."
        },
        {
            "employer": "Infosys Limited",
            "title": "System Developer",
            "location": "Bangalore, IN",
            "dates": "Jul 2011 - Dec 2014",
            "description": "My work is to provide technical support to the Unit Planning and Assurance Management team. It involves the following task:\
                * Understand the working of the team and provide them with technical solutions and support.\
                * Designing and developing dashboard using SQL Server analysis service, integration service and reporting service.\
                * Database development and maintenance on SQL Server 2008 R2.\
                * Development and maintenance of SharePoint sites (on SharePoint 2010, 2007 and 2003) using Visual Studio and SharePoint designer\
                * Configuration and administration of SharePoint 2010 Server.\
                * Upgrading of SharePoint sites from 2007 to 2010 version\
                * Documentation (SRS, Design Document, Test Cases, User Help)\
                * Take backup of and restore the systems (SharePoint sites and SQL Server database)"
        }
    ],
    "display": function displayWork() {
        for (item in work.jobs) {
            $("#workExperience").append(HTMLworkStart);
            var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[item].employer);
            var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[item].title);
            var formattedEmployerTitle = formattedEmployer + formattedTitle;
            var formattedDates = HTMLworkDates.replace("%data%", work.jobs[item].dates);
            var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[item].location);
            var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[item].description);

            $(".work-entry:last").append(formattedEmployerTitle)
                .append(formattedDates)
                .append(formattedLocation)
                .append(formattedDescription);
        }
    },
    "addToNav": function () {
        if (work.jobs.length > 0) {
            var formattedNav = HTMLnavListLi.replace("%dataTitle%", "Work Experience").replace("%dataLoc%", "#workExperience");
            $("#navList").append(formattedNav);
        }
    }
};

var projects = {
    projects: [{
        "title": "Online Interactive Resume",
        "dates": "Dec 2015",
        "description": "The project dynamically builds a resume using javascript, html & css. It also embeds a google map.",
        "imagesSrc": ["images/frontend-nanodegree-resume-1.png", "images/frontend-nanodegree-resume-2.png", , "images/frontend-nanodegree-resume-3.png"],
        "smallImagesSrc": ["images/frontend-nanodegree-resume-1-100x.png", "images/frontend-nanodegree-resume-2-100x.png", , "images/frontend-nanodegree-resume-3-100x.png"]
    },
        {
            "title": "Online Interactive Resume",
            "dates": "Dec 2015",
            "description": "The project dynamically builds a resume using javascript, html & css. It also embeds a google map.",
            "imagesSrc": ["images/frontend-nanodegree-resume-1.png", "images/frontend-nanodegree-resume-2.png", , "images/frontend-nanodegree-resume-3.png"],
            "smallImagesSrc": ["images/frontend-nanodegree-resume-1-100x.png", "images/frontend-nanodegree-resume-2-100x.png", , "images/frontend-nanodegree-resume-3-100x.png"]
        }
    ],
    "display": function () {
        $("#projects").append(HTMLprojectStart);
        for (item in projects.projects) {
            var formattedTitle = HTMLprojectTitle.replace(/%data%/g, projects.projects[item].title);
            var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[item].dates);
            var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[item].description);
            $(".project-entry").prepend(formattedDescription)
                .prepend(formattedDates)
                .prepend(formattedTitle);

            for (itemImg in projects.projects[item].imagesSrc) {
                var formattedImage = HTMLprojectImage.replace(/%dataImg%/g, projects.projects[item].imagesSrc[itemImg]);
                formattedImage = formattedImage.replace(/%dataTitle%/g, projects.projects[item].title);
                formattedImage = formattedImage.replace(/%dataSmallImg%/g, projects.projects[item].smallImagesSrc[itemImg]);
                $(".project-images").append(formattedImage);
            }
        }
    },
    "addToNav": function () {
        if (projects.projects.length > 0) {
            var formattedNav = HTMLnavListDdl.replace("%dataTitle%", "Projects");
            $("#navList").append(formattedNav);
            for (item in projects.projects) {
                //HTMLnavListLi.replace("%dataTitle%","Work Experience").replace("%dataLoc%","#workExperience");
                console.log(projects.projects[item].title);
                var formattedNavLi = HTMLnavListLi.replace("%dataTitle%", projects.projects[item].title).replace("%dataLoc%", "#" + projects.projects[item].title);
                $("#navListMenu").append(formattedNavLi);
            }
        }
    }
};


work.addToNav();
education.addToNav();
projects.addToNav();

education.display();
work.display();
projects.display();
bio.display();

$("#mapDiv").append(googleMap);
function inName(_name) {
    var nameArray = name.trim().split(" ");
    var firstName = nameArray[0];
    var lastName = nameArray[1];
    return firstName.slice(0, 1).toUpperCase() + firstName.slice(1).toLowerCase() + " " + lastName.toUpperCase();
}

//$("#main").append(internationalizeButton);
$(window).scroll(function () {
    if ($(this).scrollTop() > 50) {
        $('#back-to-top').fadeIn();
    } else {
        $('#back-to-top').fadeOut();
    }
});
// scroll body to 0px on clickK
$('#back-to-top').click(function () {
    $('#back-to-top').tooltip('hide');
    $('body,html').animate({
        scrollTop: 0
    }, 800);
    return false;
});

$('#back-to-top').tooltip('show');
$('#back-to-top').hide();