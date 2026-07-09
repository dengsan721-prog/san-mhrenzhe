const subjectOrder = ["math", "chinese", "english", "science", "logic", "spatial"];

const domainMeta = [
  { domain: "math", label: "数学机关" },
  { domain: "chinese", label: "语文卷轴" },
  { domain: "english", label: "英语口令" },
  { domain: "science", label: "科学实验" },
  { domain: "logic", label: "逻辑侦查" },
  { domain: "spatial", label: "空间机关" },
];

const chapters = [
  {
    element: "fire",
    chapter: "火焰道场",
    badge: "火",
    levels: [
      ["math", "火门速算", "点燃第一道火门", "48 + 27，哪种拆法最快？", "48 + 27", [["a", "48 + 2 + 25 = 75"], ["b", "40 + 20 + 7 = 67"], ["c", "48 + 30 = 78"]], "a", "先把 48 补成 50，再加剩下的 25。", "火门打开！补整十用得很漂亮。", "火焰能量 +1"],
      ["chinese", "热浪成语", "修复被烤花的卷轴", "“专心做一件事”更接近哪个成语？", "专心修炼", [["a", "三心二意"], ["b", "一心一意"], ["c", "七上八下"]], "b", "题目强调专心，答案里也有“一心”。", "卷轴恢复！词义判断很稳。", "卷轴碎片 +1"],
      ["english", "火把口令", "读出火把上的英文暗号", "Choose the word for “火”.", "火 = ?", [["a", "fire"], ["b", "fish"], ["c", "five"]], "a", "fire 的意思是火，fish 是鱼。", "口令正确！火把亮起来了。", "英文符文 +1"],
      ["science", "火星实验", "判断哪件事更安全", "看到小火苗时，哪种做法正确？", "安全判断", [["a", "靠近观察"], ["b", "告诉大人并远离"], ["c", "用纸去盖"]], "b", "遇到火源要远离，并请大人处理。", "安全意识合格！", "安全徽章 +1"],
      ["logic", "火纹密码", "破解火纹顺序", "红、黄、红、黄、红，下一块是什么颜色？", "红 黄 红 黄 红 ?", [["a", "红"], ["b", "黄"], ["c", "蓝"]], "b", "颜色按红、黄交替出现。", "密码解开！规律抓得准。", "侦查点 +1"],
      ["spatial", "熔岩踏板", "选择能过桥的方向", "从起点向右走 2 格，再向上走 1 格，会到哪里？", "起点 -> -> ↑", [["a", "右上方"], ["b", "左上方"], ["c", "正下方"]], "a", "先往右，再往上，位置在起点的右上方。", "踏板稳定！路线感很好。", "机关零件 +1"],
    ],
  },
  {
    element: "ice",
    chapter: "冰霜塔楼",
    badge: "冰",
    levels: [
      ["math", "冰晶倍增", "让冰晶按规律生长", "4, 8, 16, 32，下一颗冰晶是多少？", "4 8 16 32 ?", [["a", "40"], ["b", "48"], ["c", "64"]], "c", "每次都乘 2。", "冰晶长成了！翻倍规律正确。", "冰霜能量 +1"],
      ["chinese", "寒风近义", "找回卷轴里的近义词", "“寒冷”的近义词是？", "寒冷 = ?", [["a", "炎热"], ["b", "冰冷"], ["c", "热闹"]], "b", "寒冷和冰冷都表示温度低。", "词语配对完成！", "卷轴碎片 +1"],
      ["english", "雪门颜色", "读懂雪门上的颜色", "Which word means “蓝色”？", "蓝色 = ?", [["a", "blue"], ["b", "black"], ["c", "brown"]], "a", "blue 是蓝色。", "雪门打开！颜色口令正确。", "英文符文 +1"],
      ["science", "结冰观察", "判断水的变化", "水结成冰，主要是因为温度怎样？", "水 -> 冰", [["a", "升高"], ["b", "降低"], ["c", "不变"]], "b", "水结冰通常发生在温度降低时。", "观察准确！", "实验星 +1"],
      ["logic", "冰块排队", "找出唯一位置", "三块冰：A 不在左边，B 在右边，C 在哪里？", "左 中 右", [["a", "左边"], ["b", "中间"], ["c", "右边"]], "a", "B 在右边，A 不在左边就只能在中间，C 在左边。", "推理清楚！", "侦查点 +1"],
      ["spatial", "冰镜对称", "找出镜像图案", "哪一组左右像照镜子？", "镜像", [["a", "◀ | ▶"], ["b", "▲ | ▲"], ["c", "▶ | ▶"]], "a", "镜像时左右方向会相反。", "冰镜点亮！", "机关零件 +1"],
    ],
  },
  {
    element: "lightning",
    chapter: "雷电工坊",
    badge: "雷",
    levels: [
      ["math", "闪电乘法", "给能量线圈充电", "7 x 8 等于多少？", "7 x 8", [["a", "54"], ["b", "56"], ["c", "64"]], "b", "7 个 8 是 56。", "线圈充满！乘法很熟练。", "雷电能量 +1"],
      ["chinese", "电报码句", "让句子更通顺", "“因为下雨，____ 我带了伞。”填哪个词更合适？", "因为...____", [["a", "所以"], ["b", "但是"], ["c", "如果"]], "a", "因为和所以常常搭配，表示原因和结果。", "句子通顺了！", "卷轴碎片 +1"],
      ["english", "能量问候", "选择正确的问候语", "早上见到老师，可以说？", "Morning", [["a", "Good morning"], ["b", "Good night"], ["c", "Goodbye"]], "a", "Good morning 是早上好。", "问候口令通过！", "英文符文 +1"],
      ["science", "导电测试", "选择更容易导电的材料", "下面哪种材料通常更容易导电？", "导电材料", [["a", "铜线"], ["b", "塑料尺"], ["c", "橡皮"]], "a", "金属铜通常容易导电。", "工坊测试成功！", "实验星 +1"],
      ["logic", "闪光开关", "判断开关规则", "只有红灯和蓝灯都亮，门才开。现在红亮、蓝不亮，门会怎样？", "红亮 蓝灭", [["a", "打开"], ["b", "不开"], ["c", "变成两扇门"]], "b", "两个条件要同时满足，蓝灯没亮就不开。", "规则判断正确。", "侦查点 +1"],
      ["spatial", "电轨旋转", "判断箭头旋转", "箭头 → 逆时针旋转 90° 后指向哪里？", "→ + 逆时针90°", [["a", "↑"], ["b", "↓"], ["c", "←"]], "a", "从向右逆时针转，会指向上。", "电轨接通！", "机关零件 +1"],
    ],
  },
  {
    element: "earth",
    chapter: "大地迷宫",
    badge: "土",
    levels: [
      ["math", "石门估算", "估算石门重量", "198 + 203 大约是多少？", "198 + 203", [["a", "约 300"], ["b", "约 400"], ["c", "约 500"]], "b", "198 约 200，203 约 200，一共约 400。", "石门松动！估算靠谱。", "大地能量 +1"],
      ["chinese", "石碑反义", "修复反义词石碑", "“轻”的反义词是？", "轻 ↔ ?", [["a", "重"], ["b", "快"], ["c", "亮"]], "a", "轻和重是一组反义词。", "石碑修好了！", "卷轴碎片 +1"],
      ["english", "洞穴数字", "读出英文数字", "Which number is “twelve”？", "twelve", [["a", "10"], ["b", "12"], ["c", "20"]], "b", "twelve 是 12。", "数字口令正确！", "英文符文 +1"],
      ["science", "岩石分类", "观察自然物", "下面哪个是自然界常见的岩石或矿物？", "自然物", [["a", "花岗岩"], ["b", "玻璃杯"], ["c", "塑料袋"]], "a", "花岗岩是自然界常见岩石。", "观察记录完成！", "实验星 +1"],
      ["logic", "迷宫路线", "选择不会撞墙的路线", "规则：不能走有叉号的路。前方左路有叉号，右路有亮点，应走哪边？", "左× 右•", [["a", "左边"], ["b", "右边"], ["c", "原地转圈"]], "b", "有叉号不能走，亮点在右边。", "路线判断正确！", "侦查点 +1"],
      ["spatial", "石块拼合", "选择缺失的一半", "左半块是 ◧，想拼成完整方块，右半块应像哪一个？", "◧ + ?", [["a", "◨"], ["b", "◧"], ["c", "△"]], "a", "左右两半互补才能拼成方块。", "石块归位！", "机关零件 +1"],
    ],
  },
  {
    element: "wind",
    chapter: "风暴飞廊",
    badge: "风",
    levels: [
      ["math", "风速比较", "比较两股风的速度", "哪一个数最大？", "68  86  78", [["a", "68"], ["b", "86"], ["c", "78"]], "b", "比较十位，86 的十位最大。", "风速判断准确！", "风暴能量 +1"],
      ["chinese", "风声标点", "选择合适标点", "“你准备好了吗____”句末应填？", "你准备好了吗", [["a", "。"], ["b", "？"], ["c", "！"]], "b", "这是一个问题，句末用问号。", "标点放对了！", "卷轴碎片 +1"],
      ["english", "飞廊动作", "选择动作单词", "Which word means “跑”？", "跑 = ?", [["a", "run"], ["b", "read"], ["c", "rain"]], "a", "run 是跑。", "动作口令正确！", "英文符文 +1"],
      ["science", "风的来源", "理解自然现象", "我们能感觉到风，主要是因为空气在怎样？", "风 = 空气 ?", [["a", "流动"], ["b", "变成石头"], ["c", "消失"]], "a", "空气流动就形成风。", "自然现象判断正确。", "实验星 +1"],
      ["logic", "旗帜暗号", "破解颜色组合", "旗帜按“绿、绿、黄”重复。第 7 面是什么颜色？", "绿 绿 黄 | 绿 绿 黄 | ?", [["a", "绿"], ["b", "黄"], ["c", "蓝"]], "a", "每 3 面一组，第 7 面是新一组的第 1 面：绿。", "暗号破解！", "侦查点 +1"],
      ["spatial", "滑翔方向", "看懂转弯路线", "面向北，向右转后面向哪里？", "北 + 右转", [["a", "东"], ["b", "西"], ["c", "南"]], "a", "面向北时，右手边是东。", "滑翔成功！", "机关零件 +1"],
    ],
  },
  {
    element: "shadow",
    chapter: "光影终章",
    badge: "影",
    levels: [
      ["math", "终章宝箱", "计算宝箱密码", "96 - 38 等于多少？", "96 - 38", [["a", "58"], ["b", "62"], ["c", "68"]], "a", "96 - 40 = 56，再加回 2，是 58。", "宝箱密码正确！", "光影能量 +1"],
      ["chinese", "影子阅读", "读懂一句话", "“小队悄悄前进，生怕惊动机关。”说明他们行动怎样？", "悄悄前进", [["a", "很吵"], ["b", "很小心"], ["c", "很生气"]], "b", "悄悄、生怕都说明很小心。", "阅读判断准确！", "卷轴碎片 +1"],
      ["english", "终章句子", "选择正确句意", "“I can jump.” 的意思是？", "I can jump.", [["a", "我会跳"], ["b", "我喜欢苹果"], ["c", "我在睡觉"]], "a", "jump 是跳，can 表示会、能。", "句子口令通过！", "英文符文 +1"],
      ["science", "影子实验", "判断影子的条件", "想看到清楚的影子，通常需要什么？", "影子条件", [["a", "光和遮挡物"], ["b", "只有声音"], ["c", "只有水"]], "a", "光照到物体，后面会形成影子。", "光影实验完成！", "实验星 +1"],
      ["logic", "最终线索", "排除错误线索", "三个宝箱中，真宝箱不是左边，也不是右边，它在哪里？", "左 中 右", [["a", "左边"], ["b", "中间"], ["c", "右边"]], "b", "不是左，也不是右，只能是中间。", "最终线索锁定！", "侦查点 +1"],
      ["spatial", "光影拼图", "完成最后图案", "图形顺序是 ▲ ◆ ▲ ◆，下一块是什么？", "▲ ◆ ▲ ◆ ?", [["a", "▲"], ["b", "◆"], ["c", "●"]], "a", "图形按 ▲、◆ 交替出现。", "最终图案完成！", "大师徽章 +1"],
    ],
  },
];

export const levels = chapters.flatMap((chapter) =>
  chapter.levels.map(([domain, title, mission, prompt, visual, rawOptions, answer, hint, success, reward], index) => ({
    id: `${chapter.element}-${index + 1}`,
    domain,
    element: chapter.element,
    chapter: chapter.chapter,
    title,
    mission,
    badge: chapter.badge,
    prompt,
    visual,
    options: rawOptions.map(([id, text]) => ({ id, text })),
    answer,
    hint,
    success,
    reward,
  }))
);

export function createGameState() {
  return {
    currentIndex: 0,
    answers: [],
  };
}

export function getCurrentLevel(state) {
  return levels[state.currentIndex] || null;
}

export function answerLevel(state, optionId) {
  const level = getCurrentLevel(state);

  if (!level) {
    return {
      correct: false,
      complete: true,
      hint: "训练已经完成，可以查看结果。",
      level: null,
      selected: null,
    };
  }

  const selected = level.options.find((option) => option.id === optionId) || null;
  const correct = optionId === level.answer;

  state.answers.push({
    levelId: level.id,
    domain: level.domain,
    optionId,
    correct,
  });

  if (correct) {
    state.currentIndex = Math.min(state.currentIndex + 1, levels.length);
  }

  return {
    correct,
    complete: isComplete(state),
    hint: correct ? level.success : level.hint,
    level,
    milestone: correct ? getMilestoneForLevel(state, level) : null,
    selected,
  };
}

function getMilestoneForLevel(state, level) {
  if (state.currentIndex === 0 || state.currentIndex % 6 !== 0) {
    return null;
  }

  return {
    element: level.element,
    badge: level.badge,
    title: `${level.chapter}突破`,
    message: `邓易安点亮了${level.chapter}，新的元素力量觉醒了！`,
    progress: state.currentIndex,
    final: state.currentIndex === levels.length,
  };
}

export function getProgress(state) {
  const current = Math.min(state.currentIndex, levels.length);
  const total = levels.length;

  return {
    current,
    total,
    percent: Math.round((current / total) * 100),
  };
}

export function getDomainSummary(state) {
  const correctLevelIds = new Set(
    state.answers
      .filter((answer) => answer.correct)
      .map((answer) => answer.levelId)
  );

  return domainMeta.map((meta) => {
    const domainLevels = levels.filter((level) => level.domain === meta.domain);
    const correct = domainLevels.filter((level) => correctLevelIds.has(level.id)).length;

    return {
      domain: meta.domain,
      label: meta.label,
      correct,
      total: domainLevels.length,
      stars: correct === 0 ? 0 : Math.ceil((correct / domainLevels.length) * 3),
    };
  });
}

export function getElementSummary(state) {
  const correctLevelIds = new Set(
    state.answers
      .filter((answer) => answer.correct)
      .map((answer) => answer.levelId)
  );

  return chapters.map((chapter) => {
    const chapterLevels = levels.filter((level) => level.element === chapter.element);
    const correct = chapterLevels.filter((level) => correctLevelIds.has(level.id)).length;

    return {
      element: chapter.element,
      label: chapter.chapter,
      badge: chapter.badge,
      correct,
      total: chapterLevels.length,
      charged: correct === chapterLevels.length,
    };
  });
}

export function getSubjectOrder() {
  return [...subjectOrder];
}

export function getFinalHonor(state) {
  return {
    name: "邓易安",
    title: "全科元素大师",
    completed: isComplete(state),
    total: levels.length,
  };
}

export function isComplete(state) {
  return state.currentIndex >= levels.length;
}
