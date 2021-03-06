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

      let route = document.body.getAttribute('data-route');
      Router.fire(route);
      Router.fire(route, bodyId);

      Router.fire('common', 'finalize');
    }
  };
}
