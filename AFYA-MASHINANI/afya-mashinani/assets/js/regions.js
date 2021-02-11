$(document).ready(function (){

    getAllCounties();

    //Add subcounty ajax request
    $("#addsubcounty").click(function (e) {
        if ($("#addSubcountyform")[0].checkValidity()) {
            e.preventDefault();
            $.ajax({
                url: url +'Regions/AddSubcounty',
                type: "POST",
                dataType: 'JSON',
                data: $("#addSubcountyform").serialize(),
                success: function (response) {
                    if (response.msg !== 'registered') {
                        //console.log(response.msg);
                        $("#addsubcountyalert").removeClass('alert-success').addClass('alert-danger').removeClass('hidden').html(response.msg);
                    } else {
                        //console.log(response.msg);
                        $("#addSubcountyform")[0].reset();
                        $("#addSubcountymodal").modal('hide');
                        swal({
                            title: 'Sub County Added Successfully',
                            type: 'success'
                        });
                    }

                }
            });
        }
    });


    //county keyup
    $('#loardcounty').keyup(function () {
        var search = $(this).val();
        if (search != '') {
            var value = $('#loardcounty').val();
            var option = $('#loardcounty-datalist').find("[value='" + value + "']");
            if (option.length > 0) {
                var id = option.data("value");
                $('#countyid').val(id);
            }
        }
    });

    //get all  counties ajax request
    function getAllCounties() {
        $.ajax({
            type: "post",
            url: url +'Dashboard/GetCounties',
            data: "json",
            data: {
                action: "getcounties"
            },
            success: function (data) {
                //$('#loardcounty-datalist2').html(data);
                $('#loardcounty-datalist,#loardcounty-datalist2,#loardcounty-datalist3,#loardcounty-datalist4,#facilitycounty-datalist').html(data);
                //console.log(data)
            }

        })
    }


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
                //console.log(data)
            }
        })
    }
    // function getvillages(){
    //     var sublocationid = $('#listitemid5').val();
    //     $.ajax({
    //         type:"post",
    //         url: url +'Dashboard/Getvillages',
    //         data:"json",
    //         data:{
    //             action:"villages",
    //             id:sublocationid
    //         },
    //         success:function(data){
    //             $('#village-datalist').html(data);
    //             console.log(data)
    //         }
    //     })
    // }

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
                //console.log(data)
            }
        })
    }


//Key Ups Counties
    $('#loardcounty2').keyup(function () {
        var search = $(this).val();
        if (search != '') {
            var value = $('#loardcounty2').val();
            var option = $('#loardcounty-datalist2').find("[value='" + value + "']");
            if (option.length > 0) {
                var id = option.data("value");
                $('#countyid2').val(id);
                getsubcounties()
                console.log(id);
            }
        }
    });

    $('#countyname3').keyup(function () {
        var search = $(this).val();
        if (search != '') {
            var value = $('#countyname3').val();
            var option = $('#loardcounty-datalist3').find("[value='" + value + "']");
            if (option.length > 0) {
                var id = option.data("value");
                $('#countyid3').val(id);
                // getsubcounties()
                getsubcounties2()
                console.log(id);
            }
        }
    });

    $('#countyname4').keyup(function () {
        var search = $(this).val();
        if (search != '') {

            var value = $('#countyname4').val();
            var option = $('#loardcounty-datalist4').find("[value='" + value + "']");

            if (option.length > 0) {
                var id = option.data("value");
                $('#countyid4').val(id);

                // getsubcounties()
                getsubcounties3()
                console.log(id);
            }
        }
    });
//Key Ups subcounties

    $('#subCountyname2').keyup(function () {
        var search = $(this).val();
        //console.log($(this).val())
        if (search != '') {
            var value = $('#subCountyname2').val();
            var option = $('#loardsubcounty-datalist').find("[value='" + value + "']");
            if (option.length > 0) {
                var id = option.data("value");
                $('#subcountyid').val(id);
                console.log(id);
                getwards()
                // console.log(id);
            }
        }
    });

    $('#subcountyname3').keyup(function () {
        var search = $(this).val();
        console.log($(this).val())
        if (search != '') {
            var value = $('#subcountyname3').val();
            var option = $('#loardsubcounty-datalist3').find("[value='" + value + "']");
            if (option.length > 0) {
                var id = option.data("value")
                $('#subcountyid3').val(id);

                getwards()
                console.log("ffgfgf");
            }
        }
    });

    $('#subcountyname4').keyup(function () {
        var search = $(this).val();
        console.log($(this).val())
        if (search != '') {
            var value = $('#subcountyname4').val();
            var option = $('#loardsubcounty-datalist4').find("[value='" + value + "']");
            if (option.length > 0) {
                var id = option.data("value")
                $('#subcountyid4').val(id);
                getwards2()
                console.log("ffgfgf");
            }
        }
    });


    //Key Ups wards
    $('#loadward').keyup(function () {
        var search = $(this).val();
        console.log($(this).val())
        if (search != '') {
            var value = $('#loadward').val();
            var option = $('#loadward-datalist').find("[value='" + value + "']");
            if (option.length > 0) {
                var id = option.data("value");
                $('#wardid').val(id);
            }
        }

    });

    $('#loadward2').keyup(function () {
        var search = $(this).val();
        console.log($(this).val())
        if (search != '') {
            var value = $('#loadward2').val();
            var option = $('#loadward-datalist2').find("[value='" + value + "']");
            if (option.length > 0) {
                var id = option.data("value");
                $('#wardid2').val(id);
                location();
            }
        }

    });

    $('#location2').keyup(function () {
        var search = $(this).val();
        console.log($(this).val())
        if (search != '') {
            var value = $('#location2').val();
            var option = $('#loadlocation-datalist').find("[value='" + value + "']");
            if (option.length > 0) {
                var id = option.data("value");
                $('#locationid').val(id);
                //location();
            }
        }

    });

    //--------------------------------------------------
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
//===================start copy==

    //Add ward ajax request
    $("#addward").click(function (e) {
        if ($("#addwardform")[0].checkValidity()) {
            e.preventDefault();
            $.ajax({
                url: url +'Regions/AddWard',
                type: "POST",
                dataType: 'JSON',
                data: $("#addwardform").serialize(),
                success: function (response) {
                    if (response.msg !== 'registered') {
                        console.log(response.msg);
                        $("#addwardalert").removeClass('alert-success').addClass('alert-danger').removeClass('hidden').html(response.msg);
                    } else {
                        console.log(response.msg);
                        $("#addwardform")[0].reset();
                        $("#wardmodal").modal('hide');
                        swal({
                            title: 'Ward Added Successfully',
                            type: 'success'
                        });
                    }
                },
                error: function (error){
                    console.log(error)
                }
            });
        }
    });

    //Add location location ajax request
    $("#addlocation").click(function (e) {
        if ($("#addlocationform")[0].checkValidity()) {
            e.preventDefault();
            $.ajax({
                url: url +'Regions/Addlocation',
                type: "POST",
                dataType: 'JSON',
                data: $("#addlocationform").serialize(),
                success: function (response) {
                    if (response.msg === 'registered') {
                        console.log(response.msg);
                        $("#addlocationform")[0].reset();
                        $("#locationmodal").modal('hide');
                        swal({
                            title: 'Location Added Successfully',
                            type: 'success'
                        });
                    } else {
                        $("#regalert3").html(response.msg);
                        //$("#addlocationform")[0].reset();
                    }
                }
            });
        }
    });


    //Add sub location location ajax request
    $("#addsublocation").click(function (e) {
        if ($("#sublocationform")[0].checkValidity()) {
            e.preventDefault();
            $.ajax({
                url: url +'Regions/AddSubLocation',
                type: "POST",
                dataType: 'JSON',
                data: $("#sublocationform").serialize(),
                success: function (response) {
                    if (response.msg === 'registered') {
                        console.log(response.msg);
                        $("#sublocationform")[0].reset();
                        $("#subLocationModal").modal('hide');
                        swal({
                            title: 'Sub Location Added Successfully',
                            type: 'success'
                        });
                    } else {
                        $("#addsublocationalert").removeClass('alert-success').addClass('alert-danger').removeClass('hidden').html(response.msg);
                    }
                }
            });
        }
    });

    //get subcounties
    function getsubcounties() {
        var countyid = $('#countyid2').val();
        $.ajax({
            type: "post",
            url: url +'Dashboard/Getsubcounties',
            data: "json",
            data: {
                action: "getsubcounties",
                countyid: countyid
            },
            success: function (data) {
                $('#loardsubcounty-datalist').html(data);
                console.log(data)
            }

        })
    }

    function getsubcounties2() {
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
                $('#loardsubcounty-datalist3').html(data);
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

    function getsubcounties3() {
        var countyid = $('#countyid4').val();
        $.ajax({
            type: "post",
            url: url +'Dashboard/Getsubcounties',
            data: "json",
            data: {
                action: "getsubcounties2",
                countyid: countyid
            },
            success: function (data) {
                $('#loardsubcounty-datalist4').html(data);
                console.log(data)
            }

        })
    }
    //get wards
    function getwards() {
        var subcountyid = $('#subcountyid3').val();
        $.ajax({
            type: "post",
            url: url +'Dashboard/Getwards',
            data: "json",
            data: {
                action: "getwards",
                id: subcountyid
            },
            success: function (data) {
                $('#loadward-datalist').html(data);
                console.log(data)
            }
        })
    }

    function getwards2() {
        var subcountyid = $('#subcountyid4').val();
        $.ajax({
            type: "post",
            url: url +'Dashboard/Getwards',
            data: "json",
            data: {
                action: "getwards",
                id: subcountyid
            },
            success: function (data) {
                $('#loadward-datalist2').html(data);
                console.log(data)
            }
        })
    }

    function location() {
        var subcountyid = $('#wardid2').val();
        $.ajax({
            type: "post",
            url: url +'Dashboard/Getlocations',
            data: "json",
            data: {
                action: "getlocations",
                id: subcountyid
            },
            success: function (data) {
                $('#loadlocation-datalist').html(data);
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

})

