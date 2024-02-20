$(document).ready(function() {
    $('.carrossel').slick({autoplay: true,});

    $('.menu-hamburguer').click(function() {
        $('nav').slideToggle();
    })

    $('#telefone').mask('(00) 00000-0000')
    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            nome: {
                required: true
            }
        },
        messages: {
            nome: 'Por favor, insira o seu nome!',
            email: 'Por favor, digite um e-mail válido!',
            telefone: 'Este campo é obrigatório',
            mensagem: 'Antes de enviar digite sua solicitação',
            modelo: 'Escolha um carro',
        },
        invalidHandler: function(evento, validador) {
            let camposIncorretos = validador.numberOfInvalids();
            alert(`Existem ${camposIncorretos} campos inválidos no formulário.`);
        }
    })

    $('.lista-veiculos button').click(function(){
        $('html').animate({
            scrollTop: $('#contato').offset().top
        },500)
    });

    $('.contato a').click(function(){
        $('html').animate({
            scrollTop: $('#contato').offset().top
        },500)
    });

    $('.lista-veiculos button').click(function(){

        const destino = $('#contato');
        const nomeVeiculo = $(this).parent().find('h3').text();

        $('#modelo').val(nomeVeiculo)

        $('html').animate({
            scrollTop: des.offset().top
        },500)
    });

    $('.promo a').click(function(){
        $('html').animate({
            scrollTop: $('#promo').offset().top
        },500)
    });

    $('.sobre a').click(function(){
        $('html').animate({
            scrollTop: $('#sobre').offset().top
        },500)
    });

    $('.destaques a').click(function(){
        $('html').animate({
            scrollTop: $('#destaques').offset().top
        },500)
    });

})


