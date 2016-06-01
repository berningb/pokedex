document.body.onkeyup = function (e) {
    var answer = document.getElementById('search').value.replace(/\s/g, '');;
    var name = $('.monster .name').html();
    var number = $('.monster .number').html();
    console.log(name.replace(/\s/g, ''));
    console.log(number.replace(/\s/g, ''));
    console.log(answer.replace(/\s/g, ''));
    if (answer === name.replace(/\s/g, '')) {
        console.log('yay');
    } else if (answer === number.replace(/\s/g, '')) {
        console.log('yay');
    }
}