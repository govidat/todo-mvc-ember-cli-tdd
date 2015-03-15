import Ember from 'ember';
import startApp from '../helpers/start-app';

var application;

module('Acceptance: AddNewTodo', {
  setup: function() {
    application = startApp();
  },
  teardown: function() {
    Ember.run(application, 'destroy');
  }
});

test('visiting /add-new-todo', function() {
	expect(1);
	var text = 'My new awesome todo';
  visit('/');

  andThen(function() {
		return fillIn('#new-todo', text);
	});
  andThen(function() {
		return keyEvent('#new-todo', 'keyup', 13);
	});
	
	// var lastnum = (find('#main > ul > li').size());
	// need to write some code to remove hard code of 4
	// need to check on how to use Fixtures for Acceptance test
  andThen(function() {
		equal(find('#main > ul > li:nth-of-type(4) label').text(), text);
	});
});
