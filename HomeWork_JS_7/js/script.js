// #1

const playList = [

  {
    author: "LED ZEPPELIN",
    song:"STAIRWAY TO HEAVEN"
  
  },
  {
    author: "QUEEN",
    song:"BOHEMIAN RHAPSODY"
  
  },
  {
    author: "LYNYRD SKYNYRD",
    song:"FREE BIRD"
  },
  {
    author: "DEEP PURPLE",
    song:"SMOKE ON THE WATER"
  },
  {
    author: "JIMI HENDRIX",
    song:"ALL ALONG THE WATCHTOWER"
  },
  {
    author: "AC/DC",
    song:"BACK IN BLACK"
  },
  {
    author: "QUEEN",
    song:"WE WILL ROCK YOU"
  },
  {
    author: "METALLICA",
    song:"ENTER SANDMAN"
  }
];

let writePlaylist = () => {
  const playListElement = document.getElementById('playList');

  for (let i = 0; i < playList.length; i++) {
    const song = playList[i];
    const listItem = document.createElement('li');
    listItem.textContent = song.author + ' - ' + song.song;
    playListElement.appendChild(listItem);
  }
  
}

writePlaylist();


