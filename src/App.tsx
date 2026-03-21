export default function PortfolioSite() {
  const skills = [
    'Python',
    'Django',
    'HTML / CSS / JavaScript',
    'Docker',
    'AWS EC2',
    'Nginx',
    'Gunicorn',
    'MySQL',
    'Notion',
    'C / C++',
    'R',
    'MATLAB',
    'React',
  ];

  const experiences = [
    {
      title: '強化学習の研究',
      period: '学部3年より継続',
      description:
        '強化学習における探索の効率化をテーマとして２つの研究を実施しています。新規アルゴリズムの開発と、代表手法の探索特性を分析する軽量タスクの設計に取り組んでいます。',
    },
    {
      title: '研究室アルバイト',
      period: '約1年〜',
      description:
        '強化学習タスクの認知実験用Webサイトを構築。被験者募集を伴う実験運用、サーバ関連対応、機能追加、負荷テストなどを担当しました。',
    },
    {
      title: 'Hack U 東京電機大学 2024',
      period: '2週間',
      description:
        '大学生の英語学習を助けるアプリ『AI単』をチームで開発。単語の意味検索、単語テスト、学習状況の可視化、英語論文からの単語抽出などの機能を実装し、最優秀賞を獲得しました。',
    },
    {
      title: '株式会社モルフォ 夏期有償インターン',
      period: '3週間',
      description:
        'DL推論エンジン『SoftNeuro®』を対象に推論高速化を実装。大規模コードの読解・デバッグ力や、推論最適化の観点を学びました。',
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
      description: '研究室内の研究分科会の運営、勉強会の主催に携わっています。',
    },
  ];

  const achievements = [
    'Hack U 東京電機大学 2024 最優秀賞',
    '基本情報技術者試験 合格',
    '応用情報技術者試験 合格',
    '統計検定2級 合格',
    '2025年 人工知能学会全国大会 ポスター発表',
    '2026年 International Symposium on Artificial Life and Robotics 口頭発表',
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
            <a href="#about" className="hover:text-slate-950">
              About
            </a>
            <a href="#research" className="hover:text-slate-950">
              Research
            </a>
            <a href="#experience" className="hover:text-slate-950">
              Experience
            </a>
            <a href="#skills" className="hover:text-slate-950">
              Skills
            </a>
            <a href="#future" className="hover:text-slate-950">
              Vision
            </a>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-6 py-10 md:py-14">
        <section className="grid gap-8 md:grid-cols-[1.15fr_0.85fr] md:items-center">
          <div className="space-y-6">
            <p className="inline-flex rounded-full border border-orange-200 bg-orange-50 px-4 py-1 text-sm text-orange-700">
              Reinforcement Learning / Backend / Infrastructure
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
              <a
                href="#experience"
                className="rounded-2xl bg-slate-900 px-5 py-3 text-sm font-medium text-white shadow-sm transition hover:-translate-y-0.5"
              >
                経験を見る
              </a>
              <a
                href="#skills"
                className="rounded-2xl border border-slate-300 bg-white px-5 py-3 text-sm font-medium text-slate-800 transition hover:-translate-y-0.5"
              >
                技術スタックを見る
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

        <section id="about" className="mt-16 grid gap-6 md:grid-cols-3">
          <div className="rounded-[24px] border border-slate-200 bg-white p-6 shadow-sm md:col-span-2">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-orange-600">
              About
            </p>
            <h3 className="mt-3 text-2xl font-semibold">プロフィール</h3>
            <p className="mt-4 leading-7 text-slate-700">
              大学院では、エージェントが試行錯誤を通じて学習する強化学習の中でも、
              探索をいかに効率化するかを主題に研究しています。研究活動に加えて、
              認知実験用Webサイトの構築やサーバ運用、学習支援アプリのチーム開発、
              推論高速化インターンなど、理論と実装の両面から経験を積んできました。
            </p>
          </div>
          <div className="rounded-[24px] border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-orange-600">
              Interests
            </p>
            <ul className="mt-4 space-y-3 text-slate-700">
              <li>・機械学習</li>
              <li>・ITインフラ</li>
              <li>・セキュリティ</li>
              <li>・音楽鑑賞 / フェス・ライブ</li>
              <li>・散歩 / カービィ</li>
            </ul>
          </div>
        </section>

        <section
          id="research"
          className="mt-16 rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm md:p-8"
        >
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-orange-600">
            Research
          </p>
          <h3 className="mt-3 text-2xl font-semibold">研究概要</h3>
          強化学習：エージェントと環境が相互作用を通じて試行錯誤を重ね、長期的な利益を最大化する方策を自律的に学習する枠組み
          強化学習では、エージェントが学習のために試行錯誤しデータを集める"探索”が大きな重要であり、
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl bg-slate-50 p-5">
              <h4 className="text-lg font-semibold">
                研究① 新規アルゴリズムの開発
              </h4>
              <p className="mt-3 leading-7 text-slate-700">
                人間の「満足化」という意思決定傾向を取り入れ、効率的な探索を可能とする
                新規強化学習アルゴリズムの研究に取り組んでいます。特に、状態空間・行動空間が大きく、
                探索が難しい運動制御タスクでの有効性を重視しています。
              </p>
            </div>
            <div className="rounded-2xl bg-slate-50 p-5">
              <h4 className="text-lg font-semibold">
                研究② 既存の代表手法の分析研究
              </h4>
              <p className="mt-3 leading-7 text-slate-700">
                探索特性を分析するため、環境要因を極力排した軽量な分析タスクを提案し、
                既存手法がどのような条件で機能するかを系統的に理解することを目指しています。
              </p>
            </div>
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

        <section
          id="skills"
          className="mt-16 grid gap-6 md:grid-cols-[1fr_1fr]"
        >
          <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-orange-600">
              Skills
            </p>
            <h3 className="mt-3 text-2xl font-semibold">技術スタック</h3>
            <div className="mt-6 flex flex-wrap gap-3">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm text-slate-700"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-orange-600">
              Achievements
            </p>
            <h3 className="mt-3 text-2xl font-semibold">実績・資格</h3>
            <ul className="mt-6 space-y-3 leading-7 text-slate-700">
              {achievements.map((item) => (
                <li key={item}>・{item}</li>
              ))}
            </ul>
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
      </main>
    </div>
  );
}
