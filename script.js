

const root = new Vue ({
    el: "#root",
    data: {
        newItem: "",
        toDo: [
            "Fare la spesa",
            "Pulire la libreria",
            "Portare il cane a fare una passeggiata",
            "Studiare",
        ],
    },
    methods: {
        deleteItem(index){
            this.toDo.splice(index, 1);
        },
        addItem(){
            this.toDo.push(this.newItem);
            this.newItem = " ";
        },
    },
});