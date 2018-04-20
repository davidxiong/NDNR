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

function showtboxcommon(sSubHead, sText, sArrow, bl, bt, pTw, pTh, pLw, pLh, pRw, pRh, pBw, pBh) {
    document.getElementById("tutorialsubhead").innerHTML = sSubHead;
    document.getElementById("tutorialtext").innerHTML = sText;
    document.getElementById("tutorialarrow").className = sArrow;
    var cS = document.getElementById("tutorialbox").style;
    cS.left = bl;
    cS.top = bt;
    cS = document.getElementById("tpagetop").style;
    cS.width = pTw;
    cS.height = pTh;
    cS = document.getElementById("tpageleft").style;
    cS.width = pLw;
    cS.height = pLh;
    cS = document.getElementById("tpageright").style;
    cS.width = pRw;
    cS.height = pRh;
    cS = document.getElementById("tpagebottom").style;
    cS.width = pBw;
    cS.height = pBh;
}

// show tutorial box for the whole slider area
// this function is used by both showtwholesliderbox() and showtwholesliderboxT();
function showtwholesliderboxcommon(sSubHead, sText, bl, bt, pTw, pTh, pLw, pLh, pRw, pRh, pBw, pBh) {
    showtboxcommon(sSubHead, sText, "tutorialarrowleft", bl, bt, pTw, pTh, pLw, pLh, pRw, pRh, pBw, pBh);
    // disable the Previous button
    enablepreviousbutton(false);
}

function showtwholesliderbox(sSubHead, sText) {
    ssgame.offPumpStatus();
    ssgame.farWellLocation();
    showtwholesliderboxcommon(sSubHead, sText, "320px", "45px", "1230px", "40px", "20px", "60px", "920px", "60px", "1230px", "700px");
}

function showtwholesliderboxT(sSubHead, sText) {
    ssgame.zeroPumpLevel();
    showtwholesliderboxcommon(sSubHead, sText, "300px", "45px", "1230px", "40px", "20px", "190px", "940px", "190px", "1230px", "570px");
}

// show tutorial box for the switch button area
function showtswitchbuttonbox(sSubHead, sText) {
    showtboxcommon(sSubHead, sText, "tutorialarrowleft", "320px", "105px", "1230px", "100px", "110px", "60px", "920px", "60px", "1230px", "640px");
}

// show tutorial box for the bottom left area
function showtbottomleftbox(sSubHead, sText) {
    showtboxcommon(sSubHead, sText, "tutorialarrowleft", "722px", "586px", "1230px", "586px", "10px", "206px", "502px", "206px", "1230px", "8px");
}

// show tutorial box for the hydrograph area
function showthydrographbox(sSubHead, sText) {
    showtboxcommon(sSubHead, sText, "tutorialarrowright", "372px", "586px", "1230px", "100px", "110px", "60px", "920px", "60px", "1230px", "426px");
    displaytseconds(true);
}

function showthydrographboxT(sSubHead, sText) {
    showtboxcommon(sSubHead, sText, "tutorialarrowright", "372px", "586px", "1230px", "40px", "20px", "190px", "940px", "190px", "1230px", "356px");
    displaytseconds(true);
}

// show tutorial box for the drop-down menu area and enable the menu item of menuItem only;
function showtmenubox(sSubHead, sText, menuItem) {
    showtboxcommon(sSubHead, sText, "tutorialarrowright", "585px", "2px", "1230px", "6px", "955px", "44px", "10px", "44px", "1230px", "748px");
    // disable the Next button
    enablenextbutton(false);
    // enable only the menuItem;
    ssgame.enablemenuitem(menuItem);
}

// show end tutorial box - no highlighted area;
function showtendbox(sSubHead, sText) {
    showtboxcommon(sSubHead, sText, "tutorialarrowright", "585px", "2px", "1230px", "6px", "1024px", "44px", "208px", "44px", "1230px", "748px");
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
        case ssgame.TutorialStep.STEP_START:
            ssgame.currentStep = ssgame.TutorialStep.STEP_1;
        case ssgame.TutorialStep.STEP_1:
            setuponeaudiofile('audios/tpts1.mp3');
            // goto Gaining Stream page;
            showtwholesliderbox('Adjust the location of the pumping well', '<p>Adjust the location of the pumping well using this slider or by clicking on the slider\'s labels.</p><p>The well can be placed at three different distances from the stream.</p>');
            break;
        case ssgame.TutorialStep.STEP_2:
            setuponeaudiofile('audios/tpts2.mp3');
            showtswitchbuttonbox('Turn on the pumping well', '<p>Click on the button from "PUMP OFF" to "PUMP ON"</p><p>Watch how the <span class="tooltipb">aquifer<span class="tooltiptext">The area saturated with water beneath the water table.</span></span> depth, streamflow, and sometimes the direction of groundwater flow change as you turn on the pumping well.</p>');
            break;
        case ssgame.TutorialStep.STEP_3:
            setuponeaudiofile('audios/tpts3.mp3');
            showtbottomleftbox('Understand the changes you see', '<p>This bottom section explains the changes that occur in this simulation as you adjust the location of the pumping well and turn it on.</p><p>You can hover over the underlined words to learn what they mean.</p>');
            break;
        case ssgame.TutorialStep.STEP_4:
            setuponeaudiofile('audios/tpts4.mp3');
            showthydrographbox('See how the stream depth responds to the pumping', '<p>This cross section shows the stream depth response to the stream depletion caused by well pumping. Try turning on the "PUMP ON" button again, and watch how the stream depth changes.</p>');
            break;
        case ssgame.TutorialStep.STEP_5:
            setuponeaudiofile('audios/tpts5.mp3');
            showtmenubox('Enter the next simulation', '<p>Using this drop-down menu, select "Losing Stream" to enter the losing-stream simulation.</p>', 'Losing Stream');
            break;
        case ssgame.TutorialStep.STEP_6:
            setuponeaudiofile('audios/tpts6.mp3');
            // goto Losing Stream page;
            showtwholesliderbox('Adjust the location of the pumping well', '<p>Adjust the location of the pumping well using this slider or by clicking on the slider\'s labels.</p><p>The well can be placed at three different distances from the stream.</p>');
            break;
        case ssgame.TutorialStep.STEP_7:
            setuponeaudiofile('audios/tpts7.mp3');
            showtswitchbuttonbox('Turn on the pumping well', '<p>Click on the button from "PUMP OFF" to "PUMP ON"</p><p>Watch how the <span class="tooltipb">aquifer<span class="tooltiptext">The area saturated with water beneath the water table.</span></span> depth, streamflow, and sometimes the direction of groundwater flow change as you turn on the pumping well.</p>');
            break;
        case ssgame.TutorialStep.STEP_8:
            setuponeaudiofile('audios/tpts8.mp3');
            showtbottomleftbox('Understand the changes you see', '<p>This bottom section explains the changes that occur in this simulation as you adjust the location of the pumping well and turn it on.</p><p>You can hover over the underlined words to learn what they mean.</p>');
            break;
        case ssgame.TutorialStep.STEP_9:
            setuponeaudiofile('audios/tpts9.mp3');
            showthydrographbox('See how the stream depth responds to the pumping', '<p>This cross section shows the stream depth response to the stream depletion caused by well pumping. Try turning on the "PUMP ON" button again, and watch how the stream depth changes.</p>');
            break;
        case ssgame.TutorialStep.STEP_10:
            setuponeaudiofile('audios/tpts10.mp3');
            showtmenubox('Enter the next simulation', '<p>Using this drop-down menu, select "Disconnected Stream" to enter the disconnected-stream simulation.</p>', 'Disconnected Stream');
            break;
        case ssgame.TutorialStep.STEP_11:
            setuponeaudiofile('audios/tpts11.mp3');
            // goto Disconnected Stream page;
            showtwholesliderbox('Adjust the location of the pumping well', '<p>Adjust the location of the pumping well using this slider or by clicking on the slider\'s labels.</p><p>The well can be placed at three different distances from the stream.</p>');
            break;
        case ssgame.TutorialStep.STEP_12:
            setuponeaudiofile('audios/tpts12.mp3');
            showtswitchbuttonbox('Turn on the pumping well', '<p>Click on the button from "PUMP OFF" to "PUMP ON"</p><p>Watch how the <span class="tooltipb">aquifer<span class="tooltiptext">The area saturated with water beneath the water table.</span></span> depth and sometimes the direction of groundwater flow change as you turn on the pumping well. No change in stream depth in this scenario.</p>');
            break;
        case ssgame.TutorialStep.STEP_13:
            setuponeaudiofile('audios/tpts13.mp3');
            showtbottomleftbox('Understand the changes you see', '<p>This bottom section explains the changes that occur in this simulation as you adjust the location of the pumping well and turn it on.</p><p>You can hover over the underlined words to learn what they mean.</p>');
            break;
        case ssgame.TutorialStep.STEP_14:
            setuponeaudiofile('audios/tpts14.mp3');
            showthydrographbox('See the stream depth does not respond to the pumping', '<p>This cross section shows no stream depletion is associated with well pumping under the scenario of a disconnected stream. Try turning on the "PUMP ON" button again, and find no stream depth change.</p>');
            break;
        case ssgame.TutorialStep.STEP_15:
            setuponeaudiofile('audios/tpts15.mp3');
            showtmenubox('Enter the next simulation', '<p>Using this drop-down menu, select "Transient Stream" to enter the transient-stream simulation.</p>', 'Transient Stream');
            break;
        case ssgame.TutorialStep.STEP_16:
            setuponeaudiofile('audios/tpts16.mp3');
            // goto Transient Stream page;
            showtwholesliderboxT('Adjust the level of groundwater extraction', '<p>Adjust the level of groundwater extraction using this slider or by clicking on the slider\'s labels.</p><p>The groundwater extraction can be adjusted at five different levels.</p>');
            break;
        case ssgame.TutorialStep.STEP_17:
            setuponeaudiofile('audios/tpts17.mp3');
            showtbottomleftbox('Understand the changes you see', '<p>This bottom section explains the changes that occur in this simulation as you adjust the level of groundwater extraction.</p><p>You can hover over the underlined words to learn what they mean.</p>');
            break;
        case ssgame.TutorialStep.STEP_18:
            setuponeaudiofile('audios/tpts18.mp3');
            showthydrographboxT('See how the groundwater and stream levels respond to the pumping', '<p>This cross section shows the groundwater and stream levels response to the groundwater and stream depletions caused by well pumping. Try adjusting the level of groundwater extraction, and watch how the groundwater and stream levels change.</p>');
            break;
        case ssgame.TutorialStep.STEP_19:
            setuponeaudiofile('audios/tpts19.mp3');
            showtendbox('End of tutorial', '<p>This is the end of the tutorial.</p><p>You are now free to explore all three simulations.</p><p>You may reenter the tutorial mode by clicking on the "Turn On Tutorial Mode" button.</p>');
            break;
        case ssgame.TutorialStep.STEP_END:
        default:
            // enable all the menu options;
            ssgame.enableallmenuitems();
            // setup audio files;
            setupaudiofiles();
            return;
    }
    displaytpage(true);
}
