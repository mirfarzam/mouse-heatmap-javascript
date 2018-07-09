# mouse-heatmap-javascript
simple script for tracking the mouse positions while client uses a webpage.

For testing Website  UX, we should investigate how clients interact with our website. One of the common test in UX is page heatmap which can derive how user eyes looks page parts by tracking the mouse pointer. For my research abou Human Computer Interaction in websites, it was the first step to making this tracker. I used JS to develop this functionality. Its runs in client side and after he or she close the page all the data will transfer to my server.in below I will describe how it works :


Firstly, I get view size(its width and height). Based on them I can make a layer on my page which is made by 40px *40px squares. It’s like how Robocop saw the world 🙂

In the nest level, I put an event on mouse movement and when the event is called, I the program check the position of the mouse and add a counter number for the square which the mouse had movement in.

when client click to close the window, the data of his or her mouse movement were sent to some server to collect them for future analysis.
