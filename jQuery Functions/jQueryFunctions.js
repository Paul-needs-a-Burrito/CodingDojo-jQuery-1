$('button.add-class').click( function () {
    $('p.add-class').addClass('red');
} );

$('button.slide-toggle').click( function () {
    $('img.show-image').slideToggle('slow');
} );

$('button.append-paragraph').click( function () {
    $('p.append-paragraph').append("<p>This is a new paragraph!</p>");
} );
