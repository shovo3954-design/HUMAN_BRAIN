$(document).ready(function(){
    $(".text").textillate({
        loop:true,
        sync:true,
        in:{
            effect:"bounceIn",
        },
        out:{
            effect:"bounceOut",
        }
    })

    //Siri configuration
    var siriWave = new SiriWave({
        container: document.getElementById("siri-container"),
        width: 800,
        height: 200,
        style: "ios9",
        amplitude: 1,
        speed: 0.4,
        autostart: true,
    });

    //Siri message animation
    $(".siri-message").textillate({
        loop: true,
        minDisplayTime: 2500,
        delay: 50,
        in: { effect: "fadeInUp" },
        out: { effect: "fadeOutUp" }
    });

})