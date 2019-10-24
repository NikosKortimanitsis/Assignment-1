var editButtonHtml = '<button class="btn btn-primary btn-edit" value="Edit" type="button">Edit</button>';

$(document).ready(function(){
  
  /** Assign course to trainer subpage **/
  $("#addToAssignedTrainerTable").click(function(){
    var isFormValid = $("#assign-trainer").valid();
    if (isFormValid) {
      var assignedTrainer = [{trainer: $("#trainer-list :selected").text(),
                              course: $("#course-list :selected").text() }];
      addRowInAssignedTrainerList(assignedTrainer);
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

function addRowInAssignedTrainerList(element) {
  for (i=0; i<element.length; i++){
    $('#assigned-trainer-list-table > tbody:last-child').append('<tr><td><input type="checkbox" name="record"></td><td>'+element[i].trainer+
                                                                                                            '</td><td>'+element[i].course+
                                                                                                            '</td><td>'+editButtonHtml+'</td></tr');  
  }
}
