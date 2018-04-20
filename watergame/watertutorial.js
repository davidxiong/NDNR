"use strict";
// display or hide the tutorial page including tutorialbox and four gray pages which leave 
//   a highlighted area acting normally for all mouse input operations;
function displaytpage(bDisplay) {
    var cStyle = document.getElementById("tutorialpage").style;
    if (bDisplay) {
        cStyle.display = "block";
        cStyle.zIndex = 4;
    }
    else {
        cStyle.display = "none";
        cStyle.zIndex = -4;
    }
}

function displaytseconds(bDisplay) {
    var cSr = document.getElementById("tpagesecondr").style;
    var cSl = document.getElementById("tpagesecondl").style;
    var cSb = document.getElementById("tpagesecondb").style;
    if (bDisplay) {
        cSr.display = "block";
        cSr.zIndex = 4;
        cSl.display = "block";
        cSl.zIndex = 4;
        cSb.display = "block";
        cSb.zIndex = 4;
    }
    else {
        cSr.display = "none";
        cSr.zIndex = -4;
        cSl.display = "none";
        cSl.zIndex = -4;
        cSb.display = "none";
        cSb.zIndex = -4;
    }
}

// enable or disable the Next button in the tutorial box;
function enablenextbutton(bEnable) {
    document.getElementById("tutorialnext").innerHTML = 'Next';
    var cS = document.getElementById("tutorialnext").style;
    if (bEnable) {
        cS.pointerEvents = "auto";
        cS.opacity = 1;
    }
    else {
        cS.pointerEvents = "none";
        cS.opacity = 0.5;
    }
}

// enable or disable the Previous button in the tutorial box;
function enablepreviousbutton(bEnable) {
    var cS = document.getElementById("tutorialprevious").style;
    if (bEnable) {
        cS.pointerEvents = "auto";
        cS.opacity = 1;
    }
    else {
        cS.pointerEvents = "none";
        cS.opacity = 0.5;
    }
}

// hide or show the Exit Tutorial button in the tutorial box;
function hideexitbutton(bHide) {
    var cS = document.getElementById("tutorialexit").style;
    if (bHide) {
        cS.visibility = "hidden";
    }
    else {
        cS.visibility = "visible";
    }
}

// show tutorial box for the whole slider area
function showtwholesliderbox(sSubHead, sText) {
    wsgame.midposition();
    document.getElementById("tutorialsubhead").innerHTML = sSubHead;
    document.getElementById("tutorialtext").innerHTML = sText;
    document.getElementById("tutorialarrow").className = "tutorialarrowleft";
    var cS = document.getElementById("tutorialbox").style;
    cS.left = "278px";
    cS.top = "95px";
    cS = document.getElementById("tpagetop").style;
    cS.width = "1230px";
    cS.height = "40px";
    cS = document.getElementById("tpageleft").style;
    cS.width = "50px";
    cS.height = "150px";
    cS = document.getElementById("tpageright").style;
    cS.width = "950px";
    cS.height = "150px";
    cS = document.getElementById("tpagebottom").style;
    cS.width = "1230px";
    cS.height = "610px";
    // disable the Previous button
    enablepreviousbutton(false);
}

// show tutorial box for the bottom left area
function showtbottomleftbox(sSubHead, sText) {
    document.getElementById("tutorialsubhead").innerHTML = sSubHead;
    document.getElementById("tutorialtext").innerHTML = sText;
    document.getElementById("tutorialarrow").className = "tutorialarrowleft";
    var cS = document.getElementById("tutorialbox").style;
    cS.left = "612px";
    cS.top = "586px";
    cS = document.getElementById("tpagetop").style;
    cS.width = "1230px";
    cS.height = "586px";
    cS = document.getElementById("tpageleft").style;
    cS.width = "10px";
    cS.height = "206px";
    cS = document.getElementById("tpageright").style;
    cS.width = "612px";
    cS.height = "206px";
    cS = document.getElementById("tpagebottom").style;
    cS.width = "1230px";
    cS.height = "8px";
}

// show tutorial box for the hydrograph area
function showthydrographbox(sSubHead, sText) {
    document.getElementById("tutorialsubhead").innerHTML = sSubHead;
    document.getElementById("tutorialtext").innerHTML = sText;
    document.getElementById("tutorialarrow").className = "tutorialarrowright";
    var cS = document.getElementById("tutorialbox").style;
    cS.left = "262px";
    cS.top = "586px";
    cS = document.getElementById("tpagetop").style;
    cS.width = "1230px";
    cS.height = "40px";
    cS = document.getElementById("tpageleft").style;
    cS.width = "50px";
    cS.height = "150px";
    cS = document.getElementById("tpageright").style;
    cS.width = "950px";
    cS.height = "150px";
    cS = document.getElementById("tpagebottom").style;
    cS.width = "1230px";
    cS.height = "396px";
    displaytseconds(true);
}

// show tutorial box for the drop-down menu area and enable the menu item of menuItem only;
function showtmenubox(sSubHead, sText, menuItem) {
    document.getElementById("tutorialsubhead").innerHTML = sSubHead;
    document.getElementById("tutorialtext").innerHTML = sText;
    document.getElementById("tutorialarrow").className = "tutorialarrowright";
    var cS = document.getElementById("tutorialbox").style;
    cS.left = "654px";
    cS.top = "2px";
    cS = document.getElementById("tpagetop").style;
    cS.width = "1230px";
    cS.height = "6px";
    cS = document.getElementById("tpageleft").style;
    cS.width = "1024px";
    cS.height = "44px";
    cS = document.getElementById("tpageright").style;
    cS.width = "10px";
    cS.height = "44px";
    cS = document.getElementById("tpagebottom").style;
    cS.width = "1230px";
    cS.height = "748px";
    // disable the Next button
    enablenextbutton(false);
    // enable only the menuItem;
    wsgame.enablemenuitem(menuItem);
}

// show end tutorial box - no highlighted area;
function showtendbox(sSubHead, sText) {
    document.getElementById("tutorialsubhead").innerHTML = sSubHead;
    document.getElementById("tutorialtext").innerHTML = sText;
    document.getElementById("tutorialarrow").className = "tutorialarrowright";
    var cS = document.getElementById("tutorialbox").style;
    cS.left = "654px";
    cS.top = "2px";
    cS = document.getElementById("tpagetop").style;
    cS.width = "1230px";
    cS.height = "6px";
    cS = document.getElementById("tpageleft").style;
    cS.width = "1024px";
    cS.height = "44px";
    cS = document.getElementById("tpageright").style;
    cS.width = "208px";
    cS.height = "44px";
    cS = document.getElementById("tpagebottom").style;
    cS.width = "1230px";
    cS.height = "748px";
    hideexitbutton(true);
    // change Next to End;
    document.getElementById("tutorialnext").innerHTML = 'End';
}

function showtpage(step) {
    displaytpage(false);
    displaytseconds(false);
    // enable the Next and Previous buttons; one of them will get disabled in the spicific step of showt...() functions above;
    enablenextbutton(true);
    enablepreviousbutton(true);
    // show the Exit Tutorial button; it will be hidden at the last step of the tutorial;
    hideexitbutton(false);
    switch (step) {
        // when the application starts, it stays in TutorialStep.STEP_START state.
        // There is no break statement in this case. It goes ahead to execute the statements in the STEP_1 case.
        case wsgame.TutorialStep.STEP_START:
            wsgame.currentStep = wsgame.TutorialStep.STEP_1;
        case wsgame.TutorialStep.STEP_1:
            setuponeaudiofile('audios/tpts1.mp3');
            // goto Water Table page;
            showtwholesliderbox('Adjust the water table elevation', '<p>Adjust the water table elevation using this slider or by clicking on the slider\'s labels.</p><p>Watch how the aquifer depth, streamflow, and the direction of groundwater flow change as you adjust the water table elevation.</p>');
            break;
        case wsgame.TutorialStep.STEP_2:
            setuponeaudiofile('audios/tpts2.mp3');
            showtbottomleftbox('Understand the changes you see', '<p>This bottom section explains the changes that occur in this simulation as you adjust the water table elevation.</p><p>You can hover over the underlined words to learn what they mean.</p>');
            break;
        case wsgame.TutorialStep.STEP_3:
            setuponeaudiofile('audios/tpts3.mp3');
            showtmenubox('Enter the next simulation', '<p>Using this drop-down menu, select "Precipitation" to enter the precipitation simulation.</p>', 'Precipitation');
            break;
        case wsgame.TutorialStep.STEP_4:
            setuponeaudiofile('audios/tpts4.mp3');
            // goto Precipitation page;
            showtwholesliderbox('Adjust the intensity of rain', '<p>Adjust the intensity of rain using this slider or by clicking on the slider\'s labels.</p><p>Watch how changes in the intensity of rain affect runoff and streamflow during a rain event.</p>');
            break;
        case wsgame.TutorialStep.STEP_5:
            setuponeaudiofile('audios/tpts5.mp3');
            showtbottomleftbox('Understand the changes you see', '<p>This bottom section explains the changes that occur in this simulation as you adjust the intensity of rain.</p><p>You can hover over the underlined words to learn what they mean.</p>');
            break;
        case wsgame.TutorialStep.STEP_6:
            setuponeaudiofile('audios/tpts6.mp3');
            showthydrographbox('See how the stream responds to precipitation', '<p>This hydrograph shows the streamflow response to a single precipitation event. Try adjusting the slider again, and watch how the hydrograph changes as you change the intensity of rainfall.</p><p>You can hover over the hydrograph to learn how to read it.</p>');
            break;
        case wsgame.TutorialStep.STEP_7:
            setuponeaudiofile('audios/tpts7.mp3');
            showtmenubox('Enter the next simulation', '<p>Using this drop-down menu, select "Soil Texture" to enter the soil texture simulation.</p>', 'Soil Texture');
            break;
        case wsgame.TutorialStep.STEP_8:
            setuponeaudiofile('audios/tpts8.mp3');
            // goto Soil Texture page;
            showtwholesliderbox('Adjust the soil texture', '<p>Adjust the soil texture (i.e., the size of soil particles) using this slider or by clicking on the slider\'s labels.</p><p>Watch how changes in soil texture affect runoff, streamflow, groundwater recharge, and water table elevation during a rain event.</p>');
            break;
        case wsgame.TutorialStep.STEP_9:
            setuponeaudiofile('audios/tpts9.mp3');
            showtbottomleftbox('Understand the changes you see', '<p>This bottom section explains the changes that occur in this simulation as you adjust the soil texture.</p><p>You can hover over the underlined words to learn what they mean.</p>');
            break;
        case wsgame.TutorialStep.STEP_10:
            setuponeaudiofile('audios/tpts10.mp3');
            showthydrographbox('See how the stream responds to precipitation', '<p>This hydrograph shows the streamflow response to a single precipitation event. Try adjusting the slider again, and watch how the hydrograph changes as you change the soil texture.</p><p>You can hover over the hydrograph to learn how to read it.</p>');
            break;
        case wsgame.TutorialStep.STEP_11:
            setuponeaudiofile('audios/tpts11.mp3');
            showtendbox('End of tutorial', '<p>This is the end of the tutorial.</p><p>You are now free to explore all three simulations.</p><p>You may reenter the tutorial mode by clicking on the "Turn On Tutorial Mode" button.</p>');
            break;
        case wsgame.TutorialStep.STEP_END:
        default:
            // enable all the menu options;
            wsgame.enableallmenuitems();
            // setup audio files;
            setupaudiofiles();
            return;
    }
    displaytpage(true);
}
