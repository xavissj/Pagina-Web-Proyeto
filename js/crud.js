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

        if (sku == "") {
            alert("SKU vacio");

        }
        else if (sku.length > 9) {
            alert("SKU SUPERA EL MÁXIMO (9)")

        } else if (nombre == "") {
            alert("NOMBRE VACIO")

        } else if (nombre.length > 20) {
            alert("NOMBRE SUPERA EL MÁXIMO (20)")

        } else if (fecha == "") {
            alert("FECHA VACÍA")
        }
        else if (fecha.length > 10) {
            alert("FECHA SUPERA EL MÁXIMO")

        } else if (cantidad == "") {
            alert("CANTIDAD VACÍA, INGRESE DATOS")
        }
        else {
            var table = "<tr><td>" + sku + "</td><td>" + nombre + "</td><td>" + fecha + "</td><td>" + cantidad + "</td><td>" + categoria + "</td><td>" + edit + "</td><td>" + del + "</td></tr>";
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

function myFunction() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[0];
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}
function myFunction() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("tblCrud");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[0];
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}
function myFunction2() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("myInput2");
    filter = input.value.toUpperCase();
    table = document.getElementById("tblCrud");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[1];
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}
function myFunction3() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("myInput3");
    filter = input.value.toUpperCase();
    table = document.getElementById("tblCrud");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[2];
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}