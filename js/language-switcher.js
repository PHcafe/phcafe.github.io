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
    console.log('=== changeLanguage function called with lang:', lang, '===');
    
    // 1. Update header welcome message
    console.log('1. Updating header welcome message...');
    const headerWelcome = document.querySelector('.site-header p strong');
    if (headerWelcome) {
        console.log('✅ Found header welcome:', headerWelcome.textContent);
        headerWelcome.textContent = translations[lang].welcome;
        console.log('✅ Updated to:', translations[lang].welcome);
    } else {
        console.log('❌ Header welcome not found');
    }
    
    // 2. Update navigation links
    console.log('2. Updating navigation links...');
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    console.log('Found nav links:', navLinks.length);
    
    // Skip language toggle button (last one)
    const navLinksCount = Math.min(navLinks.length, 6);
    const navKeys = ['home', 'about', 'projects', 'team', 'support', 'contact'];
    
    for (let i = 0; i < navLinksCount; i++) {
        if (navLinks[i]) {
            console.log('✅ Nav link', i, 'before:', navLinks[i].textContent);
            navLinks[i].textContent = translations[lang][navKeys[i]];
            console.log('✅ Nav link', i, 'after:', translations[lang][navKeys[i]]);
        }
    }
    
    // 3. Update hero section (for index.html)
    console.log('3. Updating hero section...');
    const heroSmall = document.querySelector('.hero-section small');
    if (heroSmall) {
        console.log('✅ Found hero small:', heroSmall.textContent);
        heroSmall.textContent = translations[lang].heroSubtitle;
        console.log('✅ Updated to:', translations[lang].heroSubtitle);
    } else {
        console.log('❌ Hero small not found');
    }
    
    const heroH1 = document.querySelector('.hero-section h1');
    if (heroH1) {
        console.log('✅ Found hero H1:', heroH1.textContent);
        // Check if it's support.html
        if (heroH1.textContent === 'Support PunkHeart') {
            heroH1.textContent = translations[lang].supportTitle;
        } else {
            heroH1.textContent = translations[lang].heroTitle;
        }
        console.log('✅ Updated to:', heroH1.textContent);
    } else {
        console.log('❌ Hero H1 not found');
    }
    
    const heroBtn = document.querySelector('.hero-section .custom-btn');
    if (heroBtn) {
        console.log('✅ Found hero button:', heroBtn.textContent);
        if (heroBtn.textContent === 'Learn More') {
            heroBtn.textContent = translations[lang].heroButton;
        } else {
            heroBtn.textContent = translations[lang].heroButton;
        }
        console.log('✅ Updated to:', heroBtn.textContent);
    } else {
        console.log('❌ Hero button not found');
    }
    
    // 4. Update date wrap
    console.log('4. Updating date wrap...');
    const dateWrap = document.querySelector('.date-wrap h5');
    if (dateWrap) {
        console.log('✅ Found date wrap:', dateWrap.textContent);
        dateWrap.innerHTML = '<i class="custom-icon bi-clock me-2"></i>' + translations[lang].startedDate;
        console.log('✅ Updated to:', translations[lang].startedDate);
    } else {
        console.log('❌ Date wrap not found');
    }
    
    // 5. Update about section
    console.log('5. Updating about section...');
    const aboutH2 = document.querySelector('#section_2 h2');
    if (aboutH2) {
        console.log('✅ Found about H2:', aboutH2.textContent);
        aboutH2.textContent = translations[lang].aboutTitle;
        console.log('✅ Updated to:', translations[lang].aboutTitle);
    } else {
        console.log('❌ About H2 not found');
    }
    
    const aboutTexts = document.querySelectorAll('#section_2 p');
    if (aboutTexts.length > 0) {
        if (aboutTexts[0]) {
            console.log('✅ About text 1 before:', aboutTexts[0].textContent.substring(0, 50) + '...');
            aboutTexts[0].textContent = translations[lang].aboutText1;
            console.log('✅ About text 1 after:', translations[lang].aboutText1.substring(0, 50) + '...');
        }
        if (aboutTexts[1]) {
            console.log('✅ About text 2 before:', aboutTexts[1].textContent.substring(0, 50) + '...');
            aboutTexts[1].textContent = translations[lang].aboutText3;
            console.log('✅ About text 2 after:', translations[lang].aboutText3.substring(0, 50) + '...');
        }
        if (aboutTexts[2]) {
            console.log('✅ About text 3 before:', aboutTexts[2].textContent);
            aboutTexts[2].textContent = translations[lang].aboutText5;
            console.log('✅ About text 3 after:', translations[lang].aboutText5);
        }
    }
    
    const aboutHeadings = document.querySelectorAll('#section_2 h6');
    if (aboutHeadings.length > 0) {
        if (aboutHeadings[0]) {
            console.log('✅ About heading 1 before:', aboutHeadings[0].textContent);
            aboutHeadings[0].textContent = translations[lang].aboutText2;
            console.log('✅ About heading 1 after:', translations[lang].aboutText2);
        }
        if (aboutHeadings[1]) {
            console.log('✅ About heading 2 before:', aboutHeadings[1].textContent);
            aboutHeadings[1].textContent = translations[lang].aboutText4;
            console.log('✅ About heading 2 after:', translations[lang].aboutText4);
        }
    }
    
    // 6. Update projects section
    console.log('6. Updating projects section...');
    const projectsH2 = document.querySelector('#section_3 h2');
    if (projectsH2) {
        console.log('✅ Found projects H2:', projectsH2.textContent);
        projectsH2.textContent = translations[lang].projectsTitle;
        console.log('✅ Updated to:', translations[lang].projectsTitle);
    }
    
    const projectsP = document.querySelector('#section_3 p');
    if (projectsP) {
        console.log('✅ Found projects P:', projectsP.textContent);
        projectsP.textContent = translations[lang].projectsSubtitle;
        console.log('✅ Updated to:', translations[lang].projectsSubtitle);
    }
    
    const projectCards = document.querySelectorAll('#section_3 .pricing-thumb');
    if (projectCards.length > 0) {
        const projectData = [
            { title: 'project1Title', text: 'project1Text', features: ['project1Feature1', 'project1Feature2', 'project1Feature3'] },
            { title: 'project2Title', text: 'project2Text', features: ['project2Feature1', 'project2Feature2', 'project2Feature3'] },
            { title: 'project3Title', text: 'project3Text', features: ['project3Feature1', 'project3Feature2', 'project3Feature3'] }
        ];
        
        projectCards.forEach((card, index) => {
            if (projectData[index]) {
                const data = projectData[index];
                
                const h3 = card.querySelector('h3');
                if (h3) {
                    console.log('✅ Project', index+1, 'title before:', h3.textContent);
                    h3.textContent = translations[lang][data.title];
                    console.log('✅ Project', index+1, 'title after:', translations[lang][data.title]);
                }
                
                const p = card.querySelector('p');
                if (p) {
                    console.log('✅ Project', index+1, 'text before:', p.textContent.substring(0, 50) + '...');
                    p.textContent = translations[lang][data.text];
                    console.log('✅ Project', index+1, 'text after:', translations[lang][data.text].substring(0, 50) + '...');
                }
                
                const features = card.querySelectorAll('.pricing-list-item');
                features.forEach((feature, fIndex) => {
                    if (data.features[fIndex]) {
                        console.log('✅ Project', index+1, 'feature', fIndex+1, 'before:', feature.textContent);
                        feature.textContent = translations[lang][data.features[fIndex]];
                        console.log('✅ Project', index+1, 'feature', fIndex+1, 'after:', translations[lang][data.features[fIndex]]);
                    }
                });
            }
        });
    }
    
    // 7. Update team section
    console.log('7. Updating team section...');
    const teamH2 = document.querySelector('#section_4 h2');
    if (teamH2) {
        console.log('✅ Found team H2:', teamH2.textContent);
        teamH2.textContent = translations[lang].teamTitle;
        console.log('✅ Updated to:', translations[lang].teamTitle);
    }
    
    const teamP = document.querySelector('#section_4 p');
    if (teamP) {
        console.log('✅ Found team P:', teamP.textContent);
        teamP.textContent = translations[lang].teamSubtitle;
        console.log('✅ Updated to:', translations[lang].teamSubtitle);
    }
    
    const teamMembers = document.querySelectorAll('#section_4 .pricing-thumb');
    if (teamMembers.length > 0) {
        const teamData = [
            { name: 'teamMember1Name', role: 'teamMember1Role', desc: 'teamMember1Desc' },
            { name: 'teamMember2Name', role: 'teamMember2Role', desc: 'teamMember2Desc' },
            { name: 'teamMember3Name', role: 'teamMember3Role', desc: 'teamMember3Desc' },
            { name: 'teamMember4Name', role: 'teamMember4Role', desc: 'teamMember4Desc' }
        ];
        
        teamMembers.forEach((member, index) => {
            if (teamData[index]) {
                const data = teamData[index];
                
                const h3 = member.querySelector('h3');
                if (h3) {
                    console.log('✅ Team member', index+1, 'name before:', h3.textContent);
                    h3.textContent = translations[lang][data.name];
                    console.log('✅ Team member', index+1, 'name after:', translations[lang][data.name]);
                }
                
                const ps = member.querySelectorAll('p');
                if (ps[0]) {
                    console.log('✅ Team member', index+1, 'role before:', ps[0].textContent);
                    ps[0].textContent = translations[lang][data.role];
                    console.log('✅ Team member', index+1, 'role after:', translations[lang][data.role]);
                }
                if (ps[1]) {
                    console.log('✅ Team member', index+1, 'desc before:', ps[1].textContent.substring(0, 50) + '...');
                    ps[1].textContent = translations[lang][data.desc];
                    console.log('✅ Team member', index+1, 'desc after:', translations[lang][data.desc]);
                }
            }
        });
    }
    
    // 8. Update support section
    console.log('8. Updating support section...');
    const supportH2 = document.querySelector('#section_5 h2');
    if (supportH2) {
        console.log('✅ Found support H2:', supportH2.textContent);
        supportH2.textContent = translations[lang].supportTitle;
        console.log('✅ Updated to:', translations[lang].supportTitle);
    }
    
    const supportP = document.querySelector('#section_5 p');
    if (supportP) {
        console.log('✅ Found support P:', supportP.textContent);
        supportP.textContent = translations[lang].supportSubtitle;
        console.log('✅ Updated to:', translations[lang].supportSubtitle);
    }
    
    // 9. Update contact section
    console.log('9. Updating contact section...');
    const contactH2 = document.querySelector('#section_6 h2');
    if (contactH2) {
        console.log('✅ Found contact H2:', contactH2.textContent);
        contactH2.textContent = translations[lang].contactTitle;
        console.log('✅ Updated to:', translations[lang].contactTitle);
    }
    
    const contactFormTab = document.querySelector('#nav-ContactForm-tab h5');
    if (contactFormTab) {
        console.log('✅ Found contact form tab:', contactFormTab.textContent);
        contactFormTab.textContent = translations[lang].contactFormTab;
        console.log('✅ Updated to:', translations[lang].contactFormTab);
    }
    
    // Update form placeholders
    const contactName = document.querySelector('#contact-name');
    if (contactName) contactName.placeholder = translations[lang].contactFormName;
    
    const contactEmail = document.querySelector('#contact-email');
    if (contactEmail) contactEmail.placeholder = translations[lang].contactFormEmail;
    
    const contactCompany = document.querySelector('#contact-company');
    if (contactCompany) contactCompany.placeholder = translations[lang].contactFormCompany;
    
    const contactMessage = document.querySelector('#contact-message');
    if (contactMessage) contactMessage.placeholder = translations[lang].contactFormMessage;
    
    const contactButton = document.querySelector('.form-control.btn-pulse');
    if (contactButton) {
        console.log('✅ Found contact button:', contactButton.textContent);
        contactButton.textContent = translations[lang].contactFormButton;
        console.log('✅ Updated to:', translations[lang].contactFormButton);
    }
    
    // 10. Update footer
    console.log('10. Updating footer...');
    const footerH2 = document.querySelector('.site-footer-top h2');
    if (footerH2) {
        console.log('✅ Found footer H2:', footerH2.textContent);
        footerH2.textContent = translations[lang].footerTitle;
        console.log('✅ Updated to:', translations[lang].footerTitle);
    }
    
    const footerTitle = document.querySelector('.site-footer-title');
    if (footerTitle) {
        console.log('✅ Found footer title:', footerTitle.textContent);
        footerTitle.textContent = translations[lang].footerLinks;
        console.log('✅ Updated to:', translations[lang].footerLinks);
    }
    
    const footerLinks = document.querySelectorAll('.site-footer-link');
    if (footerLinks.length > 0) {
        const footerNavKeys = ['home', 'about', 'projects', 'team', 'support', 'contact'];
        footerLinks.forEach((link, index) => {
            if (footerNavKeys[index]) {
                console.log('✅ Footer link', index, 'before:', link.textContent);
                link.textContent = translations[lang][footerNavKeys[index]];
                console.log('✅ Footer link', index, 'after:', translations[lang][footerNavKeys[index]]);
            }
        });
    }
    
    const footerQuestion = document.querySelector('.site-footer-title:nth-of-type(2)');
    if (footerQuestion) {
        console.log('✅ Found footer question:', footerQuestion.textContent);
        footerQuestion.textContent = translations[lang].footerQuestion;
        console.log('✅ Updated to:', translations[lang].footerQuestion);
    }
    
    const footerAdvertise = document.querySelector('.site-footer p:nth-of-type(2)');
    if (footerAdvertise) {
        console.log('✅ Found footer advertise:', footerAdvertise.textContent.substring(0, 50) + '...');
        footerAdvertise.textContent = translations[lang].footerAdvertise;
        console.log('✅ Updated to:', translations[lang].footerAdvertise.substring(0, 50) + '...');
    }
    
    const copyrightText = document.querySelector('.copyright-text');
    if (copyrightText) {
        console.log('✅ Found copyright text:', copyrightText.textContent);
        copyrightText.textContent = translations[lang].footerCopyright;
        console.log('✅ Updated to:', translations[lang].footerCopyright);
    }
    
    // 11. Save current language preference
    console.log('11. Saving language preference...');
    localStorage.setItem('preferredLanguage', lang);
    console.log('✅ Language preference saved to:', lang);
    
    console.log('=== changeLanguage function completed ===');
}

// Initialize language switcher
function initLanguageSwitcher() {
    console.log('=== initLanguageSwitcher function called ===');
    
    // Get saved language or default to English
    const savedLang = localStorage.getItem('preferredLanguage') || 'en';
    console.log('Saved language:', savedLang);
    
    // Set initial language
    console.log('Setting initial language:', savedLang);
    changeLanguage(savedLang);
    
    // Update language toggle button text
    console.log('Updating language button text for:', savedLang);
    updateLanguageButton(savedLang);
    
    // Add click event listener to language toggle button
    console.log('Looking for language toggle button...');
    const languageToggle = document.querySelector('#language-toggle');
    
    if (languageToggle) {
        console.log('✅ Language toggle button found:', languageToggle);
        console.log('Button current text:', languageToggle.textContent);
        console.log('Button ID:', languageToggle.id);
        console.log('Button classes:', languageToggle.className);
        
        // Remove any existing event listeners to avoid duplicates
        console.log('Removing existing event listeners...');
        const newButton = languageToggle.cloneNode(true);
        languageToggle.parentNode.replaceChild(newButton, languageToggle);
        
        // Add new event listener to the cloned button
        console.log('Adding new click event listener...');
        newButton.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            console.log('🎉 Language toggle button clicked!');
            const currentLang = localStorage.getItem('preferredLanguage') || 'en';
            console.log('Current language:', currentLang);
            const newLang = currentLang === 'en' ? 'zh' : 'en';
            console.log('Switching to language:', newLang);
            changeLanguage(newLang);
            updateLanguageButton(newLang);
        });
        
        console.log('✅ Event listener added successfully!');
    } else {
        console.log('❌ Language toggle button not found');
        // Try to find all buttons to see what's available
        const allButtons = document.querySelectorAll('button');
        console.log('All buttons found:', allButtons.length);
        allButtons.forEach((btn, index) => {
            console.log(`Button ${index}:`, btn.id, btn.className, btn.textContent);
        });
    }
    
    console.log('=== initLanguageSwitcher function completed ===');
}

// Update language toggle button text
function updateLanguageButton(lang) {
    console.log('=== updateLanguageButton function called ===');
    console.log('Updating button for language:', lang);
    
    const languageToggle = document.querySelector('#language-toggle');
    
    if (languageToggle) {
        console.log('✅ Found button to update:', languageToggle);
        const newText = lang === 'en' ? 'English' : '中文';
        console.log('Changing button text from:', languageToggle.textContent, 'to:', newText);
        languageToggle.textContent = newText;
        console.log('✅ Button text updated successfully!');
    } else {
        console.log('❌ Could not find language toggle button for update');
    }
    
    console.log('=== updateLanguageButton function completed ===');
}

// Initialize when DOM is loaded
console.log('language-switcher.js loaded');

function initializeLanguageSwitcher() {
    console.log('Initializing language switcher');
    initLanguageSwitcher();
}

// Use jQuery's document ready for better cross-browser compatibility
if (typeof jQuery !== 'undefined') {
    console.log('jQuery available, using document.ready');
    $(document).ready(initializeLanguageSwitcher);
} else {
    console.log('jQuery not available, using DOMContentLoaded');
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initializeLanguageSwitcher);
    } else {
        console.log('DOM already loaded, initializing immediately');
        initializeLanguageSwitcher();
    }
}

// Add global function for manual testing in console
window.testLanguageSwitcher = function() {
    console.log('=== Manual test of language switcher ===');
    initializeLanguageSwitcher();
    console.log('=== Manual test completed ===');
};

window.switchLanguageManually = function() {
    console.log('=== Manual language switch ===');
    const currentLang = localStorage.getItem('preferredLanguage') || 'en';
    const newLang = currentLang === 'en' ? 'zh' : 'en';
    console.log('Switching from', currentLang, 'to', newLang);
    
    // Test with a simple element first
    const testElement = document.querySelector('.site-header p strong');
    if (testElement) {
        console.log('Before change - Header text:', testElement.textContent);
    }
    
    // Call changeLanguage with the new language
    console.log('Calling changeLanguage(', newLang, ')...');
    changeLanguage(newLang);
    
    // Check if the element was updated
    if (testElement) {
        console.log('After change - Header text:', testElement.textContent);
    }
    
    // Update the language button
    console.log('Calling updateLanguageButton(', newLang, ')...');
    updateLanguageButton(newLang);
    
    console.log('=== Manual language switch completed ===');
};

// Simple test function to verify language switching
window.testLanguageChange = function(lang) {
    console.log('=== Testing language change to:', lang, '===');
    
    // Test with header element
    const headerElement = document.querySelector('.site-header p strong');
    if (headerElement) {
        console.log('Before:', headerElement.textContent);
        headerElement.textContent = translations[lang].welcome;
        console.log('After:', headerElement.textContent);
        console.log('✅ Header element updated successfully');
    } else {
        console.log('❌ Header element not found');
    }
    
    // Test with navigation links
    const navLink = document.querySelector('.navbar-nav .nav-link');
    if (navLink) {
        console.log('Before:', navLink.textContent);
        navLink.textContent = translations[lang].home;
        console.log('After:', navLink.textContent);
        console.log('✅ Navigation link updated successfully');
    } else {
        console.log('❌ Navigation link not found');
    }
    
    console.log('=== Test completed ===');
};

console.log('=== Language switcher setup complete ===');
console.log('You can test manually with:');
console.log('1. testLanguageSwitcher() - to initialize');
console.log('2. switchLanguageManually() - to toggle language');
console.log('3. testLanguageChange("zh") - to test Chinese language');
console.log('4. testLanguageChange("en") - to test English language');
