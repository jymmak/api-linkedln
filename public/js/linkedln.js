window.addEventListener('load', function() {
  let userName = window.localStorage.getItem('user-name');
  let headline = window.localStorage.getItem('headline');
  let url = window.localStorage.getItem('url');
  $('#user').text('Welcome ' + userName);
  $('#headline').text(headline);
  $('#url').attr('href', url);
 
});
