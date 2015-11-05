var count = {
	'a': 0,
	'b': 0,
	'c': 0,
	'd': 0,
	'e': 0
}

$('#li1').click(function() {
	$('.container').empty();
	$('.container').append('<div id="a" ><h2>Pupu</h2><img src="img/cat1.jpg"><h1 id="1" ></h1></div>');

	$('#1').text(count.a);

	$('#a').click(function(){
		// i++;
		count.a++;
		$('#1').text(count.a);
	});
});

$('#li2').click(function() {
	$('.container').empty();
	$('.container').append('<div id="a" ><h2>Mimi</h2><img src="img/cat2.jpg"><h1 id="1" ></h1></div>');
	$('#1').text(count.b);
	$('#a').click(function(){
		count.b++;
		$('#1').text(count.b);
	});
});


$('#li3').click(function() {
	$('.container').empty();
	$('.container').append('<div id="a" ><h2>Sese</h2><img src="img/cat3.jpg"><h1 id="1" ></h1></div>');
	$('#1').text(count.c);
	$('#a').click(function(){
		count.c++;
		$('#1').text(count.c);
	});
});

$('#li4').click(function() {
	$('.container').empty();
	$('.container').append('<div id="a" ><h2>Neni</h2><img src="img/cat4.jpg"><h1 id="1" ></h1></div>');
	$('#1').text(count.d);
	$('#a').click(function(){
		count.d++;
		$('#1').text(count.d);
	});
});

$('#li5').click(function() {
	$('.container').empty();
	$('.container').append('<div id="a" ><h2>Piki</h2><img src="img/cat5.jpg"><h1 id="1" ></h1></div>');
	$('#1').text(count.e);
	$('#a').click(function(){
		count.e++;
		$('#1').text(count.e);
	});
});