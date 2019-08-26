import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
	new Vue({
		el: "#app",
		data: {
      todos: [{name: "wash car", priority: "low"},
            {name: "hoover", priority: "low"},
            {name: "walk dog", priority: "high"}],

      newTask: ""
		},
		methods: {
      saveNewTask: function () {
        if (this.newTask !== ""){
          const taskToAdd = {name: this.newTask, priority: this.priority};
          this.todos.push(taskToAdd);
        };
        this.newTask = "";
      }
		}
		});
});
