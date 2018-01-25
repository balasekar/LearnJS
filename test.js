const val = {
  data: [
    {
      id: 1,
      text: "Folder 1",
      state: {
        selected: false
      },
      children: [
        {
          id: 2,
          text: "Sub Folder 1",
          state: {
            selected: false
          }
        },
        {
          id: 3,
          text: "Sub Folder 2",
          state: {
            selected: false
          }
        }
      ]
    },
    {
      id: 4,
      text: "Folder 2",
      state: {
        selected: true
      },
      children: [ ]
    }
  ]
};


function printFolder(val1) {
  val1.data.forEach(obj => {
    console.log('Folder Name:', obj.text);
    if(obj.children.length > 0){
      printFolder(obj.children);
    }
    })
}

printFolder(val);