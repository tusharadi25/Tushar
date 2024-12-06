#!/usr/bin/env node
// 👆 Used to tell Node.js that this is a CLI tool

// Pull in our modules
var chalk = require('chalk')
var boxen = require('boxen')

// Define options for Boxen
let options = {
  padding: 1,
  margin: 1,
  borderStyle: 'round'
}
// Text + chalk definitions
let data = {
  'name': chalk.white('Tushar Adivarekar/'),
  'handle': chalk.cyan('tusharadi25'),
  'work': chalk.white('Developer at Nutanix'),
  'twitter': chalk.cyan('https://twitter.com/tusharadi25'),
  'github': chalk.cyan('https://github.com/tusharadi25'),
  'linkedin': chalk.cyan('https://www.linkedin.com/in/tusharadi25'),
  'Instagram': chalk.cyan('https://www.instagram.com/tushar_adivarekar'),
  'npx': chalk.white('npx tusharadi'),
  'labelWork': chalk.white.bold('      Work:'),
  'labelTwitter': chalk.white.bold('   Twitter:'),
  'labelGitHub': chalk.white.bold('    GitHub:'),
  'labelLinkedIn': chalk.white.bold('  LinkedIn:'),
  'labelWeb': chalk.white.bold(' Instagram:'),
  'labelCard': chalk.white.bold('      Card:')
}

// Actual strings we're going to output
var newline = '\n'
var heading = `${data.name} ${data.handle}`
var working = `${data.labelWork}  ${data.work}`
var githubing = `${data.labelGitHub}  ${data.github}`
var linkedining = `${data.labelLinkedIn}  ${data.linkedin}`
var instagram = `${data.labelWeb}  ${data.Instagram}`

// Put all our output together into a single variable so we can use boxen effectively
let output = heading + newline + newline + working + newline + githubing + newline + linkedining + newline + instagram + newline

console.log(chalk.green(boxen(output, options)))
