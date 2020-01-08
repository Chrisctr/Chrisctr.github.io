

	$(document).ready(function() {
	


				// this approach is interesting if you need to dynamically create data in Javascript 
				var metadata = [];
				metadata.push({ name: "name", label: "Part", datatype: "string", editable: true});
				metadata.push({ name: "chimera", label:"Health", datatype: "string", editable: true});

				// a small example of how you can manipulate the object in javascript


				var data = [];
				data.push({id: 137, values: {"name":"Total","chimera":"100  %"}})
				data.push({id: 138, values: {"name":"Torso","chimera":"100  %"}})
			
				data.push({id: 139, values: {"name":"Starfish","chimera":"100  %"}})
				data.push({id: 140, values: {"name":"Head","chimera":"100  %"}})
			
				data.push({id: 141, values: {"name":"Eyes","chimera":"100  %"}})
				data.push({id: 142, values: {"name":"Arms","chimera":"100  %"}})
			
				data.push({id: 143, values: {"name":"Claw","chimera":"100  %"}})
				data.push({id: 144, values: {"name":"Legs","chimera":"100  %"}})
				
				data.push({id: 145, values: {"name":"Folicerebri ","chimera":"100  %"}})
				data.push({id: 146, values: {"name":"Tail ","chimera":"100  %"}})
				
				
				editableGrid = new EditableGrid("novaGridJsData");
				editableGrid.load({"metadata": metadata, "data": data});
				editableGrid.renderGrid("chimera4", "testgrid");
			})


$(document).ready(function() {
	


				// this approach is interesting if you need to dynamically create data in Javascript 
				var metadata = [];
				metadata.push({ name: "name", label: "NAME", datatype: "string", editable: true});
				metadata.push({ name: "nova", label:"Nova", datatype: "string", editable: true});

				// a small example of how you can manipulate the object in javascript


				var data = [];
				data.push({id: 35, values: {"name":"Level","nova":"1"}})
				data.push({id: 36, values: {"name":"Experience","nova":"0"}})
			
			
			
			
	
				data.push({id: 37, values: {"name":"Class","nova":"Ninja"}})
				data.push({id: 38, values: {"name":"Subclass","nova":"Shinobi, Sensei"}})
			
				data.push({id: 39, values: {"name":"Size","nova":"Medium"}})
				data.push({id: 40, values: {"name":"Type","nova":"Fox Bellua"}})
			
				data.push({id: 41, values: {"name":"Age","nova":"21"}})
				data.push({id: 42, values: {"name":"Affinity","nova":"Dark"}})
				
				data.push({id: 43, values: {"name":"Magical Category","nova":"Category Two (Fire and Ice. Void.)"}})
			
				data.push({id: 44, values: {"name":"Alignment","nova":"Chaotic Neutral"}})
				data.push({id: 45, values: {"name":"Saves","nova":"Strength, Dexterity"}})
			
				data.push({id: 46, values: {"name":"Hit Points","nova":"11"}})
				data.push({id: 47, values: {"name":"Hit Dice","nova":"1d12 + 3"}})
			
				data.push({id: 48, values: {"name":"Weight Capacity","nova":"90lb"}})
				data.push({id: 49, values: {"name":"Status Effects","nova":"null."}})
			
				data.push({id: 50, values: {"name":"Currency (Mensi)","nova":"100"}})
				data.push({id: 51, values: {"name":"Speed","nova":"20m"}})
			
				data.push({id: 52, values: {"name":"Strength","nova":"22 (+6)"}})
				data.push({id: 53, values: {"name":"Dexterity","nova":"15 (+2)"}})
			
				data.push({id: 54, values: {"name":"Constitution","nova":"12 (+1)"}})
				data.push({id: 55, values: {"name":"Intelligence","nova":"4 (-3)"}})
			
				data.push({id: 56, values: {"name":"Wisdom","nova":"12 (+1)"}})
				data.push({id: 57, values: {"name":"Charisma","nova":"12 (+1)"}})
			
				data.push({id: 58, values: {"name":"Accuracy Level","nova":"15"}})
				data.push({id: 59, values: {"name":"Evasion Level","nova":"6"}})
			
				data.push({id: 60, values: {"name":"Weapon Proficiencies","nova":"Simple melee, Martial Melee"}})
				data.push({id: 61, values: {"name":"Equipped","nova":"Nova’s Katana (1d10 + 3 + 6 slash (+1 if two hands are used), can damage heavy armour)"}})
			
				data.push({id: 62, values: {"name":"Off-Hand","nova":"null."}})
				data.push({id: 63, values: {"name":"Holstered","nova":"Nova’s Kunai (1d4 + 3 + 6 pierce (switch to 1d6 if thrown))"}})
			
				data.push({id: 64, values: {"name":"Armour Proficiencies","nova":"Light or Less"}})
				data.push({id: 65, values: {"name":"Armour","nova":"Light – Steel/Buckler – steel (-15% and -4 damage)"}})
				
				data.push({id: 66, values: {"name":"Spells","nova":"Laha (1d6 fire)"}})
				
				data.push({id: 67, values: {"name":"Inventory","nova":"Nova’s Katana (1d10 + 3 slash (+1 if two hands are used), 30 Nova’s Kunai (1d4 + 3 pierce. Switch to 1d6 if thrown. Effective range of 15m)"}})
				data.push({id: 68, values: {"name":"Stocks","nova":"Laberto Industries: 3, "}})
			
			
				editableGrid = new EditableGrid("novaGridJsData");
				editableGrid.load({"metadata": metadata, "data": data});
				editableGrid.renderGrid("nova4", "testgrid");
			})

			
			

$(document).ready(function() {
	


	
				// this approach is interesting if you need to dynamically create data in Javascript 
				var metadata = [];
				metadata.push({ name: "name2", label: "NAME", datatype: "string", editable: true});
				metadata.push({ name: "talidor", label:"Zhut Talidor", datatype: "string", editable: true});

				// a small example of how you can manipulate the object in javascript

		
				var data = [];
				data.push({id: 1, values: {"name2":"Level","talidor":"1"}})
				data.push({id: 2, values: {"name2":"Experience","talidor":"0"}})
			
				data.push({id: 3, values: {"name2":"Class","talidor":"Gunman"}})
				data.push({id: 4, values: {"name2":"Subclass","talidor":"Mercenary, Hitman, Gunsmith"}})
			
				data.push({id: 5, values: {"name2":"Size","talidor":"Medium"}})
				data.push({id: 6, values: {"name2":"Type","talidor":"Human"}})
			
				data.push({id: 7, values: {"name2":"Age","talidor":"123 (Physically 42)"}})
				data.push({id: 8, values: {"name2":"Affinity","talidor":"Dark"}})
				
				data.push({id: 9, values: {"name2":"Magical Category","talidor":"Category One (Air)"}})
			
				data.push({id: 10, values: {"name2":"Alignment","talidor":"True Neutral"}})
				data.push({id: 11, values: {"name2":"Saves","talidor":"Dexterity, Constitution"}})
			
				data.push({id: 12, values: {"name2":"Hit Points","talidor":"11"}})
				data.push({id: 13, values: {"name2":"Hit Dice","talidor":"1d10 + 3"}})
			
				data.push({id: 14, values: {"name2":"Weight Capacity","talidor":"90lb"}})
				data.push({id: 15, values: {"name2":"Status Effects","talidor":"null."}})
			
				data.push({id: 16, values: {"name2":"Currency (Mensi)","talidor":"100"}})
				data.push({id: 17, values: {"name2":"Speed","talidor":"12m"}})
			
				data.push({id: 18, values: {"name2":"Strength","talidor":"9 (-1)"}})
				data.push({id: 19, values: {"name2":"Dexterity","talidor":"20 (+5)"}})
			
				data.push({id: 20, values: {"name2":"Constitution","talidor":"16 (+3)"}})
				data.push({id: 21, values: {"name2":"Intelligence","talidor":"10 (0)"}})
			
				data.push({id: 22, values: {"name2":"Wisdom","talidor":"16 (+3)"}})
				data.push({id: 23, values: {"name2":"Charisma","talidor":"13 (+1)"}})
			
				data.push({id: 24, values: {"name2":"Accuracy Level","talidor":"17"}})
				data.push({id: 25, values: {"name2":"Evasion Level","talidor":"4"}})
			
				data.push({id: 26, values: {"name2":"Weapon Proficiencies","talidor":"Simple melee, Martial Ranged"}})
				data.push({id: 27, values: {"name2":"Equipped","talidor":"Talidor’s Pistol 1d8 + 3 (6 shots, 3lb)"}})
			
				data.push({id: 28, values: {"name2":"Off-Hand","talidor":"null."}})
				data.push({id: 29, values: {"name2":"Holstered","talidor":"null."}})
			
				data.push({id: 30, values: {"name2":"Armour Proficiencies","talidor":"Light or Less"}})
				data.push({id: 31, values: {"name2":"Armour","talidor":"Light – Steel (-10% and -2 damage)"}})
			
				data.push({id: 32, values: {"name2":"Spells","talidor":"null."}})
			
				data.push({id: 33, values: {"name2":"Inventory","talidor":"Talidor’s Pistol 1d8 + 3 (6 shots, +2 Accuracy Level, 3lb, ER 20m, LER 60m, MR 120m, 70 mensi), Normal bullets (x60, 6lb), "}})
				data.push({id: 34, values: {"name2":"Stocks","talidor":"Huntsmen’s Dogs: 120, "}})
			
			
				editableGrid = new EditableGrid("talidorGridJsData");
				editableGrid.load({"metadata": metadata, "data": data});
				editableGrid.renderGrid("talidor4", "testgrid");
})


$(document).ready(function() {
	


				// this approach is interesting if you need to dynamically create data in Javascript 
				var metadata = [];
				metadata.push({ name: "name", label: "NAME", datatype: "string", editable: true});
				metadata.push({ name: "sicht", label:"Sicht", datatype: "string", editable: true});

				// a small example of how you can manipulate the object in javascript


				var data = [];
				data.push({id: 69, values: {"name":"Level","sicht":"1"}})
				data.push({id: 70, values: {"name":"Experience","sicht":"0"}})
			
				data.push({id: 71, values: {"name":"Class","sicht":"Arcane Knight"}})
				data.push({id: 72, values: {"name":"Subclass","sicht":"Flux Artist, Radiant Warrior"}})
			
				data.push({id: 73, values: {"name":"Size","sicht":"Medium"}})
				data.push({id: 74, values: {"name":"Type","sicht":"Elf"}})
			
				data.push({id: 75, values: {"name":"Age","sicht":"97"}})
				data.push({id: 76, values: {"name":"Affinity","sicht":"Light"}})
				
				data.push({id: 77, values: {"name":"Magical Category","sicht":"Category Four (Flux, Fire, Ice, and Water. Illusion, Void, and Morph)"}})
			
				data.push({id: 78, values: {"name":"Alignment","sicht":"Neutral Good"}})
				data.push({id: 79, values: {"name":"Saves","sicht":"Dexterity, Intelligence"}})
			
				data.push({id: 80, values: {"name":"Hit Points","sicht":"10 + 3 Arcane shield"}})
				data.push({id: 81, values: {"name":"Hit Dice","sicht":"1d10 + 2"}})
			
				data.push({id: 82, values: {"name":"Weight Capacity","sicht":"90lb"}})
				data.push({id: 83, values: {"name":"Status Effects","sicht":"null."}})
		
				data.push({id: 84, values: {"name":"Currency (Mensi)","sicht":"100"}})
				data.push({id: 85, values: {"name":"Speed","sicht":"12m"}})
			
				data.push({id: 86, values: {"name":"Strength","sicht":"8 (-1)"}})
				data.push({id: 87, values: {"name":"Dexterity","sicht":"16 (+3)"}})
			
				data.push({id: 88, values: {"name":"Constitution","sicht":"14 (+2)"}})
				data.push({id: 89, values: {"name":"Intelligence","sicht":"22 (+6)"}})
			
				data.push({id: 90, values: {"name":"Wisdom","sicht":"16 (+4)"}})
				data.push({id: 91, values: {"name":"Charisma","sicht":"8 (-1)"}})
			
				data.push({id: 92, values: {"name":"Accuracy Level","sicht":"16"}})
				data.push({id: 93, values: {"name":"Evasion Level","sicht":"5"}})
			
				data.push({id: 94, values: {"name":"Weapon Proficiencies","sicht":"Simple melee, Martial Ranged"}})
				data.push({id: 95, values: {"name":"Equipped","sicht":"Sicht’s Focus Bow (1d10 + 3, EF 50m, 3lb, contains magicium strip holding 4 spells)"}})
			
				data.push({id: 96, values: {"name":"Off-Hand","sicht":"null."}})
				data.push({id: 97, values: {"name":"Holstered","sicht":"null."}})
			
				data.push({id: 98, values: {"name":"Armour Proficiencies","sicht":"Medium or Less"}})
				data.push({id: 99, values: {"name":"Armour","sicht":"Light – Steel (-10% and -2)"}})
				
				data.push({id: 100, values: {"name":"Spells","sicht":"Laha (1d6 + 6 fire), Hara Zet (1d6 + 6 Flux), Taekisa (1d6 + 6 Ice),  Majra (1d6 +6 water)"}})
				
				data.push({id: 101, values: {"name":"Inventory","sicht":"Sicht’s Focus Bow (1d10 + 3, contains magicium strip holding 4 spells, 1400 mensi, 3lb), 60 Basic Arrows"}})
				data.push({id: 102, values: {"name":"Stocks","sicht":"null."}})
			
			
				editableGrid = new EditableGrid("novaGridJsData");
				editableGrid.load({"metadata": metadata, "data": data});
				editableGrid.renderGrid("sicht4", "testgrid");
			})
			
			
						
			
			
			
			
			
			$(document).ready(function() {
	


				// this approach is interesting if you need to dynamically create data in Javascript 
				var metadata = [];
				metadata.push({ name: "name", label: "NAME", datatype: "string", editable: true});
				metadata.push({ name: "sicht", label:"Arion Zavar", datatype: "string", editable: true});

				// a small example of how you can manipulate the object in javascript


				var data = [];
				data.push({id: 103, values: {"name":"Level","sicht":"1"}})
				data.push({id: 104, values: {"name":"Experience","sicht":"0"}})
			
				data.push({id: 105, values: {"name":"Class","sicht":"Assassin"}})
				data.push({id: 106, values: {"name":"Subclass","sicht":"Political Assassin"}})
			
				data.push({id: 107, values: {"name":"Size","sicht":"Medium"}})
				data.push({id: 108, values: {"name":"Type","sicht":"Time Alpha Alyseid"}})
			
				data.push({id: 109, values: {"name":"Age","sicht":"406"}})
				data.push({id: 110, values: {"name":"Affinity","sicht":"Demonic"}})
				
				data.push({id: 111, values: {"name":"Magical Category","sicht":"Category One"}})
			
				data.push({id: 112, values: {"name":"Alignment","sicht":"True Neutral"}})
				data.push({id: 113, values: {"name":"Saves","sicht":"Strength, Intelligence"}})
			
				data.push({id: 114, values: {"name":"Hit Points","sicht":"10"}})
				data.push({id: 115, values: {"name":"Hit Dice","sicht":"1d10 + 2"}})
			
				data.push({id: 116, values: {"name":"Weight Capacity","sicht":"90lb"}})
				data.push({id: 117, values: {"name":"Status Effects","sicht":"null."}})
		
				data.push({id: 118, values: {"name":"Currency (Mensi)","sicht":"100"}})
				data.push({id: 119, values: {"name":"Speed","sicht":"15m"}})
			
				data.push({id: 120, values: {"name":"Strength","sicht":"20 (+5)"}})
				data.push({id: 121, values: {"name":"Dexterity","sicht":"14 (+2)"}})
			
				data.push({id: 122, values: {"name":"Constitution","sicht":"14 (+2)"}})
				data.push({id: 123, values: {"name":"Intelligence","sicht":"18 (+4)"}})
			
				data.push({id: 124, values: {"name":"Wisdom","sicht":"7 (-2)"}})
				data.push({id: 125, values: {"name":"Charisma","sicht":"12 (+1)"}})
			
				data.push({id: 126, values: {"name":"Accuracy Level","sicht":"14"}})
				data.push({id: 127, values: {"name":"Evasion Level","sicht":"7"}})
			
				data.push({id: 128, values: {"name":"Weapon Proficiencies","sicht":"Simple Melee, Martial Ranged"}})
				data.push({id: 129, values: {"name":"Equipped","sicht":"Zaver Longsword (1d8 + 3 + 5, Slash, 3 or Lower Stuns, 3lb)"}})
			
				data.push({id: 130, values: {"name":"Off-Hand","sicht":"Zaver Longsword (1d8 + 3 + 5, Slash, 3 or Lower Stuns, 3lb)"}})
				data.push({id: 131, values: {"name":"Holstered","sicht":"null."}})
			
				data.push({id: 132, values: {"name":"Armour Proficiencies","sicht":"Medium or Less"}})
				data.push({id: 133, values: {"name":"Armour","sicht":"Light – Steel (-10% and -2)"}})
				
				data.push({id: 134, values: {"name":"Spells","sicht":"Laha (1d6 + 6 fire), Hara Zet (1d6 + 6 Flux), Taekisa (1d6 + 6 Ice),  Majra (1d6 +6 water)"}})
				
				data.push({id: 135, values: {"name":"Inventory","sicht":"Zaver Steel Longsword (1d8 + 3 slash, 2 or lower stuns, 3lb, 700 mensi), Zaver Steel Longsword (1d8 + 3 slash, 2 or lower stuns, 3lb, 700 mensi), "}})
				data.push({id: 136, values: {"name":"Stocks","sicht":"null."}})
			
			
				editableGrid = new EditableGrid("novaGridJsData");
				editableGrid.load({"metadata": metadata, "data": data});
				editableGrid.renderGrid("arion4", "testgrid");
			})
	
	
			
			
			$(document).ready(function() {
	


				// this approach is interesting if you need to dynamically create data in Javascript 
				var metadata = [];
				metadata.push({ name: "name", label: "NAME", datatype: "string", editable: true});
				metadata.push({ name: "sicht", label:"Arion Zavar", datatype: "string", editable: true});

				// a small example of how you can manipulate the object in javascript


				var data = [];
				data.push({id: 103, values: {"name":"Inventory","sicht":"null."}})
				
			
			
				editableGrid = new EditableGrid("novaGridJsData");
				editableGrid.load({"metadata": metadata, "data": data});
				editableGrid.renderGrid("inv4", "testgrid");
			})
	
	
	
	
$(document).bind('mobileinit', function(){ 
    $.mobile.metaViewportContent = 'width=device-width, initial-scale=.5, maximum-scale=12.0, minimum-scale=.25, user-scalable=yes'; 
}); 
	
	
	
	// <img id="scaz" src="images/mp.png">
var image = document.getElementById('scaz');

var mc = new Hammer.Manager(image);

var pinch = new Hammer.Pinch();
var pan = new Hammer.Pan();

pinch.recognizeWith(pan);

mc.add([pinch, pan]);

var adjustScale = 1;
var adjustDeltaX = 0;
var adjustDeltaY = 0;

var currentScale = null;
var currentDeltaX = null;
var currentDeltaY = null;

// Prevent long press saving on mobiles.
webpage.addEventListener('touchstart', function (e) {
    e.preventDefault()
});

// Handles pinch and pan events/transforming at the same time;
mc.on("pinch pan", function (ev) {

    var transforms = [];

    // Adjusting the current pinch/pan event properties using the previous ones set when they finished touching
    currentScale = adjustScale * ev.scale;
    currentDeltaX = adjustDeltaX + (ev.deltaX / currentScale);
    currentDeltaY = adjustDeltaY + (ev.deltaY / currentScale);

    // Concatinating and applying parameters.
    transforms.push('scale({0})'.format(currentScale));
    transforms.push('translate({0}px,{1}px)'.format(currentDeltaX, currentDeltaY));
    webpage.style.transform = transforms.join(' ');

});


mc.on("panend pinchend", function (ev) {

    // Saving the final transforms for adjustment next time the user interacts.
    adjustScale = currentScale;
    adjustDeltaX = currentDeltaX;
    adjustDeltaY = currentDeltaY;

});
	
	
function changeImage(element) {
document.getElementById('imageReplace').src = element;
}	


document.getElementById("newsReplace").src="sample_news_scroll.js"



$('#add').click( function() {
   var Description = $('#description').val();
  if($("#description").val() == '') {
    $('#alert').html("<strong>Warning!</strong> You left the to-do empty");
    $('#alert').fadeIn().delay(1000).fadeOut();
    return false;
   }
   $('#todos').prepend("<li><input id='check' name='check' type='checkbox'/>" + Description + "</li>");
   $('#form')[0].reset();
   var todos = $('#todos').html();
   localStorage.setItem('todos', todos);
   return false;
});













function showPanel(adda) {
  var fieldNameElement = document.getElementById(adda);

  fieldNameElement.removeChild(fieldNameElement.firstChild);
  var newText = document.createTextNode("mmkmk");
  fieldNameElement.appendChild(newText);
}












// popup examples
$( document ).on( "pagecreate", function() {
    // The window width and height are decreased by 30 to take the tolerance of 15 pixels at each side into account
    function scale( width, height, padding, border ) {
        var scrWidth = $( window ).width() - 30,
            scrHeight = $( window ).height() - 30,
            ifrPadding = 2 * padding,
            ifrBorder = 2 * border,
            ifrWidth = width + ifrPadding + ifrBorder,
            ifrHeight = height + ifrPadding + ifrBorder,
            h, w;
        if ( ifrWidth < scrWidth && ifrHeight < scrHeight ) {
            w = ifrWidth;
            h = ifrHeight;
        } else if ( ( ifrWidth / scrWidth ) > ( ifrHeight / scrHeight ) ) {
            w = scrWidth;
            h = ( scrWidth / ifrWidth ) * ifrHeight;
        } else {
            h = scrHeight;
            w = ( scrHeight / ifrHeight ) * ifrWidth;
        }
        return {
            'width': w - ( ifrPadding + ifrBorder ),
            'height': h - ( ifrPadding + ifrBorder )
        };
    };
    $( ".ui-popup iframe" )
        .attr( "width", 0 )
        .attr( "height", "auto" );
    $( "#popupMap iframe" ).contents().find( "#map_canvas" )
        .css( { "width" : 0, "height" : 0 } );
    $( "#popupMap" ).on({
        popupbeforeposition: function() {
            var size = scale( 480, 320, 0, 1 ),
                w = size.width,
                h = size.height;
            $( "#popupMap iframe" )
                .attr( "width", w )
                .attr( "height", h );
            $( "#popupMap iframe" ).contents().find( "#map_canvas" )
                .css( { "width": w, "height" : h } );
        },
        popupafterclose: function() {
            $( "#popupMap iframe" )
                .attr( "width", 0 )
                .attr( "height", 0 );
            $( "#popupMap iframe" ).contents().find( "#map_canvas" )
                .css( { "width": 0, "height" : 0 } );
        }
    });
});










var startdelay 		= 2; 		// START SCROLLING DELAY IN SECONDS
var scrollspeed		= 1.1;		// ADJUST SCROLL SPEED
var scrollwind		= 1;		// FRAME START ADJUST
var speedjump		= 30;		// ADJUST SCROLL JUMPING = RANGE 20 TO 40
var nextdelay		= 0; 		// SECOND SCROLL DELAY IN SECONDS 0 = QUICKEST
var topspace		= "2px";	// TOP SPACING FIRST TIME SCROLLING
var frameheight		= 176;		// IF YOU RESIZE THE CSS HEIGHT, EDIT THIS HEIGHT TO MATCH


current = (scrollspeed);


function HeightData(){
AreaHeight=dataobj.offsetHeight
if (AreaHeight===0){
setTimeout("HeightData()",( startdelay * 1000 ))
}
else {
ScrollNewsDiv()
}}

function NewsScrollStart(){
dataobj=document.all? document.all.NewsDiv : document.getElementById("NewsDiv")
dataobj.style.top=topspace
setTimeout("HeightData()",( startdelay * 1000 ))
}

function ScrollNewsDiv(){
dataobj.style.top=scrollwind+'px';
scrollwind-=scrollspeed;
if (parseInt(dataobj.style.top)<AreaHeight*(-1)) {
dataobj.style.top=frameheight+'px';
scrollwind=frameheight;
setTimeout("ScrollNewsDiv()",( nextdelay * 1000 ))
}
else {
setTimeout("ScrollNewsDiv()",speedjump)
}}




// START SCRIPT


var SNshow	= "yes"		// SHOW NEWS IFRAME



   if (SNshow == "yes") {

// START SCROLLING NEWS
document.write('<div id="news_iframe_scroll">');
document.write('<div class="news_scroll-title">');
document.write('News and Updates<br>');
document.write('</div>');
document.write('<iframe name="NewsIFrame" src="day1news.html" frameborder="0" scrolling="no"></iframe>');
document.write('</div>');
// END SCROLLING NEWS


}

// END SCRIPT



var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}
