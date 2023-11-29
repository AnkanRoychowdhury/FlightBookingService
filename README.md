# Airline Booking System Backend

This is the backend system for an airline company that supports various features to provide users with a seamless flight booking experience. The system is designed to be robust, maintainable, and scalable.<br>
**`This repository is mainly focused on Booking Microservice`**

## Table of Contents

- [Airline System Design](#airline-system-design)
- [Features](#features)
- [Microservices](#microservices)
- [Installation Guide](#installation-guide)
- [API Documentation](#api-documentation)

## Airline System Design

![System Design](https://twitterimagesbucketankan.s3.ap-south-1.amazonaws.com/AirlineSystem.png)


## Features

### Flight Booking

1. Users can search for flights based on source, destination, and date.
2. Support for return flights and multi-city flights.
3. Option to select the class and number of seats.
4. Paginated listing of flights with sorting and filtering options.
5. Flight tracking and notifications for price drops and delays.
6. User authentication for booking and tracking features.

### Online Check-in

1. Users can perform online check-in.
2. Notifications for completing online check-in before 3 hours of departure.

### Reviews and Ratings

1. Users can review their flight journey with star ratings and comments.
2. Displaying reviews alongside flight listings.

### Notifications

1. Notifications for flight delays and online check-in.
2. Email notifications for registered users.

### Ticketing System

1. Support ticketing for user queries.
2. Static FAQ section.

### Additional Features (V2)

1. Seat selection mechanism.
2. Coupon support for discounts and offers.
3. Downloadable boarding pass for online check-in.

## Microservices

- [Flight Booking Microservice](https://github.com/AnkanRoychowdhury/FlightBookingService)
- [Flight Auth Microservice](https://github.com/AnkanRoychowdhury/FlightAuthService)
- [Flight Search Microservice](https://github.com/AnkanRoychowdhury/FlightSearchService)
- [Reminder Microservice](https://github.com/AnkanRoychowdhury/FlightReminderService)
- [Api Gateway](https://github.com/AnkanRoychowdhury/AirlineApiGateway)


## Installation Guide

To get started with the Airline Booking System backend on your local machine, follow these steps:

### Prerequisites

- Node.js: Ensure you have Node.js installed on your machine. You can download it from [nodejs.org](https://nodejs.org/).

- NPM: NPM (Node Package Manager) is included with Node.js. Make sure it's installed and updated to the latest version by running:

  ```bash
  npm install -g npm
- Git: Install Git for version control. You can download it from [Here](git-scm.com).