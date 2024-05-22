function calculatePreferences() {
  // Ambil nilai bobot kriteria
  const weights = [0.2, 0.1, 0.3, 0.15, 0.25];

  // Ambil nilai alternatif
  const alternatives = [
    {
      k1: parseFloat(document.getElementById("alt1-k1").value),
      k2: parseFloat(document.getElementById("alt1-k2").value),
      k3: parseFloat(document.getElementById("alt1-k3").value),
      k4: parseFloat(document.getElementById("alt1-k4").value),
      k5: parseFloat(document.getElementById("alt1-k5").value),
    },
    {
      k1: parseFloat(document.getElementById("alt2-k1").value),
      k2: parseFloat(document.getElementById("alt2-k2").value),
      k3: parseFloat(document.getElementById("alt2-k3").value),
      k4: parseFloat(document.getElementById("alt2-k4").value),
      k5: parseFloat(document.getElementById("alt2-k5").value),
    },
    {
      k1: parseFloat(document.getElementById("alt3-k1").value),
      k2: parseFloat(document.getElementById("alt3-k2").value),
      k3: parseFloat(document.getElementById("alt3-k3").value),
      k4: parseFloat(document.getElementById("alt3-k4").value),
      k5: parseFloat(document.getElementById("alt3-k5").value),
    },
    {
      k1: parseFloat(document.getElementById("alt4-k1").value),
      k2: parseFloat(document.getElementById("alt4-k2").value),
      k3: parseFloat(document.getElementById("alt4-k3").value),
      k4: parseFloat(document.getElementById("alt4-k4").value),
      k5: parseFloat(document.getElementById("alt4-k5").value),
    },
    {
      k1: parseFloat(document.getElementById("alt5-k1").value),
      k2: parseFloat(document.getElementById("alt5-k2").value),
      k3: parseFloat(document.getElementById("alt5-k3").value),
      k4: parseFloat(document.getElementById("alt5-k4").value),
      k5: parseFloat(document.getElementById("alt5-k5").value),
    },
  ];

  // Hitung nilai preferensi untuk setiap alternatif
  for (let i = 0; i < alternatives.length; i++) {
    let preferensi = 0;
    for (let j = 0; j < weights.length; j++) {
      preferensi += alternatives[i]["k" + (j + 1)] * weights[j];
    }
    document.getElementById("alt" + (i + 1) + "-pref").textContent =
      preferensi.toFixed(2);
  }
}
