var courseStaticData = [{title:"Java", stream:"Junior", type:"1", startDate:"2019/01/01", endDate:"2019/07/31"},
                        {title:"C#", stream:"Junior", type:"2", startDate:"2019/09/01", endDate:"2019/12/31"},
                        {title:"Python", stream:"Junior", type:"3", startDate:"2019/01/01", endDate:"2019/07/31"}];

var editButtonHtml = '<button class="btn btn-primary btn-edit" value="Edit" type="button">Edit</button>';

$(document).ready(function(){
  
  validateCourseForm();
  //fill in course table with static courses data
  addRowInCourseList(courseStaticData);

  // when add a new course
  $("#addToCourseTable").click(function(){
    var isFormValid = $("#add-course").valid();
    if (isFormValid) {
      var course = [{title: $("#course-title").val(),
                    stream: $("#course-stream").val(),
                    type: $("#course-type").val(),
                    startDate: $("#course-start-date").val().split('-').join('/'),
                    endDate: $("#course-end-date").val().split('-').join('/')}];
      addRowInCourseList(course);
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


function validateCourseForm(){
  $("#add-course").validate({
    // Specify validation rules
    rules: {
        "course-title": "required",
        "course-stream": "required",
        "course-type": "required",
        "course-start-date": "required",
        "course-end-date": "required",
    },
    messages: {
    "course-title": {
      required: "Please enter course title",
     },      
     "course-stream": {
      required: "Please enter course stream",
     }, 
     "course-type": {
      required: "Please enter course type",
     },
     "course-start-date": {
      required: "Please enter a valid date",
     }, 
     "course-end-date": {
      required: "Please enter a valid date",
     }     
    }
  });
}

function addRowInCourseList(element) {
  for (i=0; i<element.length; i++){
    $('#course-list-table > tbody:last-child').append('<tr><td><input type="checkbox" name="record"></td><td>'+element[i].title+
                                                                                                    '</td><td>'+element[i].stream+
                                                                                                    '</td><td>'+element[i].type+
                                                                                                    '</td><td>'+element[i].startDate+
                                                                                                    '</td><td>'+element[i].endDate+
                                                                                                    '</td><td>'+editButtonHtml+'</td></tr');  
  }
}