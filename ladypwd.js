function ladypassword_apply_protection(elementName){
  var pwdField = document.getElementById(elementName);

  pwdField.addEventListener("keyup", function(e) {
      if(pwdField.value.length >0){
        superImage.style.display="";
      }
      else{
        superImage.style.display="none";
      }
      superImage.style.left= pwdField.value.length * 4;
  });

  var superImage=create_supersecure_image_element("img/ladycajero.png", "SECUREEEEE", "please do not TOUCH!");
  insertAfter(superImage, pwdField);
}

function create_supersecure_image_element(src, alt, title) {
    var img= document.createElement('img');
    img.src= src;
    img.id="imgSecure";
    img.style.display="none";

    if (alt!=null) img.alt= alt;
    if (title!=null) img.title= title;
    return img;
}

function insertAfter(newNode, referenceNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}
