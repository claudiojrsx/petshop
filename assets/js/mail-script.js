    // ------- Envio de e-mail via Ajax

     $(document).ready(function() {
        var form = $('#myForm'); // Formulario de contato
        var submit = $('.submit-btn'); // Botão para enviar
        var alert = $('.alert-msg'); // Alerta de mensagem

        // form submit event
        form.on('submit', function(e) {
            e.preventDefault();

            $.ajax({
                url: 'mail.php',
                type: 'POST',
                dataType: 'html',
                data: form.serialize(),
                beforeSend: function() {
                    alert.fadeOut();
                    submit.html('Sending....');
                },
                success: function(data) {
                    alert.html(data).fadeIn(); 
                    form.trigger('reset');
                    submit.attr("style", "display: none !important");;
                },
                error: function(e) {
                    console.log(e)
                }
            });
        });
    });
