# TS Dependency Injection Example

An example of how to get a barebones DI container set up in TypeScript.

I created this out of a curiosity of how dependancy injection would work in a JavaScript/TypeScript project.

The example I have created is using TypeScript, but that doesn't mean this is not viable in plain JavaScript, the main reason for using TypeScript is that it's easier to read and follow, and it gives you nice code completion in your editor and helps your spot errors you wouldn't have seen until runtime.

## Components

There are a few components to this example.

### Application

The application class is the starting point in the example. 

First, we instantiate the container and pass it the bindings that have been defined in config/bindings.ts

Then we create an instance of the application and run it. 

Inside the application's run method I just have a couple of lines where I request an instance of the DummyController from the container, which in turn, requests the DummyService class from the container and invokes its foo method and logs 'bar' to the console.

### Container

The container is the most important part of the example its job is to fulfill requests for classes by loading and executing factories.

When you request a class from the container using the get method, it looks up the classes factory using the config/bindings object.

Once it has the factory it will then load it using a dynamic import and then execute the factory's invoke function which will return an instance of the requested class.

### Factory

The factory is the class that is responsible for instantiating the requested class and returning it. 

Take for example the DummyControllerFactory, it is responsible for fulfilling any requests for the DummyController class. If you open the file you will notice that it just imports the DummyController class file and then instantiates a new one, but with one difference. It has a dependency.

This is where Dependency injection is handy, if you look at the DummyControllerFactory it requests an instance of the DummyService as that is needed by the DummyController in order to work.
