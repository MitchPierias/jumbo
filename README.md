# Jumbo Front-end Developer Project

## Usage

Clone the repository and ensure you've installed all required dependencies

```bash
yarn install
```

Next start the development server

```bash
yarn run start
```

## Testing

```bash
yarn run test
```

## Libraries

- TypeScript
- ReactJS
- WebPack
- [Popmotion](https://popmotion.io/)
- Jest + Enzyme
- Mocha + Chai

## Notes

#### Infinite Scrolling
Implemented an infinite scroll view for the main movie list to fetch new movies when the user reaches the end of the page. Experience could be improved by triggering a query at a certain scroll percentage and performance further optimized by only rendering chunks, throwing away 'out of visible range' items.

#### Caching
Chose React hooks "useReducer" over Redux
Implemented simple page history cache to prevent repeat API calls for the infinite scroll movie list.

#### Search Optimization
Added delayed search to limit the number of requests as a user types their query.

#### CSS
I chose to use a root level CSS file due to implementation troubles with CSS-Modules, WebPack and time constraints of the project. This implementation worked in this case as the two-view-application shared allot of styles and had minimal CSS overall. Future functionality however would surface maintenance and scalability problems and classnames begin to clash and file size grows excessive. The next steps would be to migrate towards SASS and seperation of files into their namespaces. Alternatively, I would have liked to use CSS-modules or JSS.

#### Testing
Testing has been configured using Mocha with Chai for API service testing and Jest with Enzyme snapshots, the majority of tests however haven't been written.

#### Documentation
Code documentation and commenting has been written with TypeDocs in mind, a documentation generator which leverages TypeScript, this is why it doesn't follow the common JSDocs format.