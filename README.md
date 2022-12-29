# QVTNumerique

Un outil <a href="https://www.ugict.cgt.fr/" target="_ugict">UGICT-CGT</a>, pour l'<a href="https://www.anact.fr/" target="_anact">ANACT</a> et le <a href="https://www.anact.fr/lanact-lance-son-1er-appel-projet-fact-sur-qualite-de-vie-au-travail-et-numerique" target="_fact">FACT</a>, dans le cadre de : <a href="https://lenumeriqueautrement.fr/" taregt="_lna">Construire le Numérique Autrement</a>.

Respectueux de la vie priv&eacute;e et de l'anonymat.<br/>
Open source sous licence MIT.<br/>
Biblioth&egrave;que open source sous licence MIT : <a href="https://github.com/plotly/plotly.js" target="plotly">plotly.js</a>

<a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/" target="_license"><img alt="Licence Creative Commons" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a> Cette application est mise à disposition selon les termes de la <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/" target="_licence">Licence Creative Commons Attribution - Pas d’Utilisation Commerciale - Partage dans les Mêmes Conditions 4.0 International</a>.

Fichiers :

<ul>
<li>cc.png</li>
<li>icone192.png</li>
  <li>index.html</li>
<li>logo.png : affichage en 150px x 100px</li>
<li>logoUFICT.png</li>
  <li>plotly-gl3d.min.js : version modifiée de <a href="https://github.com/plotly/plotly.js" target="plotly">plotly.js</a> (gl3d - minified) v2.16.5 - Copyright 2012-2019, Plotly, Inc. All rights reserved. Licensed under the MIT license.</li></ul>
  
Modification pour ne pas afficher "x", "y", ni "z" pour le hoverinfo des points, mais "Soutien" ou "Reconnaissance", "Exigences" et "Autonomie" :
<br/><code>void 0!==t.zLabel?(void 0!==t.xLabel&&(l+="x: "+t.xLabel+"<br>"),void 0!==t.yLabel&&(l+="y: "+t.yLabel+"<br>"),"choropleth"!==t.trace.type&&"choroplethmapbox"!==t.trace.type&&(l+=(l?"z: ":"")+t.zLabel))</code>
<br/><code>void 0!==t.zLabel?(void 0!==t.xLabel&&(l+=(n._container[0].parentNode.id == "karasek" ? "Soutien : " : "Reconnaissance : ")+t.xLabel+"<br>"),void 0!==t.yLabel&&(l+="Exigences : "+t.yLabel+"<br>"),"choropleth"!==t.trace.type&&"choroplethmapbox"!==t.trace.type&&(l+=(l?"Autonomie : ":"")+t.zLabel))</code>

Modification de la palette de couleurs par défaut des marqueurs :
<br/><code>r.defaults=["#1f77b4","#ff7f0e","#2ca02c","#d62728","#9467bd","#8c564b","#e377c2","#7f7f7f","#bcbd22","#17becf"]</code>
<br/><code>r.defaults=["#1f77b4","#01dfd7","#0101df","#5b179b","#f781f3","#7f7f7f","#000000","#8a2908","#b2ad7f","#878f99"]</code>

<ul><li>plotly-locale-fr.js : fichier de localisation en français de plotly.js (gl3d - minified) v2.16.5</li>
<li>qrcodeqvt.png</li>
<li>qvt.webmanifest</li>
<li>qvtscript.js</li>
  <li>qvtstyle.css</li>
      <li>sw.js</li>
  </ul>
