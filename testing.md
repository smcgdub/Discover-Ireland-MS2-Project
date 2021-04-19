# **Discover Ireland Testing Information** #
![Image of the homepage on multiple devices](assets/readme-images/introduction-image.png)
>
## **Table of contents** ##

### **1. Automated Testing** ###

* 1.1 HTML Code Validating 
* 1.2 CSS Code Validating 

### **2. Manual Testing** ###

* 2.1 Manual testing desktop
* 2.2 Manual testing mobile

### **3. JavaScript Specific Testing** ###

* This section is the most detailed and contains all the information from all of the testing of each Javascript file.

>

### **1. Automated Testing** ###

**1.1 HTML Code Validating**

* All of the HTML files were tested on the [W3C HTML Markup Validation website](https://validator.w3.org/)
* All of the files came back clear with the result of **"Document checking completed. No errors or warnings to show"**

**1.2 CSS Code Validating**

* The main CSS files were tested on the [W3C CSS  Validation website](https://jigsaw.w3.org/css-validator/) 
* All of the files came back clear with the result of **"Congratulations! No Error Found."**

>

### **2. Manual Testing** ###

**2.1 Manual testing desktop**

All desktop testing was carried out on Chrome, FireFox and Safari. 

The testing below was carried out on all pages Dublin, Cork & Galway. To stop duplication this document will refer to testing each item below only once but each test has been carried out identically on each city page.

**1. Navbar**

* Have clicked on the Discover Ireland title on the left of the Navbar. Can confirm it brings the user back to the index.html landing page.
* Have clicked on each item in the Navbar and can confirm the page then brings to user to that section.
* Can confirm on smaller screen sizes and mobile devices the list items in the Navbar collapse and now appear as a hamburger menu. When pressed the menu expands to show items. 

**2. Weather Widget**

* The weather widget is displaying an animated 7 days forecast for each city. The days of the week are displayed correctly

**3. Photo Carousel**

* The 3 photos of each city are all being displayed correctly. The carousel will change images automatically however users and also click through the photos manually.

**4. City coat of arms**

* When the screen is shrunk to a smaller size, or when the user is viewing on a mobile device the coat of arms will disappear and only the text will remain. 

**5. Skyscanner Widget**

* The skyscanner widget has been coded so the airport nearest to each city is already pre populated. The user only needs ot enter there airport of origin and they dates they are looking to travel. 
* If the flight is one way the user leaves the return date blank (This is written in the text above the widget so the user knows to do this if they are booking a one way flight)
* When the user begins to type their airport of origin the widget will pre populate as they type. 
* When the user enters their details and clicks search flights a new page will open on the main skyscanner website. This redirect is also mentioned in the text above so the user knows what to expect. 
* There is an ability for Skyscanner approved partners to incorporate the Skyscanner booking engine onto their page however as this is only a small project it was not possible to implement this feature as we are not an approved travel partner. 

**6. Video JS Player**

* All of the videos are loading correctly. They do not autostart and users must press play themselves to start the video. The user can also adjust:
1. The volume of the video in the controller.
2. Make the video full screen 
3. Watch the video as picture in picture
4. Download the video 

**7. Google Map**

* The map loads correctly on every page with the correct zoom setting and map center set.
* When the user clicks on the "Click for local recommendations" button a drop down list appears with the categories of Hotels, Bars, Restaurants and Tourist Attractions. 
* Each category has a different marker icon so the user can distinguish what category they are looking at.
* When you click on a marker the info window will open above it displaying the Name, Address, Phone Number, About & website hyperlink for each place. 
* When the user selects a different category the previous markers will all clear from the map and the new ones will appear. This was done so the screen doesn't end up cluttered and the user is only seeing markers relative to what category they have selected. 

**8. Our Top Recommendations**

* I have placed 4 different Bootstrap cards in this section. Each card has two buttons. The first button will bring you tot he website/booking portal of the recommendation depending on what it is The second button (Click for directions) will open google map (In. a different window) and drop a pin in the location of the recommendation in question. I have tested all of the links and they are all working correctly.

**9. Contact Us Form**

* I have used Email JS for this contact us form. When the user sends an email via the website they will receive a pop up notification confirming their message has been sent. 
* I will also receive an email with the users message and details. First name and e-mail address are required fields and the message will not send unless these fields have been populated. 
* The user will also receive an automated email from the site confirming their message has been received and confirms someone will be in contact with them soon.
* I have also added a spell check to the free text message box on the contact us form. 

**Note:** - Once the user message has been submitted via the site, the auto reply can sometimes vary in the speed of the response being sent to the user. Sometimes i have tested it and the response is immediate, other times it may take several minutes to be sent. I have set it so Email JS should send the automated email reply immediately. Any delay is entirely down to Email JS and is out of my control. All of the pages contact us forms use the exact same JS code from the email.js file so there is no error there. Also all of the incoming and outgoing emails in the Email JS dashboard have been set up correctly. 

I am using the free Email JS service and not the paid subscription one so one factor i thought that may be causing this could be the day/time that the email is sent/replied to. At peak times there may be a lot of sites using the service and this could be leading to the delay. 

The incoming message that the site receives from the user is always received straight away.

**10. The Footer**

* The footer of each page contains the social media icons and the links to the different cities. 
* I have tested all of the social media links behind the icons on each page and they all point to the correct social media site relative to the icon. When clicked the social media site will open in a new tab/window 
* I have also tested the city links and they also point to the correct page.

>

**2.1 Manual testing mobile**

**1. Navbar**

* When viewing on a tablet horizontally the Navbar will display all of the list items the same as a desktop. 
* When held vertically on a tablet the Navbar will display with the hamburger menu in place. 
* On mobile phones whether held horizontally or vertically the Navbar will always appear as a hamburger menu. When pressed the hamburger menu expands to show the list items. 
* Have clicked on the Discover Ireland title on the left of the Navbar. Can confirm it brings the user back to the index.html landing page.

**2. Weather Widget**

* The weather widget is displaying an animated 7 days forecast for each city. The days of the week are displayed correctly.
* On mobile phones the weather widget height is increased to 2 rows. The top row is the current weather and the 2nd row below is the 7 days forecast. 

**3. Photo Carousel**

* The 3 photos of each city are all being displayed correctly. The carousel will change images automatically however users and also click through the photos manually.
* On small screen sizes (Mobile phones) the text description for the photo will not be visible, just the image, 

**4. City coat of arms**

* When the tablet is held horizontally the coat of arms is displayed.
* When the tablet is held vertically and on mobile phones the coat of arms is not visible.  

**5. Skyscanner Widget**

* The Skyscanner widget on mobile devices works the same was as it does on desktop. 
* The widget is responsive so the layout will automatically adjust depending on screen size. 

**6. Video JS Player**

* All of the videos are loading correctly. They do not autostart and users must press play themselves to start the video. The user can also adjust:
1. The volume of the video in the controller.
2. Make the video full screen 
3. Download the video 

The ability to watch the video picture in picture is not available on smaller mobile devices. 

**7. Google Map**

* The Google Map opens and functions the exact same way it does on desktop. 
* On mobile devices the user must use 2 fingers to move and adjust the map as is normal on most mobile devices. This allows the user to drag the page up and down even if they are doing so by holding 1 finger on the map.

**8. Our Top Recommendations**

* On a tablet when holding horizontal the 4 recommendations will be displayed on 1 single row as they are on a desktop.
* When the tablet is held vertically the recommendations forms on 2 rows instead of 1. There will be 2 recommendations on each row. 
* On small screens and mobile phones the recommendations will be stacked one on top of the other. 

**9. Contact Us Form**

* The contact us form works exactly the same on mobiles and tablets as it does on desktops. 

**Note:** Please refer to the in the desktop testing section for the functionality notes highlighted. Its not written here to avoid repetition. 

**10. The Footer**

* The footer works exactly the same on mobiles and tablets as it does on desktops.  

>

### **3. JavaScript Specific Testing** ###

I have created 5 different active JavaScript files in this project. They are:

1. app.js
2. email.js
3. maps-dublin.js
4. maps-cork.js
5. maps-galway.js

### **A) The app.js file** ###

* This file contains the JavaScript for the creation and loading of the weather widget, and for the smooth scrolling effect you get from clicking on a list item in the Navbar.

**TESTING OF THE APP.JS FILE**

The testing for the app.js file was carried out on [JShint.com](https://jshint.com/) The results from the test were as follows:

![Image of app.js file test results](assets/readme-images/app-js-test-results.png)

NOTES ON TESTING 

1. The one warning on line 2 i am aware of. This is for the weather widget that is displayed at the top of each page. I have followed the instructions from the weather widget provider and can confirm my code is correct. The functionality of the widget has been tested thoroughly on each page and it is working exactly as intended.<br>

>

### **B) The email.js file** ###

* This file contains the JavaScript for the Email JS contact us form. 

**TESTING OF THE EMAIL.JS FILE**

The testing for the app.js file was carried out on [JShint.com](https://jshint.com/) The results from the test were as follows:

![Image of email.js file test results](assets/readme-images/email-js-test-results.png)

NOTES ON TESTING 

1. The "One undefined variable" on lines 3 and 10 i am aware of. For the building of this file i have used the official Email JS Documentation as my guide and the contact us form on each page has been tested thoroughly and it is working exactly as intended. This has no effect on the functionality of the site for th user.  

>
### **C) The maps-dublin/cork/galway.js files** ###

* These 3 files contain the Javascript for the Google Map and all of its functionality for the Dublin, Cork and Galway pages. 
* It also contains the JavaScript for the creation of the markers, the info windows, the code for clearing the map and also dropping new icons when a user selects a specific category from the "Click for local recommendations" drop down menu.

**TESTING OF THE MAPS-DUBLIN/CORK/GALWAY.JS FILE**

The testing for the app.js file was carried out on [JShint.com](https://jshint.com/) The results from the test were as follows:

_**Note:** As the functional code for each of these files is the same the JShint has produced the same report for each city page test. To avoid repetition i will list below the results once, but the results apply to each of the map files._

![Image of maps-dublin.js maps-cork.js and maps-galway.js file test results](assets/readme-images/maps-test-results.png)

NOTES ON TESTING 

1. The 2 undefined variables i have also ignored.<br><br>
1.1 The google undefined variable relates to the creation of a new google map. The code i have used is referenced direct from the Google maps documentation and the maps have been tested thoroughly for functionality and they are all working perfectly and as expected.<br><br>
1.2 JShint is saying context is undefined but in my code context is used in the formation of the infoWindow for each marker. Again i have tested the code thoroughly for functionality and all is working perfectly and as expected with no errors.<br>

2. The unused variable of position on line 6 is somewhat incorrect. On line 6 there is no value assigned to that variable, however i use the position variable (Line 406 in original code file) later in the code along with the lng lat to add a marker to the map at a specific point. 

3. The initMap that it says is an unused variable is actually the name of the function for creating the google map (line 21 in original code file). I referenced the Google maps documentation when building this function and have tested the map thoroughly for functionality and all is working perfectly and as expected.

### **D) Console Testing** ###

I have tested each page of the site on the console and upon loading none of the pages are showing errors or warnings. 

**1. Homepage/Splash page**

![Image of index.html file console results](assets/readme-images/splash-page-console.png)

**2. Dublin Page**

![Image of dublin.html file console results](assets/readme-images/dublin-page-console.png)

**3. Cork Page**

![Image of cork.html file console results](assets/readme-images/cork-page-console.png)

**4. Galway Page**

![Image of galway.html file console results](assets/readme-images/galway-page-console.png)
>
### **5. Some points to note on 1 error:** ###

**5.1 - Contact Us Form**

If the user uses the auto complete function on their device the following error seems to pop up in the console. 

![Image of autofill function error message console results](assets/readme-images/contact-us-error-1.png)

**CAUSE:**

From what ive been able to establish this is being caused when a user uses the auto complete function in their browser to complete the form.

**SOLUTION: ON GOING**

I came across this post from W3 docs [click here](https://www.w3docs.com/snippets/html/how-to-disable-browser-autocomplete-and-autofill-on-html-form-and-input-fields.html) that gave 4 or 5 different solutions you can use to disable autocomplete. I have tried every one of the solutions listed without success.

However i do know that these options do work because as part of the testing i created an input filed at the base of the contact us form to test (Screenshot below)

![Image of autofill function error message console results](assets/readme-images/contact-us-test-field.png)

When i click on this input and start typing the auto complete function doesn't pre populate the form. However, when i click on the first name field in the contact us form the information does auto populate (Screenshot below)

![Image of autofill function error message console results](assets/readme-images/contact-us-error-2.png)

I have also tried to do a hard reset of the browsers, deleted the cache and the issue still persists. I have spoken with the tutors at Code Institute and after looking at solutions and we have narrowed it down to the Email JS contact form that is causing this. All of my code was checked and reviewed and came back with no errors. I have tested the form for thoroughly for functionality and this error doesn't impact the functionality of the page or the email function in anyway for the user. I have marked this down to be looked at in future to try and resolve. 
>

