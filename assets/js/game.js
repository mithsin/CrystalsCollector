
    $(document).ready(function(){
        var ranNum = Math.floor(Math.random()*120-19)+19;
        var red = Math.floor(Math.random()*12-1)+1;
        var blue = Math.floor(Math.random()*12-1)+1;
        var green = Math.floor(Math.random()*12-1)+1;
        var yellow = Math.floor(Math.random()*12-1)+1;
        var win = 0;
        var loss = 0;
        var point = 0;
        
        // print number to start the game
        $("#ranNum").html(ranNum);
        $("#wins").html(win);
        $("#losses").html(loss);
        $("#point").html(point);

        
        // reset after win or loss
        function reset(){
            point = 0;
            var ranNum = Math.floor(Math.random()*120-19)+19;
            var red = Math.floor(Math.random()*12-1)+1;
            var blue = Math.floor(Math.random()*12-1)+1;
            var green = Math.floor(Math.random()*12-1)+1;
            var yellow = Math.floor(Math.random()*12-1)+1;

            $("#ranNum").html(ranNum);
            $("#point").html(point);
                            //delete when complete
                            $("#sred").html(red);
                            $("#sblue").html(blue);
                            $("#sgreen").html(green);
                            $("#syellow").html(yellow);
        	};
        
        function gift(){
       		if (point == ranNum) {
                winner();
                } else if (point > ranNum){
                losser();
                }
       	 };
        
        // onClick for crystal
        $("#red").on("click", function(){
            point = point + red;
            $("#point").html(point);
            gift();
         	});
        $("#blue").on("click", function(){
            point = point + blue;
            $("#point").html(point);
            gift();
        	});
            $("#green").on("click", function(){
            point = point + green;
            $("#point").html(point);
            gift();
        	});
            $("#yellow").on("click", function(){
            point = point + yellow;
            $("#point").html(point);
            gift();
        	});
        
        function winner(){
            alert("You win");
            win++;
            $("#wins").html(win);
            reset();
        };
        function losser(){
            alert("you loss");
            loss++;
            $("#losses").html(loss);
            reset();
        };
});//begin function
