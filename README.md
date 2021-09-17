# Jsmp-infra-mariia-sychova-wordreplace

Replaces all occurrences of a particular word with another one.

## Install

```javascript
$ npm install jsmp-infra-mariia-sychova-wordreplace
```

## Usage

```javascript
const { wordreplace } = require('jsmp-infra-mariia-sychova-wordreplace');

wordreplace('Replace me, replace me, replace me!', 'replace', 'do not touch');
//=> 'Replace me, do not touch me, do not touch me!'
```