document.body.onkeyup = function (e) {
    var answer = document.getElementById('search').value.replace(/\s/g, '');

    var name = document.getElementsByClassName('monName');

    var numbers = document.getElementsByClassName('monNum');


    //    console.log(answer);

    for (i = 0; i < name.length; i++) {
        if (answer.toLowerCase() === name[i].innerHTML.toLowerCase()) {
            for (j = 0; j < name.length; j++) {
                document.getElementById("poke" + [j + 1]).style.display = "none";
            }
            document.getElementById("poke" + [i + 1]).style.display = "table-row";
            break;
        } else if (answer === numbers[i].innerHTML) {

            for (j = 0; j < numbers.length; j++) {
                document.getElementById("poke" + [j + 1]).style.display = "none";
            }
            document.getElementById("poke" + [i + 1]).style.display = "table-row";
            break;
        } else {
            for (j = 0; j < name.length; j++) {
                document.getElementById("poke" + [j + 1]).style.display = "table-row";
            }
        }
    }
}