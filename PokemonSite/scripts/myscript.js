document.body.onkeyup = function (e) {
    var answer = document.getElementById('search').value.replace(/\s/g, '');;
    var name = $('.monster .name').html();
    var number = $('.monster .number').html();
    console.log(number);
    console.log(answer);
    if (answer === name.replace(/\s/g, '')) {
        console.log('yay');
    } else if (answer === id.replace(/\s/g, '')) {
        console.log('yay');
    }
}