# cfDemoSummit18 - Step 3
[![SAP](https://i.imgur.com/kkQTp3m.png)](https://cloudplatform.sap.com)

This is a sample step by step guide of how to build cloud applications based on [Cloud Foundry](https://www.cloudfoundry.org/). 

### Step 3 - Persistence
The step 3 shows the Cloud Foundry Market Place feature. The market place consists of a set of services available for any app deployed in a Cloud Foundry environment. In this step we are going to create a Postgree Database and bind it to our application.

### Installation
From the root directory, switch to the step 3 branch
```sh
$ git checkout step_3
```
Using the [Cloud Foundry CLI](https://docs.cloudfoundry.org/cf-cli/install-go-cli.html) push the step_3 branch of your app to the SAP CP Cloud Foundry
```sh
$ cf push
```
Check what services are available in the Cloud Foundry Market Place
```sh
$ cf marketplace
```
Now create a nservice using the following command
```sh
$ cf create-service <Service> <Plan> <service_instance>
```
In our case, a Postgree database called itemdb
```sh
$ cf create-service postgresql v9.4-dev itemdb
```
Bind the new service to the application
```sh
$ cf bind-service cfdemosummit18 itemdb
```
Restart the app
```sh
$ cf restart cfdemosummit18
```
Check your app URL for the new fields to store data in your new database.

