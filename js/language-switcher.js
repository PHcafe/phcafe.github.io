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
        footerCopyright: "Copyright © 2020 - 2026 Punk Heart Team"
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
        footerCopyright: "版权所有 © 2020 - 2026 Punk Heart团队"
    }
};

// Function to change language
function changeLanguage(lang) {
    // Update HTML elements with translations
    const headerWelcome = document.querySelector('.site-header p strong');
    if (headerWelcome) {
        headerWelcome.textContent = translations[lang].welcome;
    }
    
    // Update navigation links
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    if (navLinks.length > 0) {
        if (navLinks[0]) navLinks[0].textContent = translations[lang].home;
        if (navLinks[1]) navLinks[1].textContent = translations[lang].about;
        if (navLinks[2]) navLinks[2].textContent = translations[lang].projects;
        if (navLinks[3]) navLinks[3].textContent = translations[lang].team;
        if (navLinks[4]) navLinks[4].textContent = translations[lang].support;
        if (navLinks[5]) navLinks[5].textContent = translations[lang].contact;
    }
    
    // Update support.html specific elements
    const supportHeroH1 = document.querySelector('.hero-section h1');
    if (supportHeroH1 && supportHeroH1.textContent === 'Support PunkHeart') {
        supportHeroH1.textContent = translations[lang].supportTitle;
    }
    
    const supportHeroSmall = document.querySelector('.hero-section small');
    if (supportHeroSmall && supportHeroSmall.textContent === 'Support Our Development') {
        supportHeroSmall.textContent = translations[lang].supportSubtitle;
    }
    
    const supportHeroButton = document.querySelector('.hero-section .custom-btn');
    if (supportHeroButton && supportHeroButton.textContent === 'Learn More') {
        supportHeroButton.textContent = translations[lang].heroButton;
    }
    
    // Update contact button
    const contactBtn = document.querySelector('.btn.custom-btn.d-lg-none');
    if (contactBtn) {
        contactBtn.textContent = translations[lang].contactUs;
    }
    
    // Update hero section
    const heroSmall = document.querySelector('.hero-section small');
    if (heroSmall) heroSmall.textContent = translations[lang].heroSubtitle;
    
    const heroH1 = document.querySelector('.hero-section h1');
    if (heroH1) heroH1.textContent = translations[lang].heroTitle;
    
    const heroBtn = document.querySelector('.hero-section .custom-btn');
    if (heroBtn) heroBtn.textContent = translations[lang].heroButton;
    
    const dateWrap = document.querySelector('.date-wrap h5');
    if (dateWrap) {
        dateWrap.innerHTML = '<i class="custom-icon bi-clock me-2"></i>' + translations[lang].startedDate;
    }
    
    // Update about section
    const aboutH2 = document.querySelector('#section_2 h2');
    if (aboutH2) aboutH2.textContent = translations[lang].aboutTitle;
    
    const aboutTexts = document.querySelectorAll('#section_2 p');
    if (aboutTexts.length > 0) {
        if (aboutTexts[0]) aboutTexts[0].textContent = translations[lang].aboutText1;
        if (aboutTexts[1]) aboutTexts[1].textContent = translations[lang].aboutText3;
        if (aboutTexts[2]) aboutTexts[2].textContent = translations[lang].aboutText5;
    }
    
    const aboutHeadings = document.querySelectorAll('#section_2 h6');
    if (aboutHeadings.length > 0) {
        if (aboutHeadings[0]) aboutHeadings[0].textContent = translations[lang].aboutText2;
        if (aboutHeadings[1]) aboutHeadings[1].textContent = translations[lang].aboutText4;
    }
    
    // Update projects section
    const projectsH2 = document.querySelector('#section_3 h2');
    if (projectsH2) projectsH2.textContent = translations[lang].projectsTitle;
    
    const projectsP = document.querySelector('#section_3 p');
    if (projectsP) projectsP.textContent = translations[lang].projectsSubtitle;
    
    const projectCards = document.querySelectorAll('#section_3 .pricing-thumb');
    if (projectCards.length > 0) {
        if (projectCards[0]) {
            const h3 = projectCards[0].querySelector('h3');
            if (h3) h3.textContent = translations[lang].project1Title;
            const p = projectCards[0].querySelector('p');
            if (p) p.textContent = translations[lang].project1Text;
            const features = projectCards[0].querySelectorAll('.pricing-list-item');
            if (features.length > 0) {
                if (features[0]) features[0].textContent = translations[lang].project1Feature1;
                if (features[1]) features[1].textContent = translations[lang].project1Feature2;
                if (features[2]) features[2].textContent = translations[lang].project1Feature3;
            }
        }
        
        if (projectCards[1]) {
            const h3 = projectCards[1].querySelector('h3');
            if (h3) h3.textContent = translations[lang].project2Title;
            const p = projectCards[1].querySelector('p');
            if (p) p.textContent = translations[lang].project2Text;
            const features = projectCards[1].querySelectorAll('.pricing-list-item');
            if (features.length > 0) {
                if (features[0]) features[0].textContent = translations[lang].project2Feature1;
                if (features[1]) features[1].textContent = translations[lang].project2Feature2;
                if (features[2]) features[2].textContent = translations[lang].project2Feature3;
            }
        }
        
        if (projectCards[2]) {
            const h3 = projectCards[2].querySelector('h3');
            if (h3) h3.textContent = translations[lang].project3Title;
            const p = projectCards[2].querySelector('p');
            if (p) p.textContent = translations[lang].project3Text;
            const features = projectCards[2].querySelectorAll('.pricing-list-item');
            if (features.length > 0) {
                if (features[0]) features[0].textContent = translations[lang].project3Feature1;
                if (features[1]) features[1].textContent = translations[lang].project3Feature2;
                if (features[2]) features[2].textContent = translations[lang].project3Feature3;
            }
        }
    }
    
    // Update team section
    const teamH2 = document.querySelector('#section_4 h2');
    if (teamH2) teamH2.textContent = translations[lang].teamTitle;
    
    const teamP = document.querySelector('#section_4 p');
    if (teamP) teamP.textContent = translations[lang].teamSubtitle;
    
    const teamMembers = document.querySelectorAll('#section_4 .pricing-thumb');
    if (teamMembers.length > 0) {
        if (teamMembers[0]) {
            const h3 = teamMembers[0].querySelector('h3');
            if (h3) h3.textContent = translations[lang].teamMember1Name;
            const ps = teamMembers[0].querySelectorAll('p');
            if (ps[0]) ps[0].textContent = translations[lang].teamMember1Role;
            if (ps[1]) ps[1].textContent = translations[lang].teamMember1Desc;
        }
        
        if (teamMembers[1]) {
            const h3 = teamMembers[1].querySelector('h3');
            if (h3) h3.textContent = translations[lang].teamMember2Name;
            const ps = teamMembers[1].querySelectorAll('p');
            if (ps[0]) ps[0].textContent = translations[lang].teamMember2Role;
            if (ps[1]) ps[1].textContent = translations[lang].teamMember2Desc;
        }
        
        if (teamMembers[2]) {
            const h3 = teamMembers[2].querySelector('h3');
            if (h3) h3.textContent = translations[lang].teamMember3Name;
            const ps = teamMembers[2].querySelectorAll('p');
            if (ps[0]) ps[0].textContent = translations[lang].teamMember3Role;
            if (ps[1]) ps[1].textContent = translations[lang].teamMember3Desc;
        }
        
        if (teamMembers[3]) {
            const h3 = teamMembers[3].querySelector('h3');
            if (h3) h3.textContent = translations[lang].teamMember4Name;
            const ps = teamMembers[3].querySelectorAll('p');
            if (ps[0]) ps[0].textContent = translations[lang].teamMember4Role;
            if (ps[1]) ps[1].textContent = translations[lang].teamMember4Desc;
        }
    }
    
    // Update support section
    const supportH2 = document.querySelector('#section_5 h2');
    if (supportH2) supportH2.textContent = translations[lang].supportTitle;
    
    const supportP = document.querySelector('#section_5 p');
    if (supportP) supportP.textContent = translations[lang].supportSubtitle;
    
    const supportOptions = document.querySelectorAll('#section_5 .pricing-thumb');
    if (supportOptions.length > 0) {
        if (supportOptions[0]) {
            const h3 = supportOptions[0].querySelector('h3');
            if (h3) h3.innerHTML = '<small>Support Plugin Development</small><br/>Any Amount';
            const ps = supportOptions[0].querySelectorAll('p');
            if (ps[0]) ps[0].textContent = translations[lang].supportOption1Text;
            const features = supportOptions[0].querySelectorAll('.pricing-list-item');
            if (features.length > 0) {
                if (features[0]) features[0].textContent = translations[lang].supportOption1Feature1;
                if (features[1]) features[1].textContent = translations[lang].supportOption1Feature2;
                if (features[2]) features[2].textContent = translations[lang].supportOption1Feature3;
                if (features[3]) features[3].textContent = translations[lang].supportOption1Feature4;
            }
            const linkFx = supportOptions[0].querySelector('.link-fx-1 span');
            if (linkFx) linkFx.textContent = translations[lang].supportOption1Button;
        }
        
        if (supportOptions[1]) {
            const h3 = supportOptions[1].querySelector('h3');
            if (h3) h3.innerHTML = '<small>Support Server Development</small><br/>Any Amount';
            const ps = supportOptions[1].querySelectorAll('p');
            if (ps[0]) ps[0].textContent = translations[lang].supportOption2Text;
            const features = supportOptions[1].querySelectorAll('.pricing-list-item');
            if (features.length > 0) {
                if (features[0]) features[0].textContent = translations[lang].supportOption2Feature1;
                if (features[1]) features[1].textContent = translations[lang].supportOption2Feature2;
                if (features[2]) features[2].textContent = translations[lang].supportOption2Feature3;
                if (features[3]) features[3].textContent = translations[lang].supportOption2Feature4;
            }
            const linkFx = supportOptions[1].querySelector('.link-fx-1 span');
            if (linkFx) linkFx.textContent = translations[lang].supportOption2Button;
        }
        
        if (supportOptions[2]) {
            const h3 = supportOptions[2].querySelector('h3');
            if (h3) h3.textContent = translations[lang].supportWhyTitle;
            const ps = supportOptions[2].querySelectorAll('p');
            if (ps[0]) ps[0].textContent = translations[lang].supportWhyText1;
            if (ps[1]) ps[1].textContent = translations[lang].supportWhyText2;
            const features = supportOptions[2].querySelectorAll('.pricing-list-item');
            if (features.length > 0) {
                if (features[0]) features[0].textContent = translations[lang].supportWhyFeature1;
                if (features[1]) features[1].textContent = translations[lang].supportWhyFeature2;
                if (features[2]) features[2].textContent = translations[lang].supportWhyFeature3;
                if (features[3]) features[3].textContent = translations[lang].supportWhyFeature4;
            }
        }
    }
    
    // Update contact section
    const contactH2 = document.querySelector('#section_6 h2');
    if (contactH2) contactH2.textContent = translations[lang].contactTitle;
    
    const contactFormTab = document.querySelector('#nav-ContactForm-tab h5');
    if (contactFormTab) contactFormTab.textContent = translations[lang].contactFormTab;
    
    const contactMapTab = document.querySelector('#nav-ContactMap-tab h5');
    if (contactMapTab) contactMapTab.textContent = translations[lang].contactMapTab;
    
    const contactName = document.querySelector('#contact-name');
    if (contactName) contactName.placeholder = translations[lang].contactFormName;
    
    const contactEmail = document.querySelector('#contact-email');
    if (contactEmail) contactEmail.placeholder = translations[lang].contactFormEmail;
    
    const contactCompany = document.querySelector('#contact-company');
    if (contactCompany) contactCompany.placeholder = translations[lang].contactFormCompany;
    
    const contactMessage = document.querySelector('#contact-message');
    if (contactMessage) contactMessage.placeholder = translations[lang].contactFormMessage;
    
    const contactButton = document.querySelector('.form-control.btn-pulse');
    if (contactButton) contactButton.textContent = translations[lang].contactFormButton;
    
    // Update footer
    const footerH2 = document.querySelector('.site-footer-top h2');
    if (footerH2) footerH2.textContent = translations[lang].footerTitle;
    
    const footerTitle = document.querySelector('.site-footer-title');
    if (footerTitle) footerTitle.textContent = translations[lang].footerLinks;
    
    const footerLinks = document.querySelectorAll('.site-footer-link');
    if (footerLinks.length > 0) {
        if (footerLinks[0]) footerLinks[0].textContent = translations[lang].home;
        if (footerLinks[1]) footerLinks[1].textContent = translations[lang].about;
        if (footerLinks[2]) footerLinks[2].textContent = translations[lang].projects;
        if (footerLinks[3]) footerLinks[3].textContent = translations[lang].team;
        if (footerLinks[4]) footerLinks[4].textContent = translations[lang].support;
        if (footerLinks[5]) footerLinks[5].textContent = translations[lang].contact;
    }
    
    const footerQuestion = document.querySelector('.site-footer-title:nth-of-type(2)');
    if (footerQuestion) footerQuestion.textContent = translations[lang].footerQuestion;
    
    const footerAdvertise = document.querySelector('.site-footer p:nth-of-type(2)');
    if (footerAdvertise) footerAdvertise.textContent = translations[lang].footerAdvertise;
    
    const copyrightText = document.querySelector('.copyright-text');
    if (copyrightText) copyrightText.textContent = translations[lang].footerCopyright;
    
    // Save current language preference
    localStorage.setItem('preferredLanguage', lang);
}

// Initialize language switcher
function initLanguageSwitcher() {
    // Get saved language or default to English
    const savedLang = localStorage.getItem('preferredLanguage') || 'en';
    
    // Set initial language
    changeLanguage(savedLang);
    
    // Update language toggle button text
    updateLanguageButton(savedLang);
    
    // Add click event listener to language toggle button
    const languageToggle = document.querySelector('#language-toggle');
    if (languageToggle) {
        languageToggle.addEventListener('click', function() {
            const currentLang = localStorage.getItem('preferredLanguage') || 'en';
            const newLang = currentLang === 'en' ? 'zh' : 'en';
            changeLanguage(newLang);
            updateLanguageButton(newLang);
        });
    }
}

// Update language toggle button text
function updateLanguageButton(lang) {
    const languageToggle = document.querySelector('#language-toggle');
    if (languageToggle) {
        languageToggle.textContent = lang === 'en' ? 'English' : '中文';
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', initLanguageSwitcher);