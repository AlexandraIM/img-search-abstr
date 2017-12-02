Image Search Abstraction Layer
=========================

User Story:

- I can get the image URLs, alt text and page urls for a set of images relating to a given search string.
- I can paginate through the responses by adding a ?offset=2 parameter to the URL.
- I can get a list of the most recently submitted search strings.

### Example query usage:

> https://img-search-abstr.glitch.me/api/imagesearch/lolcats%20funny?offset=10 
> https://img-search-abstr.glitch.me/api/latest/

### Example query output:

> { url: http://images6.fanpop.com/image/photos/33600000/Funny-lolcats-lol-cats-33632376-284-177.jpg 
snippet : lol cats images Funny lolcats wallpaper and background photos ... 
thumbnail : https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBTgktnuhOQXYt_YXKHp29lWftSi6wYZfHqDPSde61sQGs2FJwc7gmvu0 
context : http://www.fanpop.com/clubs/lol-cats/images/33632376/title/funny-lolcats-photo }

### Example latest output:

> [{"term":"lolcats funny","when":"2017-12-02T15:32:09.708Z"},{"term":"dogs","when":"2017-12-02T15:21:45.875Z"},{"term":"bike","when":"2017-12-02T15:20:23.599Z"},{"term":"dubai","when":"2017-12-02T15:18:50.807Z"},{"term":"dogs","when":"2017-12-02T15:12:34.202Z"},{"term":"cats","when":"2017-12-02T14:40:13.303Z"}]
