# frontend

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
