# Core Design Patterns

## 1. Singleton

Singletons are objects that an only have a single instance, with a single point of acces.

Note: In Node js modules are cached when they are accessed usign the require() statement.

### Run examples

Move to folder 01_Core_Design_Patterns

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


## 2. Factories -  Generic Interface for Creating Objects (Virtual contructor pattern)

Define an interfcae for creating an object, but let subclasses define which class to instantiate

### Run examples

Move to folder 01_Core_Design_Patterns

1. Factory
``` shell
ts-node src/factories/App.ts
```


### Summary
- The factory patter privides an interface for constructing pre-configured obbjects.
- Our code is cleaner and resilient.
- This pattern is extremely useful when writing NPM packages for public use.
- The abstract factory pattern makes the process even easier by offering a generic interface to build a family of related objects
