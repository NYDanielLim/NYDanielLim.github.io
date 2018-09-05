function scrollToProjects () {
    var position = $("#projectTop").position();
    window.scrollTo({top: position.top, behavior: "smooth"});
}
function scrollToExperience () {
    var position = $("#experienceBox").position();
    window.scrollTo({top: position.top, behavior: "smooth"});
}
function scrollToTop () {
    var position = $("#introScreen").position();
    window.scrollTo({top: position.top, behavior: "smooth"});
}