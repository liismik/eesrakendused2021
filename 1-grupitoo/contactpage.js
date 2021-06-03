function formValidation(){
    var name=$("#name").val();
    var tel=$("#tel").val();
    var email=$("#email").val();
    var textarea=$("#textarea").val();

    if(name==""){
        $('#div_error').show();
        $('#div_error').text("Palun sisestage nimi!");
        return false;
    }

    if(tel==""){
        $('#div_error').show();
        $('#div_error').text("Palun sisestage telefoninumber!");
        return false;
    }else{
        var pattern_tel=/^\d{7,8}$/;
        if(!pattern_tel.test(tel)){
            $("#div_error").show();
            $("#div_error").text("Palun sisestage korrektne telefoninumber!");
            return false;
        }
    }

    if(email==""){
        $('#div_error').show();
        $('#div_error').text("Palun sisestage email!");
        return false;
    }else{
        var pattern_email=/^[a-zA-Z0-9.%_-]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,20}$/;
        if(!pattern_email.test(email)){
            $("#div_error").show();
            $("#div_error").text("Palun sisestage korrektne email!");
            return false;
        }
    }

    if(textarea==""){
        $('#div_error').show();
        $('#div_error').text("Palun kirjutage viimasesse lahtrisse midagi!");
        return false;
    }

    return true;
}