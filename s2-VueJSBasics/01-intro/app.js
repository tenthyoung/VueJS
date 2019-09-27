new Vue({
    el: "#app",
    data: {
        title: 'Becoming a Vue ninja',
        subtitle: 'I chose this because React is kind of annoying...',
        name: `billy`,
        pclass: 'purple'
    },
    methods: {
        greet(timeOfDay){
            return `Hello and good ${timeOfDay}, ${this.name}`;
        },
        goodbye(){
            return 'bye';
        }
    }
});