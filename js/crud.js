$(function () {
    $('#btnAdd').on('click', function () {
        var sku, nombre, fecha, cantidad, categoria;
        sku = $("#txtSku").val();
        nombre = $("#txtNombre").val();
        fecha = $("#txtFecha").val();
        cantidad = $("#txtCantidad").val();
        categoria = $("#txtCategoria").val();

        var edit = "<a class='edit' href='JavaScript:void(0);' >Editar</a>";
        var del = "<a class='delete' href='JavaScript:void(0);'>Eliminar  </a>";

        if (sku == "" ) {
            alert("SKU vacio");
        } else {
            var table = "<tr><td>" + sku + "</td><td>" + nombre + "</td><td>" + fecha + "</td><td>"+ cantidad + "</td><td>"+ categoria + "</td><td>" + edit + "</td><td>" + del + "</td></tr>";
            $("#tblCrud").append(table);
        }
        sku = $("#txtSku").val("");
        nombre = $("#txtNombre").val("");
        fecha = $("#txtFecha").val("");
        cantidad = $("#txtCantidad").val("");
        categoria = $("#txtCategoria").val("");
        Clear();
    });
    

    $('#btnUpdate').on('click', function () {
      var sku, nombre, fecha, cantidad, categoria;
        sku = $("#txtSku").val();
        nombre = $("#txtNombre").val();
        fecha = $("#txtFecha").val();
        cantidad = $("#txtCantidad").val();
        categoria = $("#txtCategoria").val();

        $('#tblCrud tbody tr').eq($('#hfRowIndex').val()).find('td').eq(1).html(sku);
        $('#tblCrud tbody tr').eq($('#hfRowIndex').val()).find('td').eq(2).html(nombre)
        $('#tblCrud tbody tr').eq($('#hfRowIndex').val()).find('td').eq(3).html(fecha)
        $('#tblCrud tbody tr').eq($('#hfRowIndex').val()).find('td').eq(4).html(cantidad)
        $('#tblCrud tbody tr').eq($('#hfRowIndex').val()).find('td').eq(5).html(categoria)

        $('#btnAdd').show();
        $('#btnUpdate').hide();
        Clear();
    });

    $("#tblCrud").on("click", ".delete", function (e) {
        if (confirm("¿Seguro que quieres eliminar esto?")) {
            $(this).closest('tr').remove();
        } else {
            e.preventDefault();
        }
    });
    

    $('#btnClear').on('click', function () {
        Clear();
    });

    $("#tblCrud").on("click", ".edit", function (e) {
        var row = $(this).closest('tr');
        $('#hfRowIndex').val($(row).index());
        var td = $(row).find("td");
        $('#txtSku').val($(td).eq(0).html());
        $('#txtNombre').val($(td).eq(1).html());
        $('#txtFecha').val($(td).eq(2).html());
        $('#txtCantidad').val($(td).eq(3).html());
        $('#txtCategoria').val($(td).eq(4).html());
        $('#btnAdd').hide();
        $('#btnUpdate').show();
    });
});
function Clear() {
    $("#txtSku").val("");
    $("#txtNombre").val("");
    $("#txtFecha").val("");
    $("#txtCantidad").val("");
    $("#txtCategoria").val("");
    $("#hfRowIndex").val("");
}
