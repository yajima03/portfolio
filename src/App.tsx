export default function PortfolioSite() {
  const skillGroups = {
    Languages: ['Python', 'C', 'C++', 'R', 'MATLAB', 'JavaScript', 'TypeScript'],
    WebFrontend: ['React', 'HTML', 'CSS'],
    Backend: ['Django'],
    Infra: ['Docker', 'AWS EC2', 'Nginx', 'Gunicorn', 'MySQL'],
    Tools: ['GitHub', 'Notion', 'Vercel'],
  };
    
  const links = {
    portfolio: 'https://portfolio-yajima03s-projects.vercel.app/',
    github: 'https://github.com/yajima03',
    portfolioRepo: 'https://github.com/yajima03/portfolio',
    resumePdf: '/files/self-introduction.pdf',
    aiTanEvent: 'https://hacku.yahoo.co.jp/dendai2024/',
    aiTanRepo: 'https://github.com/mintBomber/hacku2024-tech3-AItan',
    paperJSAI: 'https://www.jstage.jst.go.jp/article/pjsai/JSAI2025/0/JSAI2025_3Win508/_article/-char/ja/',
    paperISAROB: 'https://drive.google.com/file/d/1uDP9kgA4nzHxR8i8E-LYIxsj555ZQwVN/view?usp=sharing',
    email: 'mailto:momoka.yajima0113@gmail.com',
  };

  const experiences = [
    {
      title: '株式会社モルフォ 夏期有償インターン',
      period: '3週間',
      description:
        'DL推論エンジン「SoftNeuro®」を対象に推論高速化を実装。大規模コードの読解・デバッグ力を強化し、推論速度という実務上の重要指標に向き合いました。',
    },
    {
      title: '富士通Japan株式会社 インターン',
      period: '1ヶ月',
      description:
        'オンプレ / クラウド環境におけるITインフラ基盤の提供を体験。提案書作成、プレゼンテーション、構築、技術調査に取り組みました。',
    },
    {
      title: '本田技研工業株式会社 インターン',
      period: '1週間',
      description:
        'マイクロモビリティシステムに関する研究開発に触れ、技術応用の現場を学びました。',
    },
    {
      title: '研究室ITインフラ保守運用',
      period: '継続中',
      description:
        '研究室の計算機サーバやネットワーク等のITインフラ管理に携わっています。',
    },
    {
      title: '研究室運営',
      period: '継続中',
      description:
        '研究分科会の運営、勉強会の主催などを通して、研究室内の学習環境づくりに取り組んでいます。',
    },
  ];

  const projects = [
    {
      title: 'ハッカソン：AI単',
      period: 'Hack U 東京電機大学 2024 / 2週間',
      summary:
        '大学生の英語学習を支援するアプリです。専門分野に沿った単語学習を支援することを目指し、チームで開発し最優秀賞を獲得しました。',
      role:
        '2つの機能で設計から実装まで担当しました。加えて、各メンバーが実装した機能の統合と結合テストを担当し、データ受け渡しやイベント連携の整合性を確認することで、全体が一貫して動作するよう調整しました。',
      tech: ['Python', 'Streamlit', 'JavaScript', 'ChatGPT API', '形態素解析'],
      highlights: [
        'ChatGPTを用いた単語の意味検索',
        '単語テスト',
        '学習状況 / 検索傾向の可視化',
        '英語論文からの頻出英単語抽出',
      ],
      url: links.aiTanEvent,
      repo: links.aiTanRepo,
    },
    {
      title: '研究補助アルバイト：認知実験用Webサイト',
      period: '約1年〜',
      summary:
        '所属研究室の教授の研究補助アルバイトです。被験者を集め、人間の強化学習的意思決定を見るための認知実験を実施するためのWebサイトを構築し、実運用まで担当しました。こちらは、自分の強化学習の知見を広げたいと思い始めました。',
      role:
        'Webサイト構築、サーバ関連対応、機能追加、負荷テスト、被験者募集を伴う実験運用を担当。',
      tech: ['Django', 'AWS EC2', 'Gunicorn', 'Nginx', 'HTML', 'CSS', 'JavaScript', 'jsPsych', 'Locust'],
      highlights: [
        'CrowdWorksで被験者を集めた実験運用',
        'サーバ関連対応',
        '機能追加',
        '負荷テスト',
      ],
      url: '',
      repo: '',
    },
    {
      title: 'ポートフォリオサイト',
      period: '個人制作',
      summary:
        '就活用に、自分の研究・開発経験・実績を分かりやすく整理して見せるために作成したサイトです。',
      role:
        '設計、実装、デプロイまで一人で担当。',
      tech: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Vercel', 'GitHub'],
      highlights: [
        '研究・開発経験の構造化',
        '公開URLでの共有',
        'GitHub連携による更新',
      ],
      url: links.portfolio,
      repo: links.portfolioRepo,
    },
  ];
  
  const publications = [
    {
      title: '2025年 人工知能学会全国大会 ポスター発表',
      type: 'Poster',
      url: links.paperJSAI,
    },
    {
      title: '2026年 International Symposium on Artificial Life and Robotics 口頭発表',
      type: 'Oral',
      url: links.paperISAROB,
    },
  ];
  
  const certifications = [
    '基本情報技術者試験 合格',
    '応用情報技術者試験 合格',
    '統計検定2級 合格',
    '実用英語技能検定2級',
  ];
  
  const longTermJobs = [
    '大学授業の Teaching Assistant',
    '研究補助（所属研究室教授）',
    '飲食店',
    '温泉施設',
  ];
  
  const shortTermJobs = [
    '試験監督',
    'イベント運営',
    '物流',
  ];



  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div>
            <p className="text-sm tracking-[0.2em] text-slate-500">PORTFOLIO</p>
            <h1 className="text-lg font-semibold">Yajima Momoka</h1>
          </div>
          <nav className="hidden gap-6 text-sm md:flex">
            <a href="#about" className="hover:text-slate-950"> About </a>
            <a href="#research" className="hover:text-slate-950"> Research </a>
            <a href="#publications" className="hover:text-slate-950"> Publications </a>
            <a href="#projects" className="hover:text-slate-950"> Projects </a>
            <a href="#experience" className="hover:text-slate-950"> Experience </a>
            <a href="#skills" className="hover:text-slate-950"> Skills </a>
            <a href="#links" className="hover:text-slate-950"> Links </a>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-6 py-10 md:py-14">
        <section className="grid gap-8 md:grid-cols-[1.15fr_0.85fr] md:items-center">
          <div className="space-y-6">
            <p className="inline-flex rounded-full border border-orange-200 bg-orange-50 px-4 py-1 text-sm text-orange-700">
              Reinforcement Learning / Security / Infrastructure
            </p>
            <div className="space-y-4">
              <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
                矢島 百華
              </h2>
              <p className="text-lg text-slate-600">
                東京電機大学大学院 理工学研究科 情報学専攻 修士課程 1年
              </p>
              <p className="max-w-2xl text-base leading-7 text-slate-700">
                強化学習、とくに運動制御分野における探索の効率化を研究しています。
                研究だけでなく、Webアプリ開発、研究室のITインフラ運用、インターンでの実装経験を通して、
                「当たり前を支え、よりよく変えられるエンジニア」を目指しています。
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a href="#projects"
                className="rounded-2xl bg-slate-900 px-5 py-3 text-sm font-medium text-white shadow-sm transition hover:-translate-y-0.5"
              >
                制作物を見る
              </a>
              <a href="#research"
                className="rounded-2xl border border-slate-300 bg-white px-5 py-3 text-sm font-medium text-slate-800 transition hover:-translate-y-0.5"
              >
                研究を見る
              </a>
              <a href={links.github}
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl border border-slate-300 bg-white px-5 py-3 text-sm font-medium text-slate-800 transition hover:-translate-y-0.5"
              >
                GitHub
              </a>
            </div>
          </div>

          <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl bg-slate-100 p-4">
                <p className="text-sm text-slate-500">研究</p>
                <p className="mt-2 text-lg font-semibold">強化学習</p>
              </div>
              <div className="rounded-2xl bg-slate-100 p-4">
                <p className="text-sm text-slate-500">興味・関心</p>
                <p className="mt-2 text-lg font-semibold">
                  機械学習 / ITインフラ / セキュリティ
                </p>
              </div>
              <div className="rounded-2xl bg-slate-100 p-4 sm:col-span-2">
                <p className="text-sm text-slate-500">キーワード</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {[
                    '強化学習',
                    '探索効率化',
                    'Web開発',
                    '研究支援',
                    'インフラ運用',
                    '学習支援アプリ',
                  ].map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-white px-3 py-1 text-sm text-slate-700 shadow-sm"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="mt-16 grid items-start gap-6 md:grid-cols-3">
          <div className="rounded-[24px] border border-slate-200 bg-white p-6 shadow-sm md:col-span-2">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-orange-600">
              About
            </p>
            <h3 className="mt-3 text-2xl font-semibold">プロフィール</h3>
            <p className="mt-4 leading-7 text-slate-700">
              学部生から大学院の現在まで、強化学習の探索をいかに効率化するかを主題に研究しています。
              研究活動に加えて、Webサイトの構築、オンプレミス・クラウドサーバ運用、英語学習支援Webアプリのチーム開発、インターンなど
              理論と実装の両面から経験を積んできました。
            </p>

            <div className="mt-6 space-y-4">
              <div>
                <p className="text-sm font-semibold text-slate-800">強み</p>
                <p className="mt-2 leading-7 text-slate-700">
                  強みは自走力です。常に「今、何を学ぶべきか」を自ら定義して、資格取得や研究、Webの開発まで主体的に取り組んできました。
                </p>
              </div>

              <div>
                <p className="text-sm font-semibold text-slate-800">弱み</p>
                <p className="mt-2 leading-7 text-slate-700">
                  弱みは緊張しやすいところです。ただ、その分だけ準備を丁寧に行う習慣があり、事前整理と確認を重ねることで本番でも力を発揮できるよう改善しています。
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-[24px] border border-slate-200 bg-white p-6 shadow-sm self-start">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-orange-600">
              Interests
            </p>

            <div className="mt-4">
              <p className="text-sm font-semibold text-slate-800">技術的な関心</p>
              <ul className="mt-3 space-y-2 text-slate-700">
                <li>・機械学習</li>
                <li>・ITインフラ</li>
                <li>・セキュリティ</li>
              </ul>
            </div>

            <div className="mt-6">
              <p className="text-sm font-semibold text-slate-800">趣味・日常</p>
              <ul className="mt-3 space-y-2 text-slate-700">
                <li>・音楽 / フェス・ライブ</li>
                <li>・散歩</li>
                <li>・ラジオ体操</li>
                <li>・カービィ</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="research" className="mt-16 rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm md:p-8">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-orange-600"> Research </p>
          <h3 className="mt-3 text-2xl font-semibold">研究概要</h3>

          <p className="mt-4 leading-7 text-slate-700">
            強化学習は、エージェントが環境との相互作用を通じて試行錯誤を重ね、長期的な利益を最大化する方策を学習する枠組みです。
            私はその中でも、学習に必要なデータをどのように集めるかという「探索」に着目し、
            特に探索が難しい運動制御タスクにおいて、いかに効率的に学習を進められるかをテーマに研究しています。
          </p>

          <p className="mt-4 leading-7 text-slate-700">
            運動制御では、どれくらいの力を加えるかといった連続的な空間を扱うことが多く、探索の効率が性能に大きく影響します。
            そのため私は、新規アルゴリズムの提案と、既存手法の探索特性の分析という二つの方向から研究に取り組んでいます。
          </p>

          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl bg-slate-50 p-5">
              <h4 className="text-lg font-semibold">
                研究① 新規アルゴリズムの開発
              </h4>
              <p className="mt-3 leading-7 text-slate-700">
                人間の「満足化」という意思決定傾向を取り入れ、効率的な探索を可能とする新規強化学習アルゴリズムの研究に取り組んでいます。
                特に、状態空間・行動空間が大きく、探索が難しい運動制御タスクでの有効性を重視しています。
              </p>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                満足化とは？：目標を満たす選択肢が見つかるまでは探索を行い、見つかった後はその選択肢を継続して選ぶ意思決定傾向です。
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5">
              <h4 className="text-lg font-semibold">
                研究② 既存の代表手法の分析研究
              </h4>
              <p className="mt-3 leading-7 text-slate-700">
                探索を促進する代表的手法の特性を分析するため、探索に影響する環境要因をコントロール可能な分析タスクを提案しています。
                既存手法が「なぜ・どのような条件で機能するのか」を系統的に理解することを目指しています。
              </p>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                きっかけ：研究①を進める中で、既存手法の探索特性をより体系的に理解したいと感じ、この研究を始めました。
              </p>
            </div>
          </div>
        </section>

        <section id="publications" className="mt-16">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-orange-600"> Publications </p>
            <h3 className="mt-3 text-2xl font-semibold">論文・発表</h3>
          </div>

          <div className="mt-6 grid gap-5">
            {publications.map((paper) => (
              <article
                key={paper.title}
                className="rounded-[24px] border border-slate-200 bg-white p-6 shadow-sm"
              >
                <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                  <div>
                    <h4 className="text-lg font-semibold">{paper.title}</h4>
                    <p className="mt-1 text-sm text-slate-500">{paper.type}</p>
                  </div>
                  <a
                    href={paper.url}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full border border-slate-300 px-4 py-2 text-sm text-slate-700"
                  >
                    資料を見る
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="projects" className="mt-16">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-orange-600"> Projects </p>
            <h3 className="mt-3 text-2xl font-semibold">制作物・開発プロジェクト</h3>
            <p className="mt-4 max-w-3xl leading-7 text-slate-700">
              代表的な開発経験です。実装だけでなく、運用・発表・改善まで含めて関わってきました。
            </p>
          </div>

          <div className="mt-6 grid gap-5 md:grid-cols-1">
            {projects.map((project) => (
              <article
                key={project.title}
                className="rounded-[24px] border border-slate-200 bg-white p-6 shadow-sm"
              >
                <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                  <div>
                    <h4 className="text-xl font-semibold">{project.title}</h4>
                    <p className="mt-1 text-sm text-slate-500">{project.period}</p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.url && (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-full border border-slate-300 px-4 py-2 text-sm text-slate-700"
                      >
                        URLを見る
                      </a>
                    )}
                    {project.repo && (
                      <a
                        href={project.repo}
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-full border border-slate-300 px-4 py-2 text-sm text-slate-700"
                      >
                        GitHub
                      </a>
                    )}
                  </div>
                </div>

                <p className="mt-4 leading-7 text-slate-700">{project.summary}</p>
                <p className="mt-3 leading-7 text-slate-700">
                  <span className="font-semibold">担当: </span>
                  {project.role}
                </p>

                <div className="mt-4">
                  <p className="text-sm font-semibold text-slate-800">使用技術</p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {project.tech.map((item) => (
                      <span
                        key={item}
                        className="rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-700"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-4">
                  <p className="text-sm font-semibold text-slate-800">ポイント</p>
                  <ul className="mt-2 space-y-2 text-slate-700">
                    {project.highlights.map((point) => (
                      <li key={point}>・{point}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="experience" className="mt-16">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-orange-600">
                Experience
              </p>
              <h3 className="mt-3 text-2xl font-semibold">経験・取り組み</h3>
            </div>
          </div>
          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {experiences.map((item) => (
              <article
                key={item.title}
                className="rounded-[24px] border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1"
              >
                <div className="flex items-center justify-between gap-3">
                  <h4 className="text-lg font-semibold">{item.title}</h4>
                  <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
                    {item.period}
                  </span>
                </div>
                <p className="mt-4 leading-7 text-slate-700">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section id="skills" className="mt-16 grid gap-6 md:grid-cols-[1fr_1fr]">
          <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-orange-600">
              Skills
            </p>
            <h3 className="mt-3 text-2xl font-semibold">技術スタック</h3>

            <div className="mt-6 space-y-5">
              {Object.entries(skillGroups).map(([group, values]) => (
                <div key={group}>
                  <p className="text-sm font-semibold text-slate-800">{group}</p>
                  <div className="mt-2 flex flex-wrap gap-3">
                    {values.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm text-slate-700"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-orange-600">
              Certifications & Work Experience
            </p>
            <h3 className="mt-3 text-2xl font-semibold">資格・アルバイト経験</h3>

            <div className="mt-6">
              <p className="text-sm font-semibold text-slate-800">資格</p>
              <ul className="mt-3 space-y-2 leading-7 text-slate-700">
                {certifications.map((item) => (
                  <li key={item}>・{item}</li>
                ))}
              </ul>
            </div>

            <div className="mt-6">
              <p className="text-sm font-semibold text-slate-800">長期アルバイト</p>
              <div className="mt-3 flex flex-wrap gap-3">
                {longTermJobs.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm text-slate-700"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-6">
              <p className="text-sm font-semibold text-slate-800">単発派遣アルバイト</p>
              <div className="mt-3 flex flex-wrap gap-3">
                {shortTermJobs.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm text-slate-700"
                  >
                    {item}
                  </span>
                ))}
              </div>
              <p className="mt-2 text-sm text-slate-600">......etc</p>
            </div>
          </div>
        </section>

        <section
          id="future"
          className="mt-16 rounded-[28px] border border-slate-200 bg-slate-900 p-8 text-white shadow-sm"
        >
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-orange-300">
            Vision
          </p>
          <h3 className="mt-3 text-2xl font-semibold">将来のエンジニア像</h3>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl bg-white/10 p-5">
              <h4 className="text-lg font-semibold">目指すキャリア</h4>
              <ul className="mt-3 space-y-2 text-slate-100/90">
                <li>
                  ・「当たり前」を支え、よりよく変えることのできるエンジニア
                </li>
                <li>・社会やチームを支える縁の下の力持ち</li>
              </ul>
            </div>
            <div className="rounded-2xl bg-white/10 p-5">
              <h4 className="text-lg font-semibold">就活の軸</h4>
              <ul className="mt-3 space-y-2 text-slate-100/90">
                <li>・企業理念と事業内容への確かな共感</li>
                <li>・最新技術に触れながら仕事ができる環境</li>
                <li>・自分の力やスキルを活かせる場</li>
              </ul>
            </div>
          </div>
        </section>
        <section id="links" className="mt-16 rounded-[28px] border border-slate-200 bg-white p-8 shadow-sm">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-orange-600">
            Links
          </p>
          <h3 className="mt-3 text-2xl font-semibold">リンク・連絡先</h3>
          <p className="mt-4 max-w-3xl leading-7 text-slate-700">
            ポートフォリオサイト、GitHub、資料へのリンクです。
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <a
              href={links.portfolio}
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl border border-slate-200 bg-slate-50 p-5 transition hover:-translate-y-0.5"
            >
              <p className="text-sm text-slate-500">Portfolio</p>
              <p className="mt-2 font-semibold text-slate-900">ポートフォリオサイト</p>
              <p className="mt-2 text-sm text-slate-600 break-all">{links.portfolio}</p>
            </a>

            <a
              href={links.github}
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl border border-slate-200 bg-slate-50 p-5 transition hover:-translate-y-0.5"
            >
              <p className="text-sm text-slate-500">GitHub</p>
              <p className="mt-2 font-semibold text-slate-900">GitHub Profile</p>
              <p className="mt-2 text-sm text-slate-600 break-all">{links.github}</p>
            </a>

            <a
              href={links.portfolioRepo}
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl border border-slate-200 bg-slate-50 p-5 transition hover:-translate-y-0.5"
            >
              <p className="text-sm text-slate-500">Repository</p>
              <p className="mt-2 font-semibold text-slate-900">Portfolio Repository</p>
              <p className="mt-2 text-sm text-slate-600 break-all">{links.portfolioRepo}</p>
            </a>

            <a
              href={links.email}
              className="rounded-2xl border border-slate-200 bg-slate-50 p-5 transition hover:-translate-y-0.5"
            >
              <p className="text-sm text-slate-500">Contact</p>
              <p className="mt-2 font-semibold text-slate-900">メールで連絡</p>
              <p className="mt-2 text-sm text-slate-600 break-all">{links.email}</p>
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
