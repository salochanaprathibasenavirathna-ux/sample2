let fakeUsers = [
    { name: "Kasun Perera", role: "Software Engineer", email: "kasun@example.com", img: "https://randomuser.me/api/portraits/men/32.jpg" },
    { name: "Nimesha Silva", role: "UI/UX Designer", email: "nimesha@example.com", img: "https://randomuser.me/api/portraits/women/44.jpg" },
    { name: "Avishka Fernando", role: "Data Analyst", email: "avishka@example.com", img: "https://randomuser.me/api/portraits/men/85.jpg" },
    { name: "Chathurika Mendis", role: "Project Manager", email: "chathurika@example.com", img: "https://randomuser.me/api/portraits/women/68.jpg" }
];

const container = document.getElementById("card-container");
const loadBtn = document.getElementById("load-btn");
const profileBtn = document.getElementById("profile-btn");
const settingsBtn = document.getElementById("settings-btn");
const navProfile = document.getElementById("nav-profile");
const navSettings = document.getElementById("nav-settings");

const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modal-title");
const modalBody = document.getElementById("modal-body");
const closeBtn = document.querySelector(".close-btn");

// Display Users on Dashboard
function displayUsers() {
    container.innerHTML = ""; 
    fakeUsers.forEach(user => {
        const card = document.createElement("div");
        card.classList.add("profile-card");
        
        card.innerHTML = `
            <img src="${user.img}" alt="${user.name}">
            <h3>${user.name}</h3>
            <p>${user.email}</p>
            <span>${user.role}</span>
        `;
        
        container.appendChild(card);
    });
}

displayUsers();

// Randomize Data Button
loadBtn.addEventListener("click", () => {
    fakeUsers.sort(() => Math.random() - 0.5);
    displayUsers();
});

// Open Modal Function
function openModal(title, contentHTML) {
    modalTitle.textContent = title;
    modalBody.innerHTML = contentHTML;
    modal.style.display = "flex";
}

// Close Modal
closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
});

window.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});

// --- PROFILE FUNCTION ---
function showProfile() {
    let profileContent = `
        <div style="text-align: center;">
            <img src="https://randomuser.me/api/portraits/men/1.jpg" style="width: 80px; height: 80px; border-radius: 50%; margin-bottom: 10px;">
            <h3>Admin User</h3>
            <p style="color: gray;">admin@demoapp.com</p>
            <p style="margin-top: 10px; font-size: 14px; background: #e8f8f5; padding: 8px; border-radius: 5px;">Status: Active Admin</p>
        </div>
    `;
    openModal("My Profile", profileContent);
}

profileBtn.addEventListener("click", showProfile);
navProfile.addEventListener("click", (e) => {
    e.preventDefault();
    showProfile();
});

// --- SETTINGS FUNCTION ---
function showSettings() {
    let settingsContent = `
        <div class="form-group">
            <label>Theme Preference</label>
            <select id="theme-select">
                <option value="light">Light Mode</option>
                <option value="dark">Dark Mode (Demo)</option>
            </select>
        </div>
        <div class="form-group">
            <label>Notifications</label>
            <input type="checkbox" id="notif-check" checked> Enable Email Notifications
        </div>
        <button class="save-btn" onclick="saveSettings()">Save Changes</button>
    `;
    openModal("App Settings", settingsContent);
}

settingsBtn.addEventListener("click", showSettings);
navSettings.addEventListener("click", (e) => {
    e.preventDefault();
    showSettings();
});

// Save Settings Action
window.saveSettings = function() {
    alert("Settings saved successfully!");
    modal.style.display = "none";
}