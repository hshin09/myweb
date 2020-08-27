var tvplayer;
var xmlreq;
var strResponse="";
var strResult="";

function gettv(s)
{
   xmlreq = new XMLHttpRequest();
   if(!xmlreq) {
      return false;
   }
   strResponse="";
   xmlreq.onreadystatechange=mystate_change;
   
   xmlreq.open("post", s, true);
   xmlreq.setRequestHeader("Access-Control-Allow-Origin","*");
   xmlreq.setRequestHeader("Accept","text/html");
   xmlreq.setRequestHeader("Content-Type","text/html");
   xmlreq.send(null);
}

function mystate_change() {
   strResult="79";
   if (xmlreq.readyState==4)  { // 4 = "loaded"
      if (xmlreq.status==200)  { // 200 = OK
         // ...our code here...
         strResponse=xmlreq.responseText;
         if(strResponse.length<1) {
            strResult="00";
            window.hiddenView.showMsg( "webView:setHiddenViewTV('" + strResult + "')" );
            return false;
         }
         var ssi=strResponse.indexOf("file: \"http");
         if(ssi<1) {
            strResult="01";
            window.hiddenView.showMsg( "webView:setHiddenViewTV('" + strResult + "')" );
            return false;
         }
         var eei=strResponse.indexOf(",",ssi);
         strResponse=strResponse.substring(ssi+7,eei-1);
         strResult=strResponse;
         window.hiddenView.showMsg( "webView:setHiddenViewTV('" + strResult + "')" );
         return true;
      }
   }
   strResult=xmlreq.readyState+":"+xmlreq.status;
   window.hiddenView.showMsg( "webView:setHiddenViewTV('" + strResult + "')" );
   return false;
}

function loadTV(ch)
{ 
   tvplayer.setAttribute('src',ch); 
}

function make()
{ 
   tvplayer=document.createElement('iframe');
   tvplayer.setAttribute('id','player');
   document.body.appendChild(tvplayer); 
}

make();
