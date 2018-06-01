<<<<<<< HEAD
# cfDemoSummit18 - Step 1
[![SAP](https://i.imgur.com/kkQTp3m.png)](https://cloudplatform.sap.com)

This is a sample step by step guide of how to build cloud applications based on [Cloud Foundry](https://www.cloudfoundry.org/). 

### Step 1 - App implementation
The step 1 is the basic app implementation. Consist of a simple HTML front end that lists SAP Business One items using the Service Layer.

### Installation
From the root directory, using the [Cloud Foundry CLI](https://docs.cloudfoundry.org/cf-cli/install-go-cli.html) push your app to the SAP CP Cloud Foundry
```sh
$ cf push
```
Then set the Environment Variables accordingly
```sh
$ cf set-env cfdemosummit18 B1_SERVER_ENV http://<your b1 server>
$ cf set-env cfdemosummit18 B1_SLPORT_ENV <Service Layer Port>
$ cf set-env cfdemosummit18 B1_SLPATH_ENV <Service Layer path>
$ cf set-env cfdemosummit18 B1_USER_ENV <B1 User Name>
$ cf set-env cfdemosummit18 B1_PASS_ENV <B1 User Password>
$ cf set-env cfdemosummit18 B1_COMP_ENV <B1 Company DB>
```
**Example**
```sh
$ cf set-env cfdemosummit18 B1_SERVER_ENV http://hanab1
$ cf set-env cfdemosummit18 B1_SLPORT_ENV 50001
$ cf set-env cfdemosummit18 B1_SLPATH_ENV /b1s/v1
$ cf set-env cfdemosummit18 B1_USER_ENV manager
$ cf set-env cfdemosummit18 B1_PASS_ENV 1234
$ cf set-env cfdemosummit18 B1_COMP_ENV SBODEMOUS
```

Restart your application (so it can read the new environment variables)
```sh
$ cf restart cfdemosummit18
```

Access the app from the URL route showed in the terminal
=======
# cfDemoSummit18 - Step 2
[![SAP](https://i.imgur.com/kkQTp3m.png)](https://cloudplatform.sap.com)

This is a sample step by step guide of how to build cloud applications based on [Cloud Foundry](https://www.cloudfoundry.org/) can be built. 

### Step 2 - Scalability
The step 2 shows the scalability features of Cloud Foundry by creating multiple instances of the app to handle heavy workloads

### Installation
From the root directory, switch to the step 2 branch
```sh
$ git checkout step_2
```
Using the [Cloud Foundry CLI](https://docs.cloudfoundry.org/cf-cli/install-go-cli.html) push the step_2 branch of your app to the SAP CP Cloud Foundry
```sh
$ cf push
```
Check how many instances of the app are currently running
```sh
$ cf app cfdemosummit18
```
Scale the app to run on more instances, e.g 5
```sh
$ cf scale cfdemosummit18 -i 5
```
Check again how many instances of the app are currently running
```sh
$ cf app cfdemosummit18
```
Access the app URL and if you refresh the page multiple times you can see it being served by different servers each one with a specific Service Layer Connection
>>>>>>> 9a4329b26bafbe0b26e02b56acd644e1b28aaca2
