
var person1 = {
  Vehicle_id: "ravi123",
  Brand_name: "ravi",
  model_number_of_car:5,
  Email: "ravi@gmail.com",
  Mobile_Number:3456,
  Age : 23,
  Gender:"Male",
  Digital_Signiture:"password" 
};

var person2 = {
  Vehicle_id: "raj123",
  Brand_name: "raj",
  model_number_of_car:6,
  Email: "raj@gmail.com",
  Mobile_Number:3457,
  Age : 24,
  Gender:"Male",
  Digital_Signiture:"password1" 
};

var person3 = {
  Vehicle_id: "varma123",
  Brand_name: "varma",
  model_number_of_car:10,
  Email: "varma@gmail.com",
  Mobile_Number:3458,
  Age : 28,
  Gender:"Male",
  Digital_Signiture:"password1" 
};

function searchDetails() {

var EVehicle_id = document.getElementById("propertyid").value;
var Etitle_deed = document.getElementById("titledeed").value;
var ECar_Model = document.getElementById("carmodel").value;
var Eemail = document.getElementById("emaill").value;
var Emobile_number = document.getElementById("mobilenumber").value;

if (person1.Vehicle_id==EVehicle_id && person1.Brand_name==Etitle_deed && person1.model_number_of_car==ECar_Model &&  person1.Email == Eemail && person1.Mobile_Number==Emobile_number) {
  alert("Your Car Information is Available in the car records , You can now move forward to validate your details");
}
else if (person2.Vehicle_id==EVehicle_id && person2.Brand_name==Etitle_deed && person2.model_number_of_car==ECar_Model &&  person2.Email == Eemail && person2.Mobile_Number==Emobile_number) {
  alert("Your Car Information is Available in the car records , You can now move forward to validate your details");
}
else if(EVehicle_id!="" &&Etitle_deed!=""&& ECar_Model!=""&&Eemail!=""&&Emobile_number!=""){
  alert("Your Car Information is not Available in the car records")
}
}








