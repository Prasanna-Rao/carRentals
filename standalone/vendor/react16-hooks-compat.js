/* Compatibility adapter: render the React 18 source in the separately bundled React 16 offline demonstration. This file is NOT used in the Vite React 18 project. */
(function(){
  var active=null;
  function same(a,b){if(a===b)return true;if(!a||!b||a.length!==b.length)return false;for(var i=0;i<a.length;i++)if(a[i]!==b[i])return false;return true;}
  function getHook(){if(!active)throw Error('Hooks must be called from hookified components');var c=active;var i=c.slot++;return {c:c,i:i,h:c.hooks[i]};}
  React.Fragment=function Fragment(props){return props.children || null;};
  React.useState=function(initial){var x=getHook(),h=x.h;if(!h){h={value:typeof initial==='function'?initial():initial};x.c.hooks[x.i]=h;}var c=x.c;return [h.value,function(value){var newValue=typeof value==='function'?value(h.value):value;if(newValue!==h.value){h.value=newValue;c.setState(function(s){return {revision:s.revision+1};});}}];};
  React.useCallback=function(fn,deps){var x=getHook(),h=x.h;if(!h||!same(h.deps,deps)){h={fn:fn,deps:deps};x.c.hooks[x.i]=h;}return h.fn;};
  React.useEffect=function(effect,deps){var x=getHook(),h=x.h;if(!h){h={deps:null,cleanup:null};x.c.hooks[x.i]=h;}if(!same(h.deps,deps)){h.deps=deps;h.effect=effect;x.c.pending.push(h);}};
  window.withHooks=function(Component){return class HookWrapper extends React.Component{
    constructor(props){super(props);this.state={revision:0};this.hooks=[];this.slot=0;this.pending=[];}
    render(){this.slot=0;var previous=active;active=this;try{return Component(this.props);}finally{active=previous;}}
    componentDidMount(){this.flush();}
    componentDidUpdate(){this.flush();}
    componentWillUnmount(){for(var h of this.hooks){if(h&&typeof h.cleanup==='function'){h.cleanup();}}}
    flush(){var list=this.pending.splice(0);for(var h of list){if(typeof h.cleanup==='function')h.cleanup();var out=h.effect();h.cleanup=typeof out==='function'?out:null;}}
  };};
})();
