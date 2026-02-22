import svgPaths from "./svg-whq4q33ezn";

function IconLogo() {
  return (
    <div className="absolute inset-[12.5%_0.08%_15.45%_0]" data-name="icon/logo">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 31.9739 23.0548">
        <g id="icon/logo">
          <path clipRule="evenodd" d={svgPaths.p19a00700} fill="var(--fill-0, #232632)" fillRule="evenodd" id="Colour" />
          <mask height="24" id="mask0_3_2027" maskUnits="userSpaceOnUse" style={{ maskType: "luminance" }} width="32" x="0" y="0">
            <path clipRule="evenodd" d={svgPaths.p19a00700} fill="var(--fill-0, white)" fillRule="evenodd" id="Colour_2" />
          </mask>
          <g mask="url(#mask0_3_2027)" />
        </g>
      </svg>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex font-['Nobel:Bold',sans-serif] gap-[16px] items-center leading-[1.15] not-italic relative shrink-0 text-[22px] text-[rgba(0,0,0,0.9)] tracking-[1.1px] uppercase">
      <p className="relative shrink-0">|</p>
      <p className="relative shrink-0">cell</p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="absolute content-stretch flex gap-[16px] items-center left-[32px] top-[16px]">
      <div className="relative shrink-0 size-[32px]" data-name="lexus-logo-icon">
        <IconLogo />
      </div>
      <p className="font-['Nobel:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[18px] text-[rgba(0,0,0,0.9)] tracking-[0.36px] uppercase">{`componentS `}</p>
      <Frame3 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="absolute content-stretch flex items-center left-[31px] top-[15px]">
      <p className="font-['Nobel:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[18px] text-[rgba(0,0,0,0.9)] tracking-[0.36px] uppercase">lexuskit</p>
    </div>
  );
}

function Status1() {
  return (
    <div className="absolute bg-[#ffb497] border border-[#dad8ce] border-solid h-[45px] left-[1632.92px] overflow-clip rounded-[20px] top-[10px] w-[145px]" data-name="_Status">
      <Frame4 />
    </div>
  );
}

function Status() {
  return (
    <div className="bg-[#fafaf9] h-[64px] relative rounded-[20px] shrink-0 w-full" data-name="_Status">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <Frame2 />
        <Status1 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#dad8ce] border-solid inset-0 pointer-events-none rounded-[20px]" />
    </div>
  );
}

function Stack1() {
  return (
    <div className="content-stretch flex flex-col font-['Nobel:Book',sans-serif] gap-[16px] items-start not-italic relative shrink-0 w-[900px]" data-name="Stack">
      <p className="leading-[1.15] relative shrink-0 text-[49px] text-[rgba(0,0,0,0.9)] tracking-[2.45px] uppercase">cell</p>
      <div className="flex flex-col justify-center leading-[0] min-w-full relative shrink-0 text-[#232632] text-[22px] tracking-[0.275px] w-[min-content]">
        <p className="leading-[1.3] whitespace-pre-wrap">{`A layout component which will be used within the ‘row’ container component. Cell is a slot element which can hold content like text, images etc. `}</p>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col items-start leading-[0] not-italic relative shrink-0 w-[296px]">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[32px] justify-center relative shrink-0 text-[#e94100] text-[11px] tracking-[0.055px] w-[160px]" style={{ fontFeatureSettings: "\'ss02\'" }}>
        <p className="leading-[16px] whitespace-pre-wrap">Storybook</p>
      </div>
      <p className="font-['Nobel:Book',sans-serif] relative shrink-0 text-[13px] text-[rgba(0,0,0,0.6)] tracking-[0.13px] w-[296px] whitespace-pre-wrap">
        <span className="leading-[22px]">{`For engineering implementation details, `}</span>
        <a className="[text-decoration-skip-ink:none] cursor-pointer decoration-solid leading-[22px] underline" href="https://lexuskit.lexus.com.au/?path=/docs/components-bargraph--documentation">
          <span className="[text-decoration-skip-ink:none] decoration-solid leading-[22px]" href="https://lexuskit.lexus.com.au/?path=/docs/components-bargraph--documentation">
            take a look at this component in Storybook
          </span>
        </a>
        <span className="leading-[22px]">.</span>
      </p>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex items-end justify-end relative shrink-0 w-[798px]">
      <div className="bg-[rgba(255,180,151,0.5)] content-stretch flex flex-col gap-[10px] items-start pb-[16px] pt-[8px] px-[40px] relative rounded-[6px] shrink-0 w-[352px]" data-name="_Label/Storybook">
        <Frame />
        <div className="absolute left-[16px] overflow-clip size-[16px] top-[16px]" data-name="Editor / icon-16-code">
          <div className="absolute inset-[22.79%_6.56%_19.76%_6.56%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.9 9.192">
              <path clipRule="evenodd" d={svgPaths.p1ddc1600} fill="var(--fill-0, #E94100)" fillRule="evenodd" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Stack() {
  return (
    <div className="content-stretch flex items-end justify-between relative shrink-0 w-full" data-name="Stack">
      <Stack1 />
      <Frame5 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <p className="font-['Nobel:Regular',sans-serif] leading-[24px] relative shrink-0 text-[#33a329] text-[18px] tracking-[0.36px] uppercase w-full whitespace-pre-wrap">dos</p>
      <div className="flex flex-col font-['Nobel:Book',sans-serif] justify-center leading-[0] relative shrink-0 text-[#232632] text-[19px] w-full">
        <ul>
          <li className="list-disc ms-[28.5px] whitespace-pre-wrap">
            <span className="leading-[1.5]">Ensure all the cells are the same width (especially during overflow)</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <p className="font-['Nobel:Regular',sans-serif] leading-[24px] relative shrink-0 text-[#a32943] text-[18px] tracking-[0.36px] uppercase w-full whitespace-pre-wrap">don’ts</p>
      <div className="flex flex-col font-['Nobel:Book',sans-serif] justify-center leading-[0] relative shrink-0 text-[#232632] text-[19px] w-full">
        <ul className="list-disc whitespace-pre-wrap">
          <li className="mb-0 ms-[28.5px]">
            <span className="leading-[1.5]">Allow one cell to be larger than the other cells</span>
          </li>
          <li className="mb-0 ms-[28.5px]">
            <span className="leading-[1.5]">Dont use Border Radius if parent row doesn’t have gap between cells</span>
          </li>
          <li className="ms-[28.5px]">
            <span className="leading-[1.5]">Allow children (slots) to swap or be in a horizontal stack configuration</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <p className="font-['Nobel:Regular',sans-serif] leading-[24px] relative shrink-0 text-[#ffb833] text-[18px] tracking-[0.36px] uppercase w-full whitespace-pre-wrap">future</p>
      <div className="flex flex-col font-['Nobel:Book',sans-serif] justify-center leading-[0] relative shrink-0 text-[#232632] text-[19px] w-full">
        <ul>
          <li className="list-disc ms-[28.5px] whitespace-pre-wrap">
            <span className="leading-[1.5]">Cell gap – token swapped to a scaled token instead of static</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

function Stack3() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start not-italic relative shrink-0 w-full" data-name="Stack 3">
      <p className="font-['Nobel:Regular',sans-serif] leading-[1.15] relative shrink-0 text-[42px] text-[rgba(0,0,0,0.9)] tracking-[2.1px] uppercase w-[320px] whitespace-pre-wrap">rules</p>
      <Frame6 />
      <Frame7 />
      <Frame8 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <div className="flex flex-col font-['Nobel:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#232632] text-[19px] w-full">
        <ul className="list-disc whitespace-pre-wrap">
          <li className="mb-0 ms-[28.5px]">
            <span className="leading-[1.5]">{`Elevation: `}</span>
            <span className="font-['Nobel:Book',sans-serif] leading-[1.5] not-italic">no/raised/inset</span>
          </li>
          <li className="mb-0 ms-[28.5px]">
            <span className="leading-[1.5]">{`Border-radius: `}</span>
            <span className="font-['Nobel:Book',sans-serif] leading-[1.5] not-italic">Yes/no. Developers should never use Yes if parent Row doesn’t enable gaps between cells</span>
          </li>
          <li className="mb-0 ms-[28.5px]">
            <span className="leading-[1.5]">Vertical-alignment:</span>
            <span className="font-['Nobel:Regular',sans-serif] leading-[1.5] not-italic">{` `}</span>
            <span className="font-['Nobel:Book',sans-serif] leading-[1.5] not-italic">Top/Center/Bottom</span>
          </li>
          <li className="mb-0 ms-[28.5px]">
            <span className="leading-[1.5]">{`Padding: `}</span>
            <span className="font-['Nobel:Book',sans-serif] leading-[1.5] not-italic">Token/none</span>
          </li>
          <li className="ms-[28.5px]">
            <span className="leading-[1.5]">{`Gap: `}</span>
            <span className="font-['Nobel:Book',sans-serif] leading-[1.5] not-italic">Yes/No</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

function Stack4() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full" data-name="Stack 4">
      <p className="font-['Nobel:Regular',sans-serif] leading-[1.15] not-italic relative shrink-0 text-[42px] text-[rgba(0,0,0,0.9)] tracking-[2.1px] uppercase w-[320px] whitespace-pre-wrap">options</p>
      <Frame9 />
    </div>
  );
}

function Stack2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Stack 2">
      <p className="font-['Nobel:Regular',sans-serif] leading-[1.15] not-italic relative shrink-0 text-[42px] text-[rgba(0,0,0,0.9)] tracking-[2.1px] uppercase w-[320px] whitespace-pre-wrap">structure</p>
    </div>
  );
}

function Stack8() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Stack">
      <div className="h-[49px] relative shrink-0 w-[32px]" data-name="Nest-Line">
        <div className="absolute h-[13px] left-[24px] top-[36px] w-0" data-name="Line">
          <div className="absolute inset-[0_-0.5px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 13">
              <path d="M0.5 0V13" id="Line" stroke="var(--stroke-0, #171717)" strokeOpacity="0.1" />
            </svg>
          </div>
        </div>
        <div className="absolute left-[16px] overflow-clip size-[16px] top-[16.5px]" data-name="Figma-Icon">
          <div className="absolute left-[0.8px] size-[14.4px] top-[0.8px]">
            <div className="absolute inset-[2.88%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.5716 13.5716">
                <path d={svgPaths.p3c4bef00} id="Vector 8" stroke="var(--stroke-0, #C4A2FA)" strokeWidth="0.8" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col font-['Nobel:Book',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#232632] text-[22px] tracking-[0.275px] whitespace-nowrap">
        <p className="leading-[1.3]">Cell</p>
      </div>
      <div className="flex h-[20px] items-center justify-center relative shrink-0 w-0" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "153.5" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <div className="h-0 relative w-[20px]" data-name="Divider">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 1">
                <line id="Divider" stroke="var(--stroke-0, #171717)" strokeOpacity="0.1" x2="20" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col font-['Nobel:Book',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#232632] text-[22px] tracking-[0.275px] whitespace-nowrap">
        <p className="leading-[1.3]">-</p>
      </div>
    </div>
  );
}

function Stack9() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Stack">
      <div className="h-[49px] relative shrink-0 w-[32px]" data-name="Nest-Line">
        <div className="absolute flex h-[24.5px] items-center justify-center left-0 top-0 w-[12px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "153.5" } as React.CSSProperties}>
          <div className="flex-none rotate-90">
            <div className="h-[12px] relative w-[24.5px]" data-name="Divider">
              <div className="absolute inset-[0_-2.04%_-4.17%_0]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 12.5">
                  <path d={svgPaths.p34244b00} id="Divider" stroke="var(--stroke-0, #171717)" strokeOpacity="0.1" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute h-[13px] left-[24px] top-[36px] w-0" data-name="Line">
          <div className="absolute inset-[0_-0.5px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 13">
              <path d="M0.5 0V13" id="Line" stroke="var(--stroke-0, #171717)" strokeOpacity="0.1" />
            </svg>
          </div>
        </div>
        <div className="absolute left-[16px] overflow-clip size-[16px] top-[16.5px]" data-name="Figma-Icon">
          <div className="absolute left-[0.8px] size-[14.4px] top-[0.8px]">
            <div className="absolute inset-[2.88%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.5716 13.5716">
                <path d={svgPaths.p3c4bef00} id="Vector 8" stroke="var(--stroke-0, #C4A2FA)" strokeWidth="0.8" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col font-['Nobel:Book',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#232632] text-[22px] tracking-[0.275px] whitespace-nowrap">
        <p className="leading-[1.3]">Box</p>
      </div>
      <div className="flex h-[20px] items-center justify-center relative shrink-0 w-0" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "153.5" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <div className="h-0 relative w-[20px]" data-name="Divider">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 1">
                <line id="Divider" stroke="var(--stroke-0, #171717)" strokeOpacity="0.1" x2="20" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col font-['Nobel:Book',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#232632] text-[0px] tracking-[0.275px] whitespace-nowrap">
        <p className="text-[22px]">
          <span className="leading-[1.3]">{`p: `}</span>
          <span className="font-['Nobel:Bold',sans-serif] leading-[1.3] not-italic tracking-[0.275px]">none / even-more [scaled]</span>
        </p>
      </div>
    </div>
  );
}

function Stack10() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Stack">
      <div className="h-[49px] relative shrink-0 w-[32px]" data-name="Nest-Line">
        <div className="absolute flex h-[24.5px] items-center justify-center left-0 top-0 w-[12px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "153.5" } as React.CSSProperties}>
          <div className="flex-none rotate-90">
            <div className="h-[12px] relative w-[24.5px]" data-name="Divider">
              <div className="absolute inset-[0_-2.04%_-4.17%_0]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 12.5">
                  <path d={svgPaths.p34244b00} id="Divider" stroke="var(--stroke-0, #171717)" strokeOpacity="0.1" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute h-[13px] left-[24px] top-[36px] w-0" data-name="Line">
          <div className="absolute inset-[0_-0.5px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 13">
              <path d="M0.5 0V13" id="Line" stroke="var(--stroke-0, #171717)" strokeOpacity="0.1" />
            </svg>
          </div>
        </div>
        <div className="absolute left-[16px] overflow-clip size-[16px] top-[16.5px]" data-name="Figma-Icon">
          <div className="absolute left-[0.8px] size-[14.4px] top-[0.8px]">
            <div className="absolute inset-[2.88%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.5716 13.5716">
                <path d={svgPaths.p3c4bef00} id="Vector 8" stroke="var(--stroke-0, #C4A2FA)" strokeWidth="0.8" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col font-['Nobel:Book',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#232632] text-[22px] tracking-[0.275px] whitespace-nowrap">
        <p className="leading-[1.3]">Stack</p>
      </div>
      <div className="flex h-[20px] items-center justify-center relative shrink-0 w-0" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "153.5" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <div className="h-0 relative w-[20px]" data-name="Divider">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 1">
                <line id="Divider" stroke="var(--stroke-0, #171717)" strokeOpacity="0.1" x2="20" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col font-['Nobel:Book',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#232632] text-[0px] tracking-[0.275px] whitespace-nowrap">
        <p className="text-[22px]">
          <span className="leading-[1.3]">{`gap: `}</span>
          <span className="font-['Nobel:Bold',sans-serif] leading-[1.3] not-italic tracking-[0.275px]">none / l</span>
        </p>
      </div>
    </div>
  );
}

function Stack11() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Stack">
      <div className="h-[49px] relative shrink-0 w-[32px]" data-name="Nest-Line">
        <div className="absolute flex h-[24.5px] items-center justify-center left-0 top-0 w-[12px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "153.5" } as React.CSSProperties}>
          <div className="flex-none rotate-90">
            <div className="h-[12px] relative w-[24.5px]" data-name="Divider">
              <div className="absolute inset-[0_-2.04%_-4.17%_0]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 12.5">
                  <path d={svgPaths.p34244b00} id="Divider" stroke="var(--stroke-0, #171717)" strokeOpacity="0.1" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute left-[16px] overflow-clip size-[16px] top-[16.5px]" data-name="Figma-Icon">
          <div className="absolute left-[0.8px] size-[14.4px] top-[0.8px]">
            <div className="absolute inset-[2.88%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.5716 13.5716">
                <path d={svgPaths.p3c4bef00} id="Vector 8" stroke="var(--stroke-0, #C4A2FA)" strokeWidth="0.8" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col font-['Nobel:Book',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#232632] text-[22px] tracking-[0.275px] whitespace-nowrap">
        <p className="leading-[1.3]">Slot (any children)</p>
      </div>
    </div>
  );
}

function Stack7() {
  return (
    <div className="content-stretch flex flex-col gap-px items-start overflow-clip relative rounded-[8px] shrink-0 w-full" data-name="Stack">
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Layer-Nest-V2">
        <div className="bg-[#f6f5f3] relative shrink-0 w-full" data-name="Layer-Node">
          <div className="content-stretch flex flex-col items-start px-[8px] relative w-full">
            <Stack8 />
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Layer-Nest-V2">
        <div className="bg-[#f6f5f3] relative shrink-0 w-full" data-name="Layer-Node">
          <div className="content-stretch flex flex-col items-start pl-[32px] pr-[8px] relative w-full">
            <Stack9 />
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Layer-Nest-V2">
        <div className="bg-[#f6f5f3] relative shrink-0 w-full" data-name="Layer-Node">
          <div className="content-stretch flex flex-col items-start pl-[56px] pr-[8px] relative w-full">
            <Stack10 />
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Layer-Nest-V2">
        <div className="bg-[#f6f5f3] relative shrink-0 w-full" data-name="Layer-Node">
          <div className="content-stretch flex flex-col items-start pl-[80px] pr-[8px] relative w-full">
            <Stack11 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Stack6() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Stack">
      <p className="font-['Nobel:Bold',sans-serif] leading-none not-italic relative shrink-0 text-[#232632] text-[12px] tracking-[1.44px] uppercase w-full whitespace-pre-wrap">Figma layers (Pseudo-code)</p>
      <Stack7 />
    </div>
  );
}

function Stack5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Stack">
      <Stack6 />
    </div>
  );
}

function Stack15() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Stack">
      <div className="h-[49px] relative shrink-0 w-[32px]" data-name="Nest-Line">
        <div className="absolute h-[13px] left-[24px] top-[36px] w-0" data-name="Line">
          <div className="absolute inset-[0_-0.5px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 13">
              <path d="M0.5 0V13" id="Line" stroke="var(--stroke-0, #171717)" strokeOpacity="0.1" />
            </svg>
          </div>
        </div>
        <div className="absolute left-[16px] overflow-clip size-[16px] top-[16.5px]" data-name="Figma-Icon">
          <div className="absolute left-[0.8px] size-[14.4px] top-[0.8px]">
            <div className="absolute inset-[2.88%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.5716 13.5716">
                <path d={svgPaths.p3c4bef00} id="Vector 8" stroke="var(--stroke-0, #C4A2FA)" strokeWidth="0.8" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col font-['Nobel:Book',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#232632] text-[22px] tracking-[0.275px] whitespace-nowrap">
        <p className="leading-[1.3]">Cell</p>
      </div>
      <div className="flex h-[20px] items-center justify-center relative shrink-0 w-0" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "153.5" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <div className="h-0 relative w-[20px]" data-name="Divider">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 1">
                <line id="Divider" stroke="var(--stroke-0, #171717)" strokeOpacity="0.1" x2="20" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col font-['Nobel:Book',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#232632] text-[22px] tracking-[0.275px] whitespace-nowrap">
        <p className="leading-[1.3]">-</p>
      </div>
    </div>
  );
}

function Stack16() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Stack">
      <div className="h-[49px] relative shrink-0 w-[32px]" data-name="Nest-Line">
        <div className="absolute flex h-[24.5px] items-center justify-center left-0 top-0 w-[12px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "153.5" } as React.CSSProperties}>
          <div className="flex-none rotate-90">
            <div className="h-[12px] relative w-[24.5px]" data-name="Divider">
              <div className="absolute inset-[0_-2.04%_-4.17%_0]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 12.5">
                  <path d={svgPaths.p34244b00} id="Divider" stroke="var(--stroke-0, #171717)" strokeOpacity="0.1" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute h-[13px] left-[24px] top-[36px] w-0" data-name="Line">
          <div className="absolute inset-[0_-0.5px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 13">
              <path d="M0.5 0V13" id="Line" stroke="var(--stroke-0, #171717)" strokeOpacity="0.1" />
            </svg>
          </div>
        </div>
        <div className="absolute left-[16px] overflow-clip size-[16px] top-[16.5px]" data-name="Figma-Icon">
          <div className="absolute left-[0.8px] size-[14.4px] top-[0.8px]">
            <div className="absolute inset-[2.88%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.5716 13.5716">
                <path d={svgPaths.p3c4bef00} id="Vector 8" stroke="var(--stroke-0, #C4A2FA)" strokeWidth="0.8" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col font-['Nobel:Book',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#232632] text-[22px] tracking-[0.275px] whitespace-nowrap">
        <p className="leading-[1.3]">Stack (root = Box)</p>
      </div>
      <div className="flex h-[20px] items-center justify-center relative shrink-0 w-0" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "153.5" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <div className="h-0 relative w-[20px]" data-name="Divider">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 1">
                <line id="Divider" stroke="var(--stroke-0, #171717)" strokeOpacity="0.1" x2="20" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col font-['Nobel:Book',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#232632] text-[0px] tracking-[0.275px] whitespace-nowrap">
        <p className="text-[22px]">
          <span className="leading-[1.3]">{`p: `}</span>
          <span className="font-['Nobel:Bold',sans-serif] leading-[1.3] not-italic tracking-[0.275px]">none / ???m???</span>
          <span className="leading-[1.3]">{` ;  gap: `}</span>
          <span className="font-['Nobel:Bold',sans-serif] leading-[1.3] not-italic">none / l</span>
        </p>
      </div>
    </div>
  );
}

function Stack17() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Stack">
      <div className="h-[49px] relative shrink-0 w-[32px]" data-name="Nest-Line">
        <div className="absolute flex h-[24.5px] items-center justify-center left-0 top-0 w-[12px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "153.5" } as React.CSSProperties}>
          <div className="flex-none rotate-90">
            <div className="h-[12px] relative w-[24.5px]" data-name="Divider">
              <div className="absolute inset-[0_-2.04%_-4.17%_0]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 12.5">
                  <path d={svgPaths.p34244b00} id="Divider" stroke="var(--stroke-0, #171717)" strokeOpacity="0.1" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute left-[16px] overflow-clip size-[16px] top-[16.5px]" data-name="Figma-Icon">
          <div className="absolute left-[0.8px] size-[14.4px] top-[0.8px]">
            <div className="absolute inset-[2.88%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.5716 13.5716">
                <path d={svgPaths.p3c4bef00} id="Vector 8" stroke="var(--stroke-0, #C4A2FA)" strokeWidth="0.8" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col font-['Nobel:Book',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#232632] text-[22px] tracking-[0.275px] whitespace-nowrap">
        <p className="leading-[1.3]">Slot (any children)</p>
      </div>
    </div>
  );
}

function Stack14() {
  return (
    <div className="content-stretch flex flex-col gap-px items-start overflow-clip relative rounded-[8px] shrink-0 w-full" data-name="Stack">
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Layer-Nest-V2">
        <div className="bg-[#f6f5f3] relative shrink-0 w-full" data-name="Layer-Node">
          <div className="content-stretch flex flex-col items-start px-[8px] relative w-full">
            <Stack15 />
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Layer-Nest-V2">
        <div className="bg-[#f6f5f3] relative shrink-0 w-full" data-name="Layer-Node">
          <div className="content-stretch flex flex-col items-start pl-[32px] pr-[8px] relative w-full">
            <Stack16 />
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Layer-Nest-V2">
        <div className="bg-[#f6f5f3] relative shrink-0 w-full" data-name="Layer-Node">
          <div className="content-stretch flex flex-col items-start pl-[56px] pr-[8px] relative w-full">
            <Stack17 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Stack13() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Stack">
      <p className="font-['Nobel:Bold',sans-serif] leading-none not-italic relative shrink-0 text-[#232632] text-[12px] tracking-[1.44px] uppercase w-full whitespace-pre-wrap">Figma layers (Pseudo-code) (optimised)</p>
      <Stack14 />
    </div>
  );
}

function Stack12() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Stack">
      <Stack13 />
    </div>
  );
}

function Structure() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center relative shrink-0 w-full" data-name="Structure">
      <Stack2 />
      <Stack5 />
      <Stack12 />
    </div>
  );
}

function Stack18() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Stack 2">
      <p className="font-['Nobel:Regular',sans-serif] leading-[1.15] not-italic relative shrink-0 text-[42px] text-[rgba(0,0,0,0.9)] tracking-[2.1px] uppercase w-[320px] whitespace-pre-wrap">anatomy</p>
    </div>
  );
}

function Frame11() {
  return (
    <div className="absolute content-stretch flex gap-[8px] items-center justify-center left-[268.05px] top-[4px]">
      <div className="h-0 relative shrink-0 w-[111.275px]">
        <div className="absolute inset-[-2.67px_-2.4%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 116.609 5.33333">
            <path d={svgPaths.p110d2370} fill="var(--stroke-0, #FF47C0)" id="Vector 16" />
          </svg>
        </div>
      </div>
      <div className="flex flex-col font-['Nobel:Book',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#ff47c0] text-[13px] whitespace-nowrap">
        <p className="leading-[16px]">Slot</p>
      </div>
    </div>
  );
}

function Cell1() {
  return (
    <div className="bg-[#ffd1ef] content-stretch flex flex-col h-[24px] items-center relative shrink-0 w-[290px]" data-name="Cell">
      <div aria-hidden="true" className="absolute border border-[#ff47c0] border-dashed inset-0 pointer-events-none" />
      <Frame11 />
    </div>
  );
}

function Cell2() {
  return (
    <div className="bg-[#ffd1ef] h-[24px] relative shrink-0 w-[290px]" data-name="Cell">
      <div aria-hidden="true" className="absolute border border-[#ff47c0] border-dashed inset-0 pointer-events-none" />
    </div>
  );
}

function Frame12() {
  return (
    <div className="bg-[#bbd7eb] content-stretch flex flex-col gap-[40px] items-center justify-center p-[64px] relative shrink-0">
      <Cell1 />
      <Cell2 />
    </div>
  );
}

function Frame13() {
  return (
    <div className="absolute content-stretch flex gap-[8px] items-center justify-center left-[1020.05px] top-[239px]">
      <div className="h-0 relative shrink-0 w-[109.822px]">
        <div className="absolute inset-[-2.67px_-2.43%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 115.155 5.33333">
            <path d={svgPaths.p1cc94c80} fill="var(--stroke-0, #198DE6)" id="Vector 16" />
          </svg>
        </div>
      </div>
      <div className="flex flex-col font-['Nobel:Book',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#198de6] text-[13px] whitespace-nowrap">
        <p className="leading-[16px]">Gap</p>
      </div>
    </div>
  );
}

function Frame14() {
  return (
    <div className="absolute content-stretch flex gap-[8px] items-center justify-center left-[1084.05px] top-[275.54px]">
      <div className="h-0 relative shrink-0 w-[43.861px]">
        <div className="absolute inset-[-2.67px_-6.08%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 49.1942 5.33333">
            <path d={svgPaths.p116e5000} fill="var(--stroke-0, #198DE6)" id="Vector 16" />
          </svg>
        </div>
      </div>
      <div className="flex flex-col font-['Nobel:Book',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#198de6] text-[13px] whitespace-nowrap">
        <p className="leading-[16px]">
          Padding controlled by box
          <br aria-hidden="true" />
          [comp/box/pad/scaled/even-more]
        </p>
      </div>
    </div>
  );
}

function PreviewFrame() {
  return (
    <div className="bg-[#f6f5f3] content-stretch flex flex-col gap-[40px] items-center justify-center px-[24px] py-[140px] relative rounded-[5px] shrink-0 w-[1792px]" data-name="Preview Frame">
      <div aria-hidden="true" className="absolute border border-[rgba(23,23,23,0.1)] border-solid inset-0 pointer-events-none rounded-[5px]" />
      <Frame12 />
      <Frame13 />
      <Frame14 />
      <div className="absolute h-[51px] left-[687.05px] top-[358.54px] w-[418px]" data-name="Measure Line">
        <div className="-translate-x-1/2 absolute bottom-[-12px] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] left-[calc(50%+0.5px)] not-italic text-[#ea10ac] text-[12px] text-center translate-y-1/2 whitespace-nowrap">
          <p className="leading-[18px]">
            <br aria-hidden="true" />
            Min-width: max(290px, 18em), this will fill row container.
            <br aria-hidden="true" />
            Max-width: 100%
          </p>
        </div>
        <div className="absolute flex inset-[0_0_16px_0] items-center justify-center">
          <div className="flex-none h-[56px] rotate-90 w-[40px]">
            <div className="relative size-full" data-name=".Line">
              <div aria-hidden="true" className="absolute border-[#ea10ac] border-b border-dashed border-t inset-0 pointer-events-none" />
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 flex h-[12px] items-center justify-center left-0 right-0">
          <div className="flex-none h-[56px] rotate-90 w-[12px]">
            <div className="content-stretch flex flex-col items-center relative size-full" data-name=".Measure">
              <div className="bg-[#ea10ac] h-px shrink-0 w-[12px]" data-name="Endpoint" />
              <div className="flex flex-[1_0_0] items-center justify-center min-h-px min-w-px relative w-0" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "153.5" } as React.CSSProperties}>
                <div className="-rotate-90 flex-none h-full">
                  <div className="h-full relative w-[78px]" data-name="Line">
                    <div className="absolute inset-[-0.5px_0]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 416 1">
                        <path d="M0 0.5H416" id="Line" stroke="var(--stroke-0, #EA10AC)" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-[#ea10ac] h-px shrink-0 w-[12px]" data-name="Endpoint" />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute h-[40px] left-[618.05px] top-[227.54px] w-[338px]" data-name="Measure Line">
        <div className="-translate-x-full -translate-y-1/2 absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] left-[-4px] not-italic text-[#ea10ac] text-[12px] text-right top-1/2 whitespace-nowrap">
          <p className="leading-[18px]">comp/stack/gap/static/l</p>
        </div>
        <div className="absolute inset-[0_0_0_16px]" data-name=".Line">
          <div aria-hidden="true" className="absolute border-[#ea10ac] border-b border-dashed border-t inset-0 pointer-events-none" />
        </div>
        <div className="absolute bottom-0 content-stretch flex flex-col items-center left-0 top-0 w-[12px]" data-name=".Measure">
          <div className="bg-[#ea10ac] h-px shrink-0 w-[12px]" data-name="Endpoint" />
          <div className="flex flex-[1_0_0] items-center justify-center min-h-px min-w-px relative w-0" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "153.5" } as React.CSSProperties}>
            <div className="-rotate-90 flex-none h-full">
              <div className="h-full relative w-[78px]" data-name="Line">
                <div className="absolute inset-[-0.5px_0]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 38 1">
                    <path d="M0 0.5H38" id="Line" stroke="var(--stroke-0, #EA10AC)" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[#ea10ac] h-px shrink-0 w-[12px]" data-name="Endpoint" />
        </div>
      </div>
    </div>
  );
}

function Anatomy() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center relative shrink-0 w-full" data-name="Anatomy">
      <Stack18 />
      <PreviewFrame />
    </div>
  );
}

function Stack22() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Stack">
      <div className="h-[49px] relative shrink-0 w-[32px]" data-name="Nest-Line">
        <div className="absolute h-[13px] left-[24px] top-[36px] w-0" data-name="Line">
          <div className="absolute inset-[0_-0.5px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 13">
              <path d="M0.5 0V13" id="Line" stroke="var(--stroke-0, #171717)" strokeOpacity="0.1" />
            </svg>
          </div>
        </div>
        <div className="absolute left-[16px] overflow-clip size-[16px] top-[16.5px]" data-name="Figma-Icon">
          <div className="absolute left-[0.8px] size-[14.4px] top-[0.8px]">
            <div className="absolute inset-[2.88%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.5716 13.5716">
                <path d={svgPaths.p3c4bef00} id="Vector 8" stroke="var(--stroke-0, #C4A2FA)" strokeWidth="0.8" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col font-['Nobel:Book',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#232632] text-[22px] tracking-[0.275px] whitespace-nowrap">
        <p className="leading-[1.3]">Section</p>
      </div>
      <div className="flex flex-col font-['Nobel:Book',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#232632] text-[22px] tracking-[0.275px] whitespace-nowrap">
        <p className="leading-[1.3]">&nbsp;</p>
      </div>
    </div>
  );
}

function Stack23() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Stack">
      <div className="h-[49px] relative shrink-0 w-[32px]" data-name="Nest-Line">
        <div className="absolute flex h-[24.5px] items-center justify-center left-0 top-0 w-[12px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "153.5" } as React.CSSProperties}>
          <div className="flex-none rotate-90">
            <div className="h-[12px] relative w-[24.5px]" data-name="Divider">
              <div className="absolute inset-[0_-2.04%_-4.17%_0]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 12.5">
                  <path d={svgPaths.p34244b00} id="Divider" stroke="var(--stroke-0, #171717)" strokeOpacity="0.1" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute h-[13px] left-[24px] top-[36px] w-0" data-name="Line">
          <div className="absolute inset-[0_-0.5px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 13">
              <path d="M0.5 0V13" id="Line" stroke="var(--stroke-0, #171717)" strokeOpacity="0.1" />
            </svg>
          </div>
        </div>
        <div className="absolute left-[16px] overflow-clip size-[16px] top-[16.5px]" data-name="Figma-Icon">
          <div className="absolute left-[0.8px] size-[14.4px] top-[0.8px]">
            <div className="absolute inset-[2.88%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.5716 13.5716">
                <path d={svgPaths.p3c4bef00} id="Vector 8" stroke="var(--stroke-0, #C4A2FA)" strokeWidth="0.8" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col font-['Nobel:Book',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#232632] text-[22px] tracking-[0.275px] whitespace-nowrap">
        <p className="leading-[1.3]">Container</p>
      </div>
      <div className="flex h-[20px] items-center justify-center relative shrink-0 w-0" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "153.5" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <div className="h-0 relative w-[20px]" data-name="Divider">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 1">
                <line id="Divider" stroke="var(--stroke-0, #171717)" strokeOpacity="0.1" x2="20" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col font-['Nobel:Book',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#232632] text-[22px] tracking-[0.275px] whitespace-nowrap">
        <p className="leading-[1.3]">12 col, 10 col, 8 col, 6 col</p>
      </div>
    </div>
  );
}

function Stack24() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Stack">
      <div className="h-[49px] relative shrink-0 w-[32px]" data-name="Nest-Line">
        <div className="absolute flex h-[24.5px] items-center justify-center left-0 top-0 w-[12px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "153.5" } as React.CSSProperties}>
          <div className="flex-none rotate-90">
            <div className="h-[12px] relative w-[24.5px]" data-name="Divider">
              <div className="absolute inset-[0_-2.04%_-4.17%_0]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 12.5">
                  <path d={svgPaths.p34244b00} id="Divider" stroke="var(--stroke-0, #171717)" strokeOpacity="0.1" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute h-[13px] left-[24px] top-[36px] w-0" data-name="Line">
          <div className="absolute inset-[0_-0.5px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 13">
              <path d="M0.5 0V13" id="Line" stroke="var(--stroke-0, #171717)" strokeOpacity="0.1" />
            </svg>
          </div>
        </div>
        <div className="absolute left-[16px] overflow-clip size-[16px] top-[16.5px]" data-name="Figma-Icon">
          <div className="absolute left-[0.8px] size-[14.4px] top-[0.8px]">
            <div className="absolute inset-[2.88%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.5716 13.5716">
                <path d={svgPaths.p3c4bef00} id="Vector 8" stroke="var(--stroke-0, #C4A2FA)" strokeWidth="0.8" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col font-['Nobel:Book',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#232632] text-[22px] tracking-[0.275px] whitespace-nowrap">
        <p className="leading-[1.3]">Row</p>
      </div>
    </div>
  );
}

function Stack25() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Stack">
      <div className="h-[49px] relative shrink-0 w-[32px]" data-name="Nest-Line">
        <div className="absolute flex h-[49px] items-center justify-center left-0 top-0 w-[12px]" style={{ "--transform-inner-width": "300", "--transform-inner-height": "153.5" } as React.CSSProperties}>
          <div className="flex-none rotate-90">
            <div className="h-[12px] relative w-[49px]" data-name="Divider">
              <div className="absolute inset-[0_0_-4.17%_0]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 49 12.5">
                  <path d={svgPaths.p3d679e00} id="Divider" stroke="var(--stroke-0, #171717)" strokeOpacity="0.1" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute left-[16px] overflow-clip size-[16px] top-[16.5px]" data-name="Figma-Icon">
          <div className="absolute left-[0.8px] size-[14.4px] top-[0.8px]">
            <div className="absolute inset-[2.88%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.5716 13.5716">
                <path d={svgPaths.p3c4bef00} id="Vector 8" stroke="var(--stroke-0, #C4A2FA)" strokeWidth="0.8" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col font-['Nobel:Book',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#232632] text-[22px] text-left tracking-[0.275px] whitespace-nowrap">
        <p className="leading-[1.3]">Cell</p>
      </div>
      <div className="flex flex-col font-['Nobel:Book',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#232632] text-[22px] text-left tracking-[0.275px] whitespace-nowrap">
        <p className="leading-[1.3]">&nbsp;</p>
      </div>
    </div>
  );
}

function Stack26() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Stack">
      <div className="h-[49px] relative shrink-0 w-[32px]" data-name="Nest-Line">
        <div className="absolute flex h-[49px] items-center justify-center left-0 top-0 w-[12px]" style={{ "--transform-inner-width": "300", "--transform-inner-height": "153.5" } as React.CSSProperties}>
          <div className="flex-none rotate-90">
            <div className="h-[12px] relative w-[49px]" data-name="Divider">
              <div className="absolute inset-[0_0_-4.17%_0]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 49 12.5">
                  <path d={svgPaths.p3d679e00} id="Divider" stroke="var(--stroke-0, #171717)" strokeOpacity="0.1" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute left-[16px] overflow-clip size-[16px] top-[16.5px]" data-name="Figma-Icon">
          <div className="absolute left-[0.8px] size-[14.4px] top-[0.8px]">
            <div className="absolute inset-[2.88%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.5716 13.5716">
                <path d={svgPaths.p3c4bef00} id="Vector 8" stroke="var(--stroke-0, #C4A2FA)" strokeWidth="0.8" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col font-['Nobel:Book',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#232632] text-[22px] text-left tracking-[0.275px] whitespace-nowrap">
        <p className="leading-[1.3]">Cell</p>
      </div>
      <div className="flex flex-col font-['Nobel:Book',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#232632] text-[22px] text-left tracking-[0.275px] whitespace-nowrap">
        <p className="leading-[1.3]">&nbsp;</p>
      </div>
    </div>
  );
}

function Stack27() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Stack">
      <div className="h-[49px] relative shrink-0 w-[32px]" data-name="Nest-Line">
        <div className="absolute flex h-[24.5px] items-center justify-center left-0 top-0 w-[12px]" style={{ "--transform-inner-width": "300", "--transform-inner-height": "153.5" } as React.CSSProperties}>
          <div className="flex-none rotate-90">
            <div className="h-[12px] relative w-[24.5px]" data-name="Divider">
              <div className="absolute inset-[0_-2.04%_-4.17%_0]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 12.5">
                  <path d={svgPaths.p34244b00} id="Divider" stroke="var(--stroke-0, #171717)" strokeOpacity="0.1" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute left-[16px] overflow-clip size-[16px] top-[16.5px]" data-name="Figma-Icon">
          <div className="absolute left-[0.8px] size-[14.4px] top-[0.8px]">
            <div className="absolute inset-[2.88%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.5716 13.5716">
                <path d={svgPaths.p3c4bef00} id="Vector 8" stroke="var(--stroke-0, #C4A2FA)" strokeWidth="0.8" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col font-['Nobel:Book',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#232632] text-[22px] text-left tracking-[0.275px] whitespace-nowrap">
        <p className="leading-[1.3]">Cell</p>
      </div>
      <div className="flex flex-col font-['Nobel:Book',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#232632] text-[22px] text-left tracking-[0.275px] whitespace-nowrap">
        <p className="leading-[1.3]">&nbsp;</p>
      </div>
    </div>
  );
}

function Stack21() {
  return (
    <div className="content-stretch flex flex-col gap-px items-start overflow-clip relative rounded-[8px] shrink-0 w-full" data-name="Stack">
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Layer-Nest-V2">
        <div className="bg-[#f6f5f3] relative shrink-0 w-full" data-name="Layer-Node">
          <div className="content-stretch flex flex-col items-start px-[8px] relative w-full">
            <Stack22 />
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Layer-Nest-V2">
        <div className="bg-[#f6f5f3] relative shrink-0 w-full" data-name="Layer-Node">
          <div className="content-stretch flex flex-col items-start pl-[32px] pr-[8px] relative w-full">
            <Stack23 />
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Layer-Nest-V2">
        <div className="bg-[#f6f5f3] relative shrink-0 w-full" data-name="Layer-Node">
          <div className="content-stretch flex flex-col items-start pl-[56px] pr-[8px] relative w-full">
            <Stack24 />
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Layer-Nest-V2">
        <button className="bg-[#f6f5f3] cursor-pointer relative shrink-0 w-full" data-name="Layer-Node">
          <div aria-hidden="true" className="absolute border-2 border-[#cc4c19] border-solid inset-0 pointer-events-none" />
          <div className="content-stretch flex flex-col items-start pl-[80px] pr-[8px] relative w-full">
            <Stack25 />
          </div>
        </button>
      </div>
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Layer-Nest-V2">
        <button className="bg-[#f6f5f3] cursor-pointer relative shrink-0 w-full" data-name="Layer-Node">
          <div aria-hidden="true" className="absolute border-2 border-[#cc4c19] border-solid inset-0 pointer-events-none" />
          <div className="content-stretch flex flex-col items-start pl-[80px] pr-[8px] relative w-full">
            <Stack26 />
          </div>
        </button>
      </div>
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Layer-Nest-V2">
        <button className="bg-[#f6f5f3] cursor-pointer relative shrink-0 w-full" data-name="Layer-Node">
          <div aria-hidden="true" className="absolute border-2 border-[#cc4c19] border-solid inset-0 pointer-events-none" />
          <div className="content-stretch flex flex-col items-start pl-[80px] pr-[8px] relative w-full">
            <Stack27 />
          </div>
        </button>
      </div>
    </div>
  );
}

function Stack20() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Stack">
      <p className="font-['Nobel:Bold',sans-serif] leading-none not-italic relative shrink-0 text-[#232632] text-[12px] tracking-[1.44px] uppercase w-full whitespace-pre-wrap">USAGE COMPOSITION (Figma layers, Pseudo-code)</p>
      <Stack21 />
    </div>
  );
}

function Stack19() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full" data-name="Stack 2">
      <p className="font-['Nobel:Regular',sans-serif] leading-[1.15] not-italic relative shrink-0 text-[42px] text-[rgba(0,0,0,0.9)] tracking-[2.1px] uppercase w-[320px] whitespace-pre-wrap">examples</p>
      <Stack20 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full">
      <Stack19 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="bg-[#e8e8e8] relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[16px] relative w-full">
          <div className="font-['Courier_New:Regular',sans-serif] leading-[1.15] not-italic relative shrink-0 text-[24px] text-black tracking-[2.45px] w-[776px] whitespace-pre-wrap">
            <p className="mb-[16px]">{`{`}</p>
            <p className="mb-[16px]">{`  "comp": {`}</p>
            <p className="mb-[16px]">{`    "cell": {`}</p>
            <p className="mb-[16px]">{`      "border-radius": {`}</p>
            <p className="mb-[16px]">{`        "value": "{sem.border-radius.medium}",`}</p>
            <p className="mb-[16px]">{`        "type": "borderRadius",`}</p>
            <p className="mb-[16px]">{`        "description": "5px border radius of individual cells."`}</p>
            <p className="mb-[16px]">{`      },`}</p>
            <p className="mb-[16px]">{`      "min-w": {`}</p>
            <p className="mb-[16px]">{`        "value": "290px",`}</p>
            <p className="mb-[16px]">{`        "type": "dimension",`}</p>
            <p className="mb-[16px]">{`        "description": "290px, 18em used for min-w of the cell."`}</p>
            <p className="mb-[16px]">{`      }`}</p>
            <p className="mb-[16px]">{`    }`}</p>
            <p className="mb-[16px]">{`  }`}</p>
            <p>{`}`}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <p className="font-['Nobel:Regular',sans-serif] leading-[1.15] not-italic relative shrink-0 text-[42px] text-[rgba(0,0,0,0.9)] tracking-[2.1px] uppercase w-[320px] whitespace-pre-wrap">tokens</p>
      <Frame10 />
    </div>
  );
}

function StackFullPage() {
  return (
    <div className="content-stretch flex flex-col gap-[80px] items-start relative shrink-0 w-full" data-name="Stack - Full page">
      <Status />
      <Stack />
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-0.5px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1792 1">
            <path d="M0 0.5H1792" id="Vector 21" stroke="var(--stroke-0, black)" strokeOpacity="0.1" />
          </svg>
        </div>
      </div>
      <Stack3 />
      <Stack4 />
      <Structure />
      <Anatomy />
      <Frame1 />
      <Frame15 />
    </div>
  );
}

function Section() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Section">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center p-[64px] relative w-full">
          <StackFullPage />
        </div>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col items-center max-w-[1920px] min-w-[1024px] relative shrink-0 w-full" data-name="Container">
      <Section />
    </div>
  );
}

export default function Cell() {
  return (
    <div className="content-stretch flex flex-col items-start relative size-full" data-name="Cell">
      <Container />
    </div>
  );
}