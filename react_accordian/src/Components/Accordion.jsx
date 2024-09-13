import React, { useEffect, useState } from "react";

import faq from "../API/faq.json";
import FAQ from "./FAQ";

const Accordion = () => {
  const [isActive, setIsActive] = useState(false);

  const handleButton = (id) => {
    setIsActive(prev => (prev === id ? false : id));
  }

  return (
    <ul className="w-full p-8">
      {faq.map((faq, i) => (
        <FAQ key={faq.id} data={faq} isActive={isActive === faq.id} onToggle={() => handleButton(faq.id)} />
      ))}
    </ul>
  );
};

export default Accordion;
