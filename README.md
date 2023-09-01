# Air_Quality_NodeJS
The goal of this project is to create a REST API responsible for exposing “the air quality information” of a nearest city to GPS coordinates using iqair :

![Capture37](https://github.com/lacegiovanni17/Air_Quality_NodeJS/assets/30509335/5326f288-ae7d-4a05-94a5-557686242d66)

![Capture38](https://github.com/lacegiovanni17/Air_Quality_NodeJS/assets/30509335/f0a51dd2-9188-4428-9380-08ef6f37c99b)

### [Live Site]()


## About
* 👋 Hi, I’m Chidike Henry 
* 😎 I’m a MERN fullstack engineer
* 💻 This is a backend code for getting the air quality information of a location
* 💞️ I’m looking to collaborate on JS projects 
* 📫 How to reach me chidike.henry@gmail.com


## Introduction
The purpose of this assessment is to evaluate my abilities in creating a backend application using REST API to expose “the air
quality information” of a nearest city to GPS coordinates using iqair : `https://www.iqair.com/fr/commercial/air-quality-monitors/airvisual-platform/api.`
This project will allow you to assess my proficiency in backend development, API integration, and my problem-solving approach.

## Technologies Used
* NodeJS
* ExpressJS
* Javascript
* Typescript
* Jest
* Postman
* MongoDB 

## Project Description: Mini-project “AIR QUALITY”
Goal:
Building REST API using Node Js.

Context:
The goal of this project is to create a REST API responsible for exposing “the air
quality information” of a nearest city to GPS coordinates using iqair :
https://www.iqair.com/fr/commercial/air-quality-monitors/airvisual-platform/apiTasks:
● Configuration:
- register on “iqair” and create your API KEY (
https://www.iqair.com/fr/dashboard/api )
- NOTE: the activation of the key can take a few minutes (about 5
minutes).
- Fetch “air quality “ with this URL ( https://api-docs.iqair.com/ par
longitude/latitude ) using postman or another platform to test the API.
- Test the endpoint “ v2/nearest_city” of iqair API.
● Integration:
- Build Node Js REST API ( feel free to choose the framework )
- Create an endpoint( give a coherent name of your Route )
params: longitude, latitude.
- In this endpoint, make a call to IQAIR API to get “air quality “ for the
given zone ( read documentation : “nearest_city”) and return the
result as below :
 

{
  "Result": {
    "Pollution": {
      "ts":""2019-08-04T01":"00":00.000Z",
      "aquis":55,
      "mainus":"p2",
      "aqicn": 20,
      "maincn":"p2"
    }
  }
}

● CRON:
● Implement CRON JOB to check “ air quality “ for the Paris zone ( latitude:
48.856613 ,longitude: 2.352222) every 1 minute than save them in the
database ( add date and time when saving the air quality)
● (optionnel:) add an endpoint to get datetime( date and time ) where the paris
zone is the most polluted ( based on your CRON JOB results).
Your data should be stored in a database (feel free to choose technology)
Add :
● Documentation
● Unit tests / integration


## Getting Started
## Mini-project “AIR QUALITY” Backend App Setup Guide
Follow these steps to set up and run the Mini-project “AIR QUALITY” Backend App:

## Prerequisites
1. Ensure you have Node.js installed on your machine. You can download it from nodejs.org.
## Installation
1. Clone the repository: `git clone <repository-url>`
2. Navigate to the project directory: `cd air_filter_nodejs`
3. Install dependencies: `npm install`
4. note: mongodb and mongoose is used in this project and you can access the DB with MongodDB Compass on your PC

## Running the App from your terminal
1. From the root directory change to the src folder by running the following command `cd src`
2. From the src folder run the following command to start the backend server: `npm run dev`
3. The backend server will be running at http://localhost:8899.
   
## Endpoints
1. GET



## Usage
To retrieve available , make a GET request to 

To confirm a  

Please use postman to test endpoints

## Documentation
Access documentation here - https://documenter.getpostman.com/view/25014777/2s9Y5crfD9

## Error Handling
The application provides appropriate error handling for invalid inputs and unexpected scenarios.

## Testing
The application includes comprehensive unit tests to ensure reliability and functionality. Run tests using the following command: `npm test`

With these instructions, developers and users will be able to quickly set up and run the Flight Booking Backend App for testing and development purposes.

## Author

#### 👤 Author1
- GitHub: [@lacegiovanni17]https://github.com/lacegiovanni17
- Twitter: [@ChidikeC] https://twitter.com/ChidikeC
- LinkedIn: [LinkedIn]https://www.linkedin.com/in/chidike-chizoba-25628a40/

## Contributing 
Contributions, issues, critics and feature requests are welcome!

## Show your support
Please give a ⭐️ if you like this project! 

## Acknowledgments
- Hat tip to Yassir 
- Inspiration
- etc
