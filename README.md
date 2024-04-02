## 🎵 RECORDS API 🎵
### Relive the era of vinyl records and add a vintage touch to your projects. <br>
> With the Records API, you can access a little collection of classic and modern vinyl records.<br>
> Search by artist, genre, or even price range and find the perfect soundtrack for your creations.<br>
> Let nostalgia inspire your designs and bring the charm of vinyl records to the present. <br>
<br>

<sup>This API is currently in development, tailored for a small-scale project. <br>
As it doesn't rely on external sources, data availability is limited. <br>
Thank you for your patience as we continue to expand its features!<br> </sup>

## Stacks used in the project
<div style="display: inline_block">
  <img align="center" alt="bia-js" height="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg">
  <img>
  <img>
  <img align="center" height="45" src="https://www.vectorlogo.zone/logos/nodejs/nodejs-icon.svg" alt=""/>
  <img>
  <img>
  <img align="center" src="https://www.vectorlogo.zone/logos/expressjs/expressjs-icon.svg" height="50"/>
</div>
<br>

## GET URL 

Clone the repository and access the API through port 3000.
<div>

    git clone https://github.com/biaTrivillin/records-api.git
    
    npm start
</div>
<div>
    
    GET localhost:3000
</div>

## Data Filter 
### All data
<div>
    
    /
</div><br>

RESPONSE EXEMPLE

<div>
    
    [
      {
        "id": 1,
        "title": "Dark Side of the Moon",
        "artist": "Pink Floyd",
        "release_year": 1973,
        "price_usd": 25.99,
        "genre": "Progressive Rock",
        "condition": "New",
        "rating": 5,
        "image": ""
      },
      {
        "id": 2,
        "title": "Thriller",
        "artist": "Michael Jackson",
        "release_year": 1982,
        "price_usd": 20.50,
        "genre": "Pop",
        "condition": "Used - Very Good",
        "rating": 4,
        "image": ""
      },
      {
        "id": 3,
        "title": "Back in Black",
        "artist": "AC/DC",
        "release_year": 1980,
        "price_usd": 22.99,
        "genre": "Hard Rock",
        "condition": "Used - Like New",
        "rating": 4,
        "image": ""
      }...
    ]
  
</div><br>

##

### Search for Key Word
Search for any keyword within the data.<br>
The API will perform automatic conversion, removing special characters and converting everything to lowercase to facilitate information filtering.<br>
<div>
    
    /search?q=keyword
</div><br>

REQUEST EXEMPLE 1 
<div>
    
    /search?q=rock
</div><br>

RESPONSE EXEMPLE

<div>
    
    [
      {
        "id": 4,
        "title": "Dark Side of the Moon",
        "artist": "Pink Floyd",
        "release_year": 1973,
        "price_usd": 25.99,
        "genre": "Progressive Rock",
        "condition": "New",
        "rating": 5,
        "image": ""
      },
      {
        "id": 9,
        "title": "Back in Black",
        "artist": "AC/DC",
        "release_year": 1980,
        "price_usd": 22.99,
        "genre": "Hard Rock",
        "condition": "Used - Like New",
        "rating": 4,
        "image": ""
      }...
    ]

##

### Advanced filter
Search by artist, maximum price, genre, or condition.<br>
In this method, you can filter your data using just one parameter. However, you can also mix search parameters to obtain more specific data.<br>
The API will perform automatic conversion, removing special characters and converting everything to lowercase to facilitate information filtering.<br>
<div>
    
    /filter?artist=artist&maxprice=maxprice&genre=genre&condition=condition
</div><br>

REQUEST EXEMPLE 1
<div>
    
    /filter?genre=rock
</div><br>

RESPONSE EXEMPLE 1

<div>
    
    [
      {
        "id":5,
        "title":"Abbey Road",
        "artist":"The Beatles",
        "release_year":1969,
        "price_usd":30,
        "genre":"Rock",
        "condition":"New",
        "rating":5,
        "image":""
      },
      {
        "id":48,"title":"Rumours",
        "artist":"Fleetwood Mac",
        "release_year":1977,
        "price_usd":27.99,
        "genre":"Rock",
        "condition":"New",
        "rating":4,
        "image":""
      },  
      {
        "id":50,
        "title":"A Night at the Opera",
        "artist":"Queen",
        "release_year":1975,
        "price_usd":26.49,
        "genre":"Rock",
        "condition":"New",
        "rating":5,
        "image":""
      },
    ]
</div><br>

REQUEST EXEMPLE 2
<div>
    
    /filter?genre=rock&maxprice=29
</div><br>

RESPONSE EXEMPLE 2

<div>
    
    [
      {
        "id":48,
        "title":"Rumours",
        "artist":"Fleetwood Mac",
        "release_year":1977,
        "price_usd":27.99,
        "genre":"Rock",
        "condition":"New",
        "rating":4,
        "image":""
      },        
      {
        "id":50,
        "title":"A Night at the Opera",
        "artist":"Queen",
        "release_year":1975,
        "price_usd":26.49,
        "genre":"Rock",
        "condition":"New",
        "rating":5,
        "image":""
      },
    ]
</div>

##

### Search By ID
Search for records IDs<br>

<div>
    
    /findById?id=id
</div><br>

REQUEST EXEMPLE
<div>
    
    /search?id=3
</div><br>

RESPONSE EXEMPLE

<div>
    
    {
      "id": 3,
      "title": "The Wall",
      "artist": "Pink Floyd",
      "release_year": 1979,
      "price_usd": 28.75,
      "genre": "Progressive Rock",
      "condition": "New",
      "rating": 5,
      "image": ""
    },
  
</div><br>

##

### Search By Name
Search for records Name<br>

<div>
    
    /findByName?name=name
</div><br>

REQUEST EXEMPLE
<div>
    
    /findByName?name=the%20wall
</div><br>

RESPONSE EXEMPLE

<div>
    
    {
      "id": 3,
      "title": "The Wall",
      "artist": "Pink Floyd",
      "release_year": 1979,
      "price_usd": 28.75,
      "genre": "Progressive Rock",
      "condition": "New",
      "rating": 5,
      "image": ""
    },
  
</div><br>

##

### List All Available Genres
List all available genres within the data<br>

<div>
    
    /genres
</div><br>

RESPONSE EXEMPLE

<div>
    
    ["Progressive Rock","Pop","Rock","Hard Rock","Psychedelic Rock","Grunge","Art Rock","Folk Rock"...]
  
</div><br>

##

### List All Available Artists
List all available artists within the data<br>

<div>
    
    /artists
</div><br>

RESPONSE EXEMPLE

<div>
    
    ["Pink Floyd","Michael Jackson","The Beatles","AC/DC","Fleetwood Mac","Led Zeppelin"...]
  
</div><br>

##

### List All Available Conditions
List all available conditions within the data<br>

<div>
    
    /conditions
</div><br>

RESPONSE EXEMPLE

<div>
    
    ["New","Used - Very Good","Used - Like New","Used - Good"]
  
</div><br>

