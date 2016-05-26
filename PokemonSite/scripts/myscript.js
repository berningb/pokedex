document.body.onkeyup = function (e) {
    var answer = document.getElementById('search').value.replace(/\s/g, '');;
    var name = $('.monster .name').html();
    var type = $('.monster .type').html();
    console.log(answer);
    console.log(type);
    if (answer === name.replace(/\s/g, '')) {
        console.log('yay');
    } else if (answer === type.replace(/\s/g, '')) {
        console.log('yay');
    }
}