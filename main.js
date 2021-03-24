// night mode========================================
const nightM = document.getElementById('nightMode');
nightM.addEventListener('click', function(){
    document.querySelector('#container').style.backgroundImage = "url('https://media.giphy.com/media/aZ3LDBs1ExsE8/giphy.gif')";
    console.log('nightmode clicked');
});

// day mode =======================================
const dayM = document.getElementById('daymode');
dayM.addEventListener('click', function(){
    document.querySelector('#container').style.backgroundImage ="url('https://media.giphy.com/media/qCfQ28HLs61r2/giphy.gif')";
}) 