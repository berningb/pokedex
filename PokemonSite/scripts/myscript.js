document.body.onkeyup = function (e) {
    var answer = document.getElementById('search').value.replace(/\s/g, '');

    var name = document.getElementsByClassName('monName');
    


    console.log(answer);

    for (i = 0; i < name.length; i++) {
        if (answer === name[i].innerHTML) {
            for (j = 0; j < name.length; j++) {
                document.getElementById("poke" + [j+1]).style.display = "none";
            }
            document.getElementById("poke" +[i+1]).style.display = "table-row";
            break;
        }else{
            for (j = 0; j < name.length; j++) {
                document.getElementById("poke" + [j+1]).style.display = "table-row";
            }
        }
    }

    //    var number = $('.monster .number').html();
    //    console.log(number);
    //    console.log(answer);
    //    if (answer === name.replace(/\s/g, '')) {
    //        console.log('yay');
    //    } 

}