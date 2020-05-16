//terminology check
//[] is a 'square bracket' used in an array
//{}those are 'curly braces' used in an object and function
//( those are 'parentheses' used in many different places like functions,querySelector(),etc.

//this is the OLD way we created an array. By only putting a single string in each index (between the commas,).
var oldItemsArrayExample=['image-1.jpg','image-2.jpg','image-3.jpg', '...'];
//This is okay to use in the beginning, but it  only contains a single piece of information. It won't work when you want more information for each item...

//INSTEAD
//here, we use {Objects} in each index to hold multiple pieces of information for each archived item.
//note the {property: 'value'} syntax similar to CSS, except here you get to create property name too
var organizedArchiveItems=[



	{  
		title: 'Anime gamer aesthetic girl',
		imageFile:'anime gamer girl aesthetic google.JPG',
		description: 'I sketched a google image<br> picture. <br> Date: 11.25.2016',
		broadSpecific:-2 
	
	},
	{
		title:'Brad Mondo fanart',
		imageFile: 'Brad Mondo.jpg',
		description: 'Fanart of one of my favorite <br>youtubers. <br>Date: 2.1.2018',
		broadSpecific:-2

	},
	{
		title: 'Bunny Photomontage',
		imageFile: 'bunny photomontage one.jpg',
		description: 'This is a photomontage of my pet<br> bunny that I worked on for a <br> assignment. <br> Date: Unknown',
		broadSpecific: -1
	},
	
	{
		title: 'Bunny snacking',
		imageFile: 'bunnyeating.jpg',
		description:'Enjoying a little treat. <br> Date: 7.11.2018',
		broadSpecific: -1
	},
	{
		title:'Bunny Photomontage GIF',
		imageFile: 'bunny-montage-2.gif',
		description: 'Another photomontage assignment <br> I made for class except this one<br> include gifs. <br> Date:Unknown',
		broadSpecific:-1
	},




	{
		title: 'His first day home',
		imageFile: 'Day1home.jpg',
		description: 'We rescued him from the outdoors and <br> welcome him home. <br> Date:8.4.2016',
		broadSpecific:-1
		
	},

	{
		title: 'Eye animation',
		imageFile: 'eye-animation.gif',
		description: 'My first gif I made for class. <br> Date: Unknown',
		broadSpecific:2 
	},
	{
		title: 'FriendxYoshi',
		imageFile:'friendxyoshi-collab-gif.gif',
		description: 'My second gif I made for class <br> incorporating my friend. <br>Date: Unknown',
		broadSpecific:2 

	},

	{

		title: '#IMissYou',
		imageFile:'I miss you project.jpg',
		description:'A project I worked on during <br> quarantine to let my kindergartener <br> group know I miss them. <br>Date: 4.21.2020',
		broadSpecific:-2 
	},
	{

		title:'Jisoo Blackpink fanart',
		imageFile: 'Jisoo Blackpink.jpg',
		description: 'One of my favorite kpop idol <br>in a girl group called Blackpink. <br>Date: 8.29.2018',
		broadSpecific:-2 
	},
	{

		title:'Minimalistic Tattoos',
		imageFile:'minimalistic tattoo.jpg',
		description: 'Some sketches of design I like <br>and might consider.<br> Date: 2.8.2018',
		broadSpecific:-2 
	},
	{

		title:'Namiicho fanart',
		imageFile:'Namiicho.jpg',
		description:'Fanart of one of my <br>favorite youtubers. <br>Date: 2.3.2018',
		broadSpecific:-2 
	},
	{

		title:'Unnamed Painting',
		imageFile: 'painting class.JPG',
		description:'Something I made in painting class. <br>Date: Unknown',

		broadSpecific:-2
	},
	
	{

		title:'Rose Blackpink fanart',
		imageFile:'Rose Blackpink.jpg',
		description:'One of my favorite kpop idol<br> in a girl group called Blackpink. <br> Date: 2.11.2018.',
	    broadSpecific:-2 
	},
	{

		title:'Room Decor Art',
		imageFile:'room decor art.jpg',
		description:'I decorated my wall <br>using art , cards and <br>drawings gifted to<br> me by students. <br> Date: 2.17.2019',
		broadSpecific:-2
	},
	{

		title:'Bunny Shower',
		imageFile:'showerpic.jpg',
		description:'Unaware he was getting  a bath in  the <br> sink. <br> Date: 11.9.2019',
		Category:-1
	},
	{

		title:'Stamp Art',
		imageFile:'Stamp Art.jpg',
		description:'Using stamp testers at MUJI store. <br> Date: 4.10.17',
		broadSpecific:-2
	},
	{

		title: 'Charcoal Art',
		imageFile:'unfinished charcoal one.JPG',
		description:'Unfinished pieces using <br>my favorite art medium. <br> Date: Unknown',
		broadSpecific:-2
	},
	{

		title: 'Charcoal Art',
		imageFile:'unfinished charcoal two.JPG',
		description:'Unfinished pieces using <br> my favorite art medium. <br>  Date:Unknown',
		broadSpecific:-2 


	},
{
		title:'Bunny Photomontage GIF',
		imageFile: 'bunny-montage-2.gif',
		description: 'Another photomontage assignment <br> I made for class except this one<br> include gifs. <br> Date:Unknown',
		broadSpecific:2
	},

{
	title: 'Pokemon Drawing',
	imageFile:'Pokemon drawing.JPG',
	description:'One of my after school students gifted me this art piece. <br> Date: 12.12.19',
	broadSpecific:-2
},
{
	title:'BT21 and Pokemon Drawings',
	imageFile:'BT21 and Pokemon.jpg',
	description:'Drawing in my friends notebook. <br> Date: 10.14.19',
	broadSpecific:-2
},
	{
		title:'Pokemon Drawings',
		imageFile:'Pokemons.jpg',
		description:'Drawing in my friends notebook. <br> Date: 10.14.19',
		broadSpecific:-2
	},


{
	title:'BT21 Sketches',
	imageFile:'BT21 Sketches.jpg',
	description:'Drawing in my friends notebook. <br> Date: 10.14.19',
		broadSpecific:-2
},

{
	title:'Pikachu Sketches',
	imageFile:'Pikachu.jpg',
	description:'Drawing in my friends notebook. <br> Date: 10.14.19',
		broadSpecific:-2
},

{
	title:'Bunny Curious',
	imageFile:'bunny kiss.jpg',
	description:'Leaning in to the camera to sniff.<br> Date: 11.10.19 ',
	broadSpecific:-1
},


	{
		title: 'Bunny Sniffing',
		imageFile:'bunny sniffing.mp4',
       description: 'Unaware he was getting a bath in the sink.  <br> Date: 11.9.2019',
		broadSpecific: 1 
	},
	{
		title: 'Bunny eating Veggie',
		imageFile:'eating veggies.mp4',
		description:'I was feeding in veggies. He quite enjoyed it.<br> Date: 9.13.2019',
		broadSpecific:1 
	},
	{
		title: 'Bunny eating grapes',
		imageFile: 'eating grapes.mp4 ',
		description: 'I was feeding him grapes. <br> Date: 8.13.2019',
		broadSpecific:1
	},
	{

		title:'Pokemon',
		imageFile:'pokemon drawings.mp4',
		description:'I decided to draw in my friends notebook for fun. <br> Date: 10.14.2019',
		broadSpecific:1
	},
	

 ];

//Select a single container to shove ALL of it in one. (no need for querySelectorAll)
var grid = document.querySelector('.grid');

//Main function that generates content when page loads, when click button or filter
function generate(items) {
	grid.innerHTML = ''; 	//clear existing items first
	
	items.forEach(item => {	//we use += inside a loop to ADD every item one after another
		grid.innerHTML += `
			<div class="photo_items">
			<div class="item">
				<img src="image/${item.imageFile}" class="img" />
				
				<div class="container">
					<h5 item_title class="title">${item.title}</h5>
					<p class="description">${item.description}</p>


					<div class="photo_items">
			<div class="item">
				<video src="image/${item.imageFile}" class="img" />
			
				
				<div class="container">
					<h5 item_title class="title">${item.title}</h5>
					<p class="description">${item.description}</p> 

					
				</div>
		
		`;
	
				
		
		

	});
}

generate(organizedArchiveItems); //run function on page load, loading the full array

function filterContent(){
	var value = +event.target.value; //get value from HTML select dropdown and convert to number with "+"
	var filteredItems = organizedArchiveItems.filter(item => {
		return item.broadSpecific == value;
	});
	generate(filteredItems);// run function to generate content with new filteredItems array
}

	function randomize() {
  // array shuffle code credit: https://css-tricks.com/snippets/javascript/shuffle-array/
  // don't worry about why this works, it's complicated. We are creating a new array based on the original organizedArchiveItems
  // but the { objects } are in a different order...like shuffling a deck of cards
  var randomItems = organizedArchiveItems.sort(() => 0.5 - Math.random());
  generate(randomItems); // run function to generate content with new randomItems array 
}

