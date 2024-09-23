
function geBild(){
	const bilder = ["img/bild1.jpg", "img/bild2.jpg", "img/bild3.jpg"];
	let bildNummer = Math.floor(Math.random() * 3);
	document.getElementById("adventBild").src = bilder[bildNummer];
}

    function visaAdventBild() {
        document.getElementById('popup').style.display = 'block';
    }
    function stangAdventBild() {
        document.getElementById('popup').style.display = 'none';
        
    }
function openLucka(door){
	let rabattNummer = Math.floor(Math.random() * 10);
	const dag = new Date();
	const datum = dag.getDate();

	let doornumber = parseInt(door.textContent);
	if(doornumber <= datum) 
	{
	visaAdventBild();	
	geBild();
	alert(`I Lucka ${door.textContent} får du en rabattkod: ${rabatt.christmasSpecials[rabattNummer].label}. Använd koden: ${rabatt.christmasSpecials[rabattNummer].code}`);
	}
	else
	{
	alert(`Du måste vänta tills ${door.textContent} December! `);
	}
};


document.addEventListener('DOMContentLoaded', () => {
    const calendarBody = document.getElementById('calendar-body');
    
    //Skapar en array med alla lucknummer
    let doors = [];
    for (let i = 1; i <= 24; i++) {
        doors.push(i);
    }

    //Funktion som blandar luckorna
    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    //Tillkallar funktionen
    shuffle(doors);

    //Placerar luckorna i blandad ordning
    for (let i = 0; i < doors.length; i++) {
        const door = document.createElement('div');
        door.onclick = function() {
            openLucka(door);
        };
        door.className = 'calendar-door';
        door.id = `door${doors[i]}`;
        door.textContent = doors[i];
        calendarBody.appendChild(door);
    }
});




	const rabatt = {
		"christmasSpecials":[
  { "label":"Läppärit -20%", "code":"ASDJKL9023" },
  { "label":"Ilmainen toimitus", "code":"VNKJDO0987" },
  { "label":"Muistikortit ja muistitikut puoleen hintaan", "code":"IOSDFJ872" },
  { "label":"Geforce näytönohjaimet -30%", "code":"KLHJ8976" },
  { "label":"Samsung 55'' televisio 399€", "code":"SDFJKL9080" },
  { "label":"Robottipölynimuri 129€", "code":"PQWO23894" },
  { "label":"Verkkotuotteet -40%", "code":"Doe" },
  { "label":"1Tb SSD 49€", "code":"Doe" },
  { "label":"Intel tuotteet -22%", "code":"Doe" },
  { "label":"AMD 6600XT 249€", "code":"Doe" }  
]};