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

    const prompts = [{
      type: 'confirm',
      name: 'someAnswer',
      message: 'Would you like to enable this option?',
      default: true
    }];

    return this.prompt(prompts).then(props => {
      // To access props later use this.props.someAnswer;
      this.props = props;
    });
  }

  printLogo() {
    this.log('\n');
    this.log(`${chalk.green('██        ██╗ ████████╗')}${chalk.red('  ███████╗  ██╗   ██╗ ██╗   ██╗ ')}${chalk.green('██        ██╗ ████████╗')}`);
    this.log(`${chalk.green(' ██      ██║  ╚══██╔══╝')}${chalk.red('  ██    ██╗ ██║   ██║ ██║   ██║ ')}${chalk.green(' ██      ██║  ╚══██╔══╝')}`);
    this.log(`${chalk.green('  ██    ██║      ██║   ')}${chalk.red('  ███████╔╝ ████████║ ██║   ██║ ')}${chalk.green('  ██    ██║      ██║   ')}`);
    this.log(`${chalk.green('   ██  ██║       ██║  ')}${chalk.red('   ██    ██╗ ██╔═══██║ ██║   ██║ ')}${chalk.green('   ██  ██║       ██║  ')}`);
    this.log(`${chalk.green('    ████╔╝    ████████╗ ')}${chalk.red(' ███████╔╝ ██║   ██║  ██████║  ')}${chalk.green('    ████╔╝    ████████╗ ')}`);
    this.log(`${chalk.green('    ╚═══╝     ╚═╝   ╚═╝ ')}${chalk.red(' ╚══════╝  ╚═╝   ╚═╝  ╚════╝ ')}${chalk.green('      ╚═══╝     ╚═╝   ╚═╝ ')}\n`);
    this.log(chalk.white.bold('                            https://generator.vibhuvi.com\n'));
    this.log(chalk.white('Welcome to Vibhuvi ') + chalk.yellow(`v${packagejs.version}`));
    this.log(chalk.white(`Application files will be generated in folder: ${chalk.yellow(process.cwd())}`));
    if (process.cwd() === this.getUserHome()) {
      this.log(chalk.red.bold('\n️⚠️  WARNING ⚠️  You are in your HOME folder!'));
      this.log(
        chalk.red('This can cause problems, you should always create a new directory and run the vibhuvi command from here.')
      );
      this.log(chalk.white(`See the troubleshooting section at ${chalk.yellow('https://generator.vibhuvi.tech/installation/')}`));
    }
    this.log(
      chalk.green(
        ' _______________________________________________________________________________________________________________\n'
      )
    );
    this.log(
      chalk.white(`  Documentation for creating an application is at ${chalk.yellow('https://generator.vibhuvi.com/creating-an-app/')}`)
    );
    this.log(
      chalk.white(
        `  If you find Vibhuvi useful, consider sponsoring the project at ${chalk.yellow(
                'https://opencollective.com/generator-vibhuvi'
            )}`
      )
    );
    this.log(
      chalk.green(
        ' _______________________________________________________________________________________________________________\n'
      )
    );
  }

  writing() {
    this.fs.copy(
      this.templatePath('dummyfile.txt'),
      this.destinationPath('dummyfile.txt')
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
