if('serviceWorker' in navigator)
	{
		navigator.serviceWorker.register('sw.js');
	};
function opentab(evt, tabname) {
	var i, tabcontent, tablinks;
	tabcontent = document.getElementsByClassName("tabcontent");
	for (i = 0; i < tabcontent.length; i++) {
	  tabcontent[i].style.display = "none";
	}
	tablinks = document.getElementsByClassName("tablinks");
	for (i = 0; i < tablinks.length; i++) {
	  tablinks[i].className = tablinks[i].className.replace(" active", "");
	}
	document.getElementById(tabname).style.display = "block";
	evt.currentTarget.className += " active";
  }
function traiter(flag)
{
	document.body.style.cursor="wait";
	var cocheA = false;
	var cocheB = false;
	var cocheC = false;
	var cocheD = false;
	var manqueA = [];
	var manqueB = [];
	var manqueC = [];
	var manqueD = [];
	var exigences = 0;
	var autonomie = 0;
	var soutien = 0;
	var reconnaissance = 0;
	for (var x = 1; x < 13; x++)
	{
		var scoreA = document.getElementsByName("A" + x);
		var scoreB = document.getElementsByName("B" + x);
		var scoreC = document.getElementsByName("C" + x);
		var scoreD = document.getElementsByName("D" + x);
		for (var i = 0; i < 4; i++)
		{
			if (scoreA[i].checked)
			{
				exigences += parseInt(scoreA[i].value);
				cocheA = true;
			}
			if (scoreB[i].checked)
			{			
				autonomie += parseInt(scoreB[i].value);
				cocheB = true;
			}
			if (scoreC[i].checked)
			{	
				soutien += parseInt(scoreC[i].value);
				cocheC = true;
			}
			if (scoreD[i].checked)
			{
				reconnaissance += parseInt(scoreD[i].value);
				cocheD = true;
			}
		}
		if (cocheA === false)
		{
			manqueA[(x-1)] = "A" + x;
			break;
		}
		if (cocheB === false)
		{
			manqueB[(x-1)] = "B" + x;
		}
		if (cocheC === false)
		{
			manqueC[(x-1)] = "C" + x;
		}		
		if (cocheD === false)
		{
			manqueD[(x-1)] = "D" + x;
		}
		cocheA = false;
		cocheB = false;
		cocheC = false;
		cocheD = false;
	}
	if (manqueA.length > 0)
	{
		var indexpremier = manqueA.findIndex(function(element){return element != null;});
        window.alert("Questionnaire incomplet : question " + (indexpremier + 1) + " de la partie Exigences");		
        if (indexpremier === 0)
        {
            window.scrollTo(0,0);
        }
        else
        {
            document.getElementById("A" + (indexpremier) + "3").scrollIntoView(true);
			document.body.style.cursor="default";
        }
		return;
	}
	if (manqueB.length > 0)
	{
		var indexpremier = manqueB.findIndex(function(element){return element != null;});
        window.alert("Questionnaire incomplet : question " + (indexpremier + 1) + " de la partie Autonomie");		
        if (indexpremier === 0)
        {
            document.getElementById("B123").scrollIntoView(true);
            document.getElementById("A123").scrollIntoView(true);
			document.body.style.cursor="default";
        }
        else
        {
            document.getElementById("B123").scrollIntoView(true);
            document.getElementById("B" + (indexpremier) + "3").scrollIntoView(true);
			document.body.style.cursor="default";
        }
		return;
	}
	if (manqueC.length > 0)
	{
		var indexpremier = manqueC.findIndex(function(element){return element != null;});
        window.alert("Questionnaire incomplet : question " + (indexpremier + 1) + " de la partie Soutien");		
        if (indexpremier === 0)
        {
            document.getElementById("C123").scrollIntoView(true);
            document.getElementById("B123").scrollIntoView(true);
			document.body.style.cursor="default";
        }
        else
        {
            document.getElementById("C123").scrollIntoView(true);
            document.getElementById("C" + (indexpremier) + "3").scrollIntoView(true);
			document.body.style.cursor="default";
        }
		return;
	}
	if (manqueD.length > 0)
	{
		var indexpremier = manqueD.findIndex(function(element){return element != null;});
        window.alert("Questionnaire incomplet : question " + (indexpremier + 1) + " de la partie Reconnaissance");		
        if (indexpremier === 0)
        {
            document.getElementById("D123").scrollIntoView(true);
            document.getElementById("C123").scrollIntoView(true);
			document.body.style.cursor="default";
        }
        else
        {
            document.getElementById("D123").scrollIntoView(true);
            document.getElementById("D" + (indexpremier) + "3").scrollIntoView(true);
			document.body.style.cursor="default";
        }
		return;
	}
	if ((document.getElementById("karasek").data === undefined) || (document.getElementById("siegrist").data === undefined))
		{
			prechargement();
		}
	var exigences = 0;
	var autonomie = 0;
	var soutien = 0;
	var reconnaissance = 0;
	for (var x = 1; x < 13; x++)
	{
		var scoreA = document.getElementsByName("A" + x);
		var scoreB = document.getElementsByName("B" + x);
		var scoreC = document.getElementsByName("C" + x);
		var scoreD = document.getElementsByName("D" + x);
		for (var i = 0; i < 4; i++)
		{
			if (scoreA[i].checked)
			{
				exigences += parseInt(scoreA[i].value);
			}
			if (scoreB[i].checked)
			{			
				autonomie += parseInt(scoreB[i].value);
			}
			if (scoreC[i].checked)
			{	
				soutien += parseInt(scoreC[i].value);
			}
			if (scoreD[i].checked)
			{
				reconnaissance += parseInt(scoreD[i].value);
			}
		}
	}
	var positionK = positionpoint(soutien, exigences, autonomie);
	var positionS = positionpoint(reconnaissance, exigences, autonomie);
	var textepointK;
	var textepointS;
	var couleurpointK;
	var couleurpointS;
	switch (positionK)
	{
		case 1:
			textepointK = "Le point est dans la zone de travail protecteur :)";
			couleurpointK = "darkgreen";
			break;
		case 2:
			textepointK = "Le point est dans la zone d\'attention.";
			couleurpointK = "yellow";
			break;
		case 3:
			textepointK = "Le point est dans la zone d\'alerte !";
			couleurpointK = "darkorange";
			break;
		case 4:
			textepointK = "Le point est dans la zone de risque pour la santé :(";
			couleurpointK = "red";
			break;
		default:
			textepointK = "";
			couleurpointK = "darkgrey";
	}
	switch (positionS)
	{
		case 1:
			textepointS = "Le point est dans la zone de travail protecteur :)";
			couleurpointS = "darkgreen";
			break;
		case 2:
			textepointS = "Le point est dans la zone d\'attention.";
			couleurpointS = "yellow";
			break;
		case 3:
			textepointS = "Le point est dans la zone d\'alerte !";
			couleurpointS = "darkorange";
			break;
		case 4:
			textepointS = "Le point est dans la zone de risque pour la santé :(";
			couleurpointS = "red";
			break;
		default:
			textepointS = "";
			couleurpointS = "darkgrey";
	}
	var fexigences = false;
	var fautonomie = false;
	var fsoutien = false;
	var freconnaissance = false;
	if (((exigences > 9) && (exigences < 19)) && ((autonomie > 18) && (autonomie < 28)) && ((soutien > 18) && (soutien < 28)))
	{
		fexigences = true;
		fautonomie = true;
		fsoutien = true;
	}
	if (((exigences > 9) && (exigences < 19)) && ((autonomie > 18) && (autonomie < 28)) && ((reconnaissance > 18) && (reconnaissance < 28)))
	{
		fexigences = true;
		fautonomie = true;
		freconnaissance = true;
	}
	if (exigences > 18)
	{
		fexigences = true;
	}
	if (autonomie < 19)
	{
		fautonomie = true;
	}
	if (soutien < 19)
	{
		fsoutien = true;
	}
	if (reconnaissance < 19)
	{
		freconnaissance = true;
	}
	if (fexigences === true)
	{
		document.getElementById("cexigences").innerHTML = "<ul><li><a href=\"https://lenumeriqueautrement.fr/fiches-qvt/organisation-du-travail-son-environnement-et-ses-espaces/teletravail-co-working-nomadisme-mobilite/\" target=\"_fiche\">T&eacute;l&eacute;travail, CoWorking, Nomadisme, Mobilit&eacute;</a></li><li><a href=\"https://lenumeriqueautrement.fr/fiches-qvt/organisation-du-travail-son-environnement-et-ses-espaces/charge-de-travail-et-intensification-du-travail/\" target=\"_fiche\">Charge de travail et intensification du travail</a></li><li><a href=\"https://lenumeriqueautrement.fr/fiches-qvt/temps-de-travail-et-deconnexion/forfait-jours-et-sante-au-travail/\" target=\"_fiche\">Forfait jours et sant&eacute; au travail</a></li><li><a href=\"https://lenumeriqueautrement.fr/fiches-qvt/management-et-formation/accompagnement-et-formation-a-lutilisation-des-outils-numeriques/\" target=\"_fiche\">Accompagnement et formation à l'utilisation des outils num&eacute;riques</a></li><li><a href=\"https://lenumeriqueautrement.fr/fiches-qvt/temps-de-travail-et-deconnexion/disponibilite-et-deconnexion/\" target=\"_fiche\">Disponibilit&eacute; et d&eacute;connexion</a></li><li><a href=\"https://lenumeriqueautrement.fr/fiches-qvt/organisation-du-travail-son-environnement-et-ses-espaces/reconfiguration-et-instabilite-des-organisations-de-travail/\" target=\"_fiche\">Reconfiguration et instabilit&eacute; des organisations de travail</a></li></ul>";
	}
	else if ((exigences < 10) && (autonomie > 27))
		{
			document.getElementById("cexigences").innerHTML = "<p>NB : &ecirc;tre attentif au bore-out lorsque les exigences sont faibles et l'autonomie &eacute;lev&eacute;e.</p>";
		}
	if (fautonomie === true)
	{
		document.getElementById("cautonomie").innerHTML = "<ul><li><a href=\"https://lenumeriqueautrement.fr/fiches-qvt/management-et-formation/tracabilite-autonomie-et-reconnaissance/\" target=\"_fiche\">Tra&ccedil;abilit&eacute;, autonomie et reconnaissance</a></li><li><a href=\"https://lenumeriqueautrement.fr/fiches-qvt/temps-de-travail-et-deconnexion/equilibre-vie-professionnelle-vie-personnelle/\" target=\"_fiche\">Equilibre vie professionnelle, vie personnelle</a></li><li><a href=\"https://lenumeriqueautrement.fr/fiches-qvt/temps-de-travail-et-deconnexion/outils-numeriques-et-temps-de-travail-masque/\" target=\"_fiche\">Outils num&eacute;riques et temps de travail masqu&eacute;</a></li><li><a href=\"https://lenumeriqueautrement.fr/fiches-qvt/temps-de-travail-et-deconnexion/forfait-jours-et-sante-au-travail/\" target=\"_fiche\">Forfait jours et sant&eacute; au travail</a></li><li><a href=\"https://lenumeriqueautrement.fr/blog/quelle-est-la-realite-du-temps-de-travail-des-cadres/\" target=\"_fiche\">R&eacute;alit&eacute; du temps de travail des cadres</a></li><li><a href=\"https://lenumeriqueautrement.fr/les-outils/le-guide-du-droit-a-la-deconnexion/\" target=\"_fiche\">Guide du droit à la d&eacute;connexion</a></li><li><a href=\"https://qvtnumerique.azureedge.net/GuideManagement-Fiche2-UGICT-CGT.pdf\" target=\"_fiche\">Fiche 2 du Guide du Management &agrave; l'&egrave;re du num&eacute;rique</a></li></ul>";
	}
	if (fsoutien === true)
	{
		document.getElementById("csoutien").innerHTML = "<ul><li><a href=\"https://lenumeriqueautrement.fr/fiches-qvt/management-et-formation/management-et-soutien/\" target=\"_fiche\">Management et soutien</a></li><li><a href=\"https://lenumeriqueautrement.fr/fiches-qvt/droit-dexpression/droit-dexpression-latitude-decisionnelle-et-conduite-du-changement/\" target=\"_fiche\">Droit d'expression, latitude d&eacute;cisionnelle et conduite du changement</a></li><li><a href=\"https://lenumeriqueautrement.fr/fiches-qvt/management-et-formation/accompagnement-et-formation-a-lutilisation-des-outils-numeriques/\" target=\"_fiche\">Accompagnement et formation &agrave; l'utilisation des outils num&eacute;riques</a></li><li><a href=\"https://lenumeriqueautrement.fr/fiches-qvt/organisation-du-travail-son-environnement-et-ses-espaces/securite-des-donnees-et-des-utilisateurs/\" target=\"_fiche\">S&eacute;curit&eacute; des donn&eacute;es et des utilisateurs</a></li><li><a href=\"https://qvtnumerique.azureedge.net/GuideManagement-Fiche1-UGICT-CGT.pdf\" target=\"_fiche\">Fiche 1 du Guide du Management &agrave; l'&egrave;re du num&eacute;rique</a></li><li><a href=\"https://qvtnumerique.azureedge.net/GuideManagement-Fiche3-UGICT-CGT.pdf\" target=\"_fiche\">Fiche 3 du Guide du Management &agrave; l'&egrave;re du num&eacute;rique</a></li></ul>";
	}
	if (freconnaissance === true)
	{
		document.getElementById("creconnaissance").innerHTML = "<ul><li><a href=\"https://lenumeriqueautrement.fr/fiches-qvt/management-et-formation/tracabilite-autonomie-et-reconnaissance/\" target=\"_fiche\">Tra&ccedil;abilit&eacute;, autonomie et reconnaissance</a></li><li><a href=\"https://qvtnumerique.azureedge.net/GuideManagement-Fiche4-UGICT-CGT.pdf\" target=\"_fiche\">Fiche 4 du Guide du Management &agrave; l'&egrave;re du num&eacute;rique</a></li><li><a href=\"https://qvtnumerique.azureedge.net/GuideManagement-Fiche5-UGICT-CGT.pdf\" target=\"_fiche\">Fiche 5 du Guide du Management &agrave; l'&egrave;re du num&eacute;rique</a></li></ul>";
	}
	if (exigences < 10)
	{
		document.getElementById('rexigences').style.backgroundColor = 'green';
	}
	else if (exigences < 19)
		{
			document.getElementById('rexigences').style.backgroundColor = 'yellow';
		}
		else if (exigences < 28)
		{
			document.getElementById('rexigences').style.backgroundColor = 'orange';
		}
		else
		{
			document.getElementById('rexigences').style.backgroundColor = 'red';
		}
	if (autonomie < 10)
	{
		document.getElementById('rautonomie').style.backgroundColor = 'red';
	}
	else if (autonomie < 19)
		{
			document.getElementById('rautonomie').style.backgroundColor = 'orange';
		}
		else if (autonomie < 28)
		{
			document.getElementById('rautonomie').style.backgroundColor = 'yellow';
		}
		else
		{
			document.getElementById('rautonomie').style.backgroundColor = 'green';
		}
	if (soutien < 10)
	{
		document.getElementById('rsoutien').style.backgroundColor = 'red';
	}
	else if (soutien < 19)
		{
			document.getElementById('rsoutien').style.backgroundColor = 'orange';
		}
		else if (soutien < 28)
		{
			document.getElementById('rsoutien').style.backgroundColor = 'yellow';
		}
		else
		{
			document.getElementById('rsoutien').style.backgroundColor = 'green';
		}
	if (reconnaissance < 10)
	{
		document.getElementById('rreconnaissance').style.backgroundColor = 'red';
	}
	else if (reconnaissance < 19)
		{
			document.getElementById('rreconnaissance').style.backgroundColor = 'orange';
		}
		else if (reconnaissance < 28)
		{
			document.getElementById('rreconnaissance').style.backgroundColor = 'yellow';
		}
		else
		{
			document.getElementById('rreconnaissance').style.backgroundColor = 'green';
		}
	var updateK = { x:[soutien], y:[exigences], z:[autonomie], type:'scatter3d', hoverinfo:'x+y+z', hoverlabel:{bgcolor: couleurpointK}, marker:{color: couleurpointK}};
	var updateS = { x:[reconnaissance], y:[exigences], z:[autonomie], type:'scatter3d', hoverinfo:'x+y+z', hoverlabel:{bgcolor: couleurpointS}, marker:{color: couleurpointS}};
	var layout = {showlegend: false};
	var style = {showlegend: true};
	Plotly.addTraces(document.getElementById('karasek'), updateK);
	Plotly.addTraces(document.getElementById('siegrist'), updateS);
	Plotly.restyle(document.getElementById('karasek'),layout);
	Plotly.restyle(document.getElementById('karasek'),style,[0,1]);
	Plotly.restyle(document.getElementById('siegrist'),layout);
	Plotly.restyle(document.getElementById('siegrist'),style,[0,1]);
	if (flag != true)
	{
		const d = new Date();
        document.getElementById("Messages").innerHTML += "<br/>" + String(d.getHours()).padStart(2, '0') + ":" + String(d.getMinutes()).padStart(2, '0') + ":" + String(d.getSeconds()).padStart(2, '0') + "." + String(d.getMilliseconds()).padStart(3, '0') + " => Traitement direct du questionnaire.";
	}
	document.getElementById('siegrist').on('plotly_afterplot', function(){document.body.style.cursor="default";});
	document.getElementById("Recommandations").style.visibility = 'visible';	
	document.getElementById("Recommandations").scrollIntoView(true);
}
function sauveimages()
{
    var timestamp = String(d.getHours()).padStart(2, '0') + ":" + String(d.getMinutes()).padStart(2, '0') + ":" + String(d.getSeconds()).padStart(2, '0') + "." + String(d.getMilliseconds()).padStart(3, '0');
    var filenameK = "graphiqueQVT-K_" + timestamp;
    var filenameS = "graphiqueQVT-S_" + timestamp;
    Plotly.downloadImage(document.getElementById('karasek'), {format: 'png', width: 800, height: 800, filename: filenameK});
    Plotly.downloadImage(document.getElementById('siegrist'), {format: 'png', width: 800, height: 800, filename: filenameS});
}
function positionpoint(pointx, exigences, autonomie)
{
	var couleurexigences;
	var couleurautonomie;
	var couleurpointx;
	if ((exigences >= 0) && (exigences <= 9))
	{
		couleurexigences = 1;
	}
	if ((exigences >= 10) && (exigences <= 18))
	{
		couleurexigences = 10;
	}
	if ((exigences >= 19) && (exigences <= 27))
	{
		couleurexigences = 100;
	}
	if ((exigences >= 28) && (exigences <= 36))
	{
		couleurexigences = 1000;
	}
	if ((autonomie >= 0) && (autonomie <= 9))
	{
		couleurautonomie = 1000;
	}
	if ((autonomie >= 10) && (autonomie <= 18))
	{
		couleurautonomie = 100;
	}
	if ((autonomie >= 19) && (autonomie <= 27))
	{
		couleurautonomie = 10;
	}
	if ((autonomie >= 28) && (autonomie <= 36))
	{
		couleurautonomie = 1;
	}
	var intermediaire = couleurautonomie + couleurexigences;
	if ((intermediaire === 2) || (intermediaire === 11))
	{
		if (((pointx >= 28) && (pointx <= 36)) || ((pointx >= 19) && (pointx <= 27)))
		{
			return(1);
		}
		if ((pointx >= 10) && (pointx <= 18))
		{
			return(2);
		}
		if ((pointx >= 0) && (pointx <= 9))
		{
			return(3);
		}		
	}
	if ((intermediaire === 20) || (intermediaire === 101))
	{
		if (((pointx >= 28) && (pointx <= 36)))
		{
			return(1);
		}
		if ((pointx >= 19) && (pointx <= 27))
		{
			return(2);
		}
		if (((pointx >= 10) && (pointx <= 18)) || ((pointx >= 0) && (pointx <= 9)))
		{
			return(3);
		}
	}
	if ((intermediaire === 1001) || (intermediaire === 110) || (intermediaire === 1010) || (intermediaire === 200))
	{
		if ((pointx >= 28) && (pointx <= 36))
		{
			return(2);
		}
		if (((pointx >= 10) && (pointx <= 18)) || ((pointx >= 19) && (pointx <= 27)))
		{
			return(3);
		}
		if ((pointx >= 0) && (pointx <= 9))
		{
			return(4);
		}
	}
	if ((intermediaire === 1100) || (intermediaire === 2000))
	{
		if (((pointx >= 28) && (pointx <= 36)) || ((pointx >= 19) && (pointx <= 27)))
		{
			return(3);
		}
		if (((pointx >= 10) && (pointx <= 18)) || ((pointx >= 0) && (pointx <= 9)))
		{
			return(4);
		}
	}
	return(0);
}
function saveTextAsFile()
{
    var textToSave = "";
	var commentairesExigences = document.getElementById("commentairesExigences").value;
	var commentairesAutonomie = document.getElementById("commentairesAutonomie").value;
	var commentairesSoutien = document.getElementById("commentairesSoutien").value;
	var commentairesReconnaissance = document.getElementById("commentairesReconnaissance").value;
	var commentaire = "";
	for (var x = 1; x < 13; x++)
	{
		var questionA = document.getElementsByName("A" + x);
		for (var i = 0; i < 4; i++)
		{
			if (questionA[i].checked)
			{
				switch(i)
				{
					case 0:
					textToSave += "pas d\'accord";
					break;
					case 1:
					textToSave += "plut\u00f4t pas d\'accord";
					break;
					case 2:
					textToSave += "plut\u00f4t d\'accord";
					break;
					case 3:
					textToSave += "d\'accord";
					break;
    				default:
					textToSave += "";
				}
			}
		}
		textToSave += ",";
	}
	textToSave += commentairesExigences.replace(/\n/g, "/").replace(/\r/g, "/").replace(/,/g, ';');
	textToSave += "\n";
	for (var x = 1; x < 13; x++)
	{
		var questionB = document.getElementsByName("B" + x);
		for (var i = 0; i < 4; i++)
		{
			if (questionB[i].checked)
			{
				switch(i)
				{
					case 0:
					textToSave += "pas d\'accord";
					break;
					case 1:
					textToSave += "plut\u00f4t pas d\'accord";
					break;
					case 2:
					textToSave += "plut\u00f4t d\'accord";
					break;
					case 3:
					textToSave += "d\'accord";
					break;
    				default:
					textToSave += "";
				}
			}
		}	
		textToSave += ",";
	}
	textToSave += commentairesAutonomie.replace(/\n/g, "/").replace(/\r/g, "/").replace(/,/g, ';');
	textToSave += "\n";
	for (var x = 1; x < 13; x++)
	{
		var questionC = document.getElementsByName("C" + x);
		for (var i = 0; i < 4; i++)
		{
			if (questionC[i].checked)
			{
				switch(i)
				{
					case 0:
					textToSave += "pas d\'accord";
					break;
					case 1:
					textToSave += "plut\u00f4t pas d\'accord";
					break;
					case 2:
					textToSave += "plut\u00f4t d\'accord";
					break;
					case 3:
					textToSave += "d\'accord";
					break;
					default:
					textToSave += "";
				}
			}
		}	
		textToSave += ",";
	}
	textToSave += commentairesSoutien.replace(/\n/g, "/").replace(/\r/g, "/").replace(/,/g, ';');
	textToSave += "\n";
	for (var x = 1; x < 13; x++)
	{
		var questionD = document.getElementsByName("D" + x);
		for (var i = 0; i < 4; i++)
		{
			if (questionD[i].checked)
			{
				switch(i)
				{
					case 0:
					textToSave += "pas d\'accord";
					break;
					case 1:
					textToSave += "plut\u00f4t pas d\'accord";
					break;
					case 2:
					textToSave += "plut\u00f4t d\'accord";
					break;
					case 3:
					textToSave += "d\'accord";
					break;
					default:
					textToSave += "";
				}
			}
		}	
		textToSave += ",";
	}
	textToSave += commentairesReconnaissance.replace(/\n/g, "/").replace(/\r/g, "/").replace(/,/g, ';');
    var textToSaveAsBlob = new Blob([textToSave], {type:"text/plain"});
    var textToSaveAsURL = window.URL.createObjectURL(textToSaveAsBlob);
    var fileNameToSaveAs = "questionnaireQVT_" + String(d.getHours()).padStart(2, '0') + ":" + String(d.getMinutes()).padStart(2, '0') + ":" + String(d.getSeconds()).padStart(2, '0') + "." + String(d.getMilliseconds()).padStart(3, '0') + ".csv";
	var downloadLink = document.createElement("a");
    downloadLink.download = fileNameToSaveAs;
    downloadLink.innerHTML = "T&eacute;l&eacute;charger le fichier " + fileNameToSaveAs;
    downloadLink.href = textToSaveAsURL;
    downloadLink.onclick = destroyClickedElement;
    downloadLink.style.display = "none";
    document.body.appendChild(downloadLink);
    downloadLink.click();
}
function destroyClickedElement(event)
{
    document.body.removeChild(event.target);
}
function chargeri()
{
	fileToLoad = document.getElementById("fileToLoad").files;
	if (fileToLoad.length > 0)
    {
		const d = new Date();
        document.getElementById("Messages").innerHTML += "<br/>" + String(d.getHours()).padStart(2, '0') + ":" + String(d.getMinutes()).padStart(2, '0') + ":" + String(d.getSeconds()).padStart(2, '0') + "." + String(d.getMilliseconds()).padStart(3, '0') + " => Chargement de " + fileToLoad[0].name + " en tant qu'individu.";
    }
	if (!(fileToLoad[0].size > 0 && fileToLoad[0].name.slice(0,17) === "questionnaireQVT_" && fileToLoad[0].name.slice(-4) === ".csv"))
	{
		const d = new Date();
		document.getElementById("Messages").innerHTML += "<br/>" + String(d.getHours()).padStart(2, '0') + ":" + String(d.getMinutes()).padStart(2, '0') + ":" + String(d.getSeconds()).padStart(2, '0') + "." + String(d.getMilliseconds()).padStart(3, '0') + " => " + fileToLoad[0].name + " : fichier invalide !";
	}
    else
    {
		var fileReader = new FileReader();
		fileReader.readAsText(fileToLoad[0], "UTF-8");
		fileReader.onload = function(fileLoadedEvent) 
		{
			var validationfichier = [];
			var textFromFileLoaded = fileLoadedEvent.target.result;
			var lignes = textFromFileLoaded.split("\n");
			var ligneA = lignes[0].split(",");
			var ligneB = lignes[1].split(",");
			var ligneC = lignes[2].split(",");
			var ligneD = lignes[3].split(",");
			for (var i = 0; i < 12; i++)
			{
				if (!(ligneA[i] === "pas d\'accord" || ligneA[i] === "plut\u00f4t pas d\'accord" || ligneA[i] === "plut\u00f4t d\'accord" || ligneA[i] === "d\'accord"))
				{
					validationfichier[i] = "A" + (i+1);
					const d = new Date();
					document.getElementById("Messages").innerHTML += "<br/>" + String(d.getHours()).padStart(2, '0') + ":" + String(d.getMinutes()).padStart(2, '0') + ":" + String(d.getSeconds()).padStart(2, '0') + "." + String(d.getMilliseconds()).padStart(3, '0') + " => " + fileToLoad[0].name + " : incomplet, question A" + (i+1);
					break;
				}
				else if (!(ligneB[i] === "pas d\'accord" || ligneB[i] === "plut\u00f4t pas d\'accord" || ligneB[i] === "plut\u00f4t d\'accord" || ligneB[i] === "d\'accord"))
				{
					validationfichier[i] = "B" + (i+1);
					const d = new Date();
					document.getElementById("Messages").innerHTML += "<br/>" + String(d.getHours()).padStart(2, '0') + ":" + String(d.getMinutes()).padStart(2, '0') + ":" + String(d.getSeconds()).padStart(2, '0') + "." + String(d.getMilliseconds()).padStart(3, '0') + " => " + fileToLoad[0].name + " : incomplet, question B" + (i+1);
				}
				else if (!(ligneC[i] === "pas d\'accord" || ligneC[i] === "plut\u00f4t pas d\'accord" || ligneC[i] === "plut\u00f4t d\'accord" || ligneC[i] === "d\'accord"))
				{
					validationfichier[i] = "C" + (i+1);
					const d = new Date();
					document.getElementById("Messages").innerHTML += "<br/>" + String(d.getHours()).padStart(2, '0') + ":" + String(d.getMinutes()).padStart(2, '0') + ":" + String(d.getSeconds()).padStart(2, '0') + "." + String(d.getMilliseconds()).padStart(3, '0') + " => " + fileToLoad[0].name + " : incomplet, question C" + (i+1);
				}
				else if (!(ligneD[i] === "pas d\'accord" || ligneD[i] === "plut\u00f4t pas d\'accord" || ligneD[i] === "plut\u00f4t d\'accord" || ligneD[i] === "d\'accord"))
				{
					validationfichier[i] = "D" + (i+1);
					const d = new Date();
					document.getElementById("Messages").innerHTML += "<br/>" + String(d.getHours()).padStart(2, '0') + ":" + String(d.getMinutes()).padStart(2, '0') + ":" + String(d.getSeconds()).padStart(2, '0') + "." + String(d.getMilliseconds()).padStart(3, '0') + " => " + fileToLoad[0].name + " : incomplet, question D" + (i+1);
				}
				else
				{
					validationfichier[i] = "OK";
				}
			}
			var found = validationfichier.findIndex(function(element) { return element != "OK";});
			if (found === -1 || fileToLoad.length === 1)
			{
				document.getElementById("commentairesExigences").value = ligneA[12].replace(/\//g, "\n").replace(/;/g, ",");
				document.getElementById("commentairesAutonomie").value = ligneB[12].replace(/\//g, "\n").replace(/;/g, ",");
				document.getElementById("commentairesSoutien").value = ligneC[12].replace(/\//g, "\n").replace(/;/g, ",");
				document.getElementById("commentairesReconnaissance").value = ligneD[12].replace(/\//g, "\n").replace(/;/g, ",");
				for (var i = 0; i < 12; i++)
				{
					var x = i+1;
					var checkA = document.getElementsByName("A" + x);
					var checkB = document.getElementsByName("B" + x);
					var checkC = document.getElementsByName("C" + x);
					var checkD = document.getElementsByName("D" + x);
					switch (ligneA[i])
					{
						case "pas d\'accord":
						checkA[0].checked = true;
						break;
						case "plut\u00f4t pas d\'accord":
						checkA[1].checked = true;
						break;
						case "plut\u00f4t d\'accord":
						checkA[2].checked = true;
						break;
						case "d\'accord":
						checkA[3].checked = true;
						break;
						default:
						break;
					}
					switch (ligneB[i])
					{
						case "pas d\'accord":
						checkB[0].checked = true;
						break;
						case "plut\u00f4t pas d\'accord":
						checkB[1].checked = true;
						break;
						case "plut\u00f4t d\'accord":
						checkB[2].checked = true;
						break;
						case "d\'accord":
						checkB[3].checked = true;
						break;
						default:
						break;
					}
					switch (ligneC[i])
					{
						case "pas d\'accord":
						checkC[0].checked = true;
						break;
						case "plut\u00f4t pas d\'accord":
						checkC[1].checked = true;
						break;
						case "plut\u00f4t d\'accord":
						checkC[2].checked = true;
						break;
						case "d\'accord":
						checkC[3].checked = true;
						break;
						default:
						break;
					}
					switch (ligneD[i])
					{
						case "pas d\'accord":
						checkD[0].checked = true;
						break;
						case "plut\u00f4t pas d\'accord":
						checkD[1].checked = true;
						break;
						case "plut\u00f4t d\'accord":
						checkD[2].checked = true;
						break;
						case "d\'accord":
						checkD[3].checked = true;
						break;
						default:
						break;
					}
				}
				if (found === -1)
				{
					traiter(true);
					document.getElementById("fileToLoad").value = "";
				}
				else
				{
					validationfichier.sort();
					if (parseInt(validationfichier[0].substr(1)) === 1)
					{
						switch (validationfichier[0].charAt(1))
						{
							case "A":
							window.scrollTo(0,0);
							break;
							case "B":
							document.getElementById("B123").scrollIntoView(true);
							document.getElementById("A123").scrollIntoView(true);
							break;
							case "C":
							document.getElementById("C123").scrollIntoView(true);
							document.getElementById("B123").scrollIntoView(true);
							break;
							case "D":
							document.getElementById("D123").scrollIntoView(true);
							document.getElementById("C123").scrollIntoView(true);
							break;
							default:
							break;
						}
					}
					else
					{
						switch (validationfichier[0].charAt(1))
						{
							case "A":
							document.getElementById("A" + (parseInt(validationfichier[0].substr(1))-1).toString() + "3").scrollIntoView(true);
							break;
							case "B":
							document.getElementById("B" + (parseInt(validationfichier[0].substr(1))-1).toString() + "3").scrollIntoView(true);
							break;
							case "C":
							document.getElementById("C" + (parseInt(validationfichier[0].substr(1))-1).toString() + "3").scrollIntoView(true);
							break;
							case "D":
							document.getElementById("D" + (parseInt(validationfichier[0].substr(1))-1).toString() + "3").scrollIntoView(true);
							break;
							default:
							break;
						}
					}
				}
            }
		}
    }
}
function effacer()
{
    for (var x = 1; x < 13; x++)
	{
		var resetA = document.getElementsByName("A" + x);
		var resetB = document.getElementsByName("B" + x);
		var resetC = document.getElementsByName("C" + x);
		var resetD = document.getElementsByName("D" + x);
		for (var i = 0; i < 4; i++)
		{
			resetA[i].checked = false;
			resetB[i].checked = false;
			resetC[i].checked = false;
			resetD[i].checked = false;
		}	
	};
	document.getElementById("commentairesExigences").value = "";
	document.getElementById("commentairesAutonomie").value = "";
	document.getElementById("commentairesSoutien").value = "";
	document.getElementById("commentairesReconnaissance").value = "";
	window.scrollTo(0,0);
}
function prechargement()
{
	document.body.style.cursor="wait";
    Plotly.setPlotConfig({locale: 'fr'});
	var dataK = [{ x: [28, 19, 19, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 28, 28, 36, 28, 28, 28, 28, 28, 28, 36, 28, 28, 36, 28, 28, 19, 19, 19, 19, 19, 19, 19, 19, 28, 28, 36, 28, 28, 36, 28, 28, 19, 28, 28, 28, 28, 28, 36, 28, 28, 28, 28, 19, 28, 28, 28, 28], y: [0, 0, 0, 0, 0, 9, 9, 18, 18, 27, 27, 0, 0, 0, 9, 9, 9, 0, 9, 9, 0, 9, 9, 9, 18, 18, 18, 9, 9, 0, 9, 9, 18, 18, 0, 18, 18, 27, 27, 27, 27, 27, 27, 18, 18, 18, 18, 18, 18, 18, 18, 18, 9, 9, 9, 9, 9, 9, 0, 0], z: [19, 19, 36, 36, 10, 10, 19, 19, 28, 28, 36, 36, 10, 10, 10, 10, 10, 10, 10, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 28, 28, 36, 36, 36, 36, 36, 36, 36, 28, 28, 28, 28, 28, 28, 19, 28, 36, 28, 28, 28, 28, 19, 28, 28, 28, 10, 10, 19], type:'scatter3d', mode:'lines', line: {color: 'green', width:2}, hoverinfo:"none", name: 'Travail Protecteur' }, { x: [9, 9, 9, 9, 9, 9, 9, 18, 18, 9, 18, 18, 9, 18, 18, 18, 18, 0, 18, 18, 9, 9, 9, 0, 9, 9, 0, 9, 9, 0, 9, 9, 0, 9, 9, 0, 9, 9, 9, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9, 0, 0, 0, 0, 9, 9, 9, 0, 9, 9, 9, 9, 9, 9, 18, 18, 9, 9, 9, 18, 18], y: [36, 19, 28, 28, 28, 19, 28, 28, 28, 28, 28, 36, 36, 36, 36, 19, 36, 36, 36, 36, 36, 36, 28, 28, 28, 28, 28, 28, 19, 19, 19, 19, 19, 19, 10, 10, 10, 10, 0, 10, 10, 0, 10, 10, 19, 19, 28, 28, 36, 36, 36, 36, 0, 0, 0, 0, 0, 0, 0, 19, 19, 10, 19, 19, 19, 19, 19, 19, 19, 19, 28], z: [18, 18, 18, 27, 9, 9, 9, 9, 18, 18, 18, 18, 18, 18, 0, 0, 0, 0, 0, 18, 18, 36, 36, 36, 36, 27, 27, 27, 27, 27, 27, 18, 18, 18, 18, 18, 18, 9, 9, 9, 9, 9, 9, 18, 18, 27, 27, 36, 36, 36, 36, 0, 0, 9, 9, 0, 0, 0, 0, 0, 9, 9, 9, 0, 0, 9, 9, 18, 9, 9, 9], type:'scatter3d', mode:'lines', line: {color: 'red', width:2}, hoverinfo:"none", name: 'Risque pour la Sant\u00e9'}];
	var dataS = [{ x: [28, 19, 19, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 28, 28, 36, 28, 28, 28, 28, 28, 28, 36, 28, 28, 36, 28, 28, 19, 19, 19, 19, 19, 19, 19, 19, 28, 28, 36, 28, 28, 36, 28, 28, 19, 28, 28, 28, 28, 28, 36, 28, 28, 28, 28, 19, 28, 28, 28, 28], y: [0, 0, 0, 0, 0, 9, 9, 18, 18, 27, 27, 0, 0, 0, 9, 9, 9, 0, 9, 9, 0, 9, 9, 9, 18, 18, 18, 9, 9, 0, 9, 9, 18, 18, 0, 18, 18, 27, 27, 27, 27, 27, 27, 18, 18, 18, 18, 18, 18, 18, 18, 18, 9, 9, 9, 9, 9, 9, 0, 0], z: [19, 19, 36, 36, 10, 10, 19, 19, 28, 28, 36, 36, 10, 10, 10, 10, 10, 10, 10, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 28, 28, 36, 36, 36, 36, 36, 36, 36, 28, 28, 28, 28, 28, 28, 19, 28, 36, 28, 28, 28, 28, 19, 28, 28, 28, 10, 10, 19], type:'scatter3d', mode:'lines', line: {color: 'green', width:2}, hoverinfo:"none", name: 'Travail Protecteur' }, { x: [9, 9, 9, 9, 9, 9, 9, 18, 18, 9, 18, 18, 9, 18, 18, 18, 18, 0, 18, 18, 9, 9, 9, 0, 9, 9, 0, 9, 9, 0, 9, 9, 0, 9, 9, 0, 9, 9, 9, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9, 0, 0, 0, 0, 9, 9, 9, 0, 9, 9, 9, 9, 9, 9, 18, 18, 9, 9, 9, 18, 18], y: [36, 19, 28, 28, 28, 19, 28, 28, 28, 28, 28, 36, 36, 36, 36, 19, 36, 36, 36, 36, 36, 36, 28, 28, 28, 28, 28, 28, 19, 19, 19, 19, 19, 19, 10, 10, 10, 10, 0, 10, 10, 0, 10, 10, 19, 19, 28, 28, 36, 36, 36, 36, 0, 0, 0, 0, 0, 0, 0, 19, 19, 10, 19, 19, 19, 19, 19, 19, 19, 19, 28], z: [18, 18, 18, 27, 9, 9, 9, 9, 18, 18, 18, 18, 18, 18, 0, 0, 0, 0, 0, 18, 18, 36, 36, 36, 36, 27, 27, 27, 27, 27, 27, 18, 18, 18, 18, 18, 18, 9, 9, 9, 9, 9, 9, 18, 18, 27, 27, 36, 36, 36, 36, 0, 0, 9, 9, 0, 0, 0, 0, 0, 9, 9, 9, 0, 0, 9, 9, 18, 9, 9, 9], type:'scatter3d', mode:'lines', line: {color: 'red', width:2}, hoverinfo:"none", name: 'Risque pour la Sant\u00e9'}];
	var layoutkarasek = {modebar: {orientation: "v", color: "black", activecolor: "red"}, dragmode: 'turntable', showlegend: true, legend:{x: 0, y: 0}, scene: {xaxis:{range: [0, 36], title: {text:'Soutien'}, tickmode: 'linear', dtick: 9, mirror: true, nticks: 9, type: 'linear', autorange: false, showline: true}, yaxis:{range: [0, 36], title: {text:'Exigences'}, tickmode: 'linear', dtick: 9, mirror: true, nticks: 9, type: 'linear', autorange: false, showline: true}, zaxis:{range: [0, 36], title: {text:'Autonomie'},  tickmode: 'linear', dtick: 9, mirror: true, nticks: 9, type: 'linear', autorange: false, showline: true}, camera: {up: {y: 0, x: 0, z: 1}, center: {y: 0, x: 0, z: -0.5}, eye: {y: 2.5, x: 1.5, z: 1}}}, margin:{l: 0, r: 0, b: 0, t: 0, pad: 1}};
	var layoutsiegrist = {modebar: {orientation: "v", color: "black", activecolor: "red"}, dragmode: 'turntable', showlegend: true, legend:{x: 0, y: 0}, scene: {xaxis:{range: [0, 36], title: {text:'Reconnaissance'}, tickmode: 'linear', dtick: 9, mirror: true, nticks: 9, type: 'linear', autorange: false, showline: true}, yaxis:{range: [0, 36], title: {text:'Exigences'}, tickmode: 'linear', dtick: 9, mirror: true, nticks: 9, type: 'linear', autorange: false, showline: true}, zaxis: {range: [0, 36], title: {text:'Autonomie'},  tickmode: 'linear', dtick: 9, mirror: true, nticks: 9, type: 'linear', autorange: false, showline: true}, camera: {up: {y: 0, x: 0, z: 1}, center: {y: 0, x: 0, z: -0.5}, eye: {y: 2.5, x: 1.5, z: 1}}}, margin:{l: 0, r: 0, b: 0, t: 0, pad: 1}};
	Plotly.newPlot(document.getElementById('karasek'), dataK, layoutkarasek, {modeBarButtonsToAdd: [{name:'Effacer le dernier ajout', icon: Plotly.Icons.eraseshape, click: function(gd) {purge(false);}}, {name:'Effacer entièrement', icon: Plotly.Icons.home, click: function(gd) {purge(true);}}, {name: 'Sauvegarder', icon: Plotly.Icons.camera, click: function(gd) {sauveimages();}}, {name: 'Passer en plein écran', icon: Plotly.Icons.zoombox, click: function(gd) {document.getElementById("cubes").requestFullscreen();}}], modeBarButtonsToRemove: ['zoom3d', 'toImage', 'sendDataToCloud', 'resetCameraDefault3d', 'resetCameraLastSave3d', 'hoverClosest3d'], displayModeBar: true, displaylogo: false, responsive: true});
	Plotly.newPlot(document.getElementById('siegrist'), dataS, layoutsiegrist, {modeBarButtonsToAdd: [{name:'Effacer le dernier ajout', icon: Plotly.Icons.eraseshape, click: function(gd) {purge(false);}}, {name:'Effacer entièrement', icon: Plotly.Icons.home, click: function(gd) {purge(true);}}, {name: 'Sauvegarder', icon: Plotly.Icons.camera, click: function(gd) {sauveimages();}}, {name: 'Passer en plein écran', icon: Plotly.Icons.zoombox, click: function(gd) {document.getElementById("cubes").requestFullscreen();}}], modeBarButtonsToRemove: ['zoom3d', 'toImage', 'sendDataToCloud', 'resetCameraDefault3d', 'resetCameraLastSave3d', 'hoverClosest3d'], displayModeBar: true, displaylogo: false, responsive: true});
}
function purge(flag)
{
    if ((document.getElementById("karasek").data != undefined) && (document.getElementById("siegrist").data != undefined))
	{
        if(document.getElementById('karasek').data.length > 2 && document.getElementById('siegrist').data.length > 2)
        {
			if (flag === true)
			{
				Plotly.purge(document.getElementById('karasek'));
				Plotly.purge(document.getElementById('siegrist'));
				prechargement();
				const d = new Date();
				document.getElementById("Messages").innerHTML += "<br/>" + String(d.getHours()).padStart(2, '0') + ":" + String(d.getMinutes()).padStart(2, '0') + ":" + String(d.getSeconds()).padStart(2, '0') + "." + String(d.getMilliseconds()).padStart(3, '0') + " => " + "Effacement complet des cubes.";
				document.getElementById("Recommandations").style.visibility = 'collapse';
				document.getElementById("Statistiques").style.visibility = 'collapse';
				document.getElementById('siegrist').on('plotly_afterplot', function(){document.body.style.cursor="default";});
			}
			else
			{
				Plotly.deleteTraces(document.getElementById('karasek'), -1);
            	Plotly.deleteTraces(document.getElementById('siegrist'), -1);
				const d = new Date();
				document.getElementById("Messages").innerHTML += "<br/>" + String(d.getHours()).padStart(2, '0') + ":" + String(d.getMinutes()).padStart(2, '0') + ":" + String(d.getSeconds()).padStart(2, '0') + "." + String(d.getMilliseconds()).padStart(3, '0') + " => " + "Effacement du dernier ajout dans les cubes.";
				document.getElementById("Recommandations").style.visibility = 'collapse';
				document.getElementById("Statistiques").style.visibility = 'collapse';
			}
        }
    }
}
function chargerp(flag)
{
    if (flag === true)
	{
		filesToLoad = document.getElementById("filesToLoadc").files;
	}
	else
	{
		filesToLoad = document.getElementById("filesToLoad").files;
	}
	if (filesToLoad.length > 0)
	{
		const d = new Date();
		document.getElementById("Messages").innerHTML += "<br/>" + String(d.getHours()).padStart(2, '0') + ":" + String(d.getMinutes()).padStart(2, '0') + ":" + String(d.getSeconds()).padStart(2, '0') + "." + String(d.getMilliseconds()).padStart(3, '0') + " => Chargement de " + filesToLoad.length + " fichiers";
		if (flag === true)
		{
			document.getElementById("Messages").innerHTML += " en tant que collectif.";
		}
		else
		{
			document.getElementById("Messages").innerHTML += " en tant que groupe.";
		}
		compteur = 0;
		for (var n = 0; n < filesToLoad.length; n++)
		{
			if (!(filesToLoad[n].size > 0 && filesToLoad[n].name.slice(0,17) === "questionnaireQVT_" && filesToLoad[n].name.slice(-4) === ".csv"))
			{
				const d = new Date();
				document.getElementById("Messages").innerHTML += "<br/>" + String(d.getHours()).padStart(2, '0') + ":" + String(d.getMinutes()).padStart(2, '0') + ":" + String(d.getSeconds()).padStart(2, '0') + "." + String(d.getMilliseconds()).padStart(3, '0') + " => " + filesToLoad[n].name + " : fichier invalide !";
			}
			else
			{
                if (flag === false)
                {
                    if ((document.getElementById("karasek").data === undefined) || (document.getElementById("siegrist").data === undefined))
                    {
                        prechargement();
                    }
                }
                soutien = [];
				reconnaissance = [];
				exigences = [];
				autonomie = [];
				texteK = [];
				texteS = [];
				couleurK = [];
				couleurS = [];
				vertk = 0;
				jaunek = 0;
				orangek = 0;
				rougek = 0;
				verts = 0;
				jaunes = 0;
				oranges = 0;
				rouges = 0;
				var fileReader = new FileReader();
				fileReader.readAsText(filesToLoad[n], "UTF-8");
				fileReader.onload = function(fileLoadedEvent) 
				{
                    var textFromFileLoaded = fileLoadedEvent.target.result;
					var lignes = textFromFileLoaded.split("\n");
					var ligneA = lignes[0].split(",");
					var ligneB = lignes[1].split(",");
					var ligneC = lignes[2].split(",");
					var ligneD = lignes[3].split(",");
					var tableauA = [[0,1,2,3],[0,1,2,3],[3,2,1,0],[0,1,2,3],[0,1,2,3],[0,1,2,3],[0,1,2,3],[0,1,2,3],[3,2,1,0],[3,2,1,0],[0,1,2,3],[0,1,2,3]];
					var tableauB = [[0,1,2,3],[0,1,2,3],[0,1,2,3],[0,1,2,3],[3,2,1,0],[0,1,2,3],[0,1,2,3],[0,1,2,3],[0,1,2,3],[3,2,1,0],[0,1,2,3],[3,2,1,0]];
					var tableauC = [[0,1,2,3],[0,1,2,3],[0,1,2,3],[0,1,2,3],[0,1,2,3],[0,1,2,3],[0,1,2,3],[0,1,2,3],[0,1,2,3],[0,1,2,3],[0,1,2,3],[0,1,2,3]];
					var tableauD = [[0,1,2,3],[0,1,2,3],[0,1,2,3],[0,1,2,3],[3,2,1,0],[0,1,2,3],[0,1,2,3],[0,1,2,3],[0,1,2,3],[0,1,2,3],[0,1,2,3],[0,1,2,3]];
					var scoreexigences = 0;
					var scoreautonomie = 0;
					var scoresoutien = 0;
					var scorereconnaissance = 0;
					for (var i = 0; i < 12; i++)
					{
						switch (ligneA[i])
						{
							case "pas d\'accord":
							scoreexigences += tableauA[i][0];
							break;
							case "plut\u00f4t pas d\'accord":
							scoreexigences += tableauA[i][1];
							break;
							case "plut\u00f4t d\'accord":
							scoreexigences += tableauA[i][2];
							break;
							case "d\'accord":
							scoreexigences += tableauA[i][3];
							break;
							default:
							const d = new Date();
							document.getElementById("Messages").innerHTML += "<br/>" + String(d.getHours()).padStart(2, '0') + ":" + String(d.getMinutes()).padStart(2, '0') + ":" + String(d.getSeconds()).padStart(2, '0') + "." + String(d.getMilliseconds()).padStart(3, '0') + " => " + filesToLoad[compteur].name + " : incomplet";
							compteur++;
							return; 
						}
						switch (ligneB[i])
						{
							case "pas d\'accord":
							scoreautonomie += tableauB[i][0];
							break;
							case "plut\u00f4t pas d\'accord":
							scoreautonomie += tableauB[i][1];
							break;
							case "plut\u00f4t d\'accord":
							scoreautonomie += tableauB[i][2];
							break;
							case "d\'accord":
							scoreautonomie += tableauB[i][3];
							break;
							default:
							const d = new Date();
							document.getElementById("Messages").innerHTML += "<br/>" + String(d.getHours()).padStart(2, '0') + ":" + String(d.getMinutes()).padStart(2, '0') + ":" + String(d.getSeconds()).padStart(2, '0') + "." + String(d.getMilliseconds()).padStart(3, '0') + " => " + filesToLoad[compteur].name + " : incomplet";
							compteur++;
							return; 
						}
						switch (ligneC[i])
						{
							case "pas d\'accord":
							scoresoutien += tableauC[i][0];
							break;
							case "plut\u00f4t pas d\'accord":
							scoresoutien += tableauC[i][1];
							break;
							case "plut\u00f4t d\'accord":
							scoresoutien += tableauC[i][2];
							break;
							case "d\'accord":
							scoresoutien += tableauC[i][3];
							break;
							default:
							const d = new Date();
							document.getElementById("Messages").innerHTML += "<br/>" + String(d.getHours()).padStart(2, '0') + ":" + String(d.getMinutes()).padStart(2, '0') + ":" + String(d.getSeconds()).padStart(2, '0') + "." + String(d.getMilliseconds()).padStart(3, '0') + " => " + filesToLoad[compteur].name + " : incomplet";
							compteur++;
							return; 
						}
						switch (ligneD[i])
						{
							case "pas d\'accord":
							scorereconnaissance += tableauD[i][0];
							break;
							case "plut\u00f4t pas d\'accord":
							scorereconnaissance += tableauD[i][1];
							break;
							case "plut\u00f4t d\'accord":
							scorereconnaissance += tableauD[i][2];
							break;
							case "d\'accord":
							scorereconnaissance += tableauD[i][3];
							break;
							default:
							const d = new Date();
							document.getElementById("Messages").innerHTML += "<br/>" + String(d.getHours()).padStart(2, '0') + ":" + String(d.getMinutes()).padStart(2, '0') + ":" + String(d.getSeconds()).padStart(2, '0') + "." + String(d.getMilliseconds()).padStart(3, '0') + " => " + filesToLoad[compteur].name + " : incomplet";
							compteur++;
							return; 
						}
					}
                    soutien[compteur] = scoresoutien;
                    reconnaissance[compteur] = scorereconnaissance;
                    exigences[compteur] = scoreexigences;
                    autonomie[compteur] = scoreautonomie;
					var positionK = positionpoint(scoresoutien,scoreexigences,scoreautonomie);
					var positionS = positionpoint(scorereconnaissance,scoreexigences,scoreautonomie);
					var textepointK;
					var textepointS;
                    switch (positionK)
					{
						case 1:
							textepointK = "Le point est dans la zone de travail protecteur :)";
							couleurpointK = "darkgreen";
							vertk++;
							break;
						case 2:
							textepointK = "Le point est dans la zone d\'attention.";
							couleurpointK = "yellow";
							jaunek++;
							break;
						case 3:
							textepointK = "Le point est dans la zone d\'alerte !";
							couleurpointK = "darkorange";
							orangek++;
							break;
						case 4:
							textepointK = "Le point est dans la zone de risque pour la santé :(";
							couleurpointK = "red";
							rougek++;
							break;
						default:
							textepointK = "";
							couleurpointK = "darkgrey";
					}
					switch (positionS)
					{
						case 1:
							textepointS = "Le point est dans la zone de travail protecteur :)";
							couleurpointS = "darkgreen";
							verts++;
							break;
						case 2:
							textepointS = "Le point est dans la zone d\'attention.";
							couleurpointS = "yellow";
							jaunes++;
							break;
						case 3:
							textepointS = "Le point est dans la zone d\'alerte !";
							couleurpointS = "darkorange";
							oranges++;
							break;
						case 4:
							textepointS = "Le point est dans la zone de risque pour la santé :(";
							couleurpointS = "red";
							rouges++;
							break;
						default:
							textepointS = "";
							couleurpointS = "darkgrey";
					}
					textepointK += '<br>' + filesToLoad[compteur].name;
					textepointS += '<br>' + filesToLoad[compteur].name;
					if (flag === false)
                    {
                        var updateK = { x:[scoresoutien], y:[scoreexigences], z:[scoreautonomie], type:'scatter3d', hoverinfo:'x+y+z+text', hoverlabel:{bgcolor: couleurpointK}, text: textepointK, marker:{color: couleurpointK}};
                        var updateS = { x:[scorereconnaissance], y:[scoreexigences], z:[scoreautonomie], type:'scatter3d', hoverinfo:'x+y+z+text', hoverlabel:{bgcolor: couleurpointS}, text: textepointS, marker:{color: couleurpointS}};
                        var layout = {showlegend: false};
                        var style = {showlegend: true};
                        Plotly.addTraces(document.getElementById('karasek'), updateK);
                        Plotly.addTraces(document.getElementById('siegrist'), updateS);
                        Plotly.restyle(document.getElementById('karasek'),layout);
                        Plotly.restyle(document.getElementById('karasek'),style,[0,1]);
                        Plotly.restyle(document.getElementById('siegrist'),layout);
                        Plotly.restyle(document.getElementById('siegrist'),style,[0,1]);
                    }
                    else
                    {
                        texteK[compteur] = textepointK;
					    texteS[compteur] = textepointS;
					    couleurK[compteur] = couleurpointK;
					    couleurS[compteur] = couleurpointS;
                    }
                    if (compteur === (filesToLoad.length - 1))
					{
						var moyexigences, moyautonomie, moysoutien, moyreconnaissance, medexigences, medautonomie, medsoutien, medreconnaissance;
						moyexigences = (exigences.reduce(function(a, b) { return a + b; }) / exigences.length).toFixed(2);
						moyautonomie = (autonomie.reduce(function(a, b) { return a + b; }) / autonomie.length).toFixed(2);
						moysoutien = (soutien.reduce(function(a, b) { return a + b; }) / soutien.length).toFixed(2);
						moyreconnaissance = (reconnaissance.reduce(function(a, b) { return a + b; }) / reconnaissance.length).toFixed(2);
						var numbers = exigences.slice(0).sort((a,b) => a - b);
  						var middle = Math.floor(numbers.length / 2);
						if (numbers.length % 2 === 0)
						{
							medexigences = ((numbers[middle] + numbers[middle - 1]) / 2).toFixed(2);
						}
						else
						{
							medexigences = (numbers[middle]).toFixed(2);
						}
						numbers = autonomie.slice(0).sort((a,b) => a - b);
  						middle = Math.floor(numbers.length / 2);
						if (numbers.length % 2 === 0)
						{
							medautonomie = ((numbers[middle] + numbers[middle - 1]) / 2).toFixed(2);
						}
						else
						{
							medautonomie = (numbers[middle]).toFixed(2);
						}
						numbers = exigences.slice(0).sort((a,b) => a - b);
  						middle = Math.floor(numbers.length / 2);
						if (numbers.length % 2 === 0)
						{
							medsoutien = ((numbers[middle] + numbers[middle - 1]) / 2).toFixed(2);
						}
						else
						{
							medsoutien = (numbers[middle]).toFixed(2);
						}
						numbers = exigences.slice(0).sort((a,b) => a - b);
  						middle = Math.floor(numbers.length / 2);
						if (numbers.length % 2 === 0)
						{
							medreconnaissance = ((numbers[middle] + numbers[middle - 1]) / 2).toFixed(2);
						}
						else
						{
							medreconnaissance = (numbers[middle]).toFixed(2);
						}
						document.getElementById("aexigences").innerHTML = moyexigences;
						document.getElementById("aautonomie").innerHTML = moyautonomie;
						document.getElementById("asoutien").innerHTML = moysoutien;
						document.getElementById("areconnaissance").innerHTML = moyreconnaissance;
						document.getElementById("mexigences").innerHTML =  medexigences;
						document.getElementById("mautonomie").innerHTML =  medautonomie;
						document.getElementById("msoutien").innerHTML =  medsoutien;
						document.getElementById("mreconnaissance").innerHTML =  medreconnaissance;
						document.getElementById("svert").innerHTML = vertk;
						document.getElementById("sjaune").innerHTML = jaunek;
						document.getElementById("sorange").innerHTML = orangek;
						document.getElementById("srouge").innerHTML = rougek;
						document.getElementById("rvert").innerHTML = verts;
						document.getElementById("rjaune").innerHTML = jaunes;
						document.getElementById("rorange").innerHTML = oranges;
						document.getElementById("rrouge").innerHTML = rouges;
						if (flag === true)
                        {
                            if ((document.getElementById("karasek").data === undefined) || (document.getElementById("siegrist").data === undefined))
                            {
                                prechargement();
                            }
                            var updateK = { x: soutien, y: exigences, z: autonomie, type:'scatter3d', mode:'markers', hoverinfo:'x+y+z+text', hoverlabel:{bgcolor: couleurK}, text: texteK, marker:{symbol: 'diamond', size: 4, opacity: 0.5} };
                            var updateS = { x: reconnaissance, y: exigences, z: autonomie, type:'scatter3d', mode:'markers', hoverinfo:'x+y+z+text', hoverlabel:{bgcolor: couleurS}, text: texteS, marker:{symbol: 'diamond', size: 4, opacity: 0.5}};
                            var layout = {showlegend: false};
                            var style = {showlegend: true};
                            Plotly.addTraces(document.getElementById('karasek'), updateK);
                            Plotly.addTraces(document.getElementById('siegrist'), updateS);
                            Plotly.restyle(document.getElementById('karasek'),layout);
                            Plotly.restyle(document.getElementById('karasek'),style,[0,1]);
                            Plotly.restyle(document.getElementById('siegrist'),layout);
                            Plotly.restyle(document.getElementById('siegrist'),style,[0,1]);
                            document.getElementById('siegrist').on('plotly_afterplot', function(){document.getElementById("filesToLoadc").value = ""; document.body.style.cursor="default";});
                        }
                        else
                        {
                            document.getElementById('siegrist').on('plotly_afterplot', function(){document.getElementById("filesToLoad").value = ""; document.body.style.cursor="default";});
                        }                        
                        document.getElementById("Recommandations").style.visibility = 'collapse';
						document.getElementById("Statistiques").style.visibility = 'visible';
						document.getElementById("Statistiques").scrollIntoView(true);
                    }
                    compteur++;
				};				
			}
        }
    }
}