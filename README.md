<h1>RESTful API Node-Express Server Boilerplate</h1>

## Manual Installation

Clone the repo:

```bash
git clone https://github.com/Md-shefat-masum/node-express-complete-boilerplate.git
cd node-express-complete-boilerplate
```

Install the dependencies:

```bash
npm install
```

Set the environment variables:

```bash
cp .env.example .env

# open .env and modify the environment variables (if needed)
```
## Commands

Running locally:

```bash
npm dev
```

Running in production:

```bash
npm start
```

Compiling to JS from TS

```bash
npm compile
```

Compiling to JS from TS in watch mode

```bash
npm compile:watch
```

Commiting changes

```bash
npm commit
```

Testing:

```bash
# run all tests
npm test

# run TypeScript tests
npm test:ts

# run JS tests
npm test:js

# run all tests in watch mode
npm test:watch

# run test coverage
npm coverage
```

## Project Structure
```
├── app                     # The app directory contains the core code of your application
│   ├── exceptions                          
│   ├── http    
|   |   ├── controllers                        
|   |   └── middleware                        
│   ├── mail                     
│   └── models                      
├── boostrap                          
├── config              
├── database 
|   ├── factories                     
│   └── seeders                              
├── public 
|   ├── contents                     
|   ├── css                     
|   ├── js                           
│   └── uploads                              
├── resource 
|   ├── js                     
|   ├── scss                         
│   └── views                              
├── routes 
|   ├── api                           
│   └── web                              
├── storage                           
│   └── logs                              
└── tests
```
