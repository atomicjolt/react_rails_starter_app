import React                                                                            from "react";

// Note: If you override componentDidMount or componentWillUnmount you will need to
// call super.componentDidMount() or super.componentWillUnmount() or call
// watchStores() and unWatchStores() directly.
export default class BaseComponent extends React.Component {

  constructor(props, context) {
    super(props, context);
    this._bind("storeChanged");
  }

  _bind(...methods) {
    methods.forEach( (method) => this[method] = this[method].bind(this) );
  }

  // Method to update state based upon store changes
  storeChanged(){
    this.setState(this.getState(this.props, this.context));
  }

  componentDidMount(){
    this.watchStores();
  }

  componentWillUnmount(){
    this.unWatchStores();
  }

  // Listen for changes in the stores
  watchStores(){
    _.each(this.stores, function(store){
      store.addChangeListener(this.storeChanged);
    }.bind(this));
  }

  // Remove change listers from stores
  unWatchStores(){
    _.each(this.stores, function(store){
      store.removeChangeListener(this.storeChanged);
    }.bind(this));
  }

}