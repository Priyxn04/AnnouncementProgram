var studentGrade;
var studentGender;
var studentClub;

function getStudentData(){
	studentGrade = document.getElementById("htmlStudentGrade").value
	//alert("studentGrade");
	studentGender = document.getElementById("htmlStudentGender").value
	//alert("studentGender");
	studentClub = document.getElementById("htmlStudentClub").value
	//alert("studentClub");

	localStorage.setItem("studentGradeKey",studentGrade);
	localStorage.setItem("studentGenderKey",studentGender);
	localStorage.setItem("studentClubKey",studentClub);
 }