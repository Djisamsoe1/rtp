var table = document.querySelector("table"),
    countdownElements = table.querySelectorAll(".countdown"),
    today = new Date().getDay();

function hitungSisaWaktuPasang(jamTutup, countdownEl, row) {
    var sekarang = new Date(),
        jamResult = row.querySelector(".jamresult").textContent,
        waktuTutup = new Date(sekarang.getFullYear() + "-" + (sekarang.getMonth() + 1) + "-" + sekarang.getDate() + " " + jamTutup + ":00"),
        waktuResult = new Date(sekarang.getFullYear() + "-" + (sekarang.getMonth() + 1) + "-" + sekarang.getDate() + " " + jamResult + ":00");

    var sisa = waktuTutup - new Date();

    if (sisa <= 0 && waktuResult >= new Date()) {
        countdownEl.innerHTML = "Bet Closed";
        countdownEl.classList.add("merah");
        row.classList.add("mauhabis");
        row.classList.add("pasarantutup");
    } else if (sisa > 0) {
        var jam = Math.floor(sisa / (1000 * 60 * 60)),
            menit = Math.floor((sisa % (1000 * 60 * 60)) / (1000 * 60)),
            detik = Math.floor((sisa % (1000 * 60)) / 1000);

        var jamTxt = jam < 10 ? "0" + jam : jam,
            menitTxt = menit < 10 ? "0" + menit : menit,
            detikTxt = detik < 10 ? "0" + detik : detik;

        countdownEl.innerHTML = jamTxt + ":" + menitTxt + ":" + detikTxt;

        if (sisa <= 900000) { // 15 menit terakhir
            countdownEl.classList.add("merah");
            row.classList.add("mauhabis");
        } else {
            countdownEl.classList.remove("merah");
            row.classList.remove("mauhabis");
        }
    } else {
        countdownEl.innerHTML = "Bet Closed";
        row.classList.add("habis");
        row.classList.add("pasarantutup");
    }

    if (new Date() >= waktuResult) {
        waktuTutup.setDate(waktuTutup.getDate() + 1);
        var sisaBaru = waktuTutup - new Date();

        var jam = Math.floor(sisaBaru / (1000 * 60 * 60)),
            menit = Math.floor((sisaBaru % (1000 * 60 * 60)) / (1000 * 60)),
            detik = Math.floor((sisaBaru % (1000 * 60)) / 1000);

        var jamTxt = jam < 10 ? "0" + jam : jam,
            menitTxt = menit < 10 ? "0" + menit : menit,
            detikTxt = detik < 10 ? "0" + detik : detik;

        countdownEl.innerHTML = jamTxt + ":" + menitTxt + ":" + detikTxt;

        row.classList.remove("habis");
        row.classList.remove("pasarantutup");

        if (sisaBaru <= 900000) {
            countdownEl.classList.add("merah");
            row.classList.add("mauhabis");
        } else {
            countdownEl.classList.remove("merah");
            row.classList.remove("mauhabis");
        }
    }
}

function hitungCountdown() {
    countdownElements.forEach(function (el) {
        var ds = el.dataset;
        var status = "tutup";

        if (today === 1 && ds.senin === "1") status = "buka";
        if (today === 2 && ds.selasa === "1") status = "buka";
        if (today === 3 && ds.rabu === "1") status = "buka";
        if (today === 4 && ds.kamis === "1") status = "buka";
        if (today === 5 && ds.jumat === "1") status = "buka";
        if (today === 6 && ds.sabtu === "1") status = "buka";
        if (today === 0 && ds.minggu === "1") status = "buka";

        if (status === "buka") {
            var jamTutup = el.closest(".barisdepan").querySelector(".jamtutup").textContent,
                row = el.closest(".barisdepan");

            hitungSisaWaktuPasang(jamTutup, el, row);
        } else {
            el.innerHTML = "Pasaran Libur";
            el.classList.remove("merah");
            var row = el.closest(".barisdepan");
            row.classList.remove("mauhabis");
            row.classList.remove("pasarantutup");
            row.classList.add("habis");
        }
    });
}

setInterval(hitungCountdown, 1000);
