# QVTNumerique

Un outil <a href="https://www.ugict.cgt.fr/" target="_ugict">UGICT-CGT</a>, pour l'<a href="https://www.anact.fr/" target="_anact">ANACT</a> et le <a href="https://www.anact.fr/lanact-lance-son-1er-appel-projet-fact-sur-qualite-de-vie-au-travail-et-numerique" target="_fact">FACT</a>, dans le cadre de : <a href="https://lenumeriqueautrement.fr/" taregt="_lna">Construire le Numérique Autrement</a>.

Respectueux de la vie priv&eacute;e et de l'anonymat.<br/>
Open source sous licence MIT.<br/>
Biblioth&egrave;ques open source sous licence MIT : <a href="https://github.com/plotly/plotly.js" target="plotly">plotly.js</a> &amp; <a href="https://github.com/sindresorhus/screenfull.js/" target="screenfull">screenfull.js</a>

Fichiers :

<ul>
  <li>index.html</li>
<li>logo.png : affichage en 150px x 100px</li>
    <li>bibliothèque <a href="https://github.com/plotly/plotly.js" target="plotly">plotly.js</a> : Copyright 2012-2019, Plotly, Inc. All rights reserved. Licensed under the MIT license.</li>
  <ul>
  <li>plotly-gl3d.min.js : version modifiée de plotly.js (gl3d - minified) v1.49.1 ;  Modifications pour ne pas afficher "x", "y", ni "z" pour le hoverinfo des points, mais "Soutien" ou "Reconnaissance", "Exigences" et "Autonomie".</li>
  <code>void 0!==t.zLabel?(void 0!==t.xLabel&&(d+=(r.id == "karasek" ? "Soutien : " : "Reconnaissance : ")+t.xLabel+"<br>"),void 0!==t.yLabel&&(d+="Exigences : "+t.yLabel+"<br>"),"choropleth"!==t.trace.type&&"choroplethmapbox"!==t.trace.type&&(d+=(d?"Autonomie : ":"")+t.zLabel))</code>
<li>plotly-locale-fr.js : fichier de localisation en français de plotly.js (gl3d - minified) v1.49.1</li>
  </ul>
  <li>qvtnumerique.css</li>
  <li>qvtnumerique.js</li>
<li>bibliothèque <a href="https://github.com/sindresorhus/screenfull.js/" target="screenfull">screenfull.min.js</a> : v4.2.1 - 2019-07-27 ; Copyright Sindre Sorhus. Licenced under the MIT license.</li>
  </ul>
