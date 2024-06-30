![banner](https://i.imgur.com/3e8vyiN.png)

## About the App

This app was made in React Native in order to carry out the Fastned React Native coding challenge.

#### App Screens

The app contains 4 different screens:

- Home Screen (List of vehicles)
- Filter Screen (List of vehicles filtred by model)
- Details Screen (Details of vehicle selected)
- Charging Screen (Charging process)

![demo](https://i.imgur.com/oqeJCa3.png)

#### Flow of the app

[Fastned | App Demo](https://youtu.be/qJvUNjb-QZM)

## Architecture

The app is separated in multiple folders inside the src folder. Each folder contains a different responsibility. The main objective of this is to keep the app clean and don't mix responsibilities in case of errors or app maintenance.

- **src**: contains all the folders of the app
  - **assets**: folder responsable for images and animations.
  - **components**: folder responsable for the reusable components of the app
  - **constants**: Contains all the constants that don't change on the code.
  - **controllers**: Contains the query services
  - **hooks**: Folder in charge of app hooks.
  - **localization**: Contains all the different strings of the app in english and spanish.
  - **navigation**: Contains all the navigation login.
  - **screens**: Contains all the main screen of the app.
  - **services**: Contains the networking logic.
  - **theme**: Contains all the theme related properties: colors, spacings, etc.

## Libraries

- react-native: 0.72.4
- react-navigation/native: 6.1.7
- axios: 1.5.0
- lottie-react-native: 6.2.0
- react-native-bootsplash: 5.0.2
- react-native-config: 1.5.1
- react-native-linear-gradient: 2.8.3
- react-native-localization: 2.3.2
- tanstack/react-query: 4.35.3
- typescript: 5.2.2
- redux-flipper: 2.0.2
- prettier: 2.4.1
- eslint: 8.47.0

## How to run the app

As others react native projects, you will need some requirements to run the app:

Requirements
Complete setting up enviroment for React Native https://reactnative.dev/docs/environment-setup

### How to run

```
git clone https://gitlab.com/fastned-recruitment/app/06092023-federico-martinez.git
```

**Run backend**

- `docker-compose up -d`

**To install dependencies**

- `yarn install`

**To run on simulator**

- `yarn ios`

- `yarn android`

## Testing

[Fastned | Maestro Testing Demo](https://youtu.be/ZB0DTU8zd_M)

Testing was done with [Maestro Testing](https://maestro.mobile.dev/platform-support/react-native)

To run maestro be sure to be running the simulator and after that on another terminal run the following command:

- `yarn maestro`

