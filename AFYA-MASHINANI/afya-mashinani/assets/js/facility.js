$(document).ready(function () {
    //getallcounties();
    //getsubcounties();
    getallfacilities();

    $('#loadfacilitycounty').keyup(function () {
        var search = $(this).val();
        console.log($(this).val())
        if (search != '') {
            var value = $('#loadfacilitycounty').val();
            var option = $('#facilitycounty-datalist').find("[value='" + value + "']");
            if (option.length > 0) {
                var id = option.data("value");
                $('#facilitycid').val(id);
                getsubcountiesfacilities()
            }
        }
    });

    $('#loadfacilityscounty').keyup(function () {
        var search = $(this).val();
        console.log($(this).val())
        if (search != '') {
            var value = $('#loadfacilityscounty').val();
            var option = $('#loadfacilityscounty-datalist').find("[value='" + value + "']");
            if (option.length > 0) {
                var id = option.data("value");
                $('#facilityscid').val(id);
                getwardsfacilities()
            }
        }
    });

    $('#loadfacilityward').keyup(function () {
        var search = $(this).val();
        console.log($(this).val())
        if (search != '') {
            var value = $('#loadfacilityward').val();
            var option = $('#loadfacilityward-datalist').find("[value='" + value + "']");
            if (option.length > 0) {
                var id = option.data("value");
                $('#facilitywid').val(id);
                getlocationfacilities()
            }
        }
    });

    $('#loadfacilitylocation').keyup(function () {
        var search = $(this).val();
        console.log($(this).val())
        if (search != '') {
            var value = $('#loadfacilitylocation').val();
            var option = $('#loadfacilitylocation-datalist').find("[value='" + value + "']");
            if (option.length > 0) {
                var id = option.data("value");
                $('#facilitylid').val(id);
                getsublocationfacilities()
            }
        }
    });

    $('#loadfacilitysublocation').keyup(function () {
        var search = $(this).val();
        console.log($(this).val())
        if (search != '') {
            var value = $('#loadfacilitysublocation').val();
            var option = $('#loadfacilitysublocation-datalist').find("[value='" + value + "']");
            if (option.length > 0) {
                var id = option.data("value");
                $('#facilityslid').val(id);
                getsublocationfacilities()
            }
        }
    });

    $('#countynameforlocation').keyup(function () {
        var search = $(this).val();
        if (search != '') {
            var value = $('#countynameforlocation').val();
            var option = $('#loadcounty-datalistforlocation').find("[value='" + value + "']");
            if (option.length > 0) {
                var id = option.data("value");
                $('#countyid3').val(id);
                // getsubcounties()
                getsubcountiesforlocation()
                console.log(id);
            }
        }
    });
//getall  counties ajax request
    function getsubcountiesforlocation() {
        var countyid = $('#countyid3').val();
        $.ajax({
            type: "post",
            url: url +'Dashboard/Getsubcounties',
            data: "json",
            data: {
                action: "getsubcounties2",
                countyid: countyid
            },
            success: function (data) {
                $('#loadsubcounty-datalistforlocation').html(data);
                console.log(data)
            }

        })
    }

    function getsubcountiesfacilities() {
        var countyid = $('#facilitycid').val();
        $.ajax({
            type: "post",
            url: url +'Dashboard/Getsubcounties',
            data: "json",
            data: {
                action: "getsubcounties",
                countyid: countyid
            },
            success: function (data) {
                $('#loadfacilityscounty-datalist').html(data);
                console.log(data)
            }

        })
    }

    function getwardsfacilities() {
        var countyid = $('#facilityscid').val();
        $.ajax({
            type: "post",
            url: url +'Dashboard/Getwards',
            data: "json",
            data: {
                action: "getwards",
                id: countyid
            },
            success: function (data) {
                $('#loadfacilityward-datalist').html(data);
                console.log(data)
            }

        })
    }

    function getlocationfacilities() {
        var id = $('#facilitywid').val();
        $.ajax({
            type: "post",
            url: url +'Dashboard/Getlocations',
            data: "json",
            data: {
                action: "getlocations",
                id: id
            },
            success: function (data) {
                $('#loadfacilitylocation-datalist').html(data);
                console.log(data)
            }
        })
    }

    function getsublocationfacilities() {
        var id = $('#facilitylid').val();
        $.ajax({
            type: "post",
            url: url +'Dashboard/Getsublocations',
            data: "json",
            data: {
                action: "getsublocations",
                id: id
            },
            success: function (data) {
                $('#loadfacilitysublocation-datalist').html(data);
                console.log(data)
            }
        })
    }

//getall  facilities ajax request
    function getallfacilities(){
        $.ajax({
            url: url +'Regions/Getfacilities',
            type: "post",
            data:{action:'getallfacilities'},
            success: function(response){
                $('#showfacilities').html(response);
                $('#table_facilities').DataTable({
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
//add facility
    $("#saveFacility").click(function (e) {
        if ($("#addfacilityform")[0].checkValidity()) {
            e.preventDefault();
            $.ajax({
                url: url +'Regions/Registerfacility',
                type: "POST",
                dataType: 'JSON',
                data: $("#addfacilityform").serialize(),
                success: function (response) {
                    console.log(response.msg);
                    // $("#regalert").html(response);
                    if (response.msg === 'registered') {
                        getallfacilities()
                        $("#addfacilityform")[0].reset();
                        $("#addHealthFacility").modal('hide');
                        swal({
                            title: 'Facility Added Successfly',
                            type: 'success'
                        });
                    } else {
                        $("#regalert5").html(response.msg);
                        $("#addfacilityform")[0].reset();
                    }
                }
            });
        }
    });

});