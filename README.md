
# Ticketing System - Final Project Assignment


# Contents

General Project Requirements        3

Development Requirements        5

Optional Requirements        5

Deliverables        6

Public Project Defense        6

Final Projects Examples From Previous Years        7

# **General Project Requirements**

**Angular Final Project**

This document describes the  **final project assignment**  for the  **Angular**  course at Telerik Academy.

**Project Description**

A large corporation consists of multiple teams which develop products and provide services both for internal user and for end clients. For example, a database management team may request new instances from the company cloud infrastructure team, while a software developer may request commit rights to a repo from the team lead, or an employee can request a new PC keyboard. To track requests, corporations use request portals (aka **Ticketing Systems** ) where users create requests and the responsible teams are notified.

Your task is to create such system using **Angular.** The system should allow creating tickets with information for the issue, assigning tickets to the responsible person, attaching comments to the tickets with questions and progress updates, as well as reassigning the ticket and marking its current status until it reaches &quot;COMPLETED&quot;. For an example of such system, look at Atlassian JIRA. See an example ticket here: [https://jira.atlassian.com/browse/CONFCLOUD-57005](https://jira.atlassian.com/browse/CONFCLOUD-57005)

# **Public Part**

The  **public part**  of your projects should be  **visible without authentication**.

- Application **MUST** have public home pagе
- Application **MUST** have register functionality
- Application **MUST** have login functionality



# **Private Part (Users only)**

**Registered users**   **MUST** have private area in the web application accessible after  **successful login** , where they could see all tickets assigned to them, all tickets where the user is the requester, a list of all the teams the user is part of and optionally a list of pending team invitations (if no other notification method was implemented).

- Users **MUST** be able to create teams consisting of other users (company employees). A team **MUST** have a queue containing the team&#39;s tickets.

- Team members **SHOULD** be able to invite other users into the team and each individual user **SHOULD** be able to leave the team. The invited users **SHOULD** receive notification (pop up, email, desktop notification, static list of invitations from the user&#39;s private area – all are fine).
- A user **MUST** be presented with a UI which allows him to create a ticket for a team he is a member in, enter the required ticket information and then &quot;SUBMIT&quot; the ticket. The newly created ticket is added to the responsible team&#39;s queue and is visible on the assignee&#39;s and requester&#39;s private areas.

- Each ticket **MUST** have id, title, description, labels, status, estimated time for finishing the job, requester (normally the creator of the ticket), assignee and comment section.

- The tickets **COULD** have attachments functionality (upload screenshots, files, etc.).

- The team members **MUST** be able to view the newly created ticket and its data, post comments, change its status (e.g. to COMPLETE), or assign it to themselves or another team member or to the requester (asking them to add more info). The assignee **SHOULD** receive a notification.

- A user **COULD** be able to search for а ticket in the team&#39;s queue by: title, label and assignee.

- Once the ticket&#39;s status has been changed to COMPLETE, the requester **SHOULD** receive a notification, after which they can either reopen the ticket - which changes its state to REOPENED and reassigns it to the last team member it was assigned to or close it - which takes it out of the team&#39;s queue. The requester **SHOULD** be able to close a ticket at any time. A closed ticket **MUST NOT** be able to be reopened

- The tickets **COULD** have &quot;escalation&quot; contact who gets notified in case of problems or complaints regarding the ticket. If the outstanding ticket approaches the estimated deadline, the escalation contact **SHOULD** receive a notification

- Users **COULD** be able to create a ticket &quot;on behalf of&quot; someone else as requester

# **Administration Part (Optional requirement)**

**System administrators**  should have administrative access to the system and permissions to administer all major information objects in the system.

- Administrators **COULD** view all tickets and teams.

- Administrators **COULD** be able to close any ticket.

- Administrators **COULD** be able to add and remove any user from any team.

- Administrators **COULD** be able to see all teams&#39; queues.

- Administrators **COULD** be able to create other administrators.

- Any changes to ticket status, assignee, ticket information (title and/or description) edits, user registration and user password change **COULD** be reflected in an audit log visible to administrators which **MUST NOT** be editable or modifiable.

# **Development Requirements**

Your Web application should use the following technologies, frameworks and development techniques:

- Use  **Angular**  and  **preferably Visual Studio Code**
- Create beautiful and responsive UI
  - Implement responsive UI using Bootstrap 3 or 4, or Materialize or don&#39;t use a framework at all
  - You may change the standard theme and modify it to apply own web design and visual styles
- Use modules to split your application logic
  - Core, Shared and Feature modules
- Create several  **different pipes**  and use them
- Create several  **different directives**  and use them
- Create several  **modules**  and use them in the  **routing**
- Use lazy loading for the routing
  - Decide on the strategy used
- Use guards to prevent the user to access the routes
- All of the data should be loaded from a web server using  **services**
  - You can either use Firebase, Kinvey or any other back-end service.
  - Or you can use your own server written in Node.js, ASP.NET WebAPI or any other technology
- Unit test **a few components**
- Your project should pass the default TS linting configuration without any errors
- You can use Angular CLI
  - Or Webpack, SystemJS and any other module loader/bundler
- Your application should compile, work and produce an adequate result
- Use GitHub and take advantage of the  **branches**  for writing your features.
- Documentation** of the project and project architecture (as .md file, including screenshots)

# **Optional Requirements**

- Write integration tests
- Use reactive forms
- Originality of the implementation (uniqueness)
- Host your application in the web (any public hosting provider of your choice)
- Not every user in an enterprise has the same access rights. Your application **COULD** allow different actions to different classes of users. For example, only a certain role of users **COULD** have the ability to create teams, create tickets or change ticket&#39;s status. For the purpose of your project, users can simply specify their roles/entitlements when signing up (user, team lead and project owner). You **COULD** extend your application so that only the team lead can invite and remove users from the team, the project owner could have full control over the team&#39;s tickets (open, reopen, close).
- BONUS: &quot;Progressify&quot; your app (aka extend your app into a PWA – Progressive Web App)
  - There should not be any failed PWA audits in Google&#39;s Lighthouse.
  - Opening your app on a mobile device should prompt the user to add it to the home screen.
  - Your app should display something (something simple like the logo and some text) when no network connectivity.
  - Your new and shiny PWA app should send desktop notifications in addition to the normal notifications you have implemented so far as a part of this assignment.

# **Deliverables**

Put the following in a  **ZIP archive**  and submit it:

- The  **source code**  (everything except /bin/, /obj/, /packages/)
- The project documentation
- Screenshots of your application
- If hosted online - the URL of the application

# **Public Project Defense**

Each student must make a  **public defense**  of its work to the trainers, Partner and students (~30-40 minutes). It includes:

- Live  **demonstration**  of the developed web application (please prepare sample data)
- Explain application structure and its  **source code**
- Show the  **commit logs**  in the source control repository to prove a contribution from all team members

Many projects in the enterprise suffer from degradation of design and increasing complexity over time, leading them to develop defects and gradually become unmanageable.

We value greatly teams who are able to do their job cleanly with a logical and maintainable design, without either unnecessary abstraction or ad hoc hacks.

You need to understand the system you have created. Any defects or incomplete functionality must be properly documented and secured. It&#39;s OK if the proof of concept of your application has flaws or is missing one or two **MUST**&#39;s. What&#39;s not OK is if you don&#39;t know what&#39;s working and what isn&#39;t and if you present an incomplete project as functional.

Some things you need to be able to explain during your project presentation:

- What are the most important things you&#39;ve learned while working on this project?
- What are the worst &quot;hacks&quot; in the project, or where do you think it needs more work?
- What would you do differently if you were implementing the system again?

# **Final projects examples from previous years**

- [https://pizza-ng.herokuapp.com/home](https://pizza-ng.herokuapp.com/home)
  - https://github.com/TeamElfinBison/PizzaNG
- [https://the-godly-chimpanzees.firebaseapp.com/home](https://the-godly-chimpanzees.firebaseapp.com/home)
  - https://github.com/teamgodlychimpanzees/thezoo
- [https://findaroommate.herokuapp.com/offers/all](https://findaroommate.herokuapp.com/offers/all)
  - https://github.com/TheMomentousOwls/FindARoomMate
- [https://telerik-porftolios.herokuapp.com/portfolios/all](https://telerik-porftolios.herokuapp.com/portfolios/all)
  - https://github.com/TelerikTeamTheMaliciousPorcupines/WebPortfolios
