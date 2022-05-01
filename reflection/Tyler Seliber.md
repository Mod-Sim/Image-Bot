# Reflection - Tyler Seliber
Over the past two milestones, you've had the opportunity to apply several software engineering practices and processes in the design and implementation of a bot project.

## Design
1. **What was most helpful about thinking about design methods of your project?** <br>
Thinking about the design methods of our project proved really beneficial in defining its scope. By identifying the exact problem we were trying to solve and what a potential solution would look like, we were able to design UML use case diagrams on what the processes would look like. This provided us with the flows of interactions necessary to model our code after. Planning out the architecture design was also extremely helpful because it made us research the available resources to implement this project so we'd have a more concrete plan and have clear goals for what needs to be done.

2. **What was most difficult? What would you do differently?** <br>
Since we collectively had little experience with developing Discord bots, we weren't able to select definitive resources during the design phase. This came with the additional challenge of not only discovering the resources, but also analyzing which would be best to proceed with. For example, one of the major decisions was whether to base our bot on JavaScript or Python. With little experience, we were indifferent to both but needed to make an informed decision as to which to use. Additionally, due to our lack of prior experience we were not prepared for the roadblocks that came during implementation as we haven't considered them during design. If we were more familiar with the particular implementations we would like to take, we would have been able to plan better.

3. **What design methods might you want to try again in the future on another project?** <br>
For future projects, I will dedicate more time to following the many design methods before I begin to implement a solution. Identifying the problem, proposing a solution, and planning all the various parts in between (use cases, architecture, design patterns) will certainly help me to efficiently implement the solution and provide more confidence while doing so.


## Implementation
1. **What was most helpful about implementing, testing, and integration in your bot project?** <br>
The speed and relative simplicity of our Discord bot made implementation, testing, and integration very straightforward and relatively stress-free. The cababilities of Git source control (branches, commits, merging) also simplified the process as we were able to cleary indicate where certain new features were implemented and find the exact changes made for their implementation. Using JavaScript, Discord.js, and Node.js meant that we could quickly start our development bot and test changes right away. The bot only needed to run on one machine, and Discord neatly handles the rest of the processing so any computer can interact with the bot regardless of needing to run the code locally.

2. **What was most difficult? What would you do differently?** <br>
Debuggings issues was certainly the biggest challenge during implementation. We were familar with debugging tools available in traditional IDEs that allow for code-stepping and viewing the current state of variables, but we found that following the same process for the Node.js project was not as straight-forward. Since our code was being run across many different files and they were launched using Node/npm commands, it wasn't quite as simple as adding breakpoints and clicking the "debug" button in the editor. We resorted to logging certain items to the console for debugging purposes. While this certainly is a valid method, doing so quickly filled the console with information that required sifting through. Additionally, the log statements needed to be deleted after testing. All of this takes away from efficiency during the development process as well as code smell.

3. **What implementation, testing, and integration methods might you want to try again in the future on another project?** <br>
Using Git and existing libraries is certainly going to be at the top of my priority list when working on future projects. There is a fantastic open-source community that continuously improves on libraries and frameworks to make your own development simpler. Discord.js is a wonderful example, as it served as a wrapper for Discord's API with extensive documentation and detailed guides that made getting started super simple and unintimidating.


## Process
1. **What was most helpful about implementing kanban and code review in your project?** <br>
These techniques allowed us keep track of what work needs to be done and how efficiently we were able to complete it. Kanban boards provided an excellent overview of all currently open issues and pull requests and their current status. By enforcing code review, we were all required to take a deeper look into each change which helped us get a better understanding for how the code executed. It also allowed for corrections or optimizations to be made before merging the code into the main branch.

2. **What was most difficult? What would you do differently?** <br>
The most difficult aspect was adjusting to the agile development workflow. Scrum meetins were a new concept and we needed to adapt to that style of productivity. After a couple of meetings, we started to get more comfortable with the practice and feel that this helped us to be more prepared for future endeavors.

3. **What software processes or practices might you want to try again in the future on another project?** <br>
I will definitely follow the above mentioned software processes on future projects. These technqiues have proven invaluable in the software development process. It prevents developers from losing track of what needs to be done and allows for more efficient and effective development. Setting milestones and assigning responsibilities helps to ensure that everyone is on the same page and that the software will be developed in the right order.


## Overall
**Considering all the design methods, implementation practices, and software processes you've encountered---*compare and contrast* how the benefits of the different practices and how they might be useful together.**
