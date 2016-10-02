var	countryList = $('#country');

function searchCountry() {
	var countryName = $('#country-name').val();
	if (!countryName.length) {
		countryName = 'Poland';
	}
	$.ajax ({
		url :  'https://restcountries.eu/rest/v1/name/' + countryName,
		method : 'GET',
		success : showCountryList,
	});
}

function showCountryList(resp) {
	countryList.empty();
	resp.forEach(function(item) {
		var $li = $('<li>').appendTo(countryList),
			$name = $('<h3>').text(item.name + ' (' + item.nativeName + ') - ' + item.alpha2Code),
			$spell = $('<p>' + 'Alternative spellings: '.bold() + item.altSpellings.join(',  ') + '</p>'),
			$capital = $('<p>' + 'Capital: '.bold() + item.capital + '</p>'),
			$region = $('<p>' + 'Region: '.bold() + item.subregion + '</p>'),
			$population = $('<p>' + 'Population: '.bold() + item.population + ' people' + '</p>'),
			$time = $('<p>' + 'Time zone: '.bold() + item.timezones + '</p>'),
			$currencies = $('<p>' + 'Currency: '.bold() + item.currencies + '</p>'),
			$area = $('<p>' + 'Area: '.bold() + item.area + ' km<sup>2</sup>' + '</p>'),
			$callCode = $('<p>' + 'Calling code: '.bold() + '(+' + item.callingCodes + ')' + '</p>');	
			$li.append($name).append($spell).append($capital).append($region).append($population).append($time).append($currencies).append($area).append($callCode);
	});
}

$('#search').on('click', searchCountry);