var app = new Vue({
  el: "#root",
  data: {
    toDo: [
      {
        description: "comprare il parmigiano",
        check: false,
      },
      {
        description: "comprare il musetto",
        check: false,
      },
    ],
    text: "",
  },

  methods: {
    toDoDelete(index) {
      this.toDo.splice(index, 1);
    },

    middleLine(index) {
      if (this.toDo[index].check == false) {
        this.toDo[index].check = true;
      } else {
        this.toDo[index].check = false;
      }
      //this.toDo[index].check = true;
    },

    addTask() {
      this.toDo.push({
        description: this.text,
        check: false,
      });
    },
  },
});
