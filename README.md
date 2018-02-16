# cfDemoSummit18 - Step 2
[![SAP](https://i.imgur.com/kkQTp3m.png)](https://cloudplatform.sap.com)

This is a sample step by step guide of how to build cloud applications based on [Cloud Foundry](https://www.cloudfoundry.org/) can be built. 

### Step 1 - Scalability
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