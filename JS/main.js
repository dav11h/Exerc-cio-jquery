$(document).ready(function(){
    $('.carrosel').slick({
        autoplay: true,
        autoplaySpeed: 2000,
    })

    $('.menu').click(function(){
        $('nav').slideToggle()
    })

    $('#button').click(function(){
        
    })

    $('#tel').mask('(00) 00000-0000')
    $('#cep').mask('00000-000')
    $('#cpf').mask('000.000.000-00')

    
})
