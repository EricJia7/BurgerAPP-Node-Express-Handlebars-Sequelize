$(function() {

    $('#submitBtn').on('click', (event) => {
        event.preventDefault();
        const nameInput = $('#inputName').val().trim();
        if(nameInput === '') {return;};
        const newBurger = {
            name:nameInput
        };
        $.ajax('/api/burgers', {
            type: 'POST',
            data: newBurger
        }).then(() => {
            location.reload();
        })
    });

    $('.devour_burger').on('click', (event) => {
        event.preventDefault();
        const id = $(event.currentTarget).data('id');
        console.log(`/api/burgers/${id}`);

        $.ajax('/api/burgers/'+ id, {
            type: 'PUT',
        }).then(() => {
            location.reload();
        })
    });

});

