import React from "react";

export default function MarqueeDark() {
  const LiverpoolText = Array(24).fill("Based in Liverpool");
  const UnitedKingdomText = Array(24).fill("United Kingdom");
  const AiCompanyText = Array(24).fill("AI Company");
  const AiVideosCreationText = Array(24).fill("AI Videos Creation");

  return (
    <>
      {/* Marquee for Liverpool */}
      <div className="marquee marquee-style-1 mb-30 bg-dark-2">
        <div className="marquee-track marquee-animation">
        {LiverpoolText.map((text, index) => (
            <div key={`liverpool-${index}`} aria-hidden={index !== 0}>
              {text}
            </div>
          ))}
          {AiCompanyText.map((text, index) => (
            <div key={`ai-company-${index}`} aria-hidden={index !== 0}>
              {text}
            </div>
          ))}
        </div>
      </div>
    
      {/* Marquee for AI Videos Creation */}
      <div className="marquee marquee-style-1 bg-dark-2 mb-30">
        <div className="marquee-track marquee-animation">
          {AiVideosCreationText.map((text, index) => (
            <div key={index} aria-hidden={index !== 0}>
              {text}
            </div>
          ))}
          {UnitedKingdomText.map((text, index) => (
            <div key={`united-kingdom-${index}`} aria-hidden={index !== 0}>
              {text}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
