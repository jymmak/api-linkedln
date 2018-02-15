function onLinkeInLoad() {
  IN.Event.on(IN, 'auth', getProfileData);
}

function getProfileData() {
  IN.API.Profile('me').fields('id', 'first-name', 'last-name', 'headline', 'location', 'picture-url', 'public-profile-url', 'email-address').result(displayProfileData).error(onError);
}
