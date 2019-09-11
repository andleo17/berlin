function listarCategorias() {
	$.ajax({
		type: 'post',
		url: 'php/listarCategoria.php',
		data: {},
		success: function(response) {
			$('#cboCategoria').html(response);
		}
	});
}

function agregarProducto(e) {
	e.preventDefault();
	$.ajax({
		type: 'post',
		url: 'php/agregarProducto.php',
		data: {
			categoria: $('#cboCategoria').val(),
			nombre: $('#txtProducto').val()
		},
		success: function(response) {
			if (response == 1) {
				alert('Producto registrado correctamente');
				listarProductos();
			} else {
				console.log('Hubo un error');
			}
		}
	});
}

function listarProductos() {
	$.ajax({
		type: 'post',
		url: 'php/listarProductos.php',
		success: response => {
			$('#productos').html(response);
		}
	});
}

function agregarCategoria(e) {
	e.preventDefault();
	$.ajax({
		type: 'post',
		url: 'php/agregarCategoria.php',
		data: {
			nombre: $('#txtCategoria').val()
		},
		success: response => {
			if (response == 1) {
				alert('Categoría registrada correctamente');
				listarCategorias();
			} else {
				console.log('Hubo un error');
			}
		}
	});
}

window.onload = function() {
	listarCategorias();
	listarProductos();
	$('#formulario').submit(agregarProducto);
	$('#formCategoria').submit(agregarCategoria);
};
