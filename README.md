# generators

[![Latest Version on Packagist][ico-version]][link-packagist]
[![Software License][ico-license]](LICENSE.md)
[![Build Status][ico-travis]][link-travis]
[![Coverage Status][ico-scrutinizer]][link-scrutinizer]
[![Quality Score][ico-code-quality]][link-code-quality]
[![Total Downloads][ico-downloads]][link-downloads]

Generators - Generate application / package skeleton based on [skeleton](https://github.com/thephpleague/skeleton). 
Provide support for PHP, league, composer, laravel 5.1, nodejs and angularjs based project. 


## Install

Require [nodejs](https://nodejs.org/).

Clone the repo `git clone https://github.com/consigliere/generators.git`. 
- In the cli do `npm install gulpjs/gulp-cli#4.0 -g`. 
- Navigate to the project root then `npm install`.

## Usage

``` php
# Edit packages data in config/dataSrc/dataSrc.json
# Configuration @ config.js.

# Available cli command as follow :

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

## Change log

Please see [CHANGELOG](CHANGELOG.md) for more information what has changed recently.

## Testing

``` bash
$ composer test
```

## Contributing

Please see [CONTRIBUTING](CONTRIBUTING.md) for details.

## Security

If you discover any security related issues, please email 50c5ac69@opayq.com instead of using the issue tracker.

## Credits

- [anonymoussc][link-author]
- [All Contributors][link-contributors]

## License

The MIT License (MIT). Please see [License File](LICENSE.md) for more information.

[ico-version]: https://img.shields.io/packagist/v/consigliere/generators.svg?style=flat-square
[ico-license]: https://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat-square
[ico-travis]: https://img.shields.io/travis/consigliere/generators/master.svg?style=flat-square
[ico-scrutinizer]: https://img.shields.io/scrutinizer/coverage/g/consigliere/generators.svg?style=flat-square
[ico-code-quality]: https://img.shields.io/scrutinizer/g/consigliere/generators.svg?style=flat-square
[ico-downloads]: https://img.shields.io/packagist/dt/consigliere/generators.svg?style=flat-square

[link-packagist]: https://packagist.org/packages/consigliere/generators
[link-travis]: https://travis-ci.org/consigliere/generators
[link-scrutinizer]: https://scrutinizer-ci.com/g/consigliere/generators/code-structure
[link-code-quality]: https://scrutinizer-ci.com/g/consigliere/generators
[link-downloads]: https://packagist.org/packages/consigliere/generators
[link-author]: https://github.com/consigliere
[link-contributors]: ../../contributors
