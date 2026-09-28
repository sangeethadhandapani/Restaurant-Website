```javascript
// Mobile Navigation
function toggleMenu() {
    document.getElementById("navLinks").classList.toggle("active");
}


// Table Booking
document.getElementById("bookingForm").addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("name").value;
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;
    const guests = document.getElementById("guests").value;

    const message = document.getElementById("bookingMessage");

    message.innerHTML =
        "✅ Thank you, " + name +
        "! Your table for " + guests +
        " guest(s) has been reserved for " +
        date + " at " + time + ".";

    document.getElementById("bookingForm").reset();
});


// Set minimum booking date to today
const today = new Date().toISOString().split("T")[0];
document.getElementById("date").setAttribute("min", today);
```
