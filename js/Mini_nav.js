$(document).ready(function () {
    $(document).click(function (event) {
        var click = $(event.target);
        var _open = $(".menu").hasClass("show");
        if (_open === true && !click.hasClass(".expandmenu")) {
            $(".expandmenu").click();
        }
    });
});