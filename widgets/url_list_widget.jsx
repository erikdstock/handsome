import React from 'react';
import ListWidget from 'widgets/list_widget';

import './list_widget.scss';

export default class UrlListWidget extends ListWidget {

  constructor(props) {
    super(props);
    this.state = {title: "init", list: ["init"]};
  }

  render() {
    var list = this.state.list.map(function (item) {
      return (
        <li key={item.title}><a href={item.url}>{item.title}</a> </li>
      );
    });
    return (
      <div className={"list_widget widget w" + this.props.width + " h" + this.props.height}>
        <h1>{this.props.title}</h1>
        <ul>
          {list}
        </ul>
      </div>
    );
  }
}
