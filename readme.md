To run app - open ./build/index.html in a browser

Built using
- React
- Redux
- Webpack

Requirements state to display list of top artists by extracting this from a
request to the API for top tracks.
API call - https://api-v2.hearthis.at/feed/?type=popular&page=1&count=5
The service doesn't really focus on artists. There is a key for "tagged_artists"
but it is usually empty
I will display a list of the users that created the content on heart this at

Call for individual user tracks -
https://api-v2.hearthis.at/<permalink>/?type=tracks&page=1&count=20
