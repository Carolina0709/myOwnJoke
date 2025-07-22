# Find a Joke

This website was built with Express and EJS as the final capstone project of the **Programming Interfaces** section of the *The Complete 2024 Web Development Bootcamp* course on Udemy. The main idea was to consume a public API to create an interactive experience that returns jokes based on user-selected categories and language.

---

## Table of Contents

1. [Introduction](#introduction)  
2. [What I Built](#what-i-built)  
3. [Goals](#goals)  
4. [View](#view)  

---

## Introduction

The purpose of this project was to practice consuming public APIs within a web application built with Node.js and Express, using EJS for dynamic content rendering. The project integrates concepts such as form handling, GET and POST routes, and manipulating data from an external service.

---

## What I Built

This is a web application that allows users to select one or more joke categories and a language, then queries the public [JokeAPI](https://v2.jokeapi.dev/) based on those filters to return a matching joke.

The interface includes:

- A form to select categories (with an "Any" option or custom choices) and language.  
- Validations to prevent invalid combinations (e.g., "Any" cannot be selected with other categories).  
- A section that displays the joke retrieved from the API.  
- Visual indicators (light bulb on/off) to show whether a joke is loaded.  
- Styling with Bootstrap for a modern, responsive design.  

---

## Goals

The main goals of this project were to:

- Practice consuming RESTful public APIs using HTTP requests with Axios.  
- Implement Express routes to handle GET and POST requests.  
- Use EJS to render dynamic content and manage server-side data.  
- Manage form state and validations to improve user experience.  
- Learn how to modularize and structure a simple but functional full-stack web app.  

---

## View
