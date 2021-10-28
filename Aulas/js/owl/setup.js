$('.owl-carousel').owlCarousel({
    loop:true,
    // define se o carrossel se repitirá, após a imagem final ser alcançada
    margin:10,
    // Margem entre as imagens
    nav:true,
    // Botão de seta para passar as imagens. se false, o botão é desativado
    
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})
    /*
    responsive definirá como o carrosel se comportará com a alteração do tamanho da tela.
    acima, definimos que, caso o tamanho seja 0 (ou próximo disso), só 1 imagem será mostrada
    se o tamanho = 600, mostraremos 3 imagens.
    se o tamanho = 1000, mostraremos 5 imagens.
    */