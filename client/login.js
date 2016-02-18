Template.login.events({
    'click .showLogin': function(e, t){
	$('#loghere').toggle();
    },
    
    'submit #login-form' : function(e, t){
	e.preventDefault();
	
	var email = t.find('#login-email').value
	, password = t.find('#login-password').value;
	if(email =="" || password ==""){
	    alert("Please fill in all fields")
	    return;
	}
	// Trim and validate your fields here.... 
	
	// If validation passes, supply the appropriate fields to the
	// Meteor.loginWithPassword() function.
	Meteor.loginWithPassword(email, password, function(err){
	    if (err){
		// The user might not have been found, or their passwword
		// could be incorrect. Inform the user that their
		// login attempt has failed. 
		alert(err);
	    }
	    else{
		// The user has been logged in.
		Router.go('SessionBuilder');
	    }
	});
   
	return false; 
    },
    
    'submit #register-form' : function(e, t) {
	console.log("clicked");
	e.preventDefault();
	var email = t.find('#account-email').value
        , password = t.find('#account-password').value
	, name = t.find('#account-name').value;
	
	if(email == "" || password == "" || name =="") {
	    alert("Please fill in all the fields.");
	    return;
	}
	
	Meteor.call('checkSecret', t.find('#secret-code').value,
		    function(error, ret){
			if(ret){
			    console.log("trying to create user...")

			    Accounts.createUser({email: email, password : password, profile : {name: name}}, function(err){
				if (err) {
				    // Inform the user that account creation failed
				    alert(err);
				} else {
				    alert("Welcome, " + name + "! We will take you to Seshi in just a few moments."); 
				    Router.go('SessionBuilder');
				}
			    })
			}else{
			    alert(error);
			    return;
			}});
	return false;
    }
});






