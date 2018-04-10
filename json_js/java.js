 $.getJSON("json_js/json.json", function (data) {
             for (i = 0; i < data.length; i++) {
                 var filmnaam = data[i].title;
                 var actor = data[i].actors;
                 var plot = data[i].plot;
                 var cover = data[i].cover;

                 $('section').append('<article class = "animated flip flipOutY lightSpeedOut rotateIn" id="movie' + i + '">\
                    <h1>Anouks Favorite movies:</h1>\
                    <img src="' + cover + '">\
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

         });
