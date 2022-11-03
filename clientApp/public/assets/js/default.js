/* eslint no-undef: */
function showNotification(message)
{
    $.toast({
        heading: 'Heads up!',
        text: message,
        position: 'top-right',
        loaderBg: '#3b98b5',
        icon: 'info',
        hideAfter: 3000,
        stack: 1
    });
}