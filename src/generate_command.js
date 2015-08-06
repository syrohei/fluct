import BaseCommand from './base_command'

/**
 * @class
 */
export default class GenerateCommand extends BaseCommand {
  /**
   * @param {String} generator Only "action" is supported
   * @param {String} name
   * @param {Command} command A command object of commander.js
   */
  constructor({ command, generator, name }) {
    super();
    this.command = command;
    this.generator = generator;
    this.name = name;
  }

  createActionDirectory() {
    this.createDirectory(this.getActionPath());
  }

  createIndexJs() {
    this.copyFile(this.getIndexJsTemplatePath(), `${this.getActionPath()}/index.js`);
  }

  createPackageJson() {
    this.copyFile(this.getPackageJsonTemplatePath(), `${this.getActionPath()}/package.json`);
  }

  /**
   * @return {String}
   */
  getActionPath() {
    return `./actions/${this.name}`;
  }

  /**
   * @return {String}
   */
  getIndexJsTemplatePath() {
    return `${__dirname}/../templates/index.js`;
  }

  /**
   * @return {String}
   */
  getPackageJsonTemplatePath() {
    return `${__dirname}/../templates/package.json`;
  }

  /**
   * Call this method to run this command.
   */
  run() {
    this.createActionDirectory();
    this.createIndexJs();
    this.createPackageJson();
  }
}