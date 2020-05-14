//Validation of the form

// it will return true- if form is valid else return false if the form is invalid
function validate() {
    let final = false;
    let nameBool = false;
    let emailBool = false;
    let pwdBool = false;
    let phBool = false;
    //name validation
    let name = $(".name-field").val();
    if (name == " " || name == undefined || name =="") {
        $(".name-field-msg").html('name is required !').removeClass("text-muted").removeClass("text-success").addClass("text-danger");
        nameBool = false;
    }
    else {
        $(".name-field-msg").html("Success!").removeClass("text-muted").removeClass("text-danger").addClass("text-success");
        nameBool = true;
    }
    // email validation
    let email=$(".email-field").val();
    let emailValidationRE = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (email == " " || email == undefined || email =="") 
    {
        $(".email-field-msg").html("email is required !").removeClass("text-muted").removeClass("text-success").addClass("text-danger");
        emailBool = false;
    }
    else if(emailValidationRE.test(email))
    {
        $(".email-field-msg").html("Success!").removeClass("text-muted").removeClass("text-danger").addClass("text-success");
        emailBool = true;
    }
    else
    {
        $(".email-field-msg").html('invalid email').removeClass("text-muted").removeClass("text-success").addClass("text-danger");
        emailBool = false;
    }

    // password validation
    let pwd=$(".pwd-field").val();
    let pwdValidationRE = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
    if (pwd == " " || pwd == undefined || pwd =="") 
    {
        $(".pwd-field-msg").html('Password is required !').removeClass("text-muted").removeClass("text-success").addClass("text-danger");
        pwdBool = false;
    }
    else if(pwdValidationRE.test(pwd))
    {
        $(".pwd-field-msg").html("Success!").removeClass("text-muted").removeClass("text-danger").addClass("text-success");
        pwdBool = true;
    }
    else
    {
        $(".pwd-field-msg").html("invalid password").removeClass("text-muted").removeClass("text-success").addClass("text-danger");
        pwdBool = false;
    }

    // phone number validation
    let ph =$(".phone-field").val();
    if (ph == " " || ph == undefined || ph =="") 
    {
        $(".phone-field-msg").html('Phone no. is required !').removeClass("text-muted").removeClass("text-success").addClass("text-danger");
        phBool = false;
    }
    else if(ph.charAt(0)=='+' && ph.length==13)
    {
        let num = ph.substring(1);
        let b=true;
        for(let el in num)
        {
            let ch = num.charAt(el);
            if(!(Number.isInteger(parseInt(ch))))
                b=false;
        }
        if(b)
        {
            $(".phone-field-msg").html("Success!").removeClass("text-muted").removeClass("text-danger").addClass("text-success");
            phBool = true;
        }
        else
        {
            $(".phone-field-msg").html("invalid phone no.").removeClass("text-muted").removeClass("text-success").addClass("text-danger");
        phBool = false;
        }
    }
    else
    {
        $(".phone-field-msg").html("invalid phone no.").removeClass("text-muted").removeClass("text-success").addClass("text-danger");
        phBool = false;
    }
    if( nameBool==true && emailBool==true && pwdBool==true && phBool==true)
    {
        final = true;
    }

    return final;

}