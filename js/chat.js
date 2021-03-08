$(document).ready(function(){
    $('.icon-chat').click(function(event) {
        $('.chat-box').toggleClass('active');
    });
    $('.conv-form-wrapper').convform({selectInputStyle: 'disable'});
})