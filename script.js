const countryList = $('#country');

function searchCountry() {
	let countryName = $('#country-name').val();
	if (!countryName.length) {
		countryName = 'Poland';
	}
	$.ajax ({
		url :  `https://restcountries.eu/rest/v1/name/${countryName}`,
		method : 'GET',
		success : showCountryList,
	});
}

function showCountryList(resp) {
	countryList.empty();
	resp.forEach(item => {
        const $li = $('<li>').appendTo(countryList);
        const $name = $('<h3>').text(`${item.name} (${item.nativeName}) - ${item.alpha2Code}`);
        const $spell = $(`<p>${'Alternative spellings: '.bold()}${item.altSpellings.join(',  ')}</p>`);
        const $capital = $(`<p>${'Capital: '.bold()}${item.capital}</p>`);
        const $region = $(`<p>${'Region: '.bold()}${item.subregion}</p>`);
        const $population = $(`<p>${'Population: '.bold()}${item.population} people</p>`);
        const $time = $(`<p>${'Time zone: '.bold()}${item.timezones}</p>`);
        const $currencies = $(`<p>${'Currency: '.bold()}${item.currencies}</p>`);
        const $area = $(`<p>${'Area: '.bold()}${item.area} km<sup>2</sup></p>`);
        const $callCode = $(`<p>${'Calling code: '.bold()}(+${item.callingCodes})</p>`);
        $li.append($name).append($spell).append($capital).append($region).append($population).append($time).append($currencies).append($area).append($callCode);
    });
}

$('#search').on('click', searchCountry);
