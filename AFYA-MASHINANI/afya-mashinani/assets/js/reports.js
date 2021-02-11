
$(document).ready(function(){
    previewreports()
    var start_date = $('#start_date').val();
    var end_date = $('#end_date').val();
    //$('.input-daterange').datepicker({
    $('#start_date,#end_date').datepicker({
        todayBtn:'linked',
        format: "dd-mm-yyyy",
        autoclose: false,
        todayHighlight: true,
        clearBtn: true,
    });

    //fetch_data('no');
    function fetch_data(is_date_search, start_date='', end_date=''){
        var dataTable = $('#table_sales').DataTable({
            "processing" : true,
            "serverSide" : true,
            "order" : [],
            "ajax" : {
                url:"fetch.php",
                type:"POST",
                data:{
                    is_date_search:is_date_search, start_date:start_date, end_date:end_date
                }
            }
        });
    }

       //preview reports
    function previewreports(){
        $.ajax({
            url: url +'Fpdfc/previewreports',
            type: "post",
            data:{action:'previewreports',start_date,end_date},
            success: function(response){      
                $('#tablepreviewreports').html(response);
    },
            error: function(xhr){
            console.log('Request Status:'+ xhr.status);
            console.log('Status Text:'+ xhr.statusText);

            }
        });
    }

    $('#search').click(function(){
        var start_date = $('#start_date').val();
        var end_date = $('#end_date').val();
        if(start_date != '' && end_date !='')
        {
            //$('#table_sales').DataTable().destroy();
            //fetch_data('yes', start_date, end_date);
            console.log(start_date)
        }
        else
        {
            alert("Both Date is Required");
        }
    });


    $("#search").click(function (e) {
        //var  search = $(this).attr("id5");
        var start_date=$('#start_date').val();
        var end_date=$('#end_date').val();
        window.open(url+"fpdfc/Rpt/?start_date="+start_date+"&end_date="+end_date, "_blank");
    });

    $("#anconerpt").click(function (e) {
        //var  search = $(this).attr("id5");
        var start_date=$('#start_date').val();
        var end_date=$('#end_date').val();

        window.open(url + "Fpdfc/anconerpt/?start_date="+start_date+"&end_date="+end_date, "_blank");
    });

    $("#btn-download").click(function (e) {
        var start_date="All";
        var end_date="All";
        window.open(url+"fpdfc/anconerpt/?start_date="+start_date+"&end_date="+end_date, "_blank");
   });
    /*
          $("#anctworpt").click(function (e) {
            //var  search = $(this).attr("id5");
            var start_date=$('#start_date').val();
            var end_date=$('#end_date').val();
                 window.open(url+"fpdfc/anctworpt/?start_date="+start_date+"&end_date="+end_date, "_blank");
          });

          $("#ancthreerpt").click(function (e) {
            //var  search = $(this).attr("id5");
            var start_date=$('#start_date').val();
            var end_date=$('#end_date').val();
                 window.open(url+"fpdfc/ancthreerpt/?start_date="+start_date+"&end_date="+end_date, "_blank");
          });*/
});