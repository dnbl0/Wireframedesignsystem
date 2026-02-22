import svgPaths from "./svg-nna0nnmaki";

function IconLogo() {
  return (
    <div className="absolute inset-[12.5%_0.08%_15.45%_0]" data-name="icon/logo">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 31.9739 23.0548">
        <g id="icon/logo">
          <path clipRule="evenodd" d={svgPaths.p19a00700} fill="var(--fill-0, #232632)" fillRule="evenodd" id="Colour" />
          <mask height="24" id="mask0_3_2107" maskUnits="userSpaceOnUse" style={{ maskType: "luminance" }} width="32" x="0" y="0">
            <path clipRule="evenodd" d={svgPaths.p19a00700} fill="var(--fill-0, white)" fillRule="evenodd" id="Colour_2" />
          </mask>
          <g mask="url(#mask0_3_2107)" />
        </g>
      </svg>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex font-['Nobel:Bold',sans-serif] gap-[16px] items-center leading-[1.15] not-italic relative shrink-0 text-[22px] text-[rgba(0,0,0,0.9)] tracking-[1.1px] uppercase">
      <p className="relative shrink-0">|</p>
      <p className="relative shrink-0">container (lexus-6043)</p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="absolute content-stretch flex gap-[16px] items-center left-[32px] top-[16px]">
      <div className="relative shrink-0 size-[32px]" data-name="lexus-logo-icon">
        <IconLogo />
      </div>
      <p className="font-['Nobel:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[18px] text-[rgba(0,0,0,0.9)] tracking-[0.36px] uppercase">component</p>
      <Frame4 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="absolute content-stretch flex items-center left-[31px] top-[15px]">
      <p className="font-['Nobel:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[18px] text-[rgba(0,0,0,0.9)] tracking-[0.36px] uppercase">lexuskit</p>
    </div>
  );
}

function Status1() {
  return (
    <div className="absolute bg-[#ffb497] border border-[#dad8ce] border-solid h-[45px] left-[1632.92px] overflow-clip rounded-[20px] top-[10px] w-[145px]" data-name="_Status">
      <Frame5 />
    </div>
  );
}

function Status() {
  return (
    <div className="bg-[#fafaf9] h-[64px] relative rounded-[20px] shrink-0 w-full" data-name="_Status">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <Frame3 />
        <Status1 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#dad8ce] border-solid inset-0 pointer-events-none rounded-[20px]" />
    </div>
  );
}

function Stack1() {
  return (
    <div className="content-stretch flex flex-col font-['Nobel:Book',sans-serif] gap-[16px] items-start not-italic relative shrink-0 w-[900px]" data-name="Stack">
      <p className="leading-[1.15] relative shrink-0 text-[49px] text-[rgba(0,0,0,0.9)] tracking-[2.45px] uppercase">container component</p>
      <div className="flex flex-col justify-center leading-[0] min-w-full relative shrink-0 text-[#232632] text-[22px] tracking-[0.275px] w-[min-content]">
        <p className="leading-[1.3] whitespace-pre-wrap">Use this component to restrict the size of other components independent of their parent sections’ widths. Eg. make text a smaller width than the cell component (not fill).</p>
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

function Frame6() {
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
      <Frame6 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <div className="flex flex-col font-['Nobel:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#232632] text-[19px] w-full">
        <ul>
          <li className="list-disc ms-[28.5px] whitespace-pre-wrap">
            <span className="leading-[1.5]">{`Max-width: `}</span>
            <span className="font-['Nobel:Book',sans-serif] leading-[1.5] not-italic">{`12col, 10 col, 8 col, 6col, `}</span>
            <span className="font-['Nobel:Book',sans-serif] leading-[1.5] not-italic">4 col, none (full width)</span>
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
      <Frame7 />
    </div>
  );
}

function Stack2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Stack 2">
      <p className="font-['Nobel:Regular',sans-serif] leading-[1.15] not-italic relative shrink-0 text-[42px] text-[rgba(0,0,0,0.9)] tracking-[2.1px] uppercase w-[320px] whitespace-pre-wrap">anatomy</p>
    </div>
  );
}

function Frame8() {
  return (
    <div className="bg-[#bbd7eb] h-[24px] max-w-[1920px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#ff47c0] border-dashed inset-0 pointer-events-none" />
    </div>
  );
}

function Frame9() {
  return (
    <div className="bg-[#bbd7eb] h-[24px] max-w-[1060px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#ff47c0] border-dashed inset-0 pointer-events-none" />
    </div>
  );
}

function Frame11() {
  return (
    <div className="bg-[#bbd7eb] h-[24px] max-w-[840px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#ff47c0] border-dashed inset-0 pointer-events-none" />
    </div>
  );
}

function Frame10() {
  return (
    <div className="bg-[#bbd7eb] h-[24px] max-w-[620px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#ff47c0] border-dashed inset-0 pointer-events-none" />
    </div>
  );
}

function Frame12() {
  return (
    <div className="bg-[#bbd7eb] h-[24px] max-w-[400px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#ff47c0] border-dashed inset-0 pointer-events-none" />
    </div>
  );
}

function Frame13() {
  return (
    <div className="bg-[#bbd7eb] h-[24px] max-w-[405.3333435058594px] relative shrink-0 w-[290px]">
      <div aria-hidden="true" className="absolute border border-[#ff47c0] border-dashed inset-0 pointer-events-none" />
    </div>
  );
}

function PreviewFrame() {
  return (
    <div className="bg-[#f6f5f3] content-stretch flex flex-col gap-[40px] items-center justify-center px-[24px] py-[140px] relative rounded-[5px] shrink-0 w-[1792px]" data-name="Preview Frame">
      <div aria-hidden="true" className="absolute border border-[rgba(23,23,23,0.1)] border-solid inset-0 pointer-events-none rounded-[5px]" />
      <Frame8 />
      <Frame9 />
      <Frame11 />
      <Frame10 />
      <Frame12 />
      <Frame13 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center relative shrink-0 w-full">
      <Stack2 />
      <PreviewFrame />
    </div>
  );
}

function Stack3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Stack 2">
      <p className="font-['Nobel:Regular',sans-serif] leading-[1.15] not-italic relative shrink-0 text-[42px] text-[rgba(0,0,0,0.9)] tracking-[2.1px] uppercase w-[548.873px] whitespace-pre-wrap">related tokens</p>
    </div>
  );
}

function TableCell() {
  return (
    <div className="bg-[#232632] flex-[1_0_0] h-[48px] min-h-px min-w-px relative" data-name="table-cell">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[24px] relative size-full">
          <div className="flex flex-col font-['Nobel:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#e8e6e0] text-[16px] whitespace-nowrap">
            <p className="leading-[1.25]">–</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TableCell1() {
  return (
    <div className="bg-[#232632] flex-[1_0_0] h-[48px] min-h-px min-w-px relative" data-name="table-cell">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[24px] relative size-full">
          <div className="flex flex-col font-['Nobel:Book',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#e8e6e0] text-[16px] whitespace-nowrap">
            <p className="leading-[1.25]">Desktop</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TableCell2() {
  return (
    <div className="bg-[#232632] flex-[1_0_0] h-[48px] min-h-px min-w-px relative" data-name="table-cell">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[24px] relative size-full">
          <div className="flex flex-col font-['Nobel:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#e8e6e0] text-[16px] whitespace-nowrap">
            <p className="leading-[1.25]">Mobile</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TableCell3() {
  return (
    <div className="bg-[#232632] flex-[1_0_0] h-[48px] min-h-px min-w-px relative" data-name="table-cell">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[24px] relative size-full">
          <div className="flex flex-col font-['Nobel:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#e8e6e0] text-[16px] whitespace-nowrap">
            <p className="leading-[1.25]">Token</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TableRow() {
  return (
    <div className="content-stretch flex gap-px items-center relative shrink-0 w-full" data-name="table-row">
      <TableCell />
      <TableCell1 />
      <TableCell2 />
      <TableCell3 />
    </div>
  );
}

function TableCell4() {
  return (
    <div className="bg-[#d6d3c8] flex-[1_0_0] h-[48px] min-h-px min-w-px relative" data-name="table-cell">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[24px] relative size-full">
          <div className="flex flex-col font-['Nobel:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#232632] text-[16px] whitespace-nowrap">
            <p className="leading-[1.25]">Gap Value</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TableCell5() {
  return (
    <div className="bg-[#f6f5f3] flex-[1_0_0] h-[48px] min-h-px min-w-px relative" data-name="table-cell">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[24px] relative size-full">
          <div className="flex flex-col font-['Nobel:Book',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#232632] text-[16px] whitespace-nowrap">
            <p className="leading-[1.25]">40</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TableCell6() {
  return (
    <div className="bg-[#f6f5f3] flex-[1_0_0] h-[48px] min-h-px min-w-px relative" data-name="table-cell">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[24px] relative size-full">
          <div className="flex flex-col font-['Nobel:Book',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#232632] text-[16px] whitespace-nowrap">
            <p className="leading-[1.25]">24</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TableCell7() {
  return (
    <div className="bg-[#f6f5f3] flex-[1_0_0] h-[48px] min-h-px min-w-px relative" data-name="table-cell">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[24px] relative size-full">
          <div className="flex flex-col font-['Nobel:Book',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#232632] text-[16px] whitespace-nowrap">
            <p className="leading-[1.25]">-</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TableRow1() {
  return (
    <div className="content-stretch flex gap-px items-center relative shrink-0 w-full" data-name="table-row">
      <TableCell4 />
      <TableCell5 />
      <TableCell6 />
      <TableCell7 />
    </div>
  );
}

function TableCell8() {
  return (
    <div className="bg-[#d6d3c8] flex-[1_0_0] h-[48px] min-h-px min-w-px relative" data-name="table-cell">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[24px] relative size-full">
          <div className="flex flex-col font-['Nobel:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#232632] text-[16px] whitespace-nowrap">
            <p className="leading-[1.25]">1 column size no gaps Value</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TableCell9() {
  return (
    <div className="bg-[#f6f5f3] flex-[1_0_0] h-[48px] min-h-px min-w-px relative" data-name="table-cell">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[24px] relative size-full">
          <div className="flex flex-col font-['Nobel:Book',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#232632] text-[16px] whitespace-nowrap">
            <p className="leading-[1.25]">70</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TableCell10() {
  return (
    <div className="bg-[#f6f5f3] flex-[1_0_0] h-[48px] min-h-px min-w-px relative" data-name="table-cell">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[24px] relative size-full">
          <div className="flex flex-col font-['Nobel:Book',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#232632] text-[16px] whitespace-nowrap">
            <p className="leading-[1.25]">76</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TableCell11() {
  return (
    <div className="bg-[#f6f5f3] flex-[1_0_0] h-[48px] min-h-px min-w-px relative" data-name="table-cell">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[24px] relative size-full">
          <div className="flex flex-col font-['Nobel:Book',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#232632] text-[16px] whitespace-nowrap">
            <p className="leading-[1.25]">-</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TableRow2() {
  return (
    <div className="content-stretch flex gap-px items-center relative shrink-0 w-full" data-name="table-row">
      <TableCell8 />
      <TableCell9 />
      <TableCell10 />
      <TableCell11 />
    </div>
  );
}

function TableCell12() {
  return (
    <div className="bg-[#f6f5f3] flex-[1_0_0] h-[48px] min-h-px min-w-px relative" data-name="table-cell">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[24px] relative size-full">
          <div className="flex flex-col font-['Nobel:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#232632] text-[16px] whitespace-nowrap">
            <p className="leading-[1.25]">12 col max-width</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TableCell13() {
  return (
    <div className="bg-[#f6f5f3] flex-[1_0_0] h-[48px] min-h-px min-w-px relative" data-name="table-cell">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[24px] relative size-full">
          <div className="flex flex-col font-['Nobel:Book',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#232632] text-[16px] whitespace-nowrap">
            <p className="leading-[1.25]">1280</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TableCell14() {
  return (
    <div className="bg-[#f6f5f3] flex-[1_0_0] h-[48px] min-h-px min-w-px relative" data-name="table-cell">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[24px] relative size-full">
          <div className="flex flex-col font-['Nobel:Book',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#232632] text-[16px] whitespace-nowrap">
            <p className="leading-[1.25]">1176</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TableCell15() {
  return (
    <div className="bg-[#f6f5f3] flex-[1_0_0] h-[48px] min-h-px min-w-px relative" data-name="table-cell">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[24px] relative size-full">
          <div className="flex flex-col font-['Nobel:Book',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#232632] text-[16px] whitespace-nowrap">
            <p className="leading-[1.25]">-</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TableRow3() {
  return (
    <div className="content-stretch flex gap-px items-center relative shrink-0 w-full" data-name="table-row">
      <TableCell12 />
      <TableCell13 />
      <TableCell14 />
      <TableCell15 />
    </div>
  );
}

function TableCell16() {
  return (
    <div className="bg-[#f6f5f3] flex-[1_0_0] h-[48px] min-h-px min-w-px relative" data-name="table-cell">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[24px] relative size-full">
          <div className="flex flex-col font-['Nobel:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#232632] text-[16px] whitespace-nowrap">
            <p className="leading-[1.25]">10 col max-width</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TableCell17() {
  return (
    <div className="bg-[#f6f5f3] flex-[1_0_0] h-[48px] min-h-px min-w-px relative" data-name="table-cell">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[24px] relative size-full">
          <div className="flex flex-col font-['Nobel:Book',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#232632] text-[16px] whitespace-nowrap">
            <p className="leading-[1.25]">1060</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TableCell18() {
  return (
    <div className="bg-[#f6f5f3] flex-[1_0_0] h-[48px] min-h-px min-w-px relative" data-name="table-cell">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[24px] relative size-full">
          <div className="flex flex-col font-['Nobel:Book',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#232632] text-[16px] whitespace-nowrap">
            <p className="leading-[1.25]">976</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TableCell19() {
  return (
    <div className="bg-[#f6f5f3] flex-[1_0_0] h-[48px] min-h-px min-w-px relative" data-name="table-cell">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[24px] relative size-full">
          <div className="flex flex-col font-['Nobel:Book',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#232632] text-[16px] whitespace-nowrap">
            <p className="leading-[1.25]">-</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TableRow4() {
  return (
    <div className="content-stretch flex gap-px items-center relative shrink-0 w-full" data-name="table-row">
      <TableCell16 />
      <TableCell17 />
      <TableCell18 />
      <TableCell19 />
    </div>
  );
}

function TableCell20() {
  return (
    <div className="bg-[#f6f5f3] flex-[1_0_0] h-[48px] min-h-px min-w-px relative" data-name="table-cell">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[24px] relative size-full">
          <div className="flex flex-col font-['Nobel:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#232632] text-[16px] whitespace-nowrap">
            <p className="leading-[1.25]">8 col max-width</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TableCell21() {
  return (
    <div className="bg-[#f6f5f3] flex-[1_0_0] h-[48px] min-h-px min-w-px relative" data-name="table-cell">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[24px] relative size-full">
          <div className="flex flex-col font-['Nobel:Book',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#232632] text-[16px] whitespace-nowrap">
            <p className="leading-[1.25]">840</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TableCell22() {
  return (
    <div className="bg-[#f6f5f3] flex-[1_0_0] h-[48px] min-h-px min-w-px relative" data-name="table-cell">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[24px] relative size-full">
          <div className="flex flex-col font-['Nobel:Book',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#232632] text-[16px] whitespace-nowrap">
            <p className="leading-[1.25]">776</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TableCell23() {
  return (
    <div className="bg-[#f6f5f3] flex-[1_0_0] h-[48px] min-h-px min-w-px relative" data-name="table-cell">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[24px] relative size-full">
          <div className="flex flex-col font-['Nobel:Book',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#232632] text-[16px] whitespace-nowrap">
            <p className="leading-[1.25]">-</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TableRow5() {
  return (
    <div className="content-stretch flex gap-px items-center relative shrink-0 w-full" data-name="table-row">
      <TableCell20 />
      <TableCell21 />
      <TableCell22 />
      <TableCell23 />
    </div>
  );
}

function TableCell24() {
  return (
    <div className="bg-[#f6f5f3] flex-[1_0_0] h-[48px] min-h-px min-w-px relative" data-name="table-cell">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[24px] relative size-full">
          <div className="flex flex-col font-['Nobel:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#232632] text-[16px] whitespace-nowrap">
            <p className="leading-[1.25]">6 col max-width</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TableCell25() {
  return (
    <div className="bg-[#f6f5f3] flex-[1_0_0] h-[48px] min-h-px min-w-px relative" data-name="table-cell">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[24px] relative size-full">
          <div className="flex flex-col font-['Nobel:Book',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#232632] text-[16px] whitespace-nowrap">
            <p className="leading-[1.25]">620</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TableCell26() {
  return (
    <div className="bg-[#f6f5f3] flex-[1_0_0] h-[48px] min-h-px min-w-px relative" data-name="table-cell">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[24px] relative size-full">
          <div className="flex flex-col font-['Nobel:Book',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#232632] text-[16px] whitespace-nowrap">
            <p className="leading-[1.25]">576</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TableCell27() {
  return (
    <div className="bg-[#f6f5f3] flex-[1_0_0] h-[48px] min-h-px min-w-px relative" data-name="table-cell">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[24px] relative size-full">
          <div className="flex flex-col font-['Nobel:Book',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#232632] text-[16px] whitespace-nowrap">
            <p className="leading-[1.25]">-</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TableRow6() {
  return (
    <div className="content-stretch flex gap-px items-center relative shrink-0 w-full" data-name="table-row">
      <TableCell24 />
      <TableCell25 />
      <TableCell26 />
      <TableCell27 />
    </div>
  );
}

function TableCell28() {
  return (
    <div className="bg-[#f6f5f3] flex-[1_0_0] h-[48px] min-h-px min-w-px relative" data-name="table-cell">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[24px] relative size-full">
          <div className="flex flex-col font-['Nobel:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#232632] text-[16px] whitespace-nowrap">
            <p className="leading-[1.25]">4 col max-width</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TableCell29() {
  return (
    <div className="bg-[#f6f5f3] flex-[1_0_0] h-[48px] min-h-px min-w-px relative" data-name="table-cell">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[24px] relative size-full">
          <div className="flex flex-col font-['Nobel:Book',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#232632] text-[16px] whitespace-nowrap">
            <p className="leading-[1.25]">400</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TableCell30() {
  return (
    <div className="bg-[#f6f5f3] flex-[1_0_0] h-[48px] min-h-px min-w-px relative" data-name="table-cell">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[24px] relative size-full">
          <div className="flex flex-col font-['Nobel:Book',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#232632] text-[16px] whitespace-nowrap">
            <p className="leading-[1.25]">376</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TableCell31() {
  return (
    <div className="bg-[#f6f5f3] flex-[1_0_0] h-[48px] min-h-px min-w-px relative" data-name="table-cell">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[24px] relative size-full">
          <div className="flex flex-col font-['Nobel:Book',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#232632] text-[16px] whitespace-nowrap">
            <p className="leading-[1.25]">-</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TableRow7() {
  return (
    <div className="content-stretch flex gap-px items-center relative shrink-0 w-full" data-name="table-row">
      <TableCell28 />
      <TableCell29 />
      <TableCell30 />
      <TableCell31 />
    </div>
  );
}

function TableCell32() {
  return (
    <div className="bg-[#f6f5f3] flex-[1_0_0] h-[48px] min-h-px min-w-px relative" data-name="table-cell">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[24px] relative size-full">
          <div className="flex flex-col font-['Nobel:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#232632] text-[16px] whitespace-nowrap">
            <p className="leading-[1.25]">3 col max-width</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TableCell33() {
  return (
    <div className="bg-[#f6f5f3] flex-[1_0_0] h-[48px] min-h-px min-w-px relative" data-name="table-cell">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[24px] relative size-full">
          <div className="flex flex-col font-['Nobel:Book',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#232632] text-[16px] whitespace-nowrap">
            <p className="leading-[1.25]">290</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TableCell34() {
  return (
    <div className="bg-[#f6f5f3] flex-[1_0_0] h-[48px] min-h-px min-w-px relative" data-name="table-cell">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[24px] relative size-full">
          <div className="flex flex-col font-['Nobel:Book',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#232632] text-[16px] whitespace-nowrap">
            <p className="leading-[1.25]">276</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TableCell35() {
  return (
    <div className="bg-[#f6f5f3] flex-[1_0_0] h-[48px] min-h-px min-w-px relative" data-name="table-cell">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[24px] relative size-full">
          <div className="flex flex-col font-['Nobel:Book',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#232632] text-[16px] whitespace-nowrap">
            <p className="leading-[1.25]">-</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TableRow8() {
  return (
    <div className="content-stretch flex gap-px items-center relative shrink-0 w-full" data-name="table-row">
      <TableCell32 />
      <TableCell33 />
      <TableCell34 />
      <TableCell35 />
    </div>
  );
}

function TableStack() {
  return (
    <div className="bg-[rgba(23,23,23,0.1)] content-stretch flex flex-col gap-px items-start overflow-clip relative rounded-[8px] shrink-0 w-full" data-name="table-stack">
      <TableRow />
      <TableRow1 />
      <TableRow2 />
      <TableRow3 />
      <TableRow4 />
      <TableRow5 />
      <TableRow6 />
      <TableRow7 />
      <TableRow8 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center relative shrink-0 w-full">
      <Stack3 />
      <TableStack />
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
      <Stack4 />
      <Frame1 />
      <Frame2 />
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

function Container1() {
  return (
    <div className="content-stretch flex flex-col items-center max-w-[1920px] min-w-[1024px] relative shrink-0 w-full" data-name="Container">
      <Section />
    </div>
  );
}

export default function Container() {
  return (
    <div className="content-stretch flex flex-col items-start relative size-full" data-name="Container">
      <Container1 />
    </div>
  );
}