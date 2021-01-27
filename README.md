# pagination-app-README

# Process

I was unfamiliar with pagination once I received the challenge, so I took it upon
myself to find any sort of documentation and videos to figure out how to learn the technique. After some help, the solution I found was to have a function that would return the paginated results of the seeded data. A for loop was used to create the objects for the data that would be paginated. With this, if there is a request for pagination without including the range, it would result in returning the entire data.

# Requirements

• Paginates according to the range format described in the first section.
• Paginates on either the id or name fields of our “app” object.
• You can use any programming language, but no libraries can be used to implement
the pagination.
• Provide some seed data to populate and test the app.

# Deliverables

• An app with a single endpoint "/apps" that returns the array of apps paginated following the specification and requirements listed above.
• A README file containing a short description of the solution implemented, what was completed, etc. This is an opportunity to explain your approach and the reasoning behind your solution.
• The app should be delivered in a git repository publicly accessible on the web.
• The app must be deployed to Heroku and available for testing.
• Bonus points: Automatic tests covering the endpoint "/apps".
