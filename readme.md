# Intention

* I needed to copy lots of strings
* They had to be formatted like that
* Just to make another package

# Built-in functionality

* Processing
* Copying processed text to the clipboard

# Usage

```bash
npm install
npm start || node index.js # node index.js words faster
# Enter strings you need to split and finish with Ctrl-D (on Windows)
```

# Example

```bash
$ npm start

> splitjs@1.0.0 start D:\Projects\mkloouo\splitjs
> node index.js

usage: node.exe index.js [example] [length]
> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean non fringilla tellus. Sed malesuada dui in viverra auctor. Cras sodales ultrices justo, id sollicitudin justo ullamcorper at. Phasellus nec ex quis tellus convallis fermentum at ac risus. Integer semper elementum massa id pharetra. Sed quis enim est. Duis velit massa, dapibus vel fermentum in, eleifend ac mauris. Donec ante tortor, vulputate at efficitur nec, rhoncus sed eros.
> Result
'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean non fringill' +
'a tellus. Sed malesuada dui in viverra auctor. Cras sodales ultrices justo, ' +
'id sollicitudin justo ullamcorper at. Phasellus nec ex quis tellus convallis' +
' fermentum at ac risus. Integer semper elementum massa id pharetra. Sed quis' +
' enim est. Duis velit massa, dapibus vel fermentum in, eleifend ac mauris. D' +
'onec ante tortor, vulputate at efficitur nec, rhoncus sed eros.'
> Also copied to clipboard
```
