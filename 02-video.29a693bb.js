const e=document.querySelector("iframe"),t=new Player(e),r=localStorage.getItem("videoplayer-current-time");r&&t.setCurrentTime(r),t.on("timeupdate",throttle((function(e){localStorage.setItem("videoplayer-current-time",e.seconds)}),1e3));
//# sourceMappingURL=02-video.29a693bb.js.map
