function updateTime() {
    let now = new Date();
    let options = {
        day: "numeric",
        month: "long",
        year: "numeric",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        hour12: false,
        timeZoneName: "short"
    };

    let formatter = new Intl.DateTimeFormat("id-ID", options);
    let formatted = formatter.format(now);

    // Hilangkan kata "pukul" (kadang muncul di format) dan ubah titik jadi ":"
    formatted = formatted.replace("pukul ", "").replace(/\./g, ":");

    let clockEl = document.getElementById("clock");
    if (clockEl) {
        clockEl.innerHTML = formatted;
    }
}

// Jalankan setiap 1 detik
setInterval(updateTime, 1000);

// Jalankan pertama kali saat halaman load
document.addEventListener("DOMContentLoaded", updateTime);
