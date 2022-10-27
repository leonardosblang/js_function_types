function User(name,age) {
  this.name = name;
  this.age = age;
  this.isAdmin = false;
}

let user = new User("Normal",12);
console.log(user)

function UserFactory(name, age) {
  return {
    name,
    age,
  }
};

let user2 = UserFactory("Factory", 23);
console.log(user2)