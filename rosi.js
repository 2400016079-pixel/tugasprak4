const facts = [
    "Tulang paha manusia lebih kuat dari beton.",
    "Pisang adalah buah beri, tapi stroberi bukan.",
    "Kucing punya lebih sedikit jari di kaki belakangnya.",
    "Madu tidak pernah basi dan bisa bertahan ribuan tahun.",
    "Siput bisa tidur selama tiga tahun.",
    "Gurita punya tiga hati.",
    "Lumba-lumba memberi nama satu sama lain.",
    "Telinga manusia terus tumbuh sepanjang hidup.",
    "Koala memiliki sidik jari yang mirip manusia.",
    "Burung hantu tidak bisa menggerakkan bola matanya."
];

function generateFact() {
    const random = Math.floor(Math.random() * facts.length);
    document.getElementById("factText").textContent = facts[random];
}

generateFact();

