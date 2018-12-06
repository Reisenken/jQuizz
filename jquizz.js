var questions = [
    {
        Question : "Où se trouvent les glandes sudoripares d'un chien ? ",
        BonneReponse : "Sous ses pattes",
        MauvaiseReponse1 : "Sous sa langue",
        MauvaiseReponse2 : "Entre ses deux pattes arrière",
        Choix : ""
    },
    {
        Question : "Qui raconte les aventures de Sherlock Holmes ? ",
        BonneReponse: "Le docteur Watson",
        MauvaiseReponse1: "Lui-même ",
        MauvaiseReponse2: "Agatha Christie",
        Choix : ""
    },
    {
        Question : "Qui fut le quarantième président des USA ? ",
        BonneReponse : "Reagan",
        MauvaiseReponse1 : "Nixon",
        MauvaiseReponse2 : "Bush",
        Choix : ""
    },
    {
        Question : "Que signifie \"Bistro\" en russe",
        BonneReponse : "Vite",
        MauvaiseReponse1 : "Dîner",
        MauvaiseReponse2 : "Bisexuel",
        Choix : ""
    },
    {
        Question : "Combien y a-t-il de miles marins dans un degré de latitude ? ",
        BonneReponse : "60",
        MauvaiseReponse1 : "45",
        MauvaiseReponse2 : "50",
        Choix : ""
    },
    {
        Question : "Qui a fondé l'Académie Française ? ",
        BonneReponse : "Le cardinal de Richelieu",
        MauvaiseReponse1 : "Molière",
        MauvaiseReponse2 : "Goncourt",
        Choix : ""
    },
    {
        Question : "Quel est le plus long fleuve d'Europe occidentale ? ",
        BonneReponse : "Le Rhin",
        MauvaiseReponse1 : "Le Rhône",
        MauvaiseReponse2 : "Le Danube",
        Choix : ""
    },
    {
        Question : "Qui est inséparable de Bonnie Parker ? ",
        BonneReponse : "Clyde Barrow",
        MauvaiseReponse1 : "Edouard Waterman",
        MauvaiseReponse2 : "Serge Gainsbourg",
        Choix : ""
    },
    {
        Question : "Comment appelle-t-on le versant Nord d'une vallee ? ",
        BonneReponse : "L'ubac",
        MauvaiseReponse1 : "Le coteau",
        MauvaiseReponse2 : "L'adret",
        Choix : ""
    },
    {
        Question : "Qui est le dieu du Soleil dans l'ancienne Egypte ? ",
        BonneReponse : "Râ",
        MauvaiseReponse1 : "Rî",
        MauvaiseReponse2 : "Rô",
        Choix : ""
    },



   /*
    {
    Question : "",
    BonneReponse : "",
    MauvaiseReponse1 : "",
    MauvaiseReponse2 : "",
    Choix : ""
    },
    */
];

var aleatoire = 0;
var Breponse = 0;
var Mreponse = 0;
var id1 = 0;
var id2 = 0;
var id3 = 0;

console.log(questions);

function Jeu() {

var NbAlea = Math.round(Math.random() * 2);

        $("#question").text(questions[aleatoire].Question);
        console.log("aleatoire = " + aleatoire);
        console.log("NbAlea = " + NbAlea);

        if (NbAlea === 0){
            $("#proposition1").text(questions[aleatoire].BonneReponse);  id1 = 1;
            $("#proposition2").text(questions[aleatoire].MauvaiseReponse1); id2 = 2;
            $("#proposition3").text(questions[aleatoire].MauvaiseReponse2); id3 = 3;
        }
        else if (NbAlea === 1) {
            $("#proposition2").text(questions[aleatoire].BonneReponse);  id2 = 1;
            $("#proposition1").text(questions[aleatoire].MauvaiseReponse1); id1 = 2;
            $("#proposition3").text(questions[aleatoire].MauvaiseReponse2); id3 = 3;
        }
        else {
            $("#proposition3").text(questions[aleatoire].BonneReponse);  id3 = 1;
            $("#proposition2").text(questions[aleatoire].MauvaiseReponse1); id2 = 2;
            $("#proposition1").text(questions[aleatoire].MauvaiseReponse2); id1 = 3;
        }
}

$("#proposition1").click(function() {

if (aleatoire < questions.length - 1){
    console.log(aleatoire);
    if (id1 === 1) {
        questions[aleatoire].Choix = questions[aleatoire].BonneReponse;
        affichage();
        aleatoire++;
        Jeu();

        Breponse++;
    }
    else if (id1 === 2) {

        questions[aleatoire].Choix = questions[aleatoire].MauvaiseReponse1;
        affichage();
        aleatoire++;
        Jeu();

        Mreponse++;
    }
    else {

        questions[aleatoire].Choix = questions[aleatoire].MauvaiseReponse2;
        affichage();
        aleatoire++;
        Jeu();

        Mreponse++;
    }
}
else {
    if (id1 === 1) {
        questions[aleatoire].Choix = questions[aleatoire].BonneReponse;
    }
    else if (id1 === 2) {
        questions[aleatoire].Choix = questions[aleatoire].MauvaiseReponse1;
    }
    else {
        questions[aleatoire].Choix = questions[aleatoire].MauvaiseReponse2;
    }

    affichage();
    aleatoire++;
    $("#PageJeu").css("display" ,"none");
    $("#PageResulats").css("display","inherit");
}
});

$("#proposition2").click(function(){

if (aleatoire < questions.length - 1) {

    if (id2 === 1) {

        questions[aleatoire].Choix = questions[aleatoire].BonneReponse;
        affichage();
        aleatoire++;
        Jeu();

        Breponse++;
    }
    else if (id2 === 2) {

        questions[aleatoire].Choix = questions[aleatoire].MauvaiseReponse1;
        affichage();
        aleatoire++;
        Jeu();

        Mreponse++;
    }
    else {

        questions[aleatoire].Choix = questions[aleatoire].MauvaiseReponse2;
        affichage();
        aleatoire++;
        Jeu();
        Mreponse++;
    }
}
else {
    if (id2 === 1) {
        questions[aleatoire].Choix = questions[aleatoire].BonneReponse;
    }
    else if (id2 === 2) {
        questions[aleatoire].Choix = questions[aleatoire].MauvaiseReponse1;
    }
    else {
        questions[aleatoire].Choix = questions[aleatoire].MauvaiseReponse2;
    }

    affichage();
    aleatoire++;
    $("#PageJeu").css("display" ,"hidden");
    $("#PageResulats").css("display","inherit");

}
});

$("#proposition3").click(function(){

if (aleatoire < questions.length - 1) {
    if (id3 === 1) {

        questions[aleatoire].Choix = questions[aleatoire].BonneReponse;
        affichage();
        aleatoire++;
        Jeu();
        Breponse++;
    } else if (id3 === 2) {

        questions[aleatoire].Choix = questions[aleatoire].MauvaiseReponse1;
        affichage();
        aleatoire++;
        Jeu();
        Mreponse++;
    }
    else {

        questions[aleatoire].Choix = questions[aleatoire].MauvaiseReponse2;
        affichage();
        aleatoire++;
        Jeu();
        Mreponse++;
    }
}
else {

    if (id3 === 1) {
        questions[aleatoire].Choix = questions[aleatoire].BonneReponse;
    }
    else if (id3 === 2) {
        questions[aleatoire].Choix = questions[aleatoire].MauvaiseReponse1;
    }
    else {
        questions[aleatoire].Choix = questions[aleatoire].MauvaiseReponse2;
    }

    affichage();

    $("#PageJeu").css("display" ,"hidden");
    $("#PageResulats").css("display","inherit");
}

});

Jeu();

function affichage () {
    console.log(questions);
        var newdiv = document.createElement("div");
        document.getElementById("PageResulats").appendChild(newdiv);
        newdiv.style.width = "100%";
        newdiv.id = "div"+aleatoire;
        newdiv.style.textAlign = "center";
    newdiv.style.fontSize = "20px";

    if (questions[aleatoire].BonneReponse === questions[aleatoire].Choix) {
        $("#div"+aleatoire).css({
            "color": "green",
            "border": "2px solid black",
            "background-color": "white"
        });
        document.getElementById("div"+aleatoire).innerHTML = "A la question : " + questions[aleatoire].Question + "  Vous avez répondu : <span><b>" + questions[aleatoire].Choix + " </b></span> , BRAVO !";
    }
    else {
        $("#div"+aleatoire).css({
            "color": "red",
            "border": "2px solid black",
            "background-color": "white"
        });
        document.getElementById("div"+aleatoire).innerHTML = "A la question : " + questions[aleatoire].Question + "  Vous avez répondu : <span><b>" + questions[aleatoire].Choix + "</b></span> , Dommage ! C'était : <b>" + questions[aleatoire].BonneReponse + "</b>";
    }
}



