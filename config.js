const USER_CONFIG = {
    name:       "Haitao Huang (黃海濤)",
    initials:   "Katagorri",
    role:       "Master's Student",
    university: "Fudan University",
    email:      "haitao.huang.mail@qq.com",
    bio:        "Forensic medicine is a profession that exists for the future.",
    photo:      "./assets/Haitao_photo.jpg",   // optional: path to your photo, e.g. "assets/photo.jpg"
  
    stats: [
      { value: "3",  label: "Publications" },
      { value: "2", label: "Academic Projects" },
      { value: "1",   label: "Business Plan" },
    ],
  
    links: {
       WeChat: "assets/WeChat.jpg",
       Github: "https://github.com/Katagorrii?tab=repositories",
       ORCID: "https://orcid.org/0009-0001-8695-0896",
       Instagram: "https://www.instagram.com/dr_deer448/",
       CV: "assets/CV_haitao.pdf",
    },
  
    publications: [
      {
        year:     2027,
        category: "medical",
        title:    "xxx",
        authors:  "Haitao Huang (黃海濤), xxx",
        venue:    "xxx",
        links:    {article: "xxx"},
        abstract: "xxx",
      },

      {
        year:     2026,
        category: "astronomy",
        title:    "Measuring Asteroid Rotation Periods Using the KMTNet Bulge Survey Data",
        authors:  "Haitao Huang (黃海濤), Hongjing Yang* (杨弘靖), Chung-Uk Lee, Bin Li* (李彬), Qiyue Qian (钱奇玥), Jun Tian (田君), Tianjun Gan (干天君), Shude Mao (毛淑德), Weicheng Zang (臧伟呈), and Dong-Jin Kim",
        venue:    "Publications of the Astronomical Society of the Pacific",
        links:    {article: "https://iopscience.iop.org/article/10.1088/1538-3873/ae7cb6"},
        abstract: "Since 2015, the Korea Microlensing Telescope Network (KMTNet) has conducted high-cadence, near-continuous observations of the Galactic bulge for nearly nine months each year from three sites in Chile, South Africa, and Australia, and its wide field of view provides a unique opportunity to extract asteroid lightcurves from archival survey data. In this work, we performed photometric measurements of bright asteroids (V  < 20 mag) identified within a one-square-degree field during the 2018 KMTNet bulge season. We derived reliable rotation periods for 96 asteroids, including 84 objects without previously published lightcurves. The reliable spin-rates of the asteroids in our sample are broadly consistent with those reported in the Asteroid Lightcurve Database. This archival mining approach can be readily extended to a much larger KMTNet footprint, and the existing ∼12 deg2 high-cadence KMTNet dataset has the potential to yield reliable rotation periods (U ≥ 2+) for more than 5500 asteroids, substantially expanding the current database of asteroid rotational properties.",
      },
      
      {
        year:     2024,
        category: "astronomy",
        title:    "潜在威胁小行星矿物定量反演",
        authors:  "黃海濤, 吴昀昭*, 王立, 矫恒越, 李彦昭, 雷开宇",
        venue:    "深空探测学报",
        links:    { article: "https://jdse.bit.edu.cn/sktcxb/article/doi/10.15982/j.issn.2096-9287.2024.20240052" },
        abstract: "针对潜在威胁小行星（Potentially Hazardous Asteroids,PHAs）的撞击风险与防御方案的制定，采用修正高斯模型（Modified Gaussian Model,MGM）研究其矿物组成，进而与陨石类似物建立联系。该模型通过对混合物光谱去卷积获得矿物单独吸收特征。将MGM应用到6颗PHAs中，结果表明6颗PHAs分别是S型、Sq型和Q型，矿物主要由橄榄石、低钙辉石和高钙辉石组成，镁橄榄石指数（Fo#）为0.68～0.76，高钙辉石占比为0.215～0.395。小行星（25143）Itokawa、（1620）Geographos、（99942）Apophis和（1862）Apollo对应的陨石类似物为LL球粒陨石，小行星（11500）Tomaiyowit和（4179）Toutatis与L球粒陨石相似。",
      },
      
      {
        year:     2024,
        category: "astronomy",
        title:    "硅质小行星矿物定量反演研究",
        authors:  "黄小桐, 黃海濤, 雷开宇, 华宝成, 王立, 吴昀昭*, 李彦昭, 徐天弈, 卢瑜",
        venue:    "空间科学与试验学报",
        links:    { article: "https://www.spacejournal.cn/dhykz/cn/article/id/51af8081-5831-4e33-8311-4d4aeb5c9c44" },
        abstract: "了解小行星的物质组成对小行星起源与演化研究、太空资源利用以及小行星防御等都具有重要指导作用。硅质小行星是近地以及内主带小行星的主要类型，也是最常见陨石普通球粒陨石的母体。为了增进对硅质小行星矿物成分的认识，本文研究了光谱信噪比较高的8颗硅质小行星的矿物组成。通过对小行星混合光谱进行去卷积获得铁镁质矿物吸收特征，得到它们的镁橄榄石指数（Fo#）以及高钙辉石占比，并获得了小行星对应的陨石类似物。研究发现，Sr型小行星（3） Juno、（808） Merxia和S型小行星（4197） Morpheus具有较高的Fo#和较低的高钙辉石含量，成分类似于H球粒陨石。Sq型小行星（433） Eros具有相对低的Fo#和较高的高钙辉石占比，其成分类似于L球粒陨石。Sv型小行星（5） Astraea和S型小行星（17） Thetis与V型小行星（3908） Nyx和（4055） Magellan表面几乎不含橄榄石，这4颗小行星的矿物成分与玄武质无球粒陨石类似。本研究表明即便都是具有明显吸收特征的硅质小行星，它们的类型也具有矿物多样性，对应的陨石类型复杂多样。这既反映了小行星自身起源演化以及后期太空风化、冲击变质的影响，也说明了现有小行星光谱分类体系有待改进，在基于光谱解译小行星矿物组成及演化时需要谨慎。",
      },
      
      {
        year:     2024,
        category: "astronomy",
        title:    "木星特洛伊小行星研究综述",
        authors:  "黃海濤, 吴昀昭*",
        venue:    "地球与行星物理论评（中英文）",
        links:    { article: "https://www.sjdz.org.cn/cn/article/id/eab1b5cf-c7cb-4848-90d9-ef84f0380f5c" },
        abstract: "木星特洛伊小行星（Jupiter-Trojan asteroids）是位于木星稳定拉格朗日点上与木星以相同周期围绕太阳稳定运行的小天体.木星特洛伊小行星作为行星形成过程的活化石记录了行星起源、类地行星有机物与挥发物来源及行星系统整体演化的独特信息.迄今仅通过地基望远镜或空间望远镜对它们进行过远距离光谱观测，它们仍是太阳系最神秘的天体群之一.在物质成分上，细粒硅酸盐被认为是构成特洛伊小行星的重要物质.过去认为特洛伊小行星形成在5 AU附近，新的动力学模型认为特洛伊小行星来自柯伊伯带. NASA的“露西”小行星探测任务（Lucy）将首次近距离探索这些神秘的小天体，有望为解开特洛伊小行星的身世之谜提供重要证据.本文梳理了木星特洛伊小行星的观测历史、物理性质、光谱性质、物质组成以及形成和演化，并介绍了“露西”的探测任务与目标，为未来我国深空探测计划中的小行星探测提供支撑。",
      },
      
      {
        year:     2023,
        category: "geology",
        title:    "Identifying Emeishan basalt by supervised learning with Landsat-5 and ASTER data",
        authors:  "Ling Zeng*, Tianbin Li, Haitao Huang, Peng Zeng, Yuanxiao He, Linghai Jing, Yan Yang, Shoutao Jiao",
        venue:    "Frontiers in Earth Science",
        links:    { article: "https://www.frontiersin.org/journals/earth-science/articles/10.3389/feart.2022.1097778/full" },
        abstract: "//",
      },
    ],
  
    projects: [
      {
        name: "Nebflow",
        desc: "A personal AI agent designed to serve as your intelligent secretary",
        tags: ["Agent", "Github"],
        url:  "https://mashiro.staging.nebflow.space/en",
      },
    ],
  
    news: [
      { date: "2026.09", badge: "New",   text: "A new chapter begins at the Department of Forensic Medicine!" },
      { date: "2026.08", badge: "New", text: "Attending summer school in Taipei！" },
      { date: "2026.06", badge: "New", text: "Successfully ‘graduated’ from Westlake University！" },
    ],
  
    education: [
      { period: "2026.09–Present", degree: "Master's in Forensic Medicine", institution: "Fudan University" },
      { period: "2022.09–2025.06",    degree: "Master's in Astronomy",  institution: "University of Science and Technology of China" },
      { period: "2018.09–2022.06",    degree: "B.S. in Geology",  institution: "Chengdu University of Technology" },
    ],
  
    experience: [
      { period: "Summer 2026", role: "Summer Student", institution: "National Taiwan University" },
      { period: "2025.07-2026.07", role: "Visiting Researcher", institution: "Westlake University" },
    ],
  };