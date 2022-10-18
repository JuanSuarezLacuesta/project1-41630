
class MoviePremiers{
    constructor(title, date, place, seats){
        this.title = title;
        this.date = date;
        this.place = place;
        this.seats = seats;
    }
    purchaseTicket(){
        let amount = parseInt(prompt("How many seats would you like to purchase?")); 
        let cont = this.seats - amount;
        this.seats = cont;
        const total = amount * 40;
        alert("You purchased " + amount + "seats for " + this.title + "," + " your total for this purchase is: " + total + "$");
    }
}

const movie1 = new MoviePremiers("Black Adam", "15/10", "Los Angeles", 23);
const movie2 = new MoviePremiers("Avatar: Way of Water", "10/12", "Madrid", 209);
const movie3 = new MoviePremiers("Blonde", "10/9", "Paris", 51);
const movie4 = new MoviePremiers("Woman King", "12/9", "San Francisco", 0);
const movie5 = new MoviePremiers("Black Panther", "5/11", "Los Angeles", 0);

const selectionMovies = [movie1, movie2, movie3, movie4, movie5];

function purchase (movie) {
    for (let i = 0; i < 5; i++) { 
        if (movie == selectionMovies[i].title) {
            alert(selectionMovies[i].title + "has " + selectionMovies[i].seats + " seats aviable for the " + selectionMovies[i].date);
            if (selectionMovies[i].seats <= 0) {
                alert("TICKETS ARE SOLD OUT FOR THIS PREMIER");
            } else {
                const name1 = prompt("Please enter your name:");
                const phone1 = prompt("Your phone number:");
                const email1 = prompt("And last, your email:");
                selectionMovies[i].purchaseTicket();
                alert ("A ticket with your name: " + name1 + " your phone number: " + phone1 + " and your email: " + email1 + "has been created for you to pay in person");
            }
        }
    }
}





const premier1 = prompt("Which premier you do you wish to attend?. These are the options: Black Adam, Avatar, Blonde, Woman King, Black Panther");
if (premier1 !== "salir") {
    purchase(premier1);
}



