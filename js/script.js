
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
	//Rabattkod "advent" med random rabattmängd och plats
	let rabattMängd = ["10%", "15%", "25%", "30%", "30%", "40%"];
	let rabattMängdNummer = Math.floor(Math.random() * 5);
	let rabattPlats = ["Prisma", "Halpa-Halli", "Citymarket", "Motonet", "Kärkkäinen"];
	let rabattPlatsNummer = Math.floor(Math.random() * 4);
	const dag = new Date();
const datum = dag.getDate();

	let doornumber = parseInt(door.textContent);
	if(doornumber <= datum) 
	{
	visaAdventBild();	
	geBild();
	alert(` I Lucka ${door.textContent} får du en rabattkod. Använd koden "Advent" för att få ${rabattMängd[rabattMängdNummer]} hos ${rabattPlats[rabattPlatsNummer]}`);	
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



