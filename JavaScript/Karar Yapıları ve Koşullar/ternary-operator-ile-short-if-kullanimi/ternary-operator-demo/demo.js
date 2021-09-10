function writeTicket(speed) {
    var tooSlow = ' minimum hız sınırı 15 km/h dir!',
        justRight = ' örnek bir insansınız.',
        tooFast = ' çok hızlı gidiyorsun. Bir ceza alacaksın!',
        noIdea = 'Demek ne kadar hızlı gittiğinin farkında bile değilsin! O zaman sana ceza yazacağım. Belki bu farkındalığını arttırır.';

    var comments = !speed ? noIdea : speed < 15 ? tooSlow : speed > 40 ? tooFast : justRight;
    var response = !speed ? comments : speed + 'km/h, ' + comments;
    return response;
}

document.getElementById("submit").onclick = function () {
    var speed = $('#speed').val();
    $('.modal-body').text(writeTicket(speed));
    $('#result').modal('show');
};