const messages = [
    // Fakta lucu
    "Kucing bisa tidur sampai 18 jam sehari.",
    "Panda sering jatuh tanpa alasan… relatable ya.",
    "Koala tidur 22 jam sehari.",
    "Domba punya sahabat dan stres kalau dipisah.",
    "Gajah nggak bisa lompat, tapi mereka manis.",

    // Quotes Indonesia lucu
    "Hari ini kamu hebat, jangan ragu.",
    "Kalem, kamu mampu kok.",
    "Capek itu wajar, kamu manusia bukan robot.",
    "Yang penting udah usaha.",

    // Afirmasi Pink Girl
    "Kamu itu layak dicintai ♡",
    "Semesta sayang kamu, beneran.",
    "Hari ini bakal baik kok tenang aja.",
    "Napass dulu… kamu aman.",
    "Kamu lebih kuat daripada yang kamu kira.",

    // Cute messages
    "Jangan lupa minum air putih ya.",
    "Istirahat bentar dulu, kamu capek.",
    "Makan yang bener ya manis.",
    "Aku bangga sama kamu hari ini."
];

function generateRandom() {
    const randomIndex = Math.floor(Math.random() * messages.length);
    document.getElementById("output").innerText = messages[randomIndex];
}
