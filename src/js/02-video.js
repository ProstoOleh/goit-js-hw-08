import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const STORAGE_KEY = 'videoplayer-current-time';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

const saveTime = throttle(function (currentTime) {
  localStorage.setItem(STORAGE_KEY, currentTime);
}, 1000);

player.on('timeupdate', function (data) {
  const currentTime = data.seconds;
  saveTime(currentTime);
});

document.addEventListener('DOMContentLoaded', function () {
  const storedTime = localStorage.getItem(STORAGE_KEY);
  if (storedTime) {
    player.setCurrentTime(storedTime).then(function (seconds) {
      console.log(`Відтворення відео почнеться з ${seconds} секунди.`);
    });
  }
});
