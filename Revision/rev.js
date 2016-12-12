function validateForm() {
    var x = document.forms["myForm"]["email"].value;
    var atpos = x.indexOf("@");
    var dotpos = x.lastIndexOf(".");
    if (atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length) {
        alert("Not a valid e-mail address");
        return false;
    }
}


$('#signup').on('submit', function (e) {
    e.preventDefault();
    var details = $('#signup').serialize();
    $.post('signup.php', details, function (data) {
        $('#signup').html(data);
    });
});

$(".like-Unlike").click(function (e) {
    if ($(this).html() == "Like") {
        $(this).html('Unlike');
    } else {
        $(this).html('Like');
    }
    return false;
});
