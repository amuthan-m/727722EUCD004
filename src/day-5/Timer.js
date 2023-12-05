let a = 0;
const Timer = setInterval(() => {
    a += 1;
    if (a === 5){
        clearInterval(Timer);
    }
    console.log('Game Started ' + a + ' ago');
}, 1000);

