import svgPaths from "./svg-excmswixmj";
import imgCell from "figma:asset/3eb39f5697deef76f8b19c3b6a9b73e3d66ffb72.png";
import imgImage1 from "figma:asset/739e32b64bd854391cb62da9ec8d672736252d41.png";
import imgCell1 from "figma:asset/79a279474ae3dd357824ba8d76efa7428e01952c.png";
import imgComponentGenericTile from "figma:asset/35236070287bf2fbbcec0b545c1f4a01f2c7e435.png";
import imgComponentGenericTile1 from "figma:asset/561ff52e397ddca89c9639a7a9483c07ee366cb9.png";
import imgComponentGenericTile2 from "figma:asset/15f5477301fdad6cc6a71e15524eee6097b183c5.png";

function IconLogo() {
  return (
    <div className="absolute inset-[12.5%_0.08%_15.45%_0]" data-name="icon/logo">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 31.9739 23.0548">
        <g id="icon/logo">
          <path clipRule="evenodd" d={svgPaths.p19a00700} fill="var(--fill-0, #232632)" fillRule="evenodd" id="Colour" />
          <mask height="24" id="mask0_3_2076" maskUnits="userSpaceOnUse" style={{ maskType: "luminance" }} width="32" x="0" y="0">
            <path clipRule="evenodd" d={svgPaths.p19a00700} fill="var(--fill-0, white)" fillRule="evenodd" id="Colour_2" />
          </mask>
          <g mask="url(#mask0_3_2076)" />
        </g>
      </svg>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex font-['Nobel:Bold',sans-serif] gap-[16px] items-center leading-[1.15] not-italic relative shrink-0 text-[22px] text-[rgba(0,0,0,0.9)] tracking-[1.1px] uppercase">
      <p className="relative shrink-0">|</p>
      <p className="relative shrink-0">grid layout composition</p>
    </div>
  );
}

function Frame5() {
  return (
    <div className="absolute content-stretch flex gap-[16px] items-center left-[32px] top-[16px]">
      <div className="relative shrink-0 size-[32px]" data-name="lexus-logo-icon">
        <IconLogo />
      </div>
      <p className="font-['Nobel:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[18px] text-[rgba(0,0,0,0.9)] tracking-[0.36px] uppercase">composition</p>
      <Frame6 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="absolute content-stretch flex items-center left-[31px] top-[15px]">
      <p className="font-['Nobel:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[18px] text-[rgba(0,0,0,0.9)] tracking-[0.36px] uppercase">lexuskit</p>
    </div>
  );
}

function Status1() {
  return (
    <div className="absolute bg-[#ffb497] border border-[#dad8ce] border-solid h-[45px] left-[1632.92px] overflow-clip rounded-[20px] top-[10px] w-[145px]" data-name="_Status">
      <Frame7 />
    </div>
  );
}

function Status() {
  return (
    <div className="bg-[#fafaf9] h-[64px] relative rounded-[20px] shrink-0 w-full" data-name="_Status">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <Frame5 />
        <Status1 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#dad8ce] border-solid inset-0 pointer-events-none rounded-[20px]" />
    </div>
  );
}

function Stack1() {
  return (
    <div className="content-stretch flex flex-col font-['Nobel:Book',sans-serif] gap-[16px] items-start not-italic relative shrink-0 w-[900px]" data-name="Stack">
      <p className="leading-[1.15] relative shrink-0 text-[49px] text-[rgba(0,0,0,0.9)] tracking-[2.45px] uppercase">grid layout composition example</p>
      <div className="flex flex-col justify-center leading-[0] min-w-full relative shrink-0 text-[#232632] text-[22px] tracking-[0.275px] w-[min-content]">
        <p className="leading-[1.3] whitespace-pre-wrap">A composition example using the row/cell components within sections.</p>
      </div>
    </div>
  );
}

function Frame2() {
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

function Frame8() {
  return (
    <div className="content-stretch flex items-end justify-end relative shrink-0 w-[798px]">
      <div className="bg-[rgba(255,180,151,0.5)] content-stretch flex flex-col gap-[10px] items-start pb-[16px] pt-[8px] px-[40px] relative rounded-[6px] shrink-0 w-[352px]" data-name="_Label/Storybook">
        <Frame2 />
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
      <Frame8 />
    </div>
  );
}

function Cell() {
  return (
    <div className="bg-[#ffd1ef] flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Cell">
      <div aria-hidden="true" className="absolute border border-[#ff47c0] border-dashed inset-0 pointer-events-none" />
    </div>
  );
}

function Frame17() {
  return (
    <div className="bg-[#bbd7eb] content-stretch flex flex-[1_0_0] flex-col h-[72px] items-center justify-center min-h-px min-w-px relative">
      <Cell />
    </div>
  );
}

function Cell1() {
  return (
    <div className="bg-[#ffd1ef] flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="Cell">
      <div aria-hidden="true" className="absolute border border-[#ff47c0] border-dashed inset-0 pointer-events-none" />
    </div>
  );
}

function Row() {
  return (
    <div className="bg-[#b2b3f0] content-stretch flex items-center justify-end max-w-[1920px] relative shrink-0 w-full" data-name="Row">
      <div aria-hidden="true" className="absolute border border-[#9747ff] border-dashed inset-[-1px] pointer-events-none" />
      <Frame17 />
      <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
        <Cell1 />
      </div>
    </div>
  );
}

function Frame12() {
  return (
    <div className="bg-[#e3e1da] content-stretch flex flex-col items-center justify-center relative shrink-0 w-[1440px]">
      <div aria-hidden="true" className="absolute border border-[rgba(35,38,50,0.5)] border-dashed inset-0 pointer-events-none" />
      <Row />
    </div>
  );
}

function RichtextStack() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center justify-center relative shrink-0 w-full" data-name="_richtext-stack">
      <div className="font-['Nobel:book',sans-serif] leading-[0] not-italic relative shrink-0 text-[#232632] text-[0px] w-full whitespace-pre-wrap">
        <p className="leading-[29px] mb-[32px] text-[19px]">The RX provides a comprehensive suite of safety features within Lexus Safety System+ including the Pre-Collision System with intersection collision avoidance support, emergency steering assist and low-speed acceleration suppression.</p>
        <p>
          <span className="leading-[29px] text-[19px]">
            {`The Lexus first Driver Monitor helps to assess the driver's state of attention when on the road. Additional features included across the range include Lane Departure `}
            <br aria-hidden="true" />
            Alert, Dynamic Radar Cruise Control, Lane Tracing Assist, Parking Support Brake, Rear Cross Traffic Alert and more.
          </span>
          <span className="font-['Nobel:Book',sans-serif] leading-[29px] not-italic text-[12.255px]">9</span>
        </p>
      </div>
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center max-w-[400px] py-px relative shrink-0 w-full">
      <div className="content-stretch flex flex-col gap-[16px] items-start overflow-clip relative shrink-0 w-full" data-name=".comp-heading-and-text">
        <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Layout/Typography">
          <div className="flex flex-[1_0_0] flex-col font-['Nobel:Book',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#232632] text-[42px] tracking-[2.1px] uppercase">
            <p className="leading-[1.15] whitespace-pre-wrap">SAFETY</p>
          </div>
        </div>
        <RichtextStack />
      </div>
    </div>
  );
}

function Frame16() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center p-[64px] relative size-full">
          <Frame18 />
        </div>
      </div>
    </div>
  );
}

function Cell2() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="Cell">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgCell} />
    </div>
  );
}

function Row1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-end max-w-[1920px] min-h-px min-w-px relative w-full" data-name="Row">
      <Frame16 />
      <Cell2 />
    </div>
  );
}

function Frame13() {
  return (
    <div className="bg-[#dfdcd4] content-stretch flex flex-col h-[670px] items-center justify-center relative shrink-0 w-[1440px]">
      <Row1 />
    </div>
  );
}

function Frame58() {
  return (
    <div className="bg-[#f6f5f3] content-stretch flex flex-col gap-[16px] items-center py-[80px] relative rounded-[5px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[rgba(23,23,23,0.1)] border-solid inset-0 pointer-events-none rounded-[5px]" />
      <Frame12 />
      <Frame13 />
    </div>
  );
}

function Stack3() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0 w-full" data-name="Stack">
      <p className="font-['Nobel:Bold',sans-serif] leading-[0] not-italic relative shrink-0 text-[#232632] text-[0px] text-[12px] tracking-[1.44px] uppercase w-full whitespace-pre-wrap">
        <span className="leading-none">cells:</span>
        <span className="font-['Nobel:Book',sans-serif] leading-none">{` 2`}</span>
        <span className="leading-none">
          <br aria-hidden="true" />
          {`Width: `}
        </span>
        <span className="font-['Nobel:Book',sans-serif] leading-none">
          full
          <br aria-hidden="true" />
        </span>
        <span className="leading-none">gap:</span>
        <span className="font-['Nobel:Book',sans-serif] leading-none">{` no`}</span>
      </p>
      <Frame58 />
    </div>
  );
}

function Stack2() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full" data-name="Stack 2">
      <p className="font-['Nobel:Regular',sans-serif] leading-[1.15] not-italic relative shrink-0 text-[42px] text-[rgba(0,0,0,0.9)] tracking-[2.1px] uppercase w-[320px] whitespace-pre-wrap">examples</p>
      <Stack3 />
    </div>
  );
}

function Cell3() {
  return (
    <div className="bg-[#ffd1ef] flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="Cell">
      <div aria-hidden="true" className="absolute border border-[#ff47c0] border-dashed inset-0 pointer-events-none" />
    </div>
  );
}

function Row2() {
  return (
    <div className="bg-[#b2b3f0] content-stretch flex flex-[1_0_0] items-center justify-end max-w-[1920px] min-h-px min-w-px relative w-full" data-name="Row">
      <div aria-hidden="true" className="absolute border border-[#9747ff] border-dashed inset-[-1px] pointer-events-none" />
      <Cell3 />
    </div>
  );
}

function Frame14() {
  return (
    <div className="bg-[#e3e1da] content-stretch flex flex-col h-[24px] items-center justify-center relative shrink-0 w-[1440px]">
      <div aria-hidden="true" className="absolute border border-[rgba(35,38,50,0.5)] border-dashed inset-0 pointer-events-none" />
      <Row2 />
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-[1440px]" style={{ backgroundImage: "linear-gradient(90deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.2) 100%), linear-gradient(90deg, rgb(227, 225, 218) 0%, rgb(227, 225, 218) 100%)" }}>
      <div className="h-[891.743px] relative shrink-0 w-[1440px]" data-name="image 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage1} />
      </div>
    </div>
  );
}

function Frame59() {
  return (
    <div className="bg-[#f6f5f3] content-stretch flex flex-col gap-[16px] items-center py-[80px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[rgba(23,23,23,0.1)] border-solid inset-0 pointer-events-none" />
      <Frame14 />
      <Frame15 />
    </div>
  );
}

function Stack4() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Stack">
      <p className="font-['Nobel:Bold',sans-serif] leading-[0] not-italic relative shrink-0 text-[#232632] text-[0px] text-[12px] tracking-[1.44px] uppercase w-full whitespace-pre-wrap">
        <span className="leading-none">{`cells: `}</span>
        <span className="font-['Nobel:Book',sans-serif] leading-none">1</span>
        <span className="leading-none">
          <br aria-hidden="true" />
          {`width: `}
        </span>
        <span className="font-['Nobel:Book',sans-serif] leading-none">full</span>
      </p>
      <Frame59 />
    </div>
  );
}

function Cell4() {
  return (
    <div className="bg-[#ffd1ef] h-[24px] relative shrink-0 w-full" data-name="Cell">
      <div aria-hidden="true" className="absolute border border-[#ff47c0] border-dashed inset-0 pointer-events-none" />
    </div>
  );
}

function Cell5() {
  return (
    <div className="bg-[#ffd1ef] h-[24px] relative shrink-0 w-full" data-name="Cell">
      <div aria-hidden="true" className="absolute border border-[#ff47c0] border-dashed inset-0 pointer-events-none" />
    </div>
  );
}

function Frame20() {
  return (
    <div className="bg-[#bbd7eb] flex-[1_0_0] min-h-px min-w-px relative">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col gap-[24px] items-center justify-center p-[40px] relative w-full">
          <Cell4 />
          <Cell5 />
        </div>
      </div>
    </div>
  );
}

function Cell6() {
  return (
    <div className="bg-[#ffd1ef] flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="Cell">
      <div aria-hidden="true" className="absolute border border-[#ff47c0] border-dashed inset-0 pointer-events-none" />
    </div>
  );
}

function Row3() {
  return (
    <div className="bg-[#b2b3f0] max-w-[1060px] relative rounded-[5px] shrink-0 w-full" data-name="Row">
      <div className="content-stretch flex items-center justify-end max-w-[inherit] overflow-clip relative rounded-[inherit] w-full">
        <Frame20 />
        <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
          <Cell6 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#9747ff] border-dashed inset-[-1px] pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Frame19() {
  return (
    <div className="bg-[#e3e1da] content-stretch flex flex-col items-center justify-center px-[40px] py-[64px] relative shrink-0 w-[1440px]">
      <div aria-hidden="true" className="absolute border border-[rgba(35,38,50,0.5)] border-dashed inset-0 pointer-events-none" />
      <Row3 />
    </div>
  );
}

function RichtextStack1() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center justify-center relative shrink-0 w-full" data-name="_richtext-stack">
      <div className="font-['Nobel:book',sans-serif] leading-[0] not-italic relative shrink-0 text-[#232632] text-[0px] w-full whitespace-pre-wrap">
        <p className="mb-[32px]">
          <span className="leading-[29px] text-[19px]">As a Lexus Encore</span>
          <span className="font-['Nobel:Book',sans-serif] leading-[29px] not-italic text-[12.255px]">10</span>
          <span className="leading-[29px] text-[19px]">{` member, your time and your Lexus are our priority. Receive lifestyle benefits and vehicle service experiences that anticipate your needs, so you can live your life more seamlessly.`}</span>
        </p>
        <p className="leading-[29px] text-[19px]">Discover Encore benefits and start experiencing the luxury of time.</p>
      </div>
    </div>
  );
}

function Frame23() {
  return (
    <div className="bg-[#f6f5f3] content-stretch flex flex-col gap-[32px] items-start justify-center py-px relative shrink-0 w-full">
      <div className="content-stretch flex flex-col gap-[16px] items-start overflow-clip relative shrink-0 w-full" data-name=".comp-heading-and-text">
        <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Layout/Typography">
          <div className="flex flex-[1_0_0] flex-col font-['Nobel:book',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#232632] text-[42px] tracking-[2.1px] uppercase">
            <p className="leading-[48px] whitespace-pre-wrap">LEXUS ENCORE OWNER BENEFITS</p>
          </div>
        </div>
        <RichtextStack1 />
      </div>
      <div className="bg-[#232632] content-stretch flex gap-[4px] items-center justify-center min-h-[44px] min-w-[220px] px-[16px] py-[12px] relative rounded-[3px] shrink-0" data-name=".OLDComponentButton">
        <div aria-hidden="true" className="absolute border-2 border-[#232632] border-solid inset-0 pointer-events-none rounded-[3px]" />
        <div className="flex flex-col font-['Nobel:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#e8e6e0] text-[12px] text-center tracking-[1.44px] uppercase whitespace-nowrap">
          <p className="leading-[12px]">discover encore</p>
        </div>
      </div>
    </div>
  );
}

function Frame22() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center p-[64px] relative w-full">
          <Frame23 />
        </div>
      </div>
    </div>
  );
}

function Cell7() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="Cell">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgCell1} />
    </div>
  );
}

function Row4() {
  return (
    <div className="bg-[#f6f5f3] max-w-[1060px] relative rounded-[8px] shrink-0 w-full" data-name="Row">
      <div className="content-stretch flex items-center justify-end max-w-[inherit] overflow-clip relative rounded-[inherit] w-full">
        <Frame22 />
        <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
          <Cell7 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(23,23,23,0.1)] border-solid inset-[-1px] pointer-events-none rounded-[9px]" />
    </div>
  );
}

function Frame21() {
  return (
    <div className="bg-[#e3e1da] content-stretch flex flex-col items-center justify-center px-[40px] py-[64px] relative shrink-0 w-[1440px]">
      <Row4 />
    </div>
  );
}

function Frame60() {
  return (
    <div className="bg-[#f6f5f3] content-stretch flex flex-col gap-[16px] items-center py-[80px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[rgba(23,23,23,0.1)] border-solid inset-0 pointer-events-none" />
      <Frame19 />
      <Frame21 />
    </div>
  );
}

function Stack5() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Stack">
      <p className="font-['Nobel:Bold',sans-serif] leading-[0] not-italic relative shrink-0 text-[#232632] text-[0px] text-[12px] tracking-[1.44px] uppercase w-full whitespace-pre-wrap">
        <span className="leading-none">{`cells: `}</span>
        <span className="font-['Nobel:Book',sans-serif] leading-none">2</span>
        <span className="leading-none">
          <br aria-hidden="true" />
          {`width: `}
        </span>
        <span className="font-['Nobel:Book',sans-serif] leading-none">10 col</span>
        <span className="leading-none">
          <br aria-hidden="true" />
          {`Gap: `}
        </span>
        <span className="font-['Nobel:Book',sans-serif] leading-none">
          no
          <br aria-hidden="true" />
        </span>
        <span className="leading-none">row radius:</span>
        <span className="font-['Nobel:Book',sans-serif] leading-none">
          {` yes`}
          <br aria-hidden="true" />
          <br aria-hidden="true" />
        </span>
        <span className="leading-none">cell elevation:</span>
        <span className="font-['Nobel:Book',sans-serif] leading-none">{` yes`}</span>
        <span className="leading-none">
          <br aria-hidden="true" />
          {`cell-padding: `}
        </span>
        <span className="font-['Nobel:Book',sans-serif] leading-none">yes</span>
        <span className="leading-none">
          <br aria-hidden="true" />
          {`cell-gap: `}
        </span>
        <span className="font-['Nobel:Book',sans-serif] leading-none">
          yes
          <br aria-hidden="true" />
        </span>
        <span className="leading-none">Cell-radius:</span>
        <span className="font-['Nobel:Book',sans-serif] leading-none">{` no`}</span>
      </p>
      <Frame60 />
    </div>
  );
}

function Cell8() {
  return (
    <div className="bg-[#ffd1ef] h-[24px] relative shrink-0 w-full" data-name="Cell">
      <div aria-hidden="true" className="absolute border border-[#ff47c0] border-dashed inset-0 pointer-events-none" />
    </div>
  );
}

function Frame25() {
  return (
    <div className="bg-[#bbd7eb] content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px min-w-px relative">
      <Cell8 />
    </div>
  );
}

function Cell9() {
  return (
    <div className="bg-[#ffd1ef] h-[24px] relative shrink-0 w-full" data-name="Cell">
      <div aria-hidden="true" className="absolute border border-[#ff47c0] border-dashed inset-0 pointer-events-none" />
    </div>
  );
}

function Frame26() {
  return (
    <div className="bg-[#bbd7eb] content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px min-w-px relative">
      <Cell9 />
    </div>
  );
}

function Cell10() {
  return (
    <div className="bg-[#ffd1ef] h-[24px] relative shrink-0 w-full" data-name="Cell">
      <div aria-hidden="true" className="absolute border border-[#ff47c0] border-dashed inset-0 pointer-events-none" />
    </div>
  );
}

function Frame27() {
  return (
    <div className="bg-[#bbd7eb] content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px min-w-px relative">
      <Cell10 />
    </div>
  );
}

function Row5() {
  return (
    <div className="bg-[#b2b3f0] max-w-[1280px] relative rounded-[5px] shrink-0 w-full" data-name="Row">
      <div className="content-stretch flex gap-[40px] items-center justify-end max-w-[inherit] overflow-clip relative rounded-[inherit] w-full">
        <Frame25 />
        <Frame26 />
        <Frame27 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#9747ff] border-dashed inset-[-1px] pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Frame24() {
  return (
    <div className="bg-[#e8e6e0] content-stretch flex flex-col items-center justify-center px-[40px] py-[64px] relative shrink-0 w-[1440px]">
      <div aria-hidden="true" className="absolute border border-[rgba(35,38,50,0.5)] border-dashed inset-0 pointer-events-none" />
      <Row5 />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[60px] items-center relative shrink-0" data-name="Frame">
      <div className="flex flex-col font-['Nobel:Book',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#e8e6e0] text-[31px] text-center tracking-[1.55px] uppercase w-[352px]">
        <p className="leading-[1.15] whitespace-pre-wrap">request a brochure</p>
      </div>
    </div>
  );
}

function IconsDropdownArrow() {
  return (
    <div className="relative size-full" data-name="Icons/dropdown arrow">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.87132 5.49632">
        <g id="Icons/dropdown arrow">
          <path d={svgPaths.pb47a940} fill="var(--fill-0, white)" id="XMLID 26403" />
        </g>
      </svg>
    </div>
  );
}

function NeueChevronRight() {
  return (
    <div className="absolute contents inset-[13.04%_27.1%]" data-name="neue chevron right">
      <div className="absolute flex inset-[13.04%_27.1%] items-center justify-center">
        <div className="-rotate-90 flex-none h-[14.657px] w-[23.657px]">
          <IconsDropdownArrow />
        </div>
      </div>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <div className="relative shrink-0 size-[12px]" data-name="Icon">
        <NeueChevronRight />
      </div>
      <div className="flex flex-col font-['Nobel:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#e8e6e0] text-[12px] tracking-[1.44px] uppercase whitespace-nowrap">
        <p className="leading-[12px]">learn more</p>
      </div>
    </div>
  );
}

function Frame48() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <div className="content-stretch flex items-center overflow-clip relative shrink-0" data-name=".comp-svg-icon-link">
        <Frame9 />
      </div>
    </div>
  );
}

function ComponentGenericTile() {
  return (
    <div className="flex-[1_0_0] h-[200px] min-h-px min-w-px relative rounded-[5px]" data-name="Component/GenericTile">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[5px] size-full" src={imgComponentGenericTile} />
      <div aria-hidden="true" className="absolute border border-[rgba(23,23,23,0.1)] border-solid inset-0 pointer-events-none rounded-[5px] shadow-[0px_4px_8px_0px_#d6d3c8]" />
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center justify-between p-[24px] relative size-full">
          <Frame />
          <Frame48 />
        </div>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[60px] items-center relative shrink-0" data-name="Frame">
      <div className="flex flex-col font-['Nobel:Book',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#e8e6e0] text-[31px] text-center tracking-[1.55px] uppercase w-[352px]">
        <p className="leading-[1.15] whitespace-pre-wrap">request a test drive</p>
      </div>
    </div>
  );
}

function IconsDropdownArrow1() {
  return (
    <div className="relative size-full" data-name="Icons/dropdown arrow">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.87132 5.49632">
        <g id="Icons/dropdown arrow">
          <path d={svgPaths.pb47a940} fill="var(--fill-0, white)" id="XMLID 26403" />
        </g>
      </svg>
    </div>
  );
}

function NeueChevronRight1() {
  return (
    <div className="absolute contents inset-[13.04%_27.1%]" data-name="neue chevron right">
      <div className="absolute flex inset-[13.04%_27.1%] items-center justify-center">
        <div className="-rotate-90 flex-none h-[14.657px] w-[23.657px]">
          <IconsDropdownArrow1 />
        </div>
      </div>
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <div className="relative shrink-0 size-[12px]" data-name="Icon">
        <NeueChevronRight1 />
      </div>
      <div className="flex flex-col font-['Nobel:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#e8e6e0] text-[12px] tracking-[1.44px] uppercase whitespace-nowrap">
        <p className="leading-[12px]">book now</p>
      </div>
    </div>
  );
}

function Frame49() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <div className="content-stretch flex items-center overflow-clip relative shrink-0" data-name=".comp-svg-icon-link">
        <Frame10 />
      </div>
    </div>
  );
}

function ComponentGenericTile1() {
  return (
    <div className="flex-[1_0_0] h-[200px] min-h-px min-w-px relative rounded-[5px]" data-name="Component/GenericTile">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[5px] size-full" src={imgComponentGenericTile1} />
      <div aria-hidden="true" className="absolute border border-[rgba(23,23,23,0.1)] border-solid inset-0 pointer-events-none rounded-[5px] shadow-[0px_4px_8px_0px_#d6d3c8]" />
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center justify-between p-[24px] relative size-full">
          <Frame1 />
          <Frame49 />
        </div>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col gap-[60px] items-center relative shrink-0" data-name="Frame">
      <div className="flex flex-col font-['Nobel:Book',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#e8e6e0] text-[31px] text-center tracking-[1.55px] uppercase w-[352px]">
        <p className="leading-[1.15] whitespace-pre-wrap">finance</p>
      </div>
    </div>
  );
}

function IconsDropdownArrow2() {
  return (
    <div className="relative size-full" data-name="Icons/dropdown arrow">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.87132 5.49632">
        <g id="Icons/dropdown arrow">
          <path d={svgPaths.pb47a940} fill="var(--fill-0, white)" id="XMLID 26403" />
        </g>
      </svg>
    </div>
  );
}

function NeueChevronRight2() {
  return (
    <div className="absolute contents inset-[13.04%_27.1%]" data-name="neue chevron right">
      <div className="absolute flex inset-[13.04%_27.1%] items-center justify-center">
        <div className="-rotate-90 flex-none h-[14.657px] w-[23.657px]">
          <IconsDropdownArrow2 />
        </div>
      </div>
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <div className="relative shrink-0 size-[12px]" data-name="Icon">
        <NeueChevronRight2 />
      </div>
      <div className="flex flex-col font-['Nobel:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#e8e6e0] text-[12px] tracking-[1.44px] uppercase whitespace-nowrap">
        <p className="leading-[12px]">calculate</p>
      </div>
    </div>
  );
}

function Frame50() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <div className="content-stretch flex items-center overflow-clip relative shrink-0" data-name=".comp-svg-icon-link">
        <Frame11 />
      </div>
    </div>
  );
}

function ComponentGenericTile2() {
  return (
    <div className="flex-[1_0_0] h-[200px] min-h-px min-w-px relative rounded-[5px]" data-name="Component/GenericTile">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[5px] size-full" src={imgComponentGenericTile2} />
      <div aria-hidden="true" className="absolute border border-[rgba(23,23,23,0.1)] border-solid inset-0 pointer-events-none rounded-[5px] shadow-[0px_4px_8px_0px_#d6d3c8]" />
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center justify-between p-[24px] relative size-full">
          <Frame3 />
          <Frame50 />
        </div>
      </div>
    </div>
  );
}

function Row6() {
  return (
    <div className="content-stretch flex gap-[40px] items-center justify-end max-w-[1280px] relative rounded-[5px] shrink-0 w-full" data-name="Row">
      <ComponentGenericTile />
      <ComponentGenericTile1 />
      <ComponentGenericTile2 />
    </div>
  );
}

function Frame28() {
  return (
    <div className="bg-[#e8e6e0] content-stretch flex flex-col items-center justify-center px-[40px] py-[64px] relative shrink-0 w-[1440px]">
      <Row6 />
    </div>
  );
}

function Frame61() {
  return (
    <div className="bg-[#f6f5f3] content-stretch flex flex-col gap-[16px] items-center py-[80px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[rgba(23,23,23,0.1)] border-solid inset-0 pointer-events-none" />
      <Frame24 />
      <Frame28 />
    </div>
  );
}

function Stack6() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Stack">
      <p className="font-['Nobel:Bold',sans-serif] leading-[0] not-italic relative shrink-0 text-[#232632] text-[0px] text-[12px] tracking-[1.44px] uppercase w-full whitespace-pre-wrap">
        <span className="leading-none">{`cells: `}</span>
        <span className="font-['Nobel:Book',sans-serif] leading-none">3</span>
        <span className="leading-none">
          <br aria-hidden="true" />
          {`width: `}
        </span>
        <span className="font-['Nobel:Book',sans-serif] leading-none">12 col</span>
        <span className="leading-none">
          <br aria-hidden="true" />
          {`Gap: `}
        </span>
        <span className="font-['Nobel:Book',sans-serif] leading-none">
          yes
          <br aria-hidden="true" />
        </span>
        <span className="leading-none">{`cell-radius: `}</span>
        <span className="font-['Nobel:Regular',sans-serif] leading-none">yes</span>
        <span className="font-['Nobel:Regular',sans-serif] leading-none">{` [`}</span>
        <span className="leading-none">row-radius</span>
        <span className="font-['Nobel:Regular',sans-serif] leading-none">: no]</span>
      </p>
      <Frame61 />
    </div>
  );
}

function Cell11() {
  return (
    <div className="bg-[#ffd1ef] h-[24px] relative shrink-0 w-full" data-name="Cell">
      <div aria-hidden="true" className="absolute border border-[#ff47c0] border-dashed inset-0 pointer-events-none" />
    </div>
  );
}

function Frame31() {
  return (
    <div className="bg-[#f6f5f3] content-stretch flex flex-col items-center justify-center relative shrink-0 w-full">
      <Cell11 />
    </div>
  );
}

function Frame30() {
  return (
    <div className="bg-[#bbd7eb] content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px min-w-px relative">
      <div aria-hidden="true" className="absolute border border-[#198de6] border-dashed inset-0 pointer-events-none" />
      <Frame31 />
    </div>
  );
}

function Row7() {
  return (
    <div className="bg-[#b2b3f0] max-w-[1280px] relative rounded-[5px] shrink-0 w-full" data-name="Row">
      <div className="content-stretch flex items-center justify-end max-w-[inherit] overflow-clip relative rounded-[inherit] w-full">
        <Frame30 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#9747ff] border-dashed inset-[-1px] pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Cell12() {
  return (
    <div className="bg-[#ffd1ef] h-[24px] relative shrink-0 w-full" data-name="Cell">
      <div aria-hidden="true" className="absolute border border-[#ff47c0] border-dashed inset-0 pointer-events-none" />
    </div>
  );
}

function Frame32() {
  return (
    <div className="bg-[#bbd7eb] content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px min-w-px relative">
      <Cell12 />
    </div>
  );
}

function Cell13() {
  return (
    <div className="bg-[#ffd1ef] h-[24px] relative shrink-0 w-full" data-name="Cell">
      <div aria-hidden="true" className="absolute border border-[#ff47c0] border-dashed inset-0 pointer-events-none" />
    </div>
  );
}

function Frame33() {
  return (
    <div className="bg-[#bbd7eb] content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px min-w-px relative">
      <Cell13 />
    </div>
  );
}

function Cell14() {
  return (
    <div className="bg-[#ffd1ef] h-[24px] relative shrink-0 w-full" data-name="Cell">
      <div aria-hidden="true" className="absolute border border-[#ff47c0] border-dashed inset-0 pointer-events-none" />
    </div>
  );
}

function Frame34() {
  return (
    <div className="bg-[#bbd7eb] content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px min-w-px relative">
      <Cell14 />
    </div>
  );
}

function Row8() {
  return (
    <div className="bg-[#b2b3f0] max-w-[1280px] relative rounded-[5px] shrink-0 w-full" data-name="Row">
      <div className="content-stretch flex gap-[40px] items-center justify-end max-w-[inherit] overflow-clip relative rounded-[inherit] w-full">
        <Frame32 />
        <Frame33 />
        <Frame34 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#9747ff] border-dashed inset-[-1px] pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Frame29() {
  return (
    <div className="bg-[#e8e6e0] content-stretch flex flex-col gap-[48px] items-center justify-center px-[40px] py-[64px] relative shrink-0 w-[1440px]">
      <div aria-hidden="true" className="absolute border border-[rgba(35,38,50,0.5)] border-dashed inset-0 pointer-events-none" />
      <Row7 />
      <Row8 />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute inset-[8.33%]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g id="Group 2">
          <path d={svgPaths.p26e43200} fill="var(--fill-0, black)" id="Union" />
        </g>
      </svg>
    </div>
  );
}

function Component48IconUser() {
  return (
    <div className="overflow-clip relative shrink-0 size-[48px]" data-name="48-icon/user">
      <Group />
    </div>
  );
}

function Frame37() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center justify-center relative shrink-0 w-full">
      <Component48IconUser />
      <div className="content-stretch flex flex-col gap-[12px] items-start overflow-clip relative shrink-0 w-full" data-name=".DONOTUSEComponent/LabelAndValues">
        <div className="flex flex-col font-['Nobel:Book',sans-serif] justify-center leading-[0] not-italic opacity-70 relative shrink-0 text-[#232632] text-[12px] tracking-[1.44px] uppercase w-full">
          <ol start="1">
            <li className="ms-[18px] whitespace-pre-wrap">
              <span className="leading-[12px]">sign in or register your vehicle</span>
            </li>
          </ol>
        </div>
        <div className="content-stretch flex flex-col gap-[12px] items-start justify-center relative shrink-0 w-full" data-name=".DONOTUSEAtom/richtext-stack">
          <p className="font-['Nobel:Book',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#232632] text-[19px] w-full whitespace-pre-wrap">You will need to sign-in, or create a new profile in the Lexus Connected App, where you can register your vehicle.</p>
        </div>
      </div>
    </div>
  );
}

function Frame36() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-center min-h-px min-w-px relative">
      <Frame37 />
    </div>
  );
}

function Frame39() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center justify-center relative shrink-0 w-full">
      <div className="overflow-clip relative shrink-0 size-[48px]" data-name=".48-icon/build-price-2">
        <div className="absolute inset-[18.06%_6.27%_18.05%_6.6%]" data-name="Union">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 41.8252 30.6683">
            <path d={svgPaths.p4a9a500} fill="var(--fill-0, black)" id="Union" />
          </svg>
        </div>
      </div>
      <div className="content-stretch flex flex-col gap-[12px] items-start overflow-clip relative shrink-0 w-full" data-name=".DONOTUSEComponent/LabelAndValues">
        <div className="flex flex-col font-['Nobel:Book',sans-serif] justify-center leading-[0] not-italic opacity-70 relative shrink-0 text-[#232632] text-[12px] tracking-[1.44px] uppercase w-full">
          <p className="leading-[12px] whitespace-pre-wrap">2. ACTIVATE LEXUS CONNECTED SERVICES</p>
        </div>
        <div className="content-stretch flex flex-col gap-[12px] items-start justify-center relative shrink-0 w-full" data-name=".DONOTUSEAtom/richtext-stack">
          <p className="font-['Nobel:Book',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#232632] text-[19px] w-full whitespace-pre-wrap">Activate and use connectivity services available for your Lexus vehicle. Everything can be completed in your Lexus Connected App.</p>
        </div>
      </div>
    </div>
  );
}

function Frame38() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-center min-h-px min-w-px relative">
      <Frame39 />
    </div>
  );
}

function Component32IconStar() {
  return (
    <div className="relative shrink-0 size-[48px]" data-name="32-icon/star">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48">
        <g id="32-icon/star">
          <path d={svgPaths.p3136d700} id="Vector 74" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
          <path clipRule="evenodd" d={svgPaths.p136baf80} fill="var(--fill-0, black)" fillRule="evenodd" id="Vector (Stroke)" stroke="var(--stroke-0, black)" strokeWidth="0.8" />
          <path d="M22.5152 38.1929H32.5882" id="Vector 76" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeWidth="2.5" />
          <circle cx="27.5831" cy="10.0454" fill="var(--fill-0, black)" id="Ellipse" r="1.45508" />
        </g>
      </svg>
    </div>
  );
}

function Frame41() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center justify-center relative shrink-0 w-full">
      <Component32IconStar />
      <div className="content-stretch flex flex-col gap-[12px] items-start overflow-clip relative shrink-0 w-full" data-name=".DONOTUSEComponent/LabelAndValues">
        <div className="flex flex-col font-['Nobel:Book',sans-serif] justify-center leading-[0] not-italic opacity-70 relative shrink-0 text-[#232632] text-[12px] tracking-[1.44px] uppercase w-full">
          <p className="leading-[12px] whitespace-pre-wrap">3. STAY CONNECTED</p>
        </div>
        <div className="content-stretch flex flex-col gap-[12px] items-start justify-center relative shrink-0 w-full" data-name=".DONOTUSEAtom/richtext-stack">
          <p className="font-['Nobel:Book',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#232632] text-[19px] w-full whitespace-pre-wrap">You can find out more about your connectivity services in the Lexus Connected App.</p>
        </div>
      </div>
    </div>
  );
}

function Frame40() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-center min-h-px min-w-px relative">
      <Frame41 />
    </div>
  );
}

function Row9() {
  return (
    <div className="content-stretch flex gap-[40px] items-center justify-end max-w-[1280px] overflow-clip relative rounded-[5px] shrink-0 w-full" data-name="Row">
      <Frame36 />
      <Frame38 />
      <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
        <Frame40 />
      </div>
    </div>
  );
}

function Frame35() {
  return (
    <div className="bg-[#e8e6e0] content-stretch flex flex-col gap-[48px] items-center justify-center px-[40px] py-[96px] relative shrink-0 w-[1440px]">
      <div className="content-stretch flex flex-col gap-[16px] items-start overflow-clip relative shrink-0 w-[1280px]" data-name=".comp-heading-and-text">
        <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Layout/Typography">
          <div className="flex flex-[1_0_0] flex-col font-['Nobel:Book',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#232632] text-[42px] text-center tracking-[2.1px] uppercase">
            <p className="leading-[1.15] whitespace-pre-wrap">how to connect</p>
          </div>
        </div>
      </div>
      <Row9 />
    </div>
  );
}

function Frame62() {
  return (
    <div className="bg-[#f6f5f3] content-stretch flex flex-col gap-[16px] items-center py-[80px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[rgba(23,23,23,0.1)] border-solid inset-0 pointer-events-none" />
      <Frame29 />
      <Frame35 />
    </div>
  );
}

function Stack7() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Stack">
      <p className="font-['Nobel:Bold',sans-serif] leading-[0] not-italic relative shrink-0 text-[#232632] text-[0px] text-[12px] tracking-[1.44px] uppercase w-full whitespace-pre-wrap">
        <span className="leading-none">cells:</span>
        <span className="font-['Nobel:Book',sans-serif] leading-none">{` 1`}</span>
        <span className="leading-none">
          <br aria-hidden="true" />
          {`width: `}
        </span>
        <span className="font-['Nobel:Book',sans-serif] leading-none">
          12 col
          <br aria-hidden="true" />
          <br aria-hidden="true" />
        </span>
        <span className="leading-none">{`cells: `}</span>
        <span className="font-['Nobel:Book',sans-serif] leading-none">
          3<br aria-hidden="true" />
        </span>
        <span className="leading-none">{`width: `}</span>
        <span className="font-['Nobel:Book',sans-serif] leading-none">
          12 col
          <br aria-hidden="true" />
        </span>
        <span className="leading-none">gaP:</span>
        <span className="font-['Nobel:Book',sans-serif] leading-none">{` yes`}</span>
      </p>
      <Frame62 />
    </div>
  );
}

function Cell15() {
  return (
    <div className="bg-[#ffd1ef] flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Cell">
      <div aria-hidden="true" className="absolute border border-[#ff47c0] border-dashed inset-0 pointer-events-none" />
    </div>
  );
}

function Frame43() {
  return (
    <div className="bg-[#bbd7eb] content-stretch flex flex-[1_0_0] flex-col h-full items-center justify-center min-h-px min-w-px relative">
      <Cell15 />
    </div>
  );
}

function Cell16() {
  return (
    <div className="bg-[#ffd1ef] flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Cell">
      <div aria-hidden="true" className="absolute border border-[#ff47c0] border-dashed inset-0 pointer-events-none" />
    </div>
  );
}

function Frame44() {
  return (
    <div className="bg-[#bbd7eb] content-stretch flex flex-[1_0_0] flex-col h-full items-center justify-center min-h-px min-w-px relative">
      <Cell16 />
    </div>
  );
}

function Cell17() {
  return (
    <div className="bg-[#ffd1ef] flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Cell">
      <div aria-hidden="true" className="absolute border border-[#ff47c0] border-dashed inset-0 pointer-events-none" />
    </div>
  );
}

function Frame45() {
  return (
    <div className="bg-[#bbd7eb] content-stretch flex flex-[1_0_0] flex-col h-full items-center justify-center min-h-px min-w-px relative">
      <Cell17 />
    </div>
  );
}

function Cell18() {
  return (
    <div className="bg-[#ffd1ef] flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Cell">
      <div aria-hidden="true" className="absolute border border-[#ff47c0] border-dashed inset-0 pointer-events-none" />
    </div>
  );
}

function Frame46() {
  return (
    <div className="bg-[#bbd7eb] content-stretch flex flex-[1_0_0] flex-col h-full items-center justify-center min-h-px min-w-px relative">
      <Cell18 />
    </div>
  );
}

function Row10() {
  return (
    <div className="bg-[#b2b3f0] h-[122px] max-w-[1280px] relative shrink-0 w-full" data-name="Row">
      <div className="content-stretch flex gap-[40px] items-center justify-end max-w-[inherit] overflow-clip relative rounded-[inherit] size-full">
        <Frame43 />
        <Frame44 />
        <Frame45 />
        <Frame46 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#9747ff] border-dashed inset-[-1px] pointer-events-none" />
    </div>
  );
}

function Frame42() {
  return (
    <div className="bg-[#272a39] content-stretch flex flex-col items-center justify-center px-[40px] py-[64px] relative shrink-0 w-[1440px]">
      <div aria-hidden="true" className="absolute border border-[rgba(232,230,224,0.5)] border-dashed inset-0 pointer-events-none" />
      <Row10 />
    </div>
  );
}

function Frame53() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start leading-[0] min-h-px min-w-px not-italic relative text-[#e8e6e0]">
      <div className="flex flex-col font-['Nobel:regular',sans-serif] justify-end relative shrink-0 text-[18px] tracking-[0.23px] w-full">
        <p className="leading-[27px] whitespace-pre-wrap">buy</p>
      </div>
      <div className="flex flex-col font-['Nobel:book',sans-serif] justify-center relative shrink-0 text-[19px] w-full">
        <p className="leading-[29px] whitespace-pre-wrap">Models</p>
      </div>
      <div className="flex flex-col font-['Nobel:book',sans-serif] justify-center relative shrink-0 text-[19px] w-full">
        <p className="leading-[29px] whitespace-pre-wrap">SUV</p>
      </div>
      <div className="flex flex-col font-['Nobel:book',sans-serif] justify-center relative shrink-0 text-[19px] w-full">
        <p className="leading-[29px] whitespace-pre-wrap">Sedan</p>
      </div>
      <div className="flex flex-col font-['Nobel:book',sans-serif] justify-center relative shrink-0 text-[19px] w-full">
        <p className="leading-[29px] whitespace-pre-wrap">Coupe</p>
      </div>
      <div className="flex flex-col font-['Nobel:book',sans-serif] justify-center relative shrink-0 text-[19px] w-full">
        <p className="leading-[29px] whitespace-pre-wrap">Mover</p>
      </div>
      <div className="flex flex-col font-['Nobel:book',sans-serif] justify-center relative shrink-0 text-[19px] w-full">
        <p className="leading-[29px] whitespace-pre-wrap">Lexus Electrified</p>
      </div>
      <div className="flex flex-col font-['Nobel:book',sans-serif] justify-center relative shrink-0 text-[19px] w-full">
        <p className="leading-[29px] whitespace-pre-wrap">Certified Pre-Owned</p>
      </div>
      <div className="flex flex-col font-['Nobel:book',sans-serif] justify-center relative shrink-0 text-[19px] w-full">
        <p className="leading-[29px] whitespace-pre-wrap">Corporate Program</p>
      </div>
      <div className="flex flex-col font-['Nobel:book',sans-serif] justify-center relative shrink-0 text-[19px] w-full">
        <p className="leading-[29px] whitespace-pre-wrap">Finance and Insurance</p>
      </div>
      <div className="flex flex-col font-['Nobel:book',sans-serif] justify-center relative shrink-0 text-[19px] w-full">
        <p className="leading-[29px] whitespace-pre-wrap">Vehicle Delivery Wait Time</p>
      </div>
    </div>
  );
}

function Frame52() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start leading-[0] min-h-px min-w-px not-italic relative text-[#e8e6e0]">
      <div className="flex flex-col font-['Nobel:regular',sans-serif] justify-end relative shrink-0 text-[18px] tracking-[0.23px] w-full">
        <p className="leading-[27px] whitespace-pre-wrap">discover</p>
      </div>
      <div className="flex flex-col font-['Nobel:book',sans-serif] justify-center relative shrink-0 text-[19px] w-full">
        <p className="leading-[29px] whitespace-pre-wrap">About Lexus</p>
      </div>
      <div className="flex flex-col font-['Nobel:book',sans-serif] justify-center relative shrink-0 text-[19px] w-full">
        <p className="leading-[29px] whitespace-pre-wrap">Ambassadors</p>
      </div>
      <div className="flex flex-col font-['Nobel:book',sans-serif] justify-center relative shrink-0 text-[19px] w-full">
        <p className="leading-[29px] whitespace-pre-wrap">Collaborations</p>
      </div>
      <div className="flex flex-col font-['Nobel:book',sans-serif] justify-center relative shrink-0 text-[19px] w-full">
        <p className="leading-[29px] whitespace-pre-wrap">Concept Vehicles</p>
      </div>
      <div className="flex flex-col font-['Nobel:book',sans-serif] justify-center relative shrink-0 text-[19px] w-full">
        <p className="leading-[29px] whitespace-pre-wrap">Connectivity</p>
      </div>
      <div className="flex flex-col font-['Nobel:book',sans-serif] justify-center relative shrink-0 text-[19px] w-full">
        <p className="leading-[29px] whitespace-pre-wrap">Merchandise Store</p>
      </div>
      <div className="flex flex-col font-['Nobel:book',sans-serif] justify-center relative shrink-0 text-[19px] w-full">
        <p className="leading-[29px] whitespace-pre-wrap">News</p>
      </div>
      <div className="flex flex-col font-['Nobel:book',sans-serif] justify-center relative shrink-0 text-[19px] w-full">
        <p className="leading-[29px] whitespace-pre-wrap">Partnerships</p>
      </div>
      <div className="flex flex-col font-['Nobel:book',sans-serif] justify-center relative shrink-0 text-[19px] w-full">
        <p className="leading-[29px] whitespace-pre-wrap">Story</p>
      </div>
      <div className="flex flex-col font-['Nobel:book',sans-serif] justify-center relative shrink-0 text-[19px] w-full">
        <p className="leading-[29px] whitespace-pre-wrap">Sustainability</p>
      </div>
    </div>
  );
}

function Frame51() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] h-full items-start leading-[0] min-h-px min-w-px not-italic relative text-[#e8e6e0]">
      <div className="flex flex-col font-['Nobel:regular',sans-serif] justify-end relative shrink-0 text-[18px] tracking-[0.23px] w-full">
        <p className="leading-[27px] whitespace-pre-wrap">OWN</p>
      </div>
      <div className="flex flex-col font-['Nobel:book',sans-serif] justify-center relative shrink-0 text-[19px] w-full">
        <p className="leading-[29px] whitespace-pre-wrap">Apps</p>
      </div>
      <div className="flex flex-col font-['Nobel:book',sans-serif] justify-center relative shrink-0 text-[19px] w-full">
        <p className="leading-[29px] whitespace-pre-wrap">Benefits</p>
      </div>
      <div className="flex flex-col font-['Nobel:book',sans-serif] justify-center relative shrink-0 text-[19px] w-full">
        <p className="leading-[29px] whitespace-pre-wrap">Complaints Handling</p>
      </div>
      <div className="flex flex-col font-['Nobel:book',sans-serif] justify-center relative shrink-0 text-[19px] w-full">
        <p className="leading-[29px] whitespace-pre-wrap">Customer Charter</p>
      </div>
      <div className="flex flex-col font-['Nobel:book',sans-serif] justify-center relative shrink-0 text-[19px] w-full">
        <p className="leading-[29px] whitespace-pre-wrap">Find a Repairer</p>
      </div>
      <div className="flex flex-col font-['Nobel:book',sans-serif] justify-center relative shrink-0 text-[19px] w-full">
        <p className="leading-[29px] whitespace-pre-wrap">Servicing</p>
      </div>
      <div className="flex flex-col font-['Nobel:book',sans-serif] justify-center relative shrink-0 text-[19px] w-full">
        <p className="leading-[29px] whitespace-pre-wrap">Update Details</p>
      </div>
      <div className="flex flex-col font-['Nobel:book',sans-serif] justify-center relative shrink-0 text-[19px] w-full">
        <p className="leading-[29px] whitespace-pre-wrap">Warranty</p>
      </div>
    </div>
  );
}

function Frame54() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start leading-[0] not-italic relative shrink-0 text-[#e8e6e0] w-full">
      <div className="flex flex-col font-['Nobel:regular',sans-serif] justify-end relative shrink-0 text-[18px] tracking-[0.23px] w-full">
        <p className="leading-[27px] whitespace-pre-wrap">Contact</p>
      </div>
      <div className="flex flex-col font-['Nobel:book',sans-serif] justify-center relative shrink-0 text-[19px] w-full">
        <p className="leading-[29px] whitespace-pre-wrap">Contact Us</p>
      </div>
      <div className="flex flex-col font-['Nobel:book',sans-serif] justify-center relative shrink-0 text-[19px] w-full">
        <p className="leading-[29px] whitespace-pre-wrap">Find a Dealer</p>
      </div>
      <div className="flex flex-col font-['Nobel:book',sans-serif] justify-center relative shrink-0 text-[19px] w-full">
        <p className="leading-[29px] whitespace-pre-wrap">Request a Brochure</p>
      </div>
      <div className="flex flex-col font-['Nobel:book',sans-serif] justify-center relative shrink-0 text-[19px] w-full">
        <p className="leading-[29px] whitespace-pre-wrap">Request a Test Drive</p>
      </div>
    </div>
  );
}

function Frame57() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name=".16-icon/phone">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
          <path clipRule="evenodd" d={svgPaths.p35635680} fill="var(--fill-0, #E8E6E0)" fillRule="evenodd" id="Colour" />
        </svg>
      </div>
      <div className="flex flex-[1_0_0] flex-col font-['Nobel:book',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#e8e6e0] text-[19px]">
        <p className="leading-[29px] whitespace-pre-wrap">1800 023 009</p>
      </div>
    </div>
  );
}

function Frame55() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <div className="flex flex-col font-['Nobel:regular',sans-serif] justify-end leading-[0] not-italic relative shrink-0 text-[#e8e6e0] text-[18px] tracking-[0.23px] w-full">
        <p className="leading-[27px] whitespace-pre-wrap">Lexus customer assistance centre</p>
      </div>
      <Frame57 />
    </div>
  );
}

function Frame64() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start leading-[0] not-italic relative shrink-0 text-[#e8e6e0] w-full">
      <div className="flex flex-col font-['Nobel:regular',sans-serif] justify-end relative shrink-0 text-[18px] tracking-[0.23px] w-full">
        <p className="leading-[27px] whitespace-pre-wrap">recall information</p>
      </div>
      <div className="flex flex-col font-['Nobel:book',sans-serif] justify-center relative shrink-0 text-[19px] w-full">
        <p className="leading-[29px] whitespace-pre-wrap">Recalls and Service Campaigns</p>
      </div>
    </div>
  );
}

function Frame56() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[32px] h-full items-start min-h-px min-w-px relative">
      <Frame54 />
      <Frame55 />
      <Frame64 />
    </div>
  );
}

function Row11() {
  return (
    <div className="content-stretch flex gap-[40px] items-center justify-end max-w-[1280px] overflow-clip relative shrink-0 w-full" data-name="Row">
      <Frame53 />
      <Frame52 />
      <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
        <Frame51 />
      </div>
      <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
        <Frame56 />
      </div>
    </div>
  );
}

function Frame47() {
  return (
    <div className="bg-[#272a39] content-stretch flex flex-col items-center justify-center px-[40px] py-[64px] relative shrink-0 w-[1440px]">
      <Row11 />
    </div>
  );
}

function Frame63() {
  return (
    <div className="bg-[#f6f5f3] content-stretch flex flex-col gap-[16px] items-center py-[80px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[rgba(23,23,23,0.1)] border-solid inset-0 pointer-events-none" />
      <Frame42 />
      <Frame47 />
    </div>
  );
}

function Stack8() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Stack">
      <p className="font-['Nobel:Bold',sans-serif] leading-[0] not-italic relative shrink-0 text-[#232632] text-[0px] text-[12px] tracking-[1.44px] uppercase w-full whitespace-pre-wrap">
        <span className="leading-none">{`cells: `}</span>
        <span className="font-['Nobel:Book',sans-serif] leading-none">4</span>
        <span className="leading-none">
          <br aria-hidden="true" />
          {`width: `}
        </span>
        <span className="font-['Nobel:Book',sans-serif] leading-none">12 col</span>
        <span className="leading-none">
          <br aria-hidden="true" />
          {`Gap: `}
        </span>
        <span className="font-['Nobel:Book',sans-serif] leading-none">yes</span>
      </p>
      <Frame63 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center relative shrink-0 w-full">
      <Stack2 />
      <Stack4 />
      <Stack5 />
      <Stack6 />
      <Stack7 />
      <Stack8 />
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
      <Frame4 />
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

export default function GridCompositionExample() {
  return (
    <div className="content-stretch flex flex-col items-start relative size-full" data-name="Grid Composition Example">
      <Container />
    </div>
  );
}