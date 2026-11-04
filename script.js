// CHAT SEARCH

const searchInput = document.getElementById("searchInput");

const chats = document.querySelectorAll(".chat");

const emptyState = document.getElementById("emptyState");


searchInput.addEventListener("input", function() {

    const searchValue = this.value.toLowerCase().trim();

    let visibleChats = 0;

    chats.forEach(function(chat) {

        const chatText = chat.innerText.toLowerCase();

        if (chatText.includes(searchValue)) {

            chat.style.display = "flex";

            visibleChats++;

        } else {

            chat.style.display = "none";

        }

    });

    emptyState.hidden = visibleChats !== 0;

});


// BOTTOM NAVIGATION

const navItems = document.querySelectorAll(".nav-item");

navItems.forEach(function(item) {

    item.addEventListener("click", function() {

        navItems.forEach(function(nav) {

            nav.classList.remove("active");

        });

        this.classList.add("active");

    });

});
