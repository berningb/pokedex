document.body.onkeyup = function (e) {
    var answer = document.getElementById('search').value.replace(/\s/g, '');;
    var name = $('.monster .name').html();
    var type1 = $('.monster .type1').html();
    var type2 = $('.monster .type2').html();
    console.log(answer);
    console.log(type1);
    console.log(type2);
    if (answer === name.replace(/\s/g, '')) {
        console.log('yay');
    } else if (answer === type1.replace(/\s/g, '')) {
        console.log('yay');
    } else if (answer === type2.replace(/\s/g, '')) {
        console.log('yay');
    }
}