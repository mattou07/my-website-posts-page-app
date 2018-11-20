import React, { Component } from 'react';

class Tiles extends React.Component {
  render() {
    return <div className="tile is-ancestor">

    </div>
  }
}

function Content(props) {
  return (
    <article class="tile is-child notification is-success" id="tile-object-0">
      <p class="title">props.post.title</p>
      <p><a href={props.post.url}>props.post.urltitle</a></p>
    </article>
  );
}

function Tile(props) {
  return(
    <div className={props.tile.size}>
      <Content post={props.content}/>
    </div>
  );
}

function getData(){
  
}

export default Tiles;

