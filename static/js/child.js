jQuery(function () {
    jQuery('.tabs-navigation .tab-ctrl').on('click', function () {
        setTimeout(function () {
            window.dispatchEvent(new Event('resize'));
        }, 500)
    })
});

jQuery(function () {
    jQuery('span.btn.open-modal').on('click', function () {
        setTimeout(function () {
            window.dispatchEvent(new Event('resize'));
        }, 500)
    })
});


function getUrl() {
    var url = window.location.href + "?";
    if (url.indexOf("&") > 0) {
        url = url.split('&')[0] + "&";
    } else if (url.indexOf("?ciclo=") > 0) {
        url = window.location.href + "&";
    } else if (url.indexOf("?") > 0) {
        url = url.split('?')[0] + "?";
    }
    return url;
}



/* foco en los campos del formulario */
$('.i-estudiante').on('click', function (event) {
    // cambiar urls en menús sin recargar la página
    window.history.pushState("object or string", document.title, getUrl() + 'p=estudiante');
});

$('.i-padre').on('click', function (event) {
    // cambiar urls en menús sin recargar la página
    window.history.pushState("object or string", document.title, getUrl() + 'p=padre');
});


$('.i-nombre').on('focus', function (event) {
    // cambiar urls en menús sin recargar la página
    if ($(this).is(':invalid')) {
        window.history.pushState("object or string", document.title, getUrl() + 'p=nombre');
    }

});

$('.i-apellidos').on('focus', function (event) {
    // cambiar urls en menús sin recargar la página
    if ($(this).is(':invalid')) {
        window.history.pushState("object or string", document.title, getUrl() + 'p=apellido');
    }
});

$('.i-email').on('focus', function (event) {
    // cambiar urls en menús sin recargar la página
    if ($(this).is(':invalid')) {
        window.history.pushState("object or string", document.title, getUrl() + 'p=email');
    }
});

$('.i-pais').on('change', function (event) {
    // cambiar urls en menús sin recargar la página
    if ($(this).is(':invalid')) {
        window.history.pushState("object or string", document.title, getUrl() + 'p=pais');
    }
});

$('.i-dni').on('focus', function (event) {
    // cambiar urls en menús sin recargar la página
    if ($(this).is(':invalid')) {
        window.history.pushState("object or string", document.title, getUrl() + 'p=dni');
    }
});

$('.i-pasaporte').on('focus', function (event) {
    // cambiar urls en menús sin recargar la página
    if ($(this).is(':invalid')) {
        window.history.pushState("object or string", document.title, getUrl() + 'p=pasaporte');
    }
});

/* foco en los campos del formulario */
$('.i-telefono').on('focus', function (event) {
    // cambiar urls en menús sin recargar la página
    if ($(this).is(':invalid')) {
        window.history.pushState("object or string", document.title, getUrl() + 'p=telefono');
    }
});

$('.i-procedencia').on('change', function (event) {
    // cambiar urls en menús sin recargar la página
    window.history.pushState("object or string", document.title, getUrl() + 'p=procedencia');
});

$('.i-tipo').on('change', function (event) {
    // cambiar urls en menús sin recargar la página
    window.history.pushState("object or string", document.title, getUrl() + 'p=tipo');
});

/* foco en los campos del formulario */
$('.i-area').on('change', function (event) {
    // cambiar urls en menús sin recargar la página
    window.history.pushState("object or string", document.title, getUrl() + 'p=area');
});

/* foco en los campos del formulario */
$('.i-titulacion').on('change', function (event) {
    // cambiar urls en menús sin recargar la página
    window.history.pushState("object or string", document.title, getUrl() + 'p=titulacion');
});

/* foco en los campos del formulario */
$('.i-campus').on('change', function (event) {
    // cambiar urls en menús sin recargar la página
    window.history.pushState("object or string", document.title, getUrl() + 'p=campus');
});

/* foco en los campos del formulario */
$('.i-aviso-legal').on('click', function (event) {
    // cambiar urls en menús sin recargar la página
    window.history.pushState("object or string", document.title, getUrl() + 'p=aviso-legal');
});

/* foco en los campos del formulario */
$('.i-siguiente').on('click', function (event) {
    // cambiar urls en menús sin recargar la página
    window.history.pushState("object or string", document.title, getUrl() + 'p=paso-2');
});