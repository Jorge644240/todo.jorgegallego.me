Vue.createApp({
    data() {
        return {
            visible: true,
            tasks: [],
            newTask: ''
        }
    },
    methods: {
        addTask() {
            this.tasks.push(this.newTask);
            this.newTask = '';
        }, 
        removeTask(index) {
            this.tasks.splice(index, 1);
        }
    }
}).mount("#assignment");