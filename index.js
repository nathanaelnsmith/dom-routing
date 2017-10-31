export default (routes) => {
  return {
    fire(func, funcname, args) {
      funcname = (funcname === undefined) ? 'init' : funcname;
      if (func !== '' && routes[func] && typeof routes[func][funcname] == 'function') {
        routes[func][funcname](args);
      }
    },
    load() {
      var bodyId = document.body.id;
      let Router = this;
      // hit up common first.
      Router.fire('common');

      // do all the classes too.
      document.body.className.split(/\s+/).forEach(function(classnm) {
        Router.fire(classnm);
        Router.fire(classnm, bodyId);
      });

      Router.fire('common', 'finalize');
    }
  };
}
