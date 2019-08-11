function prechargement()
{
	Plotly.setPlotConfig({locale: 'fr'});
	var dataK = [{ x: [36, 18, 36, 36, 36, 36, 18, 36], y: [0, 0, 0, 0, 18, 0, 0, 18], z: [36, 36, 18, 36, 36, 18, 36, 36], type:'scatter3d', mode:'lines', line: {color: 'green', width:4}, hoverinfo:"name", name: 'Travail Protecteur' }, { x: [0, 0, 0, 0, 0, 0, 18, 0, 0, 18, 36, 18, 36, 36, 0, 18, 36], y: [36, 36, 0, 0, 18, 0, 18, 0, 36, 18, 36, 36, 36, 18, 0, 18, 18], z: [18, 36, 36, 0, 0, 0, 18, 36, 36, 18, 0, 0, 0, 0, 0, 18, 0], type:'scatter3d', mode:'lines', line: {color: 'yellow', width:4}, hoverinfo:"name", name: 'Zone d\'Attention' }, { x: [0, 0, 27, 18, 27, 0, 0, 0, 0], y: [36, 36, 36, 36, 36, 9, 18, 9, 36], z: [18, 36, 0, 0, 0, 0, 0, 0, 36], type:'scatter3d', mode:'lines', line: {color: 'orange', width:4}, hoverinfo:"name", name: 'Zone d\'Alerte' }, { x: [0, 18, 0, 0, 0, 18, 0, 0], y: [36, 36, 18, 36, 36, 36, 18, 36], z: [0, 0, 0, 0, 18, 0, 0, 18], type:'scatter3d', mode:'lines', line: {color: 'red', width:4}, hoverinfo:"name", name: 'Risque pour la Sant\u00e9'}];
	var dataS = [{ x: [36, 18, 36, 36, 36, 36, 18, 36], y: [0, 0, 0, 0, 18, 0, 0, 18], z: [36, 36, 18, 36, 36, 18, 36, 36], type:'scatter3d', mode:'lines', line: {color: 'green', width:4}, hoverinfo:"name", name: 'Travail Protecteur' }, { x: [0, 0, 0, 0, 0, 0, 18, 0, 0, 18, 36, 18, 36, 36, 0, 18, 36], y: [36, 36, 0, 0, 18, 0, 18, 0, 36, 18, 36, 36, 36, 18, 0, 18, 18], z: [18, 36, 36, 0, 0, 0, 18, 36, 36, 18, 0, 0, 0, 0, 0, 18, 0], type:'scatter3d', mode:'lines', line: {color: 'yellow', width:4}, hoverinfo:"name", name: 'Zone d\'Attention' }, { x: [0, 0, 27, 18, 27, 0, 0, 0, 0], y: [36, 36, 36, 36, 36, 9, 18, 9, 36], z: [18, 36, 0, 0, 0, 0, 0, 0, 36], type:'scatter3d', mode:'lines', line: {color: 'orange', width:4}, hoverinfo:"name", name: 'Zone d\'Alerte' }, { x: [0, 18, 0, 0, 0, 18, 0, 0], y: [36, 36, 18, 36, 36, 36, 18, 36], z: [0, 0, 0, 0, 18, 0, 0, 18], type:'scatter3d', mode:'lines', line: {color: 'red', width:4}, hoverinfo:"name", name: 'Risque pour la Sant\u00e9'}];
	var layoutkarasek = {autosize: true, dragmode: 'turntable', showlegend: true, legend:{x: 0, y: 0}, scene: {xaxis:{range: [0, 36], title: 'Soutien', tickmode: 'linear', dtick: 9, mirror: true, nticks: 9, type: 'linear', autorange: false, showline: true}, yaxis:{range: [0, 36], title: 'Exigences', tickmode: 'linear', dtick: 9, mirror: true, nticks: 9, type: 'linear', autorange: false, showline: true}, zaxis:{range: [0, 36], title: 'Autonomie',  tickmode: 'linear', dtick: 9, mirror: true, nticks: 9, type: 'linear', autorange: false, showline: true},	camera: {up: {y: 0, x: 0, z: 1}, center: {y: 0, x: 0, z: -0.5}, eye: {y: 2.5, x: 1.5, z: 1}}}, margin:{l: 0, r: 0, b: 0, t: 0, pad: 1}};
	var layoutsiegrist = {autosize: true, dragmode: 'turntable', showlegend: true, legend:{x: 0, y: 0}, scene: {xaxis:{range: [0, 36], title: 'Reconnaissance', tickmode: 'linear', dtick: 9, mirror: true, nticks: 9, type: 'linear', autorange: false, showline: true}, yaxis:{range: [0, 36], title: 'Exigences', tickmode: 'linear', dtick: 9, mirror: true, nticks: 9, type: 'linear', autorange: false, showline: true}, zaxis: {range: [0, 36], title: 'Autonomie',  tickmode: 'linear', dtick: 9, mirror: true, nticks: 9, type: 'linear', autorange: false, showline: true}, camera: {up: {y: 0, x: 0, z: 1}, center: {y: 0, x: 0, z: -0.5}, eye: {y: 2.5, x: 1.5, z: 1}}}, margin:{l: 0, r: 0, b: 0, t: 0, pad: 1}};
	Plotly.newPlot(document.getElementById('karasek'), dataK, layoutkarasek, {modeBarButtonsToRemove: ['toImage', 'sendDataToCloud', 'resetCameraDefault3d', 'resetCameraLastSave3d', 'hoverClosest3d'], displayModeBar: true, displaylogo: false, responsive: true});
	Plotly.newPlot(document.getElementById('siegrist'), dataS, layoutsiegrist, {modeBarButtonsToRemove: ['toImage', 'sendDataToCloud', 'resetCameraDefault3d', 'resetCameraLastSave3d', 'hoverClosest3d'], displayModeBar: true, displaylogo: false, responsive: true});
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
    var fileNameToSaveAs = "questionnaireQVT_" + Date.now() + ".csv";
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

function sauveimages()
{
    var timestamp = Date.now();
    var filenameK = "graphiqueQVT-K_" + timestamp;
    var filenameS = "graphiqueQVT-S_" + timestamp;
    Plotly.downloadImage(document.getElementById('karasek'), {format: 'png', width: 800, height: 800, filename: filenameK});
    Plotly.downloadImage(document.getElementById('siegrist'), {format: 'png', width: 800, height: 800, filename: filenameS});
}

function positionpoint(pointx, exigences, autonomie)
{
	var matriceverte = [[-18,0,18], [0,18,18], [pointx - 36, exigences, autonomie - 18]];
	var determinantvert = matriceverte[0][0] * (matriceverte[1][1]*matriceverte[2][2] - matriceverte[1][2]*matriceverte[2][1]) - matriceverte[0][1] * (matriceverte[1][0]*matriceverte[2][2] - matriceverte[1][2]*matriceverte[2][0]) + matriceverte[0][2] * (matriceverte[1][0]*matriceverte[2][1] - matriceverte[1][1]*matriceverte[2][0]);
	if (determinantvert <= 0)
	{
		return("Le point est dans la zone de travail protecteur :)");
	}
	var matricerouge = [[-18,-18,0], [-18,0,18], [pointx - 18, exigences - 36, autonomie]];
	var determinantrouge = matricerouge[0][0] * (matricerouge[1][1]*matricerouge[2][2] - matricerouge[1][2]*matricerouge[2][1]) - matricerouge[0][1] * (matricerouge[1][0]*matricerouge[2][2] - matricerouge[1][2]*matricerouge[2][0]) + matricerouge[0][2] * (matricerouge[1][0]*matricerouge[2][1] - matricerouge[1][1]*matricerouge[2][0]);
	if (determinantrouge >= 0)
	{
		return("Le point est dans la zone de risque pour la santé :(");
	}
	var matriceorange = [[-27,-27,0], [-27,0,36], [pointx - 27, exigences - 36, autonomie]];
	var determinantorange = matriceorange[0][0] * (matriceorange[1][1]*matriceorange[2][2] - matriceorange[1][2]*matriceorange[2][1]) - matriceorange[0][1] * (matriceorange[1][0]*matriceorange[2][2] - matriceorange[1][2]*matriceorange[2][0]) + matriceorange[0][2] * (matriceorange[1][0]*matriceorange[2][1] - matriceorange[1][1]*matriceorange[2][0]);
	if (determinantorange >= 0)
	{
		return("Le point est dans la zone d\'alerte !");
	}
	var matricejaune = [[[-18,-18,-18], [-18,-18,18], [pointx - 18, exigences - 18, autonomie - 18]], [[-36,-18,0], [-18,0,18], [pointx - 36, exigences - 18, autonomie]], [[0,-18,0], [-18,-18,18], [pointx - 36, exigences - 36, autonomie]], [[-18,-18,18], [-18,18,18], [pointx - 18, exigences - 18, autonomie - 18]], [[-18,-18,18], [-36,0,36], [pointx - 36, exigences - 36, autonomie]]];
	var determinant = [];
	var compte = 0;
	for (var i = 0; i < 5; i++)
	{
		determinant[i] = matricejaune[i][0][0] * (matricejaune[i][1][1]*matricejaune[i][2][2] - matricejaune[i][1][2]*matricejaune[i][2][1]) - matricejaune[i][0][1] * (matricejaune[i][1][0]*matricejaune[i][2][2] - matricejaune[i][1][2]*matricejaune[i][2][0]) + matricejaune[i][0][2] * (matricejaune[i][1][0]*matricejaune[i][2][1] - matricejaune[i][1][1]*matricejaune[i][2][0]);
		if (determinant[i] >= 0)
		{
			compte += 1;
		}
	}
	if (compte >= 4)
	{
		return("Le point est dans la zone d\'attention.");
	}
	return "";
}

function graphiques(soutien, reconnaissance, exigences, autonomie, flag, textepointK, textepointS)
{
	var updateK = { x:[soutien], y:[exigences], z:[autonomie], type:'scatter3d', hoverinfo:'x+y+z+text', text: textepointK, marker:{}};
	var updateS = { x:[reconnaissance], y:[exigences], z:[autonomie], type:'scatter3d', hoverinfo:'x+y+z+text', text: textepointS, marker:{}};
	var layout = {showlegend: false};
	var style = {showlegend: true};
	Plotly.addTraces(document.getElementById('karasek'), updateK);
	Plotly.addTraces(document.getElementById('siegrist'), updateS);
	Plotly.restyle(document.getElementById('karasek'),layout);
	Plotly.restyle(document.getElementById('karasek'),style,[0,1,2,3]);
	Plotly.restyle(document.getElementById('siegrist'),layout);
    Plotly.restyle(document.getElementById('siegrist'),style,[0,1,2,3]);
    if (flag === true)
	{
		document.getElementById('siegrist').on('plotly_afterplot', function(){document.getElementById("filesToLoad").value = "";});
	}
	document.getElementById('MenuG').style.display = "block";
	document.getElementById('cubes').style.display = "grid";
}

function purge()
{
    if(document.getElementById('karasek').data.length > 4 && document.getElementById('siegrist').data.length > 4)
    {
        Plotly.deleteTraces(document.getElementById('karasek'), -1);
        Plotly.deleteTraces(document.getElementById('siegrist'), -1);
    }
}

function purgetotale()
{
    if(document.getElementById('karasek').data.length > 4 && document.getElementById('siegrist').data.length > 4)
    {
        Plotly.purge(document.getElementById('karasek'));
        Plotly.purge(document.getElementById('siegrist'));
		prechargement();
		document.getElementById("cubes").style.display = "grid";
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
	document.getElementById("autonomie").value = "";
	document.getElementById("exigences").value = "";
	document.getElementById("soutien").value = "";
	document.getElementById("reconnaissance").value = "";
	window.scrollTo(0,0);
}

function traiter()
{
    var cocheA = false;
	var cocheB = false;
	var cocheC = false;
	var cocheD = false;
	var manqueA = [];
	var manqueB = [];
	var manqueC = [];
	var manqueD = [];
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
        }
        else
        {
            document.getElementById("B123").scrollIntoView(true);
            document.getElementById("B" + (indexpremier) + "3").scrollIntoView(true);
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
        }
        else
        {
            document.getElementById("C123").scrollIntoView(true);
            document.getElementById("C" + (indexpremier) + "3").scrollIntoView(true);
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
        }
        else
        {
            document.getElementById("D123").scrollIntoView(true);
            document.getElementById("D" + (indexpremier) + "3").scrollIntoView(true);
        }
		return;
	}
    calculer();
    var textepointK = positionpoint(document.getElementById('soutien').value);
    var textepointS = positionpoint(document.getElementById('reconnaissance').value);
    textepointK += "<br>questionnaire saisi directement";
    textepointS += "<br>questionnaire saisi directement";
	graphiques(document.getElementById('soutien').value, document.getElementById('reconnaissance').value, document.getElementById('exigences').value,document.getElementById('autonomie').value, false,textepointK, textepointS);
	recommandations(document.getElementById('soutien').value, document.getElementById('reconnaissance').value, document.getElementById('exigences').value,document.getElementById('autonomie').value);
}

function loadMultipleFilesAsText(flag)
{
	if (flag === true)
	{
		fileToLoad = document.getElementById("filesToLoad").files;
	}
	if (flag === false)
	{
		fileToLoad = document.getElementById("fileToLoad").files;
	}
	if (fileToLoad.length > 0)
    {
        if (fileToLoad.length === 1)
        {
			document.getElementById("Messages").innerHTML += "<br/>Chargement de : " + fileToLoad[0].name;
        }
        else
        {
			document.getElementById("Messages").innerHTML += "<br/>Chargement de " + fileToLoad.length + " fichiers.";
		}
		document.getElementById("Messages").style.display = "inline";
		compteur = 0;
		for (var n = 0; n < fileToLoad.length; n++)
        {
            if (!(fileToLoad[n].size > 0 && fileToLoad[n].name.slice(0,17) === "questionnaireQVT_" && fileToLoad[n].name.slice(-4) === ".csv"))
			{
				document.getElementById("Messages").innerHTML += "<br/>" + fileToLoad[n].name + " : fichier invalide !";
			}
            else
            {
                var fileReader = new FileReader();
                fileReader.readAsText(fileToLoad[n], "UTF-8");
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
							document.getElementById("Messages").innerHTML += "<br/>" + fileToLoad[compteur].name + " : incomplet, question A" + (i+1);
                            break;
                        }
                        else if (!(ligneB[i] === "pas d\'accord" || ligneB[i] === "plut\u00f4t pas d\'accord" || ligneB[i] === "plut\u00f4t d\'accord" || ligneB[i] === "d\'accord"))
                        {
                            validationfichier[i] = "B" + (i+1);
                            document.getElementById("Messages").innerHTML += "<br/>" + fileToLoad[compteur].name + " : incomplet, question B" + (i+1);
                        }
                        else if (!(ligneC[i] === "pas d\'accord" || ligneC[i] === "plut\u00f4t pas d\'accord" || ligneC[i] === "plut\u00f4t d\'accord" || ligneC[i] === "d\'accord"))
                        {
                            validationfichier[i] = "C" + (i+1);
                            document.getElementById("Messages").innerHTML += "<br/>" + fileToLoad[compteur].name + " : incomplet, question C" + (i+1);
                        }
                        else if (!(ligneD[i] === "pas d\'accord" || ligneD[i] === "plut\u00f4t pas d\'accord" || ligneD[i] === "plut\u00f4t d\'accord" || ligneD[i] === "d\'accord"))
                        {
                            validationfichier[i] = "D" + (i+1);
                            document.getElementById("Messages").innerHTML += "<br/>" + fileToLoad[compteur].name + " : incomplet, question D" + (i+1);
                        }
                        else
                        {
                            validationfichier[i] = "OK";
						}
                    }
					var found = validationfichier.findIndex(function(element) { return element != "OK";});
                    if (found === -1 || fileToLoad.length === 1)
                    {
                        effacer();
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
                            calculer();
                            var textepointK = positionpoint(document.getElementById('soutien').value, document.getElementById('exigences').value, document.getElementById('autonomie').value);
                            var textepointS = positionpoint(document.getElementById('reconnaissance').value, document.getElementById('exigences').value, document.getElementById('autonomie').value);
                            textepointK += '<br>' + fileToLoad[compteur].name;
                            textepointS += '<br>' + fileToLoad[compteur].name;
                            if (fileToLoad.length === 1)
                            {
								graphiques(document.getElementById('soutien').value, document.getElementById('reconnaissance').value, document.getElementById('exigences').value, document.getElementById('autonomie').value, false, textepointK, textepointS);
								if (flag === false)
								{
									recommandations(document.getElementById('soutien').value, document.getElementById('reconnaissance').value, document.getElementById('exigences').value, document.getElementById('autonomie').value);
									document.getElementById("Questionnaire").style.display = "inline";
									document.getElementById("Recommandations").scrollIntoView(true);
								}
                            }
                            else if (compteur < (fileToLoad.length - 1))
                            {
                                graphiques(document.getElementById('soutien').value, document.getElementById('reconnaissance').value, document.getElementById('exigences').value, document.getElementById('autonomie').value, false, textepointK, textepointS);
                                effacer();
                            }
                            else if (compteur === (fileToLoad.length - 1))
                            {
                                graphiques(document.getElementById('soutien').value, document.getElementById('reconnaissance').value, document.getElementById('exigences').value, document.getElementById('autonomie').value, true, textepointK, textepointS);
                                effacer();
                            }
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
							document.getElementById("Questionnaire").style.display = "inline";
                        }
					}
					compteur++;
                };
            }
		}
    }
}

function calculer()
{
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
	document.getElementById('exigences').value = exigences;
	document.getElementById('autonomie').value = autonomie;
	document.getElementById('soutien').value = soutien;
	document.getElementById('reconnaissance').value = reconnaissance;
}

function collectif()
{
	filesToLoad = document.getElementById("filesToLoadc").files;
	if (filesToLoad.length > 0)
	{
		if (filesToLoad.length === 1)
		{
			document.getElementById("fileToLoadc").value = document.getElementById("filesToLoadc").value;
			document.getElementById("filesToLoadc").value = "";
			loadMultipleFilesAsText();
		}
		if (filesToLoad.length > 1)
		{
			document.getElementById("Messages").innerHTML += "<br/>Chargement de " + filesToLoad.length + " fichiers.";
			document.getElementById("Messages").style.display = "inline";
			compteur = 0;
			
			for (var n = 0; n < filesToLoad.length; n++)
			{
				if (!(filesToLoad[n].size > 0 && filesToLoad[n].name.slice(0,17) === "questionnaireQVT_" && filesToLoad[n].name.slice(-4) === ".csv"))
				{
					document.getElementById("Messages").innerHTML += "<br/>" + filesToLoad[n].name + " : fichier invalide !";
				}
				else
				{
					soutien = [];
					reconnaissance = [];
					exigences = [];
					autonomie = [];
					texteK = [];
					texteS = [];
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
								document.getElementById("Messages").innerHTML += "<br/>" + filesToLoad[compteur].name + " : incomplet";
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
								document.getElementById("Messages").innerHTML += "<br/>" + filesToLoad[compteur].name + " : incomplet";
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
								document.getElementById("Messages").innerHTML += "<br/>" + filesToLoad[compteur].name + " : incomplet";
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
								document.getElementById("Messages").innerHTML += "<br/>" + filesToLoad[compteur].name + " : incomplet";
								compteur++;
								return; 
							}
						}
						soutien[compteur] = scoresoutien;
						reconnaissance[compteur] = scorereconnaissance;
						exigences[compteur] = scoreexigences;
						autonomie[compteur] = scoreautonomie;
						var textepointK = positionpoint(scoresoutien,scoreexigences,scoreautonomie);
						var textepointS = positionpoint(scorereconnaissance,scoreexigences,scoreautonomie);
						textepointK += '<br>' + filesToLoad[compteur].name;
						textepointS += '<br>' + filesToLoad[compteur].name;
						texteK[compteur] = textepointK;
						texteS[compteur] = textepointS;
						if (compteur === (filesToLoad.length - 1))
						{
							var updateK = { x: soutien, y: exigences, z: autonomie, type:'scatter3d', mode:'markers', hoverinfo:'x+y+z+text', text: texteK, marker:{symbol: 'diamond', size: 4, opacity: 0.5} };
							var updateS = { x: reconnaissance, y: exigences, z: autonomie, type:'scatter3d', mode:'markers', hoverinfo:'x+y+z+text', text: texteS, marker:{symbol: 'diamond', size: 4, opacity: 0.5}};
							var layout = {showlegend: false};
							var style = {showlegend: true};
							Plotly.addTraces(document.getElementById('karasek'), updateK);
							Plotly.addTraces(document.getElementById('siegrist'), updateS);
							Plotly.restyle(document.getElementById('karasek'),layout);
							Plotly.restyle(document.getElementById('karasek'),style,[0,1,2,3]);
							Plotly.restyle(document.getElementById('siegrist'),layout);
							Plotly.restyle(document.getElementById('siegrist'),style,[0,1,2,3]);
							document.getElementById("cubes").style.display = "grid";
							document.getElementById("MenuG").style.display = "block";
						}
						compteur++;
					};
				}
			}
		}
	}
}

function pleinecran()
{
	if (screenfull.enabled)
	{
		if (document.getElementById("cubes").style.display === "grid")
		{
			screenfull.request(document.getElementById('cubes'));
			document.getElementById("karasek").style.height = "100vh";
			document.getElementById("karasek").style.width = "50vw";
			document.getElementById("siegrist").style.height = "100vh";
			document.getElementById("siegrist").style.width = "50vw";
			screenfull.on('change', () => {
				if (!screenfull.isFullscreen)
				{
					document.getElementById("karasek").style.height = "50vh";
					document.getElementById("karasek").style.width = "50%";
					document.getElementById("siegrist").style.height = "50vh";
					document.getElementById("siegrist").style.width = "50%";
					screenfull.off('change', callback);
				}
			});
		}
	}
}

function recommandations(soutien, reconnaissance, exigences, autonomie)
{
	var textetable = "<p><h2><strong>Recommandations :</strong></h2></p><table id='tablerecos'><thead><tr><th><h3>Exigences</h3></th><th><h3>Autonomie</h3></th><th><h3>Soutien</h3></th><th><h3>Reconnaissance</h3></th></tr></thead><tbody>";
	if (exigences > 18)
	{
		textetable += "<td><ul><li><a href=\"https://lenumeriqueautrement.fr/fiches-qvt/organisation-du-travail-son-environnement-et-ses-espaces/teletravail-co-working-nomadisme-mobilite/\" target=\"_fiche\">T&eacute;l&eacute;travail, CoWorking, Nomadisme, Mobilit&eacute;</a></li><li><a href=\"https://lenumeriqueautrement.fr/fiches-qvt/organisation-du-travail-son-environnement-et-ses-espaces/charge-de-travail-et-intensification-du-travail/\" target=\"_fiche\">Charge de travail et intensification du travail</a></li><li><a href=\"https://lenumeriqueautrement.fr/fiches-qvt/temps-de-travail-et-deconnexion/forfait-jours-et-sante-au-travail/\" target=\"_fiche\">Forfait jours et sant&eacute; au travail</a></li><li><a href=\"https://lenumeriqueautrement.fr/fiches-qvt/management-et-formation/accompagnement-et-formation-a-lutilisation-des-outils-numeriques/\" target=\"_fiche\">Accompagnement et formation à l'utilisation des outils num&eacute;riques</a></li><li><a href=\"https://lenumeriqueautrement.fr/fiches-qvt/temps-de-travail-et-deconnexion/disponibilite-et-deconnexion/\" target=\"_fiche\">Disponibilit&eacute; et d&eacute;connexion</a></li><li><a href=\"https://lenumeriqueautrement.fr/fiches-qvt/organisation-du-travail-son-environnement-et-ses-espaces/reconfiguration-et-instabilite-des-organisations-de-travail/\" target=\"_fiche\">Reconfiguration et instabilit&eacute; des organisations de travail</a></li></ul></td>";		
	}
	else
	{
		textetable += "<td><p><strong>Note : &ecirc;tre attentif au bore-out lorsque les exigences sont trop faibles.</strong></p></td>";
	}
	if (autonomie < 19)
	{
		textetable += "<td><ul><li><a href=\"https://lenumeriqueautrement.fr/fiches-qvt/management-et-formation/tracabilite-autonomie-et-reconnaissance/\" target=\"_fiche\">Tra&ccedil;abilit&eacute;, autonomie et reconnaissance</a></li><li><a href=\"https://lenumeriqueautrement.fr/fiches-qvt/temps-de-travail-et-deconnexion/equilibre-vie-professionnelle-vie-personnelle/\" target=\"_fiche\">Equilibre vie professionnelle, vie personnelle</a></li><li><a href=\"https://lenumeriqueautrement.fr/fiches-qvt/temps-de-travail-et-deconnexion/outils-numeriques-et-temps-de-travail-masque/\" target=\"_fiche\">Outils num&eacute;riques et temps de travail masqu&eacute;</a></li><li><a href=\"https://lenumeriqueautrement.fr/fiches-qvt/temps-de-travail-et-deconnexion/forfait-jours-et-sante-au-travail/\" target=\"_fiche\">Forfait jours et sant&eacute; au travail</a></li><li><a href=\"https://lenumeriqueautrement.fr/blog/quelle-est-la-realite-du-temps-de-travail-des-cadres/\" target=\"_fiche\">R&eacute;alit&eacute; du temps de travail des cadres</a></li><li><a href=\"https://lenumeriqueautrement.fr/les-outils/le-guide-du-droit-a-la-deconnexion/\" target=\"_fiche\">Guide du droit à la d&eacute;connexion</a></li><li><a href=\"https://lenumeriqueautrement.fr/les-outils/pointeuse-perso-lappli-smartphone-pour-faire-respecter-votre-temps-de-travail/\" target=\"_fiche\">Application Pointeuse Perso</a></li></ul></td>";	
	}
	else
	{
		textetable += "<td></td>";
	}
	if (soutien < 19)
	{
		textetable += "<td><ul><li><a href=\"https://lenumeriqueautrement.fr/fiches-qvt/management-et-formation/management-et-soutien/\" target=\"_fiche\">Management et soutien</a></li><li><a href=\"https://lenumeriqueautrement.fr/fiches-qvt/droit-dexpression/droit-dexpression-latitude-decisionnelle-et-conduite-du-changement/\" target=\"_fiche\">Droit d'expression, latitude d&eacute;cisionnelle et conduite du changement</a></li><li><a href=\"https://lenumeriqueautrement.fr/fiches-qvt/management-et-formation/accompagnement-et-formation-a-lutilisation-des-outils-numeriques/\" target=\"_fiche\">Accompagnement et formation &agrave; l'utilisation des outils num&eacute;riques</a></li><li><a href=\"https://lenumeriqueautrement.fr/fiches-qvt/organisation-du-travail-son-environnement-et-ses-espaces/securite-des-donnees-et-des-utilisateurs/\" target=\"_fiche\">S&eacute;curit&eacute; des donn&eacute;es et des utilisateurs</a></li></ul></td>";
	}
	else
	{
		textetable += "<td></td>";
	}
	if (reconnaissance < 19)
	{
		textetable += "<td><ul><li><a href=\"https://lenumeriqueautrement.fr/fiches-qvt/management-et-formation/tracabilite-autonomie-et-reconnaissance/\" target=\"_fiche\">Tra&ccedil;abilit&eacute;, autonomie et reconnaissance</a></li></ul></td>";
	}
	else
	{
		textetable += "<td></td>";
	}
	document.getElementById("Recommandations").innerHTML = textetable + "</tr></tbody></table><p></p><p><h2>Graphiques :</h2></p><p></p>";
	document.getElementById("Questionnaire").style.display = "inline";
	document.getElementById("Recommandations").style.display = "inline";
	document.getElementById("MenuP").style.display = "block";
	document.getElementById("Recommandations").scrollIntoView(true);
}

function menu(item)
{
	switch (item)
	{
		case 'apropos':
			document.getElementById('Apropos').style.display='inline';
			document.getElementById('Aide').style.display='none';
			document.getElementById('Questionnaire').style.display='none';
			document.getElementById('AnalyseI').style.display='none';
			document.getElementById('AnalyseG').style.display='none';
			document.getElementById('AnalyseC').style.display='none';
			document.getElementById('MenuQ').style.display='none';
			document.getElementById('MenuG').style.display='none';
			document.getElementById('MenuP').style.display='none';
			document.getElementById('cubes').style.display='none';
			document.getElementById('Messages').style.display='none';
			document.getElementById('Recommandations').style.display='none';
			break;
		case 'aide':
			document.getElementById('Apropos').style.display='none';
			document.getElementById('Aide').style.display='inline';
			document.getElementById('Questionnaire').style.display='none';
			document.getElementById('AnalyseI').style.display='none';
			document.getElementById('AnalyseG').style.display='none';
			document.getElementById('AnalyseC').style.display='none';
			document.getElementById('MenuQ').style.display='none';
			document.getElementById('MenuG').style.display='none';
			document.getElementById('MenuP').style.display='none';
			document.getElementById('cubes').style.display='none';
			document.getElementById('Messages').style.display='none';
			document.getElementById('Recommandations').style.display='none';
			break;
		case 'questionnaire':
			effacer();
			document.getElementById('Apropos').style.display='none';
			document.getElementById('Aide').style.display='none';
			document.getElementById('Questionnaire').style.display='inline';
			document.getElementById('AnalyseI').style.display='none';
			document.getElementById('AnalyseG').style.display='none';
			document.getElementById('AnalyseC').style.display='none';
			document.getElementById('MenuQ').style.display='block';
			document.getElementById('MenuG').style.display='none';
			document.getElementById('MenuP').style.display='none';
			document.getElementById('cubes').style.display='none';
			document.getElementById('Messages').style.display='none';
			document.getElementById('Recommandations').style.display='none';
			break;
		case 'individu':
			document.getElementById("fileToLoad").value = "";
			document.getElementById('Apropos').style.display='none';
			document.getElementById('Aide').style.display='none';
			document.getElementById('Questionnaire').style.display='none';
			document.getElementById('AnalyseI').style.display='inline';
			document.getElementById('AnalyseG').style.display='none';
			document.getElementById('AnalyseC').style.display='none';
			document.getElementById('MenuQ').style.display='none';
			document.getElementById('MenuG').style.display='none';
			document.getElementById('MenuP').style.display='none';
			document.getElementById('cubes').style.display='none';
			document.getElementById('Messages').style.display='none';
			document.getElementById('Recommandations').style.display='none';
			break;
		case 'groupe':
			document.getElementById("filesToLoad").value = "";
			document.getElementById('Apropos').style.display='none';
			document.getElementById('Aide').style.display='none';
			document.getElementById('Questionnaire').style.display='none';
			document.getElementById('AnalyseI').style.display='none';
			document.getElementById('AnalyseG').style.display='inline';
			document.getElementById('AnalyseC').style.display='none';
			document.getElementById('MenuQ').style.display='none';
			document.getElementById('MenuG').style.display='none';
			document.getElementById('MenuP').style.display='none';
			document.getElementById('cubes').style.display='none';
			document.getElementById('Messages').style.display='none';
			document.getElementById('Recommandations').style.display='none';
			break;
		case 'collectif':
			document.getElementById("filesToLoadc").value = "";
			document.getElementById('Apropos').style.display='none';
			document.getElementById('Aide').style.display='none';
			document.getElementById('Questionnaire').style.display='none';
			document.getElementById('AnalyseI').style.display='none';
			document.getElementById('AnalyseG').style.display='none';
			document.getElementById('AnalyseC').style.display='inline';
			document.getElementById('MenuQ').style.display='none';
			document.getElementById('MenuG').style.display='none';
			document.getElementById('MenuP').style.display='none';
			document.getElementById('cubes').style.display='none';
			document.getElementById('Messages').style.display='none';
			document.getElementById('Recommandations').style.display='none';
			break;
		case 'graphiques':
			document.getElementById('Apropos').style.display='none';
			document.getElementById('Aide').style.display='none';
			document.getElementById('Questionnaire').style.display='none';
			document.getElementById('AnalyseI').style.display='none';
			document.getElementById('AnalyseG').style.display='none';
			document.getElementById('AnalyseC').style.display='none';
			document.getElementById('MenuQ').style.display='none';
			document.getElementById('MenuG').style.display='block';
			document.getElementById('MenuP').style.display='none';
			document.getElementById('cubes').style.display='grid';
			document.getElementById('Messages').style.display='none';
			document.getElementById('Recommandations').style.display='none';
			break;
		default:
			document.getElementById("fileToLoad").value = "";
			document.getElementById("filesToLoad").value = "";
			document.getElementById("filesToLoadc").value = "";
			document.getElementById('Apropos').style.display='inline';
			document.getElementById('Aide').style.display='none';
			document.getElementById('Questionnaire').style.display='none';
			document.getElementById('AnalyseI').style.display='none';
			document.getElementById('AnalyseG').style.display='none';
			document.getElementById('AnalyseC').style.display='none';
			document.getElementById('MenuQ').style.display='none';
			document.getElementById('MenuG').style.display='none';
			document.getElementById('MenuP').style.display='none';
			document.getElementById('cubes').style.display='none';
			document.getElementById('Messages').style.display='none';
			document.getElementById('Recommandations').style.display='none';
	}
}

function imprime()
{
	document.getElementById("Impression").innerHTML = document.getElementById("Questionnaire").innerHTML + document.getElementById("Recommandations").innerHTML + document.getElementById("cubes").innerHTML;
	console.log(document.getElementById("Impression").innerHTML);
	print();
	console.log(document.getElementById("Impression").innerHTML);
}