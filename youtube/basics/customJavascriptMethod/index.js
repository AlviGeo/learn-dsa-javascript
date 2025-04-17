// const allStudent = ["Zoey", "Zach", "Alyssa", "Alvi", "Abby"];
// const studentName = "Alvi";

// const findStudentName = (allStudent, studentName) => {
//   for (let i = 0; i < allStudent.length; i++) {
//     if (allStudent[i] === studentName) {
//       return true;
//     }
//   }
//   return false;
// };

// console.log(findStudentName(allStudent, studentName));

class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  push($item) {
    this.data[this.length] = $item;
    this.length++;
    return this.length;
  }

  get($index) {
    return this.data[$index];
  }

  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }

  shift() {
    const firstItem = this.data[0];
    delete this.data[0];
    this.length--;
    return firstItem;
  }

  deleteByIndex($index) {
    const deleteItem = this.data[$index];
    delete this.data[$index];
    this.length--;
    return this.data;
  }
}

const myNewArray = new MyArray();

myNewArray.push("apple");
myNewArray.push("orange");
myNewArray.push("mango");
myNewArray.get(1);
// myNewArray.pop("mango");
// myNewArray.shift();
myNewArray.deleteByIndex(1);
console.log(myNewArray);
