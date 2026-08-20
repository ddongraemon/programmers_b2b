"use client";

import { useState } from "react";

const courses = [
  { step: "01", tone: "blue", eyebrow: "AI 기초 · 전사 역량", title: "신입·주니어를 위한 AI 업무 기초 활용", hours: "7H", audience: "신입·주니어", desc: "ChatGPT·Claude 등 생성형 AI를 보고서, 이메일, 회의록 등 일상 업무에 바로 적용합니다." },
  { step: "01", tone: "blue", eyebrow: "AI 기초 · 전사 역량", title: "전 직원 AI 역량진단·학습 과정", hours: "4H", audience: "전 직원", desc: "AI 이해·프롬프트·자동화·데이터·보안 역량을 진단하고 개인별 다음 학습 단계를 설계합니다." },
  { step: "01", tone: "blue", eyebrow: "AI 기초 · 전사 역량", title: "AI 리터러시와 보안·거버넌스 기초", hours: "8H", audience: "전 직원", desc: "생성형 AI를 안전하게 활용하기 위한 보안, 개인정보, 저작권, 검증 원칙을 익힙니다." },
  { step: "02", tone: "purple", eyebrow: "직무 생산성 · 업무 자동화", title: "AI 콘텐츠 제작과 비즈니스 문서 자동화", hours: "14H", audience: "사무직 실무자", desc: "마케팅·영업·HR·경영지원 문서와 콘텐츠 제작을 AI로 빠르게 만들고 반복 업무를 표준화합니다." },
  { step: "02", tone: "purple", eyebrow: "직무 생산성 · 업무 자동화", title: "AI 데이터 분석과 업무 자동화 (Python 활용)", hours: "21H", audience: "전 직군 실무자", desc: "엑셀·AI·Python을 결합해 업무 데이터를 분석하고 리포트와 반복 업무를 자동화합니다." },
  { step: "03", tone: "green", eyebrow: "리더 · 조직 AX", title: "팀장·관리자를 위한 AI 리더십과 업무혁신", hours: "7H", audience: "팀장·관리자", desc: "AI 적용 업무를 선별하고 팀 단위 전환 우선순위와 3개월 실행 로드맵을 설계합니다." },
  { step: "04", tone: "red", eyebrow: "AI 서비스 제작 · 개발", title: "바이브코딩으로 만드는 AI 웹서비스", hours: "21H", audience: "비개발 실무자", desc: "코딩 경험 없이 업무용 웹앱을 기획하고 DB·API를 연결해 실제 MVP까지 제작·배포합니다." },
  { step: "04", tone: "red", eyebrow: "AI 서비스 제작 · 개발", title: "개발자·IT 담당자를 위한 AI 서비스 설계와 구현", hours: "21H", audience: "개발자·IT 담당자", desc: "LLM API, RAG, AI Agent를 설계·구현해 사내 업무에 적용 가능한 AI 서비스 PoC를 만듭니다." },
];

const faq = [
  ["어떤 기업이 지원 대상인가요?", "우선지원대상기업을 중심으로 지원됩니다. 실제 적용 가능 여부는 기업 정보와 사업 기준을 확인한 뒤 안내드립니다."],
  ["최대 얼마까지 지원받을 수 있나요?", "기업의 지원 한도와 과정 조건에 따라 달라질 수 있습니다. 랜딩페이지의 지원 가능 여부 확인 또는 상담을 통해 정확한 금액을 안내받을 수 있습니다."],
  ["온라인 교육도 가능한가요?", "승인된 8개 과정은 비대면 실시간 운영이 가능하도록 신청되어 있으며, 과정과 기업 상황에 맞춰 운영 방식을 협의할 수 있습니다."],
  ["개발자가 아니어도 들을 수 있나요?", "네. 전 직원·신입·사무직·관리자·비개발 실무자를 위한 과정부터 개발자 과정까지 역할별로 구성되어 있습니다."],
  ["우리 직원에게 어떤 과정이 맞는지 모르겠어요.", "직급, 직무, 현재 AI 활용 수준, 교육 목표를 기준으로 8개 승인 과정 중 적합한 조합을 추천해드립니다."],
  ["신청과 환급 절차가 복잡하지 않나요?", "교육 상담부터 과정 확정, 운영, 행정·환급 안내까지 담당자가 함께 진행하는 구조로 설계할 예정입니다."],
];

const benefits = [
  ["지원대상", "우선지원대상기업 중심"],
  ["지원율", "교육비 최대 95%"],
  ["교육과정", "AI융합형 승인 8개 과정"],
  ["교육방식", "집체 · 비대면 실시간"],
];

export default function Home() {
  const [activeStep, setActiveStep] = useState("01");
  const [isEligibilityOpen, setIsEligibilityOpen] = useState(false);
  const [participants, setParticipants] = useState("20");
  const visibleCourses = courses.filter((course) => course.step === activeStep);
  const estimatedCost = Number(participants) * 280000;
  const estimatedSupport = Math.round(estimatedCost * 0.95);

  return (
    <main>
      <nav className="topbar">
        <a className="brand" href="#top" aria-label="프로그래머스 B2B 홈">
          <span className="brand-mark">P</span>
          <span>programmers <b>business</b></span>
        </a>
        <div className="nav-links">
          <a href="#courses">교육과정</a>
          <a href="#why">왜 프로그래머스인가</a>
          <a href="#faq">FAQ</a>
          <a className="button button-sm" href="#consult">교육 상담</a>
        </div>
      </nav>

      <section className="hero" id="top">
        <div className="hero-glow hero-glow-one" />
        <div className="hero-glow hero-glow-two" />
        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="pill">중소기업 인재키움 프리미엄 훈련</span>
            <h1><span>전 직원부터 개발자까지</span><em>우리 조직에 필요한<br/>AI 역량을 키우세요.</em></h1>
            <p className="hero-lead">AI 기초부터 업무 자동화, 조직 AX, AI 서비스 구현까지. 프로그래머스의 8개 승인 과정으로 단계별 학습을 시작하세요.</p>
            <div className="hero-actions">
              <a className="button" href="#eligibility">우리 회사 지원 가능 여부 확인</a>
              <a className="button button-secondary" href="#courses">8개 교육과정 보기</a>
            </div>
            <div className="hero-proof">
              <span>✓ 교육비 최대 95% 지원</span>
              <span>✓ 집체·비대면 실시간</span>
              <span>✓ 역할별 8개 승인 과정</span>
            </div>
          </div>
          <div className="hero-visual hero-illustration" aria-label="동료들과 함께 AI를 배우는 기업교육 현장">
            <div className="hero-image-wrap"><img src="hero-ai-learning.png" alt="AI를 함께 배우고 아이디어를 나누는 직장인들" /></div>
            <div className="hero-sticker hero-sticker-a"><b>최대 95%</b><span>훈련비 지원</span></div>
            <div className="hero-sticker hero-sticker-b"><span>역할별</span><b>8개 승인 과정</b></div>
            <div className="hero-spark" aria-hidden="true">✦</div>
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container">
          <div className="section-heading centered">
            <span className="kicker purple-text">OUTCOME FIRST</span>
            <h2>교육 후, 우리 조직에서<br/>이런 변화가 가능합니다.</h2>
            <p>무엇을 배우는지보다, 실제 업무에서 무엇을 할 수 있게 되는지를 먼저 보여드립니다.</p>
          </div>
          <div className="outcome-caption"><span>수료증보다 중요한 것</span><b>월요일 업무가 달라지는 교육</b></div>
          <div className="outcome-grid">
            {[
              ["01", "AI 업무 활용", "보고서·이메일·회의록·콘텐츠 제작에 생성형 AI를 바로 적용합니다."],
              ["02", "데이터 분석·자동화", "업무 데이터를 직접 분석하고 리포트와 반복 업무를 자동화합니다."],
              ["03", "AI 서비스 구현", "비개발자는 MVP, 개발자는 RAG·AI Agent 기반 PoC까지 구현합니다."],
              ["04", "조직 AX 설계", "관리자가 AI 적용 업무를 선정하고 팀 단위 전환 로드맵을 수립합니다."],
              ["05", "안전한 AI 활용", "보안·개인정보·저작권·검증 원칙을 조직의 AI 활용 기준으로 만듭니다."],
            ].map(([no, title, desc]) => (
              <article className="outcome-card" key={no}>
                <span>{no}</span><h3>{title}</h3><p>{desc}</p>
              </article>
            ))}
          </div>
          <div className="statement">배우는 것으로 끝나지 않고, <b>실제 업무에서 활용할 수 있도록.</b></div>
        </div>
      </section>

      <section className="section" id="eligibility">
        <div className="container">
          <div className="section-heading split-heading">
            <div><span className="kicker">PROGRAM OVERVIEW</span><h2>중소기업 인재키움<br/>프리미엄 훈련이란?</h2></div>
            <p>기업의 AI·디지털 역량 강화를 위해 훈련비를 지원하는 제도입니다. 복잡한 설명 대신 담당자가 가장 먼저 확인할 핵심 정보만 정리했습니다.</p>
          </div>
          <div className="benefit-grid">
            {benefits.map(([title, value], i) => <div className="benefit-card" key={title}><span>0{i+1}</span><small>{title}</small><strong>{value}</strong></div>)}
          </div>
          <div className="eligibility-panel">
            <div><span className="kicker light">ELIGIBILITY GUIDE</span><h3>우리 회사도 지원받을 수 있을까요?</h3><p>현재 페이지는 실시간 자격 조회를 제공하지 않습니다. 상담을 통해 지원 가능 여부와 적합한 승인 과정을 안내드립니다.</p></div>
            <div className="eligibility-form">
              <button className="button button-light" type="button" onClick={() => setIsEligibilityOpen(true)}>지원 가능 여부 확인하기</button>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-dark" id="why">
        <div className="container">
          <div className="section-heading centered inverse"><span className="kicker light">WHY PROGRAMMERS</span><h2>같은 정부지원 교육이라면,<br/>왜 프로그래머스일까요?</h2><p>정부지원 혜택은 같아도 교육의 깊이와 현업 적용 방식은 다를 수 있습니다.</p></div>
          <div className="why-grid">
            {[
              ["01", "⌘", "AI·개발 교육 전문성", "AI 기초 활용부터 실제 서비스 구현까지 기술 역량을 하나의 흐름으로 연결합니다."],
              ["02", "↗", "현업 적용 중심", "이론 설명보다 실제 업무 문서·데이터·프로세스를 활용한 실습 비중을 높였습니다."],
              ["03", "◎", "역할별 교육 체계", "전 직원, 실무자, 관리자, 개발자에게 필요한 AI 역량을 각각 다르게 설계했습니다."],
              ["04", "✦", "실습·워크숍·프로젝트", "과정 특성에 따라 실습, 로드맵 워크숍, MVP·PoC 프로젝트까지 직접 수행합니다."],
              ["05", "◌", "현업 전문 강사진", "AI와 개발 실무를 이해하는 강사진을 중심으로 실전형 교육을 운영합니다."],
              ["06", "▦", "기업교육 운영 경험", "다양한 기업의 기술교육을 운영하며 축적한 B2B 교육 노하우를 반영합니다."],
            ].map(([no,icon,title,desc]) => <article className="why-card" key={no}><div className="why-card-top"><span>{no}</span><i aria-hidden="true">{icon}</i></div><h3>{title}</h3><p>{desc}</p></article>)}
          </div>
          <div className="metrics">
            <div><strong>250+</strong><span>샘플 기업교육 진행</span></div>
            <div><strong>12,000+</strong><span>샘플 누적 수강생</span></div>
            <div><strong>4.8 / 5</strong><span>샘플 교육 만족도</span></div>
            <div><strong>92%</strong><span>샘플 현업 적용 응답</span></div>
          </div>
          <p className="sample-note">* 위 수치는 디자인 검토용 예시 데이터입니다.</p>
        </div>
      </section>

      <section className="section" id="courses">
        <div className="container">
          <div className="section-heading centered"><span className="kicker">LEARNING ROADMAP</span><h2>우리 조직은 지금<br/>어느 단계에 있나요?</h2><p>8개 과정을 단순히 나열하지 않고 조직의 AI 역량 성장 단계에 맞춰 연결했습니다.</p></div>
          <div className="step-line" role="tablist" aria-label="AI 교육 단계">
            {[["01", "AI 이해", "blue-border"], ["02", "업무 활용", "purple-border"], ["03", "조직 AX", "green-border"], ["04", "서비스 구현", "red-border"]].map(([step, label, color]) => (
              <button key={step} type="button" role="tab" aria-selected={activeStep === step} className={`step ${color} ${activeStep === step ? "is-active" : ""}`} onClick={() => setActiveStep(step)}><b>STEP {step}</b><span>{label}</span><small>{activeStep === step ? "과정 보기" : "선택"}</small></button>
            ))}
          </div>
          <div className="course-grid">
            {visibleCourses.map((c) => (
              <article className={`course-card ${c.tone}-card`} key={c.title}>
                <div className="course-meta"><span>{c.eyebrow}</span><b>STEP {c.step}</b></div>
                <h3>{c.title}</h3><p>{c.desc}</p>
                <div className="course-footer"><span>{c.audience}</span><strong>{c.hours}</strong></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container case-layout">
          <div className="section-heading"><span className="kicker purple-text">BUSINESS CASE</span><h2>기업교육은<br/>실제 변화로 증명됩니다.</h2><p>향후 기존 프로그래머스 기업교육 사례를 문제 → 교육 → 실습 → 변화의 구조로 배치할 영역입니다.</p><a className="text-link" href="#consult">기업교육 상담하기 →</a></div>
          <article className="case-card case-card-visual">
            <div className="case-image"><img src="sample-ai-workshop.png" alt="샘플 기업교육 워크숍 현장" /></div>
            <div className="case-content">
              <div className="case-company"><span>SAMPLE CASE · A사</span><strong>데이터 기반 업무 혁신</strong></div>
              <div className="case-results"><span><b>36%</b>보고서 작성 시간 단축</span><span><b>4.8/5</b>교육 만족도</span><span><b>92%</b>현업 적용 의향</span></div>
              <ol>
                <li><b>Problem</b><p>반복적인 데이터 취합과 리포트 작성에 많은 시간이 소요</p></li>
                <li><b>Education</b><p>Python + AI 기반 데이터 분석·업무자동화 교육</p></li>
                <li><b>Result</b><p>반복 업무 자동화와 직원의 AI 활용 역량 강화</p></li>
              </ol>
              <small className="sample-note">* 기업명·이미지·성과 수치는 디자인 검토용 예시입니다.</small>
            </div>
          </article>
        </div>
      </section>

      <section className="section recommendation">
        <div className="container recommendation-grid">
          <div><span className="kicker light">COURSE MATCHING</span><h2>우리 조직에 맞는 교육을<br/>추천해드립니다.</h2><p>같은 AI 교육이 모든 구성원에게 필요한 것은 아닙니다. 직급 × 직무 × 현재 AI 활용 수준 × 교육 목표를 기준으로 8개 승인 과정 중 적합한 조합을 제안합니다.</p><a className="button button-light" href="#consult">우리 조직에 맞는 교육 추천받기</a></div>
          <div className="match-list">
            <div><span>전 직원 AI 활용 기반</span><b>역량진단 → AI 리터러시</b></div>
            <div><span>실무 생산성 향상</span><b>문서 자동화 → 데이터 자동화</b></div>
            <div><span>조직 차원의 AX</span><b>관리자 AI 리더십</b></div>
            <div><span>AI 서비스 구축</span><b>바이브코딩 → 개발자 AI 구현</b></div>
          </div>
        </div>
      </section>

      <section className="section process-section">
        <div className="container">
          <div className="section-heading centered"><span className="kicker">PROCESS</span><h2>상담부터 교육, 행정까지<br/>복잡하지 않게.</h2></div>
          <div className="process-grid">
            {[["01","☏","교육 상담","기업 목표와 교육 대상 확인"],["02","↗","과정 확정","8개 승인 과정 중 적합한 과정 선택"],["03","✦","교육 진행","집체 또는 비대면 실시간 교육 운영"],["04","✓","행정 · 환급","필요 절차와 환급 관련 안내 지원"]].map(([no,icon,title,desc]) => <div className="process-card" key={no}><span>{no}</span><i aria-hidden="true">{icon}</i><h3>{title}</h3><p>{desc}</p></div>)}
          </div>
        </div>
      </section>

      <section className="section resources section-soft">
        <div className="container resource-grid">
          <div className="section-heading"><span className="kicker">DOWNLOAD</span><h2>내부 검토에 필요한 자료를<br/>한 번에 확인하세요.</h2></div>
          <div className="resource-list">
            {['8개 승인 교육과정 한눈에 보기','중소기업 인재키움 사업 안내서','프로그래머스 기업교육 소개서'].map((x)=><a href="#consult" key={x}><span>준비 중</span><b>{x}</b><i>→</i></a>)}
          </div>
        </div>
      </section>

      <section className="section" id="faq">
        <div className="container faq-layout">
          <div className="section-heading"><span className="kicker">FAQ</span><h2>자주 묻는 질문</h2><p>지원 자격부터 과정 선택, 운영 방식까지 자주 묻는 내용을 정리했습니다.</p></div>
          <div className="faq-list">
            {faq.map(([q,a]) => <details key={q}><summary>{q}<span>＋</span></summary><p>{a}</p></details>)}
          </div>
        </div>
      </section>

      <section className="final-cta" id="consult">
        <div className="container final-inner">
          <span className="kicker light">START WITH PROGRAMMERS</span>
          <h2>우리 조직에는<br/>어떤 AI 교육이 필요할까요?</h2>
          <p>전 직원부터 실무자, 관리자, 개발자까지. 조직의 역할과 목표에 맞는 승인 교육과정을 추천해드립니다.</p>
          <div className="hero-actions centered-actions"><a className="button button-light" href="mailto:b2b@programmers.co.kr">우리 조직에 맞는 AI 교육 추천받기</a><a className="button button-ghost" href="#courses">8개 승인 교육과정 보기</a></div>
        </div>
      </section>

      <footer><div className="container footer-inner"><div className="brand"><span className="brand-mark">P</span><span>programmers <b>business</b></span></div><p>© Grepp, Inc. Landing page prototype for B2B training.</p></div></footer>
      {isEligibilityOpen && (
        <div className="modal-backdrop" role="presentation" onMouseDown={() => setIsEligibilityOpen(false)}>
          <section className="eligibility-modal" role="dialog" aria-modal="true" aria-labelledby="eligibility-title" onMouseDown={(event) => event.stopPropagation()}>
            <button className="modal-close" type="button" aria-label="지원 가능 여부 확인 창 닫기" onClick={() => setIsEligibilityOpen(false)}>×</button>
            <span className="kicker">SUPPORT ESTIMATOR</span>
            <h2 id="eligibility-title">우리 회사의 예상 지원 범위를<br/>빠르게 확인해보세요.</h2>
            <p>교육 인원과 대표 과정을 기준으로 산출한 샘플 결과입니다. 실제 지원 가능 여부와 금액은 상담으로 확인됩니다.</p>
            <label className="field-label">예상 교육 인원
              <select value={participants} onChange={(event) => setParticipants(event.target.value)}>
                <option value="10">10명</option><option value="20">20명</option><option value="30">30명</option><option value="50">50명</option>
              </select>
            </label>
            <div className="estimator-result"><span>AI 업무 기초 활용 7H 기준</span><strong>최대 {estimatedSupport.toLocaleString("ko-KR")}원 지원 예상</strong><small>예상 총 훈련비 {estimatedCost.toLocaleString("ko-KR")}원 · 최대 95% 적용 가정</small></div>
            <a className="button" href="mailto:b2b@programmers.co.kr">상담으로 정확한 지원금 확인하기</a>
          </section>
        </div>
      )}
    </main>
  );
}
