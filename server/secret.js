Meteor.methods({
    checkSecret: function(secret){
	if(secret == "pineapple"){
	    return true;
	}else{
	    throw new Meteor.Error(401, "You got the wrong secret");
	}
    }
});

