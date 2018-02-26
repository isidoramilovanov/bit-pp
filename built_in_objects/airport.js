"use strict";

(function() {
  console.log("Hi");

  function Person(name, surname) {
    this.name = name;
    this.surname = surname;
    this.getData = function() {
      return this.name + " " + this.surname;
    };
  }

  function Seat(number, category) {
    this.number = number || Math.floor(90 * Math.random() + 10);
    this.category = category || "e";
    this.getData = function() {
      return this.number + ", " + this.category;
    };
  }

  function Passenger(person, seat) {
    this.person = person;
    this.seat = seat;
    this.getData = function() {
      return (
        this.seat.number +
        ", " +
        this.seat.category.toUpperCase() +
        ", " +
        this.person.getData()
      );
    };
  }

  function Flight(relation, date) {
    this.relation = relation;
    this.date = date;
    this.listOfPass = [];
    this.addPassenger = function(passenger) {
           this.listOfPass.push(passenger);
        } ; 
    
    this.getData = function() {
      var listPassData = "";
      var listOfConsonants = [];
      var vowel = "aeiouAEIOU";
      var j = 0;
      if (typeof this.relation == "string") {
        for (var i = 0; i < this.relation.length; i++) {
          if (vowel.indexOf(this.relation[i]) == -1) {
            listOfConsonants[j] = this.relation[i];
            j++;
          }
        
      }
      for (var i = 0; i < listOfConsonants.length; i++) {
        if ((listOfConsonants[i] == "-")) {
          var lastLettOfLocation1 = listOfConsonants[i - 1].toUpperCase();
          var firstLettOfLocation2 = listOfConsonants[i + 1].toUpperCase();
        }
      }
      var firstLettOfLocation1 = listOfConsonants[0].toUpperCase();
      var lastLettOfLocation2 = listOfConsonants[listOfConsonants.length - 1].toUpperCase();
      var relationFormattedString =
        "" +
        firstLettOfLocation1 +
        lastLettOfLocation1 +
        "-" +
        firstLettOfLocation2 +
        lastLettOfLocation2;
        for (var i = 0; i < this.listOfPass.length; i++) {
          listPassData += this.listOfPass[i].getData() + "\n";
        }
           return this.date + " " + relationFormattedString + "\n" + listPassData;
      
    };
        
  }
}

  function Airport() {
    this.name = "Nikola Tesla";
    this.listOfFlights = [];
    this.addFlight = function(flight) {
      this.listOfFlights.push(flight);
    };

    this.getData = function() {
      var sum = 0;
      var listOfPass1 = "";
      for (var i = 0; i < this.listOfFlights.length; i++) {
        sum += this.listOfFlights[i].listOfPass.length;
        listOfPass1 += this.listOfFlights[i].getData();
      }

      return (
        "Airport: " +
        this.name +
        ", total passengers: " +
        sum +
        "\n" +
        listOfPass1
      );
    };
  }

  var createFlight = function(relation, date) {
    return new Flight(relation, date);
  };

  var createPassenger = function(firstName, lastName, seatNumber, category) {
    var name = new Person(firstName, lastName);
    var seat = new Seat(seatNumber, category);
    return new Passenger(name, seat);
  };

  // var person1 = new Person ('John', 'Snow');
  // var seat1 = new Seat (12, 'b');
  // var passenger1 = new Passenger (person1, seat1);
  // var flight1 = new Flight ('b-p', new Date (2018,8,6));
  // flight1.addPassenger(passenger1);
  // console.log(passenger1);
  // console.log(flight1.getData());
  // var airport1 = new Airport ('nt');
  // airport1.addFlight(flight1);
  // console.log(airport1.listOfFlights);

  var flight1 = createFlight("Belgrade-Paris", new Date(2018, 8, 6));
  var flight2 = createFlight("Belgrade -New York", new Date(2018, 8, 15));

  var person1 = createPassenger("John", "Snow", 1, "b");
  var person2 = createPassenger("Sersei", "Lannister", 1, "b");
  var person3 = createPassenger("Daenerys", "Targaryen", 14);
  var person4 = createPassenger("Tyrion", "Lannister");

  flight1.addPassenger(person1);
  flight1.addPassenger(person2);
  flight2.addPassenger(person3);
  flight2.addPassenger(person4);

  var airport = new Airport();
  airport.addFlight(flight1);
  airport.addFlight(flight2);

    //  console.log(airport.getData());

  console.log(flight1.getData());

  
})();