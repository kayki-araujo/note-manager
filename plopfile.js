export default function (
  /**@type {import('plop').NodePlopAPI;} */
  plop
) {
  plop.setGenerator('create', {
    description: 'create',
    prompts: [
      {
        type: 'input',
        name: 'parent',
        message: 'parent',
      },
      {
        type: 'input',
        name: 'name',
        message: 'name',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/{{parent}}/{{kebabCase name}}/{{kebabCase name}}.tsx',
        templateFile: './templates/component.template.hbs',
      },
      {
        type: 'add',
        path: 'src/{{parent}}/{{kebabCase name}}/index.tsx',
        templateFile: './templates/export.template.hbs',
      },
      {
        type: 'add',
        skipIfExists: true,
        path: 'src/{{parent}}/index.ts',
      },
      {
        type: 'append',
        path: 'src/{{parent}}/index.ts',
        templateFile: './templates/export.template.hbs',
      },
    ],
  });
}
