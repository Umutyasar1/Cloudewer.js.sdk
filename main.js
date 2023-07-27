window.addEventListener('load', function() {
    var url = '';
    url = Cloudewer.options({
        protocol: 'https',
        token: '', // Login işlemi sağladıktan sonra oluşan token  
        domain: '', // Cloudewer domain bilginiz
        lang: '', // iframe dil seçimi (tr,en)
    });

    Cloudewer.eventListener(function (eventName, data) {
        console.log(eventName);
        console.log(data);
    })
});
