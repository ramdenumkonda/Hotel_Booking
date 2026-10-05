let data = [
    ["Vijayawada", "Krishna Grand Hotel", 3200],
    ["Vijayawada", "River View Residency", 2800],
    ["Vijayawada", "Capital Comfort Hotel", 3500],
    ["Vijayawada", "Vijaya Palace", 4100],
    ["Vijayawada", "Golden Stay Inn", 2600],
    ["Vijayawada", "Elite Residency", 3800],

    ["Hyderabad", "Hyderabad Grand Palace", 5200],
    ["Hyderabad", "Charminar Residency", 3900],
    ["Hyderabad", "Pearl City Hotel", 4500],
    ["Hyderabad", "Royal Deccan Hotel", 5800],
    ["Hyderabad", "Metro Comfort Inn", 3400],
    ["Hyderabad", "Lake View Suites", 4900],

    ["Visakhapatnam", "Beach Grand Resort", 5500],
    ["Visakhapatnam", "Ocean Pearl Hotel", 4300],
    ["Visakhapatnam", "Vizag Comfort Inn", 3600],
    ["Visakhapatnam", "Sea Breeze Palace", 4800],
    ["Visakhapatnam", "Harbour View Hotel", 4100],
    ["Visakhapatnam", "Sunrise Residency", 3300],

    ["Bangalore", "Tech City Grand", 5000],
    ["Bangalore", "Garden City Hotel", 4400],
    ["Bangalore", "Urban Elite Inn", 3900],
    ["Bangalore", "Silicon Suites", 5600],
    ["Bangalore", "Green Leaf Residency", 3700],
    ["Bangalore", "Metro Plaza Hotel", 4600],

    ["Chennai", "Chennai Grand Hotel", 4700],
    ["Chennai", "Marina Bay Resort", 5300],
    ["Chennai", "Coastal Comfort Inn", 3800],
    ["Chennai", "Royal Marina Hotel", 4900],
    ["Chennai", "South Gate Residency", 3500],
    ["Chennai", "Blue Wave Hotel", 4200]
];

let img = [
    "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1582610116397-edb318620f90?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=600&q=80"
];

data.forEach((x, i) => {
    list.innerHTML += `
    <div class="card">
        <img src="${img[i % 6]}">

        <h3>${x[1]}</h3>

        <p>${x[0]}</p>

        <p class="price">
            ₹${x[2]} / night
        </p>

        <button onclick="book('${x[1]}','₹${x[2]} / night')">
            Book Now
        </button>
    </div>`;
});


function checkLogin() {

    if (
        email.value == "tdp@gmail.com" &&
        password.value == "tdp@2024"
    ) {
        loginPage.style.display = "none";
        main.style.display = "block";
    }
    else {
        error.innerText = "Invalid email or password";
    }
}


function logout() {
    location.reload();
}


function find() {

    let v = search.value.toLowerCase();

    document.querySelectorAll(".card").forEach(x =>
        x.style.display =
        x.innerText.toLowerCase().includes(v)
        ? "block"
        : "none"
    );
}


function book(n, p) {

    hotel.value = n;
    price.value = p;

    bookBox.style.display = "flex";
}


function closeBox() {

    bookBox.style.display = "none";
}


function confirmBooking() {

    alert("Booking confirmed successfully!");

    closeBox();
}


password.onkeydown = e => {

    if (e.key == "Enter") {
        checkLogin();
    }

};