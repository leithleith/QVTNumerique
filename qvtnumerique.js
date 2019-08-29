function prechargement()
{
	Plotly.setPlotConfig({locale: 'fr'});
	var dataK = [{ x: [28, 19, 19, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 28, 28, 36, 28, 28, 28, 28, 28, 28, 36, 28, 28, 36, 28, 28, 19, 19, 19, 19, 19, 19, 19, 19, 28, 28, 36, 28, 28, 36, 28, 28, 19, 28, 28, 28, 28, 28, 36, 28, 28, 28, 28, 19, 28, 28, 28, 28], y: [0, 0, 0, 0, 0, 9, 9, 18, 18, 27, 27, 0, 0, 0, 9, 9, 9, 0, 9, 9, 0, 9, 9, 9, 18, 18, 18, 9, 9, 0, 9, 9, 18, 18, 0, 18, 18, 27, 27, 27, 27, 27, 27, 18, 18, 18, 18, 18, 18, 18, 18, 18, 9, 9, 9, 9, 9, 9, 0, 0], z: [19, 19, 36, 36, 10, 10, 19, 19, 28, 28, 36, 36, 10, 10, 10, 10, 10, 10, 10, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 28, 28, 36, 36, 36, 36, 36, 36, 36, 28, 28, 28, 28, 28, 28, 19, 28, 36, 28, 28, 28, 28, 19, 28, 28, 28, 10, 10, 19], type:'scatter3d', mode:'lines', line: {color: 'green', width:2}, hoverinfo:"none", name: 'Travail Protecteur' }, { x: [9, 9, 9, 9, 9, 9, 9, 18, 18, 9, 18, 18, 9, 18, 18, 18, 18, 0, 18, 18, 9, 9, 9, 0, 9, 9, 0, 9, 9, 0, 9, 9, 0, 9, 9, 0, 9, 9, 9, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9, 0, 0, 0, 0, 9, 9, 9, 0, 9, 9, 9, 9, 9, 9, 18, 18, 9, 9, 9, 18, 18], y: [36, 19, 28, 28, 28, 19, 28, 28, 28, 28, 28, 36, 36, 36, 36, 19, 36, 36, 36, 36, 36, 36, 28, 28, 28, 28, 28, 28, 19, 19, 19, 19, 19, 19, 10, 10, 10, 10, 0, 10, 10, 0, 10, 10, 19, 19, 28, 28, 36, 36, 36, 36, 0, 0, 0, 0, 0, 0, 0, 19, 19, 10, 19, 19, 19, 19, 19, 19, 19, 19, 28], z: [18, 18, 18, 27, 9, 9, 9, 9, 18, 18, 18, 18, 18, 18, 0, 0, 0, 0, 0, 18, 18, 36, 36, 36, 36, 27, 27, 27, 27, 27, 27, 18, 18, 18, 18, 18, 18, 9, 9, 9, 9, 9, 9, 18, 18, 27, 27, 36, 36, 36, 36, 0, 0, 9, 9, 0, 0, 0, 0, 0, 9, 9, 9, 0, 0, 9, 9, 18, 9, 9, 9], type:'scatter3d', mode:'lines', line: {color: 'red', width:2}, hoverinfo:"none", name: 'Risque pour la Sant\u00e9'}];
	var dataS = [{ x: [28, 19, 19, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 28, 28, 36, 28, 28, 28, 28, 28, 28, 36, 28, 28, 36, 28, 28, 19, 19, 19, 19, 19, 19, 19, 19, 28, 28, 36, 28, 28, 36, 28, 28, 19, 28, 28, 28, 28, 28, 36, 28, 28, 28, 28, 19, 28, 28, 28, 28], y: [0, 0, 0, 0, 0, 9, 9, 18, 18, 27, 27, 0, 0, 0, 9, 9, 9, 0, 9, 9, 0, 9, 9, 9, 18, 18, 18, 9, 9, 0, 9, 9, 18, 18, 0, 18, 18, 27, 27, 27, 27, 27, 27, 18, 18, 18, 18, 18, 18, 18, 18, 18, 9, 9, 9, 9, 9, 9, 0, 0], z: [19, 19, 36, 36, 10, 10, 19, 19, 28, 28, 36, 36, 10, 10, 10, 10, 10, 10, 10, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 28, 28, 36, 36, 36, 36, 36, 36, 36, 28, 28, 28, 28, 28, 28, 19, 28, 36, 28, 28, 28, 28, 19, 28, 28, 28, 10, 10, 19], type:'scatter3d', mode:'lines', line: {color: 'green', width:2}, hoverinfo:"none", name: 'Travail Protecteur' }, { x: [9, 9, 9, 9, 9, 9, 9, 18, 18, 9, 18, 18, 9, 18, 18, 18, 18, 0, 18, 18, 9, 9, 9, 0, 9, 9, 0, 9, 9, 0, 9, 9, 0, 9, 9, 0, 9, 9, 9, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9, 0, 0, 0, 0, 9, 9, 9, 0, 9, 9, 9, 9, 9, 9, 18, 18, 9, 9, 9, 18, 18], y: [36, 19, 28, 28, 28, 19, 28, 28, 28, 28, 28, 36, 36, 36, 36, 19, 36, 36, 36, 36, 36, 36, 28, 28, 28, 28, 28, 28, 19, 19, 19, 19, 19, 19, 10, 10, 10, 10, 0, 10, 10, 0, 10, 10, 19, 19, 28, 28, 36, 36, 36, 36, 0, 0, 0, 0, 0, 0, 0, 19, 19, 10, 19, 19, 19, 19, 19, 19, 19, 19, 28], z: [18, 18, 18, 27, 9, 9, 9, 9, 18, 18, 18, 18, 18, 18, 0, 0, 0, 0, 0, 18, 18, 36, 36, 36, 36, 27, 27, 27, 27, 27, 27, 18, 18, 18, 18, 18, 18, 9, 9, 9, 9, 9, 9, 18, 18, 27, 27, 36, 36, 36, 36, 0, 0, 9, 9, 0, 0, 0, 0, 0, 9, 9, 9, 0, 0, 9, 9, 18, 9, 9, 9], type:'scatter3d', mode:'lines', line: {color: 'red', width:2}, hoverinfo:"none", name: 'Risque pour la Sant\u00e9'}];
	var layoutkarasek = {autosize: true, dragmode: 'turntable', showlegend: true, legend:{x: 0, y: 0}, scene: {xaxis:{range: [0, 36], title: 'Soutien', tickmode: 'linear', dtick: 9, mirror: true, nticks: 9, type: 'linear', autorange: false, showline: true}, yaxis:{range: [0, 36], title: 'Exigences', tickmode: 'linear', dtick: 9, mirror: true, nticks: 9, type: 'linear', autorange: false, showline: true}, zaxis:{range: [0, 36], title: 'Autonomie',  tickmode: 'linear', dtick: 9, mirror: true, nticks: 9, type: 'linear', autorange: false, showline: true}, camera: {up: {y: 0, x: 0, z: 1}, center: {y: 0, x: 0, z: -0.5}, eye: {y: 2.5, x: 1.5, z: 1}}}, margin:{l: 0, r: 0, b: 0, t: 0, pad: 1}};
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
function graphiques(soutien, reconnaissance, exigences, autonomie, flag, textepointK, textepointS, couleurpointK, couleurpointS)
{
	if ((document.getElementById("karasek").data === undefined) || (document.getElementById("siegrist").data === undefined))
	{
		document.getElementById("Messages").innerHTML += "<br/>Initialisation de l'environnement graphique...";
		prechargement();
	}
    var updateK = { x:[soutien], y:[exigences], z:[autonomie], type:'scatter3d', hoverinfo:'x+y+z+text', text: textepointK, hoverlabel:{bgcolor: couleurpointK}, marker:{color: couleurpointK}};
	var updateS = { x:[reconnaissance], y:[exigences], z:[autonomie], type:'scatter3d', hoverinfo:'x+y+z+text', text: textepointS, hoverlabel:{bgcolor: couleurpointS}, marker:{color: couleurpointS}};
	var layout = {showlegend: false};
	var style = {showlegend: true};
	Plotly.addTraces(document.getElementById('karasek'), updateK);
	Plotly.addTraces(document.getElementById('siegrist'), updateS);
	Plotly.restyle(document.getElementById('karasek'),layout);
	Plotly.restyle(document.getElementById('karasek'),style,[0,1]);
	Plotly.restyle(document.getElementById('siegrist'),layout);
    Plotly.restyle(document.getElementById('siegrist'),style,[0,1]);
    if (flag === true)
	{
		document.getElementById('siegrist').on('plotly_afterplot', function(){document.getElementById("filesToLoad").value = "";});
	}
	changeclass("boutonQ",true);
	changeclass("boutonG",false);
	if (screen.width < 800)
	{
		document.getElementById('cubes').style.display = "block";
	}
	else
	{
		document.getElementById('cubes').style.display = "grid";
	}
}
function purge()
{
    if(document.getElementById('karasek').data.length > 2 && document.getElementById('siegrist').data.length > 2)
    {
        Plotly.deleteTraces(document.getElementById('karasek'), -1);
        Plotly.deleteTraces(document.getElementById('siegrist'), -1);
    }
}
function purgetotale()
{
	if ((document.getElementById("karasek").data != undefined) && (document.getElementById("siegrist").data != undefined))
	{
		if((document.getElementById('karasek').data.length > 2) && (document.getElementById('siegrist').data.length > 2))
		{
			Plotly.purge(document.getElementById('karasek'));
			Plotly.purge(document.getElementById('siegrist'));
			prechargement();
			document.getElementById("cubes").style.display = "grid";
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
	var positionK = positionpoint(document.getElementById('soutien').value, document.getElementById('exigences').value,document.getElementById('autonomie').value);
	var positionS = positionpoint(document.getElementById('reconnaissance').value, document.getElementById('exigences').value,document.getElementById('autonomie').value);
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
	textepointK += "<br/>questionnaire saisi directement";
	textepointS += "<br/>questionnaire saisi directement";
	purgetotale();
	graphiques(document.getElementById('soutien').value, document.getElementById('reconnaissance').value, document.getElementById('exigences').value, document.getElementById('autonomie').value, false, textepointK, textepointS, couleurpointK, couleurpointS);
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
                            var positionK = positionpoint(document.getElementById('soutien').value, document.getElementById('exigences').value, document.getElementById('autonomie').value);
							var positionS = positionpoint(document.getElementById('reconnaissance').value, document.getElementById('exigences').value, document.getElementById('autonomie').value);
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
                            textepointK += '<br>' + fileToLoad[compteur].name;
                            textepointS += '<br>' + fileToLoad[compteur].name;
							if (fileToLoad.length === 1)
                            {
								if (flag === false)
								{
									purgetotale();
									graphiques(document.getElementById('soutien').value, document.getElementById('reconnaissance').value, document.getElementById('exigences').value, document.getElementById('autonomie').value, false, textepointK, textepointS, couleurpointK, couleurpointS);
									recommandations(document.getElementById('soutien').value, document.getElementById('reconnaissance').value, document.getElementById('exigences').value, document.getElementById('autonomie').value);
									document.getElementById("Questionnaire").style.display = "inline";
									document.getElementById("Recommandations").scrollIntoView(true);
								}
								else if (flag === true)
								{
									graphiques(document.getElementById('soutien').value, document.getElementById('reconnaissance').value, document.getElementById('exigences').value, document.getElementById('autonomie').value, false, textepointK, textepointS, couleurpointK, couleurpointS);
								}
                            }
                            else if (compteur < (fileToLoad.length - 1))
                            {
                                graphiques(document.getElementById('soutien').value, document.getElementById('reconnaissance').value, document.getElementById('exigences').value, document.getElementById('autonomie').value, false, textepointK, textepointS, couleurpointK, couleurpointS);
                                effacer();
                            }
                            else if (compteur === (fileToLoad.length - 1))
                            {
                                graphiques(document.getElementById('soutien').value, document.getElementById('reconnaissance').value, document.getElementById('exigences').value, document.getElementById('autonomie').value, true, textepointK, textepointS, couleurpointK, couleurpointS);
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
					texteK[compteur] = textepointK;
					texteS[compteur] = textepointS;
					couleurK[compteur] = couleurpointK;
					couleurS[compteur] = couleurpointS;
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
						document.getElementById("Recommandations").innerHTML = "<p><h2><strong>Statistiques :</strong></h2></p><table class='tablestats'><thead><tr><th></th><th><h3>Exigences</h3></th><th><h3>Autonomie</h3></th><th><h3>Soutien</h3></th><th><h3>Reconnaissance</h3></th></tr></thead><tbody><tr><td><h3>Moyenne</h3></td><td>" + moyexigences + "</td><td>" + moyautonomie + "</td><td>" + moysoutien + "</td><td>" + moyreconnaissance + "</td></tr><tr><td><h3>M&eacute;diane</h3></td><td>" + medexigences + "</td><td>" + medautonomie + "</td><td>" + medsoutien + "</td><td>" + medreconnaissance + "</td></tr></tr></tbody></table><p></p>";
						document.getElementById("Recommandations").innerHTML += "<table class='tablestats'><thead><tr><th></th><th><h3>Zone verte</h3></th><th><h3>Zone jaune</h3></th><th><h3>Zone orange</h3></th><th><h3>Zone rouge</h3></th></tr></thead><tbody><tr><td><h3>Soutien</h3></td><td>" + vertk + "</td><td>" + jaunek + "</td><td>" + orangek + "</td><td>" + rougek + "</tr><tr><td><h3>Reconnaissance</h3></td><td>" + verts + "</td><td>" + jaunes + "</td><td>" + oranges + "</td><td>" + rouges + "</tr></tr></tbody></table><p></p><p><h2>Graphiques :</h2></p><p></p>";
						if ((document.getElementById("karasek").data === undefined) || (document.getElementById("siegrist").data === undefined))
						{
							document.getElementById("Messages").innerHTML += "<br/>Initialisation de l'environnement graphique...";
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
						document.getElementById("cubes").style.display = "grid";
						document.getElementById("Recommandations").style.display = "inline";
						document.getElementById("Recommandations").scrollIntoView(true);
						changeclass("boutonQ",true);
						changeclass("boutonG",false);
					}
					compteur++;
				};				
			}
		}
	}
}
function pleinecran()
{
	document.getElementById("cubes").requestFullscreen();
	document.getElementById("cubes").addEventListener('fullscreenchange', (event) => {
		if (!document.fullscreenElement)
		{
			document.getElementById("cubes").style.width = "100%";
			var cote = "" + (document.getElementById("cubes").offsetWidth / 2) + "px";
			document.getElementById("karasek").style.width = cote;
			document.getElementById("karasek").style.height = cote;
			document.getElementById("siegrist").style.width = cote;
			document.getElementById("siegrist").style.height = cote;
		}
	});
}
function recommandations(soutien, reconnaissance, exigences, autonomie)
{
	var fexigences = false;
	var fautonomie = false;
	var fsoutien = false;
	var freconnaissance = false;
	var textetable = "<p><h2><strong>Recommandations :</strong></h2></p><table id='tablerecos'><thead><tr><th id='texigences'><h3>Exigences</h3></th><th id='tautonomie'><h3>Autonomie</h3></th><th id='tsoutien'><h3>Soutien</h3></th><th id='treconnaissance'><h3>Reconnaissance</h3></th></tr></thead><tbody><tr>";
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
		textetable += "<td><ul><li><a href=\"https://lenumeriqueautrement.fr/fiches-qvt/organisation-du-travail-son-environnement-et-ses-espaces/teletravail-co-working-nomadisme-mobilite/\" target=\"_fiche\">T&eacute;l&eacute;travail, CoWorking, Nomadisme, Mobilit&eacute;</a></li><li><a href=\"https://lenumeriqueautrement.fr/fiches-qvt/organisation-du-travail-son-environnement-et-ses-espaces/charge-de-travail-et-intensification-du-travail/\" target=\"_fiche\">Charge de travail et intensification du travail</a></li><li><a href=\"https://lenumeriqueautrement.fr/fiches-qvt/temps-de-travail-et-deconnexion/forfait-jours-et-sante-au-travail/\" target=\"_fiche\">Forfait jours et sant&eacute; au travail</a></li><li><a href=\"https://lenumeriqueautrement.fr/fiches-qvt/management-et-formation/accompagnement-et-formation-a-lutilisation-des-outils-numeriques/\" target=\"_fiche\">Accompagnement et formation à l'utilisation des outils num&eacute;riques</a></li><li><a href=\"https://lenumeriqueautrement.fr/fiches-qvt/temps-de-travail-et-deconnexion/disponibilite-et-deconnexion/\" target=\"_fiche\">Disponibilit&eacute; et d&eacute;connexion</a></li><li><a href=\"https://lenumeriqueautrement.fr/fiches-qvt/organisation-du-travail-son-environnement-et-ses-espaces/reconfiguration-et-instabilite-des-organisations-de-travail/\" target=\"_fiche\">Reconfiguration et instabilit&eacute; des organisations de travail</a></li></ul></td>";
	}
		else if ((exigences < 10) && (autonomie > 27))
			{
				textetable += "<td><p><strong>Note : &ecirc;tre attentif au bore-out lorsque les exigences sont faibles et l'autonomie &eacute;lev&eacute;e.</strong></p></td>";
			}
				else
				{
					textetable += "<td></td>";
				}
	if (fautonomie === true)
	{
		textetable += "<td><ul><li><a href=\"https://lenumeriqueautrement.fr/fiches-qvt/management-et-formation/tracabilite-autonomie-et-reconnaissance/\" target=\"_fiche\">Tra&ccedil;abilit&eacute;, autonomie et reconnaissance</a></li><li><a href=\"https://lenumeriqueautrement.fr/fiches-qvt/temps-de-travail-et-deconnexion/equilibre-vie-professionnelle-vie-personnelle/\" target=\"_fiche\">Equilibre vie professionnelle, vie personnelle</a></li><li><a href=\"https://lenumeriqueautrement.fr/fiches-qvt/temps-de-travail-et-deconnexion/outils-numeriques-et-temps-de-travail-masque/\" target=\"_fiche\">Outils num&eacute;riques et temps de travail masqu&eacute;</a></li><li><a href=\"https://lenumeriqueautrement.fr/fiches-qvt/temps-de-travail-et-deconnexion/forfait-jours-et-sante-au-travail/\" target=\"_fiche\">Forfait jours et sant&eacute; au travail</a></li><li><a href=\"https://lenumeriqueautrement.fr/blog/quelle-est-la-realite-du-temps-de-travail-des-cadres/\" target=\"_fiche\">R&eacute;alit&eacute; du temps de travail des cadres</a></li><li><a href=\"https://lenumeriqueautrement.fr/les-outils/le-guide-du-droit-a-la-deconnexion/\" target=\"_fiche\">Guide du droit à la d&eacute;connexion</a></li><li><a href=\"https://qvtnumerique.azureedge.net/GuideManagement-Fiche2-UGICT-CGT.pdf\" target=\"_fiche\">Fiche 2 du Guide du Management &agrave; l'&egrave;re du num&eacute;rique</a></li></ul></td>";
	}
		else
		{
			textetable += "<td></td>";
		}
	if (fsoutien === true)
	{
		textetable += "<td><ul><li><a href=\"https://lenumeriqueautrement.fr/fiches-qvt/management-et-formation/management-et-soutien/\" target=\"_fiche\">Management et soutien</a></li><li><a href=\"https://lenumeriqueautrement.fr/fiches-qvt/droit-dexpression/droit-dexpression-latitude-decisionnelle-et-conduite-du-changement/\" target=\"_fiche\">Droit d'expression, latitude d&eacute;cisionnelle et conduite du changement</a></li><li><a href=\"https://lenumeriqueautrement.fr/fiches-qvt/management-et-formation/accompagnement-et-formation-a-lutilisation-des-outils-numeriques/\" target=\"_fiche\">Accompagnement et formation &agrave; l'utilisation des outils num&eacute;riques</a></li><li><a href=\"https://lenumeriqueautrement.fr/fiches-qvt/organisation-du-travail-son-environnement-et-ses-espaces/securite-des-donnees-et-des-utilisateurs/\" target=\"_fiche\">S&eacute;curit&eacute; des donn&eacute;es et des utilisateurs</a></li><li><a href=\"https://qvtnumerique.azureedge.net/GuideManagement-Fiche1-UGICT-CGT.pdf\" target=\"_fiche\">Fiche 1 du Guide du Management &agrave; l'&egrave;re du num&eacute;rique</a></li><li><a href=\"https://qvtnumerique.azureedge.net/GuideManagement-Fiche3-UGICT-CGT.pdf\" target=\"_fiche\">Fiche 3 du Guide du Management &agrave; l'&egrave;re du num&eacute;rique</a></li></ul></td>";
	}
		else
		{
			textetable += "<td></td>";
		}
	if (freconnaissance === true)
	{
		textetable += "<td><ul><li><a href=\"https://lenumeriqueautrement.fr/fiches-qvt/management-et-formation/tracabilite-autonomie-et-reconnaissance/\" target=\"_fiche\">Tra&ccedil;abilit&eacute;, autonomie et reconnaissance</a></li><li><a href=\"https://qvtnumerique.azureedge.net/GuideManagement-Fiche4-UGICT-CGT.pdf\" target=\"_fiche\">Fiche 4 du Guide du Management &agrave; l'&egrave;re du num&eacute;rique</a></li><li><a href=\"https://qvtnumerique.azureedge.net/GuideManagement-Fiche5-UGICT-CGT.pdf\" target=\"_fiche\">Fiche 5 du Guide du Management &agrave; l'&egrave;re du num&eacute;rique</a></li></ul></td>";
	}
		else
		{
			textetable += "<td></td>";
		}
	document.getElementById("Recommandations").innerHTML = textetable + "</tr></tbody></table><p></p><p><h2>Graphiques :</h2></p><p></p>";
	if (exigences < 10)
	{
		document.getElementById('texigences').style.backgroundColor = 'green';
	}
	else if (exigences < 19)
		{
			document.getElementById('texigences').style.backgroundColor = 'yellow';
		}
		else if (exigences < 28)
		{
			document.getElementById('texigences').style.backgroundColor = 'orange';
		}
		else
		{
			document.getElementById('texigences').style.backgroundColor = 'red';
		}
	if (autonomie < 10)
	{
		document.getElementById('tautonomie').style.backgroundColor = 'red';
	}
	else if (autonomie < 19)
		{
			document.getElementById('tautonomie').style.backgroundColor = 'orange';
		}
		else if (autonomie < 28)
		{
			document.getElementById('tautonomie').style.backgroundColor = 'yellow';
		}
		else
		{
			document.getElementById('tautonomie').style.backgroundColor = 'green';
		}
	if (soutien < 10)
	{
		document.getElementById('tsoutien').style.backgroundColor = 'red';
	}
	else if (soutien < 19)
		{
			document.getElementById('tsoutien').style.backgroundColor = 'orange';
		}
		else if (soutien < 28)
		{
			document.getElementById('tsoutien').style.backgroundColor = 'yellow';
		}
		else
		{
			document.getElementById('tsoutien').style.backgroundColor = 'green';
		}
	if (reconnaissance < 10)
	{
		document.getElementById('treconnaissance').style.backgroundColor = 'red';
	}
	else if (reconnaissance < 19)
		{
			document.getElementById('treconnaissance').style.backgroundColor = 'orange';
		}
		else if (reconnaissance < 28)
		{
			document.getElementById('treconnaissance').style.backgroundColor = 'yellow';
		}
		else
		{
			document.getElementById('treconnaissance').style.backgroundColor = 'green';
		}
	document.getElementById("Questionnaire").style.display = "inline";
	document.getElementById("Recommandations").style.display = "inline";
	changeclass("boutonQ",true);
	changeclass("boutonG",false);
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
			document.getElementById('cubes').style.display='none';
			document.getElementById('Messages').style.display='none';
			document.getElementById('Recommandations').style.display='none';
			changeclass("boutonQ",true);
			break;
		case 'aide':
			document.getElementById('Apropos').style.display='none';
			document.getElementById('Aide').style.display='inline';
			document.getElementById('Questionnaire').style.display='none';
			document.getElementById('AnalyseI').style.display='none';
			document.getElementById('AnalyseG').style.display='none';
			document.getElementById('AnalyseC').style.display='none';
			document.getElementById('cubes').style.display='none';
			document.getElementById('Messages').style.display='none';
			document.getElementById('Recommandations').style.display='none';
			changeclass("boutonQ",true);
			break;
		case 'questionnaire':
			effacer();
			document.getElementById('Apropos').style.display='none';
			document.getElementById('Aide').style.display='none';
			document.getElementById('Questionnaire').style.display='inline';
			document.getElementById('AnalyseI').style.display='none';
			document.getElementById('AnalyseG').style.display='none';
			document.getElementById('AnalyseC').style.display='none';
			document.getElementById('cubes').style.display='none';
			document.getElementById('Messages').style.display='none';
			document.getElementById('Recommandations').style.display='none';
			changeclass("boutonQ",false);
			break;
		case 'individu':
			document.getElementById("fileToLoad").value = "";
			document.getElementById('Apropos').style.display='none';
			document.getElementById('Aide').style.display='none';
			document.getElementById('Questionnaire').style.display='none';
			document.getElementById('AnalyseI').style.display='inline';
			document.getElementById('AnalyseG').style.display='none';
			document.getElementById('AnalyseC').style.display='none';
			document.getElementById('cubes').style.display='none';
			document.getElementById('Messages').style.display='none';
			document.getElementById('Recommandations').style.display='none';
			changeclass("boutonQ",true);
			break;
		case 'groupe':
			document.getElementById("filesToLoad").value = "";
			document.getElementById('Apropos').style.display='none';
			document.getElementById('Aide').style.display='none';
			document.getElementById('Questionnaire').style.display='none';
			document.getElementById('AnalyseI').style.display='none';
			document.getElementById('AnalyseG').style.display='inline';
			document.getElementById('AnalyseC').style.display='none';
			document.getElementById('cubes').style.display='none';
			document.getElementById('Messages').style.display='none';
			document.getElementById('Recommandations').style.display='none';
			changeclass("boutonQ",true);
			break;
		case 'collectif':
			document.getElementById("filesToLoadc").value = "";
			document.getElementById('Apropos').style.display='none';
			document.getElementById('Aide').style.display='none';
			document.getElementById('Questionnaire').style.display='none';
			document.getElementById('AnalyseI').style.display='none';
			document.getElementById('AnalyseG').style.display='none';
			document.getElementById('AnalyseC').style.display='inline';
			document.getElementById('cubes').style.display='none';
			document.getElementById('Messages').style.display='none';
			document.getElementById('Recommandations').style.display='none';
			changeclass("boutonQ",true);
			break;
		case 'graphiques':
			if (document.getElementById('cubes').style.display==='none')
			{
				document.getElementById('Apropos').style.display='none';
				document.getElementById('Aide').style.display='none';
				document.getElementById('Questionnaire').style.display='none';
				document.getElementById('AnalyseI').style.display='none';
				document.getElementById('AnalyseG').style.display='none';
				document.getElementById('AnalyseC').style.display='none';
				document.getElementById('cubes').style.display='grid';
				document.getElementById('Messages').style.display='none';
				document.getElementById('Recommandations').style.display='none';
				changeclass("boutonQ",true);
			};
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
			document.getElementById('cubes').style.display='none';
			document.getElementById('Messages').style.display='none';
			document.getElementById('Recommandations').style.display='none';
			changeclass("boutonQ",true);
			changeclass("boutonG",true);
	}
}
function changeclass(classe,flag) {
    elements = document.getElementsByClassName(classe);
    for (var i = 0; i < elements.length; i++) {
		elements[i].disabled = flag;
	}
}