# Final Report

## Problem
Currently on Discord, there is no feature that allows the user to search and send pictures to others straight from the platform itself. Users have to go onto their browser and search, choose, and copy/download the picture they want and go back to Discord and send it to the other party. With our bot, we eliminated all these extra steps and made it possible for the user to search, browse, and send a picture all in one command.

## Features
Out bot allows users to search for and browse images powered by Google Images. To implement this, we took advantage of Discord's new slash commands for an optimal user experience. To search for images, users use the `/search ` command, which prompts for a search term/phrase. An example of using `/search bell labs` can be seen below:

<img width="517" alt="Search Example" src="https://user-images.githubusercontent.com/42685071/167278448-6464d68c-5761-424e-b9d1-2fe3826eab1a.png">

Search results are formatted as message embeds, and include the following:
- Message indicating the search term with a hyperlink to the custom search engine's webpage for that search term
- An indicator of which result is being displayed
- The title of the webpage that the image is from
- The name of the website that the image is from
- The image itself

In addition, there are buttons below the embed that allow users to interact with the results. Users can browse between image results, and the message embed dynamically updates. There is an additional button to view the original website that image was published on.

## Reflection
Overall, the team is very satisfied by the work that was produced. It was everyone's first time creating a Discord bot so we all struggled on coding it. While we all had our own difficulties with this bot, we learned a lot, not just with coding, but general software management practices. From designing the 
class diagrams for our bot to actually implementing features, we all learned valuable skills that we will use in the future. 

The implementation phase was the most difficult for the team because it was everyone's first time making a Discord bot. Some aspects of the implementation took more time than we thought, trying to connect the image API to our bot was difficult and we spent a lot of time researching on how to fix our problems. We spent a lot of time live coding, because it was easier for us to get the work done on one device and not have to deal with any potential problems that may arise from everyone on the team merging their code. 

The team learned a lot of useful development practices throughout the duration of the project. We were introduced to Kanban boards at the beginning of the semester and it has made creating and assigning tasks to members so much easier. Everyone knew what the status of each task was and were able to work accordingly to what needed to be done. While testing our bot, we had several servers dedicated to testing our bot. We had both a production and development bot server so we could test whatever we committed without having to fear that we'll break something. 


## Limitations 
One of our biggest limitations was not being able to find time where everyone could meet and do the project together. Instead, we met mainly on Discord and communicated all our problems and questions to each other on the platform. Because we did not meet in person, whenever we had problems with our code, it was difficult to convey the issue and solve it online.

In terms of bot functionality, one limitation is that some images will not be displayed. This is due to an issue with Discord's API where certain image URLs are flagged as not "well formatted" so they cannot be embedded in the message. One workaround is to download the image locally to the server and then upload and attach it to message responses, but this will increase response time and also the computational resources necessary, which may degreade user experience. More information can be found in issue [#30](https://github.com/Mod-Sim/Image-Bot/issues/30). 

## Future Work
While we made our bot do everything we wanted it to do (search and post an image), if we were to continue this project in the future, we'd want to implement more advanced features. 

One feature we'd want to implement is the user can privately search and browse for an image. Currently, when the user searches for an image, it is posted publicly on the channel it was called from. With the private search feature, the user can privately search and browse for a picture and at the end choose if they want to post the picture publicly. More information can be found in issue [#26](https://github.com/Mod-Sim/Image-Bot/issues/26)

## Presentation video
https://user-images.githubusercontent.com/42685071/167313637-585ab7fc-f07f-4308-9c81-ab83834d33d6.mp4
