var Xposition = 0;
    var Yposition = 0;
    var width;
    var height;
    var Xpos;
    var Ypos;
    var pos;
    var MatrisPosition;
    var ip;
    var city;

      function zero(rows, cols) {
      var array = [], row = [];
      while (cols--) row.push(0);
      while (rows--) array.push(row.slice());
      return array;
      }

      $(document).ready(function () {

      

        window.addEventListener("beforeunload", function (e) {
  var confirmationMessage = "\o/";

      (e || window.event).returnValue = confirmationMessage; //Gecko + IE
      return confirmationMessage;                            //Webkit, Safari, Chrome
    });


        var width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
        var body = document.body,
        html = document.documentElement;
        var height = Math.max( body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight );

        MatrisPosition = zero(Math.ceil(height/40),Math.ceil(width/40));
        
        console.log(MatrisPosition);


        window.onload = init;
        function init() {
        if (window.Event) {
        document.captureEvents(Event.MOUSEMOVE);
        }
        document.onmousemove = getCursorXY;
        }

        function getCursorXY(e) {
        Xposition = (window.Event) ? e.pageX : event.clientX + (document.documentElement.scrollLeft ? document.documentElement.scrollLeft : document.body.scrollLeft);
        Yposition = (window.Event) ? e.pageY : event.clientY + (document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop);


       Xom = Math.floor(Xposition/40);
       Yom = Math.floor(Yposition/40);

       MatrisPosition[Yom][Xom] +=1;

        //console.log(MatrisPosition);

          }
        });




     