/*Wayne Barnett	Founder & CEO	        wayne-barnett-founder-ceo.jpg
Angela Caroll	Chief Editor	        angela-caroll-chief-editor.jpg
Walter Gordon	Office Manager	        walter-gordon-office-manager.jpg
Angela Lopez	Social Media Manager	angela-lopez-social-media-manager.jpg
Scott Estrada	Developer	            scott-estrada-developer.jpg
Barbara Ramos	 GraphicDesigner	    barbara-ramos-graphic-designer.jpg*/
/*MILESTONE 0: Creare l’array di oggetti con le informazioni fornite.
MILESTONE 1: Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
MILESTONE 2: Stampare le stesse informazioni su DOM sottoforma di stringhe
BONUS 1: Trasformare la stringa foto in una immagine effettiva
BONUS 2: Organizzare i singoli membri in card/schede*/
const arrayTeamMembers = [
    {
      nomecompleto: "Wayne Barnett",
      ruolo: "Founder & CEO",
      img: "img/wayne-barnett-founder-ceo.jpg",
    },
    {
       nomecompleto: "Angela Caroll",
       ruolo: "Chief Editor",
       img: "img/angela-caroll-chief-editor.jpg",
    },
    {
       nomecompleto: "Walter Gordon",
       ruolo: "Office Manager",
       img: "img/walter-gordon-office-manager.jpg",
    },
    {
       nomecompleto: "Angela Lopez",
       ruolo: "Social Media Manager",
       img: "img/angela-lopez-social-media-manager.jpg",
    },
    {
       nomecompleto: "Scott Estrada",
       ruolo: "Developer",
       img: "img/scott-estrada-developer.jpg",    
    },
    {
        nomecompleto: "Barbara Ramos",
        ruolo: "GraphicDesigner",
        img: "img/barbara-ramos-graphic-designer.jpg",
    },
];
for (let i = 0; i < arrayTeamMembers.length; i++) {
    for (let k in arrayTeamMembers[i]) {
        console.log(k ,":", arrayTeamMembers[i][k])   
    }   
}
