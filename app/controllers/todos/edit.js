import Controller from '@ember/controller';

export default Controller.extend({
    actions: {
        editTodo: function(id){
            var self = this;
            var title = this.get('model.title')

            //Update Todo
            this.store.findRecord('todo', id).then(
                function(todo){
                    todo.set('title', title);

                    //Save to DB
                    todo.save();

                    //navigate to homepage
                    self.transitionToRoute('todos')
            });

        }
    }
});
