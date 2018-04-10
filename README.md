# Frontend for designers 

Op deze website is een API ingeladen met films. Deze films worden laten zien in een carousel waar je doorheen kunt klikken. Tevens wordt er een samenvatting van elke film laten zien en een lijst met de acteurs die erin spelen. 

De carrousel kun je op verschillende manieren bedienen. Door namelijk op de pijltjes (op de pagina) te klikken en op de pijltjes op je toetsenbord. In lijst met acteurs staat foto's en namen waar je doorheen kunt scrollen met je trackpad.


![alt text](https://github.com/AnoukDrenthe/FrontendOpdracht2-3/blob/master/images/Schermafbeelding%202018-04-10%20om%2016.36.42.png)
![alt text](https://github.com/AnoukDrenthe/FrontendOpdracht2-3/blob/master/images/Schermafbeelding%202018-04-10%20om%2016.36.53.png)

Het maken van de website begon met de structuur bedenken van de carousel. Hierdoor kon ik makkelijk zien hoe ik mijn website moest opbouwen en het gemakklijker in elkaar kon zetten.
De schets voor de pagina:
![alt text](https://github.com/AnoukDrenthe/FrontendOpdracht2-3/blob/master/images/schets.jpeg)

Door deze schets kon ik gemakkelijk met JQuery de HTML structuur maken.
Doormiddel van de Principles of User Interface Design heb ik mijn website gemaakt. Door bijvoorbeeld de knoppen, zij zorgen ervoor dat de user in control blijft en de focus ligt op de afbeelding van de film.

De carrousel heb ik de volgende code gebruikt:

     $(function () {
             function go_next() {
                 var current_movie = $('#main > article.active').next();
                 var last_movie = $('#main  > article').last();

                 if (last_movie.hasClass('active')) {
                     $('#main  > article').removeClass('active');
                     $('#main > article:nth-of-type(1)').addClass('active');

                 } else {
                     $('#main  > article').removeClass('active');
                     $(current_movie).addClass('active');
                 };
             }; //for: next

             function go_prev() {
                 var current_movie = $('#main  > article.active').prev();
                 var first_movie = $('#main  > article').first();

                 if (first_movie.hasClass('active')) {
                     $('#main  > article').removeClass('active');
                     $('#main  > article:last-of-type').addClass('active');

                 } else {
                     $('#main > article').removeClass('active');
                     $(current_movie).addClass('active');
                 };

             }; //for: prev


             $('.right').on("click", function () {
                 go_next();
             });

             $('.left').on("click", function () {
                 go_prev();
             });

             $(document).keydown(function (e) {
                 if (e.keyCode == 37) {
                     go_prev();
                 }
             }); //for: next keyboard

             $(document).keydown(function (e) {
                 if (e.keyCode == 39) {
                     go_next();
                 }
             }); //for: prev keyboard
             
             
Door het gebruik van JQuery kon ik gemakkelijk functions aanmaken die de carrousel maken. De carrousel is gemaakt doormiddel van het gebruik van classes. De class "active" wordt de plaats op het article dat je op dat moment een display:'block' wil geven. Wanneer je op de pijltjes klikt wordt de class opgeschoven naar de volgende of vorige.

De HTML structuur heb ik ook gemaakt met JQuery, namelijk zo:

       $.getJSON("json.json", function (data) {
             for (i = 0; i < data.length; i++) {
                 var filmnaam = data[i].title;
                 var actor = data[i].actors;
                 var plot = data[i].plot;
                 var cover = data[i].cover;

                 $('section').append('<article id="movie' + i + '">\
                    <h1>Anouks Favorite movies:</h1>\
                    <img class = "animated flip flipOutY lightSpeedOut rotateIn"\
                     src="' + cover + '">\
                     <h1> ' + filmnaam + ' </h1>\ <h2>Plot</h2>\
                    <p>' + plot + '</p>\
                    <h1>Actors</h1>\
                    <div class = "actors scrollmenu"></div></article>')

                     for (a = 0; a < actor.length; a++) {
                         var actor_name = actor[a].actor_name;
                         var photo = actor[a].url_photo;


                         $('#movie' + i + ' .actors').append('<article>\
                    <img class "profile-picuters src="' + photo + '\
                    "><h1>' + actor_name + '\</h1></article>')
                     }; //for: actors
                 }; //for: data
             }).done(function () {
             $('section > article:nth-of-type(1)').addClass('active');
         });
         
Dit is een erg gemakkelijk optie om je JSON file in te laden, omdat je de HTML structuur zelf moet schrijven en er gemakkelijk classes aan kan geven.

De acteurs is scrollbaar door CSS.
          
         .actors.scrollmenu {
              overflow: auto;
              white-space: nowrap;
              text-decoration: none;
           }

           .scrollmenu::-webkit-scrollbar {
               display: none;
           }
  
  
De annimatie die aan de article is toegevoegd komt van een library in mijn bestand flip.css. Hierin staan verschillende animaties die je kan toevoegen doormiddel van classes, zoals deze:


    @keyframes flipOutY {
     from {
        -webkit-transform: perspective(400px);
        transform: perspective(400px);
    }
    30% {
        -webkit-transform: perspective(400px) rotate3d(0, 1, 0, -15deg);
        transform: perspective(400px) rotate3d(0, 1, 0, -15deg);
        opacity: 1;
    }
    to {
        -webkit-transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
        transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
        opacity: 0;
          }
    }         
     .flipOutY {
    -webkit-animation-duration: 0.75s;
    animation-duration: 0.75s;
    -webkit-backface-visibility: visible !important;
    backface-visibility: visible !important;
    -webkit-animation-name: flipOutY;
    animation-name: flipOutY;
     }

Uiteindelijk is hier mijn eindproduct uitgekomen met mijn favorieten lijst van films
