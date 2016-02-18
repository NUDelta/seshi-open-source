Router.configure({
    layoutTemplate: 'layout',
    loadingTemplate: 'loading',
});

Router.map(function() {
    this.route('SessionBuilder', 
	       {
		   waitOn: function () {
		       return [Meteor.subscribe('papers-sub'), 
			       Meteor.subscribe('sessions-sub')];
		   },
		   
		   action: function () {
		       if (this.ready())
			   this.render();
		       else
			   this.render('loading');
		   }
	       });

    //this.route('SessionBuilder');
    this.route('accept', 
	       {
		   waitOn: function () {
		       return Meteor.subscribe('papers-sub');
		   },
		   
		   action: function () {
		       if (this.ready())
			   this.render();
		       else
			   this.render('loading');
		   }
	       });
    
    this.route('login', {path:'/'});
    
    this.route('opty', 
	       {
		   waitOn: function () {
		       return [Meteor.subscribe('papers-sub'), 
			       Meteor.subscribe('sessions-sub')];
		   },
		   
		   action: function () {
		       if (this.ready())
			   this.render();
		       else
			   this.render('loading');
		   }
	       });
    
    this.route('stress', {
        path: '/stress/:workername/:interval',
        action: function() {
            console.log("my name is " + this.params.workername);
            Session.set('anonymousName', this.params.workername);
            Session.set('stressInterval', this.params.interval);
            startStressTest();
            Router.go('SessionBuilder');
        }
    });
});

Router.onBeforeAction('loading');
