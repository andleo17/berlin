function listarCategorias() {
    $.ajax({
        type: "post",
        url: "php/listarCategoria.php",
        data: {},
        success: function(response) {
            $("#cboCategoria").html(response);
        }
    });
}

function agregarProducto() {}

window.onload = function() {
    listarCategorias();
    let form = $("#formulario");

    form.submit(function(e) {
        let c = $("cboCategoria").val();
        let p = $("txtProducto").val();
        e.preventDefault();
        $.ajax({
            type: "post",
            url: "php/agregarProducto.php",
            data: { categoria: c, nombre: p },
            success: function(response) {
                if (response == 1) {
                    console.log("TODO OK");
                } else {
                    console.log("Hubo un error");
                }
            }
        });
    });
};
