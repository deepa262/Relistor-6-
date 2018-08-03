$(function(){
//   WebViewCommunicator.sendJavascriptTo("main", "javascript:appRouter.homeView.flashAdImpressionTrack('banner-ad')");
//   WebViewCommunicator.sendJavascriptTo("main", "javascript:appRouter.homeView.idleSlideTimeSeconds(20)");

  $("#pi").on("click", function(){
    console.log("pi button clicked");
    // WebViewCommunicator.sendJavascriptTo("main", "javascript:appRouter.homeView.openChildBrowser('https://www.regeneron.com/sites/default/files/Dupixent_FPI.pdf', '<div data-advtype=Prescribing-Information/>', 'timeoutMinutes: 2.5')");
    window.open("https://shared.salix.com/shared/pi/relistor-pi.pdf?id=811664a");
  });

  $("#ppi").on("click", function(){
    console.log("ppi button clicked");
    // WebViewCommunicator.sendJavascriptTo("main", "javascript:appRouter.homeView.openChildBrowser('https://www.regeneron.com/sites/default/files/Dupixent_PPI.pdf', '<div data-advtype=Prescribing-Information/>', 'timeoutMinutes: 2.5')");
    window.open("https://www.relistor.com/patient-resources#isi");
  });

  var pressTimer;

  $("#overall_mask").on("touchend", function(){
    clearTimeout(pressTimer);
    return false;
  }).on("touchstart", function(){
    pressTimer = window.setTimeout(function(){
      WebViewCommunicator.sendJavascriptTo("main", "javascript:appRouter.homeView.idleSlideActivateLauncherPanel('100', '700')");
    },1000)
    return false;
  });

});

function startScrolling(waitTime){
  delayScrollingStart = waitTime;
  setTimeout(function autoScroll(delayScrollingStart){
    ascroll = setInterval(function(){
      elem = $("#isi")[0];
      if (elem.scrollTop != 3500){
        elem.scrollTop += 1;
      }
    }, 28);
  }, delayScrollingStart);
}
        function wordsAppear(waitTime){
  var time = waitTime;
  console.log(time);

  tl = new TimelineMax({delay: time});
  tl
    .from(text1, 1, {left:-1080, opacity:0}, '-=0.5')
}
        
        function secondFrame(waitTime){
  var time = waitTime;
  console.log(time);

  tl = new TimelineMax({delay: time});
  tl
    .to(mainBanner, 3, {opacity:1})         
    .from(text2, 1, {left:-1080}, '-=3')
    .to(text1,1,{opacity:0} , '-=4')   
}
        
         function finalFrame(waitTime){
  var time = waitTime;
  console.log(time);

  tl = new TimelineMax({delay: time});
  tl
    .to(mainBanner, 3, {opacity:1})
    .from(text3, 1, {left:-1080}, '-=3')
     .to(text2,1,{opacity:0}, '-=4')
}
       
  function animate(){
      startScrolling(22000);
   wordsAppear(3);
  secondFrame(8);
finalFrame(15);
} 
        
        $(document).on("touchstart", "#isi", function(){
 clearInterval(ascroll);
 WebViewCommunicator.sendJavascriptTo("main", "javascript:appRouter.homeView.idleSlideTimeSeconds(15)"); // Resets idle timer when ISI has been touched
});

function onWallboardIdleSlideDisplay(){
  console.log("onWallboardIdleSlideDisplay");
}

function onWallboardIdleSlideTimerStart(){
  console.log("onWallboardIdleSlideTimerStart");
}

function onWallboardIdleSlideTimerStop(){
  clearInterval(ascroll);
}


animate();
