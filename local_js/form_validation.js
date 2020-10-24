$(document).ready(function() {
  
  
  jQuery.validator.addMethod("alphabetsAndSpacesOnly", function (value, element) {
    return this.optional(element) || /^[a-zA-Z\s]+$/.test(value); 
  });
  
  //custom validation rule
  jQuery.validator.addMethod( 'validemail', function(value) {
    return /^([\w\-\.]+)@((\[([0-9]{1,3}\.){3}[0-9]{1,3}\])|(([\w\-]+\.)+)([a-zA-Z]{2,4}))$/.test(value);
  },"Please enter a valid email");

  //agent enquiry form on property detai page
  $(".js-agent-email-enquiry form").validate({
    // Specify the validation rules
    rules: {
      'details[Name]': {
        required: true
      },
      'details[Email]': {
        required: true,
        validemail: true
      },
      'details[Phone]': {
        required: true,
        minlength: 9,
        maxlength: 50
      }
    },
    // Specify the validation error messages
    messages: {
      'details[Name]': {
        required: "Please enter name"
      },
      'details[Email]': {
        required: "Please enter email"
      },
      'details[Phone]': {
        required: "Please enter phone number",
        minlength: "Please enter at least 9 digits",
        maxlength: "Please enter no more than 50 digits"
      }
    },
    submitHandler: function(form) {
      form.submit();
    }
  });
  
  // contact form validation
  $(".js-contact-us-form form").validate({
    rules: {
      'details[Name]': {
        required: true
      },
      'details[Phone]': {
        required: true,
        minlength: 8,
        maxlength: 50
      },
      'details[Email]': {
        required: true,
        validemail: true
      }
    },
    messages: {      
      'details[Name]': {
        required: "Please enter your name",
        alphabetsAndSpacesOnly: "Please enter a valid name"
      },
      'details[Phone]': {
        required: "Please enter contact number",
        number: "Please enter a valid number",
        minlength: "Please enter at least 9 digits",
        maxlength: "Please enter no more than 50 digits"
      },
      'details[Email]': {
        required: "Please enter email"
      }
    },
    submitHandler: function(form) {
      form.submit();
    }
  });
  
  
  $(".js-contact-us-form-2 form").validate({
    rules: {
      'details[Name]': {
        required: true
      },
      'details[Phone]': {
        required: true,
        minlength: 8,
        maxlength: 50
      },
      'details[Email]': {
        required: true,
        validemail: true
      }
    },
    messages: {      
      'details[Name]': {
        required: "Please enter your name",
        alphabetsAndSpacesOnly: "Please enter a valid name"
      },
      'details[Phone]': {
        required: "Please enter contact number",
        number: "Please enter a valid number",
        minlength: "Please enter at least 9 digits",
        maxlength: "Please enter no more than 50 digits"
      },
      'details[Email]': {
        required: "Please enter email"
      }
    },
    submitHandler: function(form) {
      form.submit();
    }
  });
  
   // rental appraisal form validation
  $(".js-rental-app-form form").validate({
    rules: {
      'details[Name]': {
        required: true
      },
      'details[Phone]': {
        required: true,
        minlength: 8,
        maxlength: 50
      },
      'details[Email]': {
        required: true,
        validemail: true
      },
      'details[Address]': {
        required: true,
      }
    },
    messages: {      
      'details[Name]': {
        required: "Please enter your name",
        alphabetsAndSpacesOnly: "Please enter a valid name"
      },
      'details[Phone]': {
        required: "Please enter contact number",
        number: "Please enter a valid number",
        minlength: "Please enter at least 9 digits",
        maxlength: "Please enter no more than 50 digits"
      },
      'details[Email]': {
        required: "Please enter email"
      },
      'details[Address]': {
        required: "Please enter the address"
      }
    },
    submitHandler: function(form) {
      form.submit();
    }
  });
  
  // request appraisal form validation
  $(".js-request-appraisal form").validate({
    // Specify the validation rules
    rules: {
      'details[First Name]': {
        required: true
      },
      'details[Last Name]': {
        required: true
      },
      'details[Phone]': {
        required: true,
        minlength: 9,
        maxlength: 50
      },
      'details[Email]': {
        required: true,
        validemail: true
      }
    },
    // Specify the validation error messages
    messages: {      
      'details[First Name]': {
        required: "Please enter first name",
        alphabetsAndSpacesOnly: "Please enter a valid name"
      },
      'details[Last Name]': {
        required: "Please enter last name",
        alphabetsAndSpacesOnly: "Please enter a valid name"
      },      
      'details[Phone]': {
        required: "Please enter contact number",
        number: "Please enter a valid number",
        minlength: "Please enter at least 9 digits",
        maxlength: "Please enter no more than 50 digits"
      },
      'details[Email]': {
        required: "Please enter email"
      }
    },
    submitHandler: function(form) {
      form.submit();
    }
  });
  
  
  $(".js-property-worth-form form").validate({
    rules: {
      'details[First Name]': {
        required: true
      },
      'details[Last Name]': {
        required: true
      },
      'details[Email]': {
        required: true,
        validemail: true
      },
      'details[Property_address]': 'required'
    },
    messages: {      
      'details[First Name]': {
        required: "Please enter first name",
        alphabetsAndSpacesOnly: "Please enter a valid name"
      },
      'details[Last Name]': {
        required: "Please enter last name",
        alphabetsAndSpacesOnly: "Please enter a valid name"
      },      
      'details[Email]': {
        required: "Please enter email"
      }
    },
    submitHandler: function(form) {
      form.submit();
    }
  });
  
  
  //register form validation
  $(".js-register-form form").validate({
    // Specify the validation rules
    rules: {
      'first_name': {
        required: true,
        notDefaultText: true
      },
      'last_name': {
        required: true,
        notDefaultText: true
      },
      'email': {
        required: true,
        notDefaultText: true,
        email: true
      },
      'password': {
        required: true,
        minlength: 5
      },
      'password_confirmation': {
        required: true,
        notDefaultText: true,
        minlength: 5,
        equalTo: ".js-register-form #password"
      }
    },
    // Specify the validation error messages
    messages: {
      'first_name': {
        required: "Please enter first name",
        notDefaultText: "Please enter first name"
      },
      'last_name': {
        required: "Please enter last name",
        notDefaultText: "Please enter last name"
      },
      'email': {
        required: "Please enter an email",
        notDefaultText: "Please enter an email"
      },
      'password': {
        required: "Please enter a password",
      },
      'password_confirmation': {
        required: "Please confirm password",
        notDefaultText: "Please confirm password"
      }
    },
    submitHandler: function(form) {
      form.submit();
    }
  });
  
  
  //subsribe form
   $(".js-subsribe-form form").validate({
    rules: {
      'first_name': {
        required: true
      },
      'last_name': {
        required: true
      },
      'email': {
        required: true,
        validemail: true
      }
    },
    messages: {      
      'first_name': {
        required: "Please enter first name"
      },
      'last_name': {
        required: "Please enter last name"
      },
      'email': {
        required: "Please enter email"
      }
    },
    submitHandler: function(form) {
      form.submit();
    }
  });
  
  
  // login form validation
  $("#js-login-form form").validate({
    // Specify the validation rules
    rules: {
      'password': {
        required: true,
      },
      'email': {
        required: true,
        validemail: true
      }
    },
    // Specify the validation error messages
    messages: {      
      'password': {
        required: "Please enter password",
      },     
      'email': {
        required: "Please enter email",
        validemail: "Please enter valid email"
      }
    },
    submitHandler: function(form) {
      form.submit();
    }
  });
  
  
}); //end ready