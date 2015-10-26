import $ from 'jquery';
import setHeading from './lib/headings';
// import * as foo from './lib/foo';
import  Foo from './lib/foo';
$(() => {

    $('header').html(setHeading('Get TypeScript and ES6!'));
    console.log('12345');
    let foo = new Foo();
    foo.speack();
});
