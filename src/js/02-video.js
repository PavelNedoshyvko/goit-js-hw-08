import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');

    const player = new Player(iframe);

player.on('timeupdate', throttle(recordingCurrentTime, 1000));
	
function recordingCurrentTime(data) { 
	localStorage.setItem("videoplayer-current-time", JSON.stringify(data));
}

try {
	const {seconds} = JSON.parse(localStorage.getItem("videoplayer-current-time"));
	player.setCurrentTime(seconds);
} catch (error) {
	console.log(error.name);
	console.log(error.message);
};
