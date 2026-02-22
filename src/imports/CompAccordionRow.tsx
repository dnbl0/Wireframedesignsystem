import svgPaths from "./svg-iko0xihcpl";

export default function CompAccordionRow() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative size-full" data-name="comp/accordion-row">
      <div aria-hidden="true" className="absolute border-[rgba(35,38,50,0.5)] border-b border-solid border-t inset-0 pointer-events-none" />
      <div className="relative shrink-0 w-full" data-name="Heading Box">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[16px] py-[24px] relative w-full">
            <div className="content-stretch flex flex-[1_0_0] gap-[16px] items-center min-h-px min-w-px relative">
              <div className="flex flex-[1_0_0] flex-col font-['Nobel:regular',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#232632] text-[18px] tracking-[0.23px]">
                <p className="leading-[27px] whitespace-pre-wrap">BUY</p>
              </div>
              <div className="relative shrink-0 size-[16px]" data-name="Arrows/arrow-up">
                <div className="absolute contents inset-[27.1%_13.04%]" data-name="neue chevron down">
                  <div className="absolute flex inset-[27.1%_13.04%] items-center justify-center">
                    <div className="flex-none h-[14.657px] rotate-180 w-[23.657px]">
                      <div className="relative size-full" data-name="Icons/dropdown arrow">
                        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.8284 7.32843">
                          <g id="Icons/dropdown arrow">
                            <path d={svgPaths.p36934071} fill="var(--fill-0, #232632)" id="XMLID 26403" />
                          </g>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative shrink-0 w-full" data-name="Content Box">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center pb-[24px] px-[16px] relative w-full">
            <div className="flex flex-[1_0_0] flex-col font-['Nobel:Book',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#232632] text-[19px]">
              <p className="leading-[29px] whitespace-pre-wrap">{`Encore Platinum Benefits apply on new and demonstrator L-Series & F model vehicles sold on or after 03/08/2020 for a 3 year period from the date Encore is first activated by the Dealership. `}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}