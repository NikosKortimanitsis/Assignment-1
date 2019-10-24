var editButtonHtml = '<button class="btn btn-primary btn-edit" value="Edit" type="button">Edit</button>';

$(document).ready(function(){
  
  /** Subscribe student to course and assignment subpage **/

  $("#course-list").change(function(){
    var selectedCourse = $(this).val();

    if(selectedCourse == "Java")
    {
      $("#assignment-list").val("Java1");
      $(".c-sharp,.python").hide();
      $(".java").show();
    }
    else if(selectedCourse == "C#")
    {
      $("#assignment-list").val("C#1");
      $(".java,.python").hide();
      $(".c-sharp").show();
    }
    else
    {
      $("#assignment-list").val("Python1");
      $(".java,.c-sharp").hide();
      $(".python").show();
    }
 });


  $("#addToSuscribedStudentTable").click(function(){
    var isFormValid = $("#subscribe-student").valid();
    if (isFormValid) {
      var subscribedStudent = [{student: $("#student-list :selected").text(),
                                course: $("#course-list :selected").text(),
                                assignment: $("#assignment-list :selected").text()}];
      addRowInSubscribedStudentList(subscribedStudent);
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


function addRowInSubscribedStudentList(element) {
  for (i=0; i<element.length; i++){
    $('#subscribed-student-list-table > tbody:last-child').append('<tr><td><input type="checkbox" name="record"></td><td>'+element[i].student+
                                                                                                                '</td><td>'+element[i].course+
                                                                                                                '</td><td>'+element[i].assignment+
                                                                                                                '</td><td>2019/09/30'+
                                                                                                                '</td><td>80.0'+
                                                                                                                '</td><td>85.0'+
                                                                                                                '</td><td>'+editButtonHtml+'</td></tr');  
  }
}