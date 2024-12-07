$(document).ready(function() {
    $('#contactForm').on('submit', function(e) {
        e.preventDefault();

        var formData = $(this).serialize();

        $.ajax({
            type: 'POST',
            url: 'https://backend.grh-eiche.pl/',
            data: formData,
            success: function(response) {
                alert(response);
            },
            error: function() {
                alert('Wystąpił problem podczas wysyłania wiadomości.');
            }
        });
    });
});