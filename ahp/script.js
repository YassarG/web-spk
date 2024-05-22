function calculateWeights() {
  // Mendapatkan nilai dari input kriteria
  var c1c1 = parseFloat(document.getElementById("c1c1").value);
  var c1c2 = parseFloat(document.getElementById("c1c2").value);
  var c1c3 = parseFloat(document.getElementById("c1c3").value);
  var c1c4 = parseFloat(document.getElementById("c1c4").value);
  var c1c5 = parseFloat(document.getElementById("c1c5").value);
  var c2c1 = parseFloat(document.getElementById("c2c1").value);
  var c2c2 = parseFloat(document.getElementById("c2c2").value);
  var c2c3 = parseFloat(document.getElementById("c2c3").value);
  var c2c4 = parseFloat(document.getElementById("c2c4").value);
  var c2c5 = parseFloat(document.getElementById("c2c5").value);
  var c3c1 = parseFloat(document.getElementById("c3c1").value);
  var c3c2 = parseFloat(document.getElementById("c3c2").value);
  var c3c3 = parseFloat(document.getElementById("c3c3").value);
  var c3c4 = parseFloat(document.getElementById("c3c4").value);
  var c3c5 = parseFloat(document.getElementById("c3c5").value);
  var c4c1 = parseFloat(document.getElementById("c4c1").value);
  var c4c2 = parseFloat(document.getElementById("c4c2").value);
  var c4c3 = parseFloat(document.getElementById("c4c3").value);
  var c4c4 = parseFloat(document.getElementById("c4c4").value);
  var c4c5 = parseFloat(document.getElementById("c4c5").value);
  var c5c1 = parseFloat(document.getElementById("c5c1").value);
  var c5c2 = parseFloat(document.getElementById("c5c2").value);
  var c5c3 = parseFloat(document.getElementById("c5c3").value);
  var c5c4 = parseFloat(document.getElementById("c5c4").value);
  var c5c5 = parseFloat(document.getElementById("c5c5").value);

  // Menghitung nilai prioritas
  var rowSum = [
    c1c1 + c1c2 + c1c3 + c1c4 + c1c5,
    c2c1 + c2c2 + c2c3 + c2c4 + c2c5,
    c3c1 + c3c2 + c3c3 + c3c4 + c3c5,
    c4c1 + c4c2 + c4c3 + c4c4 + c4c5,
    c5c1 + c5c2 + c5c3 + c5c4 + c5c5,
  ];

  var weights = [
    rowSum[0] / 5,
    rowSum[1] / 5,
    rowSum[2] / 5,
    rowSum[3] / 5,
    rowSum[4] / 5,
  ];

  // Normalisasi nilai prioritas
  var sumWeights =
    weights[0] + weights[1] + weights[2] + weights[3] + weights[4];
  var normalizedWeights = [
    weights[0] / sumWeights,
    weights[1] / sumWeights,
    weights[2] / sumWeights,
    weights[3] / sumWeights,
    weights[4] / sumWeights,
  ];

  // Menampilkan hasil
  var resultDiv = document.getElementById("result");
  var weightsParagraph = document.getElementById("weights");
  weightsParagraph.innerHTML =
    "BEM FMIPA: " +
    normalizedWeights[0].toFixed(3) +
    "<br>" +
    "BEM FBS: " +
    normalizedWeights[1].toFixed(3) +
    "<br>" +
    "BEM FIPP " +
    normalizedWeights[2].toFixed(3) +
    "<br>" +
    "BEM FEB: " +
    normalizedWeights[3].toFixed(3) +
    "<br>" +
    "BEM FT: " +
    normalizedWeights[4].toFixed(3);
  resultDiv.style.display = "block";
}
