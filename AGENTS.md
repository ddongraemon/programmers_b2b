# AGENTS.md

## 1. Project purpose

This repository contains a prototype B2B landing page for **Programmers (프로그래머스)** focused on the Korean government-supported training program **중소기업 인재키움 프리미엄 훈련**.

The goal is not to build a generic corporate training page. The landing page should help an HR/L&D decision-maker quickly understand:

1. what the government support is,
2. whether their company may be eligible,
3. what employees will be able to do after training,
4. why Programmers is a strong provider for AI/developer education,
5. which of the approved training courses fit their organization,
6. how to apply and handle the administrative/refund process,
7. how to contact Programmers.

The strategic positioning is:

> Do not stop at “up to 95% supported training.”
> Show “what employees and the organization will actually be able to do with that support.”

A concise positioning statement:

> **정부지원을 활용해 실제 업무 역량을 만드는 AI·기술교육**

---

## 2. Important business constraint: approved courses

The original course list had 10 courses, but only **8 courses are approved for this program**.

Do **NOT** present PCSQL or PCCE as approved program courses.

Excluded from this landing page’s approved-course scope:

- PCSQL
- PCCE

Approved course scope currently used in this project:

1. **전 직원 AI 역량진단·학습**
2. **AI 리터러시와 보안·거버넌스**
3. **신입·주니어 AI 업무 기초 활용**
4. **AI 콘텐츠 제작과 비즈니스 문서 자동화**
5. **AI 데이터 분석과 업무 자동화**
6. **팀장·관리자를 위한 AI 리더십과 업무혁신**
7. **바이브코딩으로 만드는 AI 웹서비스**
8. **개발자·IT 담당자를 위한 AI 서비스 설계·구현**

The landing page should treat these 8 approved offerings as one coherent **organizational AI capability roadmap**, rather than an unstructured catalog.

Preferred grouping:

### Stage 1 — AI 이해 / 기초·전사 역량
- 전 직원 AI 역량진단·학습
- AI 리터러시와 보안·거버넌스
- 신입·주니어 AI 업무 기초 활용

### Stage 2 — 업무 활용 / 생산성·자동화
- AI 콘텐츠 제작과 비즈니스 문서 자동화
- AI 데이터 분석과 업무 자동화

### Stage 3 — 조직 AX / 리더십
- 팀장·관리자를 위한 AI 리더십과 업무혁신

### Stage 4 — AI 서비스 구현
- 바이브코딩으로 만드는 AI 웹서비스
- 개발자·IT 담당자를 위한 AI 서비스 설계·구현

Preferred visual narrative:

```text
AI 이해
  ↓
업무 활용
  ↓
조직 AX
  ↓
AI 서비스 구현
```

Avoid presenting the approved courses as broad generic categories such as:

- AI
- Data
- Development

because that can imply that non-approved tracks such as Frontend, Backend, Cloud, DevOps, PCSQL, or PCCE are part of this specific government-supported landing page.

---

## 3. Competitive landing-page analysis already completed

The following competitors were reviewed:

- 휴넷
- IGM
- 에이블런
- 인프런
- 멀티캠퍼스
- 솔데스크
- 한국생산성본부(KPC)

They can broadly be grouped into four landing-page types:

### A. 제도·환급 안내형
Representative companies:
- 솔데스크
- 한국생산성본부

Primary question answered:
> “우리 회사도 지원받을 수 있나?”

Strengths:
- eligibility
- support rate
- limits
- application/refund procedures

### B. 과정 탐색형
Representative companies:
- IGM
- 멀티캠퍼스

Primary question answered:
> “어떤 교육을 받을 수 있나?”

Strengths:
- course catalog
- categories
- role/level-based curation

### C. 컨설팅·솔루션형
Representative companies:
- 에이블런
- 휴넷

Primary question answered:
> “우리 회사에는 어떤 교육이 필요한가?”

Strengths:
- consultation
- roadmap
- tailored recommendations
- proof and trust elements

### D. 성과·전환형
Representative company:
- 인프런

Primary question answered:
> “교육 후 직원이 무엇을 할 수 있게 되나?”

Strengths:
- tangible outputs
- practical results
- immediate conversion CTA

### Strategic recommendation derived from competitor analysis

The Programmers page should combine:

- **인프런의 성과형 구조**
- **에이블런의 B2B 상담/신뢰 구조**
- **프로그래머스의 AI·개발 교육 전문성**

Government support itself is not a differentiator because almost all competitors emphasize similar support benefits.

Core differentiation should come from:

1. education outcomes / work outputs,
2. actual corporate training cases,
3. measurable proof / trust,
4. Programmers’ AI/developer education expertise,
5. a clear organization-level AI growth roadmap.

---

## 4. Common competitor landing-page structure

Nearly all competitors use some variation of:

```text
정부지원 혜택
    ↓
지원조건 / 지원대상
    ↓
교육과정
    ↓
신청 / 환급 절차
    ↓
FAQ
    ↓
상담 / 신청 CTA
```

This is considered **table stakes**, not differentiation.

Differentiation opportunities identified:

- 교육 후 결과물 / 현업 성과
- 실제 기업 사례 / 수강 후기
- 정량 신뢰지표
- 맞춤형 과정 추천
- 지원 가능 여부를 빠르게 확인하는 UX

---

## 5. Final landing-page information architecture

The current preferred structure has **13 sections**.

### 01. HERO
Purpose:
- immediately communicate the support benefit and Programmers’ core value

Preferred direction:

> 전 직원부터 개발자까지,
> 우리 조직에 필요한 AI 역량을 키우세요.
>
> 중소기업 인재키움 프리미엄 훈련으로
> **교육비 최대 95% 지원**

Sub-message direction:

> AI 기초부터 업무 활용·자동화,
> AI 서비스 구현까지
> **프로그래머스의 8개 승인 과정으로 조직 AI 역량을 단계별로 강화**

Primary CTA:
- 우리 회사 지원 가능 여부 확인

Secondary CTA:
- 8개 교육과정 보기

Do not make the Hero only about “95% support.” It must also communicate why this training matters.

---

### 02. 교육 후 무엇이 달라지는가
This is a **key differentiation section**.

The page should show outcomes before going deep into the course catalog.

Outcome themes should cover the full approved-course scope, not only development outputs.

Suggested outcome cards:

#### AI 업무 활용
Examples:
- 보고서 작성
- 이메일
- 회의록
- 콘텐츠 제작
- 반복 업무에서 생성형 AI 활용

#### 데이터 분석·자동화
Examples:
- 업무 데이터 분석
- 리포트 자동화
- 반복 업무 자동화

#### AI 서비스 제작
Examples:
- 비개발자의 바이브코딩 기반 MVP
- AI 웹서비스
- 개발자의 RAG / Agent / PoC 구현

#### 조직 AX
Examples:
- AI 적용 업무 선정
- 팀 단위 AI 전환 로드맵 수립

#### AI 보안·거버넌스
Examples:
- 보안
- 개인정보
- 저작권
- 사내 AI 활용 원칙

Core message:

> **배우는 것으로 끝나지 않고, 실제 업무에서 활용할 수 있도록.**

---

### 03. 중소기업 인재키움 프리미엄 훈련이란?
Keep this concise.

Recommended 4-card summary:

- 지원대상
- 지원율
- 지원한도
- 교육방식

The page should not feel like a long government policy document.

Use only confirmed program details.

Do not invent eligibility thresholds, exact limits, administrative conditions, or support percentages beyond confirmed source material.

---

### 04. 우리 회사도 지원받을 수 있나요?
Purpose:
- remove uncertainty early

Ideal UX:
- business registration number lookup if technically/legally available
- otherwise a simple eligibility checklist
- otherwise a consultation CTA

CTA direction:

> 우리 회사 지원 가능 여부 확인하기

Do not fake a real eligibility lookup if no backend/API exists. A prototype must clearly behave as a demo or consultation entry point.

---

### 05. 왜 프로그래머스인가?
This section must answer:

> “같은 정부지원 사업인데 왜 프로그래머스인가?”

Preferred proof pillars:

1. AI·개발 교육 전문성
2. 현업 적용 중심 커리큘럼
3. 전 직원 → 실무자 → 관리자 → 개발자로 이어지는 역할별 교육 체계
4. 실습·워크숍·프로젝트 중심 학습
5. 현업 전문 강사진
6. 기업교육 운영 경험

Important nuance:
- Do not describe every approved course as “project-based.”
- Some courses are diagnosis, literacy, leadership, workshop, governance, or application-plan oriented.

Preferred message:

> 프로그래머스는 단순히 AI 강의를 제공하는 것이 아니라
> **조직 구성원의 역할에 따라 필요한 AI 역량을 연결합니다.**

---

### 06. 숫자로 보는 프로그래머스
Purpose:
- establish trust quickly

Use only verified B2B-relevant metrics if provided later.

Preferred metrics:
- 기업교육 고객사 수
- 누적 기업교육 수강생
- AI/개발 교육 수강생
- 교육 만족도
- 재계약률
- 전문 강사진 수

Current implementation may contain placeholders.

**Never convert placeholders into factual claims without confirmed data.**

Prefer 3–5 strong numbers over many weak numbers.

---

### 07. 우리 조직에 필요한 AI 교육 찾기
This is one of the most important sections.

Do not use generic `AI / Data / Development` top-level taxonomy.

Use the organization’s capability stage instead:

```text
STEP 01 AI를 처음 시작한다면
        ↓
STEP 02 내 업무에 AI를 활용하고 싶다면
        ↓
STEP 03 팀·조직의 AI 전환이 필요하다면
        ↓
STEP 04 AI 서비스까지 직접 만들고 싶다면
```

Map the 8 approved courses to these stages.

The objective is to make 8 courses look like a coherent **AI capability growth system**, not a list of isolated products.

---

### 08. 실제 기업교육 사례
This is a differentiation section.

Preferred case-study structure:

```text
기업의 문제
    ↓
프로그래머스 교육
    ↓
실습 / 프로젝트
    ↓
실제 업무 변화
```

Ideal presentation:
- 3 representative company cases
- logo if permission exists
- concise problem / education / result

Important constraint:
- The approved 8 courses were treated as new approved offerings in the previous planning context.
- Do **not** imply that those exact new approved course titles already have client case histories unless verified.

Safer labels:

> 프로그래머스와 함께한 기업교육 사례

or

> 기업의 AI·디지털 역량을 이렇게 높였습니다

Use existing Programmers corporate-training cases only when verified.

---

### 09. 우리 조직에 맞는 교육을 추천해드립니다
Earlier draft used “기업 맞춤 교육,” but the preferred wording is now **course recommendation within the approved portfolio**.

Reason:
- avoid implying that the approved government-subsidized curriculum can be freely modified per client

Preferred logic:

```text
직급 × 직무 × 현재 AI 활용 수준 × 교육 목표
                     ↓
       적합한 승인 과정 추천
```

Examples:

#### 전 직원 AI 기반 구축
- AI 역량진단
- AI 리터러시

#### 실무자 생산성 향상
- AI 문서 자동화
- AI 데이터 분석·업무 자동화

#### 조직 AX
- 관리자 AI 리더십

#### AI 서비스 구현
- 바이브코딩
- 개발자 AI 서비스 설계·구현

Primary CTA:

> 우리 조직에 맞는 교육 추천받기

---

### 10. 신청 및 환급 절차
Keep the flow visually simple.

Preferred prototype flow:

```text
01 교육 상담
   ↓
02 교육과정 확정
   ↓
03 교육 진행
   ↓
04 행정·환급
```

Preferred message direction:

> 복잡한 신청·행정 절차도 프로그래머스가 함께 지원합니다.

However, only make specific claims about “refund application agency,” “full administrative handling,” etc. if the actual operational scope is confirmed.

---

### 11. 자료 다운로드
Purpose:
- provide a conversion path for users who are not ready to contact sales immediately

Potential assets:

- 8개 승인 교육과정 한눈에 보기
- 중소기업 인재키움 사업 안내서
- 프로그래머스 기업교육 소개서

Current prototype can use placeholders if files are not available.

Do not make dead buttons appear as real downloads without clear placeholder behavior.

---

### 12. FAQ
Recommended categories:

#### 지원 관련
- 어떤 기업이 지원 대상인가요?
- 최대 얼마까지 지원받을 수 있나요?
- 교육 인원 제한이 있나요?

#### 교육 관련
- 온라인 교육도 가능한가요?
- 오프라인 교육도 가능한가요?
- 어떤 직원에게 어떤 과정이 적합한가요?
- 개발자가 아니어도 들을 수 있나요?

#### 신청 관련
- 신청은 어떻게 진행되나요?
- 환급 절차는 어떻게 진행되나요?

Use verified program details only.

---

### 13. Final CTA
Final CTA should focus on one primary action.

Preferred copy direction:

> 우리 조직에는 어떤 AI 교육이 필요할까요?
>
> 전 직원부터 실무자, 관리자, 개발자까지
> 조직의 역할과 목표에 맞는 교육과정을 추천해드립니다.

Primary CTA:

> **우리 조직에 맞는 AI 교육 추천받기**

Secondary options:
- 8개 승인 교육과정 보기
- 프로그래머스 기업교육 전체 보기

---

## 6. Recommended user journey

The desired decision flow is:

```text
최대 95% 지원
“비용 부담이 줄어드네.”
        ↓
교육 후 변화
“직원들이 실제로 이런 일을 할 수 있겠네.”
        ↓
지원 가능 여부
“우리 회사도 대상인가?”
        ↓
Why Programmers
“기술교육은 여기서 잘하겠네.”
        ↓
8개 과정 로드맵
“우리 조직에는 이 과정이 맞겠네.”
        ↓
기업교육 사례
“다른 회사에서도 실제로 진행했구나.”
        ↓
과정 추천 / 상담
“우리 회사 기준으로 한번 물어보자.”
        ↓
상담 신청
```

---

## 7. Design direction

Overall visual direction:

- white base
- Programmers-like blue / purple accents
- dark navy/charcoal body text
- modern B2B SaaS / tech landing-page feel
- generous whitespace
- strong hierarchy
- cards for compact information
- avoid the visual feel of a dense government-policy microsite

Desired qualities:

- credible for HR/L&D decision-makers
- modern enough to feel like a tech education company
- practical rather than decorative
- conversion-oriented
- mobile responsive

Suggested visual hierarchy:

- HERO: strongest contrast / clear CTA
- outcome section: visually strong and concrete
- roadmap: should feel like a connected progression
- trust / proof sections: clean, restrained
- admin/refund section: reassuring and easy to scan

Do not overuse gradients, excessive neon colors, or playful consumer-style visuals.

The project should feel like **Programmers B2B**, not a generic AI startup template.

---

## 8. Current implementation status

Repository:

`ddongraemon/programmers_b2b`

Current stack:

- Next.js 15
- React 19
- TypeScript
- App Router
- CSS in `app/globals.css`
- no required external UI library in the initial prototype

Important files:

```text
app/
  page.tsx       # landing page content / sections
  globals.css    # styling
  layout.tsx
next.config.mjs
package.json
.github/workflows/deploy-pages.yml
```

The prototype currently includes most/all of the planned landing sections, responsive behavior, FAQ interactions, CTA blocks, and the approved-course roadmap.

Before redesigning from scratch, inspect the existing implementation and reuse/refactor what is useful.

---

## 9. GitHub Pages deployment context

GitHub Pages was enabled for the repository during the previous work.

Expected URL:

`https://ddongraemon.github.io/programmers_b2b/`

Next.js was configured for static export for Pages.

Relevant intent in `next.config.mjs`:

- `output: "export"`
- repository base path when running in GitHub Actions
- trailing slash
- unoptimized images for static export compatibility

A GitHub Actions workflow exists at:

`.github/workflows/deploy-pages.yml`

Known deployment history:

### First failure
The Actions workflow used npm caching via `actions/setup-node`, but the repository did not have `package-lock.json`.

Error was effectively:

> Dependencies lock file is not found ... supported patterns include package-lock.json / npm-shrinkwrap.json / yarn.lock

This was addressed by:

- removing `cache: npm`
- using `npm install`
- moving to Node 22
- updating checkout/setup-node actions

### Later state
Another GitHub Actions failure occurred after that, but its exact root cause was not fully captured in the ChatGPT-connected environment.

The workflow was modified to include diagnostic issue creation on failure.

**Codex should not assume the current deployment is healthy.**

First deployment task should be:

1. inspect current workflow,
2. run the project locally,
3. run `npm install`,
4. run `npm run build`,
5. verify that `out/` is generated,
6. inspect GitHub Actions if available,
7. simplify/fix the Pages workflow as needed,
8. deploy successfully,
9. verify the public URL in a browser.

If Codex has terminal + GitHub CLI access, use it to iterate automatically until deployment succeeds.

---

## 10. Recommended local verification commands

From repository root:

```bash
npm install
npm run dev
```

Local development URL:

```text
http://localhost:3000
```

Before deployment:

```bash
npm run build
```

Expected result:

- build completes without error
- static export directory `out/` exists

If dependency state is messy, inspect before deleting or regenerating lock files.

A lock file may be added if appropriate, but do not blindly change package-manager strategy without checking the current repo.

---

## 11. Content accuracy / placeholder rules

This is important.

The prototype may currently contain placeholder values for:

- number of enterprise customers
- cumulative learners
- satisfaction rate
- instructors
- customer logos
- case-study outcomes
- downloadable PDFs
- consultation links
- actual eligibility-check API

Rules:

1. **Do not invent metrics.**
2. **Do not invent client case studies.**
3. **Do not imply a fake eligibility API is real.**
4. **Do not imply a placeholder download button downloads a real document.**
5. **Do not imply exact approved new courses already have operating history unless verified.**
6. Keep placeholders visibly replaceable in code/data.

Prefer central data constants / typed arrays instead of scattering hard-coded values through JSX.

---

## 12. UX priorities

When improving the current page, prioritize in this order:

1. HERO clarity
2. education outcomes
3. approved 8-course roadmap
4. Why Programmers
5. real corporate-training proof/cases
6. course recommendation CTA
7. support eligibility information
8. application/refund flow
9. FAQ
10. final CTA

The page should not become a giant course catalog.

The central story is:

> **정부지원 → 업무 변화 → 조직에 맞는 AI 역량 단계 → 프로그래머스 신뢰 → 상담 전환**

---

## 13. Preferred implementation direction

Refactor toward reusable components if helpful, for example:

```text
components/
  HeroSection.tsx
  OutcomesSection.tsx
  ProgramOverview.tsx
  EligibilitySection.tsx
  WhyProgrammers.tsx
  ProofMetrics.tsx
  CourseRoadmap.tsx
  CaseStudies.tsx
  CourseRecommendation.tsx
  ProcessSection.tsx
  DownloadsSection.tsx
  FAQSection.tsx
  FinalCTA.tsx

data/
  courses.ts
  faq.ts
  caseStudies.ts
```

This is a recommendation, not a requirement.

Keep the project simple enough to maintain.

Avoid unnecessary dependencies unless they materially improve UX.

---

## 14. Current immediate tasks for Codex

When taking over this repository, do the following before asking the user for more information unless genuinely blocked:

### Priority 1 — make the project healthy
- inspect the current codebase
- run local install/build
- fix TypeScript/Next.js/runtime/static-export issues

### Priority 2 — complete GitHub Pages deployment
- inspect `.github/workflows/deploy-pages.yml`
- verify Pages settings and basePath behavior
- fix CI
- deploy
- verify public URL

### Priority 3 — visual QA
- open the page in browser
- check desktop/mobile layouts
- fix overflow, spacing, typography, buttons, cards, accordion behavior

### Priority 4 — improve design fidelity
- make it feel closer to a high-quality Programmers B2B tech landing page
- improve HERO
- improve roadmap visualization
- improve hierarchy and CTA clarity

### Priority 5 — prepare content replacement points
Make it easy to replace:
- real company metrics
- real case studies
- PDF URLs
- consultation URL
- eligibility-check integration

---

## 15. Do not do these things without explicit confirmation

- Do not add PCSQL or PCCE as approved courses.
- Do not broaden this program page into all Programmers courses.
- Do not claim Frontend/Backend/Cloud/DevOps are approved under this specific landing page unless new approval data is provided.
- Do not fabricate support-program details.
- Do not fabricate corporate metrics or clients.
- Do not represent placeholder UI as a real eligibility checker.
- Do not radically replace the landing strategy with a generic template without first inspecting the existing implementation.

---

## 16. One-line strategic summary

> **경쟁사가 “얼마나 지원받을 수 있는가”를 이야기한다면, 프로그래머스는 “지원받아 직원이 무엇을 할 수 있게 되는가”까지 보여준다.**

That is the core principle for both content and design decisions in this project.
