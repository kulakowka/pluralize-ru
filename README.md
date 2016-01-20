# Pluralize russian

Install:

```
npm install pluralize-ru
```

Usage example:

```javascript
var pluralize = require('pluralize-ru')

pluralize(0, 'нет штук', 'штука', 'штуки', 'штук')  // => нет штук
pluralize(1, 'нет штук', 'штука', 'штуки', 'штук')  // => штука
pluralize(2, 'нет штук', 'штука', 'штуки', 'штук')  // => штуки
pluralize(5, 'нет штук', 'штука', 'штуки', 'штук')  // => штук

pluralize(0, 'нет штук', '%d штука', '%d штуки', '%d штук')  // => нет штук
pluralize(1, 'нет штук', '%d штука', '%d штуки', '%d штук')  // => 1 штука
pluralize(2, 'нет штук', '%d штука', '%d штуки', '%d штук')  // => 2 штуки
pluralize(5, 'нет штук', '%d штука', '%d штуки', '%d штук')  // => 5 штук
```
