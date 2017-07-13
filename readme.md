To run app - npm start or npm build to create bundle

##Built using
- React
- Redux
- Webpack
- React Audio Player (wrapper for html5 audio API)

##Requirements

View enclosed PDF.

Requirements state to display list of top artists by extracting this from a
request to the API for top tracks.

API call - https://api-v2.hearthis.at/feed/?type=popular&page=1&count=5
The service doesn't really focus on artists. There is a key for "tagged_artists"
but it is usually empty
I will display a list of the users that created the content on heart this at

Call for individual user tracks -
https://api-v2.hearthis.at/<permalink>/?type=tracks&page=1&count=20

##todo
 - background play when navigate to other artists, etc....
 - prefetch and pagination
 - clean up style and UX

##future dev
 - routing
 - intelligent check for data already in app before making an API request
 - custom build player for better design
 - design....

##background

A coding demo for Mimi Technologies, Berlin.

Built in 6 hrs one Sunday, still a bit of work to do but posting or project will just get lost on my computer.

...didn't get further in process due to code "lacked a bit of organization and structure"

I thought I'd over structred the thing for such a small app but you never stop learning in this game :)

If anyone comes across this I'd love some feedback and ways to improve, as it stands I probably won't get to work on this anytime soon but if someone is interested in developing this further let me know and we can maybe collaborate on it.

Best way to get me is either on here through issue tracker or via Twitter - jjmax75
