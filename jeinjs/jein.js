const jein = {

style: function(e, obj) {
	if (!(typeof(obj) === "object")) {
		throw new Error("Style parameter is not an object");
	}
	for (const [key, value] of Object.entries(obj)) {
		document.querySelector(e).style.setProperty(key, value);
	}
},

goto: function(url) {
	var xhttp = new XMLHttpRequest();
	var err404 = "<!DOCTYPE html> <html> <head> <meta name='viewport' content='width=device-width, initial-scale=1'> <style> body, html { height: 100%; margin: 0; } .bg { /* The image used */ background-image: url('jein404.svg'); /* Full height */ height: 100%; /* Center and scale the image nicely */ background-		position: center; background-repeat: no-repeat; background-size: cover; } </style> </head> <body> <div class='bg'></div> </body> </html>";

	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			document.querySelector(":root").outerHTML = this.responseText;
		} else if (this.readyState == 4 && this.status == 404) {
			document.querySelector(":root").outerHTML = err404;
		}
	};
	xhttp.open("GET", url, true);
	xhttp.send();
},

ajax: {

transformXML: function(xmlfile, xslfile) {
	xml = this.loadFile(xmlfile);
	xsl = this.loadFile(xslfile);
	// code for IE
	if (window.ActiveXObject || xhttp.responseType == "msxml-document") {
		ex = xml.transformNode(xsl);
		document.body.innerHTML = ex;
	}
	// code for Chrome, Firefox, Opera, etc.
	else if (document.implementation && document.implementation.createDocument) {
		xsltProcessor = new XSLTProcessor();
		xsltProcessor.importStylesheet(xsl);
				resultDocument = xsltProcessor.transformToFragment(xml, document);
		document.body.appendChild(resultDocument);
 	}
},

loadFile: function(filename) {
	if (window.ActiveXObject) {
		xhttp = new ActiveXObject("Msxml2.XMLHTTP");
	} else {
		xhttp = new XMLHttpRequest();
	}
 
	xhttp.open("GET", filename, false);
	try {xhttp.responseType = "msxml-document"} catch(err) {} // Helping IE11
	xhttp.send("");
	return xhttp.responseXML;
}

},

includeHTML: function(e, url, spinner = "", method = "GET") {
	const elmnt = e;
	const xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
		   elmnt.scrollTop = 0;
		   elmnt.scrollLeft = 0;
		   elmnt.innerHTML = this.responseText;
        } else {
           elmnt.innerHTML = spinner;
        }
	} 
	xhttp.open(method, url);
	xhttp.send();
},

newElement: function(tagName, parentElement, innerHTML, attr = {}) {
	const para = document.createElement(tagName);
	para.innerHTML = innerHTML;
	for (const [key, value] of Object.entries(attr)) {
		para.setAttribute(key, value);
	}
	// Append to body:
	document.querySelector(parentElement).appendChild(para);
},

includeElementFromHTML: function(includeElem, outputElem, addToOutput = "", removeElements = "", url, method = "GET") {
  const elmnt = document.querySelector(outputElem);
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function() {
    elmnt.scrollTop = 0;
    elmnt.scrollLeft = 0;
    parser = new DOMParser();
    doc = parser.parseFromString(this.responseText,"text/html");
    const removeElementsList = doc.querySelectorAll(removeElements);
    removeElementsList.forEach((removeElem) => {
       removeElem.remove();
    });
    elmnt.innerHTML = doc.querySelector(includeElem).innerHTML + addToOutput;
  }
  xhttp.open(method, url);
  xhttp.send();
}

}
