const fruits = ["apple", "banana", "mango", "orange"];

console.log("Original Array:", fruits);

// Add item
fruits.push("grape");
console.log("After Push:", fruits);

// Remove last item
fruits.pop();
console.log("After Pop:", fruits);

// Convert to string
console.log("Joined:", fruits.join(" - "));

// Check if includes
console.log("Includes banana:", fruits.includes("banana"));

// Slice and splice
console.log("Sliced:", fruits.slice(1, 3));

fruits.splice(1, 1, "kiwi"); // Replace banana with kiwi
console.log("After Splice:", fruits);
