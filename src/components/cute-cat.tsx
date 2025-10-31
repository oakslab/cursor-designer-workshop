import * as React from "react";

export interface CuteCatProps {
  size?: "sm" | "md" | "lg";
  staticAnim?: boolean;
  className?: string;
  ariaLabel?: string;
}

export function CuteCat({
  size = "md",
  staticAnim = false,
  className,
  ariaLabel = "Cute cat illustration",
}: CuteCatProps) {
  return (
    <div
      className={["qcat", className].filter(Boolean).join(" ")}
      role="img"
      aria-label={ariaLabel}
      data-size={size}
      data-static={staticAnim || undefined}
    >
      <div className="qcat-scene" aria-hidden="true">
        <div className="qcat-shadow" />
      </div>

      <div className="qcat-body" aria-hidden="true">
        <div className="qcat-tail" />
        <div className="qcat-torso" />
        <div className="qcat-paw qcat-paw--left" />
        <div className="qcat-paw qcat-paw--right" />
      </div>

      <div className="qcat-head" aria-hidden="true">
        <div className="qcat-ear qcat-ear--left" />
        <div className="qcat-ear qcat-ear--right" />

        <div className="qcat-face">
          <div className="qcat-eye qcat-eye--left">
            <div className="qcat-eyelid" />
            <div className="qcat-pupil" />
          </div>
          <div className="qcat-eye qcat-eye--right">
            <div className="qcat-eyelid" />
            <div className="qcat-pupil" />
          </div>

          <div className="qcat-nose" />

          <div className="qcat-whiskers qcat-whiskers--left">
            <span />
            <span />
            <span />
          </div>
          <div className="qcat-whiskers qcat-whiskers--right">
            <span />
            <span />
            <span />
          </div>

          <div className="qcat-mouth">
            <div className="qcat-mouth--left" />
            <div className="qcat-mouth--right" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CuteCat;


