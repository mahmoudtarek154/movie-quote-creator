var quotesarray = [
  {
    quote: '"I\'m gonna make him an offer he can\'t refuse."',
    movie: "'The Godfather' (1972)",
  },

  {
    quote:
      '"From now on, I want you to put an equal amount of blueberries in each muffin."',
    movie: "'Casino' (1995)",
  },

  {
    quote:
      '"So say good night to the bad guy! Come on. The last time you gonna see a bad guy like this again, let me tell you."',
    movie: "'Scarface' (1983)",
  },

  {
    quote: '"I don\'t feel I have to wipe everybody out, Tom. Just my enemies."' ,
    movie: "'The Godfather: Part II' (1974)",
  },

  {
    quote:
      '"I do what I do best; I take scores. You do what you do best; try to stop guys like me."',
    movie: "'Heat' (1995)",
  },

  {
    quote: '"You talkin\' to m\? You talkin\' to me?"',
    movie: "'Taxi Driver' (1976)",
  },

  {
    quote:
      '"To protect the sheep you gotta catch the wolf, and it takes a wolf to catch a wolf."',
    movie: "'Training Day' (2001)",
  },

  {
    quote: '"I Believe Whatever Doesn\'t Kill You Simply Makes You... Stranger."',
    movie: "'The Dark Knight' (2008)",
  },

  {
    quote: '"They may take our lives, but they’ll never take our freedom!"',
    movie: " 'Braveheart  (1995)'",
  },

  {
    quote: '"Just when I thought I was out, they pull me back in."',
    movie: "The Godfather: Part III' (1990)",
  },

  {
    quote:
      '" Don\'t let yourself get attached to anything you are not willing to walk out on in 30 seconds flat if you feel the heat around the corner "',
    movie: "'Heat' (1995)",
  },

  {
    quote:
      '"When the Fox hears the Rabbit scream he comes a-runnin\', but not to help."',
    movie: "'The Silence of the Lambs' (1991)",
  },
];

var qutesh4 = "";
var qutesh2 = "";

var Repeat ;
function quotesdissplay() {

    var RondomNumber = Math.floor(Math.random ()*(quotesarray.length));
    
    if( RondomNumber== Repeat ){
        quotesdissplay() 
    }else{
        qutesh4 = quotesarray[RondomNumber].quote;
        qutesh2 = quotesarray[RondomNumber].movie;
    }
  document.getElementById("qutesh2").innerHTML = qutesh4;
  document.getElementById("qutesh5").innerHTML = qutesh2;

  Repeat = RondomNumber ;

}
