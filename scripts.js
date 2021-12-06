    // create random background color for profile div
        function random_bg_color() {
        var profile = document.getElementById("profile");
        var x = Math.floor(Math.random() * 222);
        var y = Math.floor(Math.random() * 222);
        var z = Math.floor(Math.random() * 222);
        profile.style.background = "rgb(" + x + "," + y + "," + z + ")";
        console.log(bgColor);}                                                                                                                     
        random_bg_color();  
