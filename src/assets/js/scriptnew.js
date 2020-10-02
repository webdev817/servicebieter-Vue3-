newhd = 2;
    $(document).on('click', '.add_option', function() {
        newhd++;
        $last = $('.option_clone').last();
        hd_Elem = $('#option_clone' + 1).clone().attr('id', 'option_clone' + newhd).fadeIn('slow');
        hd_Elem.find('.value1').attr('id', 'option_value' + newhd).attr('name', 'options_value[]');
        hd_Elem.find('.label_option').attr('id', 'label_option' + newhd).text('OPTION')
        hd_Elem.find('.close_option').attr('id', 'close' + newhd).attr('data-id', 'option_clone' + newhd);
        $($last).after(hd_Elem);
        $('#option_clone' + newhd).find('input:text').val('');
    });

    $(document).on('click', '.close_option', function() {
        var id = $(this).attr('data-id');
        $('#' + id).fadeOut(300, function() { $(this).remove(); });
        // $('#' + id).remove();
    });