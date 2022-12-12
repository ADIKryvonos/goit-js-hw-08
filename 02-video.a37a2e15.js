!function(){var e="videoplayer-current-time",t=document.querySelector("iframe"),r=new Player(t),o=localStorage.getItem(e);o&&r.setCurrentTime(o),r.on("timeupdate",throttle((function(t){localStorage.setItem(e,t.seconds)}),1e3))}();
//# sourceMappingURL=02-video.a37a2e15.js.map
