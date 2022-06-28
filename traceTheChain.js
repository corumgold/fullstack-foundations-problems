const traceTheChain = (arg) => {
    debugger;
    let chain = [];
    let proto = Object.getPrototypeOf(arg);
    while (proto) {
      if (proto) chain.push(proto);
      proto = Object.getPrototypeOf(proto);
    }
    return chain;
  };
