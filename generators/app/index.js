/**
 * Copyright 2020 the original author or authors from the Vibhuvi project.
 *
 * This file is part of the Vibhuvi project, see https://generator.vibhuvi.com/
 * for more information.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');
const packagejs = require('../../package.json');

module.exports = class extends Generator {
  prompting() {
    // Have Yeoman greet the user.
    this.printLogo();

    const prompts = this.getPrompts();

    return this.prompt(prompts).then(props => {
      // To access props later use this.props.someAnswer;
      this.props = props;
    });
  }

  getPrompts() {
    return [{
      type: 'confirm',
      name: 'someAnswer',
      message: 'Would you like to enable this option?',
      default: true
    }];
  }

  printLogo() {
    this.log(
      chalk.white(
        ' ____________________________________________________________________________________'
      )
    );
    this.log(`${chalk.white('|                                                                                    |')}`);
    this.log(`${chalk.white('|                                                                                    |')}`);
    this.log(`${chalk.white('|                                                                                    |')}`);
    this.log(`${chalk.white('|   ██        ██╗ ████████╗')}${chalk.cyan('  ███████╗  ██╗   ██╗ ██╗   ██╗ ')}${chalk.white('██        ██╗ ████████╗   |')}`);
    this.log(`${chalk.white('|    ██      ██╔╝ ╚══██╔══╝')}${chalk.cyan('  ██    ██╗ ██║   ██║ ██║   ██║ ')}${chalk.white(' ██      ██╔╝ ╚══██╔══╝   |')}`);
    this.log(`${chalk.white('|     ██    ██╔╝     ██║   ')}${chalk.cyan('  ███████╔╝ ████████║ ██║   ██║ ')}${chalk.white('  ██    ██╔╝     ██║      |')}`);
    this.log(`${chalk.white('|      ██  ██╔╝      ██║  ')}${chalk.cyan('   ██    ██╗ ██╔═══██║ ██║   ██║ ')}${chalk.white('   ██  ██╔╝      ██║      |')}`);
    this.log(`${chalk.white('|       ████╔╝    ████████╗ ')}${chalk.cyan(' ███████╔╝ ██║   ██║  ██████╔╝ ')}${chalk.white('    ████╔╝    ████████╗   |')}`);
    this.log(`${chalk.white('|       ╚═══╝     ╚═══════╝ ')}${chalk.cyan(' ╚══════╝  ╚═╝   ╚═╝   ╚════╝ ')}${chalk.white('     ╚═══╝     ╚═══════╝   |')}`);
    this.log(`${chalk.white('|                                                                                    |')}`);
    this.log(`${chalk.white('|                                                                                    |')}`);
    this.log(chalk.white.bold('|                              Containerise Everything                               |'));
    this.log(`${chalk.white('|                                                                                    |')}`);
    this.log(chalk.white.bold('|                            https://generator.vibhuvi.com                           |'));
    this.log(`${chalk.white('|                                                                                    |')}`);
    this.log(`${chalk.white('|                      ________________________________________                      |')}`);
    this.log(`${chalk.white('|                                                                                    |')}`);
    this.log(`${chalk.white('|                                                                                    |')}`);
    this.log(chalk.white('|        Welcome to Vibhuvi ') + chalk.green(`v${packagejs.version}${chalk.white('                                                   |')}`));
    this.log(chalk.white(`|        App and Containerization conf files will be generated in PWD                |`));
    if (process.cwd() === this.getUserHome()) {
      this.log(`${chalk.white('|                                                                                    |')}`);
      this.log(chalk.cyan.bold('|    ⚠️  WARNING ⚠️  You are in your HOME folder!                                      |'));
      this.log(`${chalk.white('|                                                                                    |')}`);
      this.log(
        chalk.cyan('   This can cause problems, you should always create a new directory and run the vibhuvi command from here.')
      );
      this.log(`${chalk.white('|                                                                                    |')}`);
      this.log(chalk.white(`|   See the troubleshooting section at ${chalk.green('https://generator.vibhuvi.tech/installation/')}  |`));
    }
   
    this.log(`${chalk.white('|                                                                                    |')}`);
    this.log(`${chalk.white('|                      ________________________________________                      |')}`);
    this.log(`${chalk.white('|                                                                                    |')}`);
    this.log(`${chalk.white('|                                                                                    |')}`);
    this.log(
      chalk.white(`|        Documentation : ${chalk.green('https://generator.vibhuvi.com/creating-an-app/')}              |`)
    );
    this.log(`${chalk.white('|                                                                                    |')}`);
    this.log(`${chalk.white('|                                                                                    |')}`);
    this.log(
      chalk.white(
        '|____________________________________________________________________________________|\n'
      )
    );
  }

  
  install() {
    this.installDependencies();
  }

  /**
   * Return the user home
   */
  getUserHome() {
    return process.env[process.platform === 'win32' ? 'USERPROFILE' : 'HOME'];
  }
};
