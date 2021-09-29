var teacherGrade=[];
var teacherGender=[];
var teacherClub=[];
var teacherAnnouncement=[];
var studentGrade =[]; 
var studentGender =[]; 
var studentClub =[]; 
var teacherAnnouncement =[];
var announcementTextHolder =" ";


function displayAnnouncement(){
	teacherGrade = JSON.parse(localStorage.getItem("teacherGradeKey"))
	teacherGender = JSON.parse(localStorage.getItem("teacherGenderKey"))
	teacherClub = JSON.parse(localStorage.getItem("teacherClubKey"))
	studentGrade = localStorage.getItem("studentGradeKey"); 
	studentGender = localStorage.getItem("studentGenderKey"); 
	studentClub = localStorage.getItem("studentClubKey"); 
	teacherAnnouncement = JSON.parse(localStorage.getItem("teacherAnnouncementKey"));
	announcementTextHolder = " ";
	for(var i=0; i<teacherGrade.length;i++){
		if ((teacherGrade[i] == studentGrade|| teacherGrade[i] == "All")&& (teacherGender[i] == 
			studentGender|| teacherGender[i] == "All")&& (teacherClub[i] == studentClub|| teacherClub[i] == "All")) {
			announcementTextHolder += teacherAnnouncement[i] + "<p>";
		}else window.location.assign("Studentfail.html")
	}
	document.getElementById("htmlTeacherAnnouncement").innerHTML=announcementTextHolder;
}	
