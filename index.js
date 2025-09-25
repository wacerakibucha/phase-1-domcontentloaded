document.addEventListener("DOMContentLoaded", function() {
  // Select the paragraph element by its ID
  const paragraph = document.getElementById("text");

  // Update its content using textContent
  paragraph.textContent = "This is really cool!";
});

// Optional: log something outside the event listener to see the order
console.log("This console.log() fires immediately when index.js loads");
