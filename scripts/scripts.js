


//Cat clicker with model view octopus

var modal = {
	count : {
		'a': 0,
		'b': 0,
		'c': 0,
		'd': 0,
		'e': 0
	},
	cats : {
		'a': '<div id="a" ><h2>Pupu</h2><img src="img/cat1.jpg"><h1 id="1" ></h1></div>',
		'b': '<div id="a" ><h2>Mimi</h2><img src="img/cat2.jpg"><h1 id="1" ></h1></div>',
		'c': '<div id="a" ><h2>Sese</h2><img src="img/cat3.jpg"><h1 id="1" ></h1></div>',
		'd': '<div id="a" ><h2>Neni</h2><img src="img/cat4.jpg"><h1 id="1" ></h1></div>',
		'e': '<div id="a" ><h2>Piki</h2><img src="img/cat5.jpg"><h1 id="1" ></h1></div>'
	}
};

var octopus = {
	'cat1': function(){ return view.li1.click(function(){
			view.container.empty();
			
			console.log(modal.count.a);

			view.container.append(modal.cats.a);
			view.id1.text(modal.count.a);
			view.ida.click(function(){
				modal.count.a++;
				view.id1.text(modal.count.a);
			});
		})},

}

var view = {
	'li1': $('#li1'),
	'li2': $('#li2'),
	'li3': $('#li3'),
	'li4': $('#li4'),
	'li5': $('#li5'),
	'container': $('.container'),
	'id1': $('#1'),
	'ida': $('#a')
}

console.log(octopus.cat1());

octopus.cat1();
