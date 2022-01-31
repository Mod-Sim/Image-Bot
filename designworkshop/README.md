1. Our team will be working on a Discord bot that will search and provide results from a Google Images search.

2. 
	1. The core problem this bot aims to solve is the inconvenience of needing to send an image from the internet to other users in a Discord server. Currently, getting the first image from a Google search requires the following steps minimum[^1]:
		1. Switch out of Discord into a new browser tab.
		2. Either entering the term you want to search for *or* going directly to images.google.com
		3. Either clicking the "Images" tab to load Google Images *or* entering the term you want to search for on images.google.com
		4. Right-clicking the image and copying the image
		5. Returning to Discord
		6. Pasting the image you want to send in a new chat message
		7. Send the message
	2. By definition, bots are agents of automation designed to automated, repetitive, and predefined tasks. A Discord bot designed specifically for retrieving images from Google Images can reduce these 7 steps down to just 2. The proposed efficiency will significantly scale up when Discord users need to send many images from the internet consecutively.

3. 
	1. 
	2. 
	3. Storyboard
<img width="983" alt="Screen Shot 2022-01-30 at 1 22 19 PM" src="https://user-images.githubusercontent.com/77374947/151712206-4fb2a1d1-0d84-4139-9a2d-3171aeaf9719.png">

[^1]: Some search terms may require 1-2 fewer steps. For example, searching "chowder" provides a small image collage on the right-side of the search screen. Others, like "Stevens Institute of Technology" require scrolling down on the search page to the images snippet. These methods provide quicker access to the first few images provided by Google Images, but since they are inconsistent across search terms we chose to reject them for a process outline that applies to any search term.
