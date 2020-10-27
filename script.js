
var sponsor = `<div class="form-group row border p-2 remove"><p  class="col-sm-12 font-weight-bold">SELF, PARENT, GUARDIAN </p><div class="col-sm-6"><div class="form-group"><label for="sponsor">Relationship</label><select class="custom-select" name="sponsor[]" id="sponsor"><option selected>Choose Option</option><option value="father" >Father</option><option value="mother" >Mother</option><option value="guardian" >Guardian</option><option value="self" >Self</option></select></div></div><div class="col-sm-6"><div class="form-group"><label for="nationality">Nationality</label><input type="text" class="form-control" id="nationality" name="nationality[]" placeholder="enter nationality"></div></div><div class="col-sm-6"><div class="form-group"><label for="levelofeducation">Level of Education</label><select class="custom-select" name="levelofeducation[]" id="levelofeducation"><option selected>Choose Option</option></select></div></div><div class="col-sm-6"><div class="form-group"><label for="occupation">Occupation</label><input type="text" class="form-control" id="occupation" name="occupation[]" placeholder="enter occupation"></div></div><div class="col-sm-4 offset-sm-8 text-right"><button type="button" class="btn btn-danger" id="btn2">Remove Field</button></div></div>`;

var institutionname = `<div class="form-group row border p-2 remove" ><div class="col-sm-8"><div class="form-group"><label for="institutionname">NAME OF INSTITUTION</label><input type="text" class="form-control" name="institutionname[]" placeholder="name of institution"></div></div><div class="col-sm-4"><div class="form-group"><label for="institutionyear">YEAR OF GRADUATION</label><input type="text" class="form-control" name="institutionyear[]" placeholder="Year of graduation"></div></div><div class="col-sm-6"><div class="form-group"><label for="fieldofstudy">FIELD OF STUDY</label><input type="text" class="form-control" id="fieldofstudy" name="fieldofstudy[]" placeholder=" Field of study"></div></div><div class="col-sm-6"><div class="form-group"><label for="degree">DEGREE RECEIVED</label><input type="email" class="form-control" name="degree[]" placeholder=" degree received"></div></div><div class="col-sm-6"><div class="form-group"><label for="institutionaddress">ADDRESS OF INSTITUTION</label><input type="text" class="form-control" name="institutionaddress[]" id="institutionaddress" placeholder="City, Country"></div></div><div class="col-sm-3 offset-sm-9 text-right my-2"><button type="button" class="btn btn-danger" id="butn2">Remove Field</button></div></div>`;

var travelRecord = `<div class="form-row remove" ><div class="col-md-8 mb-3"><label for="placeoftravel">Country</label><input type="text" class="form-control" id="placeoftravel" name="placeoftravel[]"></div><div class="col-md-4 mb-3"><label for="timeoftravel">Year</label><input type="number" class="form-control" name="timeoftravel[]"></div><div class="col-sm-12 text-right"><button type="button" class="btn btn-danger" id="addbutn2">Remove Field</button></div></div>`;

var lang = `<div class="col-sm-4 my-2 remove" ><div class="input-group"><select class="custom-select" name="language[]" id="language"><option selected>Choose lang</option></select><div class="input-group-append"><button class="btn btn-outline-danger" id="removebtn" type="button">Remove</button></div></div></div>`;

var schoolapplication = `<div class="form-row remove" ><div class="col-md-6 mb-3"><label for="schoolname">Name of School</label><input type="text" class="form-control" id="schoolname" name="schoolname[]"></div><div class="col-md-6 mb-3"><label for="schoollocation">Location of School</label><input type="text" class="form-control" id="schoollocation" name="schoollocation[]"></div><div class="col-sm-12 text-right"><button type="button" class="btn btn-danger" id="newbtn1">Remove Field</button></div></div>`;

var grade = `<div class="form-group row remove"><div class="col-md-6 mb-3"><label for="subjectname">Subject Name</label><input type="text" class="form-control" id="subjectname" name="subjectname[]" placeholder="Subject name"></div><div class="col-md-3 mb-3"><label for="grade">Grade</label><select id="grade" name="grade[]" class="custom-select form-control"><option selected>Choose Grade</option><option value="a*">A<sup>*</sup></option><option value="a">A</option><option value="b">B</option><option value="b2">B <sub>2</sub></option><option value="b3">B <sub>3</sub></option><option value="c">C</option><option value="c4">C <sub>4</sub></option><option value="c5">C <sub>5</sub></option><option value="c6">C <sub>6</sub></option><option value="d">D </option><option value="d7">D <sub>7</sub></option><option value="e">E </option><option value="e8">E <sub>8</sub></option><option value="f">F </option><option value="f9">F <sub>9</sub></option></select></div><div class="col-sm-3 mt-sm-4 text-right"><button type="button" class="btn btn-danger" id="removegrade">Remove Field</button></div></div>`;
$(document).ready(function(){
	

	$( function() {
		$(document).on('focus',".datepicker", function(){
			$(this).datepicker({
				changeMonth: true,
				changeYear: true,
				showAnim: "clip",
				maxDate: new Date(), 
				yearRange: 'c-50:c+0'
			});
		});
	});

	$( function() {
		$("#btn1").click(function(){
			$("#sponsorfield").after(sponsor);
		});
		$(document).on('click','button#btn2',function() {
			$(this).closest('div.remove').remove();
		});

			
		$("#butn").click(function(){
			$("#edu").after(institutionname);
		});
		$(document).on('click','button#butn2',function() {
			$(this).closest('div.remove').remove();
		});

		$("#addbtn").click(function(){
			$("#travelRecord").after(travelRecord);
		});
		$(document).on('click','button#addbutn2',function() {
			$(this).closest('div.remove').remove();
		});

		$("#btnlang").click(function(){
			$("#addLang").after(lang);
		});
		$(document).on('click','button#removebtn',function() {
			$(this).closest('div.remove').remove();
		});

		$("#newbtn").click(function(){
			$("#schoolapplication").after(schoolapplication);
		});
		$(document).on('click','button#newbtn1',function() {
			$(this).closest('div.remove').remove();
		});

		$("#addgrade").click(function(){
			$("#schoolgrades").after(grade);
		});
		$(document).on('click','button#removegrade',function() {
			$(this).closest('div.remove').remove();
		});

		// $("#addgrade").click(function(){
		// 	$("#schoolgrades").after(grades);
		// });
		// $(document).on('click','button#removegrade',function() {
		// 	$(this).closest('div.remove').remove();
		// });

	});

	
	$(function () {
		$('.showtextarea, .showtextarea1, .showtextarea2, .showtextarea3, .showtextarea4').hide();
		


		$("input[name=immigrationpetitions]:radio").click(function () {

			if ($(this).is(':checked') && $(this).val() == "yes") {
				$('.showtextarea').show();

			} else {
				$('.showtextarea').hide();
			}
		});

		$("input[name=visadenied]:radio").click(function () {
  
			if ($(this).is(':checked') && $(this).val() == "yes") {
			$('.showtextarea1').show();

			} else {
			$('.showtextarea1').hide();
			}
		});

		$("input[name=computerusages]:radio").click(function () {
  
			if ($(this).is(':checked') && $(this).val() == "yes") {
				$('.showtextarea2').show();

			} else {
				$('.showtextarea2').hide();
			}
		});

		$("#universitysetting").click(function () {
  
			if ($(this).val() !== "0") {
				$('.showtextarea3').show();

			} else {
				$('.showtextarea3').hide();
			}
		});

		$("#collegetype").click(function () {
  
			if ($(this).val() !== "0") {
				$('.showtextarea4').show();

			} else {
				$('.showtextarea4').hide();
			}
		});

	});  
    
  
      

      
  });

 
