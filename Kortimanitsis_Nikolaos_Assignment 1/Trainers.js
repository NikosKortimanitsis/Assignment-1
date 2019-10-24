var trainerStaticData = [{firstName:"Panagiotis", lastName:"Vasileiou", subject:"JAVA Developer"},
                         {firstName:"Katerina", lastName:"Pappa", subject:"Computer Engineer"}];

var editButtonHtml = '<button class="btn btn-primary btn-edit" value="Edit" type="button">Edit</button>';

$(document).ready(function(){
  
  /** Add new Trainer subpage **/
  validateTrainerForm();
    //fill in trainer table with static trainer data
  addRowInTrainerList(trainerStaticData);

  // when add a new trainer
  $("#addToTrainerTable").click(function(){
    var isFormValid = $("#add-trainer").valid();
    if (isFormValid) {
      var trainer = [{firstName: $("#trainer-fName").val(),
                      lastName: $("#trainer-lName").val(),
                      subject: $("#trainer-subject").val()}];
      addRowInTrainerList(trainer);
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


function validateTrainerForm(){
  $("#add-trainer").validate({
    // Specify validation rules
    rules: {
        "trainer-fName": "required",
        "trainer-lName": "required",
        "trainer-subject": "required",
    },
    messages: {
     "trainer-fName": {
      required: "Please enter trainer's first name",
     },      
     "trainer-lName": {
      required: "Please enter trainer's last name",
     }, 
     "trainer-subject": {
      required: "Please enter trainer's subject",
     }    
    }
  });
}

function addRowInTrainerList(element) {
  for (i=0; i<element.length; i++){
    $('#trainer-list-table > tbody:last-child').append('<tr><td><input type="checkbox" name="record"></td><td>'+element[i].firstName+
                                                                                                    '</td><td>'+element[i].lastName+
                                                                                                    '</td><td>'+element[i].subject+
                                                                                                    '</td><td>'+editButtonHtml+'</td></tr');  
  }
}