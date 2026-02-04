function convert() {
  const value = Number(document.getElementById("valueInput").value);
  const type = document.getElementById("conversionType").value;
  let resultText = "";

  if (isNaN(value)) {
    document.getElementById("result").innerText = "Please enter a valid number.";
    return;
  }

  switch (type) {
    case "kmToMiles":
      resultText = `${value} km = ${(value * 0.621371).toFixed(2)} miles`;
      break;

    case "cToF":
      resultText = `${value} °C = ${((value * 9/5) + 32).toFixed(2)} °F`;
      break;

    case "metersToFeet":
      resultText = `${value} meters = ${(value * 3.28084).toFixed(2)} feet`;
      break;

    case "kgToPounds":
      resultText = `${value} kg = ${(value * 2.20462).toFixed(2)} pounds`;
      break;
  }

  document.getElementById("result").innerText = resultText;
}
