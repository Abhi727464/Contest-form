function validate() {
  let fullName = document.getElementById("full-name").value;
  let gender = document.getElementById("gender").value;
  let hobby = document.getElementsByName("hobby");
  let swimming = document.getElementById("swimming").checked;
  let novels = document.getElementById("novels").checked;
  let dancing = document.getElementById("dancing").checked;
  let singing = document.getElementById("singing").checked;
  let error = false;

  if (fullName.length >= 5 && fullName.includes(" ")) {
    document.getElementById("full-name-valid").style.display = "block";
    document.getElementById("full-name-invalid").style.display = "none";
  } else {
    document.getElementById("full-name-invalid").style.display = "block";
    document.getElementById("full-name-valid").style.display = "none";
    error = true;
  }

  if (gender != "none") {
    document.getElementById("valid-gender").style.display = "block";
    document.getElementById("invalid-gender").style.display = "none";
  } else {
    document.getElementById("invalid-gender").style.display = "block";
    document.getElementById("valid-gender").style.display = "none";
    error = true;
  }

  // for (i = 0; i < hobby.length; i++) {
  //   if (
  //     hobby[0].checked == true ||
  //     hobby[1].checked == true ||
  //     hobby[2].checked == true ||
  //     hobby[3].checked == true
  //   ) {

  //     document.getElementById("valid-hobbies").style.display = "block";
  //     document.getElementById("invalid-hobbies").style.display = "none";
  //   } else {
  //     document.getElementById("invalid-hobbies").style.display = "block";
  //     document.getElementById("valid-hobbies").style.display = "none";
  //     error = true;
  //   }
  // }
  if (swimming || novels || dancing || singing) {
    document.getElementById("valid-hobbies").style.display = "block";
    document.getElementById("invalid-hobbies").style.display = "none";
  } else {
    document.getElementById("invalid-hobbies").style.display = "block";
    document.getElementById("valid-hobbies").style.display = "none";
    error = true;
  }
  let alertMessage = `Hobbies of ${fullName}(${gender}) are `
  if(swimming){
    alertMessage = alertMessage + 'Swimming ';
  }
  if(novels){
    alertMessage = alertMessage + 'Reading Novels ';
  }
  if(dancing){
    alertMessage = alertMessage + 'Dancing ';
  }
  if(singing){
    alertMessage = alertMessage + 'Singing ';
  }

  if (!error) {
    swal({
      title: "Welcome!",
      text:`${alertMessage}`,
      icon: "success",
      button: "Aww yiss!",
    });
    document.getElementById("form-registration").reset();

    let validFeedback = document.getElementsByClassName("valid-feedback");
    for (i = 0; i < validFeedback.length; i++) {
      validFeedback[i].style.display = "none";
    }
    let invalidFeedback = document.getElementsByClassName("invalid-feedback");
    for (i = 0; i < invalidFeedback.length; i++) {
      invalidFeedback[i].style.display = "none";
    }
  }
}
