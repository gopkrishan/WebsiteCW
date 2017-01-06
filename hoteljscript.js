function getGallery(){ //function is executed when Gallery button is pressed
    'uses strict';
        var ctext = '<div id="gallery"><h1>Gallery</h1>'; //content of 'ctext' variable
            ctext += '<ul>';
            ctext += '<li class="column1"><a class="fancybox" rel="group" href="images/gallery1.jpg"><img src="images/thumbs/gallery1_thumb.jpg" alt="Picture 1" /></a>'
            + ' <a class="fancybox" rel="group" href="images/gallery2.jpg"><img src="images/thumbs/gallery2_thumb.jpg" alt="Picture 2" /></a>'
            + ' <a class="fancybox" rel="group" href="images/gallery3.jpg"><img src="images/thumbs/gallery3_thumb.jpg" alt="Picture 3" /></a></li>';
            ctext += '<li class="column2"><a class="fancybox" rel="group" href="images/gallery4.jpg"><img src="images/thumbs/gallery4_thumb.jpg" alt="Picture 4" /></a>'
            + ' <a class="fancybox" rel="group" href="images/gallery5.jpg"><img src="images/thumbs/gallery5_thumb.jpg" alt="Picture 5" /></a>'
            + ' <a class="fancybox" rel="group" href="images/gallery6.jpg"><img src="images/thumbs/gallery6_thumb.jpg" alt="Picture 6" /></a></li>';
            ctext += '<li class="column3"><a class="fancybox" rel="group" href="images/gallery7.jpg"><img src="images/thumbs/gallery7_thumb.jpg" alt="Picture 7" /></a>'
            + ' <a class="fancybox" rel="group" href="images/gallery8.jpg"><img src="images/thumbs/gallery8_thumb.jpg" alt="Picture 8" /></a>'    
            + ' <a class="fancybox" rel="group" href="images/gallery9.jpg"><img src="images/thumbs/gallery9_thumb.jpg" alt="Picture 9" /></a></li>';
            ctext += '</ul>';
    
    
            ctext += '</div>';
        $('#maindiv').empty(); //removes the content inside #maindiv
        $('#maindiv').append(ctext);  //adds 'ctext' content inside of #maindiv  
}
function getHomepage(){ //function is executed when Home button is pressed
        var ctext = '<div id="home">'; //content of 'ctext' variable
            ctext += '<ul><li><a class="fancybox" rel="group" href="images/alanya_1.jpg"><img src="images/thumbs/alanya_1_thumb.jpg" alt="Alanya Image 1" /></a>'
                  + ' <a class="fancybox" rel="group" href="images/alanya_2.jpg"><img src="images/thumbs/alanya_2_thumb.jpg" alt="Alanya Image 2" /></a>'
                  + ' <a class="fancybox" rel="group" href="images/alanya_3.jpg"><img src="images/thumbs/alanya_3_thumb.jpg" alt="Alanya Image 3" /></a></ul>';
            ctext += '<h1>Welcome to OK Hotel</h1>';
            ctext += '<p>OK is located in the heart of the Medditeranean Turkey in Alanya. There is an extremely characteristic, quite and lively area within short walk distance to all sites and is surrounded by the extraordinary beauty of churches, buildings, shops and monuments. OK Hotel is part of a lovingly restored 1800 palace.</p>';
            ctext += '<p>On entering this charming hotel in Alanya, you will immediately sense its special intimate atmosphere that makes you feel like being in your own palace.  Each detail has been passionately chosen and each room deserves a visit. OK Hotel style mixes valuable antiques and original art with an unexpected eclectic contemporary twist.</p>';
            ctext += '<p>The special charm and the cosy mood of OK Hotel will make you feel like in an ancient palace.</p>';
            ctext += '<p>Step into a world of ease, comfort and Turkish hospitality at OK Hotel. Located in a walking distance to the town center, famous shopping centers and night clubs, the hotel is overlooking beautiful sandy beaches and ancient fortress of Alanya. ' 
                  +  'The all-inclusive OK Hotel boasts a private stretch of sandy beach along the Mediterranean Sea and a rooftop restaurant overlooking Beaches of Alanya.</p>';
            ctext += '<p>All spacious rooms at OK Hotel are renovated in 2012 and they are all air-conditioned and feature private balconies, free Wi-Fi and satellite TV. Many rooms offer uninterrupted sea views. Various room setups are available at your request such as double or Twin rooms, Triple rooms, Family rooms,Jr. Suites, Family Suites.</p>';
            ctext += '<p>The buffet restaurant serves a mix of European and Turkish cuisines and boasts a stunning panoramic views of Alanya. Complimentary snacks and drinks are served all day in the private beach area, Pool bar and Corner Restaurant offering a Snack buffet and Pide/Pizza variations.';  
            ctext += '<p>Guests can relax in OK Hotel sauna and Turkish bath, or enjoy a traditional foam massage. OK Hotel has a large outdoor pool and terrace. Cleopatra Beach is a 10-minute drive from OK Hotel and a bus stop is located right in front of the hotel.</p>';
            ctext += '</div>';
        $('#maindiv').empty(); //removes the content inside #maindiv
        $('#maindiv').append(ctext); //adds 'ctext' content inside of #maindiv       
}
function getFacilities(){ //function is executed when Facilities button is pressed
    'uses strict';
        var ctext = '<div id="facilities"><h1>Hotel Facilities</h1>';
            ctext += '<h2>Health and beauty:</h2><p>Massages and Turkish baths are among the treatments. There is also a gym stocked with various fixed-weight machines, dumbells,weights, etc.</p>';
            ctext += '<a class="fancybox" rel="group" href="images/turkish_bath.jpg"><img src="images/thumbs/turkish_bath_thumb.jpg" alt="Turkish Baths" /></a>';
            ctext += '<h2>Entertainment & Restaurants:</h2><p>Different shows and live bands by the pool terrace(evening entertainment takes place twice a week and includes karaoke and quizzes). There are also different kinds of restaurants in the hotel area and outside the hotel, which are open 24/7 to serve the customers.</p>';
            ctext += '<a class="fancybox" rel="group" href="images/live_bands.jpg"><img src="images/thumbs/live_bands_thumb.jpg" alt="Live Bands" /></a>';
            ctext += '<h2>Pool & Beaches:</h2><p>You can relax in one of our three pools(one of the main pools has a separate kids section), take a sunbath or just take a cocktail by the beach.</p>';
            ctext += '<a class="fancybox" rel="group" href="images/pool.jpg"><img src="images/thumbs/pool_thumb.jpg" alt="Pool" /></a>';
            ctext += '</div>';
        $('#maindiv').empty(); //removes maindiv content
        $('#maindiv').append(ctext);     //adds ctext to maindiv      
}
function sendCmt(key, value) { //uses localstorage to get user comments 
    'uses strict';
    window.localStorage.setItem(key, JSON.stringify(value));
}
function getCmt(key) { //uses localstorage to store the user comments
    'uses strict';
    var storage = window.localStorage;
    var value = storage.getItem(key);
    return value && JSON.parse(value);
}
function clearStorage() { //clears localstorage and usercomments div
    'uses strict';
    window.localStorage.clear();
    $('#userComments').empty();
}

function getComments(){ //executed when Comments button is pressed
    'uses strict';
        if (getCmt('userComments') === null){ //if there are no user comments, it does nothing
            var userComments = ''; 
        } else {
            var userComments = getCmt('userComments'); //if there are, it uses localstorage to store the comment
        }
        var ctext = '<div id="comments"><h1>User comments</h1>'; //ctext content
            ctext += '<p>These comments will help us provide you with a better service</p>';
            ctext += '<input id="namebox" type="text" maxlength="64" size="25" placeholder="Your name">';
            ctext += '<br>';
            ctext += '<textarea id="textbox" class="textbox" rows="10" placeholder="Your comment"></textarea>';  
            ctext += '<button class="menuitem" onclick="saveComment()">Save comment</button>';
            ctext += '<button class="menuitem" onclick="clearStorage()">Clear comments</button>';
            ctext += '</div>';
            
            ctext += '<h3>Comments</h3>';
            ctext += '<div id="userComments"></div>';
            
        $('#maindiv').empty(); //remove #maindiv content
        $('#maindiv').append(ctext); //replace it with ctext content
        $('#userComments').append(userComments); //add new user comments
}
function emptyTextbox(){ //empties the text and name boxes
    'uses strict';
		$('#textbox').val('');
		$('#namebox').val('');
}
function saveComment(){ //executed when user presses Save Comment
    'uses strict';
    var comm = $('#textbox').val(); 	// get the text of the comment
    if (comm === ''){
        return;
    } 		// empty comments are ignored
    var cname = $('#namebox').val(); // get the name of the user
    if (cname === ''){
        cname = 'Anonymous';
    } //default name is Anonymous if user does not specify it
		
    var userComments = $('#userComments').html(); 
		
    userComments = '<p class="cmt"><span class=cname>'+cname+':</span> '+comm+'</p>'+userComments;
    sendCmt('userComments', userComments);	
    $('#userComments').empty();		
    $('#userComments').append(userComments);	// add new user comments
    emptyTextbox();			
}
function roomandservices(){ //executed when rooms and services is pressed
    'uses strict';
    var ctext = '<div id="roomandservices"><h1>Rooms and Services</h1>';
        ctext +='<p>The rooms at the OK hotel are extremely comfortable! Each bedroom at the hotel has been manually designed, the rooms are light and comfortable and equipped with a writing desk, wireless Internet access anf flat screen TVs.</p>';
        ctext +='<h1>Services</h1><p>Air conditioning, bathrooms with either bathtubs or showers, double pillows, flatscreen TVs, satellite TVs,soundproof windows, direct telephone in the room and the bathroom, mini fridges, Wi-Fi Internet, bathroom amenities, hairdryers, breakfast deliveries to the rooms without extra charge.</p>';
        ctext +='<h1>Room types</h1>';
        ctext +='<div id="roomnum1"><ul><li>'
              + '<a class="fancybox" rel="group" href="images/singleroom_albany.jpg"><img src="images/thumbs/singleroom_albany_thumb.jpg" alt="Single Room" /></a>'
              + '<p>Price: 20GBP per night</p>'
              + '<p>Includes: Single bed (110/130cm), shower, toilet, sink, TV, cotton sateen sheets, double pillows,air conditioned room, Wi-Fi</p>'
              + '<p>Description: A perfect room for one person to enjoy the holidays</p></li></ul></div>';
        ctext +='<div id="roomnum2"><ul><li>'
              + '<a class="fancybox" rel="group" href="images/doubleroom_albany.jpg"><img src="images/thumbs/doubleroom_albany_thumb.jpg" alt="Double Room" /></a>'
              + '<p>Price: 38GBP per night</p>'
              + '<p>Includes: Double Bed (110/130cm) or two single beds (110/130cm),two showers, toilet, sink, TV, cotton sateen sheets, double pillows,air conditioned room, Wi-Fi</p>'
              + '<p>Description: An incredible opportunity to bring your spouse or friend with you</p></li></ul></div>';
        ctext +='<div id="roomnum3"><ul><li>'
              + '<a class="fancybox" rel="group" href="images/suite_albany.jpg"><img src="images/thumbs/suite_albany_thumb.jpg" alt="Suite Room" /></a>'
              + '<p>Price: 65GBP per night</p>'
              + '<p>Includes: Double bed (220/230cm), one shower and a bathtub for couples, toilet, sink, TV, cotton sateen sheets, double pillows,air conditioned room, Wi-Fi, bathing towels, dressing gowns</p>'
              + '<p>Description: The best OK Hotel experience that is designed for married couples and honeymoons</p></li></ul></div>';      
        ctext += '</div>';
                
    
        $('#maindiv').empty(); //removes maindiv content
        $('#maindiv').append(ctext); //adds ctext to maindiv
} 
function contactus(){ //executed when Contact us is pressed
    'uses strict';
    var ctext = '<div id="contactus"><h1>Contact us</h1>'; 
        ctext +='<p><a href="mailto:a.gharawi@uea.ac.uk">Abdulrahman Gharawi, CMP, @UEA</a></p>';            
        ctext +='<p><a href="mailto:k.chomaniuk@uea.ac.uk">Kiril Chomaniuk, CMP, @UEA</a></p>';
        ctext +='<p>Please contact us if you have any problems and we will try to solve them as soon as possible.</p>';
        ctext +='<p>It includes, but not limited to:<p>';
        ctext += '<ol>';
        ctext += '<li>Problems with website</li>';
        ctext += '<li>Any queries with facilities</li>';
        ctext += '<li>Room booking questions</li>';
        
        ctext +='</div>';
        $('#maindiv').empty(); //removes maindiv content
        $('#maindiv').append(ctext); //adds ctext to maindiv
}
$(document).ready(function() { //function that calls the javascript of the external plugin called Fancybox (jquery.fancybox.js and jquery.fancybox.pack.js)
    'uses strict';
		$(".fancybox").fancybox();
});
   

