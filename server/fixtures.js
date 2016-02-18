if (Papers.find().count() === 0) {
    if(!(typeof entities === 'undefined')){
	for(var i in entities){
	    Papers.insert(entities[i]);
	}
    }
}

