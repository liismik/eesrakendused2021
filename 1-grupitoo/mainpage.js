var slider = document.getElementById("ageRange");
var radio = document.getElementById("gender");
var sliderOutput = document.getElementById("age");
$("#resultText").html("Sugu valimata");

sliderOutput.innerHTML = slider.value;
slider.oninput = function() {
  sliderOutput.innerHTML = this.value;
  if(document.querySelector("input[name='gender']:checked")){
    this.gender = document.querySelector("input[name='gender']:checked").value;
    if(sliderOutput.innerHTML > 62 && this.gender == "female"){
      this.result = "Pensionieas";
      this.resultNumber = "";
    } else if(sliderOutput.innerHTML > 64 && this.gender == "male"){
      this.result = "Pensionieas";
      this.resultNumber = "";
    } else if(sliderOutput.innerHTML < 64 && this.gender == "male"){
      this.ageLeft = 64 - sliderOutput.innerHTML;
      this.result = "Pole pensionieas";
      if(this.ageLeft == 1 && sliderOutput.innerHTML < 64 && this.gender == "male"){
        this.resultNumber = "Pensionini: " + this.ageLeft + " aasta";
      } else {
        this.resultNumber = "Pensionini: " + this.ageLeft + " aastat";
      }
    } else if(sliderOutput.innerHTML < 62 && this.gender == "female"){
      this.ageLeft = 62 - sliderOutput.innerHTML;
      this.result = "Pole pensionieas";
      if(this.ageLeft == 1 && sliderOutput.innerHTML < 64 && this.gender == "female"){
        this.resultNumber = "Pensionini: " + this.ageLeft + " aasta";
      } else {
        this.resultNumber = "Pensionini: " + this.ageLeft + " aastat";
      }
    }
  } else{
    this.result = "Sugu valimata";
    this.resultNumber = "";
  }
  
  $("#resultText").html(this.result);
  $("#resultNumber").html(this.resultNumber);
}

radio.onclick = function() {
  this.gender = document.querySelector("input[name='gender']:checked").value;
  console.log(sliderOutput.innerHTML + " " + this.gender);
  if(sliderOutput.innerHTML > 62 && this.gender == "female"){
    this.result = "Pensionieas";
    this.resultNumber = "";
  } else if(sliderOutput.innerHTML > 64 && this.gender == "male"){
    this.result = "Pensionieas";
    this.resultNumber = "";
  } else if(sliderOutput.innerHTML < 64 && this.gender == "male"){
    this.ageLeft = 64 - sliderOutput.innerHTML;
    this.result = "Pole pensionieas";
    if(this.ageLeft == 1 && sliderOutput.innerHTML < 64 && this.gender == "male"){
      this.resultNumber = "Pensionini: " + this.ageLeft + " aasta";
    } else {
      this.resultNumber = "Pensionini: " + this.ageLeft + " aastat";
    }
  } else if(sliderOutput.innerHTML < 62 && this.gender == "female"){
    this.ageLeft = 62 - sliderOutput.innerHTML;
    this.result = "Pole pensionieas";
    if(this.ageLeft == 1 && sliderOutput.innerHTML < 64 && this.gender == "female"){
      this.resultNumber = "Pensionini: " + this.ageLeft + " aasta";
    } else {
      this.resultNumber = "Pensionini: " + this.ageLeft + " aastat";
    }
  }
  $("#resultText").html(this.result);
  $("#resultNumber").html(this.resultNumber);
}




  