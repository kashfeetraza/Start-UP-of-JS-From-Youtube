const user = {
    name: "Hitesh",
    age: 30,
    email: "hitesh@example.com",
    isLoggedIn: true,
    lastLoginDays: ["Monday", "Saturday"],

    getDetails: function() {
        return `Name: ${this.name}, Age: ${this.age}`;
    }
};

console.log(user.name);
console.log(user["email"]);
console.log(user.getDetails());

// Check if key exists
console.log("age" in user);

// Get keys
console.log(Object.keys(user));

// Get values
console.log(Object.values(user));

// Entries
console.log(Object.entries(user));
