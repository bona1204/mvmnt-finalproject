# MVMNT

MVMNT is a fitness web application for a coach called Martin Fiasche, Using React, Flask, Mysql and jwt authentication
### Manual Installation:

It is recomended to install the backend first, make sure you have Python 3.8, Pipenv and a database engine (Posgress recomended)`

1. Install the python packages: `$ pipenv install`
2. Create a .env file based on the .env.example: `$ cp .env.example .env`
3. Install your database engine and create your database, depending on your database you have to create a DATABASE_URL variable with one of the possible values, make sure you replace the valudes with your database information:

| Engine    | DATABASE_URL                                        |
| --------- | --------------------------------------------------- |
| SQLite    | sqlite:////test.db                                  |
| MySQL     | mysql://username:password@localhost:port/example    |
| Postgress | postgres://username:password@localhost:5432/example |

4. Migrate the migrations: `$ pipenv run migrate` (skip if you have not made changes to the models on the `./src/api/models.py`)
5. Run the migrations: `$ pipenv run upgrade`
6. Run the application: `$ pipenv run start`


### Front-End Manual Installation:

- Make sure you are using node version 14+ and that you have already successfully installed and runned the backend.

1. Install the packages: `$ npm install`
2. Start coding! start the webpack dev server `$ npm run start`


## Usage
Run pipenv run and npm run start you need tu have a database created

## User VIEWS

### Home
![image](https://github.com/bona1204/mvmnt-finalproject/assets/39720065/cf1cd8a8-4da0-4a6b-ae78-3bed9d77c5c0)
### About
![image](https://github.com/bona1204/mvmnt-finalproject/assets/39720065/4085f48b-7cbb-4abd-bc62-e114e2ee4491)
### Reviews
![image](https://github.com/bona1204/mvmnt-finalproject/assets/39720065/9278d67a-379c-4b04-9233-13449b9ab5b9)
### Individualized
![image](https://github.com/bona1204/mvmnt-finalproject/assets/39720065/da204046-905e-4ff0-b234-b42dca4b3b6a)
### Movement
![image](https://github.com/bona1204/mvmnt-finalproject/assets/39720065/6213ddbd-46d4-4e25-b450-e60c095872df)
### Acrobatics
![image](https://github.com/bona1204/mvmnt-finalproject/assets/39720065/7a8f87b4-1649-4a11-883a-12cacada9afe)
### Events
![image](https://github.com/bona1204/mvmnt-finalproject/assets/39720065/03fddb28-6ccf-4b7a-a224-74b4df72f04b)
### Contact me
![image](https://github.com/bona1204/mvmnt-finalproject/assets/39720065/c73bff25-ecca-49c5-a3d3-6598eeb475d2)
### Login
![image](https://github.com/bona1204/mvmnt-finalproject/assets/39720065/04b95377-4825-4805-968e-a46d5a329fac)
### Register
![image](https://github.com/bona1204/mvmnt-finalproject/assets/39720065/2d3f51a2-18d6-4cc6-9c08-5c925e47d192)
### Recover password
![image](https://github.com/bona1204/mvmnt-finalproject/assets/39720065/ad246121-6b2b-45b5-a95e-6a224a5a8dc5)
### Inside the program
![image](https://github.com/bona1204/mvmnt-finalproject/assets/39720065/b942b72d-080f-4b0a-8ca5-ff2f407b3d93)
### Profile picture update
![image](https://github.com/bona1204/mvmnt-finalproject/assets/39720065/99366316-39df-4247-bc0a-e145a5186e1c)
