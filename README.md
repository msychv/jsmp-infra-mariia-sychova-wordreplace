# Wordreplace

Replaces all occurrences of a particular word with another one.

## Install

```javascript
$ npm install wordreplace
```

## Usage

```javascript
const { wordreplace } = require('wordreplace');

wordreplace('Replace me, replace me, replace me!', 'replace', 'do not touch');
//=> 'Replace me, do not touch me, do not touch me!'
```