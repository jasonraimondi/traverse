<h1 align="center">
  	<img height="100" src="https://res.cloudinary.com/jmondi/image/upload/c_scale,w_150/v1534475620/jasonraimondi.com/traverse/pointing.png" alt="Traverse" /> 
  	<br /> Traverse
  	<br />
  	<a href="https://travis-ci.org/jasonraimondi/traverse#"><img src="https://travis-ci.org/jasonraimondi/traverse.svg" alt="Test Coverage" /></a>
    <a href="https://codeclimate.com/github/jasonraimondi/traverse/test_coverage"><img src="https://api.codeclimate.com/v1/badges/ad2b588b8f655bc8f384/test_coverage" alt="Test Coverage" /></a>
    <a href="https://codeclimate.com/github/jasonraimondi/traverse/maintainability"><img src="https://api.codeclimate.com/v1/badges/ad2b588b8f655bc8f384/maintainability" alt="Maintainability" /></a>
</h1>

Traverse is a GitHub explorer. You can browse repositories trending by frequency and language.

## Why?

I love browsing [trending repositories on GitHub](https://github.com/trending). Historically, that page was kinda hidden and took some digging to get to. I wanted to build an app that would make findind new repositories easier.

I was building this app, and ended up finding this awesome extension called [GitHunt](http://github.com/kamranahmedse/githunt) using Traverse. My only complaint about GitHunt is that it opens every new tab, even when I am in the middle of something. I've gotten sidetracked before while opening a new tab and finding a cool project. Need to focus? Not a problem, Traverse is a dedicated application you can open and close at your hearts content.

## Stack

It is an Electron app built with React, in TypeScript. It uses Jest/Chai + Enzyme for the test framework. Webpack to bundle, Redux and Redux Saga for the store, and uses the GitHub REST API with the Axios rest client. 

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

### Screen Shots

![Preview 1](https://res.cloudinary.com/jmondi/image/upload/c_scale,w_600/v1536468459/jasonraimondi.com/traverse-rewrite/traverse-rewrite-1.png)

![Preview 2](https://res.cloudinary.com/jmondi/image/upload/c_scale,w_600/v1536468459/jasonraimondi.com/traverse-rewrite/traverse-rewrite-2.png)

### License

Traverse is [MIT licensed](./LICENSE).
