##############################################################################################################

# SEED DATA INCLUDES: 20 EXPERIENCES FOR NEW YORK, EACH WITH ONE OR MORE EVENTS / WEEK THROUGH 2020

##############################################################################################################

# DELETE ALL EXISTING DATA

1.times do
    User.destroy_all
    Event.destroy_all
    Experience.destroy_all
    Location.destroy_all
    Favorite.destroy_all
    Save.destroy_all
    Trip.destroy_all
end

##############################################################################################################

# CREATE CITIES

new_york_city = nil, rome = nil, mexico_city = nil, los_angeles = nil, tokyo = nil, paris = nil, london = nil
1.times do
    new_york_city = Location.create(name: "New York City", image: "https://images.unsplash.com/flagged/photo-1575597255483-55f2afb6f42c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&h=1000&q=100")
    rome = Location.create(name: "Rome", image: "https://images.unsplash.com/photo-1529155157179-963abcaa4949?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjF9&auto=format&fit=crop&w=1000&h=1000&q=100")
        # rome alt img https://images.unsplash.com/photo-1529260830199-42c24126f198?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&h=1000&q=100
    mexico_city = Location.create(name: "Mexico City", image: "https://images.unsplash.com/photo-1518659526054-190340b32735?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&h=1000&q=100")
    los_angeles = Location.create(name: "Los Angeles", image: "https://images.unsplash.com/photo-1506190503914-c7c7a69d4ce5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&h=1000&q=100")
    tokyo = Location.create(name: "Tokyo", image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&h=1000&q=100")
    paris = Location.create(name: "Paris", image: "https://images.unsplash.com/photo-1522093007474-d86e9bf7ba6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&h=1000&q=100")
    london = Location.create(name: "London", image: "https://images.unsplash.com/photo-1503780099440-e6ab046a1d71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&h=1000&q=100")
end

##############################################################################################################

# CREATE CATEGORIES

food = nil, outdoors = nil, culture = nil, nightlife = nil, history = nil
1.times do
    food = Category.create(name: "Food", image: "https://images.unsplash.com/photo-1547573854-74d2a71d0826?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&h=1000&q=100")
    outdoors = Category.create(name: "Outdoors", image: "https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&h=1000&q=100")
    culture = Category.create(name: "Culture", image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&h=1000&q=100")
    nightlife = Category.create(name: "Nightlife", image: "https://images.unsplash.com/photo-1497911174120-042e550e7e0a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&h=1000&q=100")
        # nightlife alt img https://images.unsplash.com/photo-1562049070-7e003d30a3d9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&h=1000&q=100
        # nightlife alt img https://images.unsplash.com/photo-1541532713592-79a0317b6b77?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&h=1000&q=100
    history = Category.create(name: "Historical", image: "https://images.unsplash.com/photo-1569759276108-31b8e7e43e7b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&h=1000&q=100")
        # historical alt img https://images.unsplash.com/photo-1575379972263-2f15a5c78236?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&h=1000&q=100
end

##############################################################################################################

# CREATE EXPERIENCES

1.times do

    new_york_city_experience_templates = [
        {
            name: "See It All in a Day",
            quota: 15,
            category: culture,
            image: "https://lh3.googleusercontent.com/proxy/vWLJq-5vjphKhhp0ahP5NHayjbyeYbv-9HyWrSWBIeONN7vUEuHrUBTpvSladDbyR5kcLjQCFapbGblRfA3J6UQ3vFaTQRoOevwRr77Jg-pP3wc9izPY6P-BNJfEeGZcPHuAwpIPPJdLPl9ijcw"
        },
        {
            name: "Highlights Bike Tour",
            quota: 16,
            category: outdoors,
            image: "https://patch.com/img/cdn20/users/22965231/20190503/104754/styles/patch_image/public/2019-td-fiveborobiketour-credit-kenji-edmonds-20190503104705-01547300.jpg?width=725"
        },
        {
            name: "Italian Home Cooking Class & Dinner",
            quota: 8,
            category: food,
            image: "https://d3rr2gvhjw0wwy.cloudfront.net/uploads/activity_galleries/142146/2000x2000-0-70-cb8f184feaa4189879595e79cb1e521b.jpg"
        },
        {
            name: "NYC Bar Crawl",
            quota: 12,
            category: nightlife,
            image: "https://media.tacdn.com/media/attractions-splice-spp-674x446/09/b3/ab/52.jpg"
        },
        {
            name: "History Walk",
            quota: 15,
            category: history,
            image: "https://d3rr2gvhjw0wwy.cloudfront.net/uploads/activity_galleries/142146/2000x2000-0-70-cb8f184feaa4189879595e79cb1e521b.jpg"
        },
        {
            name: "Urban Spelunking",
            quota: 8,
            category: outdoors,
            image: "https://upload.wikimedia.org/wikipedia/commons/8/82/Urban_Explorer_in_the_entrance_of_technical_gallery.jpg",
            description: "See the hidden side of Manhattan underneath everything else. Battle rat kings and mingle with mole people. \n\"It's not safe. Don't do it.\" -Jo from Milwaukee "
        },
        {
            name: "Paint & Sip Art Class",
            quota: 25,
            category: culture,
            image: "https://www.burlingtonpaintandsip.com/wp-content/uploads/2018/03/paint-sip-home-hero.jpg"
        },
        {
            name: "NYC Rooftop Lounge Tour",
            quota: 15,
            category: nightlife,
            image: "https://cdn.shopify.com/s/files/1/1003/1940/products/terrazas-panoramicas-nueva-york-1_20197a26-03c4-4038-b960-45f8cbb2c40a.jpg?v=1560984871"
        },
        {
            name: "Hip Hop History Tour",
            quota: 15,
            category: culture,
            image: "https://www.fodors.com/wp-content/uploads/2018/09/Unique-NYC-Tours-Hush-Hip-Hop-Tour-975x650.jpg"
        },
        {
            name: "Photoshoots in Famous NYC Locations",
            quota: 5,
            category: culture,
            image: "http://weekendwishing.com/wp-content/uploads/2017/06/BrooklynBridge-0953.jpg"
        },
        {
            name: "Hidden Food Gems",
            quota: 8,
            category: food,
            image: "https://www.fodors.com/wp-content/uploads/2018/09/Unique-NYC-Tours-Visit-Hasidim.jpg"
        },
        {
            name: "The Hidden History of Manhattan",
            quota: 12,
            category: history,
            image: "https://si.wsj.net/public/resources/images/BN-VJ617_NYMETR_M_20171002122039.jpg"
        },
        {
            name: "Central Park Bike Tour",
            quota: 15,
            category: outdoors,
            image: "https://img.grouponcdn.com/deal/24ecaU1pYoJsBVYQaScLqj17MmhS/24-1500x900/v1/c700x420.jpg"
        },
        {
            name: "Oldest Bars in NYC Pub Crawl",
            quota: 12,
            category: nightlife,
            image: "https://lh3.googleusercontent.com/p/AF1QipOw_R8NojZ7YCM0Vwcmyq4pugUDWRmwqyVDOla3=s1600-w1600"
        },
        {
            name: "Folk Revival Greenwich Village History Tour",
            quota: 12,
            category: history,
            image: "https://cdn-image.departures.com/sites/default/files/styles/responsive_900x600/public/1533849218/greenwich-village-architecture-new-york-WVILLAGEBOOKTOUR0818.jpg?itok=jlq2GRbt"
        },
        {
            name: "How to Bang Cowbells Like a Local with Jim Cramer",
            quota: 15,
            category: culture,
            image: "https://imgflip.com/s/meme/Mad-Money-Jim-Cramer.jpg"
        },
        {
            name: "Pizza Tour NYC",
            quota: 12,
            category: food,
            image: "https://www.fodors.com/wp-content/uploads/2018/09/Unique-NYC-Tours-Scotts-Pizza-Tour-975x650.jpg"
        },
        {
            name: "Hamilton and Revolutionary New York History Tour",
            quota: 12,
            category: history,
            image: "https://www.fodors.com/wp-content/uploads/2018/09/Unique-NYC-Tours-Young-Scrappy-and-Hungry-975x650.jpg",
            description: "Whether you’re a fan of revolutionary history, musical theatre, or both, the Young, Scrappy and Hungry: Hamilton and Revolutionary New York Tour promises to educate and inspire. New York City played a key role in the Revolutionary War and the birth of the United States. The tour weaves through the politics and history of Colonial America and illuminates one of its most important figures and Founding Father, Alexander Hamilton."
        },
        {
            name: "Kenny Kramer's Reality Tour",
            quota: 20,
            category: culture,
            image: "https://www.fodors.com/wp-content/uploads/2018/09/Unique-NYC-Tours-Kenny-Kramer-Reality-Tour-975x650.jpg",
            description: "None other than the real Kenny Kramer himself leads the most uniquely authentic Seinfeld tour in town. The Kenny Kramer Reality Tour is a theatrical multi-media tour that delves into the story behind the show, as well the history of Kramer himself. The bus tour winds its way through the city, visiting all the sites made famous in the most popular sitcom of the 1990s, including Monk’s Restaurant, and the Soup Shop.",
            host_name: "Kenny Kramer"
        },
        {
            name: "Sex and the City Tour",
            quota: 14,
            category: culture,
            image: "https://www.fodors.com/wp-content/uploads/2018/09/Unique-NYC-Tours-Sex-and-the-City-Hotspots-975x650.jpg",
            description: "The city is the unofficial star of both Sex and the City and Gossip Girl, and the On Location Tours of each show’s hotspots will transport fans to familiar places throughout Manhattan. Sip cosmos, walk past Carrie’s famous brownstone, and enjoy retail therapy in Greenwich Village boutiques. Fans of Blair and Chuck can tour iconic Gossip Girl sites on the Upper East Side like the Met Steps, Dylan’s Candy Bar, the Empire Hotel, and of course, Central Park."
        }
    ]

    nyc_map_boxes = [
        {
            name: "Downtown Manhattan",
            lat1: 40710517,
            lat2: 40750084,
            lon1: 73978608,
            lon2: 74008518,
            lat_modifier: 1,
            lon_modifier: -1
        },
        {
            name: "Midtown",
            lat1: 40748465,
            lat2: 40775325,
            lon1: 73967365,
            lon2: 73989939,
            lat_modifier: 1,
            lon_modifier: -1
        },
        {
            name: "Downtown Brooklyn",
            lat1: 40663646,
            lat2: 40698866,
            lon1: 73960206,
            lon2: 73997525,
            lat_modifier: 1,
            lon_modifier: -1
        }
    ]

    london_experience_templates = [
        {
            name: "",
            quota: nil,
            category: nil,
            image: "",
            description: "",
            host: nil
        },  
    ]

    filler_descriptions = [
        "Lorem ipsum dolor amet roof party typewriter 3 wolf moon, mollit cold-pressed helvetica venmo waistcoat hexagon sustainable affogato eu kitsch ramps. Keffiyeh cronut lyft williamsburg swag. Duis iceland minim four dollar toast, ad celiac hexagon chia synth unicorn. Officia ennui in quinoa reprehenderit ut fixie pug tbh velit. Venmo esse live-edge, cliche veniam craft beer unicorn meggings nulla banh mi snackwave scenester godard. Do ennui meh venmo poutine occaecat bicycle rights live-edge eu humblebrag tempor.",
        "Lorem ipsum dolor amet ut gochujang +1 hella food truck hot chicken duis cloud bread godard in tempor kale chips. Lo-fi 90's jianbing hot chicken four loko flexitarian la croix officia lomo, excepteur deep v retro hexagon. Tote bag truffaut you probably haven't heard of them drinking vinegar, jean shorts polaroid non kickstarter dreamcatcher dolor. VHS ut sartorial sriracha.",
        "Lorem ipsum dolor amet actually put a bird on it chillwave, non bitters fam consectetur photo booth polaroid consequat blue bottle shoreditch. Chia before they sold out pork belly forage green juice af. Put a bird on it mlkshk letterpress lumbersexual wayfarers, humblebrag artisan celiac tumeric. Cray ullamco kogi mixtape. Crucifix ennui woke dreamcatcher, four loko yuccie lomo.",
        "Lorem ipsum dolor amet snackwave sartorial culpa portland, paleo laborum cornhole tousled. Tacos everyday carry sustainable live-edge fam forage slow-carb cred reprehenderit pabst aliqua man braid hexagon shaman. Post-ironic church-key aesthetic reprehenderit irure, activated charcoal selfies ut mollit authentic dolor jianbing normcore cronut. Selfies wayfarers man bun, ut live-edge tumblr glossier migas chillwave. Raclette vape cloud bread, minim flexitarian meditation direct trade.",
        "Lorem ipsum dolor amet blue bottle selfies esse aliquip. Migas green juice trust fund, man braid celiac woke bespoke hammock waistcoat +1 occupy. Kickstarter narwhal do officia shoreditch cray freegan labore venmo leggings chia exercitation glossier tofu. Godard taiyaki cliche ullamco post-ironic chambray ethical vegan man braid succulents normcore typewriter.",
        "Lorem ipsum dolor amet elit tattooed waistcoat iPhone, snackwave sustainable affogato non pabst vape before they sold out lorem. Mollit sint elit, locavore vinyl mixtape adaptogen single-origin coffee ullamco subway tile eiusmod. Flannel ea hot chicken edison bulb lyft tousled listicle try-hard actually narwhal pork belly pug twee woke. Ut health goth salvia cloud bread, taxidermy in truffaut laborum cupidatat gochujang. 8-bit distillery polaroid af nostrud ennui skateboard chambray shabby chic tbh. Next level prism organic aesthetic chia minim nisi helvetica normcore art party nulla.",
        "Lorem ipsum dolor amet keffiyeh locavore semiotics hashtag duis before they sold out pitchfork banh mi asymmetrical eiusmod gluten-free quis four dollar toast id. Tacos paleo lomo, synth man braid listicle pitchfork fanny pack franzen. Cray ea brooklyn adaptogen offal. Eiusmod bicycle rights narwhal chartreuse stumptown intelligentsia sed shaman ramps pariatur church-key portland excepteur. Jean shorts aliqua stumptown iceland fixie tbh subway tile voluptate dolor et slow-carb. Vinyl neutra shaman aesthetic, pour-over readymade williamsburg brunch ea tacos ugh.",
        "Lorem ipsum dolor amet bitters vaporware echo park, before they sold out iceland commodo plaid post-ironic cliche incididunt venmo. Activated charcoal commodo listicle chambray wolf, paleo tacos schlitz venmo laboris yr. Mlkshk subway tile hot chicken, tbh enamel pin sartorial sriracha occaecat wayfarers chia aliqua. Enim skateboard narwhal sed viral culpa palo santo nostrud. Literally williamsburg in normcore leggings heirloom kogi portland microdosing ullamco marfa mustache neutra. Cliche beard small batch laboris YOLO lomo.",
        "Lorem ipsum dolor amet dolor exercitation sartorial, messenger bag aute pinterest lyft. Cold-pressed nisi qui labore salvia. Tempor blue bottle quinoa bitters direct trade organic unicorn prism taiyaki williamsburg twee roof party ullamco aliqua vaporware. Lorem laborum unicorn irure prism nisi tbh gluten-free PBR&B veniam ut mollit. Viral skateboard vegan man braid, craft beer farm-to-table kombucha nisi. Venmo fanny pack deserunt readymade elit activated charcoal vape raw denim pinterest next level. Tilde whatever typewriter sint elit irony.",
        "Lorem ipsum dolor amet plaid ethical freegan four dollar toast craft beer subway tile. Adaptogen slow-carb wayfarers nulla, la croix 3 wolf moon activated charcoal sed ramps duis sartorial artisan. Try-hard ea man braid, mollit air plant gastropub laborum you probably haven't heard of them deserunt pour-over heirloom polaroid unicorn. XOXO affogato tousled brunch four loko trust fund excepteur kitsch drinking vinegar hexagon portland meh yuccie et man braid. Offal glossier photo booth scenester four dollar toast paleo ea ullamco magna swag. Brooklyn enamel pin gochujang sed fanny pack pitchfork keffiyeh aliquip kale chips meh iceland dolor. Pop-up YOLO iPhone, hot chicken pour-over hoodie normcore.",
        "Lorem ipsum dolor amet deserunt quinoa blog flannel twee, single-origin coffee neutra banh mi. Single-origin coffee esse aute locavore kogi aesthetic est excepteur flannel mlkshk kale chips photo booth biodiesel before they sold out. 8-bit eu flexitarian ea af. Ut XOXO gluten-free single-origin coffee salvia dolore helvetica pinterest irure tote bag officia letterpress meh flexitarian. Culpa tumblr dolore nisi, copper mug bicycle rights authentic before they sold out pickled selfies craft beer migas truffaut. Try-hard next level plaid, biodiesel ipsum elit enamel pin nisi man braid sed in PBR&B irure beard. Palo santo voluptate enim, salvia +1 8-bit humblebrag put a bird on it typewriter tbh.",
        "Lorem ipsum dolor amet fugiat beard echo park, cliche subway tile trust fund fixie biodiesel. Chartreuse af freegan hoodie woke. Pour-over aliqua sed ipsum celiac migas knausgaard ugh. Ramps nostrud echo park, mollit intelligentsia XOXO knausgaard laboris whatever scenester. Synth etsy duis gentrify kale chips."
    ]

    def create_new_experiences(template_experience, location, descriptions, map_boxes)
        if template_experience[:description]
            description = template_experience[:description]
        else
            description = descriptions.sample
        end

        if template_experience[:host_name]
            host_name = template_experience[:host_name]
        else
            host_name = Faker::Name.name
        end

        start_box = map_boxes.sample
        end_box = map_boxes.sample

        if template_experience
            Experience.create({
                name: template_experience[:name],
                quota: template_experience[:quota],
                category: template_experience[:category],
                image: template_experience[:image],
                description: description,
                host_name: host_name,
                location_id: location.id,
                start_lat: ((rand (start_box[:lat1]..start_box[:lat2]))*0.000001*start_box[:lat_modifier]),
                start_lon: ((rand (end_box[:lon1]..end_box[:lon2]))*0.000001*start_box[:lon_modifier]),
                end_lat: ((rand (start_box[:lat1]..start_box[:lat2]))*0.000001*end_box[:lat_modifier]),
                end_lon: ((rand (end_box[:lon1]..end_box[:lon2]))*0.000001*end_box[:lon_modifier])
                # lat: (
                #     (rand (start_box[:lat1]..start_box[:lat2]))*0.000001*start_box[:lat_modifier]),
                #     (rand (end_box[:lon1]..end_box[:lon2]))*0.000001*start_box[:lon_modifier])
                # )
                # lon: (
                #     (rand (start_box[:lat1]..start_box[:lat2]))*0.000001*end_box[:lat_modifier]),
                #     (rand (end_box[:lon1]..end_box[:lon2]))*0.000001*end_box[:lon_modifier])
                # )
            })
        end
    end

    puts "Creating experiences for New York City..."
    new_york_city_experience_templates.each { |exp| create_new_experiences(exp, new_york_city, filler_descriptions, nyc_map_boxes) }

end

##############################################################################################################

# CREATE EVENTS (THROUGH 2020)

1.times do

    def create_one_event(experience, datetime, length)
        Event.create(
            start_at: datetime, 
            end_at: datetime + length/24.0, 
            experience_id: experience.id
        )
    end

    # set the most common first day, frequency, start and end times
    first_day = rand 1..4
    interval = rand 3..7
    start_at = rand 10..14
    length = rand 2..3
    Experience.all.each do |experience|
        puts "Creating events for #{experience.name}..."

        # edit a few categories that need to be at a certain time or day of week
        if experience.category[:name] == "Food"
            start_at = 19
            length = 3
        elsif experience.category[:name] == "Outdoors"
            length = rand 2..4
        elsif experience.category[:name] == "Nightlife"
            first_day = rand 3..4
            interval = 7
            start_at = 21
            length = 3
        end
        
        # create the first event
        datetime = DateTime.new(2020,1,first_day,start_at)
        # byebug
        create_one_event(experience, datetime, length)
        
        # create the all the events for this experience until the end of the year
        while datetime.year == 2020
            datetime += interval
            create_one_event(experience, datetime, length)
        end
    end
end

##############################################################################################################

# CREATE USERS

puts "Creating users..."
10.times do
    User.create(name: Faker::Name.name, password: "123")
end

##############################################################################################################

# CREATE FAVORITES

puts "Creating favorites..."
User.all.each do |user|
    8.times do
        Favorite.create(user_id: user.id, experience_id: Experience.all.sample.id)
    end
end

##############################################################################################################

# CREATE SAVES AND TRIPS
    # does not check to limit number of saves which is ok for now because :booked is false by default
    # creates a new trip for each booked event which isn't ideal

1.times do
    puts "Creating saves..."
    def create_save(user, faves, event)
        new_save = Save.new(user_id: user.id, event_id: event.id, number_of_guests: (rand 1..8))
        new_trip = Trip.create(user_id: user.id, name: "#{event.start_at.strftime("%B")} #{event.experience.location.name} Trip")
        new_save.trip_id = new_trip.id
        new_save.save
    end

    User.all.each do |user|
        faves = user.favorites.count
        create_save(user, faves, (user.favorites[rand 0..((faves / 2) - 1)].experience.events.sample))
        create_save(user, faves, (user.favorites[rand (faves / 2)..(faves - 1)].experience.events.sample))
        user.saves.sample.book
        # byebug
    end
end