var app = new Vue({
  el: "#root",
  data: {
    toDo: [
      {
        description: "comprare il parmigiano",
        check: "false",
      },
      {
        description: "comprare il musetto",
        check: "false",
      },
    ],
  },

  methods: {
    toDoDelete() {
      this.toDo.splice(this.description, 1);
    },
    middleLine(index) {
      if (this.toDo[index].check == false) {
        this.toDo[index].check == true;
      } else {
     this.toDo[index].check == false;
      }
      console.log(this.toDo[index].check);
    },
  },
});
