$(document).ready(function () {
    getallmembers()
//getall  members ajax request
    function getallmembers(){
        $.ajax({
            url: url +'Dashboard/GetMembers',
            type: "post",
            data:{action:'getmembers'},
            success: function(response){
                // console.log(response)
                $('#showMembers').html(response);
                $('#table_Members').DataTable({
                    order: [0,'desc']
                })
            },
            error: function(xhr){
                console.log('Request Status:'+ xhr.status);
                console.log('Status Text:'+ xhr.statusText);
                console.log(xhr.responseText);
                var text = $($.parseHTML(xhr.responseText)).filter('.trace-message').text();
            }
        });
    }
    $("body").on("click", ".viewMember", function(e) {
        e.preventDefault();
        viewmemberid = $(this).attr('id');
        //$('#memberid').val(viewmemberid);
        // console.log(viewmemberid)
        $.ajax({
            url: url +'Dashboard/viewmember',
            type: "post",
            data:{action:'viewmemberdetails',viewmemberid:viewmemberid},
            success: function(response){
                //console.log(response)
                data = JSON.parse(response);
                $('#patientid_view').html(data.pid);
                $('#houeseholdnumber_view').html(data.hid);
                $('#firstname_view').html(data.firstname);
                $('#secondname_view').html(data.lastname);
                $('#age_view').html(data.age);
                $('#gender_view').html(data.gender);
                $('#relationship_view').html(data.relationship);
                $('#registeredon_view').html(data.reg_date);
                $('#datecreated_view').html(data.datecreated);

            },
            error: function(xhr){
                console.log('Request Status:'+ xhr.status);
                console.log('Status Text:'+ xhr.statusText);
                console.log(xhr.responseText);
            }
        });
    });

});