$('.btn').click((e) => {
    e.preventDefault();
    $.ajax({
        method: 'GET',
        dataType: 'json',
        url: 'https://baconipsum.com/api/?type=meat-and-filler'
    })
    .done(addTodo)
    .fail(error)
});

function addTodo(data) {
    console.log(data);
}

function error() {
    window.alert('Ooops!! there was a problem');
}