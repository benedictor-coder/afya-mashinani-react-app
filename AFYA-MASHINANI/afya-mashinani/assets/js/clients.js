$(document).ready(function(){
  hideme();
  getlist();
  donelist();
  function hideme(){
      $("#visitedwithin48hrs").hide()
  }

  $("#skilleddelivery").change(function(e){
    e.preventDefault()
    if($(this).val() == "No"){
       // $("#visitef48hrs").val('No');
        $("#visitedwithin48hrs").show();
    }else{
      hideme();
    }
  })
  
  function getlist(){
    $.ajax({
      url: url +'Lists/GetClientsList',
      type: "post",
      data:{action:'getlist'},
     // dataType: "JSON",   
      success: function(response){      
        $('#showList').html(response);
        //console.log(response);        
        $('#table_list').DataTable({
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
  
  let usetable = 'first_visit';
    
    $("body").on("click", ".editlist", function(e) {
    e.preventDefault();
    editlist = $(this).attr('id');
    check = $(this).attr('id');
    var gettable= $(this).hasClass("firstvisit");
    
    console.log(check);
    if(!gettable){
        usetable = "antenatal_visit"
    }
   
    $('#updatepncid').val(editlist);
    checkdata(check);
    $.ajax({
    url: url +'Lists/Editlist',
    method: "post",
    dataType: "JSON",
    data: {editlist:editlist},
    success: function(data) {
   
    $('#pncid2').val(data.id);
    dropdownresponses(check); 
    console.log($('#pncid2').val(data.pid))
    $('#pncid,#pncid2,#pncid3,#ancid,#ancid2,#ancid3,#ancid4,#ancid5').val(data.pid);
    
    },
    error: function(xhr) {
      console.log('Request Status:'+ xhr.status);
      console.log('Status Text:'+ xhr.statusText);
    }
    });
    });
  //check if we have any matching data
  function checkdata(check){ 
    //$('#addpncone').text('Update PNC');
  $.ajax({
    url: url +'Lists/Check',
    method: "post",
   // dataType: "JSON",
    data: {check,usetable},
    success: function(data) {
        console.log(data);
          if(data == "ok"){
            $("#addpncone").hide();
            $("#addpnctwo").hide();
            $("#addpncthree").hide();
  
            $("#updatepncone").show();
            $("#updatepnctwo").show();
            $("#updatepncthree").show();
  
            $("#addanc").hide();
            $("#updateanc").show();
  
            console.log("update")  
          }
          else{
            $("#addpncone").show();
            $("#addpnctwo").show();
            $("#addpncthree").show();
  
            $("#updatepncone").hide();
            $("#updatepnctwo").hide();
            $("#updatepncthree").hide();
  
            $("#addanc").show();
            $("#updateanc").hide();
            console.log("new") 
          }
    },
          error: function(xhr) {
            console.log('Request Status:'+ xhr.status);
            console.log('Status Text:'+ xhr.statusText);
        } 
      });
  }
    /*=======================================================================================
  //add and update pnc ajax request
  =======================================================================================*/
  $("#addpncone").on("click", function (e) {
    e.preventDefault();
     if ($("#skilleddelivery").find(":selected").val() == "select") {
      $("#pncmodal_box")
        .removeClass("alert-success")
        .addClass("alert-danger")
        .removeClass("hidden")
        .html("Select Skilled delivery");
    } else if ($("#visitef48hrs").find(":selected").val() == "select") {
      $("#pncmodal_box")
        .removeClass("alert-success")
        .addClass("alert-danger")
        .removeClass("hidden")
        .html("Select Visted Within 48Hrs");
    } else if ($("#vitamina").find(":selected").val() == "select") {
      $("#pncmodal_box")
        .removeClass("alert-success")
        .addClass("alert-danger")
        .removeClass("hidden")
        .html("Select Vitamin A");
    } else if ($("#pentaone").find(":selected").val() == "select") {
      $("#pncmodal_box")
        .removeClass("alert-success")
        .addClass("alert-danger")
        .removeClass("hidden")
        .html("Select Penta One");
    } else if ($("#measles").find(":selected").val() == "select") {
      $("#pncmodal_box")
        .removeClass("alert-success")
        .addClass("alert-danger")
        .removeClass("hidden")
        .html("Select Measles Immunization");
    } else if ($("#prophylaxis").find(":selected").val() == "select") {
      $("#pncmodal_box")
        .removeClass("alert-success")
        .addClass("alert-danger")
        .removeClass("hidden")
        .html("Select ART Prophylaxis");
    } else if ($("#contrimoxazole").find(":selected").val() == "select") {
      $("#pncmodal_box")
        .removeClass("alert-success")
        .addClass("alert-danger")
        .removeClass("hidden")
        .html("Select Contrimoxazole Prophylaxis");
    } else if ($("#skilleddelivery").find(":selected").val() == "select") {
      $("#pncmodal_box")
        .removeClass("alert-success")
        .addClass("alert-danger")
        .removeClass("hidden")
        .html("Select Skilled delivery");
      }else if (new Date($("#appointment1").val()) <= new Date()) {
          $("#pncmodal_box")
            .removeClass("alert-success")
            .addClass("alert-danger")
            .removeClass("hidden")
            .html("Select a Future Date");
        } else {
      $.ajax({
        url: url + "Lists/Addpncone",
        type: "POST",
        data: $("#pncform1").serialize() + "&action=firtspnc",
        success: function (response) {
          console.log(response);
          $("#regalert").html(response);
          if (response === "added") {
            getlist();
            $("#pncform1")[0].reset();
            $("#pncmodal").modal("hide");
            swal({
              title: "User Added Successfly",
              type: "success",
            });
            hideme();
          } else {
            $("#regalert").html(response);
            $("#pncform1")[0].reset();
          }
        },
      });
    }
  });
  $("#addpnctwo").on("click", function (e) {
    e.preventDefault();
  if ($("#weight").find(":selected").val() == "select") {
      $("#pncmodal_box2")
        .removeClass("alert-success")
        .addClass("alert-danger")
        .removeClass("hidden")
        .html("Select Weight");
    } else if ($("#pentatwo").find(":selected").val() == "select") {
      $("#pncmodal_box2")
        .removeClass("alert-success")
        .addClass("alert-danger")
        .removeClass("hidden")
        .html("Select Penta Two");
    }   else if (new Date($("#appointment2").val()) <= new Date()) {
      $("#pncmodal_box2")
        .removeClass("alert-success")
        .addClass("alert-danger")
        .removeClass("hidden")
        .html("Select a Future Date");
    } else {
      $.ajax({
        url: url + "Lists/Addpnctwo",
        type: "POST",
        data: $("#pncform2").serialize() + "&action=secondpnc",
        success: function (response) {
          console.log(response);
          $("#regalert").html(response);
          if (response === "added") {
            getlist();
            $("#pncform2")[0].reset();
            $("#pncmodal2").modal("hide");
            swal({
              title: "Second Visit ",
              type: "success",
            });
            hideme();
          } else {
            $("#regalert").html(response);
            $("#pncform2")[0].reset();
          }
        },
      });
    }
  });
  $("#addpncthree").on("click", function (e) {
    e.preventDefault();
  if ($("#weight3").find(":selected").val() == "select") {
      $("#pncmodal_box3")
        .removeClass("alert-success")
        .addClass("alert-danger")
        .removeClass("hidden")
        .html("Select Weight");
    } else if ($("#pentatwo3").find(":selected").val() == "select") {
      $("#pncmodal_box3")
        .removeClass("alert-success")
        .addClass("alert-danger")
        .removeClass("hidden")
        .html("Select Penta Three");
    }else if (new Date($("#appointment3").val()) <= new Date()) {
      $("#pncmodal_box3")
        .removeClass("alert-success")
        .addClass("alert-danger")
        .removeClass("hidden")
        .html("Select a Future Date");
    } else {
      $.ajax({
        url: url + "Lists/Addpncthree",
        type: "POST",
        data: $("#pncform3").serialize() + "&action=thirdpnc",
        success: function (response) {
          console.log(response);
          $("#regalert").html(response);
          if (response === "added") {
            getlist();
            $("#pncform3")[0].reset();
            $("#pncmodal3").modal("hide");
            swal({
              title: "Third Visit ",
              type: "success",
            });
            hideme();
          } else {
            $("#regalert").html(response);
            $("#pncform3")[0].reset();
          }
        },
      });
    }
  });
  $("#updatepncone").click(function (e) {
    // if ($("#pncform")[0].checkValidity()) {
    e.preventDefault();
    if ($("#pnc").find(":selected").val() == "select") {
      $("#pncmodal_box")
        .removeClass("alert-success")
        .addClass("alert-danger")
        .removeClass("hidden")
        .html("Select An Option");
    }else if (new Date($("#appointment").val()) <= new Date()) {
      $("#pncmodal_box")
        .removeClass("alert-success")
        .addClass("alert-danger")
        .removeClass("hidden")
        .html("Select a Future Date");
    }else {
      $.ajax({
        url: url + "Lists/Updatepnc",
        type: "POST",
        data: $("#pncform1").serialize() + "&action=updatepnc",
        success: function (response) {
          console.log(response);
          $("#regalert").html(response);
          if (response === "updated") {
            getlist();
            $("#pncform1")[0].reset();
            $("#pncmodal").modal("hide");
            swal({
              title: "done",
              type: "success",
            });
            hideme();
          } else {
            $("#regalert").html(response);
            $("#pncform1")[0].reset();
          }
        },
      });
    }
    //  }
  });
  $("#updatepnctwo").click(function (e) {
    // if ($("#pncform")[0].checkValidity()) {
    e.preventDefault();
   if ($("#pnc2").find(":selected").val() == "select") {
      $("#pncmodal_box2")
        .removeClass("alert-success")
        .addClass("alert-danger")
        .removeClass("hidden")
        .html("Select An Option");
    } else  if (new Date($("#appointment2").val()) <= new Date()) {
      $("#pncmodal_box2")
        .removeClass("alert-success")
        .addClass("alert-danger")
        .removeClass("hidden")
        .html("Select a Future Date");
    }else {
      $.ajax({
        url: url + "Lists/Updatepnctwo",
        type: "POST",
        data: $("#pncform2").serialize() + "&action=updatepnctwo",
        success: function (response) {
          console.log(response);
          $("#regalert").html(response);
          if (response === "updated") {
            getlist();
            $("#pncform2")[0].reset();
            $("#pncmodal2").modal("hide");
            swal({
              title: "done",
              type: "success",
            });
            hideme();
          } else {
            $("#regalert").html(response);
            $("#pncform2")[0].reset();
          }
        },
      });
    }
    //  }
  });
  $("#updatepncthree").click(function (e) {
    // if ($("#pncform")[0].checkValidity()) {
    e.preventDefault();
   if ($("#pnc3").find(":selected").val() == "select") {
      $("#pncmodal_box3")
        .removeClass("alert-success")
        .addClass("alert-danger")
        .removeClass("hidden")
        .html("Select An Option");
   }else if (new Date($("#appointment3").val()) <= new Date()) {
          $("#pncmodal_box3")
            .removeClass("alert-success")
            .addClass("alert-danger")
            .removeClass("hidden")
            .html("Select a Future Date"); 
    } else {
      $.ajax({
        url: url + "Lists/Updatepncthree",
        type: "POST",
        data: $("#pncform3").serialize() + "&action=updatepncthree",
        success: function (response) {
          console.log(response);
          $("#regalert").html(response);
          if (response === "updated") {
            getlist();
            $("#pncform3")[0].reset();
            $("#pncmodal3").modal("hide");
            swal({
              title: "done",
              type: "success",
            });
            hideme();
          } else {
            $("#regalert").html(response);
            $("#pncform3")[0].reset();
          }
        },
      });
    }
    //  }
  });
  /*=======================================================================================
  //add and update anc ajax request
  =======================================================================================*/
  $("#addanc").on("click", function (e) {
    e.preventDefault();
    // check date if is futer
  if ($("#anc1").find(":selected").val() == "select") {
      $("#ancmodal_box")
        .removeClass("alert-success")
        .addClass("alert-danger")
        .removeClass("hidden")
        .html("Select An Option");
    } else if (new Date($("#ancappointment").val()) <= new Date()) {
      $("#ancmodal_box")
        .removeClass("alert-success")
        .addClass("alert-danger")
        .removeClass("hidden")
        .html("Select a Future Date");
    } else {
      $.ajax({
        url: url + "Lists/Addanc",
        type: "POST",
        data: $("#ancform1").serialize() + "&action=addanc",
        success: function (response) {
          console.log(response);
          $("#regalert").html(response);
          if (response === "added") {
            getlist();
            $("#ancform1")[0].reset();
            $("#ancmodal").modal("hide");
            swal({
              title: "ANC Added",
              type: "success",
            });
            hideme();
          } else {
            $("#regalert").html(response);
            $("#ancform1")[0].reset();
          }
        },
      });
    }
  });
  $("#updateanc").click(function (e) {
    e.preventDefault();
   if ($("#anc1").find(":selected").val() == "select") {
      $("#ancmodal_box")
        .removeClass("alert-success")
        .addClass("alert-danger")
        .removeClass("hidden")
        .html("Select An Option");
    }else if (new Date($("#ancappointment").val()) <= new Date()) {
      $("#ancmodal_box")
        .removeClass("alert-success")
        .addClass("alert-danger")
        .removeClass("hidden")
        .html("Select a Future Date");
    } else {
      if ($("#ancform1")[0].checkValidity()) {
        $.ajax({
          url: url + "Lists/Updateanc",
          type: "POST",
          data: $("#ancform1").serialize() + "&action=updateanc",
          success: function (response) {
            console.log(response);
            if (response === "updated") {
              swal({
                title: "Done",
                type: "success",
              });
              $("#ancform1")[0].reset();
              $("#ancmodal").modal("hide");
              getlist();
            } else {
              $("#regalert1").html(response);
              $("#ancform1")[0].reset();
            }
          },
        });
      }
    }
  });
  $("#updateanc2").click(function (e) {
    e.preventDefault();
  if ($("#anc2").find(":selected").val() == "select") {
      $("#ancmodal_box2")
        .removeClass("alert-success")
        .addClass("alert-danger")
        .removeClass("hidden")
        .html("Select An Option");
    }else if (new Date($("#ancappointment2").val()) <= new Date()) {
      $("#ancmodal_box2")
        .removeClass("alert-success")
        .addClass("alert-danger")
        .removeClass("hidden")
        .html("Select a Future Date");
    } else {
      if ($("#ancform2")[0].checkValidity()) {
        $.ajax({
          url: url + "Lists/Updateanctwo",
          type: "POST",
          data: $("#ancform2").serialize() + "&action=updateanc2",
          success: function (response) {
            console.log(response);
            if (response === "updated") {
              swal({
                title: "Done",
                type: "success",
              });
              $("#ancform2")[0].reset();
              $("#ancmodal2").modal("hide");
              getlist();
            } else {
              $("#regalert1").html(response);
              $("#ancform2")[0].reset();
            }
          },
        });
      }
    }
  });
  $("#updateanc3").click(function (e) {
    e.preventDefault();
  if ($("#anc3").find(":selected").val() == "select") {
      $("#ancmodal_box3")
        .removeClass("alert-success")
        .addClass("alert-danger")
        .removeClass("hidden")
        .html("Select An Option");
    }else if (new Date($("#ancappointment3").val()) <= new Date()) {
      $("#ancmodal_box3")
        .removeClass("alert-success")
        .addClass("alert-danger")
        .removeClass("hidden")
        .html("Select a Future Date");
    } else {
      if ($("#ancform3")[0].checkValidity()) {
        $.ajax({
          url: url + "Lists/Updateancthree",
          type: "POST",
          data: $("#ancform3").serialize() + "&action=updateanc3",
          success: function (response) {
            console.log(response);
            if (response === "updated") {
              swal({
                title: "Done",
                type: "success",
              });
              $("#ancform3")[0].reset();
              $("#ancmodal3").modal("hide");
              getlist();
            } else {
              $("#regalert1").html(response);
              $("#ancform3")[0].reset();
            }
          },
        });
      }
    }
  });
  $("#updateanc4").click(function (e) {
    e.preventDefault();
  if ($("#anc4").find(":selected").val() == "select") {
      $("#ancmodal_box4")
        .removeClass("alert-success")
        .addClass("alert-danger")
        .removeClass("hidden")
        .html("Select An Option");
    }else if (new Date($("#ancappointment4").val()) <= new Date()) {
      $("#ancmodal_box4")
        .removeClass("alert-success")
        .addClass("alert-danger")
        .removeClass("hidden")
        .html("Select a Future Date");
    } else {
      if ($("#ancform4")[0].checkValidity()) {
        $.ajax({
          url: url + "Lists/Updateancfour",
          type: "POST",
          data: $("#ancform4").serialize() + "&action=updateanc4",
          success: function (response) {
            console.log(response);
            if (response === "updated") {
              swal({
                title: "Done",
                type: "success",
              });
              $("#ancform4")[0].reset();
              $("#ancmodal4").modal("hide");
              getlist();
            } else {
  
              $("#ancmodal_box4")
              .removeClass("alert-success")
              .addClass("alert-danger")
              .removeClass("hidden")
              .html(response);
              $("#ancform4")[0].reset();
            }
          },
        });
      }
    }
  });
  
  
  
  $("#updateanc5").click(function (e) {
    e.preventDefault();
    if ($("#delivered").find(":selected").val() == "select") {
      $("#ancmodal_box")
        .removeClass("alert-success")
        .addClass("alert-danger")
        .removeClass("hidden")
        .html("Select An Option");
    }else if (new Date($("#ancappointment5").val()) <= new Date()) {
      $("#ancmodal_box")
        .removeClass("alert-success")
        .addClass("alert-danger")
        .removeClass("hidden")
        .html("Select a Future Date");
    }else {
      if ($("#ancform5")[0].checkValidity()) {
        $.ajax({
          url: url + "Lists/Updateancfive",
          type: "POST",
          data: $("#ancform5").serialize() + "&action=updateanc5",
          success: function (response) {
            console.log(response);
            if (response === "updated") {
              swal({
                title: "Done",
                type: "success",
              });
              $("#ancform5")[0].reset();
              $("#ancmodal5").modal("hide");
              getlist();
            } else {
              $("#regalert1").html(response);
              $("#ancform5")[0].reset();
            }
          },
        });
      }
    }
  });
  
  
  /*=======================================================================================
  view repots and delete here
  =======================================================================================*/
  $("body").on("click", ".deleteUser", function (e) {
    e.preventDefault();
    deleteUser = $(this).attr("id");
    swal
      .fire({
        title: "Are You Sure",
        text: "You will not recover this",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: `Yes Delete it!`,
      })
      .then((result) => {
        if (result.value) {
          $.ajax({
            url: "./controllers/user.controller.php",
            method: "post",
            data: { deleteUser: deleteUser },
            success: function (response) {
              swal.fire("Deleted", "Data has been deleted", "success");
              getlist();
            },
          });
        }
      });
  });
  
  
  $("body").on("click", ".view", function (e) {
    e.preventDefault();
    viewreportid = $(this).attr("id");
    console.log(viewreportid);
    var getviewrptclass = $(this).hasClass("viewreport");
    if (getviewrptclass == true) {
      action = "pncviewreport";
    } else {
      viewreportid = $(this).attr("id");
      action = "ancviewreport";
    }
    // console.log(action)
    clear();
    //$('#viewreportid').val(viewreportid);
    $.ajax({
      url: url + "Lists/Viewreport",
      method: "post",
      // dataType: "JSON",
      //data: {viewreportid:viewreportid},
      data: { action: action, viewreportid: viewreportid },
      success: function (response) {
        data = JSON.parse(response);
        console.log(data);
        if (data[2].yes === "yes") {
          $("#skilled_deliveryv").html(data[0].skilled_delivery);
          $("#48hrsv").html(data[0].visited);
          $("#vitaminav").html(data[0].vitamina);
          $("#measlesv").html(data[0].measles);
          $("#penta1v").html(data[0].penta_one);
          $("#prophylaxisv").html(data[0].artprophylaxis);
          $("#contrimoxazolev").html(data[0].contrimoxazole);
          //biodata
          $("#pncname").html(data[1].firstname + " " + data[1].lastname);
          $("#pncage").html(data[1].age);
          $("#pncgender").html(data[1].gender);
          $("#pnchousehold").html(data[1].hid);
        } else {
          //biodata
          $("#pncname").html(data[1].firstname + " " + data[1].lastname);
          $("#pncage").html(data[1].age);
          $("#pncgender").html(data[1].gender);
          $("#pnchousehold").html(data[1].hid);
        }
        if (
          $.trim($("#skilled_deliveryv").html()) == "Null" ||
          $.trim($("#skilled_deliveryv").html()) == "Null" ||
          $.trim($("#48hrsv").html()) == "Null" ||
          $.trim($("#vitaminav").html()) == "Null" ||
          $.trim($("#measlesv").html()) == "Null" ||
          $.trim($("#penta1v").html()) == "Null" ||
          $.trim($("#prophylaxisv").html()) == "Null" ||
          $.trim($("#contrimoxazolev").html()) == "Null"
        ) {
          ///
          $("#pnc_one_id").removeClass("label-warning");
          $("#pnc_one_id").removeClass("label-success");
          $("#pnc_one_id").addClass("label-danger");
          $("#pnc_one_id").html("Incomplete");
          $("#pncsection1").hide();
          $("#pncsection2").hide();
        } else if (
          $.trim($("#skilled_deliveryv").html()) == "No" ||
          $.trim($("#48hrsv").html()) == "No" ||
          $.trim($("#vitaminav").html()) == "No" ||
          $.trim($("#measlesv").html()) == "No" ||
          $.trim($("#penta1v").html()) == "No" ||
          $.trim($("#prophylaxisv").html()) == "No" ||
          $.trim($("#contrimoxazolev").html()) == "No"
        ) {
          $("#pnc_one_id").removeClass("label-danger");
          $("#pnc_one_id").removeClass("label-success");
          $("#pnc_one_id").addClass("label-warning");
          $("#pnc_one_id").html("Pending");
        } else {
          $("#pncsection2").show();
          $("#pnc_one_id").removeClass("label-danger");
          $("#pnc_one_id").removeClass("label-warning");
          $("#pnc_one_id").addClass("label-success");
          $("#pnc_one_id").html("Completed");
          $("#facillitypncid2").html(data[0].facility_id);
          $("#pncappointmentdate2").html(data[0].appointment);
        }
        //second visit
        if ($.trim(data[0].weight) == "") {
          $("#weightv").html("Null");
          $("#pnc_twoid").removeClass("label-success");
          $("#pnc_twoid").removeClass("label-warning");
          $("#pnc_twoid").addClass("label-danger");
          $("#pnc_twoid").html("Incomplete");
          $("#pncsection3").hide();
        } else if ($.trim(data[0].pentatwo) == "") {
          $("#penta2v").html("Null");
        } else {
          $("#penta2v").html(data[0].weight);
          $("#weightv").html(data[0].pentatwo);
          $("#pncsection3").show();
  
          if (
            $.trim($("#weightv").html()) == "No" ||
            $.trim($("#penta2v").html()) == "No"
          ) {
            $("#pnc_twoid").removeClass("label-success");
            $("#pnc_twoid").removeClass("label-danger");
            $("#pnc_twoid").addClass("label-warning");
            $("#pnc_twoid").html("Pending");
          } else {
            $("#pnc_twoid").removeClass("label-warning");
            $("#pnc_twoid").removeClass("label-danger");
            $("#pnc_twoid").addClass("label-success");
            $("#pnc_twoid").html("Completed");
          }
        }
        //third visit
        if ($.trim(data[0].weight2) == "") {
          $("#weight2v").html("Null");
          $("#pncsection3").hide();
        } else if ($.trim(data[0].pentathree) == "") {
          $("#penta3v").html("Null");
        } else {
          $("#penta3v").html(data[0].pentathree);
          $("#weight2v").html(data[0].weight2);
          if (
            $.trim($("#weight2v").html()) == "No" ||
            $.trim($("#penta3v").html()) == "No"
          ) {
            $("#pnc_threeid").removeClass("label-danger");
            $("#pnc_threeid").removeClass("label-success");
            $("#pnc_threeid").addClass("label-warning");
            $("#pnc_threeid").html("Pending");
          } else {
            $("#pnc_threeid").removeClass("label-danger");
            $("#pnc_threeid").removeClass("label-warning");
            $("#pnc_threeid").addClass("label-success");
            $("#pnc_threeid").html("Completed");
          }
        }
        //anv visit
        if (data[2].yes === "yes") {
          $("#anc1v").html(data[0].ancone);
          $("#anc2v").html(data[0].anctwo);
          $("#anc3v").html(data[0].ancthree);
          $("#anc4v").html(data[0].ancfour);
          $("#deliveredv").html(data[0].delivered);
          //biodata
          $("#ancname").html(data[1].firstname + " " + data[1].lastname);
          $("#ancage").html(data[1].age);
          $("#ancgender").html(data[1].gender);
          $("#anchousehold").html(data[1].hid);
          $("#ancfamily-planning").html(data[1].pg);
        } else {
          $("#ancname").html(data[1].firstname + " " + data[1].lastname);
          $("#ancage").html(data[1].age);
          $("#ancgender").html(data[1].gender);
          $("#anchousehold").html(data[1].hid);
          $("#ancfamily-planning").html(data[1].pg);
        }
        if ($.trim($("#anc1v").html()) == "No") {
          $("#anc_oneid").addClass("label-success");
          $("#anc_oneid").addClass("label-danger");
          $("#anc_oneid").addClass("label-warning");
          $("#anc_oneid").html("Pending");
          $("#facillitylabelid2").html("nil");
          $("#ancappointmentdate2").html("nil");
        } else if ($.trim($("#anc1v").html()) == "Null") {
          //  don nothing
          $("#anc_oneid").removeClass("label-warning");
          $("#anc_oneid").removeClass("label-success");
          $("#anc_oneid").addClass("label-danger");
          $("#anc_oneid").html("Incomplete");
          $("#section2").hide();
        } else {
          $("#section2").show();
          $("#anc_oneid").removeClass("label-warning");
          $("#anc_oneid").removeClass("label-danger");
          $("#anc_oneid").addClass("label-success");
          $("#anc_oneid").html("Completed");
          $("#facillitylabelid2").html(data[0].facility_id);
          $("#ancappointmentdate2").html(data[0].appointment);
        }
        if ($.trim($("#anc2v").html()) == "No") {
          $("#anc_twoid").removeClass("label-danger");
          $("#anc_twoid").removeClass("label-success");
          $("#anc_twoid").addClass("label-warning");
          $("#anc_twoid").html("Pending");
          $("#facillitylabelid3").html("nil");
          $("#ancappointmentdate3").html("nil");
          $("#section3").hide();
        } else if ($.trim($("#anc2v").html()) == "Null") {
          //
          $("#anc_twoid").removeClass("label-success");
          $("#anc_twoid").removeClass("label-warning");
          $("#anc_twoid").addClass("label-danger");
          $("#anc_twoid").html("Incomplete");
          $("#section3").hide();
        } else {
          $("#anc_twoid").removeClass("label-warning");
          $("#anc_twoid").removeClass("label-danger");
          $("#anc_twoid").addClass("label-success");
          $("#anc_twoid").html("Completed");
          $("#section3").show();
          $("#facillitylabelid2").html(data[0].facility_id);
          $("#ancappointmentdate2").html(data[0].appointment);
        }
        if ($.trim($("#anc3v").html()) == "No") {
          $("#anc_threeid").removeClass("label-danger");
          $("#anc_threeid").removeClass("label-success");
          $("#anc_threeid").addClass("label-warning");
          $("#anc_threeid").html("Pending");
          $("#facillitylabelidd").html("nil");
          $("#ancappointmentdated").html("nil");
          $("#section3").hide();
        } else if ($.trim($("#anc3v").html()) == "Null") {
          //
          $("#anc_threeid").removeClass("label-warning");
          $("#anc_threeid").removeClass("label-success");
          $("#anc_threeid").addClass("label-danger");
          $("#anc_threeid").html("Incomplete");
        } else {
          $("#anc_threeid").removeClass("label-warning");
          $("#anc_threeid").removeClass("label-danger");
          $("#anc_threeid").addClass("label-success");
          $("#anc_threeid").html("Completed");
          $("#facillitylabelid3").html(data[0].facility_id);
          $("#ancappointmentdate3").html(data[0].appointmenttwo);
          $("#section3").show();
        }
        if ($.trim($("#anc4v").html()) == "No") {
          $("#anc_fourid").removeClass("label-danger");
          $("#anc_fourid").removeClass("label-success");
          $("#anc_fourid").addClass("label-warning");
          $("#anc_fourid").html("Pending");
          // $('#facillitylabelid3').html("nil");
          // $('#ancappointmentdate3').html("nil");
          $("#section4").hide();
        } else if ($.trim($("#anc4v").html()) == "Null") {
          //
          $("#anc_fourid").removeClass("label-warning");
          $("#anc_fourid").removeClass("label-success");
          $("#anc_fourid").addClass("label-danger");
          $("#anc_fourid").html("Incomplete");
          $("#section4").hide();
        } else {
          $("#anc_fourid").removeClass("label-warning");
          $("#anc_fourid").removeClass("label-danger");
          $("#anc_fourid").addClass("label-success");
          $("#anc_fourid").html("Completed");
          $("#facillitylabelid4").html(data[0].facility_id);
          $("#ancappointmentdate4").html(data[0].appointmentthree);
          $("#section4").show();
        }
        if ($.trim($("#deliveredv").html()) == "Not") {
          $("#deliveredid").removeClass("label-danger");
          $("#deliveredid").removeClass("label-success");
          $("#deliveredid").addClass("label-warning");
          $("#deliveredid").html("Pending");
        } else if ($.trim($("#deliveredv").html()) == "Null") {
          //
          $("#deliveredid").removeClass("label-success");
          $("#deliveredid").removeClass("label-warning");
          $("#deliveredid").addClass("label-danger");
          $("#deliveredid").html("Incomplete");
        } else {
          $("#deliveredid").removeClass("label-warning");
          $("#deliveredid").removeClass("label-warning");
          $("#deliveredid").addClass("label-danger");
          $("#deliveredid").html("Completed");
        }
      },
      error: function (xhr) {
        console.log("Request Status:" + xhr.status);
        console.log("Status Text:" + xhr.statusText);
      },
    });
  });
  //clear
  function clear() {
    $("#skilled_deliveryv").html("Null");
    $("#48hrsv").html("Null");
    $("#vitaminav").html("Null");
    $("#measlesv").html("Null");
    $("#penta1v").html("Null");
    $("#prophylaxisv").html("Null");
    $("#contrimoxazolev").html("Null");
    //second visit
    $("#weightv").html("Null");
    $("#penta2v").html("Null");
    //third visit
    $("#weight2v").html("Null");
    $("#penta3v").html("Null");
    //anc visit
    $("#anc1v").html("Null");
    $("#anc2v").html("Null");
    $("#anc3v").html("Null");
    $("#anc4v").html("Null");
    $("#deliveredv").html("Null");
  
    //biodata
    $("#ancname").html("Null");
    $("#ancage").html("Null");
    $("#ancgender").html("Null");
    $("#anchousehold").html("Null");
    $("#ancfamily").html("Null");
  }
  $("#closeanceview").on("click", function (e) {
    e.preventDefault();
    //anc clear
    $("#ancname").html("Null");
    $("#ancage").html("Null");
    $("#ancgender").html("Null");
    $("#anchousehold").html("Null");
    $("#ancfamily-planning").html("Null");
    $("#ancappointmentdate2").html("Null");
  
    //
    $("#pncname").html("Null");
    $("#pncage").html("Null");
    $("#pncgender").html("Null");
    $("#pnchousehold").html("Null");
  });
  $("#closepnceview").on("click", function (e) {
    //anc clear
    /*$('#ancname').html("Null");
  $('#ancage').html("Null");
  $('#ancgender').html("Null");
  $('#anchousehold').html("Null");
  $('#ancfamily-planning').html("Null");
  */
    //
    $("#pncname").html("Null");
    $("#pncage").html("Null");
    $("#pncgender").html("Null");
    $("#pnchousehold").html("Null");
  });


  //return yes or No dropdown
  function dropdownresponses(check){
    console.log("dropdown response id: " +check)
    $.ajax({
      url: url + "Lists/dropdownresponses",
      method: "post",
      dataType: "JSON",
      data: {check, usetable },
      success: function (data) {
        console.log('dropdown response: ' +data);
        if(data == 'false'){
          return false;
        }else{
        $("#anc1").val(data.ancone);
        $("#ancappointment").val(data.appointment);
        $("#anc2").val(data.anctwo);
        $("#ancappointment2").val(data.appointmenttwo);
        $("#anc33").val(data.ancthree);
        $("#ancappointment3").val(data.appointmentthree);
        $("#anc_four").val(data.ancfour);
        $("#ancappointment4").val(data.appointmentfour);
        $("#ancappointment5").val(data.appointmentfive);
        $("#delivered").val(data.delivered);
        //pnc
        $("#skilleddelivery").val(data.skilled_delivery);
        $("#visitef48hrs").val(data.visited);
        $("#vitamina").val(data.vitamina);
        $("#measles").val(data.measles);
        $("#pentaone").val(data.penta_one);
        $("#prophylaxis").val(data.artprophylaxis);
        $("#contrimoxazole").val(data.contrimoxazole);
        $("#appointment1").val(data.appointment);
        //pnc2
        $("#weight").val(data.weight);
        $("#pentatwo").val(data.pentatwo);
        $("#appointment2").val(data.appointment2);
         //pnc3
         $("#weight3").val(data.weight2);
         $("#pentatwo3").val(data.pentathree);
         $("#appointment3").val(data.appointment3);
        }

      },
      error: function (xhr) {
        console.log("Request Status:" + xhr.status);
        console.log("Status Text:" + xhr.statusText);
      },
    });
}


   //done list
   function donelist() {
    $.ajax({
      url: url + "Lists/donelist",
      type: "post",
      data: { action: "getlist" },
      // dataType: "JSON",
      success: function (response) {
        $("#donelist").html(response);
        //console.log(response);
        $("#table_done").DataTable({
          order: [0, "desc"],
        });
      },
      error: function (xhr) {
        console.log("Request Status:" + xhr.status);
        console.log("Status Text:" + xhr.statusText);
        console.log(xhr.responseText);
        var text = $($.parseHTML(xhr.responseText))
          .filter(".trace-message")
          .text();
      },
    });
  }
  
  });