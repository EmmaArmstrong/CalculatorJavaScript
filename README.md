CalculatorJavaScript
====================

JavaScript Calculator example with associated Jasmine unit tests.




Bugs

Link at bottom of the page goes to an Error page

M- button is missing

The value Pi is wrong (to short and last digits are wrong)

Pi does not clear the display when it is used (it is appended to the last number)

Added demo limit for 50 button presses with an error message which has a number of issues: 
•	Informal
•	Calculator is spelt wrong
•	Contains an !
•	Ends on a :
•	States the limit is based on operations not key presses
•	States the limit is 25 not 50
•	Once you dismiss the message you can continue
•	There is nowhere to entered prompted for serial number

Added overflow error behaviour
•	If the result is greater than 9999999999 then the message 99999999Err is displayed and the display background turns red
•	The display background is only cleared on C or refresh
•	It is possible to start over new operations without clicking C
•	It is possible to enter more digits than a result can be

Added divide by zero error message functionality

Added a readonly message to the display and history fields:
•	Memory doesn't have a readonly message.  
•	The fields aren't actually read only

Added an idle timer
•	if there is a 1 min 30 gap between key presses the display and history will clear.

Multiplication by 3 -All multiplications by 3 are now times by 4

Button swap - when you press the +/- button then the actual + and - buttons swap.

Added bug which minuses 1 from number
when in the range 10000 and 100000

Added bug when calculation returns a value with 4 or more decimal places.  The result is multiplied by a random number between 0 and 1.

Calculator menu item always remains highlighted

Why do we have a search?

Search doesn’t do anything

Submit button text overlaps button boundaries

Raise a bug opens in _self not a new _blank window

Why does the about menu option have an ellipsis

Help menu item on the version history page is the wrong font and isn’t aligned correctly

The about menu item on the about page has 
only 2 dots in the ellipsis
is italic
opens in a new _blank window not _self

Having the breadcrumbs as “>” characters in the titles seems unnecessary 

Menu header seems to create a lot of empty real estate around the calculator

Why have an about page for a web application

What has Tao of Testing got to do with this calculator and it doesn’t go anywhere

You get a wait cursor after you click equals which clears on next button press

Memory recall returns plus one to the value currently in memory

If you backspace 6 times the calculator will crash


