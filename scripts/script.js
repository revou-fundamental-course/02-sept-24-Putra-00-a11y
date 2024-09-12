document.addEventListener("DOMContentLoaded", function () {
    const triangleButton = document.getElementById("tabTriangle");
    const parallelogramButton = document.getElementById("tabParallelogram");
    const triangleForm = document.getElementById("triangleForm");
    const parallelogramForm = document.getElementById("parallelogramForm");
    const triangleCalculation = document.getElementById("triangleCalculation");
    const parallelogramCalculation = document.getElementById("parallelogramCalculation");
    const triangleResult = document.getElementById("triangleResult");
    const parallelogramResult = document.getElementById("parallelogramResult");

    function showForm(formToShow) {
        triangleForm.classList.remove("active");
        parallelogramForm.classList.remove("active");

        formToShow.classList.add("active");
    }

    triangleButton.addEventListener("click", function () {
        showForm(triangleForm);
    });

    parallelogramButton.addEventListener("click", function () {
        showForm(parallelogramForm);
    });

    // Default to showing the triangle form
    showForm(triangleForm);

    // Hitung Segitiga
    triangleCalculation.addEventListener("submit", function (event) {
        event.preventDefault();

        const base = parseFloat(document.getElementById("base").value);
        const height = parseFloat(document.getElementById("height").value);
        const sideA = parseFloat(document.getElementById("sideA").value);
        const sideB = parseFloat(document.getElementById("sideB").value);
        const sideC = parseFloat(document.getElementById("sideC").value);

        const area = 0.5 * base * height;
        const perimeter = sideA + sideB + sideC;

        triangleResult.innerHTML = `Luas Segitiga: ${area.toFixed(2)} cm²<br>Keliling Segitiga: ${perimeter.toFixed(2)} cm`;
    });

    // Hitung Jajar Genjang
    parallelogramCalculation.addEventListener("submit", function (event) {
        event.preventDefault();

        const base = parseFloat(document.getElementById("baseJajarGenjang").value);
        const height = parseFloat(document.getElementById("heightJajarGenjang").value);
        const side = parseFloat(document.getElementById("sideJajarGenjang").value);

        const area = base * height;
        const perimeter = 2 * (base + side);

        parallelogramResult.innerHTML = `Luas Jajar Genjang: ${area.toFixed(2)} cm²<br>Keliling Jajar Genjang: ${perimeter.toFixed(2)} cm`;
    });

    // Reset hasil perhitungan ketika form di-reset
    triangleCalculation.addEventListener("reset", function () {
        triangleResult.innerHTML = "";
    });

    parallelogramCalculation.addEventListener("reset", function () {
        parallelogramResult.innerHTML = "";
    });
});
