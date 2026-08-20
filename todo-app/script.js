class TodoList {
    constructor() {
        this.tasks = this.loadTasks();
        this.currentFilter = 'all';
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.render();
    }

    setupEventListeners() {
        document.getElementById('addBtn').addEventListener('click', () => this.addTask());
        document.getElementById('taskInput').addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.addTask();
        });

        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
                e.target.classList.add('active');
                this.currentFilter = e.target.dataset.filter;
                this.render();
            });
        });

        document.getElementById('clearBtn').addEventListener('click', () => this.clearCompleted());
    }

    addTask() {
        const input = document.getElementById('taskInput');
        const category = document.getElementById('categorySelect').value;

        if (input.value.trim() === '') {
            alert('Please enter a task!');
            return;
        }

        const task = {
            id: Date.now(),
            text: input.value,
            category: category,
            completed: false
        };

        this.tasks.push(task);
        this.saveTasks();
        input.value = '';
        this.render();
    }

    deleteTask(id) {
        this.tasks = this.tasks.filter(task => task.id !== id);
        this.saveTasks();
        this.render();
    }

    toggleTask(id) {
        const task = this.tasks.find(t => t.id === id);
        if (task) {
            task.completed = !task.completed;
            this.saveTasks();
            this.render();
        }
    }

    clearCompleted() {
        this.tasks = this.tasks.filter(task => !task.completed);
        this.saveTasks();
        this.render();
    }

    getFilteredTasks() {
        if (this.currentFilter === 'all') {
            return this.tasks;
        } else {
            return this.tasks.filter(task => task.category === this.currentFilter);
        }
    }

    render() {
        const filteredTasks = this.getFilteredTasks();
        const taskList = document.getElementById('taskList');

        if (filteredTasks.length === 0) {
            taskList.innerHTML = '<div class="empty-state"><h2>No tasks yet!</h2></div>';
            return;
        }

        taskList.innerHTML = filteredTasks.map(task => `
            <div class="task-item ${task.completed ? 'completed' : ''}">
                <input type="checkbox" class="task-checkbox" ${task.completed ? 'checked' : ''}
                    onchange="todoList.toggleTask(${task.id})">
                <div class="task-content">
                    <div class="task-text">${task.text}</div>
                    <span class="task-category">${task.category}</span>
                </div>
                <button class="delete-btn" onclick="todoList.deleteTask(${task.id})">Delete</button>
            </div>
        `).join('');
    }

    saveTasks() {
        localStorage.setItem('tasks', JSON.stringify(this.tasks));
    }

    loadTasks() {
        const stored = localStorage.getItem('tasks');
        return stored ? JSON.parse(stored) : [];
    }
}

const todoList = new TodoList();