Paper = function(id, title,abstract){
	this._id = id;
	this.title = title;
	this.inSession = false;
        this.abstract = abstract;
	this.sessions = [];
}

//Papers.initEasySearch(['title']);

ConfSession = function(papers){
    this.papers = papers;
    this.numPapers = papers.length;
    this.name = "";
    this.approved = false;
    this.contributors = [];
    this.paperIndex = [];
}

ActionLog = function(userId, author, timestamp, action, params){
    this.userId = userId;
    this.author = author;
    this.timestamp = timestamp;
    this.action = action;
    this.params = params;
}
