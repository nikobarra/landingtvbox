$(document).ready(function () {
    function centerContent() {
        $(".hero-text").css({
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
            "text-align": "center",
        });

        $(".image-container img").each(function () {
            $(this).css({
                display: "block",
                margin: "0 auto",
            });
        });
    }

    // Ejecutar la función al cargar y al redimensionar la ventana
    centerContent();
    $(window).resize(centerContent);
});
