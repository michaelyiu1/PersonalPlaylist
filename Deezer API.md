//The JavaScript SDK allows you to stream music, authenticate users and lets you access all the Deezer API endpoints.

When a user logs in and authorize your application, the SDK will retrieve the token and automaticaly use it in the nexts API calls.

There are two different ways to load the Javascript SDK depending on the data you will need to access.

Loading the SDK
If you want to make calls to the DZ API to get public data only, all you need is to copy/paste the following script on your website.

<script src="https://e-cdn-files.dzcdn.net/js/min/dz.js"></script>
You can now call the DZ.api method that will let you search, and get data from an artist, an album, a playlist, a track, or a user as soon as these are public, as well as any other public object as described in the API Objects section of the documentation.

If you need to load the SDK over https, use the following script instead.

<script src="https://e-cdns-files.dzcdn.net/js/min/dz.js"></script>
Initializing the SDK to interact with a player or a user
If you want an actual interaction between Deezer and your application, you will need to initialize the SDK.

First, you must integrate the script to your file. Then, execute the DZ.init method as done below.

To get the JavaScript SDK to run properly, you must add an extra div with the dz-root ID attrbute that will allow users to log onto Deezer from your website, authorize your application and ask any permissions you might need to access private data.

<div id="dz-root"></div>
<script src="https://e-cdn-files.dzcdn.net/js/min/dz.js"></script>
<script>
	DZ.init({
		appId  : 'YOUR_APP_ID',
		channelUrl : 'http://YOUR_DOMAIN/channel.html'
	});
</script>
Once your application authorized and the user logged in, you will be able to execute POST and DELETE actions on his/her behalf. See the DZ.login method for more information.

The channel file
The required channelUrl parameter must contain a link to a page only containing a script element pointing to the JavaScript SDK.

<script src="https://e-cdn-files.dzcdn.net/js/min/dz.js"></script> 