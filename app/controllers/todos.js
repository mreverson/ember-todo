import Controller from '@ember/controller';

export default Controller.extend({
    actions: {
        deleteTodo: function(id){
            this.store.findRecord('todo', id).then(
                function(todo){
                    todo.deleteRecord();

                    todo.save();
                });
        }
    }
});
