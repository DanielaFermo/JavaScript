function verificar() {
  var date = new Date();
  var year = date.getFullYear();
  var formYear = document.getElementById("txtyear");
  var result = document.getElementById("result");
  if (formYear.value.length == 0 || Number(formYear.value) > year) {
    window.alert("Please check date of birth");
  } else {
    var fsex = document.getElementsByName("radi-gender");
    var age = year - Number(formYear.value);
    var gender = "";
    var img = document.createElement("img");
    if (fsex[0].checked && age <= 10) {
      gender = `Boy`;
      img.setAttribute("src", "menino.png");
    } else if (fsex[0].checked && age < 18 && age >= 10) {
      gender = "Boy";
      img.setAttribute("src", "homem-jovem.png");
    } else if (fsex[0].checked && age >= 18 && age < 40) {
        gender=`Men`
      img.setAttribute("src", "homem.png");
    } else if (fsex[0].checked && age >= 40) {
        gender=`Men`
      img.setAttribute("src", "senhor.png")}
    
      else if (fsex[1].checked) {
      gender = `Women`;
      if (age >= 0 && age < 10) {
        img.setAttribute("src", "menina.png");
      } else if (age < 18 && age >= 10) {
        img.setAttribute("src", "mulher-jovem.png");
      } else if (age >= 18 && age < 40) {
        img.setAttribute("src", "mulher.png");
      } else if (age >= 40) {
        img.setAttribute("src", "senhora.png");
      }
    }
    result.innerHTML = `You are a ${gender} with ${age} years old`;
    result.appendChild(img);
  }
}
