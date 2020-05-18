<h1 align="center">
    <a href="https://traverse.site">
      	<img height="100" src="https://res.cloudinary.com/jmondi/image/upload/c_scale,w_150/v1534475620/jasonraimondi.com/traverse/pointing.png" alt="Traverse" /> 
      	<br /> Traverse
    </a>
  	<br />
  	<a href="https://travis-ci.org/jasonraimondi/traverse#"><img src="https://travis-ci.org/jasonraimondi/traverse.svg?branch=master" alt="Test Coverage" /></a>
    <a href="https://codeclimate.com/github/jasonraimondi/traverse/test_coverage"><img src="https://api.codeclimate.com/v1/badges/ad2b588b8f655bc8f384/test_coverage" alt="Test Coverage" /></a>
    <a href="https://codeclimate.com/github/jasonraimondi/traverse/maintainability"><img src="https://api.codeclimate.com/v1/badges/ad2b588b8f655bc8f384/maintainability" alt="Maintainability" /></a>
</h1>

Traverse is a GitHub explorer. You can browse repositories trending by frequency and language.

If you find Traverse interesting, please consider giving it a Star.

## Why?

I love browsing [trending repositories on GitHub](https://github.com/trending). Historically, that page was kinda hidden and took some digging to get to. I wanted to build an app that would make findind new repositories easier.

I was building this app, and ended up finding this awesome extension called [GitHunt](http://github.com/kamranahmedse/githunt) using Traverse. GitHunt is great, but it can be distracting when it opens and I am in the middle of something. I've gotten sidetracked before while working when I opened a new tab and finding a cool project and went down that whole rabbit hole.

Need to focus? Not a problem. Traverse is a dedicated application you can open and close at your hearts content.

## Installing

Traverse is unfortunately no longer available in Homebrew Cask since we did not meet the minimum downloads. To install traverse, grab it from our [latest releases](https://github.com/jasonraimondi/traverse/releases/latest)

## Stack

Traverse is an Electron app built with React, in TypeScript. It uses Jest/Chai + Enzyme for the test framework. Webpack to bundle, Redux and Redux Saga for the store, and uses the GitHub REST API with the Axios rest client. 

### Development

```bash
git clone https://github.com/jasonraimondi/traverse
cd traverse/
```

After you've cloned the repository.

```bash
npm install
npm run start
```

### Tests

Test framework is [Jest](https://jestjs.io/). Assertion library is [Chai](http://www.chaijs.com/api/assert/).

```bash
npm run test
# npm run test:watch # for running/watching
```

If you are using an IntelliJ IDE, you should see an option for 'Unit Tests' in the top righthand corner.

![IntelliJ Unit Test Runner](https://i.imgur.com/6nw5rvZ.png)

### Building

First you need to create a personal access token with the "repo" scope selected. Copy this access token, we are going to need to add it as `GH_TOKEN` in our [.env.sh](.env.sample.sh).

```bash
cp .env.sample.sh .env.sh
vim .env.sh
```

After you add your token, make sure the [package.json](./package.json) version is updated.

```bash
./publish.sh
```

### License

Traverse is [MIT licensed](./LICENSE).

### Screen Shots

<img src="https://raw.githubusercontent.com/jasonraimondi/traverse/master/screenshots/0.10.12-0.png"
     width="500px"
     alt="Version 0.10.2 Screenshot 1">

### Archived Images

##### 0.10.7

<img src="https://raw.githubusercontent.com/jasonraimondi/traverse/master/screenshots/0.10.7-1.png"
     width="500px"
     alt="Version 0.10.7 Screenshot 1">

##### 0.10.6

<img src="https://raw.githubusercontent.com/jasonraimondi/traverse/master/screenshots/0.10.6-1.png"
     width="500px"
     alt="Version 0.10.6 Screenshot 1">
     
<img src="https://raw.githubusercontent.com/jasonraimondi/traverse/master/screenshots/0.10.6-2.png"
     width="500px"
     alt="Version 0.10.6 Screenshot 2">
     
<img src="https://raw.githubusercontent.com/jasonraimondi/traverse/master/screenshots/0.10.6-3.png"
     width="500px"
     alt="Version 0.10.6 Screenshot 3">

##### 0.10.2

<img src="https://raw.githubusercontent.com/jasonraimondi/traverse/master/screenshots/0.10.2-1.png"
     width="500px"
     alt="Version 0.10.2 Screenshot 1">

<img src="https://raw.githubusercontent.com/jasonraimondi/traverse/master/screenshots/0.10.2-2.png"
     width="500px"
     alt="Version 0.10.2 Screenshot 2">
     
<img src="https://raw.githubusercontent.com/jasonraimondi/traverse/master/screenshots/0.10.2-3.png"
     width="500px"
     alt="Version 0.10.2 Screenshot 3">

##### 0.10.1

<img src="https://raw.githubusercontent.com/jasonraimondi/traverse/master/screenshots/0.10.1-main1.png"
     width="500px"
     alt="Version 0.10.1 Screenshot 1">

<img src="https://raw.githubusercontent.com/jasonraimondi/traverse/master/screenshots/0.10.1-main2.png"
     width="500px"
     alt="Version 0.10.1 Screenshot 2">

<img src="https://raw.githubusercontent.com/jasonraimondi/traverse/master/screenshots/0.10.1-about.png"
     width="500px"
     alt="Version 0.10.1 Screenshot 3">

##### 0.10.0

<img src="https://raw.githubusercontent.com/jasonraimondi/traverse/master/screenshots/0.10.0-main1.png"
     width="500px"
     alt="Version 0.10.0 Screenshot 1">

<img src="https://raw.githubusercontent.com/jasonraimondi/traverse/master/screenshots/0.10.0-about.png"
     width="500px"
     alt="Version 0.10.0 Screenshot 2">

##### 0.0.8

<img src="https://raw.githubusercontent.com/jasonraimondi/traverse/master/screenshots/0.0.8-2.png"
     width="500px"
     alt="Version 0.0.8 Screenshot 1">

<img src="https://raw.githubusercontent.com/jasonraimondi/traverse/master/screenshots/0.0.8-1.png"
     width="500px"
     alt="Version 0.0.8 Screenshot 2">

##### 0.0.2

<img src="https://raw.githubusercontent.com/jasonraimondi/traverse/master/screenshots/0.0.2-1.png"
     width="500px"
     alt="Version 0.0.2 Screenshot 1">

<img src="https://raw.githubusercontent.com/jasonraimondi/traverse/master/screenshots/0.0.2-2.png"
     width="500px"
     alt="Version 0.0.2 Screenshot 2">
