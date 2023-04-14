# FINDA
------------------------------------------------------------------------
## Welcome to Fin🐳da 

Finda is a social media app for fisher-people. Built by fisher-people for fisher-people. Share, View, Post, Like content of awesome times out there on the water.

------------------------------------------------------------------------
## Concept

The idea of Finda is a social media app targeted at people who like to fish. Users can:

* Look for examples of fish species
* Search for different types of fish
* Make post of the fish they have caught that include images and with fish tales
* And see what other fish people have caught


## API's to be used

MVP

Fish species api https://rapidapi.com/myapos--FqlEzvrlv/api/fish-species/

Uses:

* Consume the data from this api to prepopulate the fish table
* Fish id’s, images, maybe wiki links

api img 

![Imgur](https://i.imgur.com/V5VJCEn.png)

Stretch

Uploadcare - https://uploadcare.com/api/
Uses: Upload images 

Super Stretch

Google maps api https://developers.google.com/maps/documentation/maps-static/start#Markers
Use: Mark a location on the map where the fish was caught

------------------------------------------------------------------------

## ERD

![Imgur](https://i.imgur.com/bmiw41p.png)

------------------------------------------------------------------------
## RESTful Routing Chart

![Imgur](https://i.imgur.com/b4QLyHO.png)

------------------------------------------------------------------------
## Wireframe

### Create user screen
![Imgur](https://i.imgur.com/5wHGAyt.png)

### User Login Screen
![Imgur](https://i.imgur.com/l4TymSD.png)

### Landing (Feed)
![Imgur](https://i.imgur.com/d48NzTP.png)

### Show (Catch Screen)
![Imgur](https://i.imgur.com/7PD0ayy.png)

### Your Profile (Your catches)
![Imgur](https://i.imgur.com/X0O9m8N.png)

### Your Bucket List
![Imgur](https://i.imgur.com/xdaY5NS.png)

### General Fish View
![Imgur](https://i.imgur.com/KNaPwJh.png)

### Fish Search
![Imgur](https://i.imgur.com/nBAFVy7.png)

### Add a post
![Imgur](https://i.imgur.com/D5Lgd2O.png)


------------------------------------------------------------------------
## Installation instructions

1. Make a new directory
1. Fork and clone this repository
1. In the terminmal run the command 'npm i' to install all the dependencies
1. Signup for rapid api and get the key for the fish species api https://rapidapi.com/myapos--FqlEzvrlv/api/fish-species/
1. Create a .env file and add you fish api key as "fishy = 'YOUR API KEY' 
1. Add your crptoJs secret key to the .env file "ENC_KEY = 'YOUR secret key
1. Signup for uploadcare and retrieve thier public api key from your account https://uploadcare.com/api/
1. In the partials/header file add your public api key where it says UPLOADCARE_PUBLIC_KEY = "API KEY"
1. In the terminal run "sequelize db:migrate" to create the data tables
1. In the terminal run the seeder file by using this command 'node seeders/fishSeeder.js'

------------------------------------------------------------------------
## User Stories

MVP

* As a user I want to be able to search for a fish by name so that I can see what it looks like
* As a user I want to be able to view a bunch of fish species incase i don’t know what fish I caught
* As a user I want to be able to log my catch
* As a user I want to be able to remove my catch
* As a user I want to be to be able to see another user's catch
* As a user I want to be able to see where the fish was caught
* As a user I want to be able to find a fish and see the related catches of the fish

Stretch

* As a user I want to be able to find a user and see all their catches
* As a User I want to add a fish to my fishing bucketlist


------------------------------------------------------------------------

## MVP

* Create User/Login/Auth
* Consume fishdata api and seed fish data table
* Create and populate a screen that displays all fish catchs from all users
* Create and populate a screen that displays the users catches
* User can create a post with fish name, image, and description/size/length
* User can update the description of their specific post
* User can delete thier post
* User can see a list of all fish in data table
* User can search for a specific fish

-------------------------------------------------------------------------
## Stretch Goals
* upload images using the cloudinary api 
* Create and populate a screen that displays other users catches
* Create and display a screen that displays catches by fish id/name
* Add to a fishing bucket list
* Remove from a fishing bucket list
 

## Super Stretch Goals
* Add catch locations using google api

--------------------------------------------------------------------------
## Potential roadblocks

* Uploading images into the cloud using cloudinary api
* Learning how to implement the google maps api to add catch location

### Roadblocks actually hit

* Ran into an roodblock when trying to send information from multiple tables in one action. I could not figure out why I wasn't getting the primary key of the user_fish table. 
    - The solution came after talking to Instructor weston who pointed me the table relations. From there I went back to the docs then set the relationary data correctly which then gave me the data I needed. This one piece was reusable across multiple pages as I use the same data in multiple places

* Ran into another roadblock when trying to set my project up to use import instead of require because I did not see that the uploadcare documentation had a require option . That set me back 2 hours.
    - I decided to step back and do more digging into the docs I just decided to try using the require method with the information from their import example and it worked🤷

--------------------------------------------------------------------------

## Post project reflection

* I think I should have taken more time to understand my data tables and how they would relate to each other first before starting the project. the place where I spent the most time was trying to figure out how to get relational data from the tables.
* Also I would not do my own custom css as that burned more time where I could have spent on functionality.
    - with that said though I think that taking a break from functionality to look work on style gave me a reset and helped me with my functionality when I got back to it

-----------------------------------------------------------------------------

## Future functionality
* Add to bucketlist
* Add catch from bucketlist
* Comment on a post
* Like a post





