Travel Experiences App User Stories

As a user, I can see a container of tour cards on the landing page.

I can see a promoted tour at the top of the page.

I can search the experiences by name/description and filter by category.

I can add experiences to my cart.

I can view my cart and edit items in it (remove, change number of people) and see my purchase total.

I can make a purchase and see my purchased experiences on my profile page.

The experiences on  my profile page can be categorized by location.

------------------------------------------------------

state = {
    user: {
        id: 1, 
        username: "Ben",
        history: [
            {id: 1, name: "December Trip", 
                experiences: [{id:1, name: "Parasailing}, {id:2, name: "Hot air ballooon"}],
                checkedOut: true
            },
             {id: 2, name: "January Trip", 
                experiences: [{id:1, name: "Parasailing}, {id:4, name: "Parawalking"}],
                checkedOut: true
            },
            {id: 3, name: "", 
                experiences: [{id:1, name: "Parasailing}, {id:2, name: "Hot air ballooon"}],
                checkedOut: false
            },
        ],

        currentCart: {id: 4, name:"", }
    }
}

---------------------------------------------------------------------------------
RELATIONSHIPS

     <!-- t/f "location" -->
<!-- user -< esperiencejoiner >- experience -->


User -< Joiner -< ExperienceJoiner >- Experience

UserSerializer(1) -> JoinerSerializer(2) -> ExperienceJoiner(3) -> Experience(4)

{   id: 1,
    username: "Ben",
    joiners: [
        {id:2, experienceJoiners:[
            {id: 3, experience: {
                id:4, name: "parasailing"}
                }
            ]
        checkedOut: true
        }
    ]
}

-----------------------

Stretch: User can have trips - another way to categorize their scheduled experiences - another joiner between a user and experiences

Stretch: have map on user's page that shows their scheduled tours and elsewhere to show and search locations.



Weekend plan:

BACK END

- DONE - nyc seed data

- DONE - events for experiences created (experience has a photo and description and name, and h)



FRONT END

- build scaffold for front end

- 



# add later: 
    # host with image, name, bio (experience belongs to host)

