import throttle from 'lodash.throttle';
import Player from '@vimeo/player';

const TIME_PLAYED = 'videoplayer-current-time';
const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const onPlay = function (e) {
  localStorage.setItem(TIME_PLAYED, e.seconds);
};

const timer = localStorage.getItem(TIME_PLAYED);
if (timer) {
  player.setCurrentTime(timer);
}

player.on('timeupdate', throttle(onPlay, 1000));
