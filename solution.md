## Libraries used
- Vue.js
- Vuex (State management)
- Vue-router
- Tailwind (styling library)

## Source file structure
- assets
- components (common reusable components)
- errors (error classes)
- router (router config)
- store (vuex store config)
- utils (multiple reused functions)
- views (vue components bound to particular routes)
- App.vue (entry point component)
- main.ts (entry point)
- shims-vue.ts

## Architecture
There are two types of Vue components: common components and views. Common
components are reusable and meant to be used independently from app state.
View components are used with router and vuex store and meant to be particular
screens of the app.

Router is used with utility function `useRouterShortcuts` that is just a 
reusable to hold `router.push` to particular pages. Therefore, when a new 
route is added a new shorthand function should be also added to 
`useRouterShortcuts` reusable.

Vuex store is not split into different modules as it's not necessary in
this particular case. Store holds two objects: `formValues` and `appState`.
`formValues` holds the state of the form and `appState` is for global app 
state (in this case it holds only error object).

There is also error handling mechanism. There is an error class hierarchy that
starts from `AppError` class as a parent. Whenever component throws error 
`App.vue` component (which is the top level component) captures error 
object with `onErrorCaptured` hook and if it's instance of `AppError` it
goes to `ErrorView` and set store error to obtained object. This way to 
redirect to error page in case of invalid data the only thing needed to be 
done is to throw an error object that inherits `AppError`.
