//var web;

function addFrame(objId) {
	var iFrm = document.createElement('iframe');
	iFrm.setAttribute('id', objId);
	iFrm.setAttribute('frameborder', '0');
	iFrm.setAttribute('border', '0');
	iFrm.setAttribute('width', '100%');
	iFrm.setAttribute('height', '100%');
	document.body.appendChild(iFrm);
}
/*
function addTag(parent,tag,objId) {
   var iTag = document.createElement(tag);
   iTag.setAttribute('id', objId);
   if(parent == '')
      document.body.appendChild(iTag);
   else
      parent.appendChild(iTag);
   
   return iTag;
}
*/
window.onload = function() {
   document.body.removeChild(document.getElementsByTagName('center')[0]);
   document.body.removeChild(document.getElementsByTagName('center')[0]);
   document.body.removeChild(document.getElementsByTagName('hr')[0]);

   addFrame('player');
   document.getElementById('player').src='http://youtv24.net/sites/speedtv/pages/pc/pc_view.php?ch=live38&start=on';

/*
   var p = addTag('','div','left');
   var a = addTag(p,'div','menu0');
   a = addTag(p,'div','menu1');

   p = addTag('','div','myid');
   a = addTag(p,'iframe','web');
   a.setAttribute('frameborder','0');
   a.setAttribute('border','0');
   a.setAttribute('width','100%');
   a.setAttribute('height','100%');
   a = addTag(p,'div','videoMessage');
   addTag(a,'p','ch_name');

   $('#menu0').load("https://hshin09.github.io/shinwebtv/kor2.html");
   $('#menu1').load("https://hshin09.github.io/shinwebtv/thai.html");
   web = document.getElementById("web");
   web.src = "http://youtv24.net/sites/speedtv/pages/pc/pc_view.php?ch=live38&start=on";
*/
}
