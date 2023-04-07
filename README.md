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

Cloudinary ap - https://cloudinary.com/documentation/image_upload_api_reference
Uses: Upload images 

Super Stretch

Google maps api https://developers.google.com/maps/documentation/maps-static/start#Markers
Use: Mark a location on the map where the fish was caught

------------------------------------------------------------------------

## ERD

![Imgur](https://i.imgur.com/UfAf8Gi.png)

------------------------------------------------------------------------
## RESTful Routing Chart

![Imgur](https://i.imgur.com/SReL4B4.png)

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
## User Stories

* As a user I want to be able to search for a fish by name so that I can see what it looks like
* As a user I want to be able to view a bunch of fish species incase i don’t know what fish I caught
* As a user I want to be able to log my catch
* As a user I want to be able to remove my catch
* As a User I want to add a fish to my fishing bucketlist
* As a user I want to be to be able to see another user's catch
* As a user I want to be able to see where the fish was caught
* As a user I want to be able to find a user and see all their catches
* As a user I want to be able to find a fish and see the related catches of the fish


------------------------------------------------------------------------




## MVP

* Create User/Login/Auth
* Consume fishdata api and seed fish data table
* Create and populate a screen that displays all fish catchs from all users
* Create and populate a screen that displays the users catches
* Create and populate a screen that displays other users catches
* Create and display a screen that displays catches by fish id/name
* Be able to see all catches of a specific type of fish
* User can create a post with fish name, image, and description/size/length
* User can update the description of their specific post
* User can delete thier post
* User can see a list of all fish in data table
* User can search for a specific fish

-------------------------------------------------------------------------
## Stretch Goals
* upload images using the cloudinary api 
* Add to a fishing bucket list
* Remove from a fishing bucket list
 

## Super Stretch Goals
* Add catch locations using google api

--------------------------------------------------------------------------
## Potential roadblocks

* Uploading images into the cloud using cloudinary api
* Learning how to implement the google maps api to add catch location




