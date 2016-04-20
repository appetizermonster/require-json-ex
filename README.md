# require-json-ex
require for JSON with Comments, which supports relative path as argument!

## Install
```
npm i --save require-json-ex
```

## Usage
* config.json
  ```json
  {
    "key": {
      "something": "value"      // Single-line Comment
    }
    /* Multi-line Comment */
  }
  ```

* example.js
  ```javascript
  const requireJSON = require('require-json-ex');
  const config = requireJSON('./config.json');

  console.log(config.key);
  ```

## API
### `requireJSON(path)`
- **path** String - Absolute or Relative Path like using `require`

## License
MIT
