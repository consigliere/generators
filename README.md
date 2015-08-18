# generators

[![Latest Version](https://img.shields.io/github/release/consigliere/generators.svg?style=flat-square)](https://github.com/consigliere/generators/releases)
[![Software License](https://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat-square)](LICENSE.md)
[![Build Status](https://img.shields.io/travis/consigliere/generators/master.svg?style=flat-square)](https://travis-ci.org/consigliere/generators)
[![Coverage Status](https://img.shields.io/scrutinizer/coverage/g/consigliere/generators.svg?style=flat-square)](https://scrutinizer-ci.com/g/consigliere/generators/code-structure)
[![Quality Score](https://img.shields.io/scrutinizer/g/consigliere/generators.svg?style=flat-square)](https://scrutinizer-ci.com/g/consigliere/generators)
[![Total Downloads](https://img.shields.io/packagist/dt/consigliere/generators.svg?style=flat-square)](https://packagist.org/packages/consigliere/generators)

Generators - Generate application / package skeleton based on [skeleton](https://github.com/thephpleague/skeleton). 
Provide support for PHP, league, composer, laravel, nodejs and angularjs based project. 

## Install

Require [nodejs](https://nodejs.org/).

Clone the repo `git clone https://github.com/consigliere/generators.git`. 
- In the cli do `npm install gulpjs/gulp-cli#4.0 -g`. 
- Navigate to the project root then `npm install`.

## Usage

``` php
# Edit packages data in config/dataSrc/dataSrc.json
# Configuration @ config.js.

# Still in project root, available cli command as follow :

# League
gulp -g league

# Composer
gulp -g composer

# Laravel 5
gulp -g laravel

# Angularjs / ngApps
gulp -g ngApps

# Angularjs / ngApp
gulp -g ngApp

# Generator Laravel 5 package / ng apps
gulp -g laravel --ngApps

# Generator Laravel 5 package / ng app
gulp -g laravel --ngApp
```

## Testing

``` bash

```

## Contributing

Please see [CONTRIBUTING](CONTRIBUTING.md) for details.

## Security

If you discover any security related issues, please email 50c5ac69@opayq.com instead of using the issue tracker.

## Credits

- [anonymoussc](https://github.com/consigliere)
- [All Contributors](../../contributors)

## License

The MIT License (MIT). Please see [License File](LICENSE.md) for more information.