function skillsMember() {
    var member = document.getElementById("member");
    var memberText = member.options[member.selectedIndex].text;
    var memberValue = member.options[member.selectedIndex].value;
    var skill = document.getElementById("skill");
    skill.innerHTML = "";
    if (memberValue == "1") {
        var opt = document.createElement("option");
        opt.value = "1";
        opt.innerHTML = "Skill 1";
        skill.appendChild(opt);
        opt = document.createElement("option");
        opt.value = "2";
        opt.innerHTML = "Skill 2";
        skill.appendChild(opt);
    } else if (memberValue == "2") {
        var opt = document.createElement("option");
        opt.value = "3";
        opt.innerHTML = "Skill 3";
        skill.appendChild(opt);
        opt = document.createElement("option");
        opt.value = "4";
        opt.innerHTML = "Skill 4";
        skill.appendChild(opt);
    }
}