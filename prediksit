const ids = [
  "BULLSEYE",
  "LOTTO GENTING20",
  "SINGAPORE",
  "Toto Macau 19",
  "HONGKONG LOTTO",
  "SYDNEY LOTTO",
  "LOTTO GENTING19",
  "Toto Macau 5D 15",
  "Toto Macau16",
  "PCSO",
  "Toto Macau13",
  "Toto Macau 5D 21",
  "LOTTO GENTING22",
  "Toto Macau 22",
  "LOTTO GENTING21",
  "LOTTO GENTING23",
  "Toto Macau 23",
  "Toto Macau 00",
  "LOTTO GENTING24"
];

function getSeed() {
  const now = new Date();
  const future = new Date(now.getTime() + 7 * 60 * 60 * 1000);
  const year = future.getUTCFullYear();
  const month = String(future.getUTCMonth() + 1).padStart(2, "0");
  const day = String(future.getUTCDate()).padStart(2, "0");
  return year + "-" + month + "-" + day;
}

function seededRandom(seed) {
  let h = 0;
  for (let i = 0; i < seed.length; i++) {
    h = seed.charCodeAt(i) + ((h << 5) - h);
  }
  return function () {
    h = (h * 9301 + 49297) % 233280;
    return h / 233280;
  };
}

function generateUniqueNumber(rand) {
  const nums = [];
  while (nums.length < 6) {
    const n = Math.floor(rand() * 10);
    if (!nums.includes(n)) nums.push(n);
  }
  return nums.join("");
}

function splitNumber(num) {
  const digits = num.split("");
  const bbfs = num;
  const ai = digits.slice(1, 5).join("");
  const cb = digits[0] + "/" + digits[5];
  const twin = digits[3] + digits[3] + " - " + digits[1] + digits[1];
  const top2dBB = digits[0] + digits[5] + " - " + digits[2] + digits[4] + " - " + digits[4] + digits[1];
  return { bbfs, ai, cb, twin, top2dBB };
}

function displayDailyNumbers() {
  const seed = getSeed();
  const rand = seededRandom(seed);
  const container = document.getElementById("dailyNumbers");

  ids.forEach(name => {
    const num = generateUniqueNumber(rand);
    const { bbfs, ai, cb, twin, top2dBB } = splitNumber(num);

    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML =
      `<div class="card-title">${name}</div>
       <div class="card-text"><strong>BBFS:</strong> ${bbfs}</div>
       <div class="card-text"><strong>AI:</strong> ${ai}</div>
       <div class="card-text"><strong>CB:</strong> ${cb}</div>
       <div class="card-text"><strong>Twin:</strong> ${twin}</div>
       <div class="card-text"><strong>Top 2D BB:</strong> ${top2dBB}</div>
       <a href="https://www.daungo.space/">
         <button type="button" class="btn btn-outline-danger">PASANG SEKARANG</button>
       </a>
       <div class="footer">PREDIKSI TIDAK 100% AKURAT, UTAMAKAN PREDIKSI SENDIRI 🔥</div>`;
    container.appendChild(card);
  });
}

displayDailyNumbers();

