"use client";
import { DetailedHTMLProps, HTMLAttributes, useState } from "react";

interface ExpandableTextProp extends DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement> {
  text: string;
  maxLength: number;
}

const ExpandableText = ({ text, maxLength, ...rest }: ExpandableTextProp) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const toogleExpanded = () => setIsExpanded(!isExpanded);

  return (
    <div>
      <p className="text-gray-300 text-sm lg:text-base" {...rest}>
        {isExpanded ? text : `${text.substring(0, maxLength)}...`}
      </p>
      {maxLength < text.length ? (
        <button className="text-sm italic w-20 text-gray-400" onClick={toogleExpanded}>
          {isExpanded ? "Show less" : "Show more"}
        </button>
      ) : null}
    </div>
  );
};

export default ExpandableText;
