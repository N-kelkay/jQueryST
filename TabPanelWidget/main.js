$(function () {
    $('.tab-panels .tabs li').on("click", function () {

        //Put $ sign infront of variable if it uses jQuery (so the coder can know)
        var $panel = $(this).closest(".tab-panels");

        $panel.find('.tabs li.active').removeClass('active');
        $(this).addClass('active');

        //figure out which panel to show
        var panelToShow = $(this).attr('rel');

        $panel.find('.panel.active').slideUp(300, showNextPanel);

        function showNextPanel() {
            $(this).removeClass("active");
            $("#" + panelToShow).slideDown(300, function () {
                $(this).addClass("active");
            })
        }
    })
})
