
$(document).ready(function() {

getHouseholds();
getMembers();
//get all  households ajax request
    function getHouseholds() {
        $.ajax({
            url: url + 'Dashboard/GetHouseholds',
            type: "post",
            data: {action: 'gethouseholds'},
            success: function (response) {
                $('#showHouseholds').html(response);
                $('#table_households').DataTable({
                    order: [0, 'asc']
                })
            },
            error: function (xhr) {
                console.log('Request Status:' + xhr.status);
                console.log('Status Text:' + xhr.statusText);
                console.log(xhr.responseText);
            }
        });
    }

    //function get members
    function getMembers() {
        $.ajax({
            url: url + 'Dashboard/GetMembers',
            type: "post",
            data: {action: 'getmembers'},
            success: function (response) {
                //console.log(response);
                $('#showMembers').html(response);
                $('#table_Members').DataTable({
                    order: [0, 'asc']
                })
            },
            error: function (xhr) {
                console.log('Request Status:' + xhr.status);
                console.log('Status Text:' + xhr.statusText);
                console.log(xhr.responseText);
            }
        });
    }

    //get household to edit
    $("body").on("click", ".edithouseholdid", function(e) {
        e.preventDefault();
        edithouseholdid = $(this).attr('id');
        $('#householdid').val(edithouseholdid);

        $.ajax({
            url: url +'users/gethouseholdidtoedit',
          method: "post",
          data: {action:'editdithousehold',edithouseholdid:edithouseholdid},
          success: function(response) {
            data = JSON.parse(response);

            $('#householdnameedit').val(data.commonName);
            $('#sublocationedit').val(data.sublocation);
            $('#landmarkeditedit').val(data.landmark);
            $('#phonenumberedit').val(data.contact);
            $('#handwashingfacilityedit').val(data.hand_washing_facility);
            $('#watertreatmentedit').val(data.water_treatment);
            $('#drinkingwateredit').val(data.source_of_drinking_water);
            $('#refusaldisposaledit').val(data.refuse_disposal_method);
            $('#latrinepresenceedit').val(data.latrine_presence);
            $('#nhifedit').val(data.nhif);
          },
          error: function(xhr) {
            alert(xhr.responseText);
          }
        });
      });

//view household
$("body").on("click", ".viewhouseholds", function(e) {
    e.preventDefault();
    viewhouseholdid = $(this).attr('id');

    $.ajax({
        url: url +'Dashboard/viewhouseholds',
    type: "post",
    data:{action:'viewhouseholddetails',viewhouseholdid:viewhouseholdid},
    success: function(response){    
        data = JSON.parse(response);
        $('#serial_no').html(data.serial_no);
        $('#longitude').html(data.longitude);
        $('#latitude').html(data.latitude);
        $('#sublocation').html(data.sublocation);
        $('#householdname').html(data.commonName);
        $('#landmark').html(data.landmark);
        $('#contact').html(data.contact);
        $('#drinkingwater').html(data.source_of_drinking_water);
        $('#watertreatment').html(data.water_treatment);
        $('#refusedisposal').html(data.refuse_disposal_method);
        $('#latrinepresence').html(data.latrine_presence);
        $('#washingfacility').html(data.hand_washing_facility);
        $('#nhif').html(data.nhif);
        $('#datecreated').html(data.datecreated);
    },
        error: function(xhr){
        console.log(xhr.responseText);
    }
});
});

//edit household ajax request
$("#updatehousehold").click(function (e) {
    e.preventDefault();

    $.ajax({
      url: url +'users/updatehousehold',
      type: "POST",
        dataType: 'JSON',
        data: $('#edithousehold').serialize(),
        success: function (response) {
            console.log(data)
            console.log(response.msg)
            if (response.msg !== 'updated') {
                $("#edithousehold_box").removeClass('alert-success').addClass('alert-danger').removeClass('hidden').html(response.msg);
            } else{
                $("#edithousehold")[0].reset();
                $("#edithouseholdmodal").modal('hide');
                swal({
                    title:'Household Updated Successfully',
                    type:'success'
                });
                getHouseholds()
            }
        }
    }); 
});

})
