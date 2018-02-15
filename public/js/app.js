window.addEventListener('load', function () {
  IN.Event.on(IN, 'auth', getProfileData);

  function onSuccess(data) {
    console.log(data);
    let name = data.firstName + ' ' + data.lastName;
    let headline = data.headline;
    let url = data.siteStandardProfileRequest.url;
    window.localStorage.setItem('user-name', name);
    window.localStorage.setItem('headline', headline);
    window.localStorage.setItem('url', url);
    window.location.href = 'views/next.html';
  }

  function onError(error) {
    console.log(error);
  }

  function getProfileData() {
    IN.API.Raw('/people/~').result(onSuccess).error(onError);
  }
});