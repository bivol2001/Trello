import React, { useState } from "react";
import CardPopover from "./CardPopover";
import { useNavigate } from "react-router-dom";

interface CardDataInterface {
  title: string;
  description: string;
}

interface NavBarPopoverProps {
  cardData: CardDataInterface[];
}

const NavBarPopover = ({ cardData }: NavBarPopoverProps) => {
  const navigate = useNavigate();
  const [isPopover, setIsPopover] = useState<boolean>(true);
  return (
    <div className="pop">
      {isPopover && (
        <div
          className="popoverFundal"
          onClick={() => {
            setIsPopover(!isPopover);
          }}
        >
          <div className="NavBarPopover">
            <div className="divCard">
              <div className="cardline">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Ipsum, corporis.
                </p>
                <hr />
              </div>
              {cardData.map((el, index) => (
                <CardPopover
                  title={el.title}
                  description={el.description}
                  key={index}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavBarPopover;
