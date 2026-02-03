// Language switcher functionality
const translations = {
    en: {
        // Header
        welcome: "Welcome to PunkHeart",
        // Navigation
        home: "Home",
        about: "About",
        projects: "Projects",
        team: "Team",
        support: "Support",
        contact: "Contact",
        contactUs: "Contact us",
        // Hero section
        heroSubtitle: "Specializing in Minecraft components and server development",
        heroTitle: "Welcome To PunkHeart",
        heroButton: "Let's begin",
        startedDate: "Started 25th, Dec 2020",
        // About section
        aboutTitle: "About PunkHeart",
        aboutText1: "PunkHeart is one of the most professional Minecraft development team.We only care about players enjoying the fun of the game, regardless of the cost, just to deliver the fun of Minecraft to everyone.",
        aboutText2: "Once in Lifetime Experience",
        aboutText3: "PunkHeart will bring you a new wonderful world.With every piece of our work, you can experience something you've never experienced before!",
        aboutText4: "To more people's enjoyment",
        aboutText5: "Share your friends about our website please. Thanks.",
        // Projects section
        projectsTitle: "Our Minecraft Projects",
        projectsSubtitle: "Explore our featured Minecraft components and servers",
        project1Title: "Custom Plugins",
        project1Text: "High-quality custom plugins designed to enhance your Minecraft server experience",
        project1Feature1: "Advanced gameplay mechanics",
        project1Feature2: "Custom economy systems",
        project1Feature3: "Unique minigames",
        project2Title: "Themed Servers",
        project2Text: "Immersive themed servers with custom worlds and gameplay",
        project2Feature1: "Fantasy roleplay servers",
        project2Feature2: "Survival adventure maps",
        project2Feature3: "Creative building communities",
        project3Title: "Resource Packs",
        project3Text: "Custom resource packs to enhance the visual and audio experience",
        project3Feature1: "High-resolution textures",
        project3Feature2: "Custom sound effects",
        project3Feature3: "Unique shader support",
        // Team section
        teamTitle: "Meet Our Team",
        teamSubtitle: "The talented individuals behind PunkHeart's Minecraft projects",
        teamMember1Name: "Cafe",
        teamMember1Role: "Lead Developer",
        teamMember1Desc: "Expert in plugin development and server architecture",
        teamMember2Name: "Grass",
        teamMember2Role: "Creative Director",
        teamMember2Desc: "Specializes in world design and resource packs",
        teamMember3Name: "Muran",
        teamMember3Role: "Community Manager",
        teamMember3Desc: "Manages server communities and events",
        teamMember4Name: "Grass",
        teamMember4Role: "Quality Assurance",
        teamMember4Desc: "Ensures all projects meet high standards",
        // Support section
        supportTitle: "Support Us",
        supportSubtitle: "Your support helps us continue creating amazing Minecraft experiences",
        supportOption1Title: "Support Plugin Development",
        supportOption1Subtitle: "Any Amount",
        supportOption1Text: "Including exclusive benefits:",
        supportOption1Feature1: "Acquire random custom component",
        supportOption1Feature2: "VIP customer service",
        supportOption1Feature3: "Early access to new plugins",
        supportOption1Feature4: "Your name in plugin credits",
        supportOption1Button: "Support Plugin Development",
        supportOption2Title: "Support Server Development",
        supportOption2Subtitle: "Any Amount",
        supportOption2Text: "Including exclusive benefits:",
        supportOption2Feature1: "Earn in-game currency",
        supportOption2Feature2: "VIP customer service",
        supportOption2Feature3: "Special server ranks",
        supportOption2Feature4: "Custom server events",
        supportOption2Button: "Support Server Development",
        supportWhyTitle: "Why Support PunkHeart?",
        supportWhyText1: "Every contribution helps us improve our Minecraft projects and provide better experiences for players. We're committed to creating high-quality content that enhances the Minecraft community.",
        supportWhyText2: "Your support allows us to:",
        supportWhyFeature1: "Invest in better server hardware",
        supportWhyFeature2: "Spend more time on development",
        supportWhyFeature3: "Create more frequent updates",
        supportWhyFeature4: "Host community events",
        // Support page
        supportPageHeroSubtitle: "Support Our Development",
        supportPageHeroTitle: "Support PunkHeart",
        supportPageHeroButton: "Learn More",
        supportPageWhyTitle: "Why Support Us?",
        supportPageWhyText: "Your support helps us continue developing high-quality Minecraft components and servers. Every contribution, no matter how small, makes a difference in our ability to create amazing experiences for players worldwide.",
        supportPageFundsTitle: "What Your Support Funds",
        supportPageFundsText: "- Server maintenance and upgrades<br>- Development of new components<br>- Community events and activities<br>- Technical support for players",
        supportPageThankTitle: "Thank You for Your Support",
        supportPageThankText: "We appreciate every supporter who helps us grow and improve. Your generosity allows us to focus on what we do best - creating fun and engaging Minecraft experiences.",
        supportPageOptionsTitle: "Support Options",
        supportPagePluginTitle: "Support plugin development",
        supportPagePluginSubtitle: "Any amount",
        supportPagePluginText: "Including good things:",
        supportPagePluginFeature1: "Acquire random component",
        supportPagePluginFeature2: "VIP customer service",
        supportPagePluginButton: "Contact Us to Support",
        supportPageServerTitle: "Support server development",
        supportPageServerSubtitle: "Any amount",
        supportPageServerText: "Including good things:",
        supportPageServerFeature1: "Earn game currency",
        supportPageServerFeature2: "VIP customer service",
        supportPageServerButton: "Contact Us to Support",
        // Contact section
        contactTitle: "Interested? Let's talk",
        contactFormTab: "Contact Form",
        contactMapTab: "Maps",
        contactFormName: "Full name",
        contactFormEmail: "Email address",
        contactFormCompany: "Company",
        contactFormMessage: "Message",
        contactFormButton: "Send message",
        // Footer
        footerTitle: "PunkHeart Team",
        footerLinks: "Links",
        footerQuestion: "Have a question?",
        footerAdvertise: "If you would like to place an advertisement on this site, please contact us.",
        footerCopyright: "Copyright © 2020 - 2026 <br/>Punk Heart Team"
    },
    zh: {
        // Header
        welcome: "欢迎来到PunkHeart",
        // Navigation
        home: "首页",
        about: "关于我们",
        projects: "项目",
        team: "团队",
        support: "支持我们",
        contact: "联系我们",
        contactUs: "联系我们",
        // Hero section
        heroSubtitle: "专注于我的世界组件及服务器开发",
        heroTitle: "欢迎来到PunkHeart",
        heroButton: "开始探索",
        startedDate: "成立于2020年12月25日",
        // About section
        aboutTitle: "关于PunkHeart",
        aboutText1: "PunkHeart是最专业的Minecraft开发团队之一。我们只关心玩家享受游戏的乐趣，不计成本，只为将Minecraft的乐趣传递给每个人。",
        aboutText2: "终身难忘的体验",
        aboutText3: "PunkHeart将为您带来一个全新的精彩世界。通过我们的每一件作品，您都能体验到前所未有的东西！",
        aboutText4: "让更多人享受",
        aboutText5: "请与您的朋友分享我们的网站。谢谢。",
        // Projects section
        projectsTitle: "我们的Minecraft项目",
        projectsSubtitle: "探索我们精选的Minecraft组件和服务器",
        project1Title: "自定义插件",
        project1Text: "高质量的自定义插件，旨在增强您的Minecraft服务器体验",
        project1Feature1: "高级游戏机制",
        project1Feature2: "自定义经济系统",
        project1Feature3: "独特的小游戏",
        project2Title: "主题服务器",
        project2Text: "具有自定义世界和游戏玩法的沉浸式主题服务器",
        project2Feature1: "奇幻角色扮演服务器",
        project2Feature2: "生存冒险地图",
        project2Feature3: "创意建筑社区",
        project3Title: "资源包",
        project3Text: "自定义资源包，增强视觉和音频体验",
        project3Feature1: "高分辨率纹理",
        project3Feature2: "自定义音效",
        project3Feature3: "独特的着色器支持",
        // Team section
        teamTitle: "认识我们的团队",
        teamSubtitle: "PunkHeart Minecraft项目背后的才华横溢的团队成员",
        teamMember1Name: "Cafe",
        teamMember1Role: "首席开发",
        teamMember1Desc: "插件开发和服务器架构专家",
        teamMember2Name: "Grass",
        teamMember2Role: "创意总监",
        teamMember2Desc: "专注于世界设计和资源包",
        teamMember3Name: "Muran",
        teamMember3Role: "社区经理",
        teamMember3Desc: "管理服务器社区和活动",
        teamMember4Name: "Grass",
        teamMember4Role: "质量保证",
        teamMember4Desc: "确保所有项目符合高标准",
        // Support section
        supportTitle: "支持我们",
        supportSubtitle: "您的支持帮助我们继续创造令人惊叹的Minecraft体验",
        supportOption1Title: "支持插件开发",
        supportOption1Subtitle: "任意金额",
        supportOption1Text: "包括独家福利：",
        supportOption1Feature1: "获取随机自定义组件",
        supportOption1Feature2: "VIP客户服务",
        supportOption1Feature3: "提前访问新插件",
        supportOption1Feature4: "您的名字出现在插件 credits 中",
        supportOption1Button: "支持插件开发",
        supportOption2Title: "支持服务器开发",
        supportOption2Subtitle: "任意金额",
        supportOption2Text: "包括独家福利：",
        supportOption2Feature1: "赚取游戏货币",
        supportOption2Feature2: "VIP客户服务",
        supportOption2Feature3: "特殊服务器等级",
        supportOption2Feature4: "自定义服务器活动",
        supportOption2Button: "支持服务器开发",
        supportWhyTitle: "为什么支持PunkHeart？",
        supportWhyText1: "每一项贡献都帮助我们改进Minecraft项目，为全球玩家提供更好的体验。我们致力于创造高质量的内容，增强Minecraft社区。",
        supportWhyText2: "您的支持使我们能够：",
        supportWhyFeature1: "投资更好的服务器硬件",
        supportWhyFeature2: "花更多时间开发",
        supportWhyFeature3: "创建更频繁的更新",
        supportWhyFeature4: "举办社区活动",
        // Support page
        supportPageHeroSubtitle: "支持我们的发展",
        supportPageHeroTitle: "支持PunkHeart",
        supportPageHeroButton: "了解更多",
        supportPageWhyTitle: "为什么支持我们？",
        supportPageWhyText: "您的支持帮助我们继续开发高质量的Minecraft组件和服务器。每一项贡献，无论大小，都对我们为全球玩家创造精彩体验的能力产生影响。",
        supportPageFundsTitle: "您的支持用于",
        supportPageFundsText: "- 服务器维护和升级<br>- 新组件的开发<br>- 社区活动和活动<br>- 玩家技术支持",
        supportPageThankTitle: "感谢您的支持",
        supportPageThankText: "我们感谢每一位帮助我们成长和改进的支持者。您的慷慨使我们能够专注于我们最擅长的事情 - 创建有趣和引人入胜的Minecraft体验。",
        supportPageOptionsTitle: "支持选项",
        supportPagePluginTitle: "支持插件开发",
        supportPagePluginSubtitle: "任意金额",
        supportPagePluginText: "包括以下福利：",
        supportPagePluginFeature1: "获取随机组件",
        supportPagePluginFeature2: "VIP客户服务",
        supportPagePluginButton: "联系我们支持",
        supportPageServerTitle: "支持服务器开发",
        supportPageServerSubtitle: "任意金额",
        supportPageServerText: "包括以下福利：",
        supportPageServerFeature1: "赚取游戏货币",
        supportPageServerFeature2: "VIP客户服务",
        supportPageServerButton: "联系我们支持",
        // Contact section
        contactTitle: "感兴趣？让我们谈谈",
        contactFormTab: "联系表单",
        contactMapTab: "地图",
        contactFormName: "全名",
        contactFormEmail: "邮箱地址",
        contactFormCompany: "公司",
        contactFormMessage: "留言",
        contactFormButton: "发送消息",
        // Footer
        footerTitle: "PunkHeart团队",
        footerLinks: "链接",
        footerQuestion: "有问题？",
        footerAdvertise: "如果您想在此网站上投放广告，请联系我们。",
        footerCopyright: "版权所有 © 2020 - 2026 <br/>Punk Heart团队"
    }
};

// Function to change language
function changeLanguage(lang) {
    // 1. Update header welcome message
    const headerWelcome = document.getElementById('header-welcome');
    if (headerWelcome) {
        headerWelcome.innerHTML = translations[lang].welcome;
    }
    
    // 2. Update navigation links
    const navElements = [
        { id: 'nav-home', key: 'home' },
        { id: 'nav-about', key: 'about' },
        { id: 'nav-projects', key: 'projects' },
        { id: 'nav-team', key: 'team' },
        { id: 'nav-support', key: 'support' },
        { id: 'nav-contact', key: 'contact' }
    ];
    
    navElements.forEach(element => {
        const navLink = document.getElementById(element.id);
        if (navLink) {
            navLink.innerHTML = translations[lang][element.key];
        }
    });
    
    // 3. Update hero section
    const heroSmall = document.getElementById('hero-subtitle');
    if (heroSmall) {
        // Check if we're on support page
        if (window.location.pathname.includes('support.html')) {
            heroSmall.innerHTML = translations[lang].supportPageHeroSubtitle;
        } else {
            heroSmall.innerHTML = translations[lang].heroSubtitle;
        }
    }
    
    const heroH1 = document.getElementById('hero-title');
    if (heroH1) {
        // Check if we're on support page
        if (window.location.pathname.includes('support.html')) {
            heroH1.innerHTML = translations[lang].supportPageHeroTitle;
        } else {
            heroH1.innerHTML = translations[lang].heroTitle;
        }
    }
    
    const heroBtn = document.getElementById('hero-button');
    if (heroBtn) {
        // Check if we're on support page
        if (window.location.pathname.includes('support.html')) {
            heroBtn.innerHTML = translations[lang].supportPageHeroButton;
        } else {
            heroBtn.innerHTML = translations[lang].heroButton;
        }
    }
    
    const dateWrap = document.getElementById('started-date');
    if (dateWrap) {
        dateWrap.innerHTML = '<i class="custom-icon bi-clock me-2"></i>' + translations[lang].startedDate;
    }
    
    // 4. Update about section
    const aboutH2 = document.getElementById('about-title');
    if (aboutH2) {
        aboutH2.innerHTML = translations[lang].aboutTitle;
    }
    
    const aboutText1 = document.getElementById('about-text-1');
    if (aboutText1) {
        aboutText1.innerHTML = translations[lang].aboutText1;
    }
    
    const aboutHeading1 = document.getElementById('about-heading-1');
    if (aboutHeading1) {
        aboutHeading1.innerHTML = translations[lang].aboutText2;
    }
    
    const aboutText2 = document.getElementById('about-text-2');
    if (aboutText2) {
        aboutText2.innerHTML = translations[lang].aboutText3;
    }
    
    const aboutHeading2 = document.getElementById('about-heading-2');
    if (aboutHeading2) {
        aboutHeading2.innerHTML = translations[lang].aboutText4;
    }
    
    const aboutText3 = document.getElementById('about-text-3');
    if (aboutText3) {
        aboutText3.innerHTML = translations[lang].aboutText5;
    }
    
    // 5. Update projects section
    const projectsH2 = document.getElementById('projects-title');
    if (projectsH2) {
        projectsH2.innerHTML = translations[lang].projectsTitle;
    }
    
    const projectsP = document.getElementById('projects-subtitle');
    if (projectsP) {
        projectsP.innerHTML = translations[lang].projectsSubtitle;
    }
    
    // Update project cards
    const projectElements = [
        {
            title: document.getElementById('project1-title'),
            text: document.getElementById('project1-text'),
            features: [
                document.getElementById('project1-feature1'),
                document.getElementById('project1-feature2'),
                document.getElementById('project1-feature3')
            ],
            keys: {
                title: 'project1Title',
                text: 'project1Text',
                features: ['project1Feature1', 'project1Feature2', 'project1Feature3']
            }
        },
        {
            title: document.getElementById('project2-title'),
            text: document.getElementById('project2-text'),
            features: [
                document.getElementById('project2-feature1'),
                document.getElementById('project2-feature2'),
                document.getElementById('project2-feature3')
            ],
            keys: {
                title: 'project2Title',
                text: 'project2Text',
                features: ['project2Feature1', 'project2Feature2', 'project2Feature3']
            }
        },
        {
            title: document.getElementById('project3-title'),
            text: document.getElementById('project3-text'),
            features: [
                document.getElementById('project3-feature1'),
                document.getElementById('project3-feature2'),
                document.getElementById('project3-feature3')
            ],
            keys: {
                title: 'project3Title',
                text: 'project3Text',
                features: ['project3Feature1', 'project3Feature2', 'project3Feature3']
            }
        }
    ];
    
    projectElements.forEach((project, index) => {
        if (project.title) {
            project.title.innerHTML = translations[lang][project.keys.title];
        }
        
        if (project.text) {
            project.text.innerHTML = translations[lang][project.keys.text];
        }
        
        project.features.forEach((feature, fIndex) => {
            if (feature && project.keys.features[fIndex]) {
                feature.innerHTML = translations[lang][project.keys.features[fIndex]];
            }
        });
    });
    
    // 6. Update team section
    const teamH2 = document.getElementById('team-title');
    if (teamH2) {
        teamH2.innerHTML = translations[lang].teamTitle;
    }
    
    const teamP = document.getElementById('team-subtitle');
    if (teamP) {
        teamP.innerHTML = translations[lang].teamSubtitle;
    }
    
    // Update team members
    const teamMembers = [
        {
            name: document.getElementById('team-member1-name'),
            role: document.getElementById('team-member1-role'),
            desc: document.getElementById('team-member1-desc'),
            keys: {
                name: 'teamMember1Name',
                role: 'teamMember1Role',
                desc: 'teamMember1Desc'
            }
        },
        {
            name: document.getElementById('team-member2-name'),
            role: document.getElementById('team-member2-role'),
            desc: document.getElementById('team-member2-desc'),
            keys: {
                name: 'teamMember2Name',
                role: 'teamMember2Role',
                desc: 'teamMember2Desc'
            }
        },
        {
            name: document.getElementById('team-member3-name'),
            role: document.getElementById('team-member3-role'),
            desc: document.getElementById('team-member3-desc'),
            keys: {
                name: 'teamMember3Name',
                role: 'teamMember3Role',
                desc: 'teamMember3Desc'
            }
        },
        {
            name: document.getElementById('team-member4-name'),
            role: document.getElementById('team-member4-role'),
            desc: document.getElementById('team-member4-desc'),
            keys: {
                name: 'teamMember4Name',
                role: 'teamMember4Role',
                desc: 'teamMember4Desc'
            }
        }
    ];
    
    teamMembers.forEach((member, index) => {
        if (member.name) {
            member.name.innerHTML = translations[lang][member.keys.name];
        }
        
        if (member.role) {
            member.role.innerHTML = translations[lang][member.keys.role];
        }
        
        if (member.desc) {
            member.desc.innerHTML = translations[lang][member.keys.desc];
        }
    });
    
    // 7. Update support section
    const supportH2 = document.getElementById('support-title');
    if (supportH2) {
        supportH2.innerHTML = translations[lang].supportTitle;
    }
    
    const supportP = document.getElementById('support-subtitle');
    if (supportP) {
        supportP.innerHTML = translations[lang].supportSubtitle;
    }
    
    // Update support options
    const supportOption1Title = document.getElementById('support-option1-title');
    if (supportOption1Title) {
        supportOption1Title.innerHTML = '<small>' + translations[lang].supportOption1Title + '</small><br/>' + translations[lang].supportOption1Subtitle;
    }
    
    const supportOption1Text = document.getElementById('support-option1-text');
    if (supportOption1Text) {
        supportOption1Text.innerHTML = translations[lang].supportOption1Text;
    }
    
    const supportOption1Features = [
        document.getElementById('support-option1-feature1'),
        document.getElementById('support-option1-feature2'),
        document.getElementById('support-option1-feature3'),
        document.getElementById('support-option1-feature4')
    ];
    const supportOption1FeatureKeys = ['supportOption1Feature1', 'supportOption1Feature2', 'supportOption1Feature3', 'supportOption1Feature4'];
    supportOption1Features.forEach((feature, index) => {
        if (feature) {
            feature.innerHTML = translations[lang][supportOption1FeatureKeys[index]];
        }
    });
    
    const supportOption1Button = document.getElementById('support-option1-button');
    if (supportOption1Button) {
        supportOption1Button.innerHTML = translations[lang].supportOption1Button;
    }
    
    const supportOption2Title = document.getElementById('support-option2-title');
    if (supportOption2Title) {
        supportOption2Title.innerHTML = '<small>' + translations[lang].supportOption2Title + '</small><br/>' + translations[lang].supportOption2Subtitle;
    }
    
    const supportOption2Text = document.getElementById('support-option2-text');
    if (supportOption2Text) {
        supportOption2Text.innerHTML = translations[lang].supportOption2Text;
    }
    
    const supportOption2Features = [
        document.getElementById('support-option2-feature1'),
        document.getElementById('support-option2-feature2'),
        document.getElementById('support-option2-feature3'),
        document.getElementById('support-option2-feature4')
    ];
    const supportOption2FeatureKeys = ['supportOption2Feature1', 'supportOption2Feature2', 'supportOption2Feature3', 'supportOption2Feature4'];
    supportOption2Features.forEach((feature, index) => {
        if (feature) {
            feature.innerHTML = translations[lang][supportOption2FeatureKeys[index]];
        }
    });
    
    const supportOption2Button = document.getElementById('support-option2-button');
    if (supportOption2Button) {
        supportOption2Button.innerHTML = translations[lang].supportOption2Button;
    }
    
    const supportWhyTitle = document.getElementById('support-why-title');
    if (supportWhyTitle) {
        supportWhyTitle.innerHTML = translations[lang].supportWhyTitle;
    }
    
    const supportWhyText1 = document.getElementById('support-why-text1');
    if (supportWhyText1) {
        supportWhyText1.innerHTML = translations[lang].supportWhyText1;
    }
    
    const supportWhyText2 = document.getElementById('support-why-text2');
    if (supportWhyText2) {
        supportWhyText2.innerHTML = translations[lang].supportWhyText2;
    }
    
    const supportWhyFeatures = [
        document.getElementById('support-why-feature1'),
        document.getElementById('support-why-feature2'),
        document.getElementById('support-why-feature3'),
        document.getElementById('support-why-feature4')
    ];
    const supportWhyFeatureKeys = ['supportWhyFeature1', 'supportWhyFeature2', 'supportWhyFeature3', 'supportWhyFeature4'];
    supportWhyFeatures.forEach((feature, index) => {
        if (feature) {
            feature.innerHTML = translations[lang][supportWhyFeatureKeys[index]];
        }
    });
    
    // 8. Update support page elements
    const supportPageWhyTitle = document.getElementById('support-page-why-title');
    if (supportPageWhyTitle) {
        supportPageWhyTitle.innerHTML = translations[lang].supportPageWhyTitle;
    }
    
    const supportPageWhyText = document.getElementById('support-page-why-text');
    if (supportPageWhyText) {
        supportPageWhyText.innerHTML = translations[lang].supportPageWhyText;
    }
    
    const supportPageFundsTitle = document.getElementById('support-page-funds-title');
    if (supportPageFundsTitle) {
        supportPageFundsTitle.innerHTML = translations[lang].supportPageFundsTitle;
    }
    
    const supportPageFundsText = document.getElementById('support-page-funds-text');
    if (supportPageFundsText) {
        supportPageFundsText.innerHTML = translations[lang].supportPageFundsText;
    }
    
    const supportPageThankTitle = document.getElementById('support-page-thank-title');
    if (supportPageThankTitle) {
        supportPageThankTitle.innerHTML = translations[lang].supportPageThankTitle;
    }
    
    const supportPageThankText = document.getElementById('support-page-thank-text');
    if (supportPageThankText) {
        supportPageThankText.innerHTML = translations[lang].supportPageThankText;
    }
    
    const supportPageOptionsTitle = document.getElementById('support-page-options-title');
    if (supportPageOptionsTitle) {
        supportPageOptionsTitle.innerHTML = translations[lang].supportPageOptionsTitle;
    }
    
    const supportPagePluginTitle = document.getElementById('support-page-plugin-title');
    if (supportPagePluginTitle) {
        supportPagePluginTitle.innerHTML = '<small>' + translations[lang].supportPagePluginTitle + '</small><br/>' + translations[lang].supportPagePluginSubtitle;
    }
    
    const supportPagePluginText = document.getElementById('support-page-plugin-text');
    if (supportPagePluginText) {
        supportPagePluginText.innerHTML = translations[lang].supportPagePluginText;
    }
    
    const supportPagePluginFeature1 = document.getElementById('support-page-plugin-feature1');
    if (supportPagePluginFeature1) {
        supportPagePluginFeature1.innerHTML = translations[lang].supportPagePluginFeature1;
    }
    
    const supportPagePluginFeature2 = document.getElementById('support-page-plugin-feature2');
    if (supportPagePluginFeature2) {
        supportPagePluginFeature2.innerHTML = translations[lang].supportPagePluginFeature2;
    }
    
    const supportPagePluginButton = document.getElementById('support-page-plugin-button');
    if (supportPagePluginButton) {
        supportPagePluginButton.innerHTML = translations[lang].supportPagePluginButton;
    }
    
    const supportPageServerTitle = document.getElementById('support-page-server-title');
    if (supportPageServerTitle) {
        supportPageServerTitle.innerHTML = '<small>' + translations[lang].supportPageServerTitle + '</small><br/>' + translations[lang].supportPageServerSubtitle;
    }
    
    const supportPageServerText = document.getElementById('support-page-server-text');
    if (supportPageServerText) {
        supportPageServerText.innerHTML = translations[lang].supportPageServerText;
    }
    
    const supportPageServerFeature1 = document.getElementById('support-page-server-feature1');
    if (supportPageServerFeature1) {
        supportPageServerFeature1.innerHTML = translations[lang].supportPageServerFeature1;
    }
    
    const supportPageServerFeature2 = document.getElementById('support-page-server-feature2');
    if (supportPageServerFeature2) {
        supportPageServerFeature2.innerHTML = translations[lang].supportPageServerFeature2;
    }
    
    const supportPageServerButton = document.getElementById('support-page-server-button');
    if (supportPageServerButton) {
        supportPageServerButton.innerHTML = translations[lang].supportPageServerButton;
    }
    
    // 9. Update contact section
    const contactH2 = document.getElementById('contact-title');
    if (contactH2) {
        contactH2.innerHTML = translations[lang].contactTitle;
    }
    
    const contactFormTab = document.getElementById('contact-form-tab');
    if (contactFormTab) {
        contactFormTab.innerHTML = translations[lang].contactFormTab;
    }
    
    // Update form placeholders
    const contactName = document.getElementById('contact-name');
    if (contactName) contactName.placeholder = translations[lang].contactFormName;
    
    const contactEmail = document.getElementById('contact-email');
    if (contactEmail) contactEmail.placeholder = translations[lang].contactFormEmail;
    
    const contactCompany = document.getElementById('contact-company');
    if (contactCompany) contactCompany.placeholder = translations[lang].contactFormCompany;
    
    const contactMessage = document.getElementById('contact-message');
    if (contactMessage) contactMessage.placeholder = translations[lang].contactFormMessage;
    
    const contactButton = document.getElementById('contact-button');
    if (contactButton) {
        contactButton.textContent = translations[lang].contactFormButton;
    }
    
    // 9. Update footer
    const footerH2 = document.getElementById('footer-title');
    if (footerH2) {
        footerH2.innerHTML = translations[lang].footerTitle;
    }
    
    const footerLinksTitle = document.getElementById('footer-links-title');
    if (footerLinksTitle) {
        footerLinksTitle.innerHTML = translations[lang].footerLinks;
    }
    
    // Update footer links
    const footerLinkElements = [
        { id: 'footer-link-home', key: 'home' },
        { id: 'footer-link-about', key: 'about' },
        { id: 'footer-link-projects', key: 'projects' },
        { id: 'footer-link-team', key: 'team' },
        { id: 'footer-link-support', key: 'support' },
        { id: 'footer-link-contact', key: 'contact' }
    ];
    
    footerLinkElements.forEach(element => {
        const footerLink = document.getElementById(element.id);
        if (footerLink) {
            footerLink.innerHTML = translations[lang][element.key];
        }
    });
    
    const footerQuestionTitle = document.getElementById('footer-question-title');
    if (footerQuestionTitle) {
        footerQuestionTitle.innerHTML = translations[lang].footerQuestion;
    }
    
    const footerAdvertiseText = document.getElementById('footer-advertise-text');
    if (footerAdvertiseText) {
        footerAdvertiseText.innerHTML = translations[lang].footerAdvertise;
    }
    
    const copyrightText = document.getElementById('footer-copyright-text');
    if (copyrightText) {
        copyrightText.innerHTML = translations[lang].footerCopyright;
    }
    
    // 10. Save current language preference
    localStorage.setItem('preferredLanguage', lang);
}

// Update language toggle button text
function updateLanguageButton(lang) {
    const languageToggle = document.getElementById('language-toggle');
    if (languageToggle) {
        const newText = lang === 'en' ? 'English' : '中文';
        languageToggle.textContent = newText;
    }
}

// Initialize language switcher
function initLanguageSwitcher() {
    // Get saved language or default to English
    const savedLang = localStorage.getItem('preferredLanguage') || 'en';
    
    // Set initial language
    changeLanguage(savedLang);
    
    // Update language toggle button text
    updateLanguageButton(savedLang);
}

// Global function for manual language switching
window.switchLanguageManually = function() {
    const currentLang = localStorage.getItem('preferredLanguage') || 'en';
    const newLang = currentLang === 'en' ? 'zh' : 'en';
    
    // Call changeLanguage with the new language
    changeLanguage(newLang);
    
    // Update the language button
    updateLanguageButton(newLang);
};

// Initialize when DOM is loaded
function initializeLanguageSwitcher() {
    initLanguageSwitcher();
}

// Use jQuery's document ready for better cross-browser compatibility
if (typeof jQuery !== 'undefined') {
    $(document).ready(initializeLanguageSwitcher);
} else {
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initializeLanguageSwitcher);
    } else {
        initializeLanguageSwitcher();
    }
}
