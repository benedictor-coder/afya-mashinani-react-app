$(document).ready(function() {
/*=======================================================================================
 Region Filter
=======================================================================================*/
//invoke functions
getDashCounties()
disabled()    
underfiveyrs();
totalmembers();
pregnantWomen();
familyPlanning();
load_households()


//get all dashboard counties ajax request
function getDashCounties() {
    $.ajax({
        type: "post",
        url: url +'Dashboard/GetCounties',
        data: "json",
        data: {
            action: "getcounties"
        },
        success: function (data) {
            $('#county-datalist').html(data);
        }

    })
}

$('#county').keyup(function() {
    var search = $(this).val();
    console.log($(this).val())
    if (search != '') {
        $('#subcounty').removeAttr("disabled");
        var value = $('#county').val();
        var option =$('#county-datalist').find("[value='" +value +"']");
        if(option.length > 0){
            var id =option.data("value");
            $('#countyid2').val(id);
            $('#subcounty').val("");
            $('#ward').val("");
            $('#location').val("");
            $('#sublocation').val("");


            getsubcounties()
            console.log(id);
        }
        load_households();
    } else {
        $('#subcounty').removeAttr("enabled");
        getsubcounties()
    }
});

//function to get all subcounties
function getsubcounties(){
    var countyid = $('#countyid2').val();
    $.ajax({
        type:"post",
        url: url +'Dashboard/Getsubcounties',
        data:"json",
        data:{action:"getsubcounties",countyid:countyid},
        success:function(data){
            $('#subcounty-datalist').html(data);
            console.log(data)
        }
    })
}
//Sub Counties keyup function
$('#subcounty').keyup(function() {
    var search = $(this).val();
    if (search != '') {
        $('#ward').removeAttr("disabled");
        var value = $('#subcounty').val();
        var option =$('#subcounty-datalist').find("[value='" +value +"']");
        if(option.length > 0){
         var id =option.data("value");
         $('#listitemid2').val(id);
         $('#ward').val("");
         $('#location').val("");
         $('#sublocation').val("");
         $('#village').val("");
         getwards();
        }
        load_households();
    } else {
        $('#subcounty').removeAttr("enabled");
    }
  });

  function load_households() {
    var action = 'getallhouseholds';
    var county = $('#county').val();
    var subcounty = $('#subcounty').val();
    var ward = $('#ward').val();
    var location = $('#location').val();
    var sublocation = $('#sublocation').val();
    var village = $('#village').val();
    $.ajax({
        url: url +'Dashboard/GetAllHouseholds',
        method: "POST",
        data: {
            action: action,county: county,subcounty: subcounty,ward: ward,location: location,sublocation: sublocation,village: village
        },
        dataType: "JSON",
        success: function(data) {
            //$('#result').html(data);
            console.log(data)
            Morris.Donut({
                element: 'households',
                resize: true,
                colors:["#3c8dbc","#f56954","#00a65a","#D81B60","#ff851b","#605ca8","#39CCCC","#001F3F","#00c0ef","#f39c12","#d2d6de","#111111"],
                data: data,
                hideHover: 'auto'
            });
        }
    });
}

//Function to get wards
function getwards(){
    var subcountyid = $('#listitemid2').val();
    $.ajax({
        type:"post",
        url: url +'Dashboard/Getwards',
        data:"json",
        data:{action:"getwards",id:subcountyid},
        success:function(data){
            $('#ward-datalist').html(data);
            console.log(data)
        }
    })
}
//ward keyup
$('#ward').keyup(function() {
var search = $(this).val();
//console.log($(this).val())
if (search != '') {
  $('#location').removeAttr("disabled");
  var value = $('#ward').val();
  var option =$('#ward-datalist').find("[value='" +value +"']");
  if(option.length > 0){
   var id =option.data("value");
   $('#listitemid3').val(id);
   $('#location').val("");
   $('#sublocation').val("");
   $('#village').val("");
   getlocations();
  }
  load_households();
} else {
  $('#ward').removeAttr("enabled");
}
});

//function to get locations
function getlocations(){
    var wardid = $('#listitemid3').val();
    $.ajax({
        type:"post",
        url: url +'Dashboard/Getlocations',
        data:"json",
        data:{
            action:"getlocations",
            id:wardid
        },
        success:function(data){
            $('#location-datalist').html(data);
        }
    })
}
//
$('#location').keyup(function() {
var search = $(this).val();
if (search != '') {
  $('#sublocation').removeAttr("disabled");
  var value = $('#location').val();
  var option =$('#location-datalist').find("[value='" +value +"']");
  if(option.length > 0){
   var id =option.data("value");
   $('#listitemid4').val(id);
   $('#sublocation').val("");
   $('#village').val("");
   getsublocations();
  }
  load_households();
} else {
  $('#location').removeAttr("enabled");
}
});
//function to get sublocations
function getsublocations(){
    var locationid = $('#listitemid4').val();
    $.ajax({
        type:"post",
        url: url +'Dashboard/Getsublocations',
        data:"json",
        data:{
            action:"getsublocations",
            id:locationid
        },
        success:function(data){
            $('#sublocation-datalist').html(data);
        }
    })
}
//Sub location keyup function
$('#sublocation').keyup(function() {
var search = $(this).val();
if (search != '') {
  $('#village').removeAttr("disabled");
  var value = $('#sublocation').val();
  var option =$('#sublocation-datalist').find("[value='" +value +"']");
  if(option.length > 0){
   var id =option.data("value");
   $('#listitemid5').val(id);
   $('#village').val("");
  }
  load_households();
} else {
  $('#sub_location').removeAttr("enabled");
}
});

//Function to get children under 5 yrs
function underfiveyrs(){
        $.ajax({
          url: url +'Dashboard/Underfiveyrs',
          method: "POST",
          data:{action:'underfiveyrs'},
          dataType: "JSON",   
          success: function(response){ 
              Morris.Donut({
                 element: 'underfiveyrs',
                 resize: true,
                 colors:["#3c8dbc","#f56954","#00a65a","#D81B60","#ff851b","#605ca8","#39CCCC","#001F3F","#00c0ef","#f39c12","#d2d6de","#111111"],
                 data: response,
                 hideHover: 'auto'
                });
                
        }
    });
}
//function to get total members
function totalmembers(){
          $.ajax({
            url: url +'Dashboard/TotalMembers',
            type: "post",
            data:{action:'totalmembers'},
            dataType: "JSON",
            success: function(response){
               // console.log(response)
                Morris.Donut({
                   element: 'totalmembers',
                   resize: true,
                   colors:["#3c8dbc","#f56954","#00a65a","#D81B60","#ff851b","#605ca8","#39CCCC","#001F3F","#00c0ef","#f39c12","#d2d6de","#111111"],
                   data: response,
                   hideHover: 'auto'
                  });
          }
      });
}

//Pregnant women
function pregnantWomen(){
    $.ajax({
      url: url +'Dashboard/PregnantWomen',
      type: "post",
      data:{action:'pregnantwomen'},
      dataType: 'JSON',
          success: function(response){
              //console.log(response)
              Morris.Donut({
                 element: 'pregnantwomen',
                 resize: true,
                 colors:["#3c8dbc","#f56954","#00a65a","#D81B60","#ff851b","#605ca8","#39CCCC","#001F3F","#00c0ef","#f39c12","#d2d6de","#111111"],
                 data: response,
                 hideHover: 'auto'
                });
        }
    });
}

//Family planning
    function familyPlanning(){
        $.ajax({
            url: url +'Dashboard/FamilyPlanning',
            type: "post",
            data:{action:'familyplanning'},
            dataType: 'JSON',
            success: function(response){
                //console.log(response)
                Morris.Donut({
                    element: 'familyplanning',
                    resize: true,
                    colors:["#3c8dbc","#f56954","#00a65a","#D81B60","#ff851b","#605ca8","#39CCCC","#001F3F","#00c0ef","#f39c12","#d2d6de","#111111"],
                    data: response,
                    hideHover: 'auto'
                });
            }
        });
    }

//Function to load all households based on filters
    function load_households() {
        // $('.filter_data').html('<div id="loading" style="" ></div>');
        var action = 'getallhouseholds';
        var county = $('#county').val();
        var subcounty = $('#subcounty').val();
        var ward = $('#ward').val();
        var location = $('#location').val();
        var sublocation = $('#sublocation').val();
        var village = $('#village').val();
        $.ajax({
            url: url +'Dashboard/Getallhouseholds',
            method: "POST",
            data: {
                action: action,county: county,subcounty: subcounty,ward: ward,location: location,sublocation: sublocation,village: village
            },
            dataType: "JSON",
            success: function(data) {
                //$('#result').html(data);
                //console.log(data)
                Morris.Donut({
                    element: 'households',
                    resize: true,
                    colors:["#3c8dbc","#f56954","#00a65a","#D81B60","#ff851b","#605ca8","#39CCCC","#001F3F","#00c0ef","#f39c12","#d2d6de","#111111"],
                    data: data,
                    hideHover: 'auto'
                });
            }
        });
    }
//function to disable subsequent filiters if the before is not selected
function disabled() {
  $('#subcounty').attr("disabled", "true");
  $('#ward').attr("disabled", "true");
  $('#location').attr("disabled", "true");
  $('#sublocation').attr("disabled", "true");
  $('#village').attr("disabled", "true");
}

//clear
    $('#clear').click(function(e) {
        $('#county').val(" ");
        $('#subcounty').val(" ");
        $('#ward').val(" ");
        $('#location').val(" ");
        $('#sublocation').val(" ");
        $('#village').val(" ");
        $('input:text').val("");
        disabled();

    });

});