#! /usr/bin/env node

const program = require('commander')
const command = require('../command/command')

/**
 * version:
 * b-webpack -V
 */
const packageJson = require('../package.json')
program
  .version(packageJson.version)

/**
 * init:
 * b-webpack init --config config.json
 */
program
  .command('init')
  .alias('i')
  .option("-c, --config [c]", "beautiful-webpack配置文件")
  .description('创建beautiful-webpack的配置文件模板')
  .action(x => {
    command.init(x['config'])
  })

/**
 * build:
 * b-webpack build --config config.json
 */
program
  .command('build')
  .alias('b')
  .option("-c, --config [c]", "beautiful-webpack配置文件")
  .description('用beautiful-webpack的配置文件优化webpack-config.js配置文件')
  .action(x => {
    command.build(x['config'])
})

/**
 * run:
 * b-webpack run --config config.json
 */
program
  .command('run')
  .alias('r')
  .option("-c, --config [c]", "beautiful-webpack配置文件")
  .description('修改webpack文件后运行webpack-dev-server')
  .action(x => {
    command.run(x['config'])
})


program.parse(process.argv)