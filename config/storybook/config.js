import { configure } from '@storybook/react'

// const req = require.context('../../components', true, /\.stories\.js$/)

// function loadStoryFiles() {
//   req.keys().forEach((filename) => req(filename))
// }

function loadStories() {
    require('../../stories/index.js')
    // require('../stories/nav.js');
    // You can require as many stories as you need.
}

configure(loadStories, module)