type ModuleType = {
    dependencies: any
}

export function Module(args: ModuleType) {

    if (!args?.dependencies) {
        throw new Error('dependencies should be passed');
    }
    
    const dependenciesInstances = args.dependencies.map((dependency: any) => {
        if (typeof dependency === "function") {
            return new dependency();
        }
        return dependency;
    });

  return (target: any) => target;
} 