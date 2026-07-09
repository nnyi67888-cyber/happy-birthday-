console.log("Happy Birthday Website Loaded ❤️");

window.onload = function () {

    // Loader ရှိရင်ပဲ အလုပ်လုပ်မယ်
    const loader = document.getElementById("loader");

    if (loader) {
        setTimeout(function () {
            loader.style.opacity = "0";

            setTimeout(function () {
                loader.style.display = "none";
            }, 1000);

        }, 2500);
    }

    // Background Music
    const music = document.getElementById("bgMusic");

    if (music) {
        music.volume = 0.5;

        music.play().catch(function () {
            console.log("Autoplay blocked");
        });
    }

};