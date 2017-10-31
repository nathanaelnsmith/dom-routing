# dom-routing
An ES6 module implementation of Paul Irish's DOM based routing
## Usage
```javascript
import Router from 'dom-routing'
let routes = { 
  'common': { 
    init() {} 
  }
}
let router = new Router(routes);
router.load();
```
