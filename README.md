# angular-search
Simple Search with Angular - es5/es6.

## Installation
```
$ git clone https://github.com/oeduardoal/search-angular.git project
```

## Starting
### Install packages
```
$ cd project && npm i
```

### Install global packages - webpack
To avoid errors :grin:
```
$ npm i -g webpack webpack-dev-server
```

## Now yes! :smiley:

## To change es5
```
$ git checkout es5
```
```
$ webpack-dev-server --progress --colors --open
```

## To change es6
```
$ git checkout es6
```
```
$ npm start
```

### Ports, envs and settings wepack-dev-server in `webpack.config.js`
```
[...]
	devServer: {
		inline:true,
		port: 1234,
	}
```

## Help with style.css, pls. Create a branch! :open_hands:

## License

[MIT LICENSE](https://github.com/oeduardoal/search-angular/blob/master/LICENSE) @ 2017 Eduardo Almeida
