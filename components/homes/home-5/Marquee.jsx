import React from "react";

export default function Marquee() {
  const LiverpoolText = Array(24).fill("Based in Liverpool");
  const UnitedKingdomText = Array(24).fill("United Kingdom");
  const AiCompanyText = Array(24).fill("AI Company");
  const AiVidoesCreationText = Array(24).fill("AI Videos Creation");
  return (
    <>
      <div className="marquee marquee-style-1 mb-30 bg-dark-2">
        <div className="marquee-track marquee-animation">
          {
            LiverpoolText.map((text, index) => (
              <div key={index} area-hidden={index !==0}>{text}</div>
        ))}
        </div>
      </div>
      {/* End Marquee Text Line */}
      {/* Marquee Text Line */}
      <div className="marquee marquee-style-1 bg-dark-2 mb-30">
        <div className="marquee-track marquee-animation">
          {UnitedKingdomText.map((text, index) => (
            <div key={index} area-hidden={index !==0}>{text}</div>
          ))}
        </div>
      </div>
      <div className="marquee marquee-style-1 bg-dark-2 mb-30">
        <div className="marquee-track marquee-animation">
          {AiCompanyText.map((text, index) => (
            <div key={index} area-hidden={index !==0}>{text}</div>
          ))}
        </div>
      </div>
      <div className="marquee marquee-style-1 bg-dark-2 mb-30">
        <div className="marquee-track marquee-animation">
          {AiVidoesCreationText.map((text, index) => (
            <div key={index} area-hidden={index !==0}>{text}</div>
          ))}
        </div>
      </div>
    </>
  );
}
