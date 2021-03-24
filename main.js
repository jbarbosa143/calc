// night mode========================================
const newBG = document.getElementById('nightMode');
newBG.addEventListener('click', function(){
    document.querySelector('#container').style.backgroundImage = "url('https://media.giphy.com/media/aZ3LDBs1ExsE8/giphy.gif')";
    console.log('nightmode clicked');
});