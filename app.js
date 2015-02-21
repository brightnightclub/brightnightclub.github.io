$('#code_of_conduct_button').click(function() {
    $('#code_of_conduct').toggle();
    $('.code_of_conduct_link').toggle();
    $('html,body').animate({scrollTop: $('#code').offset().top},'slow');
    return false;
})