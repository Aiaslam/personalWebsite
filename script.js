
  function nameError(){
    var Name=document.getElementById("name").value;
    var nameerror=document.getElementById("name-error");
    var namecode=/(^[a-zA-Z][a-zA-Z\s]{0,20}[a-zA-Z]$)/;
    if(Name.length==0){
      nameerror.innerHTML="Enter Your full Name";
      nameerror.style.color="red";
    }
     if(!Name.match(namecode)){
      nameerror.innerHTML="Enter a valid Name";
      nameerror.style.color="red";
    }
     if(Name.length<=4){
      nameerror.innerHTML="Atleast 4 character";
      nameerror.style.color="blue";
    }
    else{
      nameerror.innerHTML="Valid";
      nameerror.style.color="green";
    }

  }


  function subjecter(){
   var subject=document.getElementById("subjectid").value;
   var subjectError=document.getElementById("subjectError");
   if(subject.length==0){
     subjectError.innerHTML="Enter subject";
     subjectError.style.color="red";
   }
    if(subject.length<=4){
     subjectError.innerHTML="Enter any valid subject";
     subjectError.style.color="orange";
   }
   else{
     subjectError.innerHTML="Valid";
     subjectError.style.color="green";
   }
  }
  
 
 
 
   function messagefung(){
     var Message=document.getElementById("Message").value;
 
     var messageError=document.getElementById("messageError");
 
     if(Message.length==0){
       messageError.innerHTML="Enter a massage";
       messageError.style.color="red";
 
     }else{
       messageError.innerHTML="Message entered";
       messageError.style.color="green";
     }
 
 
   }
  
 
 

  function emailError(){
    var email=document.getElementById("email").value;
    var emailerror=document.getElementById("emailerror");
    var emailcode= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if(!email.match(emailcode)){
      emailerror.innerHTML="Enter a valid Email";
      emailerror.style.color="red";

    }else{
      emailerror.innerHTML="Valid";
      emailerror.style.color="green";

    }
  }