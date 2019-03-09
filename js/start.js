/***************************************************************
 *
 *   Bult By : Luke@jcsc.biz for Mr. Todd White
 * 
***************************************************************/
$(document).ready(function(){
  $(".title-center").hide();
  $(".search-container").hide();
  $(".title-center").fadeIn(1000);
  $(".search-container").fadeIn(1000);
  
  $("#order-click").on("click",function(){
      $(this).addClass("hide");
      $('.order-form').fadeIn(2000);
      setTimeout(function(){
				var color = $("#search-box").css("color");
        $("#search-box").attr("placeholder","Ex. Red Robin");
      },5000);
  });
  $("#search-box").keypress(function(e){
    if(e.which === 13){
      var search_value = $("#search-box").val();
      $(this).fadeOut(2000);
      $('#loading').fadeIn(3000);
      setTimeout(function(){$("#loading").fadeOut(2000)},5000);
			//Hide Search Bar
			$(".search-container").fadeOut(2000);
			//Hid Search Container
			setTimeout(function(){
				$(".search-container").css({"width":"80%","height":"500px","margin-left":"10%"});
			},2001);
			//Show Search Container		
			setTimeout(function(){
				$(".search-container").fadeIn(3000);
			},3000);
			//Call  Search  Function 
      searchQuery(search_value);
    }
  });
	
  function searchQuery(input){
		//get location data
    if(navigator.geolocation){
			navigator.geolocation.getCurrentPosition(function(position){
          var lat = position.coords.latitude;
          var long = position.coords.longitude;
					alert("test ");
					apiCall(input,lat,long);
			//ends  geolocation get position function
      });
   	//end if statement  for location
    }
		//ends  search function
	}
	//Restaraunt Search Api Function
	function apiCall(input,lat,long){
			alert("api function Called"+"\nlat:"+lat+"\nLong:"+long);
			var access_token = "f93c523e2dba1edd";
			var url1  = "https://api.eatstreet.com/publicapi/v1/restaurant/search?method=both&latitude="+lat+"&longitude="+long+"&pickup-radius=20"+"&access-token="+access_token;
			//working uri json call
			var url2 = "https://api.eatstreet.com/publicapi/v1/restaurant/search?method=both&street-address=316+W.+Washington+Ave.+Madison,+WI&access-token=f93c523e2dba1edd";
			$.getJSON(url1, function(resp){
				alert(url1);
				console.log(resp);
				var leng= resp["restaurants"].length;
				for(var i = 0; i<= leng - 1; i++){
					var name = resp["restaurants"][i]["name"];
					var inp = input.split(" ").toLowerCase();
					alert(inp[0]);
					if(name.indexOf(inp[0]) >=0){
							alert(resp["restaurants"][i]["name"]);
					}
				}
				alert(resp["restaurants"]);
			});
	}
});