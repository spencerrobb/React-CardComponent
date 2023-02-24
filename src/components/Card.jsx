import React from 'react';
import Avatar from './Avatar.jsx';
import Detail from './Detail.jsx';

function Card(props) {
  return (
    <div className="card">
      <div className="top">
        <p> {props.id} </p>
        <h2 className="name">{props.name}</h2>
        <Avatar img={props.img} />
      </div>
      <div class="bottom">
        <Detail detailInfo={props.tel} />
        <Detail detailInfo={props.email} />
      </div>
    </div>
  );
}

export default Card;
