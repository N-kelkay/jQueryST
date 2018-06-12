$(function () {
    $('.tab-panels .tabs li').on("click", function () {
        $('.tab-panels .tabs li.active').removeClass('active');
        $(this).addClass('active');

        //figure out which panel to show
        var panelToShow = $(this).attr('rel');

        $('.tab-panels .panel.active').slideUp(200, showNextPanel);

        function showNextPanel() {
            $(this).removeClass("active");
            $("#" + panelToShow).slideDown(200, function () {
                $(this).addClass("active");
            })
        }
    })
})
