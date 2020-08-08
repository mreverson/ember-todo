import Controller from '@ember/controller';

export default Controller.extend({
    actions: {
        addTodo: function(){
            var title = this.get('title')

            //Create new Todo
            var newTask = this.store.createRecord('todo', {
                title: title,
            });

            //Save to DB
            newTask.save();

            //Clear form
            this.setProperties({
                title: '',
            });
        }
    }
        
});
