class User {
  constructor(firstName, lastName, age, location) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.location = location;
  }

// soluzione
ageDiff(user){
if (this.age > user.age) {
  console.log(`${this.firstName} is ${this.age} and is older than ${user.firstName} that is ${user.age}`);
}else if (this.age < user.age) {
  console.log(`${this.firstName} is ${this.age} and is younger than ${user.firstName} that is ${user.age}`);
}else {
  console.log(`${this.firstName} is ${this.age} and is the same age as ${user.firstName} that is ${user.age}`);
}
}
// conolelog degli objects
  // greetings() {
  //   // console.log(`I am ${this.age} years old`);

  //   return (
  //     "hello, my name is " +
  //     this.firstName +
  //     " " +
  //     this.lastName +
  //     " I am " +
  //     this.age +
  //     " years old and I live in " +
  //     this.location
  //   );
  // }
}

// creo una classe
// class NewAge {
//   constructor(users) {
//     this.users = users;

//     if (user1.age > user2.age) {
//       console.log(
//         user1.firstName +
//           " is " +
//           user1.age +
//           " and is older than " +
//           user2.firstName + " that is " +
//           user2.age
//       );
//     } else {
//       console.log(
//         user2.firstName +
//           " is " +
//           user2.age +
//           " and is older than " +
//           user1.firstName + " that is " +
//           user1.age
//       );
//     }}
//    static displayAge = NewAge;
// }


// aggiungo una classe
// class NewAge extends User {
//   constructor(age) {
//     super(age);
//     this.age = age;
//     if (user1.age > user2.age) {
//       console.log(
//         user1.firstName +
//           " is " +
//           user1.age +
//           " and is older than " +
//           user2.firstName +
//           " that is " +
//           user2.age
//       );
//     } else if (user1.age < user2) {
//       console.log(
//         user2.firstName +
//           " is " +
//           user2.age +
//           " and is older than " +
//           user1.firstName +
//           " that is " +
//           user1.age
//       );
//     } else {
//       console.log(
//         user1.firstName +
//           " is " +
//           user1.age +
//           " and is the same age as " +
//           user2.firstName +
//           " that is " +
//           user2.age
//       );
//     }
//   }
//   static displayAge = NewAge;
// }

const user1 = new User("John", "Doe", 25, "New York");
const user2 = new User("Linda", "Smith", 30, "Mexico");

user1.ageDiff(user2);
user2.ageDiff(user1);


// console.log(user1.greetings());
// console.log(user2.greetings());

// const age = new NewAge(user1.age, user2.age);


