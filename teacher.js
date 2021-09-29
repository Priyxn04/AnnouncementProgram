var teacherGrade=[];
var teacherGender=[];
var teacherClub=[];
var teacherAnnouncement=[];

var counter =0;

function getTeacherData(){
	//alert("Hi");
	teacherGrade[counter] = document.getElementById("htmlTeacherGrade").value
	//alert("teacherGrade");
	teacherGender[counter] = document.getElementById("htmlTeacherGender").value
	//alert("teacherGender");
	teacherClub[counter] = document.getElementById("htmlTeacherClub").value
	//alert("teacherClub");
	teacherAnnouncement[counter] = document.getElementById("htmlTeacherAnnouncement").value
	//alert("teacherAnnouncement");
	counter++;

	localStorage.setItem("teacherGradeKey", JSON.stringify(teacherGrade));
	localStorage.setItem("teacherGenderKey", JSON.stringify(teacherGender));
	localStorage.setItem("teacherClubKey", JSON.stringify(teacherClub));
	localStorage.setItem("teacherAnnouncementKey", JSON.stringify(teacherAnnouncement));
}

function getExistingAnnouncements(){
	if(JSON.parse(localStorage.getItem("teacherAnnouncementKey"))!=null){
		teacherGrade = JSON.parse(localStorage.getItem("teacherGradeKey"));
		teacherGender = JSON.parse(localStorage.getItem("teacherGenderKey"));
		teacherClub = JSON.parse(localStorage.getItem("teacherClubKey"));
		teacherAnnouncement = JSON.parse(localStorage.getItem("teacherAnnouncementKey"));
		counter = teacherGrade.length;

	}
}




