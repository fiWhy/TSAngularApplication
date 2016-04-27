System.config({
    defaultJSExtensions: true,
    typescriptOptions: { emitDecoratorMetadata: true },
    paths: {
        'systemjs': '../node_modules/systemjs/dist/system.js',
        'system-polyfills': '../node_modules/systemjs/dist/system-polyfills.js',
        'es6-module-loader': '../node_modules/es6-module-loader/dist/es6-module-loader.js',
        'typescript': '../node_modules/typescript/lib/typescript.js',
    },
});
