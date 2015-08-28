$(document).ready(function() {
	requestXML();
	$('.next').click(function() {
		requestXML();
	});
	$('.tweet-button').click(function() {
		var quotetext = $('.quote-area .quote').html() + ' -' + $('.quote-area .author').html();
		$('.tweet').attr('href', 'https://twitter.com/intent/tweet?hashtags=javascript%2Cquote&text='+ quotetext + '&via=captainmoha');
	});
	
});

function requestXML() {
	$.ajax({
		url: 'http://www.stands4.com/services/v2/quotes.php?uid=4294&tokenid=eEP8dS8jAgLWPME1&searchtype=RANDOM',
		type: 'GET',
		dataType: 'xml',
		success: function(response) {
			xmlParser(response);
		}

	});
}
function xmlParser(response) {
	var quote = $(response).find('quote').text();
	$('.quote-area .quote').html('"' + quote + '"');
	var author = $(response).find('author').text();
	$('.quote-area .author').html(author);
	// add already read quotes
	var shownQuote = $('.quote-area').html();
	$('.seen').append('<li>' + shownQuote + '</li>');
}

