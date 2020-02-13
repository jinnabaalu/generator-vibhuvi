const chalk = require('chalk');
const packagejs = require('../../package.json');

module.exports = class {
    printJHipsterLogo
};

function printJHipsterLogo() {
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
            chalk.red('This can cause problems, you should always create a new directory and run the jhipster command from here.')
        );
        this.log(chalk.white(`See the troubleshooting section at ${chalk.yellow('https://www.jhipster.tech/installation/')}`));
    }
    this.log(
        chalk.green(
            ' _______________________________________________________________________________________________________________\n'
        )
    );
    this.log(
        chalk.white(`  Documentation for creating an application is at ${chalk.yellow('https://www.jhipster.tech/creating-an-app/')}`)
    );
    this.log(
        chalk.white(
            `  If you find JHipster useful, consider sponsoring the project at ${chalk.yellow(
                'https://opencollective.com/generator-jhipster'
            )}`
        )
    );
    this.log(
        chalk.green(
            ' _______________________________________________________________________________________________________________\n'
        )
    );
}