var assignmentStaticData = [{title:"Assignment1-JAVA", description:"oral exam", subDate:"2019/04/15", courseTitle:"JAVA"},
                            {title:"Assignment2-JAVA", description:"final exam", subDate:"2019/06/20", courseTitle:"JAVA"},
                            {title:"Assignment1-C#", description:"oral exam", subDate:"2019/10/10", courseTitle:"C#"},
                            {title:"Assignment2-C#", description:"final exam", subDate:"2019/10/13", courseTitle:"C#"},
                            {title:"Assignment1-Python", description:"oral exam", subDate:"2019/03/13", courseTitle:"Python"},
                            {title:"Assignment2-Python", description:"final exam", subDate:"2019/06/24", courseTitle:"Python"}];

var editButtonHtml = '<button class="btn btn-primary btn-edit" value="Edit" type="button">Edit</button>';

$(document).ready(function(){
  
  validateAssignmentForm();
   //fill in assignment table with static assignment data
  addRowInAssignmentList(assignmentStaticData);

  // when add a new assignment
  $("#addToAssignmentTable").click(function(){
    var isFormValid = $("#add-assignment").valid();
    if (isFormValid) {
      var assignment = [{title: $("#assignment-title").val(),
                         description: $("#assignment-description").val(),
                         subDate: $("#assignment-sub-date").val().split('-').join('/'),
                         courseTitle: $("#assignment-course :selected").text()}];
      addRowInAssignmentList(assignment);
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


function validateAssignmentForm(){
  $("#add-assignment").validate({
    // Specify validation rules
    rules: {
        "assignment-title": "required",
        "assignment-description": "required",
        "assignment-sub-date": "required",
    },
    messages: {
     "assignment-title": {
      required: "Please enter assignment title",
     },      
     "assignment-description": {
      required: "Please enter assignment description",
     }, 
     "assignment-sub-date": {
      required: "Please enter a valid date",
     }     
    }
  });
}

function addRowInAssignmentList(element) {
  for (i=0; i<element.length; i++){
    $('#assignment-list-table > tbody:last-child').append('<tr><td><input type="checkbox" name="record"></td><td>'+element[i].title+
                                                                                                    '</td><td>'+element[i].description+
                                                                                                    '</td><td>'+element[i].subDate+
                                                                                                    '</td><td>'+element[i].courseTitle+
                                                                                                    '</td><td>'+editButtonHtml+'</td></tr');  
  }
}