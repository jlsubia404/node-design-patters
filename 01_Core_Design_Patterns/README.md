# Core Design Patterns

## Singleton

Singletons are objects that an only have a single instance, with a single point of acces.

Note: In Node js modules are cached when they are accessed usign the require() statement.

### Run examples

1. Singleton Object
``` shell
ts-node src/singleton/Singleton_Object/App.ts
```

1. Singleton Class
``` shell
ts-node src/singleton/Singleton_Class/App.ts
```

### Summary
- As a singleton, objects can only have a single instance, with a single point of acces.

- Node's module system caches modules.

- The module system offers a rudimentary implementation of a singleton.

- This behavior is dependent on filename consistency.

- Inconsistent file names will result in multiple cached instances.

- When working with classes, instantiating a class before exporting it out of a module will result in an instance.