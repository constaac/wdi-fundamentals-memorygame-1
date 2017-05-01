var cardOne = {
	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png"
}

var cardTwo = {
	rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png"
}

var cardThree = {
	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-hearts.png"
}

var cardFour = {
	rank: "king",
	suit: "diamonds",
	cardImage: "images/king-of-diamonds.png"
}



var cards = [cardOne, cardTwo, cardThree, cardFour];
var cardsInPlay = [];

var checkForMatch = function()
{
	if (cardsInPlay[0] === cardsInPlay[1]) 
	{
      alert("You found a match!");
  	}
	else 
  	{
      alert("Sorry, try again.");
  	}
}

var flipCard = function()
{
	var cardId = this.getAttribute('data-id');
	console.log("User flipped " + cards[cardId].rank);
	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suit);
	cardsInPlay.push(cards[cardId].rank);

	this.setAttribute('src', cards[cardId].cardImage)

	if(cardsInPlay.length === 2)
	{
		checkForMatch();
	}
}

var createBoard = function(){
	for (var i = 0; i < cards.length; i++) 
	{
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src','images/back.png');
		cardElement.setAttribute('data-id', i);
		cardElement.addEventListener('click', flipCard);
		var container = document.getElementsByTagName('div')[0];
		if (cardElement !== null) 
		{
      		container.appendChild(cardElement);
    	}else 
    		console.log("Uncaught TypeError: Cannot read property 'appendChild' of undefined");
	//	document.getElementsByTagName('game-board')[0].appendChild(cardElement);
	/*
	Couldn't get the command on line 71 to execute properly. Used div instead of 'game-board'
	to append the cardElements.
	*/
    }
}

createBoard();