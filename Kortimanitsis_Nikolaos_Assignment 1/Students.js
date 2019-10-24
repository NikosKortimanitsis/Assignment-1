var studentStaticData = [{firstName:"Nikolaos", lastName:"Kortimanitsis", dateOfBirth:"1980/05/12", tuitionFees:"1500"},
                         {firstName:"Ioannis", lastName:"Petrou", dateOfBirth:"1988/06/15", tuitionFees:"2000"},
                         {firstName:"Maria", lastName:"Papadopoulou", dateOfBirth:"1985/10/7", tuitionFees:"2200"}];

var editButtonHtml = '<button class="btn btn-primary btn-edit" value="Edit" type="button">Edit</button>';

$(document).ready(function(){
  
   /** Add new Student subpage **/
  validateStudentForm();
   //fill in student table with static student data
  addRowInStudentList(studentStaticData);

  // when add a new student
  $("#addToStudentTable").click(function(){
    var isFormValid = $("#add-student").valid();
    if (isFormValid) {
      var student = [{firstName: $("#student-fName").val(),
                      lastName: $("#student-lName").val(),
                      dateOfBirth: $("#student-date").val().split('-').join('/'),
                      tuitionFees: $("#student-fees").val()}];
      addRowInStudentList(student);
    }
  });


  // Find and remove selected table rows
  $(".btn-delete-all").click(function(){
    $("table tbody").find('input[name="record"]').each(function(){
        if($(this).is(":checked")){
            $(this).parents("tr").remove();
        }
    });
  });
});


function validateStudentForm(){
  $("#add-student").validate({
    // Specify validation rules
    rules: {
        "student-fName": "required",
        "student-lName": "required",
        "student-date": "required",
        "student-fees": {
          required: true,
          digits: true
        }
    },
    messages: {
     "student-fName": {
      required: "Please enter student's first name",
     },      
     "student-lName": {
      required: "Please enter student's last name",
     }, 
     "student-date": {
      required: "Please enter a valid date",
     },
     "student-fees": {
      required: "Please enter tuition fees",
      digits: "Please enter a valid number"
     }     
    }
  });
}

function addRowInStudentList(element) {
  for (i=0; i<element.length; i++){
    $('#student-list-table > tbody:last-child').append('<tr><td><input type="checkbox" name="record"></td><td>'+element[i].firstName+
                                                                                                    '</td><td>'+element[i].lastName+
                                                                                                    '</td><td>'+element[i].dateOfBirth+
                                                                                                    '</td><td>'+element[i].tuitionFees+
                                                                                                    '</td><td>'+editButtonHtml+'</td></tr');  
  }
}
