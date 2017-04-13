import {CLIEngine} from 'eslint';

export default config => {
  const cli = new CLIEngine({
    useEslintrc: false,
    baseConfig: config
  });

  return cli.getConfigForFile('.').rules;
};
