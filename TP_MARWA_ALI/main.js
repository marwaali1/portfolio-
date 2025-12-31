
function openModal(title, subtitle, description) {
    document.getElementById("projectModal").style.display = "block";
    document.getElementById("modalTitle").innerText = title;
    document.getElementById("modalDescription").innerText = description;
}


function closeModal() {
    document.getElementById("projectModal").style.display = "none";
}


window.onclick = function(event) {
    const modal = document.getElementById("projectModal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Thank you for your message! I'll get back to you soon.");
    this.reset();
});