import React from "react";
import "../App.css";
import Member from "../atoms/Member";
import SectionText from "../atoms/SectionText";

const Team = ({title, subTitle}) => {
  return (
    <div className="team container">
      <SectionText title={title} subTitle={subTitle}/>
      <div className="team-list">
        <Member
          name="Sarah"
          position="CEO"
          image="https://discoverymood.com/wp-content/uploads/2020/04/Mental-Strong-Women-min-480x340.jpg"
        />
        <Member
          name="Sarah"
          position="CEO"
          image="https://discoverymood.com/wp-content/uploads/2020/04/Mental-Strong-Women-min-480x340.jpg"
        />
        <Member
          name="Sarah"
          position="CEO"
          image="https://discoverymood.com/wp-content/uploads/2020/04/Mental-Strong-Women-min-480x340.jpg"
        />
        <Member
          name="Sarah"
          position="CEO"
          image="https://discoverymood.com/wp-content/uploads/2020/04/Mental-Strong-Women-min-480x340.jpg"
        />
        <Member
          name="Sarah"
          position="CEO"
          image="https://discoverymood.com/wp-content/uploads/2020/04/Mental-Strong-Women-min-480x340.jpg"
        />
        <Member
          name="Sarah"
          position="CEO"
          image="https://discoverymood.com/wp-content/uploads/2020/04/Mental-Strong-Women-min-480x340.jpg"
        />
        <Member
          name="Sarah"
          position="CEO"
          image="https://discoverymood.com/wp-content/uploads/2020/04/Mental-Strong-Women-min-480x340.jpg"
        />
        <Member
          name="Sarah"
          position="CEO"
          image="https://discoverymood.com/wp-content/uploads/2020/04/Mental-Strong-Women-min-480x340.jpg"
        />
      </div>
    </div>
  );
};

export default Team;
