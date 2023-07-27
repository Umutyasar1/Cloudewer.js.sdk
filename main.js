window.addEventListener('load', function() {
    var url = '';
    url = Cloudewer.options({
        protocol: 'https',
        token: 'N2MyNjQ0ODU2YWQ1ZTk1ZA==',
        domain: 'umut.cloudewer.com',
        lang: 'tr',
    });

    Cloudewer.eventListener(function (eventName, data) {
        console.log(eventName);
        console.log(data);
    })
});