function submit() {

    function countdown() {
        let x = document.getElementById('text').value;

        const year = x;
        const TargetYear = new Date(year);
        const CurrentDate = new Date();

        let DateinSeconds = Math.floor((TargetYear - CurrentDate) / 1000);
        let Day = check(Math.floor(DateinSeconds / 3600 / 24));
        let Hours = check(Math.floor(DateinSeconds / 3600) % 24);
        let Minutes = check(Math.floor(DateinSeconds / 60) % 24);
        let Seconds = check(Math.floor(DateinSeconds % 60));

        function check(x) {
            return x < 10 && x >= 0 ? (`0${x}`) : x;
        }
        document.getElementById('seconds').innerHTML = Seconds;
        document.getElementById('minutes').innerHTML = Minutes;
        document.getElementById('hours').innerHTML = Hours;
        document.getElementById('days').innerHTML = Day;

    }
    
    setInterval(countdown,1000)
}