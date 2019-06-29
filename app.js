const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

    function makeGreen() {
      const p = document.querySelector('p');
      p.style.color = '#BADA55';
      p.style.fontSize = '50px';
    }

    // Regular
    console.log('Hello! I am just a regular console log!');

    // Interpolated
    console.log('Hello! I can %s! How cool!', 'interpolate');

    // Styled
    // whatever text follows the %c will be styled
    console.log('%c I am large, pink text with a purple background!', 'font-size: 30px; color: pink; background-color: purple');

    // warning!
    console.warn('Watch out!');

    // Error :|
    console.error('Maybe you should rethink that...');

    // Info
    console.info('Did you know that watermelons are vegetables?');

    // Testing
    //console.assert only runs when the first argument is incorrect!
    console.assert(1 === 2, 'you are wrong!');

    // clearing
    // console.clear();

    // Viewing DOM Elements
    const p = document.querySelector('p');
    console.log(p)

    // Grouping together

    // counting

    // timing
