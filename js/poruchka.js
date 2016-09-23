var doc = new jsPDF();
var specialElementHandlers = {
    '#editor': function (element, renderer) {
        return true;
    }
};

$('#cmd').click(function () {
    doc.fromHTML($('#content').html(), 12, 12, {
        'width': 500,
            'elementHandlers': specialElementHandlers
    });
    doc.save('poruchka.pdf');
});
