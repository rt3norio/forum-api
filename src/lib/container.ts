import { Lifetime, InjectionMode, createContainer, asValue, AwilixContainer } from 'awilix';
import { logger } from './logger';

const modulesToLoad = [
  ['services/*.js', Lifetime.SCOPED],
  ['stores/*.js', Lifetime.SINGLETON]
];

/**
 * @returns {AwilixContainer} The container
 */
export function configureContainer(): AwilixContainer {
  const options = {
    injectionMode: InjectionMode.CLASSIC
  };
  return createContainer(options)
    .loadModules(modulesToLoad, {
      cwd: `${__dirname}/..`,
      formatName: 'camelCase'
    })
    .register({
      logger: asValue(logger)
    });
}