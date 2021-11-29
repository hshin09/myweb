var timer = null;
var web = null;
var mustWait = 0;
var cnt=0;
var ADsid = "shin";
var url = "https://www.adintrend.tv/hd/live/i.php?ch=3&cxid=" + ADsid;

function prepare()
{
   if( document.domain == "kakotv.com" ) {
      window.hiddenView.showMsg( "webView:setcnt('" + location.href + "')" );
      /* if( location.href == "https://kakotv.com/live/JTBC-76.html" ) {
         getkakotvurl();
         return;
      } */
      if(location.href == "https://kakotv.com/live/list.html" )
         initkakotv();
      return;
   }

   addFrame("TV");
   document.getElementById("TV").src = url;
}

function getADsid() {
   window.hiddenView.showMsg( "webView:setADsid('" + ADsid + "')" );
   window.location.replace("https://kakotv.com");
}

function addFrame(objId)
{
   var iFrm = document.createElement('iframe');
   iFrm.setAttribute('id', objId);
   iFrm.setAttribute('width', '100%');
   iFrm.setAttribute('height', '100%');
   document.body.appendChild(iFrm);
}

function loadVideo(url) 
{
window.hiddenView.showMsg( "msg:hidden = " + url );
   web.src = "https://kakotv.com/live" + url + ".html";
   mustWait = 3;
   
   if(timer) {
      clearInterval(timer);
      timer=null;
   }
   timer = setInterval( function() { OnOff(); }, 1100 );
}

function OnOff()
{
   if( timer ) {
      clearInterval(timer);
      timer=null;
   }
   if( mustWait ) {
      mustWait--;
      if( mustWait == 0 ) {
         if( timer ) {
            clearInterval(timer);
            timer=null;
         }
         getkakotvurl();
      }
      return;
   }
}

function initkakotv()
{
   callLogin('hshin09', 'shin0903');

   document.body.innerHTML = "";
   addFrame("web");
   web = document.getElementById("web");
}

function getkakotvurl()
{
//window.hiddenView.showMsg( "msg:web is " + web );
   var f=web.contentDocument.getElementsByTagName('body')[0];
   var s=f.innerHTML;
   var i=s.indexOf('initPlayer');
   s=s.substr(i);
   i=s.indexOf("`");
   s=s.substr(i+1);
   var j=s.indexOf("`");
   s=s.substr(0,j);
   s=s.replace(/&amp;/g,"&");
   //window.hiddenView.showMsg( "webView:setkakotv('" + s + "')" );
window.hiddenView.showMsg( "msg:2 is " + s );
   window.hiddenView.showMsg( "webView:stv.src='" + s + "'" );
}

prepare();
