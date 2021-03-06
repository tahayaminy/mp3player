function check(dis, wh) {
  if (dis.value != "") {
    if (wh == "p") {
      var clss = dis.previousElementSibling.previousElementSibling.classList;
      clss.remove("d-none");
      clss.add("success");
    } else {
      var clss = dis.nextElementSibling.classList;
      clss.remove("d-none");
      clss.add("success");
    }
  } else {
    if (wh == "p") {
      var clss = dis.previousElementSibling.previousElementSibling.classList;
      clss.remove("success");
      clss.add("d-none");
    } else {
      var clss = dis.nextElementSibling.classList;
      clss.remove("success");
      clss.add("d-none");
    }
  }
}

var myWindow;

function openWin() {
  myWindow = window.open("", "", "width=500, height=100");
  resizeWin();
}

function resizeWin() {
  myWindow.resizeTo(370, 700);
  myWindow.focus();
  var cover = document.getElementById("cover");
  var [coverarr] = cover.files;
  var coversrc = URL.createObjectURL(coverarr);

  var music = document.getElementById("music");
  var [musicarr] = music.files;
  var musicsrc = URL.createObjectURL(musicarr);

  var text = document.getElementsByClassName("text");

  var doc =
    ` <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <link rel="stylesheet" href="https://parswebdesigners.github.io/icon/css/all.min.css"/>
    <link rel="preload" as="font" type="font/woff" crossorigin href="https://parswebdesigners.github.io/font/iransansxv.woff" />
    <link rel="preload" as="font" type="font/woff2" crossorigin href="https://parswebdesigners.github.io/font/iransansxv.woff2" />  
    <link rel="preload" as="font" type="font/ttf" crossorigin href="https://parswebdesigners.github.io/font/hack.ttf" />
    <link rel="preload" as="font" type="font/woff" crossorigin href="https://parswebdesigners.github.io/font/staticfonts/iransansx-bold.woff" />
    <link rel="preload" as="font" type="font/woff" crossorigin href="https://parswebdesigners.github.io/font/staticfonts/iransansx-regular.woff" />
    <link rel="stylesheet" href="https://parswebdesigners.github.io/font/font.css"/>
    <link rel="stylesheet" href="./main.css">
  </head>
  <body dir="rtl">
    
    <section id="cont">
      <div
        style="
          text-align: center;
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          filter: blur(5px);
          -webkit-filter: blur(5px);
        "
      >
        <img src="` +
    coversrc +
    `" style="width: 90%;border-radius:50%;" />
      </div>
      <div
        style="
          background-color: rgba(29, 53, 87, 0.5);
          width: 100%;
          height: 100%;
          position: absolute;
        "
      >
        <div style="text-align: center; margin-top: 15%">
          <img src="` +
    coversrc +
    `" style="width: 50%;border-radius:50%;" /><br />
          <p><i class="far fa-user"></i>` +
    text[0].value +
    `</p>
          <br />
          <p><i class="fas fa-compact-disc"></i>` +
    text[1].value +
    `</p>
          <div id="wave">
            <div>
              <div class="bar"></div>
              <div class="bar"></div>
              <div class="bar"></div>
              <div class="bar"></div>
              <div class="bar"></div>
              <div class="bar"></div>
              <div class="bar"></div>
              <div class="bar"></div>
              <div class="bar"></div>
              <div class="bar"></div>
              <div class="bar"></div>
              <div class="bar"></div>
              <div class="bar"></div>
              <div class="bar"></div>
              <div class="bar"></div>
              <div class="bar"></div>
              <div class="bar"></div>
              <div class="bar"></div>
              <div class="bar"></div>
              <div class="bar"></div>
              <div class="bar"></div>
            </div>
            <input
              id="overlay"
              type="range"
              value="0"
              onchange="changeProgress()"
            />
            <section
              style="
                width: 92%;
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translateX(-50%) translateY(-50%);
                pointer-events: none;
              "
            >
              <span id="currentTime" style="float: left">0:00</span>
              <span id="durationTime" style="float: right">0:00</span>
              <span style="clear: both"></span>
            </section>
          </div>
          <div id="ctrl">
            <i onclick="play()" class="fas fa-play"></i>
            <i
              id="pause"
              onclick="paused()"
              style="display: none"
              class="fas fa-pause"
            ></i>
            <i onclick="stop()" class="fas fa-stop"></i>
          </div>
        </div>
      </div>
    </section>
    <audio id="song" src=""></audio>
  </body>

  <script src="./main.js"><\/script>
    <script>song.src="` +
    musicsrc +
    `";<\/script>
</html>
`;
  myWindow.document.write(doc);
}
