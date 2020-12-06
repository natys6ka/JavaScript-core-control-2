$(document).ready(function () {
    // 	Кнопка “B” задає жирність тексту, другий клік її забирає
    $(".boldText").click(function () {
        $('#textView').toggleClass('font-weight-bold');
    });
    // 	Кнопка “І” задає курсивність тексту, другий клік її забирає
    $(".italicText").click(function () {
        $('#textView').toggleClass('font-italic');
    });
    // 	Кнопка “U” задає підкресленість тексту, другий клік її забирає
    $(".underText").click(function () {
        $('#textView').toggleClass('underlineText');
    });
    // 	Кнопка “S” задає закресленість тексту, другий клік її забирає
    $(".strikeText").click(function () {
        $('#textView').toggleClass('strikeddText');
    });

    // 	Кнопка “=>” задає вирівнювання по лівому краю
    $(".leftText").click(function () {
        $('#textView').addClass('text-left');
        $('#textView').removeClass('text-center');
        $('#textView').removeClass('text-right');
    });
    // 	Кнопка “<=>” задає вирівнювання по центру 
    $(".centerText").click(function () {
        $('#textView').addClass('text-center');
        $('#textView').removeClass('text-left');
        $('#textView').removeClass('text-right');
    });
    // 	Кнопка “<=” задає вирівнювання по правому краю
    $(".rightText").click(function () {
        $('#textView').addClass('text-right');
        $('#textView').removeClass('text-left');
        $('#textView').removeClass('text-center');
    });
    // 	Кнопка “А” відкриває випадаюче меню в якому вибирається родовід шрифта
    $(".fontText").click(function () {
        $('#textView').css('font-family', this.id);
    });
    // 	Кнопка “Т” відкриває випадаюче меню в якому вибирається розмір шрифта
    $(".sizeText").click(function () {
        $('#textView').css('font-size', this.id);
    });


    // 	Кнопка “ ” відкриває випадаюче меню в якому вибирається колір тексту
    $('#colorText td').click(function () {
        $('#textView').css('color', this.id);
    });


    // 	Кнопка “ ” відкриває випадаюче меню в якому вибирається колір фону, або картинка на фон, або можна загрузити картинку вибравши її на комп’ютері

    $('#colorBckgrnd td').click(function () {
        $('#textView').css('background-color', this.id);
    });


    $('#menu1 img').click(function () {
        $('#textView').css('background-image', 'url(' + this.src + ')');
        console.log(this.src);
        // $('#colorTextModal').modal('hide');





    });


    // Залогінитись, валідація полів, розблокувати кнопку </>
    $("#opencodeText").click(function () {
        $('#codeText')[0].value = $('#textView')[0].innerHTML;
        $('#codeText')[0].hidden = false;
        $('#textView')[0].hidden = true;

        $('#editmenu')[0].hidden = false;
        $('#opencodeText')[0].hidden = true;  
        $('#editedText')[0].hidden = true;  
        $('#centeredText')[0].hidden = true;  
        $('#dropdownFontMenu')[0].hidden = true;  
        $('#dropdownMenuButton')[0].hidden = true;  
        $('.colorText')[0].hidden = true;  
        $('.colorBckgrnd')[0].hidden = true;  
        $('#lock')[0].hidden = true;  
    });

    $('#checklogin').click(function () {
        let formValid = true;
        $('input').each(function () {
            let formGroup = $(this).parents('.form-group');
            let glyphicon = formGroup.find('.form-control-feedback');
            let login = $('#login')[0].value;
            let password = $('#password')[0].value;

            if (login = '' || password == '') {
                $('#commentText')[0].innerText = 'Value is empty';
            } else if (login = 'admin' && password == '1234') {
                if (this.checkValidity()) {
                    formGroup.addClass('has-success').removeClass('has-error');
                    glyphicon.addClass('glyphicon-ok').removeClass('glyphicon-remove');
                } else {
                    formGroup.addClass('has-error').removeClass('has-success');
                    glyphicon.addClass('glyphicon-remove').removeClass('glyphicon-ok');
                    formValid = false;
                };
                if (formValid) {
                    $('#lodinModal').modal('hide');
                    $('#success-alert').removeClass('hidden');

                    //  Відобразити codeText для редагування тексту
                    $('.blockBtn').attr("disabled", false);
                    $('.unblockBtn')[0].innerHTML = '<img src="./svg/unlock-alt.svg" height="21px">';


                }
            } else {
                $('#commentText')[0].innerText = 'Please check your login or password';
            };
        });
    });


    // Зберегти зміни в редакторi
    $('#saveText').click(function (){
        $('#textView')[0].innerHTML = $('#codeText')[0].value;
        $('#codeText')[0].hidden = true;
        $('#textView')[0].hidden = false;
        $('#editmenu')[0].hidden = true;

        $('#opencodeText')[0].hidden = false;  
        $('#editedText')[0].hidden = false;  
        $('#centeredText')[0].hidden = false;  
        $('#dropdownFontMenu')[0].hidden = false;  
        $('#dropdownMenuButton')[0].hidden = false;  
        $('.colorText')[0].hidden = false;  
        $('.colorBckgrnd')[0].hidden = false;  
        $('#lock')[0].hidden = false;  
    });



































});
