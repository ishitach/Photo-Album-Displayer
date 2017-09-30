(function ($) {

    var btn1 = document.querySelector('#button1');//add album
    var content = document.querySelector('#content');//add album
    var btn2 = document.querySelector('#button2'); //for save
    var btn3 = document.querySelector('#button3');  //for cancel
    var btn4 = document.querySelector('#button4');//add photo 
    var btn5 = document.querySelector('#button5'); //popup save
    var btn6 = document.querySelector('#button6');//popup cancel
    var listid1 = document.querySelectorAll('#listid1');
    var box = document.querySelector('#box');
    var overlay = document.querySelector('#overlay');
    var popup = document.querySelector('#popup');
    var dummy = document.querySelector('#dummy');
    var albumsarr = [];
    var photo = [];

    //$("li:first").click(function () {
    //    $("overlay").toggle();
    //});

    function alb2() {
        location.hash = "albums/create";
        $("#htext").text("Album Name");
       // $("#content").empty();
        $(btn1).css("visibility", 'hidden');
        $(btn2).css("visibility", 'visible');
        $(btn3).css("visibility", 'visible');
        $(btn4).css("visibility", 'visible');
        // $(listid1).css("display", 'none');
       $(listid1).css("visibility", 'hidden');
        $(box).css("visibility", 'visible');

    }

    function alb1() {
        location.hash = "#albums";
        
        $(btn1).css("visibility", 'visible');
        $(btn4).css("visibility", 'hidden');
        $(btn2).css("visibility", 'hidden');    
        $(btn3).css("visibility", 'hidden');
        $(listid1).css("visibility", 'visible');
        $(box).css("visibility", 'hidden');
    }

    function pop() {
        $('#overlay').show(); $('#popup').show();
    }
    
    var temp2 = [];
    var acount = 0;
    var temp1 = {};
    function save1() {
        temp1.pname = box2.value;
        //alert(temp1.pname);
        temp1.purl = box3.value;
        var xp = funp.data.length;
        var pid;
        if (xp % 50 === 0) {
            pid = parseInt(xp / 50);
        }
        else {
            pid = parseInt(xp / 50) + 1;
        }

        temp2.push({
            "albumId": acount,
            "id": xp + 1,
            "title": temp1.pname,
            "url": temp1.purl,
                        "thumbnailUrl": temp1.purl
        });
        console.log(temp2[0]);
    }



    //for (var i in localStorage) {
    //    console.log(localStorage[i]);
    //}
    var userId;

    function save2() {
               if (box1.value) {
            acount++;
            temp1.aname = box1.value;

            if (acount % 10 === 0) {
                userId = parseInt(acount / 10);
            }
            else {
                userId = parseInt(acount / 10) + 1;
            }
                   //debugger;
                   //    console.log(funa.data[0]);
           // alert("entering in array");
          //  debugger;
//albums.push({ 'userid': 1, 'id': 1, 'title': "first", 'photos': [] });
          //  persist2();
          // alert("entered in array");

          //  funa.data.push({ 'userId': userId, 'id': acount, 'title': box1.value });

            $("#listid1").append('<li class="class5"></li>');

            //alb1();
            $("#listid1 li:last").append('<div class="class3"><h5 class="class1"></h5><p class="class4"></p> <button class="cbtn1">/</button>  <button class="cbtn2"> x </button><img class="class2"></img></div>');//.append('<p></p>');
            $("#listid1 li").attr('class', 'list');
            $("#listid1 li h2").attr('class', 'list2');

           $('.class1').get(acount - 1).innerHTML = funa.data[acount - 1].title;

            $(".class1").css({ "text-align": "center", "top": "100px", "left": "20px", "position": "absolute", "z-index": "10" });
            $(".class4").css({ "left": "50%", "bottom": "5px", "position": "absolute", "z-index": "10" });
            $("#listid1").css({ "top": "100px" });
            $(".cbtn1").css({ "right": "20%", "top": "10px", "position": "absolute", "z-index": "10", "border-radius": "5px" });
            $(".cbtn2").css({ "right": "10%", "top": "10px", "position": "absolute", "z-index": "10", "border-radius": "5px" });
            $(".class3").css({ "top": "0px", "left": "0px", "position": "relative" });

              $(".list").css({ 'height': '200px', "width": "250px", "margin": "20px" });
               $(".class3").css({ 'height': '100px', "width": "100px", "position": "absolute" });
            $(".class2").css({ 'height': '100%', "width": "100%", "top": "0px", "left": "0px", "position": "absolute" });
            //  $("#listid1 li img:last").attr("src", funa.data[acount].photos[0].url);
            //$('.class4').get(acount).innerHTML = funa.data[acount].photos.length;
            alb1();
        }
        else {
            alert("enter name");
        }
           }

    function pop1() {
        $('#overlay').hide(); $('#popup').hide();
    }
    var albums;

    function persist() {
        if (funp.data && funa.data) {
            var photos = funp.data;
            albums = funa.data;
            // funp = null; funa = null;

            albums.map(function (album) {
                album.photos = photos.filter(function (photo) {
                    return photo.albumId === album.id;
                });
            });
          //  persist1();

            if (funa.data.length > 0) {
                     load1();
            }
        }
    }


    function persist1() {
        console.log(window.localStorage.getItem("albumsarr"));

        if ( window.localStorage.getItem("albumsarr")) {
            alert('yes before');
        }
        else {
            alert('no before');
            window.localStorage.setItem("albumsarr", JSON.stringify(albums));
            alert('yes after');
        }
    }

    function persist2() {
        window.localStorage.setItem("albumsarr", JSON.stringify(albums));
    }


    function load1() {
                var ix;
        for (ix = 0; ix < funa.data.length; ix++) {
            acount++;
            $("#listid1").append('<li class="class5"></li>');
            $("#listid1 li").attr('lid', function (ix) { return ix + 1; });
            $("#listid1 li:last").append('<div class="class3"><h5 class="class1"></h5><p class="class4"></p> <button class="cbtn1">/</button>  <button class="cbtn2"> x </button><img class="class2"></img></div>');//.append('<p></p>');
            $("#listid1 li").attr('class', 'list');
            $("#listid1 li h2").attr('class', 'list2');
            $('.class1').get(ix).innerHTML = funa.data[ix].title;
            $(".class1").css({ "text-align": "center", "top": "100px", "left": "20px", "position": "absolute", "z-index": "10" });
            $(".class4").css({ "left": "50%", "bottom": "5px", "position": "absolute", "z-index": "10" });
            $("#listid1").css({ "top": "100px" });
            $(".cbtn1").css({ "right": "20%", "top": "10px", "position": "absolute", "z-index": "10", "border-radius": "5px" });
            $(".cbtn2").css({ "right": "10%", "top": "10px", "position": "absolute", "z-index": "10", "border-radius": "5px" });
            $(".class3").css({ "top": "0px", "left": "0px", "position": "relative" });
            $(".class2").css({ 'height': '100%', "width": "100%", "top": "0px", "left": "0px", "position": "absolute", "border-radius": "5px" });
            $("#listid1 li img:last").attr("src", funa.data[ix].photos[0].url);
            $('.class4').get(ix).innerHTML = funa.data[ix].photos.length;
        }
      //  persist1();
    }

        function funp() {
            funp.data = arguments[0];
            persist();
        }
        function funa() {
            funa.data = arguments[0];
            persist();
        }
        btn1.addEventListener('click', alb2);
        btn3.addEventListener('click', alb1);
        btn2.addEventListener('click', save2);

        btn4.addEventListener('click', pop);
        btn5.addEventListener('click', save1);
        //   btn6.addEventListener('click', pop1);
        alb1();
    
    $.ajax(
    {
        url: "https://jsonplaceholder.typicode.com/albums",
        success: funa
    });
    $.ajax({

        url: "https://jsonplaceholder.typicode.com/photos", success: funp
    });
})(jQuery);