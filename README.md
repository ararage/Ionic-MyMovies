# Ionic Movies App

Quick Wins to check in this app:

- Check the interceptor folder that fill every request with the token inside the environment file app/interceptors
  - Check the lines in the app.module.ts for the incerceptors call
- Check the Shared Components Module
  - ionic g module components/sharedComponents --flat
- Check the Movie Preview Component
  - ionic g component components/moviePreview
- Add the Movie Preview Component declaration into the Shared Component imports and exports
- Add the SharedComponentsModule into the Home Module imports array
- Renamed Component app-movie-preview to movie-preview
- For Routing functions import the RouterModule intho the SharedComponentsModule
- Check the path movie-preview.component tap div at the begining and the ':type/:id' route.
- Generated SharedPipes and Duration Pipe for Details Page 
  - Commands for generating the pipes:
    - ionic g module pipes/sharedPipes —flat
    - ionic g pipe pipes/duration
  - Include the DurationPipe in the import and export arrays in shared-pipes.module.ts
  - Include the SharedPipesModule in the details.module.ts imports array.
  - Delete The Pipes from the main app.module.ts BECAUSE CAN BE ONLY USED BY ONE MODULE
- For the Vibrant error:
  - Put the key-value "allowSyntheticDefaultImports": true" in the tsconfig.json file 
  - Put the "node_modules/node-vibrant/dist/vibrant.min.js" value in the scripts array from the angular.json file
- Cast Component Generation
  - ionic g component components/cast 
- Give the id to the route in app-routing-module
  - path: 'actor/:id'
- Don't forget if you create a new Component declare it in the shared-components.module.ts
- Don't forget to add the SharedComponentsModule declaration in the details.module.ts

## For tag import Problems (ion-card, ion-title, etc) dont't forget to import IonicModule in the imports array from the shared-components.module