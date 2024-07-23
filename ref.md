Tea Break : 11:00AM (15 Minutes)
Lunch Break : 1:00 (45 minutes)
Tea Break : 4:00PM (15 minutes)

# JavaScript Engine -

1. Creational Phase : (Hoisting)

- all variables and functions take place in memory

2. Execution Phase :

- executes those stored functions

# Day 01

- HTML : contents available on webpage
- CSS : adding CSS Rules
- JavaScript : add behaviour to application

# To create React project

- npx create-react-app first-app
- cd first-app
- npm start

# React Purpose -> render the UI quickly and efficiently

# Side Effect -

- XHR Call
- Reading file
- Changing the state

# UseEffect Hook flavors

- useEffect(cb, []) - (componentDidMount)

  > cb executes only ONCE after the initial rendering of component

- useEffect(cb, [Dependencies]) - (componentDidUpdate)

  > cb will execute after the initial rendering of component
  > cb will execute again whenever the component re-render with dependency change

- useEffect(cb => cleanUpFn, [Dependencies])
  > cb will execute after the initial rendering of component
  > Dependencies will change
  > cleanUpFn will execute after the dependencies change
  > cb will execute after the cleanUpFn
  > cleanUpFn will also run when the component is about to unload / expires - (componentWillUnmount)
