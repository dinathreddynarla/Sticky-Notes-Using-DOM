var addnote = document.querySelector("#addnote");
addnote.addEventListener("click", () => {
    var bx = document.querySelector(".note-container");
    bx.style.display = "flex";
});

var closenote = document.querySelector("#closenote");
closenote.addEventListener("click", () => {
    var txtbx = document.querySelector("#inpbox");
    txtbx.value = "";
    var bx = document.querySelector(".note-container");
    bx.style.display = "none";
});

var colorcount = 0;
var submitnote = document.querySelector("#submitnote");
submitnote.addEventListener("click", () => {
    var maincontainer = document.querySelector(".main-container");
    var txtbx = document.querySelector("#inpbox");
    var content = txtbx.value;
    if(content==""){
        window.alert("don't give any empty Note")
    }
    else {

    const colors = [
        { bg: "#FF3DE8", text: "#000000" },  
        { bg: "#3DC2FF", text: "#000000" },  
        { bg: "#04E022", text: "#000000" },  
        { bg: "#BC83E6", text: "#000000" },  
        { bg: "#EBB328", text: "#000000" }   
    ];

    var note = document.createElement("div");
    note.className = "note";
    note.style.backgroundColor = colors[colorcount].bg;
    note.style.color = colors[colorcount].text;
    note.innerHTML = `<h1>${content}</h1>`;
    maincontainer.appendChild(note);

    note.addEventListener("dblclick", () => {
        note.classList.add("scale-out-center");
        setTimeout(() => {
            maincontainer.removeChild(note);
        }, 1000); 
    });

    if (colorcount == colors.length - 1) {
        colorcount = 0;
    } else {
        colorcount++;
    }
    txtbx.value=""
}
});
