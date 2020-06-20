import React from 'react';
import moment from "moment";

import Lol from '../../static/icons/lol.png'
import Swords from "../../static/icons/Swords.png";
import IconCreate from "../../static/icons/IconCreate.png";
import IconDate from "../../static/icons/IconDate.png";
import IconStatus from "../../static/icons/IconStatus.png";

import {
  Row,
  GameIcon,
  MatchUser,
  Creator,
  Date,
  Status
} from './style'

const DisputesItem = ({data}) => { 
  let date = moment(data.createdAt).format("DD.MM.YYYY");

  return (
    <Row>
        
        <MatchUser>
          <GameIcon src={Lol} />
          
          <strong>
            <b>{data.match.users[0]}</b>
            <img id="Swords" src={Swords} alt="" />
            <b>{data.match.users[1]}</b>
          </strong>
          
          <span>
            <span>Düello#{data.match.duel}</span>
            <span>{data.type}</span>
          </span>
        </MatchUser>

        <Creator>
          <span>
            <img id="IconCreate" src={IconCreate} alt="" /> Oluşturan
          </span>
          
          <strong>{data.creator}</strong>
        </Creator>

        <Date>
          <span><img id="IconDate" src={IconDate} alt="" /> Tarih</span>
          <strong>{date}</strong>
        </Date>

        <Status status={data.status}>
          <span><img id="IconStatus" src={IconStatus} alt="" /> Durum</span>
          <strong>{data.statusData}</strong>
        </Status>

    </Row>
  )
}

export default DisputesItem;