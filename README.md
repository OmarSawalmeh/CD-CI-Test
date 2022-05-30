# **server-deployment-practice**
🔗[Heroku App](https://omarsawalme-server-deploy-prod.herokuapp.com/)
🔗[GitHub Actions](https://github.com/OmarSawalmeh/server-deployment-practice/actions)
🔗[Pull Request](https://github.com/OmarSawalmeh/server-deployment-practice/pulls)

### **Notes and Steps :**
---
---
- **GitHub** <img src="https://cdn-icons-png.flaticon.com/512/733/733553.png" width="25" height="25">
    1. Create a new repository, called server-deployment-practice
    2. Select Add a README, Select the Add gitignore, and choose Node.js and choose MIT license.
    3. Clone this to your local machine.
    4. Create a “dev” branch to do your work in [ git checkout -b dev ].
    5. Add Node **Actions** in GitHub to test my code befor push it in GitHub.
---
- **Code In VS** <img src="https://cdn-icons-png.flaticon.com/512/906/906324.png" width="25" height="25">
    1. Create Server   ---> npm init -y
    2. Install Packges ---> npm i dotenv express
    3. To Add Test In Code:
        - create Folder name **--test--** in main root, inside **--test--** create file [anyName.test.js].
        - in package-json modify --->  "scripts": {
    			        	"test": "jest" OR "jest --coverage --verbose"
  					},
        - npm i -d jest
        - npm i -d supertest 
---
- **Heroku** <img src="https://cdn-icons-png.flaticon.com/512/873/873120.png" width="25" height="25">
    1. Create a new Heroku app, called [omarsawalmeh-server-deploy-prod](https://omarsawalme-server-deploy-prod.herokuapp.com/)
    2. Go to the deployment tab
    3. Choose “GitHub”
    4. Connect to your repository
    5. Choose the “master” or “main” branch
    6. Choose the “Wait for CI to pass before deploy” option
    7. Choose the “enable automatic deploys” option
    - After this steps i am use this [vedio](https://www.youtube.com/watch?v=gPOa0LvIwHQ) to solve all problem when connect my app with heroku website.
