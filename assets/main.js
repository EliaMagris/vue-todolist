var app = new Vue({
  el: "#root",
  data: {
    toDo: [
      {
        description: "comprare il parmigiano",
        check: "false"
      },
      {
        description: "comprare il musetto",
        check: "false"
      },
    ],
  },


  methods: {
    toDoDelete(){
        this.toDo.splice(this.description, 1)
    }
  },
});
