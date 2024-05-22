function hitungPerangkingan() {
    // Mengambil nilai input kriteria untuk setiap alternatif
    
    let k1_al1 = parseFloat(document.getElementById("k1-al1").value);
    let k2_al1 = parseFloat(document.getElementById("k2-al1").value);
    let k3_al1 = parseFloat(document.getElementById("k3-al1").value);
    let k4_al1 = parseFloat(document.getElementById("k4-al1").value);
    let k5_al1 = parseFloat(document.getElementById("k5-al1").value);

    let k1_al2 = parseFloat(document.getElementById("k1-al2").value);
    let k2_al2 = parseFloat(document.getElementById("k2-al2").value);
    let k3_al2 = parseFloat(document.getElementById("k3-al2").value);
    let k4_al2 = parseFloat(document.getElementById("k4-al2").value);
    let k5_al2 = parseFloat(document.getElementById("k5-al2").value);

    let k1_al3 = parseFloat(document.getElementById("k1-al3").value);
    let k2_al3 = parseFloat(document.getElementById("k2-al3").value);
    let k3_al3 = parseFloat(document.getElementById("k3-al3").value);
    let k4_al3 = parseFloat(document.getElementById("k4-al3").value);
    let k5_al3 = parseFloat(document.getElementById("k5-al3").value);

    let k1_al4 = parseFloat(document.getElementById("k1-al4").value);
    let k2_al4 = parseFloat(document.getElementById("k2-al4").value);
    let k3_al4 = parseFloat(document.getElementById("k3-al4").value);
    let k4_al4 = parseFloat(document.getElementById("k4-al4").value);
    let k5_al4 = parseFloat(document.getElementById("k5-al4").value);

    let k1_al5 = parseFloat(document.getElementById("k1-al5").value);
    let k2_al5 = parseFloat(document.getElementById("k2-al5").value);
    let k3_al5 = parseFloat(document.getElementById("k3-al5").value);
    let k4_al5 = parseFloat(document.getElementById("k4-al5").value);
    let k5_al5 = parseFloat(document.getElementById("k5-al5").value);
  
    // Menghitung nilai terbobot untuk setiap alternatif
    let bobot_k1 = 0.2;
    let bobot_k2 = 0.15;
    let bobot_k3 = 0.25;
    let bobot_k4 = 0.1;
    let bobot_k5 = 0.3;
  
    let nilai_terbobot_al1 = k1_al1 * bobot_k1 + k2_al1 * bobot_k2 + k3_al1 * bobot_k3 + k4_al1 * bobot_k4 + k5_al1 * bobot_k5;
    let nilai_terbobot_al2 = k1_al2 * bobot_k1 + k2_al2 * bobot_k2 + k3_al2 * bobot_k3 + k4_al2 * bobot_k4 + k5_al2 * bobot_k5;
    let nilai_terbobot_al3 = k1_al3 * bobot_k1 + k2_al3 * bobot_k2 + k3_al3 * bobot_k3 + k4_al3 * bobot_k4 + k5_al3 * bobot_k5;
    let nilai_terbobot_al4 = k1_al4 * bobot_k1 + k2_al4 * bobot_k2 + k3_al4 * bobot_k3 + k4_al4 * bobot_k4 + k5_al4 * bobot_k5;
    let nilai_terbobot_al5 = k1_al5 * bobot_k1 + k2_al5 * bobot_k2 + k3_al5 * bobot_k3 + k4_al5 * bobot_k4 + k5_al5 * bobot_k5;
  
    // Tambahkan perhitungan nilai terbobot untuk alternatif lainnya
  
    // Menampilkan hasil perangkingan
    let hasil_perangkingan = document.getElementById("hasil-perangkingan");
    hasil_perangkingan.innerHTML = "";
  
    // Buat objek untuk setiap alternatif dan nilai terbobot
    let alternatif = [
      { nama: "BEM FMIPA", nilai: nilai_terbobot_al1 },
      { nama: "BEM FBS", nilai: nilai_terbobot_al2 },
      { nama: "BEM FIPP", nilai: nilai_terbobot_al3 },
      { nama: "BEM FEB", nilai: nilai_terbobot_al4 },
      { nama: "BEM FT", nilai: nilai_terbobot_al5 },
      // Tambahkan objek untuk alternatif lainnya
    ];
  
    // Mengurutkan alternatif berdasarkan nilai terbobot (dari yang tertinggi ke terendah)
    alternatif.sort(function(a, b) {
      return b.nilai - a.nilai;
    });
  
    // Menampilkan hasil perangkingan
    let tabelHasil = document.getElementById("tabel-hasil").getElementsByTagName("tbody")[0];
    for (let i = 0; i < alternatif.length; i++) {
      let peringkat = i + 1;
      let nama_alternatif = alternatif[i].nama;
      let nilai_terbobot = alternatif[i].nilai;

      let row = tabelHasil.insertRow(i);
      let cellPeringkat = row.insertCell(0);
      let cellAlternatif = row.insertCell(1);
      let cellNilaiTerbobot = row.insertCell(2);
  
      cellPeringkat.innerHTML = peringkat;
      cellAlternatif.innerHTML = nama_alternatif;
      cellNilaiTerbobot.innerHTML = nilai_terbobot;

    //   let hasil = document.createElement("li");
    //   hasil.innerHTML = "Peringkat " + peringkat + ": " + nama_alternatif + " (Nilai Terbobot: " + nilai_terbobot + ")";
    //   hasil_perangkingan.appendChild(hasil);

    }
    
    
  }
  