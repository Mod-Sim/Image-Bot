1. Our team will be working on a Discord bot that will search and provide results from a Google Images search.

2. 
	1. The core problem this bot aims to solve is the inconvenience of needing to send an image from the internet to other users in a Discord server. Currently, getting the first image from a Google search requires the following steps minimum[^1]:
		1. Switch out of Discord into a new browser tab.
		2. Either entering the term you want to search for *or* going directly to [images.google.com](https://images.google.com)
		3. Either clicking the "Images" tab to load Google Images *or* entering the term you want to search for on [images.google.com](https://images.google.com)
		4. Right-clicking the image and copying the image
		5. Returning to Discord
		6. Pasting the image you want to send in a new chat message
		7. Send the message
	2. By definition, bots are agents of automation designed to automated, repetitive, and predefined tasks. Users who need to send multiple images from the internet consecutively in Discord are required to repeat these steps, meaning the time it takes to complete this process can significantly scale up.

3. 
	1. The core product idea is a Discord bot designed specifically for retrieving images from Google Images can reduce these 7 steps down to just 2. To achieve this, users would enter a command in the Discord chat composer. For example, entering `/search puppies` and delivering the message will have an image of a puppy available right away in the Discord chat. This reduces the seven-step process defined above into two steps, and doesn't require the user switch focus off of their Discord chat. A possible future version would allow for interactions with the provided result, which could come in the form of buttons that allow the user to request a different image from the same search term without needing to re-enter the search command.
	2. A basic implementation of this bot would follow the simple reactor pattern. The event will be a user sending the command to search for an image. This will trigger the bot to react by retrieving the first image from a Google Images search and to send that message in the same Discord channel where it was triggered. If the functionality to request subsequent images beyond the first result is implemented, the bot would follow a responder pattern as it needs to maintain memory of which images it has already provided.
	3. Storyboard
<img width="983" alt="Screen Shot 2022-01-30 at 1 22 19 PM" src="https://user-images.githubusercontent.com/77374947/151712206-4fb2a1d1-0d84-4139-9a2d-3171aeaf9719.png">

[^1]: Some search terms may require 1-2 fewer steps. For example, searching "chowder" provides a small image collage on the right-side of the search screen. Others, like "Stevens Institute of Technology" require scrolling down on the search page to the images snippet. These methods provide quicker access to the first few images provided by Google Images, but since they are inconsistent across search terms we chose to reject them for a process outline that applies to any search term.
