$(document).ready(function(){
getallusers()
/*=======================================================================================
Users scripts
=======================================================================================*/
 //Register user ajax request
$("#adduser").click(function (e) {
    if ($("#register_user")[0].checkValidity()) {
        e.preventDefault();
        $.ajax({
          url: url +'users/register',
          type: "POST",
            dataType: 'JSON',
            data: $("#register_user").serialize() + "&action=register_user",
            success: function (response) {
                if (response.msg !== 'registered') {
                    $("#form1_box").removeClass('alert-success').addClass('alert-danger').removeClass('hidden').html(response.msg);
                } else{
                    //$("#form1_box").removeClass('alert-danger').addClass('alert-success').removeClass('hidden').html(response.msg);
                    getallusers();
                    $("#register_user")[0].reset();
                    $("#addusermodal").modal('hide');
                    swal({
                        title:'User Added Successfully',
                        type:'success'
                    });
                }
            }
        });
    }
  });
  
  
  //getall  users ajax request
  function getallusers(){
              $.ajax({
                url: url +'Users/Getallusers',
                type: "post",
                data:{action:'getallusers'},
                success: function(response){
                  //console.log(response);
                  $('#showUsers').html(response);
                  $('#table_users').DataTable({
                      order: [0,'desc']
                  })
            },
            error: function(xhr){
            console.log('Request Status:'+ xhr.status);
            console.log('Status Text:'+ xhr.statusText);
            console.log(xhr.responseText);
            }
            });
  }
  
  
  $("body").on("click", ".deleteUser", function(e) {
          e.preventDefault();
          deleteUser = $(this).attr('id');
          console.log(deleteUser)
        swal({
                title:'Are You Sure',
                text:'You will not recover this',
                type:'warning',
                showCancelButton:true,
                confirmButtonColor:'#3085d6',
                cancelButtonColor:'#d33',
                cornfirmButtonText:'Yes Delete it!'	 
        }).then((result)=>{
              if(result.value){
                $.ajax({
                 // url: "./controllers/user.controller.php",
                  method: "post",
                  data: {deleteUser:deleteUser},
                  success: function(response) {
                        console.log(response);
                  swal(
                      'Deleted',
                      'Data has been deleted',
                      'success'
                      )
                    getallusers();							 
                  }			 
                });           
              }
        });			
  });
//get user to be edited
$("body").on("click", ".edituser", function(e) {
    e.preventDefault();
    var edituserid = $(this).attr('id');
    $('#edituser_id').val(edituserid);

    $.ajax({
        url: url +'users/getusertoedit',
        method: "post",
        data: {action:'edituser',edituserid:edituserid},
        success: function(response) {
            data = JSON.parse(response);
            console.log(data)
            $('#firstnameedit').val(data.firstname);
            $('#lastnameedit').val(data.lastname);
            $('#phoneedit').val(data.phone);
            $('#emailedit').val(data.email);
            $('#dobedit').val(data.dob);
            $('#genderedit').val(data.gender);
            $('#leveledit').val(data.level);
            $('#linkfacilityedit').val(data.linkfacility);

        },
        error: function(xhr) {
            alert(xhr.responseText);
        }
    });
});
//edit user ajax request
$("#update_user").click(function (e) {
    e.preventDefault();

    $.ajax({
        url: url +'Users/updateuser',
        type: "POST",
        dataType: 'JSON',
        data: $("#edit_user").serialize(),
        success: function (response) {
            if (response.msg !== 'Updated') {
                $("#formedituser_box").removeClass('alert-warning').addClass('alert-danger').removeClass('hidden').html(response.msg);
            } else{
                $("#edit_user")[0].reset();
                $("#editusermodal").modal('hide');
                swal({
                    title:'User Updated Successfully',
                    type:'success'
                });
                getallusers();
            }
        }
    });
});
//lock/unlock user account
$("body").on("click", ".lock", function(e) {
    e.preventDefault();
    var id = $(this).attr('id');
    var id2 = $(this).attr('status');
    if(id2 ==0){
        var status1 = 1;
    }else{
        var status1 = 0;
    }
    $.ajax({
        url: url +'users/changeuserstatus',
        type: "POST",
        dataType: 'JSON',
        data: {id:id,status1:status1,action:"changeuserstatus",},
        success: function (response) {
            if (response.msg == 'changed') {
                getallusers();
            } else {
                swal.fire({
                    title:'Not Changed',
                    icon:'error'
                });
                getallusers();
            }
        },
    });
});

})