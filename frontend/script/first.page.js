var typed = new Typed(".typing-text", {
    strings: ["Write a text that goes with a kitten gif for a friend having a rough day ●", "Give me ideas for a customer loyalty program in a small bookstore ● for what to do with my kids' art ●","Brainstorm names for my fantasy football team ●","Help me pick an outfit that will look good on camera ●"],
    loop: true,
    typeSpeed: 50,
    backSpeed: 25,
    backDelay: 500,
});
const allUsersBtn = document.querySelector("#allUsersBtn");

allUsersBtn.addEventListener("click", () => {
    window.location.href="./user.html"
});